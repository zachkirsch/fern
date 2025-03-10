/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";

export const WithDocs: core.serialization.ObjectSchema<serializers.WithDocs.Raw, FernIr.WithDocs> =
    core.serialization.objectWithoutOptionalProperties({
        docs: core.serialization.string().optional(),
    });

export declare namespace WithDocs {
    export interface Raw {
        docs?: string | null;
    }
}
