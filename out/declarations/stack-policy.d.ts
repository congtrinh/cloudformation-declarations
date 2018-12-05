export interface StackPolicy {
    Statement: Array<StackPolicy.Statement>;
}
export declare namespace StackPolicy {
    interface Statement {
        Effect: 'Deny' | 'Allow';
        Action?: Action | Array<Action>;
        NotAction?: Action | Array<Action>;
        Principal: '*';
        Resource?: string | Array<string>;
        NotResource?: string | Array<string>;
        Condition?: {
            StringEquals?: {
                [s: string]: Array<string>;
            };
            StringLike?: {
                [s: string]: Array<string>;
            };
        };
    }
    type Action = 'Update:Modify' | 'Update:Replace' | 'Update:Delete' | 'Update:*';
}
