import { CFInteger, CFString, TODO, CFBoolean } from "./core";
declare module './generated/cloudformation-types' {
    namespace AWS.AutoScaling {
        interface AutoScalingGroup extends HasCreationPolicy, HasUpdatePolicy {
        }
    }
    namespace AWS.EC2 {
        interface Instance extends HasCreationPolicy {
        }
    }
    namespace AWS.CloudFormation {
        interface WaitCondition extends HasCreationPolicy {
        }
    }
}
export interface HasCreationPolicy {
    CreationPolicy?: {
        AutoScalingCreationPolicy?: {
            MinSuccessfulInstancesPercent?: CFInteger;
        };
        ResourceSignal?: {
            Count?: CFString;
            Timeout?: CFInteger;
        };
    };
}
export interface HasUpdatePolicy {
    UpdatePolicy?: {
        AutoScalingRollingUpdate?: {
            MaxBatchSize?: CFInteger;
            MinInstancesInService?: CFInteger;
            MinSuccessfulInstancesPercent?: CFInteger;
            PauseTime: CFString;
            SuspendProcesses?: Array<TODO>;
            WaitOnResourceSignals?: CFBoolean;
        };
        AutoScalingReplacingUpdate?: {
            WillReplace?: CFBoolean;
        };
        AutoScalingScheduledAction?: {
            IgnoreUnmodifiedGroupSizeProperties?: CFBoolean;
        };
    };
}
