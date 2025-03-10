/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const CodeExecutionUpdate: core.serialization.Schema<
    serializers.CodeExecutionUpdate.Raw,
    SeedTrace.CodeExecutionUpdate
> = core.serialization
    .union("type", {
        buildingExecutor: core.serialization.lazyObject(() => serializers.BuildingExecutorResponse),
        running: core.serialization.lazyObject(() => serializers.RunningResponse),
        errored: core.serialization.lazyObject(() => serializers.ErroredResponse),
        stopped: core.serialization.lazyObject(() => serializers.StoppedResponse),
        graded: core.serialization.lazyObject(() => serializers.GradedResponse),
        gradedV2: core.serialization.lazyObject(() => serializers.GradedResponseV2),
        workspaceRan: core.serialization.lazyObject(() => serializers.WorkspaceRanResponse),
        recording: core.serialization.lazyObject(() => serializers.RecordingResponseNotification),
        recorded: core.serialization.lazyObject(() => serializers.RecordedResponseNotification),
        invalidRequest: core.serialization.lazyObject(() => serializers.InvalidRequestResponse),
        finished: core.serialization.lazyObject(() => serializers.FinishedResponse),
    })
    .transform<SeedTrace.CodeExecutionUpdate>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace CodeExecutionUpdate {
    export type Raw =
        | CodeExecutionUpdate.BuildingExecutor
        | CodeExecutionUpdate.Running
        | CodeExecutionUpdate.Errored
        | CodeExecutionUpdate.Stopped
        | CodeExecutionUpdate.Graded
        | CodeExecutionUpdate.GradedV2
        | CodeExecutionUpdate.WorkspaceRan
        | CodeExecutionUpdate.Recording
        | CodeExecutionUpdate.Recorded
        | CodeExecutionUpdate.InvalidRequest
        | CodeExecutionUpdate.Finished;

    export interface BuildingExecutor extends serializers.BuildingExecutorResponse.Raw {
        type: "buildingExecutor";
    }

    export interface Running extends serializers.RunningResponse.Raw {
        type: "running";
    }

    export interface Errored extends serializers.ErroredResponse.Raw {
        type: "errored";
    }

    export interface Stopped extends serializers.StoppedResponse.Raw {
        type: "stopped";
    }

    export interface Graded extends serializers.GradedResponse.Raw {
        type: "graded";
    }

    export interface GradedV2 extends serializers.GradedResponseV2.Raw {
        type: "gradedV2";
    }

    export interface WorkspaceRan extends serializers.WorkspaceRanResponse.Raw {
        type: "workspaceRan";
    }

    export interface Recording extends serializers.RecordingResponseNotification.Raw {
        type: "recording";
    }

    export interface Recorded extends serializers.RecordedResponseNotification.Raw {
        type: "recorded";
    }

    export interface InvalidRequest extends serializers.InvalidRequestResponse.Raw {
        type: "invalidRequest";
    }

    export interface Finished extends serializers.FinishedResponse.Raw {
        type: "finished";
    }
}
