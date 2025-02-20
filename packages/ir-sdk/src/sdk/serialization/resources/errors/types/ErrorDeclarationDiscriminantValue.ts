/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { NameAndWireValue } from "../../commons/types/NameAndWireValue";

export const ErrorDeclarationDiscriminantValue: core.serialization.Schema<
    serializers.ErrorDeclarationDiscriminantValue.Raw,
    FernIr.ErrorDeclarationDiscriminantValue
> = core.serialization
    .union("type", {
        property: NameAndWireValue,
        statusCode: core.serialization.object({}),
    })
    .transform<FernIr.ErrorDeclarationDiscriminantValue>({
        transform: (value) => {
            switch (value.type) {
                case "property":
                    return FernIr.ErrorDeclarationDiscriminantValue.property(value);
                case "statusCode":
                    return FernIr.ErrorDeclarationDiscriminantValue.statusCode();
                default:
                    return value as FernIr.ErrorDeclarationDiscriminantValue;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace ErrorDeclarationDiscriminantValue {
    export type Raw = ErrorDeclarationDiscriminantValue.Property | ErrorDeclarationDiscriminantValue.StatusCode;

    export interface Property extends NameAndWireValue.Raw {
        type: "property";
    }

    export interface StatusCode {
        type: "statusCode";
    }
}
