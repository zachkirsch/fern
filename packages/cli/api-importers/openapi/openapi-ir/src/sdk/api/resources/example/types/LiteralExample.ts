/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../../index";

export type LiteralExample = FernOpenapiIr.LiteralExample.Boolean | FernOpenapiIr.LiteralExample.String;

export namespace LiteralExample {
    export interface Boolean extends _Utils {
        type: "boolean";
        value: boolean;
    }

    export interface String extends _Utils {
        type: "string";
        value: string;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: FernOpenapiIr.LiteralExample._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        boolean: (value: boolean) => _Result;
        string: (value: string) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const LiteralExample = {
    boolean: (value: boolean): FernOpenapiIr.LiteralExample.Boolean => {
        return {
            value: value,
            type: "boolean",
            _visit: function <_Result>(
                this: FernOpenapiIr.LiteralExample.Boolean,
                visitor: FernOpenapiIr.LiteralExample._Visitor<_Result>,
            ) {
                return FernOpenapiIr.LiteralExample._visit(this, visitor);
            },
        };
    },

    string: (value: string): FernOpenapiIr.LiteralExample.String => {
        return {
            value: value,
            type: "string",
            _visit: function <_Result>(
                this: FernOpenapiIr.LiteralExample.String,
                visitor: FernOpenapiIr.LiteralExample._Visitor<_Result>,
            ) {
                return FernOpenapiIr.LiteralExample._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernOpenapiIr.LiteralExample,
        visitor: FernOpenapiIr.LiteralExample._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "boolean":
                return visitor.boolean(value.value);
            case "string":
                return visitor.string(value.value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
