import { OpenAPIV3, OpenAPIV3_1 } from "openapi-types";

import { ObjectPropertyAccess, TypeReference } from "@fern-api/ir-sdk";

import { AbstractConverterContext } from "../AbstractConverterContext";

/**
 * Context class for converting OpenAPI 3.1 specifications
 */
export class OpenAPIConverterContext3_1 extends AbstractConverterContext<OpenAPIV3_1.Document> {
    public isReferenceObject(
        parameter:
            | OpenAPIV3_1.ReferenceObject
            | OpenAPIV3_1.ParameterObject
            | OpenAPIV3_1.SchemaObject
            | OpenAPIV3_1.RequestBodyObject
            | OpenAPIV3_1.SecuritySchemeObject
            | OpenAPIV3.ReferenceObject
            | OpenAPIV3.ParameterObject
            | OpenAPIV3.SchemaObject
            | OpenAPIV3.RequestBodyObject
            | OpenAPIV3.SecuritySchemeObject
    ): parameter is OpenAPIV3.ReferenceObject | OpenAPIV3_1.ReferenceObject {
        return "$ref" in parameter;
    }

    public convertReferenceToTypeReference(
        reference: OpenAPIV3_1.ReferenceObject
    ): { ok: true; reference: TypeReference } | { ok: false } {
        const schemaMatch = reference.$ref.match(/\/schemas\/(.+)$/);
        if (!schemaMatch || !schemaMatch[1]) {
            return { ok: false };
        }
        const typeId = schemaMatch[1];

        const resolvedReference = this.resolveReference<OpenAPIV3_1.SchemaObject>(reference);
        if (!resolvedReference.resolved) {
            return { ok: false };
        }
        return {
            ok: true,
            reference: TypeReference.named({
                fernFilepath: {
                    allParts: [],
                    packagePath: [],
                    file: undefined
                },
                name: this.casingsGenerator.generateName(""),
                typeId,
                default: undefined,
                inline: false
            })
        };
    }

    public getPropertyAccess(
        schemaOrReference: OpenAPIV3_1.ReferenceObject | OpenAPIV3_1.SchemaObject
    ): ObjectPropertyAccess | undefined {
        let schema = schemaOrReference;

        // Keep resolving references until we get to a schema object
        while (this.isReferenceObject(schema)) {
            const resolved = this.resolveReference<OpenAPIV3_1.SchemaObject>(schema);
            if (!resolved.resolved) {
                return undefined;
            }
            schema = resolved.value;
        }

        // Now we have the actual schema object
        if (schema.readOnly && schema.writeOnly) {
            // Can't be both readonly and writeonly
            return undefined;
        }

        if (schema.readOnly) {
            return ObjectPropertyAccess.ReadOnly;
        }

        if (schema.writeOnly) {
            return ObjectPropertyAccess.WriteOnly;
        }

        return undefined;
    }
}
