export namespace res {
    export interface Status {
        sealed: boolean;
        t: number;
        n: number;
        progress: number;
        [k: string]: unknown;
    }

    export type Initialized = {
        [k: string]: unknown;
    } | void;

    export interface Init {
        keys: string[];
        root_token: string;
        [k: string]: unknown;
    }

    export interface Unseal {
        sealed: boolean;
        t: number;
        n: number;
        progress: number;
        [k: string]: unknown;
    }

    export type Seal = {
        [k: string]: unknown;
    } | void;

    export interface GenerateRootStatus {
        started: boolean;
        nonce: string;
        progress: number;
        required: number;
        pgp_fingerprint: string;
        complete: boolean;
        [k: string]: unknown;
    }

    export interface GenerateRootInit {
        started: boolean;
        nonce: string;
        progress: number;
        required: number;
        pgp_fingerprint: string;
        complete: boolean;
        [k: string]: unknown;
    }

    export type GenerateRootCancel = {
        [k: string]: unknown;
    } | void;

    export interface GenerateRootUpdate {
        started: boolean;
        nonce: string;
        progress: number;
        required: number;
        pgp_fingerprint: string;
        complete: boolean;
        encoded_root_token?: string;
        [k: string]: unknown;
    }

    export type Mounts = {
        [k: string]: unknown;
    } | void;

    export type Mount = {
        [k: string]: unknown;
    } | void;

    export type EncryptData = {
        [k: string]: unknown;
    } | void;

    export type DecryptData = {
        [k: string]: unknown;
    } | void;

    export type GenerateDatabaseCredentials = {
        [k: string]: unknown;
    } | void;

    export type Unmount = {
        [k: string]: unknown;
    } | void;

    export type Remount = {
        [k: string]: unknown;
    } | void;

    export type Policies = {
        [k: string]: unknown;
    } | void;

    export type AddPolicy = {
        [k: string]: unknown;
    } | void;

    export type GetPolicy = {
        [k: string]: unknown;
    } | void;

    export type RemovePolicy = {
        [k: string]: unknown;
    } | void;

    export type Auths = {
        [k: string]: unknown;
    } | void;

    export type EnableAuth = {
        [k: string]: unknown;
    } | void;

    export type DisableAuth = {
        [k: string]: unknown;
    } | void;

    export type Audits = {
        [k: string]: unknown;
    } | void;

    export type EnableAudit = {
        [k: string]: unknown;
    } | void;

    export type DisableAudit = {
        [k: string]: unknown;
    } | void;

    export type Renew = {
        lease_id?: string;
        renewable?: boolean;
        lease_duration?: number;
        [k: string]: unknown;
    } | void;

    export type Revoke = {
        [k: string]: unknown;
    } | void;

    export type RevokePrefix = {
        [k: string]: unknown;
    } | void;

    export type Rotate = {
        [k: string]: unknown;
    } | void;

    export type Unwrap = {
        [k: string]: unknown;
    } | void;

    export interface GcpLogin {
        auth: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export interface GithubLogin {
        auth: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export interface KubernetesLogin {
        auth: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export interface UserpassLogin {
        auth: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export interface LdapLogin {
        auth: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export interface OktaLogin {
        auth: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export interface RadiusLogin {
        auth: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export interface TokenAccessors {
        data: {
            keys?: string[];
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export interface TokenCreate {
        auth: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export interface TokenCreateOrphan {
        auth: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export interface TokenCreateRole {
        auth: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export interface TokenLookup {
        data: {
            id?: string;
            policies?: string[];
            path?: string;
            meta?: {
                [k: string]: unknown;
            };
            display_name?: string;
            num_uses?: number;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export interface TokenLookupAccessor {
        data: {
            id?: string;
            policies?: string[];
            path?: string;
            meta?: {
                [k: string]: unknown;
            };
            display_name?: string;
            num_uses?: number;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export interface TokenLookupSelf {
        data: {
            id?: string;
            policies?: string[];
            path?: string;
            meta?: {
                [k: string]: unknown;
            };
            display_name?: string;
            num_uses?: number;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export interface TokenRenew {
        auth: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export interface TokenRenewSelf {
        auth: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export type TokenRevoke = {
        [k: string]: unknown;
    } | void;

    export type TokenRevokeAccessor = {
        [k: string]: unknown;
    } | void;

    export type TokenRevokeOrphan = {
        [k: string]: unknown;
    } | void;

    export type TokenRevokeSelf = {
        [k: string]: unknown;
    } | void;

    export interface TokenRoles {
        data: {
            keys?: string[];
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }

    export type AddTokenRole = {
        [k: string]: unknown;
    } | void;

    export type GetTokenRole = {
        [k: string]: unknown;
    } | void;

    export type RemoveTokenRole = {
        [k: string]: unknown;
    } | void;

    export type ApproleRoles = {
        auth?: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        warnings?: string;
        wrap_info?: string;
        data?: {
            [k: string]: unknown;
        };
        lease_duration?: number;
        renewable?: boolean;
        lease_id?: string;
        [k: string]: unknown;
    } | void;

    export type AddApproleRole = {
        [k: string]: unknown;
    } | void;

    export type GetApproleRole = {
        auth?: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        warnings?: string;
        wrap_info?: string;
        data?: {
            [k: string]: unknown;
        };
        lease_duration?: number;
        renewable?: boolean;
        lease_id?: string;
        [k: string]: unknown;
    } | void;

    export type DeleteApproleRole = {
        [k: string]: unknown;
    } | void;

    export type GetApproleRoleId = {
        auth?: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        warnings?: string;
        wrap_info?: string;
        data?: {
            [k: string]: unknown;
        };
        lease_duration?: number;
        renewable?: boolean;
        lease_id?: string;
        [k: string]: unknown;
    } | void;

    export type UpdateApproleRoleId = {
        [k: string]: unknown;
    } | void;

    export type GetApproleRoleSecret = {
        auth?: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        warnings?: string;
        wrap_info?: string;
        data?: {
            [k: string]: unknown;
        };
        lease_duration?: number;
        renewable?: boolean;
        lease_id?: string;
        [k: string]: unknown;
    } | void;

    export type ApproleSecretAccessors = {
        auth?: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        warnings?: string;
        wrap_info?: string;
        data?: {
            [k: string]: unknown;
        };
        lease_duration?: number;
        renewable?: boolean;
        lease_id?: string;
        [k: string]: unknown;
    } | void;

    export type ApproleSecretLookup = {
        auth?: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        warnings?: string;
        wrap_info?: string;
        data?: {
            [k: string]: unknown;
        };
        lease_duration?: number;
        renewable?: boolean;
        lease_id?: string;
        [k: string]: unknown;
    } | void;

    export type ApproleSecretDestroy = {
        [k: string]: unknown;
    } | void;

    export type ApproleSecretAccessorLookup = {
        [k: string]: unknown;
    } | void;

    export type ApproleSecretAccessorDestroy = {
        [k: string]: unknown;
    } | void;

    export type ApproleLogin = {
        auth?: {
            client_token?: string;
            policies?: string[];
            metadata?: {
                [k: string]: unknown;
            };
            lease_duration?: number;
            renewable?: boolean;
            [k: string]: unknown;
        };
        warnings?: string;
        wrap_info?: string;
        data?: {
            [k: string]: unknown;
        };
        lease_duration?: number;
        renewable?: boolean;
        lease_id?: string;
        [k: string]: unknown;
    } | void;

    export type Health = {
        cluster_id?: string;
        cluster_name?: string;
        version?: string;
        server_time_utc?: number;
        standby?: boolean;
        sealed?: boolean;
        initialized?: boolean;
        [k: string]: unknown;
    } | void;

    export type Leader = {
        ha_enabled?: boolean;
        is_self?: boolean;
        leader_address?: string;
        [k: string]: unknown;
    } | void;

    export type StepDown = {
        [k: string]: unknown;
    } | void;
}
