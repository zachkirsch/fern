/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { DeclaredTypeName } from "./DeclaredTypeName";
import { SingleUnionTypeProperty } from "./SingleUnionTypeProperty";

export const SingleUnionTypeProperties: core.serialization.Schema<
    serializers.SingleUnionTypeProperties.Raw,
    FernIr.SingleUnionTypeProperties
> = core.serialization
    .union(core.serialization.discriminant("propertiesType", "_type"), {
        samePropertiesAsObject: DeclaredTypeName,
        singleProperty: SingleUnionTypeProperty,
        noProperties: core.serialization.object({}),
    })
    .transform<FernIr.SingleUnionTypeProperties>({
        transform: (value) => {
            switch (value.propertiesType) {
                case "samePropertiesAsObject":
                    return FernIr.SingleUnionTypeProperties.samePropertiesAsObject(value);
                case "singleProperty":
                    return FernIr.SingleUnionTypeProperties.singleProperty(value);
                case "noProperties":
                    return FernIr.SingleUnionTypeProperties.noProperties();
                default:
                    return value as FernIr.SingleUnionTypeProperties;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace SingleUnionTypeProperties {
    export type Raw =
        | SingleUnionTypeProperties.SamePropertiesAsObject
        | SingleUnionTypeProperties.SingleProperty
        | SingleUnionTypeProperties.NoProperties;

    export interface SamePropertiesAsObject extends DeclaredTypeName.Raw {
        _type: "samePropertiesAsObject";
    }

    export interface SingleProperty extends SingleUnionTypeProperty.Raw {
        _type: "singleProperty";
    }

    export interface NoProperties {
        _type: "noProperties";
    }
}
