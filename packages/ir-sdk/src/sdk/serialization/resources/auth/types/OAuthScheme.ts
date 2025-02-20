/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { OAuthConfiguration } from "./OAuthConfiguration";
import { WithDocs } from "../../commons/types/WithDocs";

export const OAuthScheme: core.serialization.ObjectSchema<serializers.OAuthScheme.Raw, FernIr.OAuthScheme> =
    core.serialization
        .objectWithoutOptionalProperties({
            configuration: OAuthConfiguration,
        })
        .extend(WithDocs);

export declare namespace OAuthScheme {
    export interface Raw extends WithDocs.Raw {
        configuration: OAuthConfiguration.Raw;
    }
}
