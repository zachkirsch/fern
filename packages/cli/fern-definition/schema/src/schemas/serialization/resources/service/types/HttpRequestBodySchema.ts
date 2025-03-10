/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { HttpReferencedRequestBodySchema } from "./HttpReferencedRequestBodySchema";
import { HttpInlineRequestBodySchema } from "./HttpInlineRequestBodySchema";

export const HttpRequestBodySchema: core.serialization.Schema<
    serializers.HttpRequestBodySchema.Raw,
    FernDefinition.HttpRequestBodySchema
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    HttpReferencedRequestBodySchema,
    HttpInlineRequestBodySchema,
]);

export declare namespace HttpRequestBodySchema {
    export type Raw = string | HttpReferencedRequestBodySchema.Raw | HttpInlineRequestBodySchema.Raw;
}
