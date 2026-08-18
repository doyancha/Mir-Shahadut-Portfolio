// Temporary NextAuth v4 compatibility declarations for strict TypeScript.
// Remove this layer once the auth stack no longer reaches these published gaps.

declare module "@auth/core/adapters" {
  export type Awaitable<T> = T | PromiseLike<T>;

  export interface AdapterUser {
    id: string;
    email: string;
    emailVerified: Date | null;
    name?: string | null;
    image?: string | null;
  }

  export interface AdapterAccount {
    provider: string;
    providerAccountId: string;
    userId?: string;
  }

  export interface VerificationToken {
    identifier: string;
    token: string;
    expires: Date;
  }

  export interface Adapter {
    createUser?: (user: Omit<AdapterUser, "id">) => Awaitable<AdapterUser>;
    getUser?: (id: string) => Awaitable<AdapterUser | null>;
    getUserByEmail?: (email: string) => Awaitable<AdapterUser | null>;
    getUserByAccount?: (
      providerAccountId: Pick<AdapterAccount, "provider" | "providerAccountId">
    ) => Awaitable<AdapterUser | null>;
    updateUser?: (user: Partial<AdapterUser> & Pick<AdapterUser, "id">) => Awaitable<AdapterUser>;
    deleteUser?: (userId: string) => Awaitable<void>;
    linkAccount?: (account: AdapterAccount) => Awaitable<void>;
    unlinkAccount?: (
      providerAccountId: Pick<AdapterAccount, "provider" | "providerAccountId">
    ) => Awaitable<void>;
    createSession?: (session: {
      sessionToken: string;
      userId: string;
      expires: Date;
    }) => Awaitable<{
      sessionToken: string;
      userId: string;
      expires: Date;
    }>;
    getSessionAndUser?: (sessionToken: string) => Awaitable<
      | {
          session: {
            sessionToken: string;
            userId: string;
            expires: Date;
          };
          user: AdapterUser;
        }
      | null
    >;
    updateSession?: (session: {
      sessionToken: string;
      userId?: string;
      expires?: Date;
    }) => Awaitable<{
      sessionToken: string;
      userId?: string;
      expires?: Date;
    } | null>;
    deleteSession?: (sessionToken: string) => Awaitable<void>;
    createVerificationToken?: (verificationToken: VerificationToken) => Awaitable<VerificationToken | null>;
    useVerificationToken?: (params: {
      identifier: string;
      token: string;
    }) => Awaitable<VerificationToken | null>;
  }
}

declare module "cookie" {
  export interface CookieSerializeOptions {
    domain?: string;
    encode?: (value: string) => string;
    expires?: Date;
    httpOnly?: boolean;
    maxAge?: number;
    path?: string;
    priority?: "low" | "medium" | "high";
    sameSite?: boolean | "lax" | "strict" | "none";
    secure?: boolean;
    partitioned?: boolean;
  }
}

declare module "nodemailer" {
  export interface TransportOptions {
    [key: string]: unknown;
  }

  export interface SendMailOptions {
    from?: string;
    to?: string | string[];
    subject?: string;
    text?: string;
    html?: string;
  }

  export interface SentMessageInfo {
    envelope?: {
      from?: string;
      to?: string[];
    };
    messageId?: string;
    accepted?: string[];
    rejected?: string[];
    response?: string;
  }

  export interface Transport<TOptions extends TransportOptions = TransportOptions> {
    sendMail: (
      mail: SendMailOptions,
      callback?: (err: Error | null, info: SentMessageInfo) => void
    ) => Promise<SentMessageInfo> | void;
    close?: () => void;
    options?: TOptions;
  }
}

declare module "nodemailer/lib/json-transport/index.js" {
  class JSONTransport {
    constructor(options?: JSONTransport.Options);
  }

  namespace JSONTransport {
    interface Options {
      jsonTransport?: boolean;
    }
  }

  export = JSONTransport;
}

declare module "nodemailer/lib/sendmail-transport/index.js" {
  class SendmailTransport {
    constructor(options?: SendmailTransport.Options);
  }

  namespace SendmailTransport {
    interface Options {
      path?: string;
      args?: readonly string[];
    }
  }

  export = SendmailTransport;
}

declare module "nodemailer/lib/ses-transport/index.js" {
  class SESTransport {
    constructor(options?: SESTransport.Options);
  }

  namespace SESTransport {
    interface Options {
      ses?: {
        sendEmail?: (...args: readonly unknown[]) => unknown;
      };
    }
  }

  export = SESTransport;
}

declare module "nodemailer/lib/smtp-pool/index.js" {
  class SMTPPool {
    constructor(options?: SMTPPool.Options);
  }

  namespace SMTPPool {
    interface Options {
      pool?: boolean;
      maxConnections?: number;
      maxMessages?: number;
    }
  }

  export = SMTPPool;
}

declare module "nodemailer/lib/smtp-transport/index.js" {
  class SMTPTransport {
    constructor(options?: SMTPTransport.Options);
  }

  namespace SMTPTransport {
    interface Options {
      host?: string;
      port?: number;
      secure?: boolean;
    }
  }

  export = SMTPTransport;
}

declare module "nodemailer/lib/stream-transport/index.js" {
  class StreamTransport {
    constructor(options?: StreamTransport.Options);
  }

  namespace StreamTransport {
    interface Options {
      buffer?: boolean;
      newline?: "unix" | "windows";
    }
  }

  export = StreamTransport;
}
