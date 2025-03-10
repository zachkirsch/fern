/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as serializers from "../../../index";
import * as SeedExamples from "../../../../api/index";

const _Base = core.serialization.object({
    extra: core.serialization.record(core.serialization.string(), core.serialization.string()),
    tags: core.serialization.set(core.serialization.string()),
});
export const Metadata: core.serialization.Schema<serializers.Metadata.Raw, SeedExamples.Metadata> = core.serialization
    .union("type", {
        html: core.serialization
            .object({
                value: core.serialization.string(),
            })
            .extend(_Base),
        markdown: core.serialization
            .object({
                value: core.serialization.string(),
            })
            .extend(_Base),
    })
    .transform<SeedExamples.Metadata>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Metadata {
    export type Raw = Metadata.Html | Metadata.Markdown;

    export interface Html extends _Base {
        type: "html";
        value: string;
    }

    export interface Markdown extends _Base {
        type: "markdown";
        value: string;
    }

    export interface _Base {
        extra: Record<string, string>;
        tags: string[];
    }
}
