
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Authentication
 * 
 */
export type Authentication = $Result.DefaultSelection<Prisma.$AuthenticationPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model WheelSpin
 * 
 */
export type WheelSpin = $Result.DefaultSelection<Prisma.$WheelSpinPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authentications
 * const authentications = await prisma.authentication.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Authentications
   * const authentications = await prisma.authentication.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.authentication`: Exposes CRUD operations for the **Authentication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authentications
    * const authentications = await prisma.authentication.findMany()
    * ```
    */
  get authentication(): Prisma.AuthenticationDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.wheelSpin`: Exposes CRUD operations for the **WheelSpin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WheelSpins
    * const wheelSpins = await prisma.wheelSpin.findMany()
    * ```
    */
  get wheelSpin(): Prisma.WheelSpinDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Authentication: 'Authentication',
    Comment: 'Comment',
    WheelSpin: 'WheelSpin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'authentication' | 'comment' | 'wheelSpin'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Authentication: {
        payload: Prisma.$AuthenticationPayload<ExtArgs>
        fields: Prisma.AuthenticationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthenticationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthenticationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthenticationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthenticationPayload>
          }
          findFirst: {
            args: Prisma.AuthenticationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthenticationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthenticationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthenticationPayload>
          }
          findMany: {
            args: Prisma.AuthenticationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthenticationPayload>[]
          }
          create: {
            args: Prisma.AuthenticationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthenticationPayload>
          }
          createMany: {
            args: Prisma.AuthenticationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AuthenticationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthenticationPayload>
          }
          update: {
            args: Prisma.AuthenticationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthenticationPayload>
          }
          deleteMany: {
            args: Prisma.AuthenticationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AuthenticationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AuthenticationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthenticationPayload>
          }
          aggregate: {
            args: Prisma.AuthenticationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuthentication>
          }
          groupBy: {
            args: Prisma.AuthenticationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuthenticationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthenticationCountArgs<ExtArgs>,
            result: $Utils.Optional<AuthenticationCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      WheelSpin: {
        payload: Prisma.$WheelSpinPayload<ExtArgs>
        fields: Prisma.WheelSpinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WheelSpinFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelSpinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WheelSpinFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelSpinPayload>
          }
          findFirst: {
            args: Prisma.WheelSpinFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelSpinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WheelSpinFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelSpinPayload>
          }
          findMany: {
            args: Prisma.WheelSpinFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelSpinPayload>[]
          }
          create: {
            args: Prisma.WheelSpinCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelSpinPayload>
          }
          createMany: {
            args: Prisma.WheelSpinCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WheelSpinDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelSpinPayload>
          }
          update: {
            args: Prisma.WheelSpinUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelSpinPayload>
          }
          deleteMany: {
            args: Prisma.WheelSpinDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WheelSpinUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WheelSpinUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WheelSpinPayload>
          }
          aggregate: {
            args: Prisma.WheelSpinAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWheelSpin>
          }
          groupBy: {
            args: Prisma.WheelSpinGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WheelSpinGroupByOutputType>[]
          }
          count: {
            args: Prisma.WheelSpinCountArgs<ExtArgs>,
            result: $Utils.Optional<WheelSpinCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuthenticationCountOutputType
   */

  export type AuthenticationCountOutputType = {
    comment: number
    wheelspin: number
  }

  export type AuthenticationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | AuthenticationCountOutputTypeCountCommentArgs
    wheelspin?: boolean | AuthenticationCountOutputTypeCountWheelspinArgs
  }

  // Custom InputTypes

  /**
   * AuthenticationCountOutputType without action
   */
  export type AuthenticationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticationCountOutputType
     */
    select?: AuthenticationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AuthenticationCountOutputType without action
   */
  export type AuthenticationCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * AuthenticationCountOutputType without action
   */
  export type AuthenticationCountOutputTypeCountWheelspinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WheelSpinWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Authentication
   */

  export type AggregateAuthentication = {
    _count: AuthenticationCountAggregateOutputType | null
    _min: AuthenticationMinAggregateOutputType | null
    _max: AuthenticationMaxAggregateOutputType | null
  }

  export type AuthenticationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthenticationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthenticationCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthenticationMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthenticationMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthenticationCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthenticationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authentication to aggregate.
     */
    where?: AuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentications to fetch.
     */
    orderBy?: AuthenticationOrderByWithRelationInput | AuthenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authentications
    **/
    _count?: true | AuthenticationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthenticationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthenticationMaxAggregateInputType
  }

  export type GetAuthenticationAggregateType<T extends AuthenticationAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthentication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthentication[P]>
      : GetScalarType<T[P], AggregateAuthentication[P]>
  }




  export type AuthenticationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticationWhereInput
    orderBy?: AuthenticationOrderByWithAggregationInput | AuthenticationOrderByWithAggregationInput[]
    by: AuthenticationScalarFieldEnum[] | AuthenticationScalarFieldEnum
    having?: AuthenticationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthenticationCountAggregateInputType | true
    _min?: AuthenticationMinAggregateInputType
    _max?: AuthenticationMaxAggregateInputType
  }

  export type AuthenticationGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: AuthenticationCountAggregateOutputType | null
    _min: AuthenticationMinAggregateOutputType | null
    _max: AuthenticationMaxAggregateOutputType | null
  }

  type GetAuthenticationGroupByPayload<T extends AuthenticationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthenticationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthenticationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthenticationGroupByOutputType[P]>
            : GetScalarType<T[P], AuthenticationGroupByOutputType[P]>
        }
      >
    >


  export type AuthenticationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comment?: boolean | Authentication$commentArgs<ExtArgs>
    wheelspin?: boolean | Authentication$wheelspinArgs<ExtArgs>
    _count?: boolean | AuthenticationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authentication"]>

  export type AuthenticationSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthenticationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | Authentication$commentArgs<ExtArgs>
    wheelspin?: boolean | Authentication$wheelspinArgs<ExtArgs>
    _count?: boolean | AuthenticationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AuthenticationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Authentication"
    objects: {
      comment: Prisma.$CommentPayload<ExtArgs>[]
      wheelspin: Prisma.$WheelSpinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["authentication"]>
    composites: {}
  }


  type AuthenticationGetPayload<S extends boolean | null | undefined | AuthenticationDefaultArgs> = $Result.GetResult<Prisma.$AuthenticationPayload, S>

  type AuthenticationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuthenticationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AuthenticationCountAggregateInputType | true
    }

  export interface AuthenticationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Authentication'], meta: { name: 'Authentication' } }
    /**
     * Find zero or one Authentication that matches the filter.
     * @param {AuthenticationFindUniqueArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthenticationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AuthenticationFindUniqueArgs<ExtArgs>>
    ): Prisma__AuthenticationClient<$Result.GetResult<Prisma.$AuthenticationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Authentication that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AuthenticationFindUniqueOrThrowArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuthenticationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthenticationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuthenticationClient<$Result.GetResult<Prisma.$AuthenticationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Authentication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationFindFirstArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthenticationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthenticationFindFirstArgs<ExtArgs>>
    ): Prisma__AuthenticationClient<$Result.GetResult<Prisma.$AuthenticationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Authentication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationFindFirstOrThrowArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuthenticationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthenticationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuthenticationClient<$Result.GetResult<Prisma.$AuthenticationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Authentications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authentications
     * const authentications = await prisma.authentication.findMany()
     * 
     * // Get first 10 Authentications
     * const authentications = await prisma.authentication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authenticationWithIdOnly = await prisma.authentication.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuthenticationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthenticationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Authentication.
     * @param {AuthenticationCreateArgs} args - Arguments to create a Authentication.
     * @example
     * // Create one Authentication
     * const Authentication = await prisma.authentication.create({
     *   data: {
     *     // ... data to create a Authentication
     *   }
     * })
     * 
    **/
    create<T extends AuthenticationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthenticationCreateArgs<ExtArgs>>
    ): Prisma__AuthenticationClient<$Result.GetResult<Prisma.$AuthenticationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Authentications.
     *     @param {AuthenticationCreateManyArgs} args - Arguments to create many Authentications.
     *     @example
     *     // Create many Authentications
     *     const authentication = await prisma.authentication.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthenticationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthenticationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Authentication.
     * @param {AuthenticationDeleteArgs} args - Arguments to delete one Authentication.
     * @example
     * // Delete one Authentication
     * const Authentication = await prisma.authentication.delete({
     *   where: {
     *     // ... filter to delete one Authentication
     *   }
     * })
     * 
    **/
    delete<T extends AuthenticationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AuthenticationDeleteArgs<ExtArgs>>
    ): Prisma__AuthenticationClient<$Result.GetResult<Prisma.$AuthenticationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Authentication.
     * @param {AuthenticationUpdateArgs} args - Arguments to update one Authentication.
     * @example
     * // Update one Authentication
     * const authentication = await prisma.authentication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthenticationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthenticationUpdateArgs<ExtArgs>>
    ): Prisma__AuthenticationClient<$Result.GetResult<Prisma.$AuthenticationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Authentications.
     * @param {AuthenticationDeleteManyArgs} args - Arguments to filter Authentications to delete.
     * @example
     * // Delete a few Authentications
     * const { count } = await prisma.authentication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthenticationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthenticationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authentications
     * const authentication = await prisma.authentication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthenticationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AuthenticationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Authentication.
     * @param {AuthenticationUpsertArgs} args - Arguments to update or create a Authentication.
     * @example
     * // Update or create a Authentication
     * const authentication = await prisma.authentication.upsert({
     *   create: {
     *     // ... data to create a Authentication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authentication we want to update
     *   }
     * })
    **/
    upsert<T extends AuthenticationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AuthenticationUpsertArgs<ExtArgs>>
    ): Prisma__AuthenticationClient<$Result.GetResult<Prisma.$AuthenticationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationCountArgs} args - Arguments to filter Authentications to count.
     * @example
     * // Count the number of Authentications
     * const count = await prisma.authentication.count({
     *   where: {
     *     // ... the filter for the Authentications we want to count
     *   }
     * })
    **/
    count<T extends AuthenticationCountArgs>(
      args?: Subset<T, AuthenticationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthenticationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authentication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthenticationAggregateArgs>(args: Subset<T, AuthenticationAggregateArgs>): Prisma.PrismaPromise<GetAuthenticationAggregateType<T>>

    /**
     * Group by Authentication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthenticationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthenticationGroupByArgs['orderBy'] }
        : { orderBy?: AuthenticationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthenticationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Authentication model
   */
  readonly fields: AuthenticationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authentication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthenticationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comment<T extends Authentication$commentArgs<ExtArgs> = {}>(args?: Subset<T, Authentication$commentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    wheelspin<T extends Authentication$wheelspinArgs<ExtArgs> = {}>(args?: Subset<T, Authentication$wheelspinArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WheelSpinPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Authentication model
   */ 
  interface AuthenticationFieldRefs {
    readonly id: FieldRef<"Authentication", 'String'>
    readonly userId: FieldRef<"Authentication", 'String'>
    readonly createdAt: FieldRef<"Authentication", 'DateTime'>
    readonly updatedAt: FieldRef<"Authentication", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Authentication findUnique
   */
  export type AuthenticationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude<ExtArgs> | null
    /**
     * Filter, which Authentication to fetch.
     */
    where: AuthenticationWhereUniqueInput
  }


  /**
   * Authentication findUniqueOrThrow
   */
  export type AuthenticationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude<ExtArgs> | null
    /**
     * Filter, which Authentication to fetch.
     */
    where: AuthenticationWhereUniqueInput
  }


  /**
   * Authentication findFirst
   */
  export type AuthenticationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude<ExtArgs> | null
    /**
     * Filter, which Authentication to fetch.
     */
    where?: AuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentications to fetch.
     */
    orderBy?: AuthenticationOrderByWithRelationInput | AuthenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authentications.
     */
    cursor?: AuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authentications.
     */
    distinct?: AuthenticationScalarFieldEnum | AuthenticationScalarFieldEnum[]
  }


  /**
   * Authentication findFirstOrThrow
   */
  export type AuthenticationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude<ExtArgs> | null
    /**
     * Filter, which Authentication to fetch.
     */
    where?: AuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentications to fetch.
     */
    orderBy?: AuthenticationOrderByWithRelationInput | AuthenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authentications.
     */
    cursor?: AuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authentications.
     */
    distinct?: AuthenticationScalarFieldEnum | AuthenticationScalarFieldEnum[]
  }


  /**
   * Authentication findMany
   */
  export type AuthenticationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude<ExtArgs> | null
    /**
     * Filter, which Authentications to fetch.
     */
    where?: AuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentications to fetch.
     */
    orderBy?: AuthenticationOrderByWithRelationInput | AuthenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authentications.
     */
    cursor?: AuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentications.
     */
    skip?: number
    distinct?: AuthenticationScalarFieldEnum | AuthenticationScalarFieldEnum[]
  }


  /**
   * Authentication create
   */
  export type AuthenticationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude<ExtArgs> | null
    /**
     * The data needed to create a Authentication.
     */
    data: XOR<AuthenticationCreateInput, AuthenticationUncheckedCreateInput>
  }


  /**
   * Authentication createMany
   */
  export type AuthenticationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authentications.
     */
    data: AuthenticationCreateManyInput | AuthenticationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Authentication update
   */
  export type AuthenticationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude<ExtArgs> | null
    /**
     * The data needed to update a Authentication.
     */
    data: XOR<AuthenticationUpdateInput, AuthenticationUncheckedUpdateInput>
    /**
     * Choose, which Authentication to update.
     */
    where: AuthenticationWhereUniqueInput
  }


  /**
   * Authentication updateMany
   */
  export type AuthenticationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authentications.
     */
    data: XOR<AuthenticationUpdateManyMutationInput, AuthenticationUncheckedUpdateManyInput>
    /**
     * Filter which Authentications to update
     */
    where?: AuthenticationWhereInput
  }


  /**
   * Authentication upsert
   */
  export type AuthenticationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude<ExtArgs> | null
    /**
     * The filter to search for the Authentication to update in case it exists.
     */
    where: AuthenticationWhereUniqueInput
    /**
     * In case the Authentication found by the `where` argument doesn't exist, create a new Authentication with this data.
     */
    create: XOR<AuthenticationCreateInput, AuthenticationUncheckedCreateInput>
    /**
     * In case the Authentication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthenticationUpdateInput, AuthenticationUncheckedUpdateInput>
  }


  /**
   * Authentication delete
   */
  export type AuthenticationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude<ExtArgs> | null
    /**
     * Filter which Authentication to delete.
     */
    where: AuthenticationWhereUniqueInput
  }


  /**
   * Authentication deleteMany
   */
  export type AuthenticationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authentications to delete
     */
    where?: AuthenticationWhereInput
  }


  /**
   * Authentication.comment
   */
  export type Authentication$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Authentication.wheelspin
   */
  export type Authentication$wheelspinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WheelSpin
     */
    select?: WheelSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelSpinInclude<ExtArgs> | null
    where?: WheelSpinWhereInput
    orderBy?: WheelSpinOrderByWithRelationInput | WheelSpinOrderByWithRelationInput[]
    cursor?: WheelSpinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WheelSpinScalarFieldEnum | WheelSpinScalarFieldEnum[]
  }


  /**
   * Authentication without action
   */
  export type AuthenticationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude<ExtArgs> | null
  }



  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    rating: number | null
  }

  export type CommentSumAggregateOutputType = {
    rating: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    authenticationId: string | null
    rating: number | null
    comment: string | null
    commenter: string | null
    imageUrl: string | null
    nameproduct: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    authenticationId: string | null
    rating: number | null
    comment: string | null
    commenter: string | null
    imageUrl: string | null
    nameproduct: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    authenticationId: number
    rating: number
    comment: number
    commenter: number
    imageUrl: number
    nameproduct: number
    createdAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    rating?: true
  }

  export type CommentSumAggregateInputType = {
    rating?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    authenticationId?: true
    rating?: true
    comment?: true
    commenter?: true
    imageUrl?: true
    nameproduct?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    authenticationId?: true
    rating?: true
    comment?: true
    commenter?: true
    imageUrl?: true
    nameproduct?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    authenticationId?: true
    rating?: true
    comment?: true
    commenter?: true
    imageUrl?: true
    nameproduct?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    authenticationId: string
    rating: number
    comment: string
    commenter: string
    imageUrl: string
    nameproduct: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authenticationId?: boolean
    rating?: boolean
    comment?: boolean
    commenter?: boolean
    imageUrl?: boolean
    nameproduct?: boolean
    createdAt?: boolean
    authentication?: boolean | AuthenticationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    authenticationId?: boolean
    rating?: boolean
    comment?: boolean
    commenter?: boolean
    imageUrl?: boolean
    nameproduct?: boolean
    createdAt?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authentication?: boolean | AuthenticationDefaultArgs<ExtArgs>
  }


  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      authentication: Prisma.$AuthenticationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authenticationId: string
      rating: number
      comment: string
      commenter: string
      imageUrl: string
      nameproduct: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }


  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    authentication<T extends AuthenticationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthenticationDefaultArgs<ExtArgs>>): Prisma__AuthenticationClient<$Result.GetResult<Prisma.$AuthenticationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly authenticationId: FieldRef<"Comment", 'String'>
    readonly rating: FieldRef<"Comment", 'Int'>
    readonly comment: FieldRef<"Comment", 'String'>
    readonly commenter: FieldRef<"Comment", 'String'>
    readonly imageUrl: FieldRef<"Comment", 'String'>
    readonly nameproduct: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
  }



  /**
   * Model WheelSpin
   */

  export type AggregateWheelSpin = {
    _count: WheelSpinCountAggregateOutputType | null
    _avg: WheelSpinAvgAggregateOutputType | null
    _sum: WheelSpinSumAggregateOutputType | null
    _min: WheelSpinMinAggregateOutputType | null
    _max: WheelSpinMaxAggregateOutputType | null
  }

  export type WheelSpinAvgAggregateOutputType = {
    rotation: number | null
  }

  export type WheelSpinSumAggregateOutputType = {
    rotation: number | null
  }

  export type WheelSpinMinAggregateOutputType = {
    id: string | null
    authenticationId: string | null
    coin: string | null
    rotation: number | null
    createdAt: Date | null
  }

  export type WheelSpinMaxAggregateOutputType = {
    id: string | null
    authenticationId: string | null
    coin: string | null
    rotation: number | null
    createdAt: Date | null
  }

  export type WheelSpinCountAggregateOutputType = {
    id: number
    authenticationId: number
    coin: number
    rotation: number
    createdAt: number
    _all: number
  }


  export type WheelSpinAvgAggregateInputType = {
    rotation?: true
  }

  export type WheelSpinSumAggregateInputType = {
    rotation?: true
  }

  export type WheelSpinMinAggregateInputType = {
    id?: true
    authenticationId?: true
    coin?: true
    rotation?: true
    createdAt?: true
  }

  export type WheelSpinMaxAggregateInputType = {
    id?: true
    authenticationId?: true
    coin?: true
    rotation?: true
    createdAt?: true
  }

  export type WheelSpinCountAggregateInputType = {
    id?: true
    authenticationId?: true
    coin?: true
    rotation?: true
    createdAt?: true
    _all?: true
  }

  export type WheelSpinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WheelSpin to aggregate.
     */
    where?: WheelSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WheelSpins to fetch.
     */
    orderBy?: WheelSpinOrderByWithRelationInput | WheelSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WheelSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WheelSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WheelSpins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WheelSpins
    **/
    _count?: true | WheelSpinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WheelSpinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WheelSpinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WheelSpinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WheelSpinMaxAggregateInputType
  }

  export type GetWheelSpinAggregateType<T extends WheelSpinAggregateArgs> = {
        [P in keyof T & keyof AggregateWheelSpin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWheelSpin[P]>
      : GetScalarType<T[P], AggregateWheelSpin[P]>
  }




  export type WheelSpinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WheelSpinWhereInput
    orderBy?: WheelSpinOrderByWithAggregationInput | WheelSpinOrderByWithAggregationInput[]
    by: WheelSpinScalarFieldEnum[] | WheelSpinScalarFieldEnum
    having?: WheelSpinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WheelSpinCountAggregateInputType | true
    _avg?: WheelSpinAvgAggregateInputType
    _sum?: WheelSpinSumAggregateInputType
    _min?: WheelSpinMinAggregateInputType
    _max?: WheelSpinMaxAggregateInputType
  }

  export type WheelSpinGroupByOutputType = {
    id: string
    authenticationId: string
    coin: string
    rotation: number
    createdAt: Date
    _count: WheelSpinCountAggregateOutputType | null
    _avg: WheelSpinAvgAggregateOutputType | null
    _sum: WheelSpinSumAggregateOutputType | null
    _min: WheelSpinMinAggregateOutputType | null
    _max: WheelSpinMaxAggregateOutputType | null
  }

  type GetWheelSpinGroupByPayload<T extends WheelSpinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WheelSpinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WheelSpinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WheelSpinGroupByOutputType[P]>
            : GetScalarType<T[P], WheelSpinGroupByOutputType[P]>
        }
      >
    >


  export type WheelSpinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authenticationId?: boolean
    coin?: boolean
    rotation?: boolean
    createdAt?: boolean
    authentication?: boolean | AuthenticationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wheelSpin"]>

  export type WheelSpinSelectScalar = {
    id?: boolean
    authenticationId?: boolean
    coin?: boolean
    rotation?: boolean
    createdAt?: boolean
  }

  export type WheelSpinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authentication?: boolean | AuthenticationDefaultArgs<ExtArgs>
  }


  export type $WheelSpinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WheelSpin"
    objects: {
      authentication: Prisma.$AuthenticationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authenticationId: string
      coin: string
      rotation: number
      createdAt: Date
    }, ExtArgs["result"]["wheelSpin"]>
    composites: {}
  }


  type WheelSpinGetPayload<S extends boolean | null | undefined | WheelSpinDefaultArgs> = $Result.GetResult<Prisma.$WheelSpinPayload, S>

  type WheelSpinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WheelSpinFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WheelSpinCountAggregateInputType | true
    }

  export interface WheelSpinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WheelSpin'], meta: { name: 'WheelSpin' } }
    /**
     * Find zero or one WheelSpin that matches the filter.
     * @param {WheelSpinFindUniqueArgs} args - Arguments to find a WheelSpin
     * @example
     * // Get one WheelSpin
     * const wheelSpin = await prisma.wheelSpin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WheelSpinFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WheelSpinFindUniqueArgs<ExtArgs>>
    ): Prisma__WheelSpinClient<$Result.GetResult<Prisma.$WheelSpinPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WheelSpin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WheelSpinFindUniqueOrThrowArgs} args - Arguments to find a WheelSpin
     * @example
     * // Get one WheelSpin
     * const wheelSpin = await prisma.wheelSpin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WheelSpinFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelSpinFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WheelSpinClient<$Result.GetResult<Prisma.$WheelSpinPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WheelSpin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelSpinFindFirstArgs} args - Arguments to find a WheelSpin
     * @example
     * // Get one WheelSpin
     * const wheelSpin = await prisma.wheelSpin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WheelSpinFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelSpinFindFirstArgs<ExtArgs>>
    ): Prisma__WheelSpinClient<$Result.GetResult<Prisma.$WheelSpinPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WheelSpin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelSpinFindFirstOrThrowArgs} args - Arguments to find a WheelSpin
     * @example
     * // Get one WheelSpin
     * const wheelSpin = await prisma.wheelSpin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WheelSpinFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelSpinFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WheelSpinClient<$Result.GetResult<Prisma.$WheelSpinPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WheelSpins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelSpinFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WheelSpins
     * const wheelSpins = await prisma.wheelSpin.findMany()
     * 
     * // Get first 10 WheelSpins
     * const wheelSpins = await prisma.wheelSpin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wheelSpinWithIdOnly = await prisma.wheelSpin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WheelSpinFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelSpinFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WheelSpinPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WheelSpin.
     * @param {WheelSpinCreateArgs} args - Arguments to create a WheelSpin.
     * @example
     * // Create one WheelSpin
     * const WheelSpin = await prisma.wheelSpin.create({
     *   data: {
     *     // ... data to create a WheelSpin
     *   }
     * })
     * 
    **/
    create<T extends WheelSpinCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WheelSpinCreateArgs<ExtArgs>>
    ): Prisma__WheelSpinClient<$Result.GetResult<Prisma.$WheelSpinPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WheelSpins.
     *     @param {WheelSpinCreateManyArgs} args - Arguments to create many WheelSpins.
     *     @example
     *     // Create many WheelSpins
     *     const wheelSpin = await prisma.wheelSpin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WheelSpinCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelSpinCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WheelSpin.
     * @param {WheelSpinDeleteArgs} args - Arguments to delete one WheelSpin.
     * @example
     * // Delete one WheelSpin
     * const WheelSpin = await prisma.wheelSpin.delete({
     *   where: {
     *     // ... filter to delete one WheelSpin
     *   }
     * })
     * 
    **/
    delete<T extends WheelSpinDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WheelSpinDeleteArgs<ExtArgs>>
    ): Prisma__WheelSpinClient<$Result.GetResult<Prisma.$WheelSpinPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WheelSpin.
     * @param {WheelSpinUpdateArgs} args - Arguments to update one WheelSpin.
     * @example
     * // Update one WheelSpin
     * const wheelSpin = await prisma.wheelSpin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WheelSpinUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WheelSpinUpdateArgs<ExtArgs>>
    ): Prisma__WheelSpinClient<$Result.GetResult<Prisma.$WheelSpinPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WheelSpins.
     * @param {WheelSpinDeleteManyArgs} args - Arguments to filter WheelSpins to delete.
     * @example
     * // Delete a few WheelSpins
     * const { count } = await prisma.wheelSpin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WheelSpinDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WheelSpinDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WheelSpins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelSpinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WheelSpins
     * const wheelSpin = await prisma.wheelSpin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WheelSpinUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WheelSpinUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WheelSpin.
     * @param {WheelSpinUpsertArgs} args - Arguments to update or create a WheelSpin.
     * @example
     * // Update or create a WheelSpin
     * const wheelSpin = await prisma.wheelSpin.upsert({
     *   create: {
     *     // ... data to create a WheelSpin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WheelSpin we want to update
     *   }
     * })
    **/
    upsert<T extends WheelSpinUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WheelSpinUpsertArgs<ExtArgs>>
    ): Prisma__WheelSpinClient<$Result.GetResult<Prisma.$WheelSpinPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WheelSpins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelSpinCountArgs} args - Arguments to filter WheelSpins to count.
     * @example
     * // Count the number of WheelSpins
     * const count = await prisma.wheelSpin.count({
     *   where: {
     *     // ... the filter for the WheelSpins we want to count
     *   }
     * })
    **/
    count<T extends WheelSpinCountArgs>(
      args?: Subset<T, WheelSpinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WheelSpinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WheelSpin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelSpinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WheelSpinAggregateArgs>(args: Subset<T, WheelSpinAggregateArgs>): Prisma.PrismaPromise<GetWheelSpinAggregateType<T>>

    /**
     * Group by WheelSpin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WheelSpinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WheelSpinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WheelSpinGroupByArgs['orderBy'] }
        : { orderBy?: WheelSpinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WheelSpinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWheelSpinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WheelSpin model
   */
  readonly fields: WheelSpinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WheelSpin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WheelSpinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    authentication<T extends AuthenticationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthenticationDefaultArgs<ExtArgs>>): Prisma__AuthenticationClient<$Result.GetResult<Prisma.$AuthenticationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WheelSpin model
   */ 
  interface WheelSpinFieldRefs {
    readonly id: FieldRef<"WheelSpin", 'String'>
    readonly authenticationId: FieldRef<"WheelSpin", 'String'>
    readonly coin: FieldRef<"WheelSpin", 'String'>
    readonly rotation: FieldRef<"WheelSpin", 'Int'>
    readonly createdAt: FieldRef<"WheelSpin", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * WheelSpin findUnique
   */
  export type WheelSpinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WheelSpin
     */
    select?: WheelSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelSpinInclude<ExtArgs> | null
    /**
     * Filter, which WheelSpin to fetch.
     */
    where: WheelSpinWhereUniqueInput
  }


  /**
   * WheelSpin findUniqueOrThrow
   */
  export type WheelSpinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WheelSpin
     */
    select?: WheelSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelSpinInclude<ExtArgs> | null
    /**
     * Filter, which WheelSpin to fetch.
     */
    where: WheelSpinWhereUniqueInput
  }


  /**
   * WheelSpin findFirst
   */
  export type WheelSpinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WheelSpin
     */
    select?: WheelSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelSpinInclude<ExtArgs> | null
    /**
     * Filter, which WheelSpin to fetch.
     */
    where?: WheelSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WheelSpins to fetch.
     */
    orderBy?: WheelSpinOrderByWithRelationInput | WheelSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WheelSpins.
     */
    cursor?: WheelSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WheelSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WheelSpins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WheelSpins.
     */
    distinct?: WheelSpinScalarFieldEnum | WheelSpinScalarFieldEnum[]
  }


  /**
   * WheelSpin findFirstOrThrow
   */
  export type WheelSpinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WheelSpin
     */
    select?: WheelSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelSpinInclude<ExtArgs> | null
    /**
     * Filter, which WheelSpin to fetch.
     */
    where?: WheelSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WheelSpins to fetch.
     */
    orderBy?: WheelSpinOrderByWithRelationInput | WheelSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WheelSpins.
     */
    cursor?: WheelSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WheelSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WheelSpins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WheelSpins.
     */
    distinct?: WheelSpinScalarFieldEnum | WheelSpinScalarFieldEnum[]
  }


  /**
   * WheelSpin findMany
   */
  export type WheelSpinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WheelSpin
     */
    select?: WheelSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelSpinInclude<ExtArgs> | null
    /**
     * Filter, which WheelSpins to fetch.
     */
    where?: WheelSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WheelSpins to fetch.
     */
    orderBy?: WheelSpinOrderByWithRelationInput | WheelSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WheelSpins.
     */
    cursor?: WheelSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WheelSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WheelSpins.
     */
    skip?: number
    distinct?: WheelSpinScalarFieldEnum | WheelSpinScalarFieldEnum[]
  }


  /**
   * WheelSpin create
   */
  export type WheelSpinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WheelSpin
     */
    select?: WheelSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelSpinInclude<ExtArgs> | null
    /**
     * The data needed to create a WheelSpin.
     */
    data: XOR<WheelSpinCreateInput, WheelSpinUncheckedCreateInput>
  }


  /**
   * WheelSpin createMany
   */
  export type WheelSpinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WheelSpins.
     */
    data: WheelSpinCreateManyInput | WheelSpinCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * WheelSpin update
   */
  export type WheelSpinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WheelSpin
     */
    select?: WheelSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelSpinInclude<ExtArgs> | null
    /**
     * The data needed to update a WheelSpin.
     */
    data: XOR<WheelSpinUpdateInput, WheelSpinUncheckedUpdateInput>
    /**
     * Choose, which WheelSpin to update.
     */
    where: WheelSpinWhereUniqueInput
  }


  /**
   * WheelSpin updateMany
   */
  export type WheelSpinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WheelSpins.
     */
    data: XOR<WheelSpinUpdateManyMutationInput, WheelSpinUncheckedUpdateManyInput>
    /**
     * Filter which WheelSpins to update
     */
    where?: WheelSpinWhereInput
  }


  /**
   * WheelSpin upsert
   */
  export type WheelSpinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WheelSpin
     */
    select?: WheelSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelSpinInclude<ExtArgs> | null
    /**
     * The filter to search for the WheelSpin to update in case it exists.
     */
    where: WheelSpinWhereUniqueInput
    /**
     * In case the WheelSpin found by the `where` argument doesn't exist, create a new WheelSpin with this data.
     */
    create: XOR<WheelSpinCreateInput, WheelSpinUncheckedCreateInput>
    /**
     * In case the WheelSpin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WheelSpinUpdateInput, WheelSpinUncheckedUpdateInput>
  }


  /**
   * WheelSpin delete
   */
  export type WheelSpinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WheelSpin
     */
    select?: WheelSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelSpinInclude<ExtArgs> | null
    /**
     * Filter which WheelSpin to delete.
     */
    where: WheelSpinWhereUniqueInput
  }


  /**
   * WheelSpin deleteMany
   */
  export type WheelSpinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WheelSpins to delete
     */
    where?: WheelSpinWhereInput
  }


  /**
   * WheelSpin without action
   */
  export type WheelSpinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WheelSpin
     */
    select?: WheelSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WheelSpinInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthenticationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthenticationScalarFieldEnum = (typeof AuthenticationScalarFieldEnum)[keyof typeof AuthenticationScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    authenticationId: 'authenticationId',
    rating: 'rating',
    comment: 'comment',
    commenter: 'commenter',
    imageUrl: 'imageUrl',
    nameproduct: 'nameproduct',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const WheelSpinScalarFieldEnum: {
    id: 'id',
    authenticationId: 'authenticationId',
    coin: 'coin',
    rotation: 'rotation',
    createdAt: 'createdAt'
  };

  export type WheelSpinScalarFieldEnum = (typeof WheelSpinScalarFieldEnum)[keyof typeof WheelSpinScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AuthenticationWhereInput = {
    AND?: AuthenticationWhereInput | AuthenticationWhereInput[]
    OR?: AuthenticationWhereInput[]
    NOT?: AuthenticationWhereInput | AuthenticationWhereInput[]
    id?: StringFilter<"Authentication"> | string
    userId?: StringFilter<"Authentication"> | string
    createdAt?: DateTimeFilter<"Authentication"> | Date | string
    updatedAt?: DateTimeFilter<"Authentication"> | Date | string
    comment?: CommentListRelationFilter
    wheelspin?: WheelSpinListRelationFilter
  }

  export type AuthenticationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: CommentOrderByRelationAggregateInput
    wheelspin?: WheelSpinOrderByRelationAggregateInput
  }

  export type AuthenticationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthenticationWhereInput | AuthenticationWhereInput[]
    OR?: AuthenticationWhereInput[]
    NOT?: AuthenticationWhereInput | AuthenticationWhereInput[]
    userId?: StringFilter<"Authentication"> | string
    createdAt?: DateTimeFilter<"Authentication"> | Date | string
    updatedAt?: DateTimeFilter<"Authentication"> | Date | string
    comment?: CommentListRelationFilter
    wheelspin?: WheelSpinListRelationFilter
  }, "id">

  export type AuthenticationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthenticationCountOrderByAggregateInput
    _max?: AuthenticationMaxOrderByAggregateInput
    _min?: AuthenticationMinOrderByAggregateInput
  }

  export type AuthenticationScalarWhereWithAggregatesInput = {
    AND?: AuthenticationScalarWhereWithAggregatesInput | AuthenticationScalarWhereWithAggregatesInput[]
    OR?: AuthenticationScalarWhereWithAggregatesInput[]
    NOT?: AuthenticationScalarWhereWithAggregatesInput | AuthenticationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Authentication"> | string
    userId?: StringWithAggregatesFilter<"Authentication"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Authentication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Authentication"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    authenticationId?: StringFilter<"Comment"> | string
    rating?: IntFilter<"Comment"> | number
    comment?: StringFilter<"Comment"> | string
    commenter?: StringFilter<"Comment"> | string
    imageUrl?: StringFilter<"Comment"> | string
    nameproduct?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    authentication?: XOR<AuthenticationRelationFilter, AuthenticationWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    authenticationId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    commenter?: SortOrder
    imageUrl?: SortOrder
    nameproduct?: SortOrder
    createdAt?: SortOrder
    authentication?: AuthenticationOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    authenticationId?: StringFilter<"Comment"> | string
    rating?: IntFilter<"Comment"> | number
    comment?: StringFilter<"Comment"> | string
    commenter?: StringFilter<"Comment"> | string
    imageUrl?: StringFilter<"Comment"> | string
    nameproduct?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    authentication?: XOR<AuthenticationRelationFilter, AuthenticationWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    authenticationId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    commenter?: SortOrder
    imageUrl?: SortOrder
    nameproduct?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    authenticationId?: StringWithAggregatesFilter<"Comment"> | string
    rating?: IntWithAggregatesFilter<"Comment"> | number
    comment?: StringWithAggregatesFilter<"Comment"> | string
    commenter?: StringWithAggregatesFilter<"Comment"> | string
    imageUrl?: StringWithAggregatesFilter<"Comment"> | string
    nameproduct?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type WheelSpinWhereInput = {
    AND?: WheelSpinWhereInput | WheelSpinWhereInput[]
    OR?: WheelSpinWhereInput[]
    NOT?: WheelSpinWhereInput | WheelSpinWhereInput[]
    id?: StringFilter<"WheelSpin"> | string
    authenticationId?: StringFilter<"WheelSpin"> | string
    coin?: StringFilter<"WheelSpin"> | string
    rotation?: IntFilter<"WheelSpin"> | number
    createdAt?: DateTimeFilter<"WheelSpin"> | Date | string
    authentication?: XOR<AuthenticationRelationFilter, AuthenticationWhereInput>
  }

  export type WheelSpinOrderByWithRelationInput = {
    id?: SortOrder
    authenticationId?: SortOrder
    coin?: SortOrder
    rotation?: SortOrder
    createdAt?: SortOrder
    authentication?: AuthenticationOrderByWithRelationInput
  }

  export type WheelSpinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WheelSpinWhereInput | WheelSpinWhereInput[]
    OR?: WheelSpinWhereInput[]
    NOT?: WheelSpinWhereInput | WheelSpinWhereInput[]
    authenticationId?: StringFilter<"WheelSpin"> | string
    coin?: StringFilter<"WheelSpin"> | string
    rotation?: IntFilter<"WheelSpin"> | number
    createdAt?: DateTimeFilter<"WheelSpin"> | Date | string
    authentication?: XOR<AuthenticationRelationFilter, AuthenticationWhereInput>
  }, "id">

  export type WheelSpinOrderByWithAggregationInput = {
    id?: SortOrder
    authenticationId?: SortOrder
    coin?: SortOrder
    rotation?: SortOrder
    createdAt?: SortOrder
    _count?: WheelSpinCountOrderByAggregateInput
    _avg?: WheelSpinAvgOrderByAggregateInput
    _max?: WheelSpinMaxOrderByAggregateInput
    _min?: WheelSpinMinOrderByAggregateInput
    _sum?: WheelSpinSumOrderByAggregateInput
  }

  export type WheelSpinScalarWhereWithAggregatesInput = {
    AND?: WheelSpinScalarWhereWithAggregatesInput | WheelSpinScalarWhereWithAggregatesInput[]
    OR?: WheelSpinScalarWhereWithAggregatesInput[]
    NOT?: WheelSpinScalarWhereWithAggregatesInput | WheelSpinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WheelSpin"> | string
    authenticationId?: StringWithAggregatesFilter<"WheelSpin"> | string
    coin?: StringWithAggregatesFilter<"WheelSpin"> | string
    rotation?: IntWithAggregatesFilter<"WheelSpin"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WheelSpin"> | Date | string
  }

  export type AuthenticationCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: CommentCreateNestedManyWithoutAuthenticationInput
    wheelspin?: WheelSpinCreateNestedManyWithoutAuthenticationInput
  }

  export type AuthenticationUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: CommentUncheckedCreateNestedManyWithoutAuthenticationInput
    wheelspin?: WheelSpinUncheckedCreateNestedManyWithoutAuthenticationInput
  }

  export type AuthenticationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUpdateManyWithoutAuthenticationNestedInput
    wheelspin?: WheelSpinUpdateManyWithoutAuthenticationNestedInput
  }

  export type AuthenticationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUncheckedUpdateManyWithoutAuthenticationNestedInput
    wheelspin?: WheelSpinUncheckedUpdateManyWithoutAuthenticationNestedInput
  }

  export type AuthenticationCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthenticationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    rating: number
    comment: string
    commenter: string
    imageUrl: string
    nameproduct: string
    createdAt?: Date | string
    authentication: AuthenticationCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    authenticationId: string
    rating: number
    comment: string
    commenter: string
    imageUrl: string
    nameproduct: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    commenter?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    nameproduct?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authentication?: AuthenticationUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authenticationId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    commenter?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    nameproduct?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    authenticationId: string
    rating: number
    comment: string
    commenter: string
    imageUrl: string
    nameproduct: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    commenter?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    nameproduct?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authenticationId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    commenter?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    nameproduct?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WheelSpinCreateInput = {
    id?: string
    coin: string
    rotation?: number
    createdAt?: Date | string
    authentication: AuthenticationCreateNestedOneWithoutWheelspinInput
  }

  export type WheelSpinUncheckedCreateInput = {
    id?: string
    authenticationId: string
    coin: string
    rotation?: number
    createdAt?: Date | string
  }

  export type WheelSpinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coin?: StringFieldUpdateOperationsInput | string
    rotation?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authentication?: AuthenticationUpdateOneRequiredWithoutWheelspinNestedInput
  }

  export type WheelSpinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authenticationId?: StringFieldUpdateOperationsInput | string
    coin?: StringFieldUpdateOperationsInput | string
    rotation?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WheelSpinCreateManyInput = {
    id?: string
    authenticationId: string
    coin: string
    rotation?: number
    createdAt?: Date | string
  }

  export type WheelSpinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coin?: StringFieldUpdateOperationsInput | string
    rotation?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WheelSpinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authenticationId?: StringFieldUpdateOperationsInput | string
    coin?: StringFieldUpdateOperationsInput | string
    rotation?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type WheelSpinListRelationFilter = {
    every?: WheelSpinWhereInput
    some?: WheelSpinWhereInput
    none?: WheelSpinWhereInput
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WheelSpinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthenticationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthenticationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthenticationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AuthenticationRelationFilter = {
    is?: AuthenticationWhereInput
    isNot?: AuthenticationWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    authenticationId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    commenter?: SortOrder
    imageUrl?: SortOrder
    nameproduct?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    authenticationId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    commenter?: SortOrder
    imageUrl?: SortOrder
    nameproduct?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    authenticationId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    commenter?: SortOrder
    imageUrl?: SortOrder
    nameproduct?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type WheelSpinCountOrderByAggregateInput = {
    id?: SortOrder
    authenticationId?: SortOrder
    coin?: SortOrder
    rotation?: SortOrder
    createdAt?: SortOrder
  }

  export type WheelSpinAvgOrderByAggregateInput = {
    rotation?: SortOrder
  }

  export type WheelSpinMaxOrderByAggregateInput = {
    id?: SortOrder
    authenticationId?: SortOrder
    coin?: SortOrder
    rotation?: SortOrder
    createdAt?: SortOrder
  }

  export type WheelSpinMinOrderByAggregateInput = {
    id?: SortOrder
    authenticationId?: SortOrder
    coin?: SortOrder
    rotation?: SortOrder
    createdAt?: SortOrder
  }

  export type WheelSpinSumOrderByAggregateInput = {
    rotation?: SortOrder
  }

  export type CommentCreateNestedManyWithoutAuthenticationInput = {
    create?: XOR<CommentCreateWithoutAuthenticationInput, CommentUncheckedCreateWithoutAuthenticationInput> | CommentCreateWithoutAuthenticationInput[] | CommentUncheckedCreateWithoutAuthenticationInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthenticationInput | CommentCreateOrConnectWithoutAuthenticationInput[]
    createMany?: CommentCreateManyAuthenticationInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type WheelSpinCreateNestedManyWithoutAuthenticationInput = {
    create?: XOR<WheelSpinCreateWithoutAuthenticationInput, WheelSpinUncheckedCreateWithoutAuthenticationInput> | WheelSpinCreateWithoutAuthenticationInput[] | WheelSpinUncheckedCreateWithoutAuthenticationInput[]
    connectOrCreate?: WheelSpinCreateOrConnectWithoutAuthenticationInput | WheelSpinCreateOrConnectWithoutAuthenticationInput[]
    createMany?: WheelSpinCreateManyAuthenticationInputEnvelope
    connect?: WheelSpinWhereUniqueInput | WheelSpinWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthenticationInput = {
    create?: XOR<CommentCreateWithoutAuthenticationInput, CommentUncheckedCreateWithoutAuthenticationInput> | CommentCreateWithoutAuthenticationInput[] | CommentUncheckedCreateWithoutAuthenticationInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthenticationInput | CommentCreateOrConnectWithoutAuthenticationInput[]
    createMany?: CommentCreateManyAuthenticationInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type WheelSpinUncheckedCreateNestedManyWithoutAuthenticationInput = {
    create?: XOR<WheelSpinCreateWithoutAuthenticationInput, WheelSpinUncheckedCreateWithoutAuthenticationInput> | WheelSpinCreateWithoutAuthenticationInput[] | WheelSpinUncheckedCreateWithoutAuthenticationInput[]
    connectOrCreate?: WheelSpinCreateOrConnectWithoutAuthenticationInput | WheelSpinCreateOrConnectWithoutAuthenticationInput[]
    createMany?: WheelSpinCreateManyAuthenticationInputEnvelope
    connect?: WheelSpinWhereUniqueInput | WheelSpinWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommentUpdateManyWithoutAuthenticationNestedInput = {
    create?: XOR<CommentCreateWithoutAuthenticationInput, CommentUncheckedCreateWithoutAuthenticationInput> | CommentCreateWithoutAuthenticationInput[] | CommentUncheckedCreateWithoutAuthenticationInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthenticationInput | CommentCreateOrConnectWithoutAuthenticationInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthenticationInput | CommentUpsertWithWhereUniqueWithoutAuthenticationInput[]
    createMany?: CommentCreateManyAuthenticationInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthenticationInput | CommentUpdateWithWhereUniqueWithoutAuthenticationInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthenticationInput | CommentUpdateManyWithWhereWithoutAuthenticationInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type WheelSpinUpdateManyWithoutAuthenticationNestedInput = {
    create?: XOR<WheelSpinCreateWithoutAuthenticationInput, WheelSpinUncheckedCreateWithoutAuthenticationInput> | WheelSpinCreateWithoutAuthenticationInput[] | WheelSpinUncheckedCreateWithoutAuthenticationInput[]
    connectOrCreate?: WheelSpinCreateOrConnectWithoutAuthenticationInput | WheelSpinCreateOrConnectWithoutAuthenticationInput[]
    upsert?: WheelSpinUpsertWithWhereUniqueWithoutAuthenticationInput | WheelSpinUpsertWithWhereUniqueWithoutAuthenticationInput[]
    createMany?: WheelSpinCreateManyAuthenticationInputEnvelope
    set?: WheelSpinWhereUniqueInput | WheelSpinWhereUniqueInput[]
    disconnect?: WheelSpinWhereUniqueInput | WheelSpinWhereUniqueInput[]
    delete?: WheelSpinWhereUniqueInput | WheelSpinWhereUniqueInput[]
    connect?: WheelSpinWhereUniqueInput | WheelSpinWhereUniqueInput[]
    update?: WheelSpinUpdateWithWhereUniqueWithoutAuthenticationInput | WheelSpinUpdateWithWhereUniqueWithoutAuthenticationInput[]
    updateMany?: WheelSpinUpdateManyWithWhereWithoutAuthenticationInput | WheelSpinUpdateManyWithWhereWithoutAuthenticationInput[]
    deleteMany?: WheelSpinScalarWhereInput | WheelSpinScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthenticationNestedInput = {
    create?: XOR<CommentCreateWithoutAuthenticationInput, CommentUncheckedCreateWithoutAuthenticationInput> | CommentCreateWithoutAuthenticationInput[] | CommentUncheckedCreateWithoutAuthenticationInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthenticationInput | CommentCreateOrConnectWithoutAuthenticationInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthenticationInput | CommentUpsertWithWhereUniqueWithoutAuthenticationInput[]
    createMany?: CommentCreateManyAuthenticationInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthenticationInput | CommentUpdateWithWhereUniqueWithoutAuthenticationInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthenticationInput | CommentUpdateManyWithWhereWithoutAuthenticationInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type WheelSpinUncheckedUpdateManyWithoutAuthenticationNestedInput = {
    create?: XOR<WheelSpinCreateWithoutAuthenticationInput, WheelSpinUncheckedCreateWithoutAuthenticationInput> | WheelSpinCreateWithoutAuthenticationInput[] | WheelSpinUncheckedCreateWithoutAuthenticationInput[]
    connectOrCreate?: WheelSpinCreateOrConnectWithoutAuthenticationInput | WheelSpinCreateOrConnectWithoutAuthenticationInput[]
    upsert?: WheelSpinUpsertWithWhereUniqueWithoutAuthenticationInput | WheelSpinUpsertWithWhereUniqueWithoutAuthenticationInput[]
    createMany?: WheelSpinCreateManyAuthenticationInputEnvelope
    set?: WheelSpinWhereUniqueInput | WheelSpinWhereUniqueInput[]
    disconnect?: WheelSpinWhereUniqueInput | WheelSpinWhereUniqueInput[]
    delete?: WheelSpinWhereUniqueInput | WheelSpinWhereUniqueInput[]
    connect?: WheelSpinWhereUniqueInput | WheelSpinWhereUniqueInput[]
    update?: WheelSpinUpdateWithWhereUniqueWithoutAuthenticationInput | WheelSpinUpdateWithWhereUniqueWithoutAuthenticationInput[]
    updateMany?: WheelSpinUpdateManyWithWhereWithoutAuthenticationInput | WheelSpinUpdateManyWithWhereWithoutAuthenticationInput[]
    deleteMany?: WheelSpinScalarWhereInput | WheelSpinScalarWhereInput[]
  }

  export type AuthenticationCreateNestedOneWithoutCommentInput = {
    create?: XOR<AuthenticationCreateWithoutCommentInput, AuthenticationUncheckedCreateWithoutCommentInput>
    connectOrCreate?: AuthenticationCreateOrConnectWithoutCommentInput
    connect?: AuthenticationWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AuthenticationUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<AuthenticationCreateWithoutCommentInput, AuthenticationUncheckedCreateWithoutCommentInput>
    connectOrCreate?: AuthenticationCreateOrConnectWithoutCommentInput
    upsert?: AuthenticationUpsertWithoutCommentInput
    connect?: AuthenticationWhereUniqueInput
    update?: XOR<XOR<AuthenticationUpdateToOneWithWhereWithoutCommentInput, AuthenticationUpdateWithoutCommentInput>, AuthenticationUncheckedUpdateWithoutCommentInput>
  }

  export type AuthenticationCreateNestedOneWithoutWheelspinInput = {
    create?: XOR<AuthenticationCreateWithoutWheelspinInput, AuthenticationUncheckedCreateWithoutWheelspinInput>
    connectOrCreate?: AuthenticationCreateOrConnectWithoutWheelspinInput
    connect?: AuthenticationWhereUniqueInput
  }

  export type AuthenticationUpdateOneRequiredWithoutWheelspinNestedInput = {
    create?: XOR<AuthenticationCreateWithoutWheelspinInput, AuthenticationUncheckedCreateWithoutWheelspinInput>
    connectOrCreate?: AuthenticationCreateOrConnectWithoutWheelspinInput
    upsert?: AuthenticationUpsertWithoutWheelspinInput
    connect?: AuthenticationWhereUniqueInput
    update?: XOR<XOR<AuthenticationUpdateToOneWithWhereWithoutWheelspinInput, AuthenticationUpdateWithoutWheelspinInput>, AuthenticationUncheckedUpdateWithoutWheelspinInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CommentCreateWithoutAuthenticationInput = {
    id?: string
    rating: number
    comment: string
    commenter: string
    imageUrl: string
    nameproduct: string
    createdAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutAuthenticationInput = {
    id?: string
    rating: number
    comment: string
    commenter: string
    imageUrl: string
    nameproduct: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutAuthenticationInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthenticationInput, CommentUncheckedCreateWithoutAuthenticationInput>
  }

  export type CommentCreateManyAuthenticationInputEnvelope = {
    data: CommentCreateManyAuthenticationInput | CommentCreateManyAuthenticationInput[]
    skipDuplicates?: boolean
  }

  export type WheelSpinCreateWithoutAuthenticationInput = {
    id?: string
    coin: string
    rotation?: number
    createdAt?: Date | string
  }

  export type WheelSpinUncheckedCreateWithoutAuthenticationInput = {
    id?: string
    coin: string
    rotation?: number
    createdAt?: Date | string
  }

  export type WheelSpinCreateOrConnectWithoutAuthenticationInput = {
    where: WheelSpinWhereUniqueInput
    create: XOR<WheelSpinCreateWithoutAuthenticationInput, WheelSpinUncheckedCreateWithoutAuthenticationInput>
  }

  export type WheelSpinCreateManyAuthenticationInputEnvelope = {
    data: WheelSpinCreateManyAuthenticationInput | WheelSpinCreateManyAuthenticationInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthenticationInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthenticationInput, CommentUncheckedUpdateWithoutAuthenticationInput>
    create: XOR<CommentCreateWithoutAuthenticationInput, CommentUncheckedCreateWithoutAuthenticationInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthenticationInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthenticationInput, CommentUncheckedUpdateWithoutAuthenticationInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthenticationInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthenticationInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    authenticationId?: StringFilter<"Comment"> | string
    rating?: IntFilter<"Comment"> | number
    comment?: StringFilter<"Comment"> | string
    commenter?: StringFilter<"Comment"> | string
    imageUrl?: StringFilter<"Comment"> | string
    nameproduct?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type WheelSpinUpsertWithWhereUniqueWithoutAuthenticationInput = {
    where: WheelSpinWhereUniqueInput
    update: XOR<WheelSpinUpdateWithoutAuthenticationInput, WheelSpinUncheckedUpdateWithoutAuthenticationInput>
    create: XOR<WheelSpinCreateWithoutAuthenticationInput, WheelSpinUncheckedCreateWithoutAuthenticationInput>
  }

  export type WheelSpinUpdateWithWhereUniqueWithoutAuthenticationInput = {
    where: WheelSpinWhereUniqueInput
    data: XOR<WheelSpinUpdateWithoutAuthenticationInput, WheelSpinUncheckedUpdateWithoutAuthenticationInput>
  }

  export type WheelSpinUpdateManyWithWhereWithoutAuthenticationInput = {
    where: WheelSpinScalarWhereInput
    data: XOR<WheelSpinUpdateManyMutationInput, WheelSpinUncheckedUpdateManyWithoutAuthenticationInput>
  }

  export type WheelSpinScalarWhereInput = {
    AND?: WheelSpinScalarWhereInput | WheelSpinScalarWhereInput[]
    OR?: WheelSpinScalarWhereInput[]
    NOT?: WheelSpinScalarWhereInput | WheelSpinScalarWhereInput[]
    id?: StringFilter<"WheelSpin"> | string
    authenticationId?: StringFilter<"WheelSpin"> | string
    coin?: StringFilter<"WheelSpin"> | string
    rotation?: IntFilter<"WheelSpin"> | number
    createdAt?: DateTimeFilter<"WheelSpin"> | Date | string
  }

  export type AuthenticationCreateWithoutCommentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    wheelspin?: WheelSpinCreateNestedManyWithoutAuthenticationInput
  }

  export type AuthenticationUncheckedCreateWithoutCommentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    wheelspin?: WheelSpinUncheckedCreateNestedManyWithoutAuthenticationInput
  }

  export type AuthenticationCreateOrConnectWithoutCommentInput = {
    where: AuthenticationWhereUniqueInput
    create: XOR<AuthenticationCreateWithoutCommentInput, AuthenticationUncheckedCreateWithoutCommentInput>
  }

  export type AuthenticationUpsertWithoutCommentInput = {
    update: XOR<AuthenticationUpdateWithoutCommentInput, AuthenticationUncheckedUpdateWithoutCommentInput>
    create: XOR<AuthenticationCreateWithoutCommentInput, AuthenticationUncheckedCreateWithoutCommentInput>
    where?: AuthenticationWhereInput
  }

  export type AuthenticationUpdateToOneWithWhereWithoutCommentInput = {
    where?: AuthenticationWhereInput
    data: XOR<AuthenticationUpdateWithoutCommentInput, AuthenticationUncheckedUpdateWithoutCommentInput>
  }

  export type AuthenticationUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wheelspin?: WheelSpinUpdateManyWithoutAuthenticationNestedInput
  }

  export type AuthenticationUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wheelspin?: WheelSpinUncheckedUpdateManyWithoutAuthenticationNestedInput
  }

  export type AuthenticationCreateWithoutWheelspinInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: CommentCreateNestedManyWithoutAuthenticationInput
  }

  export type AuthenticationUncheckedCreateWithoutWheelspinInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: CommentUncheckedCreateNestedManyWithoutAuthenticationInput
  }

  export type AuthenticationCreateOrConnectWithoutWheelspinInput = {
    where: AuthenticationWhereUniqueInput
    create: XOR<AuthenticationCreateWithoutWheelspinInput, AuthenticationUncheckedCreateWithoutWheelspinInput>
  }

  export type AuthenticationUpsertWithoutWheelspinInput = {
    update: XOR<AuthenticationUpdateWithoutWheelspinInput, AuthenticationUncheckedUpdateWithoutWheelspinInput>
    create: XOR<AuthenticationCreateWithoutWheelspinInput, AuthenticationUncheckedCreateWithoutWheelspinInput>
    where?: AuthenticationWhereInput
  }

  export type AuthenticationUpdateToOneWithWhereWithoutWheelspinInput = {
    where?: AuthenticationWhereInput
    data: XOR<AuthenticationUpdateWithoutWheelspinInput, AuthenticationUncheckedUpdateWithoutWheelspinInput>
  }

  export type AuthenticationUpdateWithoutWheelspinInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUpdateManyWithoutAuthenticationNestedInput
  }

  export type AuthenticationUncheckedUpdateWithoutWheelspinInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUncheckedUpdateManyWithoutAuthenticationNestedInput
  }

  export type CommentCreateManyAuthenticationInput = {
    id?: string
    rating: number
    comment: string
    commenter: string
    imageUrl: string
    nameproduct: string
    createdAt?: Date | string
  }

  export type WheelSpinCreateManyAuthenticationInput = {
    id?: string
    coin: string
    rotation?: number
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutAuthenticationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    commenter?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    nameproduct?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutAuthenticationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    commenter?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    nameproduct?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutAuthenticationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    commenter?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    nameproduct?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WheelSpinUpdateWithoutAuthenticationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coin?: StringFieldUpdateOperationsInput | string
    rotation?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WheelSpinUncheckedUpdateWithoutAuthenticationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coin?: StringFieldUpdateOperationsInput | string
    rotation?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WheelSpinUncheckedUpdateManyWithoutAuthenticationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coin?: StringFieldUpdateOperationsInput | string
    rotation?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AuthenticationCountOutputTypeDefaultArgs instead
     */
    export type AuthenticationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthenticationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuthenticationDefaultArgs instead
     */
    export type AuthenticationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthenticationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentDefaultArgs instead
     */
    export type CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WheelSpinDefaultArgs instead
     */
    export type WheelSpinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WheelSpinDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}