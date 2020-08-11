export namespace req {
    export type Status = {
        [k: string]: unknown;
    } | void;

    export type Initialized = {
        [k: string]: unknown;
    } | void;

    export interface Init {
        secret_shares: number;
        secret_threshold: number;
        pgp_keys?: string[];
        [k: string]: unknown;
    }

    export type Unseal = {
        key?: string;
        reset?: boolean;
        migrate?: boolean;
        secret_shares?: number;
        [k: string]: unknown;
    } | void;

    export type Seal = {
        [k: string]: unknown;
    } | void;

    export type GenerateRootStatus = {
        [k: string]: unknown;
    } | void;

    export type GenerateRootInit = {
        otp?: string;
        pgp_key?: string;
        [k: string]: unknown;
    } | void;

    export type GenerateRootCancel = {
        [k: string]: unknown;
    } | void;

    export interface GenerateRootUpdate {
        key: string;
        nonce: string;
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

    export interface Renew {
        lease_id: string;
        increment?: number;
        [k: string]: unknown;
    }

    export interface Revoke {
        lease_id: string;
        [k: string]: unknown;
    }

    export type RevokePrefix = {
        [k: string]: unknown;
    } | void;

    export type Rotate = {
        [k: string]: unknown;
    } | void;

    export type Unwrap = {
        token?: string;
        [k: string]: unknown;
    } | void;

    export interface GcpLogin {
        role: string;
        jwt: string;
        [k: string]: unknown;
    }

    export interface GithubLogin {
        token: string;
        [k: string]: unknown;
    }

    export interface KubernetesLogin {
        role: string;
        jwt: string;
        [k: string]: unknown;
    }

    export interface UserpassLogin {
        password: string;
        [k: string]: unknown;
    }

    export interface LdapLogin {
        password: string;
        [k: string]: unknown;
    }

    export interface OktaLogin {
        password: string;
        [k: string]: unknown;
    }

    export interface RadiusLogin {
        password: string;
        [k: string]: unknown;
    }

    export type TokenAccessors = {
        [k: string]: unknown;
    } | void;

    export type TokenCreate = {
        id?: string;
        policies?: string[];
        meta?: {
            [k: string]: unknown;
        };
        no_parent?: boolean;
        no_default_policy?: boolean;
        renewable?: boolean;
        ttl?: string;
        explicit_max_ttl?: string;
        display_name?: string;
        num_uses?: number;
        [k: string]: unknown;
    } | void;

    export type TokenCreateOrphan = {
        id?: string;
        policies?: string[];
        meta?: {
            [k: string]: unknown;
        };
        no_parent?: boolean;
        no_default_policy?: boolean;
        renewable?: boolean;
        ttl?: string;
        explicit_max_ttl?: string;
        display_name?: string;
        num_uses?: number;
        [k: string]: unknown;
    } | void;

    export type TokenCreateRole = {
        id?: string;
        policies?: string[];
        meta?: {
            [k: string]: unknown;
        };
        no_parent?: boolean;
        no_default_policy?: boolean;
        renewable?: boolean;
        ttl?: string;
        explicit_max_ttl?: string;
        display_name?: string;
        num_uses?: number;
        [k: string]: unknown;
    } | void;

    export interface TokenLookup {
        token: string;
        [k: string]: unknown;
    }

    export interface TokenLookupAccessor {
        accessor: string;
        [k: string]: unknown;
    }

    export type TokenLookupSelf = {
        [k: string]: unknown;
    } | void;

    export interface TokenRenew {
        token: string;
        increment?: number | string;
        [k: string]: unknown;
    }

    export type TokenRenewSelf = {
        increment?: number | string;
        [k: string]: unknown;
    } | void;

    export interface TokenRevoke {
        token: string;
        [k: string]: unknown;
    }

    export interface TokenRevokeAccessor {
        accessor: string;
        [k: string]: unknown;
    }

    export interface TokenRevokeOrphan {
        token: string;
        [k: string]: unknown;
    }

    export type TokenRevokeSelf = {
        [k: string]: unknown;
    } | void;

    export type TokenRoles = {
        [k: string]: unknown;
    } | void;

    export type AddTokenRole = {
        allowed_policies?: string;
        disallowed_policies?: string;
        orphan?: boolean;
        period?: number;
        renewable?: boolean;
        path_suffix?: string;
        explicit_max_ttl?: number;
        [k: string]: unknown;
    } | void;

    export type GetTokenRole = {
        [k: string]: unknown;
    } | void;

    export type RemoveTokenRole = {
        [k: string]: unknown;
    } | void;

    export type ApproleRoles = {
        [k: string]: unknown;
    } | void;

    export type AddApproleRole = {
        bind_secret_id?: boolean;
        bound_cidr_list?: string;
        policies?: string;
        secret_id_num_uses?: number;
        secret_id_ttl?: number;
        token_num_uses?: number;
        token_ttl?: number;
        token_max_ttl?: number;
        period?: number;
        token_policies?: string[];
        [k: string]: unknown;
    } | void;

    export type GetApproleRole = {
        [k: string]: unknown;
    } | void;

    export type DeleteApproleRole = {
        [k: string]: unknown;
    } | void;

    export type GetApproleRoleId = {
        [k: string]: unknown;
    } | void;

    export interface UpdateApproleRoleId {
        role_id: string;
        [k: string]: unknown;
    }

    export type GetApproleRoleSecret = {
        metadata?: string;
        cidr_list?: string[];
        [k: string]: unknown;
    } | void;

    export type ApproleSecretAccessors = {
        [k: string]: unknown;
    } | void;

    export interface ApproleSecretLookup {
        secret_id: string;
        [k: string]: unknown;
    }

    export interface ApproleSecretDestroy {
        secret_id: string;
        [k: string]: unknown;
    }

    export interface ApproleSecretAccessorLookup {
        secret_id_accessor: string;
        [k: string]: unknown;
    }

    export type ApproleSecretAccessorDestroy = {
        [k: string]: unknown;
    } | void;

    export interface ApproleLogin {
        role_id: string;
        secret_id?: string;
        [k: string]: unknown;
    }

    export type Health = {
        [k: string]: unknown;
    } | void;

    export type Leader = {
        [k: string]: unknown;
    } | void;

    export type StepDown = {
        [k: string]: unknown;
    } | void;
}
