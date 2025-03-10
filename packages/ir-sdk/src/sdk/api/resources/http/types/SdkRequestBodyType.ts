/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

export type SdkRequestBodyType = FernIr.SdkRequestBodyType.TypeReference | FernIr.SdkRequestBodyType.Bytes;

export namespace SdkRequestBodyType {
    export interface TypeReference extends FernIr.HttpRequestBodyReference, _Utils {
        type: "typeReference";
    }

    export interface Bytes extends FernIr.BytesRequest, _Utils {
        type: "bytes";
    }

    export interface _Utils {
        _visit: <_Result>(visitor: FernIr.SdkRequestBodyType._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        typeReference: (value: FernIr.HttpRequestBodyReference) => _Result;
        bytes: (value: FernIr.BytesRequest) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const SdkRequestBodyType = {
    typeReference: (value: FernIr.HttpRequestBodyReference): FernIr.SdkRequestBodyType.TypeReference => {
        return {
            ...value,
            type: "typeReference",
            _visit: function <_Result>(
                this: FernIr.SdkRequestBodyType.TypeReference,
                visitor: FernIr.SdkRequestBodyType._Visitor<_Result>,
            ) {
                return FernIr.SdkRequestBodyType._visit(this, visitor);
            },
        };
    },

    bytes: (value: FernIr.BytesRequest): FernIr.SdkRequestBodyType.Bytes => {
        return {
            ...value,
            type: "bytes",
            _visit: function <_Result>(
                this: FernIr.SdkRequestBodyType.Bytes,
                visitor: FernIr.SdkRequestBodyType._Visitor<_Result>,
            ) {
                return FernIr.SdkRequestBodyType._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernIr.SdkRequestBodyType,
        visitor: FernIr.SdkRequestBodyType._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "typeReference":
                return visitor.typeReference(value);
            case "bytes":
                return visitor.bytes(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
