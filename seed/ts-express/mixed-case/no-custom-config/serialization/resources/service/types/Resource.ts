/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as core from "../../../../core";
import * as SeedMixedCase from "../../../../api/index";

const _Base = core.serialization.object({
    status: core.serialization.lazy(() => serializers.ResourceStatus),
});
export const Resource: core.serialization.Schema<serializers.Resource.Raw, SeedMixedCase.Resource> = core.serialization
    .union(core.serialization.discriminant("resourceType", "resource_type"), {
        user: core.serialization.lazyObject(() => serializers.User).extend(_Base),
        Organization: core.serialization.lazyObject(() => serializers.Organization).extend(_Base),
    })
    .transform<SeedMixedCase.Resource>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Resource {
    export type Raw = Resource.User | Resource.Organization;

    export interface User extends _Base, serializers.User.Raw {
        resource_type: "user";
    }

    export interface Organization extends _Base, serializers.Organization.Raw {
        resource_type: "Organization";
    }

    export interface _Base {
        status: serializers.ResourceStatus.Raw;
    }
}
