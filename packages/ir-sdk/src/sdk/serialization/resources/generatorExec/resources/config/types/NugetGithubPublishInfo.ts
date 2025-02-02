/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernIr from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EnvironmentVariable } from "./EnvironmentVariable";

export const NugetGithubPublishInfo: core.serialization.ObjectSchema<
    serializers.generatorExec.NugetGithubPublishInfo.Raw,
    FernIr.generatorExec.NugetGithubPublishInfo
> = core.serialization.objectWithoutOptionalProperties({
    registryUrl: core.serialization.string(),
    packageName: core.serialization.string(),
    apiKeyEnvironmentVariable: EnvironmentVariable,
    shouldGeneratePublishWorkflow: core.serialization.boolean().optional(),
});

export declare namespace NugetGithubPublishInfo {
    export interface Raw {
        registryUrl: string;
        packageName: string;
        apiKeyEnvironmentVariable: EnvironmentVariable.Raw;
        shouldGeneratePublishWorkflow?: boolean | null;
    }
}
