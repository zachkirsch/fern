/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedPagination from "../../../../api/index";
import * as core from "../../../../core";

export const SingleFilterSearchRequest: core.serialization.ObjectSchema<
    serializers.SingleFilterSearchRequest.Raw,
    SeedPagination.SingleFilterSearchRequest
> = core.serialization.object({
    field: core.serialization.string().optional(),
    operator: core.serialization.lazy(() => serializers.SingleFilterSearchRequestOperator).optional(),
    value: core.serialization.string().optional(),
});

export declare namespace SingleFilterSearchRequest {
    export interface Raw {
        field?: string | null;
        operator?: serializers.SingleFilterSearchRequestOperator.Raw | null;
        value?: string | null;
    }
}
