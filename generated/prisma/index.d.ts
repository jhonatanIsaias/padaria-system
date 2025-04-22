
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model estoque
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type estoque = $Result.DefaultSelection<Prisma.$estoquePayload>
/**
 * Model ingrediente_receita
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type ingrediente_receita = $Result.DefaultSelection<Prisma.$ingrediente_receitaPayload>
/**
 * Model ingredientes
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type ingredientes = $Result.DefaultSelection<Prisma.$ingredientesPayload>
/**
 * Model receitas
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type receitas = $Result.DefaultSelection<Prisma.$receitasPayload>
/**
 * Model usuarios
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Estoques
 * const estoques = await prisma.estoque.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Estoques
   * const estoques = await prisma.estoque.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.estoque`: Exposes CRUD operations for the **estoque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estoques
    * const estoques = await prisma.estoque.findMany()
    * ```
    */
  get estoque(): Prisma.estoqueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingrediente_receita`: Exposes CRUD operations for the **ingrediente_receita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingrediente_receitas
    * const ingrediente_receitas = await prisma.ingrediente_receita.findMany()
    * ```
    */
  get ingrediente_receita(): Prisma.ingrediente_receitaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredientes`: Exposes CRUD operations for the **ingredientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredientes
    * const ingredientes = await prisma.ingredientes.findMany()
    * ```
    */
  get ingredientes(): Prisma.ingredientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receitas`: Exposes CRUD operations for the **receitas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receitas
    * const receitas = await prisma.receitas.findMany()
    * ```
    */
  get receitas(): Prisma.receitasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    estoque: 'estoque',
    ingrediente_receita: 'ingrediente_receita',
    ingredientes: 'ingredientes',
    receitas: 'receitas',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "estoque" | "ingrediente_receita" | "ingredientes" | "receitas" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      estoque: {
        payload: Prisma.$estoquePayload<ExtArgs>
        fields: Prisma.estoqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estoqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estoqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoquePayload>
          }
          findFirst: {
            args: Prisma.estoqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estoqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoquePayload>
          }
          findMany: {
            args: Prisma.estoqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoquePayload>[]
          }
          create: {
            args: Prisma.estoqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoquePayload>
          }
          createMany: {
            args: Prisma.estoqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.estoqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoquePayload>[]
          }
          delete: {
            args: Prisma.estoqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoquePayload>
          }
          update: {
            args: Prisma.estoqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoquePayload>
          }
          deleteMany: {
            args: Prisma.estoqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estoqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.estoqueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoquePayload>[]
          }
          upsert: {
            args: Prisma.estoqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estoquePayload>
          }
          aggregate: {
            args: Prisma.EstoqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstoque>
          }
          groupBy: {
            args: Prisma.estoqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstoqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.estoqueCountArgs<ExtArgs>
            result: $Utils.Optional<EstoqueCountAggregateOutputType> | number
          }
        }
      }
      ingrediente_receita: {
        payload: Prisma.$ingrediente_receitaPayload<ExtArgs>
        fields: Prisma.ingrediente_receitaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ingrediente_receitaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_receitaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ingrediente_receitaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_receitaPayload>
          }
          findFirst: {
            args: Prisma.ingrediente_receitaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_receitaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ingrediente_receitaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_receitaPayload>
          }
          findMany: {
            args: Prisma.ingrediente_receitaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_receitaPayload>[]
          }
          create: {
            args: Prisma.ingrediente_receitaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_receitaPayload>
          }
          createMany: {
            args: Prisma.ingrediente_receitaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ingrediente_receitaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_receitaPayload>[]
          }
          delete: {
            args: Prisma.ingrediente_receitaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_receitaPayload>
          }
          update: {
            args: Prisma.ingrediente_receitaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_receitaPayload>
          }
          deleteMany: {
            args: Prisma.ingrediente_receitaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ingrediente_receitaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ingrediente_receitaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_receitaPayload>[]
          }
          upsert: {
            args: Prisma.ingrediente_receitaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingrediente_receitaPayload>
          }
          aggregate: {
            args: Prisma.Ingrediente_receitaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngrediente_receita>
          }
          groupBy: {
            args: Prisma.ingrediente_receitaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ingrediente_receitaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ingrediente_receitaCountArgs<ExtArgs>
            result: $Utils.Optional<Ingrediente_receitaCountAggregateOutputType> | number
          }
        }
      }
      ingredientes: {
        payload: Prisma.$ingredientesPayload<ExtArgs>
        fields: Prisma.ingredientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ingredientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ingredientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientesPayload>
          }
          findFirst: {
            args: Prisma.ingredientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ingredientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientesPayload>
          }
          findMany: {
            args: Prisma.ingredientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientesPayload>[]
          }
          create: {
            args: Prisma.ingredientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientesPayload>
          }
          createMany: {
            args: Prisma.ingredientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ingredientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientesPayload>[]
          }
          delete: {
            args: Prisma.ingredientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientesPayload>
          }
          update: {
            args: Prisma.ingredientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientesPayload>
          }
          deleteMany: {
            args: Prisma.ingredientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ingredientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ingredientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientesPayload>[]
          }
          upsert: {
            args: Prisma.ingredientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientesPayload>
          }
          aggregate: {
            args: Prisma.IngredientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredientes>
          }
          groupBy: {
            args: Prisma.ingredientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ingredientesCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientesCountAggregateOutputType> | number
          }
        }
      }
      receitas: {
        payload: Prisma.$receitasPayload<ExtArgs>
        fields: Prisma.receitasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.receitasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.receitasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>
          }
          findFirst: {
            args: Prisma.receitasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.receitasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>
          }
          findMany: {
            args: Prisma.receitasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>[]
          }
          create: {
            args: Prisma.receitasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>
          }
          createMany: {
            args: Prisma.receitasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.receitasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>[]
          }
          delete: {
            args: Prisma.receitasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>
          }
          update: {
            args: Prisma.receitasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>
          }
          deleteMany: {
            args: Prisma.receitasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.receitasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.receitasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>[]
          }
          upsert: {
            args: Prisma.receitasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>
          }
          aggregate: {
            args: Prisma.ReceitasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceitas>
          }
          groupBy: {
            args: Prisma.receitasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceitasGroupByOutputType>[]
          }
          count: {
            args: Prisma.receitasCountArgs<ExtArgs>
            result: $Utils.Optional<ReceitasCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    estoque?: estoqueOmit
    ingrediente_receita?: ingrediente_receitaOmit
    ingredientes?: ingredientesOmit
    receitas?: receitasOmit
    usuarios?: usuariosOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type IngredientesCountOutputType
   */

  export type IngredientesCountOutputType = {
    estoque: number
    ingrediente_receita: number
  }

  export type IngredientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estoque?: boolean | IngredientesCountOutputTypeCountEstoqueArgs
    ingrediente_receita?: boolean | IngredientesCountOutputTypeCountIngrediente_receitaArgs
  }

  // Custom InputTypes
  /**
   * IngredientesCountOutputType without action
   */
  export type IngredientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientesCountOutputType
     */
    select?: IngredientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientesCountOutputType without action
   */
  export type IngredientesCountOutputTypeCountEstoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estoqueWhereInput
  }

  /**
   * IngredientesCountOutputType without action
   */
  export type IngredientesCountOutputTypeCountIngrediente_receitaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingrediente_receitaWhereInput
  }


  /**
   * Count Type ReceitasCountOutputType
   */

  export type ReceitasCountOutputType = {
    ingrediente_receita: number
  }

  export type ReceitasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingrediente_receita?: boolean | ReceitasCountOutputTypeCountIngrediente_receitaArgs
  }

  // Custom InputTypes
  /**
   * ReceitasCountOutputType without action
   */
  export type ReceitasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitasCountOutputType
     */
    select?: ReceitasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReceitasCountOutputType without action
   */
  export type ReceitasCountOutputTypeCountIngrediente_receitaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingrediente_receitaWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    receitas: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | UsuariosCountOutputTypeCountReceitasArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountReceitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receitasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model estoque
   */

  export type AggregateEstoque = {
    _count: EstoqueCountAggregateOutputType | null
    _avg: EstoqueAvgAggregateOutputType | null
    _sum: EstoqueSumAggregateOutputType | null
    _min: EstoqueMinAggregateOutputType | null
    _max: EstoqueMaxAggregateOutputType | null
  }

  export type EstoqueAvgAggregateOutputType = {
    id: number | null
    qnt_item: number | null
    qnt_min: number | null
    id_ingrediente: number | null
  }

  export type EstoqueSumAggregateOutputType = {
    id: bigint | null
    qnt_item: number | null
    qnt_min: number | null
    id_ingrediente: bigint | null
  }

  export type EstoqueMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    qnt_item: number | null
    qnt_min: number | null
    id_ingrediente: bigint | null
  }

  export type EstoqueMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    qnt_item: number | null
    qnt_min: number | null
    id_ingrediente: bigint | null
  }

  export type EstoqueCountAggregateOutputType = {
    id: number
    created_at: number
    qnt_item: number
    qnt_min: number
    id_ingrediente: number
    _all: number
  }


  export type EstoqueAvgAggregateInputType = {
    id?: true
    qnt_item?: true
    qnt_min?: true
    id_ingrediente?: true
  }

  export type EstoqueSumAggregateInputType = {
    id?: true
    qnt_item?: true
    qnt_min?: true
    id_ingrediente?: true
  }

  export type EstoqueMinAggregateInputType = {
    id?: true
    created_at?: true
    qnt_item?: true
    qnt_min?: true
    id_ingrediente?: true
  }

  export type EstoqueMaxAggregateInputType = {
    id?: true
    created_at?: true
    qnt_item?: true
    qnt_min?: true
    id_ingrediente?: true
  }

  export type EstoqueCountAggregateInputType = {
    id?: true
    created_at?: true
    qnt_item?: true
    qnt_min?: true
    id_ingrediente?: true
    _all?: true
  }

  export type EstoqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estoque to aggregate.
     */
    where?: estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estoques to fetch.
     */
    orderBy?: estoqueOrderByWithRelationInput | estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estoques
    **/
    _count?: true | EstoqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstoqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstoqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstoqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstoqueMaxAggregateInputType
  }

  export type GetEstoqueAggregateType<T extends EstoqueAggregateArgs> = {
        [P in keyof T & keyof AggregateEstoque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstoque[P]>
      : GetScalarType<T[P], AggregateEstoque[P]>
  }




  export type estoqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estoqueWhereInput
    orderBy?: estoqueOrderByWithAggregationInput | estoqueOrderByWithAggregationInput[]
    by: EstoqueScalarFieldEnum[] | EstoqueScalarFieldEnum
    having?: estoqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstoqueCountAggregateInputType | true
    _avg?: EstoqueAvgAggregateInputType
    _sum?: EstoqueSumAggregateInputType
    _min?: EstoqueMinAggregateInputType
    _max?: EstoqueMaxAggregateInputType
  }

  export type EstoqueGroupByOutputType = {
    id: bigint
    created_at: Date
    qnt_item: number | null
    qnt_min: number | null
    id_ingrediente: bigint | null
    _count: EstoqueCountAggregateOutputType | null
    _avg: EstoqueAvgAggregateOutputType | null
    _sum: EstoqueSumAggregateOutputType | null
    _min: EstoqueMinAggregateOutputType | null
    _max: EstoqueMaxAggregateOutputType | null
  }

  type GetEstoqueGroupByPayload<T extends estoqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstoqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstoqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstoqueGroupByOutputType[P]>
            : GetScalarType<T[P], EstoqueGroupByOutputType[P]>
        }
      >
    >


  export type estoqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    qnt_item?: boolean
    qnt_min?: boolean
    id_ingrediente?: boolean
    ingredientes?: boolean | estoque$ingredientesArgs<ExtArgs>
  }, ExtArgs["result"]["estoque"]>

  export type estoqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    qnt_item?: boolean
    qnt_min?: boolean
    id_ingrediente?: boolean
    ingredientes?: boolean | estoque$ingredientesArgs<ExtArgs>
  }, ExtArgs["result"]["estoque"]>

  export type estoqueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    qnt_item?: boolean
    qnt_min?: boolean
    id_ingrediente?: boolean
    ingredientes?: boolean | estoque$ingredientesArgs<ExtArgs>
  }, ExtArgs["result"]["estoque"]>

  export type estoqueSelectScalar = {
    id?: boolean
    created_at?: boolean
    qnt_item?: boolean
    qnt_min?: boolean
    id_ingrediente?: boolean
  }

  export type estoqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "qnt_item" | "qnt_min" | "id_ingrediente", ExtArgs["result"]["estoque"]>
  export type estoqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredientes?: boolean | estoque$ingredientesArgs<ExtArgs>
  }
  export type estoqueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredientes?: boolean | estoque$ingredientesArgs<ExtArgs>
  }
  export type estoqueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredientes?: boolean | estoque$ingredientesArgs<ExtArgs>
  }

  export type $estoquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estoque"
    objects: {
      ingredientes: Prisma.$ingredientesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      qnt_item: number | null
      qnt_min: number | null
      id_ingrediente: bigint | null
    }, ExtArgs["result"]["estoque"]>
    composites: {}
  }

  type estoqueGetPayload<S extends boolean | null | undefined | estoqueDefaultArgs> = $Result.GetResult<Prisma.$estoquePayload, S>

  type estoqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<estoqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstoqueCountAggregateInputType | true
    }

  export interface estoqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estoque'], meta: { name: 'estoque' } }
    /**
     * Find zero or one Estoque that matches the filter.
     * @param {estoqueFindUniqueArgs} args - Arguments to find a Estoque
     * @example
     * // Get one Estoque
     * const estoque = await prisma.estoque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estoqueFindUniqueArgs>(args: SelectSubset<T, estoqueFindUniqueArgs<ExtArgs>>): Prisma__estoqueClient<$Result.GetResult<Prisma.$estoquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estoque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {estoqueFindUniqueOrThrowArgs} args - Arguments to find a Estoque
     * @example
     * // Get one Estoque
     * const estoque = await prisma.estoque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estoqueFindUniqueOrThrowArgs>(args: SelectSubset<T, estoqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estoqueClient<$Result.GetResult<Prisma.$estoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estoque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estoqueFindFirstArgs} args - Arguments to find a Estoque
     * @example
     * // Get one Estoque
     * const estoque = await prisma.estoque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estoqueFindFirstArgs>(args?: SelectSubset<T, estoqueFindFirstArgs<ExtArgs>>): Prisma__estoqueClient<$Result.GetResult<Prisma.$estoquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estoque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estoqueFindFirstOrThrowArgs} args - Arguments to find a Estoque
     * @example
     * // Get one Estoque
     * const estoque = await prisma.estoque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estoqueFindFirstOrThrowArgs>(args?: SelectSubset<T, estoqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__estoqueClient<$Result.GetResult<Prisma.$estoquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estoques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estoqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estoques
     * const estoques = await prisma.estoque.findMany()
     * 
     * // Get first 10 Estoques
     * const estoques = await prisma.estoque.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estoqueWithIdOnly = await prisma.estoque.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends estoqueFindManyArgs>(args?: SelectSubset<T, estoqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estoque.
     * @param {estoqueCreateArgs} args - Arguments to create a Estoque.
     * @example
     * // Create one Estoque
     * const Estoque = await prisma.estoque.create({
     *   data: {
     *     // ... data to create a Estoque
     *   }
     * })
     * 
     */
    create<T extends estoqueCreateArgs>(args: SelectSubset<T, estoqueCreateArgs<ExtArgs>>): Prisma__estoqueClient<$Result.GetResult<Prisma.$estoquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estoques.
     * @param {estoqueCreateManyArgs} args - Arguments to create many Estoques.
     * @example
     * // Create many Estoques
     * const estoque = await prisma.estoque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estoqueCreateManyArgs>(args?: SelectSubset<T, estoqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estoques and returns the data saved in the database.
     * @param {estoqueCreateManyAndReturnArgs} args - Arguments to create many Estoques.
     * @example
     * // Create many Estoques
     * const estoque = await prisma.estoque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estoques and only return the `id`
     * const estoqueWithIdOnly = await prisma.estoque.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends estoqueCreateManyAndReturnArgs>(args?: SelectSubset<T, estoqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estoquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estoque.
     * @param {estoqueDeleteArgs} args - Arguments to delete one Estoque.
     * @example
     * // Delete one Estoque
     * const Estoque = await prisma.estoque.delete({
     *   where: {
     *     // ... filter to delete one Estoque
     *   }
     * })
     * 
     */
    delete<T extends estoqueDeleteArgs>(args: SelectSubset<T, estoqueDeleteArgs<ExtArgs>>): Prisma__estoqueClient<$Result.GetResult<Prisma.$estoquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estoque.
     * @param {estoqueUpdateArgs} args - Arguments to update one Estoque.
     * @example
     * // Update one Estoque
     * const estoque = await prisma.estoque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estoqueUpdateArgs>(args: SelectSubset<T, estoqueUpdateArgs<ExtArgs>>): Prisma__estoqueClient<$Result.GetResult<Prisma.$estoquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estoques.
     * @param {estoqueDeleteManyArgs} args - Arguments to filter Estoques to delete.
     * @example
     * // Delete a few Estoques
     * const { count } = await prisma.estoque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estoqueDeleteManyArgs>(args?: SelectSubset<T, estoqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estoqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estoques
     * const estoque = await prisma.estoque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estoqueUpdateManyArgs>(args: SelectSubset<T, estoqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estoques and returns the data updated in the database.
     * @param {estoqueUpdateManyAndReturnArgs} args - Arguments to update many Estoques.
     * @example
     * // Update many Estoques
     * const estoque = await prisma.estoque.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estoques and only return the `id`
     * const estoqueWithIdOnly = await prisma.estoque.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends estoqueUpdateManyAndReturnArgs>(args: SelectSubset<T, estoqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estoquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estoque.
     * @param {estoqueUpsertArgs} args - Arguments to update or create a Estoque.
     * @example
     * // Update or create a Estoque
     * const estoque = await prisma.estoque.upsert({
     *   create: {
     *     // ... data to create a Estoque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estoque we want to update
     *   }
     * })
     */
    upsert<T extends estoqueUpsertArgs>(args: SelectSubset<T, estoqueUpsertArgs<ExtArgs>>): Prisma__estoqueClient<$Result.GetResult<Prisma.$estoquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estoqueCountArgs} args - Arguments to filter Estoques to count.
     * @example
     * // Count the number of Estoques
     * const count = await prisma.estoque.count({
     *   where: {
     *     // ... the filter for the Estoques we want to count
     *   }
     * })
    **/
    count<T extends estoqueCountArgs>(
      args?: Subset<T, estoqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstoqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstoqueAggregateArgs>(args: Subset<T, EstoqueAggregateArgs>): Prisma.PrismaPromise<GetEstoqueAggregateType<T>>

    /**
     * Group by Estoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estoqueGroupByArgs} args - Group by arguments.
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
      T extends estoqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estoqueGroupByArgs['orderBy'] }
        : { orderBy?: estoqueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, estoqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstoqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estoque model
   */
  readonly fields: estoqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estoque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estoqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredientes<T extends estoque$ingredientesArgs<ExtArgs> = {}>(args?: Subset<T, estoque$ingredientesArgs<ExtArgs>>): Prisma__ingredientesClient<$Result.GetResult<Prisma.$ingredientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the estoque model
   */
  interface estoqueFieldRefs {
    readonly id: FieldRef<"estoque", 'BigInt'>
    readonly created_at: FieldRef<"estoque", 'DateTime'>
    readonly qnt_item: FieldRef<"estoque", 'Int'>
    readonly qnt_min: FieldRef<"estoque", 'Int'>
    readonly id_ingrediente: FieldRef<"estoque", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * estoque findUnique
   */
  export type estoqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque
     */
    select?: estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque
     */
    omit?: estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoqueInclude<ExtArgs> | null
    /**
     * Filter, which estoque to fetch.
     */
    where: estoqueWhereUniqueInput
  }

  /**
   * estoque findUniqueOrThrow
   */
  export type estoqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque
     */
    select?: estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque
     */
    omit?: estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoqueInclude<ExtArgs> | null
    /**
     * Filter, which estoque to fetch.
     */
    where: estoqueWhereUniqueInput
  }

  /**
   * estoque findFirst
   */
  export type estoqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque
     */
    select?: estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque
     */
    omit?: estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoqueInclude<ExtArgs> | null
    /**
     * Filter, which estoque to fetch.
     */
    where?: estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estoques to fetch.
     */
    orderBy?: estoqueOrderByWithRelationInput | estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estoques.
     */
    cursor?: estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estoques.
     */
    distinct?: EstoqueScalarFieldEnum | EstoqueScalarFieldEnum[]
  }

  /**
   * estoque findFirstOrThrow
   */
  export type estoqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque
     */
    select?: estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque
     */
    omit?: estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoqueInclude<ExtArgs> | null
    /**
     * Filter, which estoque to fetch.
     */
    where?: estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estoques to fetch.
     */
    orderBy?: estoqueOrderByWithRelationInput | estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estoques.
     */
    cursor?: estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estoques.
     */
    distinct?: EstoqueScalarFieldEnum | EstoqueScalarFieldEnum[]
  }

  /**
   * estoque findMany
   */
  export type estoqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque
     */
    select?: estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque
     */
    omit?: estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoqueInclude<ExtArgs> | null
    /**
     * Filter, which estoques to fetch.
     */
    where?: estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estoques to fetch.
     */
    orderBy?: estoqueOrderByWithRelationInput | estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estoques.
     */
    cursor?: estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estoques.
     */
    skip?: number
    distinct?: EstoqueScalarFieldEnum | EstoqueScalarFieldEnum[]
  }

  /**
   * estoque create
   */
  export type estoqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque
     */
    select?: estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque
     */
    omit?: estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoqueInclude<ExtArgs> | null
    /**
     * The data needed to create a estoque.
     */
    data?: XOR<estoqueCreateInput, estoqueUncheckedCreateInput>
  }

  /**
   * estoque createMany
   */
  export type estoqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estoques.
     */
    data: estoqueCreateManyInput | estoqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estoque createManyAndReturn
   */
  export type estoqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque
     */
    select?: estoqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estoque
     */
    omit?: estoqueOmit<ExtArgs> | null
    /**
     * The data used to create many estoques.
     */
    data: estoqueCreateManyInput | estoqueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoqueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * estoque update
   */
  export type estoqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque
     */
    select?: estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque
     */
    omit?: estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoqueInclude<ExtArgs> | null
    /**
     * The data needed to update a estoque.
     */
    data: XOR<estoqueUpdateInput, estoqueUncheckedUpdateInput>
    /**
     * Choose, which estoque to update.
     */
    where: estoqueWhereUniqueInput
  }

  /**
   * estoque updateMany
   */
  export type estoqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estoques.
     */
    data: XOR<estoqueUpdateManyMutationInput, estoqueUncheckedUpdateManyInput>
    /**
     * Filter which estoques to update
     */
    where?: estoqueWhereInput
    /**
     * Limit how many estoques to update.
     */
    limit?: number
  }

  /**
   * estoque updateManyAndReturn
   */
  export type estoqueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque
     */
    select?: estoqueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estoque
     */
    omit?: estoqueOmit<ExtArgs> | null
    /**
     * The data used to update estoques.
     */
    data: XOR<estoqueUpdateManyMutationInput, estoqueUncheckedUpdateManyInput>
    /**
     * Filter which estoques to update
     */
    where?: estoqueWhereInput
    /**
     * Limit how many estoques to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoqueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * estoque upsert
   */
  export type estoqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque
     */
    select?: estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque
     */
    omit?: estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoqueInclude<ExtArgs> | null
    /**
     * The filter to search for the estoque to update in case it exists.
     */
    where: estoqueWhereUniqueInput
    /**
     * In case the estoque found by the `where` argument doesn't exist, create a new estoque with this data.
     */
    create: XOR<estoqueCreateInput, estoqueUncheckedCreateInput>
    /**
     * In case the estoque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estoqueUpdateInput, estoqueUncheckedUpdateInput>
  }

  /**
   * estoque delete
   */
  export type estoqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque
     */
    select?: estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque
     */
    omit?: estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoqueInclude<ExtArgs> | null
    /**
     * Filter which estoque to delete.
     */
    where: estoqueWhereUniqueInput
  }

  /**
   * estoque deleteMany
   */
  export type estoqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estoques to delete
     */
    where?: estoqueWhereInput
    /**
     * Limit how many estoques to delete.
     */
    limit?: number
  }

  /**
   * estoque.ingredientes
   */
  export type estoque$ingredientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredientes
     */
    select?: ingredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredientes
     */
    omit?: ingredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientesInclude<ExtArgs> | null
    where?: ingredientesWhereInput
  }

  /**
   * estoque without action
   */
  export type estoqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque
     */
    select?: estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque
     */
    omit?: estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoqueInclude<ExtArgs> | null
  }


  /**
   * Model ingrediente_receita
   */

  export type AggregateIngrediente_receita = {
    _count: Ingrediente_receitaCountAggregateOutputType | null
    _avg: Ingrediente_receitaAvgAggregateOutputType | null
    _sum: Ingrediente_receitaSumAggregateOutputType | null
    _min: Ingrediente_receitaMinAggregateOutputType | null
    _max: Ingrediente_receitaMaxAggregateOutputType | null
  }

  export type Ingrediente_receitaAvgAggregateOutputType = {
    id: number | null
    id_ingrediente: number | null
    id_receita: number | null
    medida: number | null
    base: number | null
  }

  export type Ingrediente_receitaSumAggregateOutputType = {
    id: bigint | null
    id_ingrediente: bigint | null
    id_receita: bigint | null
    medida: number | null
    base: number | null
  }

  export type Ingrediente_receitaMinAggregateOutputType = {
    id: bigint | null
    id_ingrediente: bigint | null
    id_receita: bigint | null
    medida: number | null
    uni_medida: string | null
    base: number | null
    created_at: Date | null
  }

  export type Ingrediente_receitaMaxAggregateOutputType = {
    id: bigint | null
    id_ingrediente: bigint | null
    id_receita: bigint | null
    medida: number | null
    uni_medida: string | null
    base: number | null
    created_at: Date | null
  }

  export type Ingrediente_receitaCountAggregateOutputType = {
    id: number
    id_ingrediente: number
    id_receita: number
    medida: number
    uni_medida: number
    base: number
    created_at: number
    _all: number
  }


  export type Ingrediente_receitaAvgAggregateInputType = {
    id?: true
    id_ingrediente?: true
    id_receita?: true
    medida?: true
    base?: true
  }

  export type Ingrediente_receitaSumAggregateInputType = {
    id?: true
    id_ingrediente?: true
    id_receita?: true
    medida?: true
    base?: true
  }

  export type Ingrediente_receitaMinAggregateInputType = {
    id?: true
    id_ingrediente?: true
    id_receita?: true
    medida?: true
    uni_medida?: true
    base?: true
    created_at?: true
  }

  export type Ingrediente_receitaMaxAggregateInputType = {
    id?: true
    id_ingrediente?: true
    id_receita?: true
    medida?: true
    uni_medida?: true
    base?: true
    created_at?: true
  }

  export type Ingrediente_receitaCountAggregateInputType = {
    id?: true
    id_ingrediente?: true
    id_receita?: true
    medida?: true
    uni_medida?: true
    base?: true
    created_at?: true
    _all?: true
  }

  export type Ingrediente_receitaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingrediente_receita to aggregate.
     */
    where?: ingrediente_receitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingrediente_receitas to fetch.
     */
    orderBy?: ingrediente_receitaOrderByWithRelationInput | ingrediente_receitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ingrediente_receitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingrediente_receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingrediente_receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ingrediente_receitas
    **/
    _count?: true | Ingrediente_receitaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ingrediente_receitaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ingrediente_receitaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ingrediente_receitaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ingrediente_receitaMaxAggregateInputType
  }

  export type GetIngrediente_receitaAggregateType<T extends Ingrediente_receitaAggregateArgs> = {
        [P in keyof T & keyof AggregateIngrediente_receita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngrediente_receita[P]>
      : GetScalarType<T[P], AggregateIngrediente_receita[P]>
  }




  export type ingrediente_receitaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingrediente_receitaWhereInput
    orderBy?: ingrediente_receitaOrderByWithAggregationInput | ingrediente_receitaOrderByWithAggregationInput[]
    by: Ingrediente_receitaScalarFieldEnum[] | Ingrediente_receitaScalarFieldEnum
    having?: ingrediente_receitaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ingrediente_receitaCountAggregateInputType | true
    _avg?: Ingrediente_receitaAvgAggregateInputType
    _sum?: Ingrediente_receitaSumAggregateInputType
    _min?: Ingrediente_receitaMinAggregateInputType
    _max?: Ingrediente_receitaMaxAggregateInputType
  }

  export type Ingrediente_receitaGroupByOutputType = {
    id: bigint
    id_ingrediente: bigint | null
    id_receita: bigint | null
    medida: number | null
    uni_medida: string | null
    base: number | null
    created_at: Date
    _count: Ingrediente_receitaCountAggregateOutputType | null
    _avg: Ingrediente_receitaAvgAggregateOutputType | null
    _sum: Ingrediente_receitaSumAggregateOutputType | null
    _min: Ingrediente_receitaMinAggregateOutputType | null
    _max: Ingrediente_receitaMaxAggregateOutputType | null
  }

  type GetIngrediente_receitaGroupByPayload<T extends ingrediente_receitaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ingrediente_receitaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ingrediente_receitaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ingrediente_receitaGroupByOutputType[P]>
            : GetScalarType<T[P], Ingrediente_receitaGroupByOutputType[P]>
        }
      >
    >


  export type ingrediente_receitaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ingrediente?: boolean
    id_receita?: boolean
    medida?: boolean
    uni_medida?: boolean
    base?: boolean
    created_at?: boolean
    ingredientes?: boolean | ingrediente_receita$ingredientesArgs<ExtArgs>
    receitas?: boolean | ingrediente_receita$receitasArgs<ExtArgs>
  }, ExtArgs["result"]["ingrediente_receita"]>

  export type ingrediente_receitaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ingrediente?: boolean
    id_receita?: boolean
    medida?: boolean
    uni_medida?: boolean
    base?: boolean
    created_at?: boolean
    ingredientes?: boolean | ingrediente_receita$ingredientesArgs<ExtArgs>
    receitas?: boolean | ingrediente_receita$receitasArgs<ExtArgs>
  }, ExtArgs["result"]["ingrediente_receita"]>

  export type ingrediente_receitaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_ingrediente?: boolean
    id_receita?: boolean
    medida?: boolean
    uni_medida?: boolean
    base?: boolean
    created_at?: boolean
    ingredientes?: boolean | ingrediente_receita$ingredientesArgs<ExtArgs>
    receitas?: boolean | ingrediente_receita$receitasArgs<ExtArgs>
  }, ExtArgs["result"]["ingrediente_receita"]>

  export type ingrediente_receitaSelectScalar = {
    id?: boolean
    id_ingrediente?: boolean
    id_receita?: boolean
    medida?: boolean
    uni_medida?: boolean
    base?: boolean
    created_at?: boolean
  }

  export type ingrediente_receitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_ingrediente" | "id_receita" | "medida" | "uni_medida" | "base" | "created_at", ExtArgs["result"]["ingrediente_receita"]>
  export type ingrediente_receitaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredientes?: boolean | ingrediente_receita$ingredientesArgs<ExtArgs>
    receitas?: boolean | ingrediente_receita$receitasArgs<ExtArgs>
  }
  export type ingrediente_receitaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredientes?: boolean | ingrediente_receita$ingredientesArgs<ExtArgs>
    receitas?: boolean | ingrediente_receita$receitasArgs<ExtArgs>
  }
  export type ingrediente_receitaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredientes?: boolean | ingrediente_receita$ingredientesArgs<ExtArgs>
    receitas?: boolean | ingrediente_receita$receitasArgs<ExtArgs>
  }

  export type $ingrediente_receitaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ingrediente_receita"
    objects: {
      ingredientes: Prisma.$ingredientesPayload<ExtArgs> | null
      receitas: Prisma.$receitasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_ingrediente: bigint | null
      id_receita: bigint | null
      medida: number | null
      uni_medida: string | null
      base: number | null
      created_at: Date
    }, ExtArgs["result"]["ingrediente_receita"]>
    composites: {}
  }

  type ingrediente_receitaGetPayload<S extends boolean | null | undefined | ingrediente_receitaDefaultArgs> = $Result.GetResult<Prisma.$ingrediente_receitaPayload, S>

  type ingrediente_receitaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ingrediente_receitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ingrediente_receitaCountAggregateInputType | true
    }

  export interface ingrediente_receitaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ingrediente_receita'], meta: { name: 'ingrediente_receita' } }
    /**
     * Find zero or one Ingrediente_receita that matches the filter.
     * @param {ingrediente_receitaFindUniqueArgs} args - Arguments to find a Ingrediente_receita
     * @example
     * // Get one Ingrediente_receita
     * const ingrediente_receita = await prisma.ingrediente_receita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ingrediente_receitaFindUniqueArgs>(args: SelectSubset<T, ingrediente_receitaFindUniqueArgs<ExtArgs>>): Prisma__ingrediente_receitaClient<$Result.GetResult<Prisma.$ingrediente_receitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingrediente_receita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ingrediente_receitaFindUniqueOrThrowArgs} args - Arguments to find a Ingrediente_receita
     * @example
     * // Get one Ingrediente_receita
     * const ingrediente_receita = await prisma.ingrediente_receita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ingrediente_receitaFindUniqueOrThrowArgs>(args: SelectSubset<T, ingrediente_receitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ingrediente_receitaClient<$Result.GetResult<Prisma.$ingrediente_receitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingrediente_receita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingrediente_receitaFindFirstArgs} args - Arguments to find a Ingrediente_receita
     * @example
     * // Get one Ingrediente_receita
     * const ingrediente_receita = await prisma.ingrediente_receita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ingrediente_receitaFindFirstArgs>(args?: SelectSubset<T, ingrediente_receitaFindFirstArgs<ExtArgs>>): Prisma__ingrediente_receitaClient<$Result.GetResult<Prisma.$ingrediente_receitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingrediente_receita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingrediente_receitaFindFirstOrThrowArgs} args - Arguments to find a Ingrediente_receita
     * @example
     * // Get one Ingrediente_receita
     * const ingrediente_receita = await prisma.ingrediente_receita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ingrediente_receitaFindFirstOrThrowArgs>(args?: SelectSubset<T, ingrediente_receitaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ingrediente_receitaClient<$Result.GetResult<Prisma.$ingrediente_receitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingrediente_receitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingrediente_receitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingrediente_receitas
     * const ingrediente_receitas = await prisma.ingrediente_receita.findMany()
     * 
     * // Get first 10 Ingrediente_receitas
     * const ingrediente_receitas = await prisma.ingrediente_receita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingrediente_receitaWithIdOnly = await prisma.ingrediente_receita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ingrediente_receitaFindManyArgs>(args?: SelectSubset<T, ingrediente_receitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingrediente_receitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingrediente_receita.
     * @param {ingrediente_receitaCreateArgs} args - Arguments to create a Ingrediente_receita.
     * @example
     * // Create one Ingrediente_receita
     * const Ingrediente_receita = await prisma.ingrediente_receita.create({
     *   data: {
     *     // ... data to create a Ingrediente_receita
     *   }
     * })
     * 
     */
    create<T extends ingrediente_receitaCreateArgs>(args: SelectSubset<T, ingrediente_receitaCreateArgs<ExtArgs>>): Prisma__ingrediente_receitaClient<$Result.GetResult<Prisma.$ingrediente_receitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingrediente_receitas.
     * @param {ingrediente_receitaCreateManyArgs} args - Arguments to create many Ingrediente_receitas.
     * @example
     * // Create many Ingrediente_receitas
     * const ingrediente_receita = await prisma.ingrediente_receita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ingrediente_receitaCreateManyArgs>(args?: SelectSubset<T, ingrediente_receitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingrediente_receitas and returns the data saved in the database.
     * @param {ingrediente_receitaCreateManyAndReturnArgs} args - Arguments to create many Ingrediente_receitas.
     * @example
     * // Create many Ingrediente_receitas
     * const ingrediente_receita = await prisma.ingrediente_receita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingrediente_receitas and only return the `id`
     * const ingrediente_receitaWithIdOnly = await prisma.ingrediente_receita.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ingrediente_receitaCreateManyAndReturnArgs>(args?: SelectSubset<T, ingrediente_receitaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingrediente_receitaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingrediente_receita.
     * @param {ingrediente_receitaDeleteArgs} args - Arguments to delete one Ingrediente_receita.
     * @example
     * // Delete one Ingrediente_receita
     * const Ingrediente_receita = await prisma.ingrediente_receita.delete({
     *   where: {
     *     // ... filter to delete one Ingrediente_receita
     *   }
     * })
     * 
     */
    delete<T extends ingrediente_receitaDeleteArgs>(args: SelectSubset<T, ingrediente_receitaDeleteArgs<ExtArgs>>): Prisma__ingrediente_receitaClient<$Result.GetResult<Prisma.$ingrediente_receitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingrediente_receita.
     * @param {ingrediente_receitaUpdateArgs} args - Arguments to update one Ingrediente_receita.
     * @example
     * // Update one Ingrediente_receita
     * const ingrediente_receita = await prisma.ingrediente_receita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ingrediente_receitaUpdateArgs>(args: SelectSubset<T, ingrediente_receitaUpdateArgs<ExtArgs>>): Prisma__ingrediente_receitaClient<$Result.GetResult<Prisma.$ingrediente_receitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingrediente_receitas.
     * @param {ingrediente_receitaDeleteManyArgs} args - Arguments to filter Ingrediente_receitas to delete.
     * @example
     * // Delete a few Ingrediente_receitas
     * const { count } = await prisma.ingrediente_receita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ingrediente_receitaDeleteManyArgs>(args?: SelectSubset<T, ingrediente_receitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingrediente_receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingrediente_receitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingrediente_receitas
     * const ingrediente_receita = await prisma.ingrediente_receita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ingrediente_receitaUpdateManyArgs>(args: SelectSubset<T, ingrediente_receitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingrediente_receitas and returns the data updated in the database.
     * @param {ingrediente_receitaUpdateManyAndReturnArgs} args - Arguments to update many Ingrediente_receitas.
     * @example
     * // Update many Ingrediente_receitas
     * const ingrediente_receita = await prisma.ingrediente_receita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingrediente_receitas and only return the `id`
     * const ingrediente_receitaWithIdOnly = await prisma.ingrediente_receita.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ingrediente_receitaUpdateManyAndReturnArgs>(args: SelectSubset<T, ingrediente_receitaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingrediente_receitaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingrediente_receita.
     * @param {ingrediente_receitaUpsertArgs} args - Arguments to update or create a Ingrediente_receita.
     * @example
     * // Update or create a Ingrediente_receita
     * const ingrediente_receita = await prisma.ingrediente_receita.upsert({
     *   create: {
     *     // ... data to create a Ingrediente_receita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingrediente_receita we want to update
     *   }
     * })
     */
    upsert<T extends ingrediente_receitaUpsertArgs>(args: SelectSubset<T, ingrediente_receitaUpsertArgs<ExtArgs>>): Prisma__ingrediente_receitaClient<$Result.GetResult<Prisma.$ingrediente_receitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingrediente_receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingrediente_receitaCountArgs} args - Arguments to filter Ingrediente_receitas to count.
     * @example
     * // Count the number of Ingrediente_receitas
     * const count = await prisma.ingrediente_receita.count({
     *   where: {
     *     // ... the filter for the Ingrediente_receitas we want to count
     *   }
     * })
    **/
    count<T extends ingrediente_receitaCountArgs>(
      args?: Subset<T, ingrediente_receitaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ingrediente_receitaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingrediente_receita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ingrediente_receitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ingrediente_receitaAggregateArgs>(args: Subset<T, Ingrediente_receitaAggregateArgs>): Prisma.PrismaPromise<GetIngrediente_receitaAggregateType<T>>

    /**
     * Group by Ingrediente_receita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingrediente_receitaGroupByArgs} args - Group by arguments.
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
      T extends ingrediente_receitaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ingrediente_receitaGroupByArgs['orderBy'] }
        : { orderBy?: ingrediente_receitaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ingrediente_receitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngrediente_receitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ingrediente_receita model
   */
  readonly fields: ingrediente_receitaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ingrediente_receita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ingrediente_receitaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredientes<T extends ingrediente_receita$ingredientesArgs<ExtArgs> = {}>(args?: Subset<T, ingrediente_receita$ingredientesArgs<ExtArgs>>): Prisma__ingredientesClient<$Result.GetResult<Prisma.$ingredientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    receitas<T extends ingrediente_receita$receitasArgs<ExtArgs> = {}>(args?: Subset<T, ingrediente_receita$receitasArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ingrediente_receita model
   */
  interface ingrediente_receitaFieldRefs {
    readonly id: FieldRef<"ingrediente_receita", 'BigInt'>
    readonly id_ingrediente: FieldRef<"ingrediente_receita", 'BigInt'>
    readonly id_receita: FieldRef<"ingrediente_receita", 'BigInt'>
    readonly medida: FieldRef<"ingrediente_receita", 'Float'>
    readonly uni_medida: FieldRef<"ingrediente_receita", 'String'>
    readonly base: FieldRef<"ingrediente_receita", 'Float'>
    readonly created_at: FieldRef<"ingrediente_receita", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ingrediente_receita findUnique
   */
  export type ingrediente_receitaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_receita
     */
    select?: ingrediente_receitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_receita
     */
    omit?: ingrediente_receitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_receitaInclude<ExtArgs> | null
    /**
     * Filter, which ingrediente_receita to fetch.
     */
    where: ingrediente_receitaWhereUniqueInput
  }

  /**
   * ingrediente_receita findUniqueOrThrow
   */
  export type ingrediente_receitaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_receita
     */
    select?: ingrediente_receitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_receita
     */
    omit?: ingrediente_receitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_receitaInclude<ExtArgs> | null
    /**
     * Filter, which ingrediente_receita to fetch.
     */
    where: ingrediente_receitaWhereUniqueInput
  }

  /**
   * ingrediente_receita findFirst
   */
  export type ingrediente_receitaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_receita
     */
    select?: ingrediente_receitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_receita
     */
    omit?: ingrediente_receitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_receitaInclude<ExtArgs> | null
    /**
     * Filter, which ingrediente_receita to fetch.
     */
    where?: ingrediente_receitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingrediente_receitas to fetch.
     */
    orderBy?: ingrediente_receitaOrderByWithRelationInput | ingrediente_receitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingrediente_receitas.
     */
    cursor?: ingrediente_receitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingrediente_receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingrediente_receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingrediente_receitas.
     */
    distinct?: Ingrediente_receitaScalarFieldEnum | Ingrediente_receitaScalarFieldEnum[]
  }

  /**
   * ingrediente_receita findFirstOrThrow
   */
  export type ingrediente_receitaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_receita
     */
    select?: ingrediente_receitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_receita
     */
    omit?: ingrediente_receitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_receitaInclude<ExtArgs> | null
    /**
     * Filter, which ingrediente_receita to fetch.
     */
    where?: ingrediente_receitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingrediente_receitas to fetch.
     */
    orderBy?: ingrediente_receitaOrderByWithRelationInput | ingrediente_receitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingrediente_receitas.
     */
    cursor?: ingrediente_receitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingrediente_receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingrediente_receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingrediente_receitas.
     */
    distinct?: Ingrediente_receitaScalarFieldEnum | Ingrediente_receitaScalarFieldEnum[]
  }

  /**
   * ingrediente_receita findMany
   */
  export type ingrediente_receitaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_receita
     */
    select?: ingrediente_receitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_receita
     */
    omit?: ingrediente_receitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_receitaInclude<ExtArgs> | null
    /**
     * Filter, which ingrediente_receitas to fetch.
     */
    where?: ingrediente_receitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingrediente_receitas to fetch.
     */
    orderBy?: ingrediente_receitaOrderByWithRelationInput | ingrediente_receitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ingrediente_receitas.
     */
    cursor?: ingrediente_receitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingrediente_receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingrediente_receitas.
     */
    skip?: number
    distinct?: Ingrediente_receitaScalarFieldEnum | Ingrediente_receitaScalarFieldEnum[]
  }

  /**
   * ingrediente_receita create
   */
  export type ingrediente_receitaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_receita
     */
    select?: ingrediente_receitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_receita
     */
    omit?: ingrediente_receitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_receitaInclude<ExtArgs> | null
    /**
     * The data needed to create a ingrediente_receita.
     */
    data?: XOR<ingrediente_receitaCreateInput, ingrediente_receitaUncheckedCreateInput>
  }

  /**
   * ingrediente_receita createMany
   */
  export type ingrediente_receitaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ingrediente_receitas.
     */
    data: ingrediente_receitaCreateManyInput | ingrediente_receitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingrediente_receita createManyAndReturn
   */
  export type ingrediente_receitaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_receita
     */
    select?: ingrediente_receitaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_receita
     */
    omit?: ingrediente_receitaOmit<ExtArgs> | null
    /**
     * The data used to create many ingrediente_receitas.
     */
    data: ingrediente_receitaCreateManyInput | ingrediente_receitaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_receitaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ingrediente_receita update
   */
  export type ingrediente_receitaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_receita
     */
    select?: ingrediente_receitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_receita
     */
    omit?: ingrediente_receitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_receitaInclude<ExtArgs> | null
    /**
     * The data needed to update a ingrediente_receita.
     */
    data: XOR<ingrediente_receitaUpdateInput, ingrediente_receitaUncheckedUpdateInput>
    /**
     * Choose, which ingrediente_receita to update.
     */
    where: ingrediente_receitaWhereUniqueInput
  }

  /**
   * ingrediente_receita updateMany
   */
  export type ingrediente_receitaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ingrediente_receitas.
     */
    data: XOR<ingrediente_receitaUpdateManyMutationInput, ingrediente_receitaUncheckedUpdateManyInput>
    /**
     * Filter which ingrediente_receitas to update
     */
    where?: ingrediente_receitaWhereInput
    /**
     * Limit how many ingrediente_receitas to update.
     */
    limit?: number
  }

  /**
   * ingrediente_receita updateManyAndReturn
   */
  export type ingrediente_receitaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_receita
     */
    select?: ingrediente_receitaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_receita
     */
    omit?: ingrediente_receitaOmit<ExtArgs> | null
    /**
     * The data used to update ingrediente_receitas.
     */
    data: XOR<ingrediente_receitaUpdateManyMutationInput, ingrediente_receitaUncheckedUpdateManyInput>
    /**
     * Filter which ingrediente_receitas to update
     */
    where?: ingrediente_receitaWhereInput
    /**
     * Limit how many ingrediente_receitas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_receitaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ingrediente_receita upsert
   */
  export type ingrediente_receitaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_receita
     */
    select?: ingrediente_receitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_receita
     */
    omit?: ingrediente_receitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_receitaInclude<ExtArgs> | null
    /**
     * The filter to search for the ingrediente_receita to update in case it exists.
     */
    where: ingrediente_receitaWhereUniqueInput
    /**
     * In case the ingrediente_receita found by the `where` argument doesn't exist, create a new ingrediente_receita with this data.
     */
    create: XOR<ingrediente_receitaCreateInput, ingrediente_receitaUncheckedCreateInput>
    /**
     * In case the ingrediente_receita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ingrediente_receitaUpdateInput, ingrediente_receitaUncheckedUpdateInput>
  }

  /**
   * ingrediente_receita delete
   */
  export type ingrediente_receitaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_receita
     */
    select?: ingrediente_receitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_receita
     */
    omit?: ingrediente_receitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_receitaInclude<ExtArgs> | null
    /**
     * Filter which ingrediente_receita to delete.
     */
    where: ingrediente_receitaWhereUniqueInput
  }

  /**
   * ingrediente_receita deleteMany
   */
  export type ingrediente_receitaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingrediente_receitas to delete
     */
    where?: ingrediente_receitaWhereInput
    /**
     * Limit how many ingrediente_receitas to delete.
     */
    limit?: number
  }

  /**
   * ingrediente_receita.ingredientes
   */
  export type ingrediente_receita$ingredientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredientes
     */
    select?: ingredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredientes
     */
    omit?: ingredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientesInclude<ExtArgs> | null
    where?: ingredientesWhereInput
  }

  /**
   * ingrediente_receita.receitas
   */
  export type ingrediente_receita$receitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    where?: receitasWhereInput
  }

  /**
   * ingrediente_receita without action
   */
  export type ingrediente_receitaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_receita
     */
    select?: ingrediente_receitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_receita
     */
    omit?: ingrediente_receitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_receitaInclude<ExtArgs> | null
  }


  /**
   * Model ingredientes
   */

  export type AggregateIngredientes = {
    _count: IngredientesCountAggregateOutputType | null
    _avg: IngredientesAvgAggregateOutputType | null
    _sum: IngredientesSumAggregateOutputType | null
    _min: IngredientesMinAggregateOutputType | null
    _max: IngredientesMaxAggregateOutputType | null
  }

  export type IngredientesAvgAggregateOutputType = {
    id: number | null
    valor_item: number | null
  }

  export type IngredientesSumAggregateOutputType = {
    id: bigint | null
    valor_item: number | null
  }

  export type IngredientesMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    nome: string | null
    uni_medida_compra: string | null
    valor_item: number | null
  }

  export type IngredientesMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    nome: string | null
    uni_medida_compra: string | null
    valor_item: number | null
  }

  export type IngredientesCountAggregateOutputType = {
    id: number
    created_at: number
    nome: number
    uni_medida_compra: number
    valor_item: number
    _all: number
  }


  export type IngredientesAvgAggregateInputType = {
    id?: true
    valor_item?: true
  }

  export type IngredientesSumAggregateInputType = {
    id?: true
    valor_item?: true
  }

  export type IngredientesMinAggregateInputType = {
    id?: true
    created_at?: true
    nome?: true
    uni_medida_compra?: true
    valor_item?: true
  }

  export type IngredientesMaxAggregateInputType = {
    id?: true
    created_at?: true
    nome?: true
    uni_medida_compra?: true
    valor_item?: true
  }

  export type IngredientesCountAggregateInputType = {
    id?: true
    created_at?: true
    nome?: true
    uni_medida_compra?: true
    valor_item?: true
    _all?: true
  }

  export type IngredientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredientes to aggregate.
     */
    where?: ingredientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredientes to fetch.
     */
    orderBy?: ingredientesOrderByWithRelationInput | ingredientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ingredientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ingredientes
    **/
    _count?: true | IngredientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientesMaxAggregateInputType
  }

  export type GetIngredientesAggregateType<T extends IngredientesAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredientes[P]>
      : GetScalarType<T[P], AggregateIngredientes[P]>
  }




  export type ingredientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingredientesWhereInput
    orderBy?: ingredientesOrderByWithAggregationInput | ingredientesOrderByWithAggregationInput[]
    by: IngredientesScalarFieldEnum[] | IngredientesScalarFieldEnum
    having?: ingredientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientesCountAggregateInputType | true
    _avg?: IngredientesAvgAggregateInputType
    _sum?: IngredientesSumAggregateInputType
    _min?: IngredientesMinAggregateInputType
    _max?: IngredientesMaxAggregateInputType
  }

  export type IngredientesGroupByOutputType = {
    id: bigint
    created_at: Date
    nome: string | null
    uni_medida_compra: string | null
    valor_item: number | null
    _count: IngredientesCountAggregateOutputType | null
    _avg: IngredientesAvgAggregateOutputType | null
    _sum: IngredientesSumAggregateOutputType | null
    _min: IngredientesMinAggregateOutputType | null
    _max: IngredientesMaxAggregateOutputType | null
  }

  type GetIngredientesGroupByPayload<T extends ingredientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientesGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientesGroupByOutputType[P]>
        }
      >
    >


  export type ingredientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nome?: boolean
    uni_medida_compra?: boolean
    valor_item?: boolean
    estoque?: boolean | ingredientes$estoqueArgs<ExtArgs>
    ingrediente_receita?: boolean | ingredientes$ingrediente_receitaArgs<ExtArgs>
    _count?: boolean | IngredientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientes"]>

  export type ingredientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nome?: boolean
    uni_medida_compra?: boolean
    valor_item?: boolean
  }, ExtArgs["result"]["ingredientes"]>

  export type ingredientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    nome?: boolean
    uni_medida_compra?: boolean
    valor_item?: boolean
  }, ExtArgs["result"]["ingredientes"]>

  export type ingredientesSelectScalar = {
    id?: boolean
    created_at?: boolean
    nome?: boolean
    uni_medida_compra?: boolean
    valor_item?: boolean
  }

  export type ingredientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "nome" | "uni_medida_compra" | "valor_item", ExtArgs["result"]["ingredientes"]>
  export type ingredientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estoque?: boolean | ingredientes$estoqueArgs<ExtArgs>
    ingrediente_receita?: boolean | ingredientes$ingrediente_receitaArgs<ExtArgs>
    _count?: boolean | IngredientesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ingredientesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ingredientesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ingredientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ingredientes"
    objects: {
      estoque: Prisma.$estoquePayload<ExtArgs>[]
      ingrediente_receita: Prisma.$ingrediente_receitaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      nome: string | null
      uni_medida_compra: string | null
      valor_item: number | null
    }, ExtArgs["result"]["ingredientes"]>
    composites: {}
  }

  type ingredientesGetPayload<S extends boolean | null | undefined | ingredientesDefaultArgs> = $Result.GetResult<Prisma.$ingredientesPayload, S>

  type ingredientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ingredientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientesCountAggregateInputType | true
    }

  export interface ingredientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ingredientes'], meta: { name: 'ingredientes' } }
    /**
     * Find zero or one Ingredientes that matches the filter.
     * @param {ingredientesFindUniqueArgs} args - Arguments to find a Ingredientes
     * @example
     * // Get one Ingredientes
     * const ingredientes = await prisma.ingredientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ingredientesFindUniqueArgs>(args: SelectSubset<T, ingredientesFindUniqueArgs<ExtArgs>>): Prisma__ingredientesClient<$Result.GetResult<Prisma.$ingredientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ingredientesFindUniqueOrThrowArgs} args - Arguments to find a Ingredientes
     * @example
     * // Get one Ingredientes
     * const ingredientes = await prisma.ingredientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ingredientesFindUniqueOrThrowArgs>(args: SelectSubset<T, ingredientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ingredientesClient<$Result.GetResult<Prisma.$ingredientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientesFindFirstArgs} args - Arguments to find a Ingredientes
     * @example
     * // Get one Ingredientes
     * const ingredientes = await prisma.ingredientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ingredientesFindFirstArgs>(args?: SelectSubset<T, ingredientesFindFirstArgs<ExtArgs>>): Prisma__ingredientesClient<$Result.GetResult<Prisma.$ingredientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientesFindFirstOrThrowArgs} args - Arguments to find a Ingredientes
     * @example
     * // Get one Ingredientes
     * const ingredientes = await prisma.ingredientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ingredientesFindFirstOrThrowArgs>(args?: SelectSubset<T, ingredientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ingredientesClient<$Result.GetResult<Prisma.$ingredientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredientes
     * const ingredientes = await prisma.ingredientes.findMany()
     * 
     * // Get first 10 Ingredientes
     * const ingredientes = await prisma.ingredientes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientesWithIdOnly = await prisma.ingredientes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ingredientesFindManyArgs>(args?: SelectSubset<T, ingredientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredientes.
     * @param {ingredientesCreateArgs} args - Arguments to create a Ingredientes.
     * @example
     * // Create one Ingredientes
     * const Ingredientes = await prisma.ingredientes.create({
     *   data: {
     *     // ... data to create a Ingredientes
     *   }
     * })
     * 
     */
    create<T extends ingredientesCreateArgs>(args: SelectSubset<T, ingredientesCreateArgs<ExtArgs>>): Prisma__ingredientesClient<$Result.GetResult<Prisma.$ingredientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredientes.
     * @param {ingredientesCreateManyArgs} args - Arguments to create many Ingredientes.
     * @example
     * // Create many Ingredientes
     * const ingredientes = await prisma.ingredientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ingredientesCreateManyArgs>(args?: SelectSubset<T, ingredientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredientes and returns the data saved in the database.
     * @param {ingredientesCreateManyAndReturnArgs} args - Arguments to create many Ingredientes.
     * @example
     * // Create many Ingredientes
     * const ingredientes = await prisma.ingredientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredientes and only return the `id`
     * const ingredientesWithIdOnly = await prisma.ingredientes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ingredientesCreateManyAndReturnArgs>(args?: SelectSubset<T, ingredientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredientes.
     * @param {ingredientesDeleteArgs} args - Arguments to delete one Ingredientes.
     * @example
     * // Delete one Ingredientes
     * const Ingredientes = await prisma.ingredientes.delete({
     *   where: {
     *     // ... filter to delete one Ingredientes
     *   }
     * })
     * 
     */
    delete<T extends ingredientesDeleteArgs>(args: SelectSubset<T, ingredientesDeleteArgs<ExtArgs>>): Prisma__ingredientesClient<$Result.GetResult<Prisma.$ingredientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredientes.
     * @param {ingredientesUpdateArgs} args - Arguments to update one Ingredientes.
     * @example
     * // Update one Ingredientes
     * const ingredientes = await prisma.ingredientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ingredientesUpdateArgs>(args: SelectSubset<T, ingredientesUpdateArgs<ExtArgs>>): Prisma__ingredientesClient<$Result.GetResult<Prisma.$ingredientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredientes.
     * @param {ingredientesDeleteManyArgs} args - Arguments to filter Ingredientes to delete.
     * @example
     * // Delete a few Ingredientes
     * const { count } = await prisma.ingredientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ingredientesDeleteManyArgs>(args?: SelectSubset<T, ingredientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredientes
     * const ingredientes = await prisma.ingredientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ingredientesUpdateManyArgs>(args: SelectSubset<T, ingredientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredientes and returns the data updated in the database.
     * @param {ingredientesUpdateManyAndReturnArgs} args - Arguments to update many Ingredientes.
     * @example
     * // Update many Ingredientes
     * const ingredientes = await prisma.ingredientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredientes and only return the `id`
     * const ingredientesWithIdOnly = await prisma.ingredientes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ingredientesUpdateManyAndReturnArgs>(args: SelectSubset<T, ingredientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredientes.
     * @param {ingredientesUpsertArgs} args - Arguments to update or create a Ingredientes.
     * @example
     * // Update or create a Ingredientes
     * const ingredientes = await prisma.ingredientes.upsert({
     *   create: {
     *     // ... data to create a Ingredientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredientes we want to update
     *   }
     * })
     */
    upsert<T extends ingredientesUpsertArgs>(args: SelectSubset<T, ingredientesUpsertArgs<ExtArgs>>): Prisma__ingredientesClient<$Result.GetResult<Prisma.$ingredientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientesCountArgs} args - Arguments to filter Ingredientes to count.
     * @example
     * // Count the number of Ingredientes
     * const count = await prisma.ingredientes.count({
     *   where: {
     *     // ... the filter for the Ingredientes we want to count
     *   }
     * })
    **/
    count<T extends ingredientesCountArgs>(
      args?: Subset<T, ingredientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientesAggregateArgs>(args: Subset<T, IngredientesAggregateArgs>): Prisma.PrismaPromise<GetIngredientesAggregateType<T>>

    /**
     * Group by Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientesGroupByArgs} args - Group by arguments.
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
      T extends ingredientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ingredientesGroupByArgs['orderBy'] }
        : { orderBy?: ingredientesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ingredientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ingredientes model
   */
  readonly fields: ingredientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ingredientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ingredientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estoque<T extends ingredientes$estoqueArgs<ExtArgs> = {}>(args?: Subset<T, ingredientes$estoqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ingrediente_receita<T extends ingredientes$ingrediente_receitaArgs<ExtArgs> = {}>(args?: Subset<T, ingredientes$ingrediente_receitaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingrediente_receitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ingredientes model
   */
  interface ingredientesFieldRefs {
    readonly id: FieldRef<"ingredientes", 'BigInt'>
    readonly created_at: FieldRef<"ingredientes", 'DateTime'>
    readonly nome: FieldRef<"ingredientes", 'String'>
    readonly uni_medida_compra: FieldRef<"ingredientes", 'String'>
    readonly valor_item: FieldRef<"ingredientes", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ingredientes findUnique
   */
  export type ingredientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredientes
     */
    select?: ingredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredientes
     */
    omit?: ingredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientesInclude<ExtArgs> | null
    /**
     * Filter, which ingredientes to fetch.
     */
    where: ingredientesWhereUniqueInput
  }

  /**
   * ingredientes findUniqueOrThrow
   */
  export type ingredientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredientes
     */
    select?: ingredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredientes
     */
    omit?: ingredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientesInclude<ExtArgs> | null
    /**
     * Filter, which ingredientes to fetch.
     */
    where: ingredientesWhereUniqueInput
  }

  /**
   * ingredientes findFirst
   */
  export type ingredientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredientes
     */
    select?: ingredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredientes
     */
    omit?: ingredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientesInclude<ExtArgs> | null
    /**
     * Filter, which ingredientes to fetch.
     */
    where?: ingredientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredientes to fetch.
     */
    orderBy?: ingredientesOrderByWithRelationInput | ingredientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingredientes.
     */
    cursor?: ingredientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingredientes.
     */
    distinct?: IngredientesScalarFieldEnum | IngredientesScalarFieldEnum[]
  }

  /**
   * ingredientes findFirstOrThrow
   */
  export type ingredientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredientes
     */
    select?: ingredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredientes
     */
    omit?: ingredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientesInclude<ExtArgs> | null
    /**
     * Filter, which ingredientes to fetch.
     */
    where?: ingredientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredientes to fetch.
     */
    orderBy?: ingredientesOrderByWithRelationInput | ingredientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingredientes.
     */
    cursor?: ingredientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingredientes.
     */
    distinct?: IngredientesScalarFieldEnum | IngredientesScalarFieldEnum[]
  }

  /**
   * ingredientes findMany
   */
  export type ingredientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredientes
     */
    select?: ingredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredientes
     */
    omit?: ingredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientesInclude<ExtArgs> | null
    /**
     * Filter, which ingredientes to fetch.
     */
    where?: ingredientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredientes to fetch.
     */
    orderBy?: ingredientesOrderByWithRelationInput | ingredientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ingredientes.
     */
    cursor?: ingredientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredientes.
     */
    skip?: number
    distinct?: IngredientesScalarFieldEnum | IngredientesScalarFieldEnum[]
  }

  /**
   * ingredientes create
   */
  export type ingredientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredientes
     */
    select?: ingredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredientes
     */
    omit?: ingredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientesInclude<ExtArgs> | null
    /**
     * The data needed to create a ingredientes.
     */
    data?: XOR<ingredientesCreateInput, ingredientesUncheckedCreateInput>
  }

  /**
   * ingredientes createMany
   */
  export type ingredientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ingredientes.
     */
    data: ingredientesCreateManyInput | ingredientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingredientes createManyAndReturn
   */
  export type ingredientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredientes
     */
    select?: ingredientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingredientes
     */
    omit?: ingredientesOmit<ExtArgs> | null
    /**
     * The data used to create many ingredientes.
     */
    data: ingredientesCreateManyInput | ingredientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingredientes update
   */
  export type ingredientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredientes
     */
    select?: ingredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredientes
     */
    omit?: ingredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientesInclude<ExtArgs> | null
    /**
     * The data needed to update a ingredientes.
     */
    data: XOR<ingredientesUpdateInput, ingredientesUncheckedUpdateInput>
    /**
     * Choose, which ingredientes to update.
     */
    where: ingredientesWhereUniqueInput
  }

  /**
   * ingredientes updateMany
   */
  export type ingredientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ingredientes.
     */
    data: XOR<ingredientesUpdateManyMutationInput, ingredientesUncheckedUpdateManyInput>
    /**
     * Filter which ingredientes to update
     */
    where?: ingredientesWhereInput
    /**
     * Limit how many ingredientes to update.
     */
    limit?: number
  }

  /**
   * ingredientes updateManyAndReturn
   */
  export type ingredientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredientes
     */
    select?: ingredientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingredientes
     */
    omit?: ingredientesOmit<ExtArgs> | null
    /**
     * The data used to update ingredientes.
     */
    data: XOR<ingredientesUpdateManyMutationInput, ingredientesUncheckedUpdateManyInput>
    /**
     * Filter which ingredientes to update
     */
    where?: ingredientesWhereInput
    /**
     * Limit how many ingredientes to update.
     */
    limit?: number
  }

  /**
   * ingredientes upsert
   */
  export type ingredientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredientes
     */
    select?: ingredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredientes
     */
    omit?: ingredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientesInclude<ExtArgs> | null
    /**
     * The filter to search for the ingredientes to update in case it exists.
     */
    where: ingredientesWhereUniqueInput
    /**
     * In case the ingredientes found by the `where` argument doesn't exist, create a new ingredientes with this data.
     */
    create: XOR<ingredientesCreateInput, ingredientesUncheckedCreateInput>
    /**
     * In case the ingredientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ingredientesUpdateInput, ingredientesUncheckedUpdateInput>
  }

  /**
   * ingredientes delete
   */
  export type ingredientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredientes
     */
    select?: ingredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredientes
     */
    omit?: ingredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientesInclude<ExtArgs> | null
    /**
     * Filter which ingredientes to delete.
     */
    where: ingredientesWhereUniqueInput
  }

  /**
   * ingredientes deleteMany
   */
  export type ingredientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredientes to delete
     */
    where?: ingredientesWhereInput
    /**
     * Limit how many ingredientes to delete.
     */
    limit?: number
  }

  /**
   * ingredientes.estoque
   */
  export type ingredientes$estoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estoque
     */
    select?: estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estoque
     */
    omit?: estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estoqueInclude<ExtArgs> | null
    where?: estoqueWhereInput
    orderBy?: estoqueOrderByWithRelationInput | estoqueOrderByWithRelationInput[]
    cursor?: estoqueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstoqueScalarFieldEnum | EstoqueScalarFieldEnum[]
  }

  /**
   * ingredientes.ingrediente_receita
   */
  export type ingredientes$ingrediente_receitaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_receita
     */
    select?: ingrediente_receitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_receita
     */
    omit?: ingrediente_receitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_receitaInclude<ExtArgs> | null
    where?: ingrediente_receitaWhereInput
    orderBy?: ingrediente_receitaOrderByWithRelationInput | ingrediente_receitaOrderByWithRelationInput[]
    cursor?: ingrediente_receitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ingrediente_receitaScalarFieldEnum | Ingrediente_receitaScalarFieldEnum[]
  }

  /**
   * ingredientes without action
   */
  export type ingredientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredientes
     */
    select?: ingredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredientes
     */
    omit?: ingredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientesInclude<ExtArgs> | null
  }


  /**
   * Model receitas
   */

  export type AggregateReceitas = {
    _count: ReceitasCountAggregateOutputType | null
    _avg: ReceitasAvgAggregateOutputType | null
    _sum: ReceitasSumAggregateOutputType | null
    _min: ReceitasMinAggregateOutputType | null
    _max: ReceitasMaxAggregateOutputType | null
  }

  export type ReceitasAvgAggregateOutputType = {
    id: number | null
    id_usuario: number | null
  }

  export type ReceitasSumAggregateOutputType = {
    id: bigint | null
    id_usuario: number | null
  }

  export type ReceitasMinAggregateOutputType = {
    id: bigint | null
    nome: string | null
    descricao: string | null
    created_at: Date | null
    id_usuario: number | null
  }

  export type ReceitasMaxAggregateOutputType = {
    id: bigint | null
    nome: string | null
    descricao: string | null
    created_at: Date | null
    id_usuario: number | null
  }

  export type ReceitasCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    created_at: number
    id_usuario: number
    _all: number
  }


  export type ReceitasAvgAggregateInputType = {
    id?: true
    id_usuario?: true
  }

  export type ReceitasSumAggregateInputType = {
    id?: true
    id_usuario?: true
  }

  export type ReceitasMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    created_at?: true
    id_usuario?: true
  }

  export type ReceitasMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    created_at?: true
    id_usuario?: true
  }

  export type ReceitasCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    created_at?: true
    id_usuario?: true
    _all?: true
  }

  export type ReceitasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receitas to aggregate.
     */
    where?: receitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receitas to fetch.
     */
    orderBy?: receitasOrderByWithRelationInput | receitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: receitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned receitas
    **/
    _count?: true | ReceitasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceitasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceitasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceitasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceitasMaxAggregateInputType
  }

  export type GetReceitasAggregateType<T extends ReceitasAggregateArgs> = {
        [P in keyof T & keyof AggregateReceitas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceitas[P]>
      : GetScalarType<T[P], AggregateReceitas[P]>
  }




  export type receitasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receitasWhereInput
    orderBy?: receitasOrderByWithAggregationInput | receitasOrderByWithAggregationInput[]
    by: ReceitasScalarFieldEnum[] | ReceitasScalarFieldEnum
    having?: receitasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceitasCountAggregateInputType | true
    _avg?: ReceitasAvgAggregateInputType
    _sum?: ReceitasSumAggregateInputType
    _min?: ReceitasMinAggregateInputType
    _max?: ReceitasMaxAggregateInputType
  }

  export type ReceitasGroupByOutputType = {
    id: bigint
    nome: string | null
    descricao: string | null
    created_at: Date
    id_usuario: number | null
    _count: ReceitasCountAggregateOutputType | null
    _avg: ReceitasAvgAggregateOutputType | null
    _sum: ReceitasSumAggregateOutputType | null
    _min: ReceitasMinAggregateOutputType | null
    _max: ReceitasMaxAggregateOutputType | null
  }

  type GetReceitasGroupByPayload<T extends receitasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceitasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceitasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceitasGroupByOutputType[P]>
            : GetScalarType<T[P], ReceitasGroupByOutputType[P]>
        }
      >
    >


  export type receitasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    created_at?: boolean
    id_usuario?: boolean
    ingrediente_receita?: boolean | receitas$ingrediente_receitaArgs<ExtArgs>
    usuarios?: boolean | receitas$usuariosArgs<ExtArgs>
    _count?: boolean | ReceitasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitas"]>

  export type receitasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    created_at?: boolean
    id_usuario?: boolean
    usuarios?: boolean | receitas$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["receitas"]>

  export type receitasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    created_at?: boolean
    id_usuario?: boolean
    usuarios?: boolean | receitas$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["receitas"]>

  export type receitasSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    created_at?: boolean
    id_usuario?: boolean
  }

  export type receitasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "created_at" | "id_usuario", ExtArgs["result"]["receitas"]>
  export type receitasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingrediente_receita?: boolean | receitas$ingrediente_receitaArgs<ExtArgs>
    usuarios?: boolean | receitas$usuariosArgs<ExtArgs>
    _count?: boolean | ReceitasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type receitasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | receitas$usuariosArgs<ExtArgs>
  }
  export type receitasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | receitas$usuariosArgs<ExtArgs>
  }

  export type $receitasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "receitas"
    objects: {
      ingrediente_receita: Prisma.$ingrediente_receitaPayload<ExtArgs>[]
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nome: string | null
      descricao: string | null
      created_at: Date
      id_usuario: number | null
    }, ExtArgs["result"]["receitas"]>
    composites: {}
  }

  type receitasGetPayload<S extends boolean | null | undefined | receitasDefaultArgs> = $Result.GetResult<Prisma.$receitasPayload, S>

  type receitasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<receitasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceitasCountAggregateInputType | true
    }

  export interface receitasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['receitas'], meta: { name: 'receitas' } }
    /**
     * Find zero or one Receitas that matches the filter.
     * @param {receitasFindUniqueArgs} args - Arguments to find a Receitas
     * @example
     * // Get one Receitas
     * const receitas = await prisma.receitas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends receitasFindUniqueArgs>(args: SelectSubset<T, receitasFindUniqueArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receitas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {receitasFindUniqueOrThrowArgs} args - Arguments to find a Receitas
     * @example
     * // Get one Receitas
     * const receitas = await prisma.receitas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends receitasFindUniqueOrThrowArgs>(args: SelectSubset<T, receitasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receitasFindFirstArgs} args - Arguments to find a Receitas
     * @example
     * // Get one Receitas
     * const receitas = await prisma.receitas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends receitasFindFirstArgs>(args?: SelectSubset<T, receitasFindFirstArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receitas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receitasFindFirstOrThrowArgs} args - Arguments to find a Receitas
     * @example
     * // Get one Receitas
     * const receitas = await prisma.receitas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends receitasFindFirstOrThrowArgs>(args?: SelectSubset<T, receitasFindFirstOrThrowArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receitasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receitas
     * const receitas = await prisma.receitas.findMany()
     * 
     * // Get first 10 Receitas
     * const receitas = await prisma.receitas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receitasWithIdOnly = await prisma.receitas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends receitasFindManyArgs>(args?: SelectSubset<T, receitasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receitas.
     * @param {receitasCreateArgs} args - Arguments to create a Receitas.
     * @example
     * // Create one Receitas
     * const Receitas = await prisma.receitas.create({
     *   data: {
     *     // ... data to create a Receitas
     *   }
     * })
     * 
     */
    create<T extends receitasCreateArgs>(args: SelectSubset<T, receitasCreateArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receitas.
     * @param {receitasCreateManyArgs} args - Arguments to create many Receitas.
     * @example
     * // Create many Receitas
     * const receitas = await prisma.receitas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends receitasCreateManyArgs>(args?: SelectSubset<T, receitasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Receitas and returns the data saved in the database.
     * @param {receitasCreateManyAndReturnArgs} args - Arguments to create many Receitas.
     * @example
     * // Create many Receitas
     * const receitas = await prisma.receitas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Receitas and only return the `id`
     * const receitasWithIdOnly = await prisma.receitas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends receitasCreateManyAndReturnArgs>(args?: SelectSubset<T, receitasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Receitas.
     * @param {receitasDeleteArgs} args - Arguments to delete one Receitas.
     * @example
     * // Delete one Receitas
     * const Receitas = await prisma.receitas.delete({
     *   where: {
     *     // ... filter to delete one Receitas
     *   }
     * })
     * 
     */
    delete<T extends receitasDeleteArgs>(args: SelectSubset<T, receitasDeleteArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receitas.
     * @param {receitasUpdateArgs} args - Arguments to update one Receitas.
     * @example
     * // Update one Receitas
     * const receitas = await prisma.receitas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends receitasUpdateArgs>(args: SelectSubset<T, receitasUpdateArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receitas.
     * @param {receitasDeleteManyArgs} args - Arguments to filter Receitas to delete.
     * @example
     * // Delete a few Receitas
     * const { count } = await prisma.receitas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends receitasDeleteManyArgs>(args?: SelectSubset<T, receitasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receitasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receitas
     * const receitas = await prisma.receitas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends receitasUpdateManyArgs>(args: SelectSubset<T, receitasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receitas and returns the data updated in the database.
     * @param {receitasUpdateManyAndReturnArgs} args - Arguments to update many Receitas.
     * @example
     * // Update many Receitas
     * const receitas = await prisma.receitas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Receitas and only return the `id`
     * const receitasWithIdOnly = await prisma.receitas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends receitasUpdateManyAndReturnArgs>(args: SelectSubset<T, receitasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Receitas.
     * @param {receitasUpsertArgs} args - Arguments to update or create a Receitas.
     * @example
     * // Update or create a Receitas
     * const receitas = await prisma.receitas.upsert({
     *   create: {
     *     // ... data to create a Receitas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receitas we want to update
     *   }
     * })
     */
    upsert<T extends receitasUpsertArgs>(args: SelectSubset<T, receitasUpsertArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receitasCountArgs} args - Arguments to filter Receitas to count.
     * @example
     * // Count the number of Receitas
     * const count = await prisma.receitas.count({
     *   where: {
     *     // ... the filter for the Receitas we want to count
     *   }
     * })
    **/
    count<T extends receitasCountArgs>(
      args?: Subset<T, receitasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceitasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceitasAggregateArgs>(args: Subset<T, ReceitasAggregateArgs>): Prisma.PrismaPromise<GetReceitasAggregateType<T>>

    /**
     * Group by Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receitasGroupByArgs} args - Group by arguments.
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
      T extends receitasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: receitasGroupByArgs['orderBy'] }
        : { orderBy?: receitasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, receitasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceitasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the receitas model
   */
  readonly fields: receitasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for receitas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__receitasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingrediente_receita<T extends receitas$ingrediente_receitaArgs<ExtArgs> = {}>(args?: Subset<T, receitas$ingrediente_receitaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingrediente_receitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends receitas$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, receitas$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the receitas model
   */
  interface receitasFieldRefs {
    readonly id: FieldRef<"receitas", 'BigInt'>
    readonly nome: FieldRef<"receitas", 'String'>
    readonly descricao: FieldRef<"receitas", 'String'>
    readonly created_at: FieldRef<"receitas", 'DateTime'>
    readonly id_usuario: FieldRef<"receitas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * receitas findUnique
   */
  export type receitasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * Filter, which receitas to fetch.
     */
    where: receitasWhereUniqueInput
  }

  /**
   * receitas findUniqueOrThrow
   */
  export type receitasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * Filter, which receitas to fetch.
     */
    where: receitasWhereUniqueInput
  }

  /**
   * receitas findFirst
   */
  export type receitasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * Filter, which receitas to fetch.
     */
    where?: receitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receitas to fetch.
     */
    orderBy?: receitasOrderByWithRelationInput | receitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receitas.
     */
    cursor?: receitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receitas.
     */
    distinct?: ReceitasScalarFieldEnum | ReceitasScalarFieldEnum[]
  }

  /**
   * receitas findFirstOrThrow
   */
  export type receitasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * Filter, which receitas to fetch.
     */
    where?: receitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receitas to fetch.
     */
    orderBy?: receitasOrderByWithRelationInput | receitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receitas.
     */
    cursor?: receitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receitas.
     */
    distinct?: ReceitasScalarFieldEnum | ReceitasScalarFieldEnum[]
  }

  /**
   * receitas findMany
   */
  export type receitasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * Filter, which receitas to fetch.
     */
    where?: receitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receitas to fetch.
     */
    orderBy?: receitasOrderByWithRelationInput | receitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing receitas.
     */
    cursor?: receitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receitas.
     */
    skip?: number
    distinct?: ReceitasScalarFieldEnum | ReceitasScalarFieldEnum[]
  }

  /**
   * receitas create
   */
  export type receitasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * The data needed to create a receitas.
     */
    data?: XOR<receitasCreateInput, receitasUncheckedCreateInput>
  }

  /**
   * receitas createMany
   */
  export type receitasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many receitas.
     */
    data: receitasCreateManyInput | receitasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * receitas createManyAndReturn
   */
  export type receitasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * The data used to create many receitas.
     */
    data: receitasCreateManyInput | receitasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * receitas update
   */
  export type receitasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * The data needed to update a receitas.
     */
    data: XOR<receitasUpdateInput, receitasUncheckedUpdateInput>
    /**
     * Choose, which receitas to update.
     */
    where: receitasWhereUniqueInput
  }

  /**
   * receitas updateMany
   */
  export type receitasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update receitas.
     */
    data: XOR<receitasUpdateManyMutationInput, receitasUncheckedUpdateManyInput>
    /**
     * Filter which receitas to update
     */
    where?: receitasWhereInput
    /**
     * Limit how many receitas to update.
     */
    limit?: number
  }

  /**
   * receitas updateManyAndReturn
   */
  export type receitasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * The data used to update receitas.
     */
    data: XOR<receitasUpdateManyMutationInput, receitasUncheckedUpdateManyInput>
    /**
     * Filter which receitas to update
     */
    where?: receitasWhereInput
    /**
     * Limit how many receitas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * receitas upsert
   */
  export type receitasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * The filter to search for the receitas to update in case it exists.
     */
    where: receitasWhereUniqueInput
    /**
     * In case the receitas found by the `where` argument doesn't exist, create a new receitas with this data.
     */
    create: XOR<receitasCreateInput, receitasUncheckedCreateInput>
    /**
     * In case the receitas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<receitasUpdateInput, receitasUncheckedUpdateInput>
  }

  /**
   * receitas delete
   */
  export type receitasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * Filter which receitas to delete.
     */
    where: receitasWhereUniqueInput
  }

  /**
   * receitas deleteMany
   */
  export type receitasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receitas to delete
     */
    where?: receitasWhereInput
    /**
     * Limit how many receitas to delete.
     */
    limit?: number
  }

  /**
   * receitas.ingrediente_receita
   */
  export type receitas$ingrediente_receitaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingrediente_receita
     */
    select?: ingrediente_receitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingrediente_receita
     */
    omit?: ingrediente_receitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingrediente_receitaInclude<ExtArgs> | null
    where?: ingrediente_receitaWhereInput
    orderBy?: ingrediente_receitaOrderByWithRelationInput | ingrediente_receitaOrderByWithRelationInput[]
    cursor?: ingrediente_receitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ingrediente_receitaScalarFieldEnum | Ingrediente_receitaScalarFieldEnum[]
  }

  /**
   * receitas.usuarios
   */
  export type receitas$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * receitas without action
   */
  export type receitasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
    permissao: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
    permissao: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    permissao: number | null
    login: string | null
    email: string | null
    senha: string | null
    created_at: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    permissao: number | null
    login: string | null
    email: string | null
    senha: string | null
    created_at: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nome: number
    permissao: number
    login: number
    email: number
    senha: number
    created_at: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
    permissao?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
    permissao?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nome?: true
    permissao?: true
    login?: true
    email?: true
    senha?: true
    created_at?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nome?: true
    permissao?: true
    login?: true
    email?: true
    senha?: true
    created_at?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nome?: true
    permissao?: true
    login?: true
    email?: true
    senha?: true
    created_at?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nome: string | null
    permissao: number
    login: string | null
    email: string | null
    senha: string | null
    created_at: Date
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    permissao?: boolean
    login?: boolean
    email?: boolean
    senha?: boolean
    created_at?: boolean
    receitas?: boolean | usuarios$receitasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    permissao?: boolean
    login?: boolean
    email?: boolean
    senha?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    permissao?: boolean
    login?: boolean
    email?: boolean
    senha?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    nome?: boolean
    permissao?: boolean
    login?: boolean
    email?: boolean
    senha?: boolean
    created_at?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "permissao" | "login" | "email" | "senha" | "created_at", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | usuarios$receitasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      receitas: Prisma.$receitasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string | null
      permissao: number
      login: string | null
      email: string | null
      senha: string | null
      created_at: Date
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receitas<T extends usuarios$receitasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$receitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly nome: FieldRef<"usuarios", 'String'>
    readonly permissao: FieldRef<"usuarios", 'Int'>
    readonly login: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly senha: FieldRef<"usuarios", 'String'>
    readonly created_at: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.receitas
   */
  export type usuarios$receitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    where?: receitasWhereInput
    orderBy?: receitasOrderByWithRelationInput | receitasOrderByWithRelationInput[]
    cursor?: receitasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitasScalarFieldEnum | ReceitasScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
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


  export const EstoqueScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    qnt_item: 'qnt_item',
    qnt_min: 'qnt_min',
    id_ingrediente: 'id_ingrediente'
  };

  export type EstoqueScalarFieldEnum = (typeof EstoqueScalarFieldEnum)[keyof typeof EstoqueScalarFieldEnum]


  export const Ingrediente_receitaScalarFieldEnum: {
    id: 'id',
    id_ingrediente: 'id_ingrediente',
    id_receita: 'id_receita',
    medida: 'medida',
    uni_medida: 'uni_medida',
    base: 'base',
    created_at: 'created_at'
  };

  export type Ingrediente_receitaScalarFieldEnum = (typeof Ingrediente_receitaScalarFieldEnum)[keyof typeof Ingrediente_receitaScalarFieldEnum]


  export const IngredientesScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    nome: 'nome',
    uni_medida_compra: 'uni_medida_compra',
    valor_item: 'valor_item'
  };

  export type IngredientesScalarFieldEnum = (typeof IngredientesScalarFieldEnum)[keyof typeof IngredientesScalarFieldEnum]


  export const ReceitasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    created_at: 'created_at',
    id_usuario: 'id_usuario'
  };

  export type ReceitasScalarFieldEnum = (typeof ReceitasScalarFieldEnum)[keyof typeof ReceitasScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    permissao: 'permissao',
    login: 'login',
    email: 'email',
    senha: 'senha',
    created_at: 'created_at'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    
  /**
   * Deep Input Types
   */


  export type estoqueWhereInput = {
    AND?: estoqueWhereInput | estoqueWhereInput[]
    OR?: estoqueWhereInput[]
    NOT?: estoqueWhereInput | estoqueWhereInput[]
    id?: BigIntFilter<"estoque"> | bigint | number
    created_at?: DateTimeFilter<"estoque"> | Date | string
    qnt_item?: IntNullableFilter<"estoque"> | number | null
    qnt_min?: IntNullableFilter<"estoque"> | number | null
    id_ingrediente?: BigIntNullableFilter<"estoque"> | bigint | number | null
    ingredientes?: XOR<IngredientesNullableScalarRelationFilter, ingredientesWhereInput> | null
  }

  export type estoqueOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    qnt_item?: SortOrderInput | SortOrder
    qnt_min?: SortOrderInput | SortOrder
    id_ingrediente?: SortOrderInput | SortOrder
    ingredientes?: ingredientesOrderByWithRelationInput
  }

  export type estoqueWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: estoqueWhereInput | estoqueWhereInput[]
    OR?: estoqueWhereInput[]
    NOT?: estoqueWhereInput | estoqueWhereInput[]
    created_at?: DateTimeFilter<"estoque"> | Date | string
    qnt_item?: IntNullableFilter<"estoque"> | number | null
    qnt_min?: IntNullableFilter<"estoque"> | number | null
    id_ingrediente?: BigIntNullableFilter<"estoque"> | bigint | number | null
    ingredientes?: XOR<IngredientesNullableScalarRelationFilter, ingredientesWhereInput> | null
  }, "id">

  export type estoqueOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    qnt_item?: SortOrderInput | SortOrder
    qnt_min?: SortOrderInput | SortOrder
    id_ingrediente?: SortOrderInput | SortOrder
    _count?: estoqueCountOrderByAggregateInput
    _avg?: estoqueAvgOrderByAggregateInput
    _max?: estoqueMaxOrderByAggregateInput
    _min?: estoqueMinOrderByAggregateInput
    _sum?: estoqueSumOrderByAggregateInput
  }

  export type estoqueScalarWhereWithAggregatesInput = {
    AND?: estoqueScalarWhereWithAggregatesInput | estoqueScalarWhereWithAggregatesInput[]
    OR?: estoqueScalarWhereWithAggregatesInput[]
    NOT?: estoqueScalarWhereWithAggregatesInput | estoqueScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"estoque"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"estoque"> | Date | string
    qnt_item?: IntNullableWithAggregatesFilter<"estoque"> | number | null
    qnt_min?: IntNullableWithAggregatesFilter<"estoque"> | number | null
    id_ingrediente?: BigIntNullableWithAggregatesFilter<"estoque"> | bigint | number | null
  }

  export type ingrediente_receitaWhereInput = {
    AND?: ingrediente_receitaWhereInput | ingrediente_receitaWhereInput[]
    OR?: ingrediente_receitaWhereInput[]
    NOT?: ingrediente_receitaWhereInput | ingrediente_receitaWhereInput[]
    id?: BigIntFilter<"ingrediente_receita"> | bigint | number
    id_ingrediente?: BigIntNullableFilter<"ingrediente_receita"> | bigint | number | null
    id_receita?: BigIntNullableFilter<"ingrediente_receita"> | bigint | number | null
    medida?: FloatNullableFilter<"ingrediente_receita"> | number | null
    uni_medida?: StringNullableFilter<"ingrediente_receita"> | string | null
    base?: FloatNullableFilter<"ingrediente_receita"> | number | null
    created_at?: DateTimeFilter<"ingrediente_receita"> | Date | string
    ingredientes?: XOR<IngredientesNullableScalarRelationFilter, ingredientesWhereInput> | null
    receitas?: XOR<ReceitasNullableScalarRelationFilter, receitasWhereInput> | null
  }

  export type ingrediente_receitaOrderByWithRelationInput = {
    id?: SortOrder
    id_ingrediente?: SortOrderInput | SortOrder
    id_receita?: SortOrderInput | SortOrder
    medida?: SortOrderInput | SortOrder
    uni_medida?: SortOrderInput | SortOrder
    base?: SortOrderInput | SortOrder
    created_at?: SortOrder
    ingredientes?: ingredientesOrderByWithRelationInput
    receitas?: receitasOrderByWithRelationInput
  }

  export type ingrediente_receitaWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ingrediente_receitaWhereInput | ingrediente_receitaWhereInput[]
    OR?: ingrediente_receitaWhereInput[]
    NOT?: ingrediente_receitaWhereInput | ingrediente_receitaWhereInput[]
    id_ingrediente?: BigIntNullableFilter<"ingrediente_receita"> | bigint | number | null
    id_receita?: BigIntNullableFilter<"ingrediente_receita"> | bigint | number | null
    medida?: FloatNullableFilter<"ingrediente_receita"> | number | null
    uni_medida?: StringNullableFilter<"ingrediente_receita"> | string | null
    base?: FloatNullableFilter<"ingrediente_receita"> | number | null
    created_at?: DateTimeFilter<"ingrediente_receita"> | Date | string
    ingredientes?: XOR<IngredientesNullableScalarRelationFilter, ingredientesWhereInput> | null
    receitas?: XOR<ReceitasNullableScalarRelationFilter, receitasWhereInput> | null
  }, "id">

  export type ingrediente_receitaOrderByWithAggregationInput = {
    id?: SortOrder
    id_ingrediente?: SortOrderInput | SortOrder
    id_receita?: SortOrderInput | SortOrder
    medida?: SortOrderInput | SortOrder
    uni_medida?: SortOrderInput | SortOrder
    base?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ingrediente_receitaCountOrderByAggregateInput
    _avg?: ingrediente_receitaAvgOrderByAggregateInput
    _max?: ingrediente_receitaMaxOrderByAggregateInput
    _min?: ingrediente_receitaMinOrderByAggregateInput
    _sum?: ingrediente_receitaSumOrderByAggregateInput
  }

  export type ingrediente_receitaScalarWhereWithAggregatesInput = {
    AND?: ingrediente_receitaScalarWhereWithAggregatesInput | ingrediente_receitaScalarWhereWithAggregatesInput[]
    OR?: ingrediente_receitaScalarWhereWithAggregatesInput[]
    NOT?: ingrediente_receitaScalarWhereWithAggregatesInput | ingrediente_receitaScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ingrediente_receita"> | bigint | number
    id_ingrediente?: BigIntNullableWithAggregatesFilter<"ingrediente_receita"> | bigint | number | null
    id_receita?: BigIntNullableWithAggregatesFilter<"ingrediente_receita"> | bigint | number | null
    medida?: FloatNullableWithAggregatesFilter<"ingrediente_receita"> | number | null
    uni_medida?: StringNullableWithAggregatesFilter<"ingrediente_receita"> | string | null
    base?: FloatNullableWithAggregatesFilter<"ingrediente_receita"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"ingrediente_receita"> | Date | string
  }

  export type ingredientesWhereInput = {
    AND?: ingredientesWhereInput | ingredientesWhereInput[]
    OR?: ingredientesWhereInput[]
    NOT?: ingredientesWhereInput | ingredientesWhereInput[]
    id?: BigIntFilter<"ingredientes"> | bigint | number
    created_at?: DateTimeFilter<"ingredientes"> | Date | string
    nome?: StringNullableFilter<"ingredientes"> | string | null
    uni_medida_compra?: StringNullableFilter<"ingredientes"> | string | null
    valor_item?: FloatNullableFilter<"ingredientes"> | number | null
    estoque?: EstoqueListRelationFilter
    ingrediente_receita?: Ingrediente_receitaListRelationFilter
  }

  export type ingredientesOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nome?: SortOrderInput | SortOrder
    uni_medida_compra?: SortOrderInput | SortOrder
    valor_item?: SortOrderInput | SortOrder
    estoque?: estoqueOrderByRelationAggregateInput
    ingrediente_receita?: ingrediente_receitaOrderByRelationAggregateInput
  }

  export type ingredientesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    nome?: string
    AND?: ingredientesWhereInput | ingredientesWhereInput[]
    OR?: ingredientesWhereInput[]
    NOT?: ingredientesWhereInput | ingredientesWhereInput[]
    created_at?: DateTimeFilter<"ingredientes"> | Date | string
    uni_medida_compra?: StringNullableFilter<"ingredientes"> | string | null
    valor_item?: FloatNullableFilter<"ingredientes"> | number | null
    estoque?: EstoqueListRelationFilter
    ingrediente_receita?: Ingrediente_receitaListRelationFilter
  }, "id" | "nome">

  export type ingredientesOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    nome?: SortOrderInput | SortOrder
    uni_medida_compra?: SortOrderInput | SortOrder
    valor_item?: SortOrderInput | SortOrder
    _count?: ingredientesCountOrderByAggregateInput
    _avg?: ingredientesAvgOrderByAggregateInput
    _max?: ingredientesMaxOrderByAggregateInput
    _min?: ingredientesMinOrderByAggregateInput
    _sum?: ingredientesSumOrderByAggregateInput
  }

  export type ingredientesScalarWhereWithAggregatesInput = {
    AND?: ingredientesScalarWhereWithAggregatesInput | ingredientesScalarWhereWithAggregatesInput[]
    OR?: ingredientesScalarWhereWithAggregatesInput[]
    NOT?: ingredientesScalarWhereWithAggregatesInput | ingredientesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ingredientes"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"ingredientes"> | Date | string
    nome?: StringNullableWithAggregatesFilter<"ingredientes"> | string | null
    uni_medida_compra?: StringNullableWithAggregatesFilter<"ingredientes"> | string | null
    valor_item?: FloatNullableWithAggregatesFilter<"ingredientes"> | number | null
  }

  export type receitasWhereInput = {
    AND?: receitasWhereInput | receitasWhereInput[]
    OR?: receitasWhereInput[]
    NOT?: receitasWhereInput | receitasWhereInput[]
    id?: BigIntFilter<"receitas"> | bigint | number
    nome?: StringNullableFilter<"receitas"> | string | null
    descricao?: StringNullableFilter<"receitas"> | string | null
    created_at?: DateTimeFilter<"receitas"> | Date | string
    id_usuario?: IntNullableFilter<"receitas"> | number | null
    ingrediente_receita?: Ingrediente_receitaListRelationFilter
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type receitasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    created_at?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    ingrediente_receita?: ingrediente_receitaOrderByRelationAggregateInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type receitasWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: receitasWhereInput | receitasWhereInput[]
    OR?: receitasWhereInput[]
    NOT?: receitasWhereInput | receitasWhereInput[]
    nome?: StringNullableFilter<"receitas"> | string | null
    descricao?: StringNullableFilter<"receitas"> | string | null
    created_at?: DateTimeFilter<"receitas"> | Date | string
    id_usuario?: IntNullableFilter<"receitas"> | number | null
    ingrediente_receita?: Ingrediente_receitaListRelationFilter
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id">

  export type receitasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    created_at?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    _count?: receitasCountOrderByAggregateInput
    _avg?: receitasAvgOrderByAggregateInput
    _max?: receitasMaxOrderByAggregateInput
    _min?: receitasMinOrderByAggregateInput
    _sum?: receitasSumOrderByAggregateInput
  }

  export type receitasScalarWhereWithAggregatesInput = {
    AND?: receitasScalarWhereWithAggregatesInput | receitasScalarWhereWithAggregatesInput[]
    OR?: receitasScalarWhereWithAggregatesInput[]
    NOT?: receitasScalarWhereWithAggregatesInput | receitasScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"receitas"> | bigint | number
    nome?: StringNullableWithAggregatesFilter<"receitas"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"receitas"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"receitas"> | Date | string
    id_usuario?: IntNullableWithAggregatesFilter<"receitas"> | number | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nome?: StringNullableFilter<"usuarios"> | string | null
    permissao?: IntFilter<"usuarios"> | number
    login?: StringNullableFilter<"usuarios"> | string | null
    email?: StringNullableFilter<"usuarios"> | string | null
    senha?: StringNullableFilter<"usuarios"> | string | null
    created_at?: DateTimeFilter<"usuarios"> | Date | string
    receitas?: ReceitasListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    permissao?: SortOrder
    login?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    senha?: SortOrderInput | SortOrder
    created_at?: SortOrder
    receitas?: receitasOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    login?: string
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nome?: StringNullableFilter<"usuarios"> | string | null
    permissao?: IntFilter<"usuarios"> | number
    senha?: StringNullableFilter<"usuarios"> | string | null
    created_at?: DateTimeFilter<"usuarios"> | Date | string
    receitas?: ReceitasListRelationFilter
  }, "id" | "login" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    permissao?: SortOrder
    login?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    senha?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios"> | number
    nome?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    permissao?: IntWithAggregatesFilter<"usuarios"> | number
    login?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    email?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    senha?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
  }

  export type estoqueCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    qnt_item?: number | null
    qnt_min?: number | null
    ingredientes?: ingredientesCreateNestedOneWithoutEstoqueInput
  }

  export type estoqueUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    qnt_item?: number | null
    qnt_min?: number | null
    id_ingrediente?: bigint | number | null
  }

  export type estoqueUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    qnt_item?: NullableIntFieldUpdateOperationsInput | number | null
    qnt_min?: NullableIntFieldUpdateOperationsInput | number | null
    ingredientes?: ingredientesUpdateOneWithoutEstoqueNestedInput
  }

  export type estoqueUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    qnt_item?: NullableIntFieldUpdateOperationsInput | number | null
    qnt_min?: NullableIntFieldUpdateOperationsInput | number | null
    id_ingrediente?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type estoqueCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    qnt_item?: number | null
    qnt_min?: number | null
    id_ingrediente?: bigint | number | null
  }

  export type estoqueUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    qnt_item?: NullableIntFieldUpdateOperationsInput | number | null
    qnt_min?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type estoqueUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    qnt_item?: NullableIntFieldUpdateOperationsInput | number | null
    qnt_min?: NullableIntFieldUpdateOperationsInput | number | null
    id_ingrediente?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ingrediente_receitaCreateInput = {
    id?: bigint | number
    medida?: number | null
    uni_medida?: string | null
    base?: number | null
    created_at?: Date | string
    ingredientes?: ingredientesCreateNestedOneWithoutIngrediente_receitaInput
    receitas?: receitasCreateNestedOneWithoutIngrediente_receitaInput
  }

  export type ingrediente_receitaUncheckedCreateInput = {
    id?: bigint | number
    id_ingrediente?: bigint | number | null
    id_receita?: bigint | number | null
    medida?: number | null
    uni_medida?: string | null
    base?: number | null
    created_at?: Date | string
  }

  export type ingrediente_receitaUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    medida?: NullableFloatFieldUpdateOperationsInput | number | null
    uni_medida?: NullableStringFieldUpdateOperationsInput | string | null
    base?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientes?: ingredientesUpdateOneWithoutIngrediente_receitaNestedInput
    receitas?: receitasUpdateOneWithoutIngrediente_receitaNestedInput
  }

  export type ingrediente_receitaUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_ingrediente?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_receita?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    medida?: NullableFloatFieldUpdateOperationsInput | number | null
    uni_medida?: NullableStringFieldUpdateOperationsInput | string | null
    base?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingrediente_receitaCreateManyInput = {
    id?: bigint | number
    id_ingrediente?: bigint | number | null
    id_receita?: bigint | number | null
    medida?: number | null
    uni_medida?: string | null
    base?: number | null
    created_at?: Date | string
  }

  export type ingrediente_receitaUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    medida?: NullableFloatFieldUpdateOperationsInput | number | null
    uni_medida?: NullableStringFieldUpdateOperationsInput | string | null
    base?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingrediente_receitaUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_ingrediente?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_receita?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    medida?: NullableFloatFieldUpdateOperationsInput | number | null
    uni_medida?: NullableStringFieldUpdateOperationsInput | string | null
    base?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingredientesCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    nome?: string | null
    uni_medida_compra?: string | null
    valor_item?: number | null
    estoque?: estoqueCreateNestedManyWithoutIngredientesInput
    ingrediente_receita?: ingrediente_receitaCreateNestedManyWithoutIngredientesInput
  }

  export type ingredientesUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    nome?: string | null
    uni_medida_compra?: string | null
    valor_item?: number | null
    estoque?: estoqueUncheckedCreateNestedManyWithoutIngredientesInput
    ingrediente_receita?: ingrediente_receitaUncheckedCreateNestedManyWithoutIngredientesInput
  }

  export type ingredientesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    uni_medida_compra?: NullableStringFieldUpdateOperationsInput | string | null
    valor_item?: NullableFloatFieldUpdateOperationsInput | number | null
    estoque?: estoqueUpdateManyWithoutIngredientesNestedInput
    ingrediente_receita?: ingrediente_receitaUpdateManyWithoutIngredientesNestedInput
  }

  export type ingredientesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    uni_medida_compra?: NullableStringFieldUpdateOperationsInput | string | null
    valor_item?: NullableFloatFieldUpdateOperationsInput | number | null
    estoque?: estoqueUncheckedUpdateManyWithoutIngredientesNestedInput
    ingrediente_receita?: ingrediente_receitaUncheckedUpdateManyWithoutIngredientesNestedInput
  }

  export type ingredientesCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    nome?: string | null
    uni_medida_compra?: string | null
    valor_item?: number | null
  }

  export type ingredientesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    uni_medida_compra?: NullableStringFieldUpdateOperationsInput | string | null
    valor_item?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ingredientesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    uni_medida_compra?: NullableStringFieldUpdateOperationsInput | string | null
    valor_item?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type receitasCreateInput = {
    id?: bigint | number
    nome?: string | null
    descricao?: string | null
    created_at?: Date | string
    ingrediente_receita?: ingrediente_receitaCreateNestedManyWithoutReceitasInput
    usuarios?: usuariosCreateNestedOneWithoutReceitasInput
  }

  export type receitasUncheckedCreateInput = {
    id?: bigint | number
    nome?: string | null
    descricao?: string | null
    created_at?: Date | string
    id_usuario?: number | null
    ingrediente_receita?: ingrediente_receitaUncheckedCreateNestedManyWithoutReceitasInput
  }

  export type receitasUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingrediente_receita?: ingrediente_receitaUpdateManyWithoutReceitasNestedInput
    usuarios?: usuariosUpdateOneWithoutReceitasNestedInput
  }

  export type receitasUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    ingrediente_receita?: ingrediente_receitaUncheckedUpdateManyWithoutReceitasNestedInput
  }

  export type receitasCreateManyInput = {
    id?: bigint | number
    nome?: string | null
    descricao?: string | null
    created_at?: Date | string
    id_usuario?: number | null
  }

  export type receitasUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type receitasUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usuariosCreateInput = {
    nome?: string | null
    permissao: number
    login?: string | null
    email?: string | null
    senha?: string | null
    created_at?: Date | string
    receitas?: receitasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    nome?: string | null
    permissao: number
    login?: string | null
    email?: string | null
    senha?: string | null
    created_at?: Date | string
    receitas?: receitasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: IntFieldUpdateOperationsInput | number
    login?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: receitasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: IntFieldUpdateOperationsInput | number
    login?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: receitasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: number
    nome?: string | null
    permissao: number
    login?: string | null
    email?: string | null
    senha?: string | null
    created_at?: Date | string
  }

  export type usuariosUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: IntFieldUpdateOperationsInput | number
    login?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: IntFieldUpdateOperationsInput | number
    login?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type IngredientesNullableScalarRelationFilter = {
    is?: ingredientesWhereInput | null
    isNot?: ingredientesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type estoqueCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    qnt_item?: SortOrder
    qnt_min?: SortOrder
    id_ingrediente?: SortOrder
  }

  export type estoqueAvgOrderByAggregateInput = {
    id?: SortOrder
    qnt_item?: SortOrder
    qnt_min?: SortOrder
    id_ingrediente?: SortOrder
  }

  export type estoqueMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    qnt_item?: SortOrder
    qnt_min?: SortOrder
    id_ingrediente?: SortOrder
  }

  export type estoqueMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    qnt_item?: SortOrder
    qnt_min?: SortOrder
    id_ingrediente?: SortOrder
  }

  export type estoqueSumOrderByAggregateInput = {
    id?: SortOrder
    qnt_item?: SortOrder
    qnt_min?: SortOrder
    id_ingrediente?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ReceitasNullableScalarRelationFilter = {
    is?: receitasWhereInput | null
    isNot?: receitasWhereInput | null
  }

  export type ingrediente_receitaCountOrderByAggregateInput = {
    id?: SortOrder
    id_ingrediente?: SortOrder
    id_receita?: SortOrder
    medida?: SortOrder
    uni_medida?: SortOrder
    base?: SortOrder
    created_at?: SortOrder
  }

  export type ingrediente_receitaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ingrediente?: SortOrder
    id_receita?: SortOrder
    medida?: SortOrder
    base?: SortOrder
  }

  export type ingrediente_receitaMaxOrderByAggregateInput = {
    id?: SortOrder
    id_ingrediente?: SortOrder
    id_receita?: SortOrder
    medida?: SortOrder
    uni_medida?: SortOrder
    base?: SortOrder
    created_at?: SortOrder
  }

  export type ingrediente_receitaMinOrderByAggregateInput = {
    id?: SortOrder
    id_ingrediente?: SortOrder
    id_receita?: SortOrder
    medida?: SortOrder
    uni_medida?: SortOrder
    base?: SortOrder
    created_at?: SortOrder
  }

  export type ingrediente_receitaSumOrderByAggregateInput = {
    id?: SortOrder
    id_ingrediente?: SortOrder
    id_receita?: SortOrder
    medida?: SortOrder
    base?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EstoqueListRelationFilter = {
    every?: estoqueWhereInput
    some?: estoqueWhereInput
    none?: estoqueWhereInput
  }

  export type Ingrediente_receitaListRelationFilter = {
    every?: ingrediente_receitaWhereInput
    some?: ingrediente_receitaWhereInput
    none?: ingrediente_receitaWhereInput
  }

  export type estoqueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ingrediente_receitaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ingredientesCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nome?: SortOrder
    uni_medida_compra?: SortOrder
    valor_item?: SortOrder
  }

  export type ingredientesAvgOrderByAggregateInput = {
    id?: SortOrder
    valor_item?: SortOrder
  }

  export type ingredientesMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nome?: SortOrder
    uni_medida_compra?: SortOrder
    valor_item?: SortOrder
  }

  export type ingredientesMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    nome?: SortOrder
    uni_medida_compra?: SortOrder
    valor_item?: SortOrder
  }

  export type ingredientesSumOrderByAggregateInput = {
    id?: SortOrder
    valor_item?: SortOrder
  }

  export type UsuariosNullableScalarRelationFilter = {
    is?: usuariosWhereInput | null
    isNot?: usuariosWhereInput | null
  }

  export type receitasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    created_at?: SortOrder
    id_usuario?: SortOrder
  }

  export type receitasAvgOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
  }

  export type receitasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    created_at?: SortOrder
    id_usuario?: SortOrder
  }

  export type receitasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    created_at?: SortOrder
    id_usuario?: SortOrder
  }

  export type receitasSumOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ReceitasListRelationFilter = {
    every?: receitasWhereInput
    some?: receitasWhereInput
    none?: receitasWhereInput
  }

  export type receitasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    permissao?: SortOrder
    login?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    created_at?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
    permissao?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    permissao?: SortOrder
    login?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    created_at?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    permissao?: SortOrder
    login?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    created_at?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
    permissao?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type ingredientesCreateNestedOneWithoutEstoqueInput = {
    create?: XOR<ingredientesCreateWithoutEstoqueInput, ingredientesUncheckedCreateWithoutEstoqueInput>
    connectOrCreate?: ingredientesCreateOrConnectWithoutEstoqueInput
    connect?: ingredientesWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ingredientesUpdateOneWithoutEstoqueNestedInput = {
    create?: XOR<ingredientesCreateWithoutEstoqueInput, ingredientesUncheckedCreateWithoutEstoqueInput>
    connectOrCreate?: ingredientesCreateOrConnectWithoutEstoqueInput
    upsert?: ingredientesUpsertWithoutEstoqueInput
    disconnect?: ingredientesWhereInput | boolean
    delete?: ingredientesWhereInput | boolean
    connect?: ingredientesWhereUniqueInput
    update?: XOR<XOR<ingredientesUpdateToOneWithWhereWithoutEstoqueInput, ingredientesUpdateWithoutEstoqueInput>, ingredientesUncheckedUpdateWithoutEstoqueInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ingredientesCreateNestedOneWithoutIngrediente_receitaInput = {
    create?: XOR<ingredientesCreateWithoutIngrediente_receitaInput, ingredientesUncheckedCreateWithoutIngrediente_receitaInput>
    connectOrCreate?: ingredientesCreateOrConnectWithoutIngrediente_receitaInput
    connect?: ingredientesWhereUniqueInput
  }

  export type receitasCreateNestedOneWithoutIngrediente_receitaInput = {
    create?: XOR<receitasCreateWithoutIngrediente_receitaInput, receitasUncheckedCreateWithoutIngrediente_receitaInput>
    connectOrCreate?: receitasCreateOrConnectWithoutIngrediente_receitaInput
    connect?: receitasWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ingredientesUpdateOneWithoutIngrediente_receitaNestedInput = {
    create?: XOR<ingredientesCreateWithoutIngrediente_receitaInput, ingredientesUncheckedCreateWithoutIngrediente_receitaInput>
    connectOrCreate?: ingredientesCreateOrConnectWithoutIngrediente_receitaInput
    upsert?: ingredientesUpsertWithoutIngrediente_receitaInput
    disconnect?: ingredientesWhereInput | boolean
    delete?: ingredientesWhereInput | boolean
    connect?: ingredientesWhereUniqueInput
    update?: XOR<XOR<ingredientesUpdateToOneWithWhereWithoutIngrediente_receitaInput, ingredientesUpdateWithoutIngrediente_receitaInput>, ingredientesUncheckedUpdateWithoutIngrediente_receitaInput>
  }

  export type receitasUpdateOneWithoutIngrediente_receitaNestedInput = {
    create?: XOR<receitasCreateWithoutIngrediente_receitaInput, receitasUncheckedCreateWithoutIngrediente_receitaInput>
    connectOrCreate?: receitasCreateOrConnectWithoutIngrediente_receitaInput
    upsert?: receitasUpsertWithoutIngrediente_receitaInput
    disconnect?: receitasWhereInput | boolean
    delete?: receitasWhereInput | boolean
    connect?: receitasWhereUniqueInput
    update?: XOR<XOR<receitasUpdateToOneWithWhereWithoutIngrediente_receitaInput, receitasUpdateWithoutIngrediente_receitaInput>, receitasUncheckedUpdateWithoutIngrediente_receitaInput>
  }

  export type estoqueCreateNestedManyWithoutIngredientesInput = {
    create?: XOR<estoqueCreateWithoutIngredientesInput, estoqueUncheckedCreateWithoutIngredientesInput> | estoqueCreateWithoutIngredientesInput[] | estoqueUncheckedCreateWithoutIngredientesInput[]
    connectOrCreate?: estoqueCreateOrConnectWithoutIngredientesInput | estoqueCreateOrConnectWithoutIngredientesInput[]
    createMany?: estoqueCreateManyIngredientesInputEnvelope
    connect?: estoqueWhereUniqueInput | estoqueWhereUniqueInput[]
  }

  export type ingrediente_receitaCreateNestedManyWithoutIngredientesInput = {
    create?: XOR<ingrediente_receitaCreateWithoutIngredientesInput, ingrediente_receitaUncheckedCreateWithoutIngredientesInput> | ingrediente_receitaCreateWithoutIngredientesInput[] | ingrediente_receitaUncheckedCreateWithoutIngredientesInput[]
    connectOrCreate?: ingrediente_receitaCreateOrConnectWithoutIngredientesInput | ingrediente_receitaCreateOrConnectWithoutIngredientesInput[]
    createMany?: ingrediente_receitaCreateManyIngredientesInputEnvelope
    connect?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
  }

  export type estoqueUncheckedCreateNestedManyWithoutIngredientesInput = {
    create?: XOR<estoqueCreateWithoutIngredientesInput, estoqueUncheckedCreateWithoutIngredientesInput> | estoqueCreateWithoutIngredientesInput[] | estoqueUncheckedCreateWithoutIngredientesInput[]
    connectOrCreate?: estoqueCreateOrConnectWithoutIngredientesInput | estoqueCreateOrConnectWithoutIngredientesInput[]
    createMany?: estoqueCreateManyIngredientesInputEnvelope
    connect?: estoqueWhereUniqueInput | estoqueWhereUniqueInput[]
  }

  export type ingrediente_receitaUncheckedCreateNestedManyWithoutIngredientesInput = {
    create?: XOR<ingrediente_receitaCreateWithoutIngredientesInput, ingrediente_receitaUncheckedCreateWithoutIngredientesInput> | ingrediente_receitaCreateWithoutIngredientesInput[] | ingrediente_receitaUncheckedCreateWithoutIngredientesInput[]
    connectOrCreate?: ingrediente_receitaCreateOrConnectWithoutIngredientesInput | ingrediente_receitaCreateOrConnectWithoutIngredientesInput[]
    createMany?: ingrediente_receitaCreateManyIngredientesInputEnvelope
    connect?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
  }

  export type estoqueUpdateManyWithoutIngredientesNestedInput = {
    create?: XOR<estoqueCreateWithoutIngredientesInput, estoqueUncheckedCreateWithoutIngredientesInput> | estoqueCreateWithoutIngredientesInput[] | estoqueUncheckedCreateWithoutIngredientesInput[]
    connectOrCreate?: estoqueCreateOrConnectWithoutIngredientesInput | estoqueCreateOrConnectWithoutIngredientesInput[]
    upsert?: estoqueUpsertWithWhereUniqueWithoutIngredientesInput | estoqueUpsertWithWhereUniqueWithoutIngredientesInput[]
    createMany?: estoqueCreateManyIngredientesInputEnvelope
    set?: estoqueWhereUniqueInput | estoqueWhereUniqueInput[]
    disconnect?: estoqueWhereUniqueInput | estoqueWhereUniqueInput[]
    delete?: estoqueWhereUniqueInput | estoqueWhereUniqueInput[]
    connect?: estoqueWhereUniqueInput | estoqueWhereUniqueInput[]
    update?: estoqueUpdateWithWhereUniqueWithoutIngredientesInput | estoqueUpdateWithWhereUniqueWithoutIngredientesInput[]
    updateMany?: estoqueUpdateManyWithWhereWithoutIngredientesInput | estoqueUpdateManyWithWhereWithoutIngredientesInput[]
    deleteMany?: estoqueScalarWhereInput | estoqueScalarWhereInput[]
  }

  export type ingrediente_receitaUpdateManyWithoutIngredientesNestedInput = {
    create?: XOR<ingrediente_receitaCreateWithoutIngredientesInput, ingrediente_receitaUncheckedCreateWithoutIngredientesInput> | ingrediente_receitaCreateWithoutIngredientesInput[] | ingrediente_receitaUncheckedCreateWithoutIngredientesInput[]
    connectOrCreate?: ingrediente_receitaCreateOrConnectWithoutIngredientesInput | ingrediente_receitaCreateOrConnectWithoutIngredientesInput[]
    upsert?: ingrediente_receitaUpsertWithWhereUniqueWithoutIngredientesInput | ingrediente_receitaUpsertWithWhereUniqueWithoutIngredientesInput[]
    createMany?: ingrediente_receitaCreateManyIngredientesInputEnvelope
    set?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    disconnect?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    delete?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    connect?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    update?: ingrediente_receitaUpdateWithWhereUniqueWithoutIngredientesInput | ingrediente_receitaUpdateWithWhereUniqueWithoutIngredientesInput[]
    updateMany?: ingrediente_receitaUpdateManyWithWhereWithoutIngredientesInput | ingrediente_receitaUpdateManyWithWhereWithoutIngredientesInput[]
    deleteMany?: ingrediente_receitaScalarWhereInput | ingrediente_receitaScalarWhereInput[]
  }

  export type estoqueUncheckedUpdateManyWithoutIngredientesNestedInput = {
    create?: XOR<estoqueCreateWithoutIngredientesInput, estoqueUncheckedCreateWithoutIngredientesInput> | estoqueCreateWithoutIngredientesInput[] | estoqueUncheckedCreateWithoutIngredientesInput[]
    connectOrCreate?: estoqueCreateOrConnectWithoutIngredientesInput | estoqueCreateOrConnectWithoutIngredientesInput[]
    upsert?: estoqueUpsertWithWhereUniqueWithoutIngredientesInput | estoqueUpsertWithWhereUniqueWithoutIngredientesInput[]
    createMany?: estoqueCreateManyIngredientesInputEnvelope
    set?: estoqueWhereUniqueInput | estoqueWhereUniqueInput[]
    disconnect?: estoqueWhereUniqueInput | estoqueWhereUniqueInput[]
    delete?: estoqueWhereUniqueInput | estoqueWhereUniqueInput[]
    connect?: estoqueWhereUniqueInput | estoqueWhereUniqueInput[]
    update?: estoqueUpdateWithWhereUniqueWithoutIngredientesInput | estoqueUpdateWithWhereUniqueWithoutIngredientesInput[]
    updateMany?: estoqueUpdateManyWithWhereWithoutIngredientesInput | estoqueUpdateManyWithWhereWithoutIngredientesInput[]
    deleteMany?: estoqueScalarWhereInput | estoqueScalarWhereInput[]
  }

  export type ingrediente_receitaUncheckedUpdateManyWithoutIngredientesNestedInput = {
    create?: XOR<ingrediente_receitaCreateWithoutIngredientesInput, ingrediente_receitaUncheckedCreateWithoutIngredientesInput> | ingrediente_receitaCreateWithoutIngredientesInput[] | ingrediente_receitaUncheckedCreateWithoutIngredientesInput[]
    connectOrCreate?: ingrediente_receitaCreateOrConnectWithoutIngredientesInput | ingrediente_receitaCreateOrConnectWithoutIngredientesInput[]
    upsert?: ingrediente_receitaUpsertWithWhereUniqueWithoutIngredientesInput | ingrediente_receitaUpsertWithWhereUniqueWithoutIngredientesInput[]
    createMany?: ingrediente_receitaCreateManyIngredientesInputEnvelope
    set?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    disconnect?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    delete?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    connect?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    update?: ingrediente_receitaUpdateWithWhereUniqueWithoutIngredientesInput | ingrediente_receitaUpdateWithWhereUniqueWithoutIngredientesInput[]
    updateMany?: ingrediente_receitaUpdateManyWithWhereWithoutIngredientesInput | ingrediente_receitaUpdateManyWithWhereWithoutIngredientesInput[]
    deleteMany?: ingrediente_receitaScalarWhereInput | ingrediente_receitaScalarWhereInput[]
  }

  export type ingrediente_receitaCreateNestedManyWithoutReceitasInput = {
    create?: XOR<ingrediente_receitaCreateWithoutReceitasInput, ingrediente_receitaUncheckedCreateWithoutReceitasInput> | ingrediente_receitaCreateWithoutReceitasInput[] | ingrediente_receitaUncheckedCreateWithoutReceitasInput[]
    connectOrCreate?: ingrediente_receitaCreateOrConnectWithoutReceitasInput | ingrediente_receitaCreateOrConnectWithoutReceitasInput[]
    createMany?: ingrediente_receitaCreateManyReceitasInputEnvelope
    connect?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
  }

  export type usuariosCreateNestedOneWithoutReceitasInput = {
    create?: XOR<usuariosCreateWithoutReceitasInput, usuariosUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReceitasInput
    connect?: usuariosWhereUniqueInput
  }

  export type ingrediente_receitaUncheckedCreateNestedManyWithoutReceitasInput = {
    create?: XOR<ingrediente_receitaCreateWithoutReceitasInput, ingrediente_receitaUncheckedCreateWithoutReceitasInput> | ingrediente_receitaCreateWithoutReceitasInput[] | ingrediente_receitaUncheckedCreateWithoutReceitasInput[]
    connectOrCreate?: ingrediente_receitaCreateOrConnectWithoutReceitasInput | ingrediente_receitaCreateOrConnectWithoutReceitasInput[]
    createMany?: ingrediente_receitaCreateManyReceitasInputEnvelope
    connect?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
  }

  export type ingrediente_receitaUpdateManyWithoutReceitasNestedInput = {
    create?: XOR<ingrediente_receitaCreateWithoutReceitasInput, ingrediente_receitaUncheckedCreateWithoutReceitasInput> | ingrediente_receitaCreateWithoutReceitasInput[] | ingrediente_receitaUncheckedCreateWithoutReceitasInput[]
    connectOrCreate?: ingrediente_receitaCreateOrConnectWithoutReceitasInput | ingrediente_receitaCreateOrConnectWithoutReceitasInput[]
    upsert?: ingrediente_receitaUpsertWithWhereUniqueWithoutReceitasInput | ingrediente_receitaUpsertWithWhereUniqueWithoutReceitasInput[]
    createMany?: ingrediente_receitaCreateManyReceitasInputEnvelope
    set?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    disconnect?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    delete?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    connect?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    update?: ingrediente_receitaUpdateWithWhereUniqueWithoutReceitasInput | ingrediente_receitaUpdateWithWhereUniqueWithoutReceitasInput[]
    updateMany?: ingrediente_receitaUpdateManyWithWhereWithoutReceitasInput | ingrediente_receitaUpdateManyWithWhereWithoutReceitasInput[]
    deleteMany?: ingrediente_receitaScalarWhereInput | ingrediente_receitaScalarWhereInput[]
  }

  export type usuariosUpdateOneWithoutReceitasNestedInput = {
    create?: XOR<usuariosCreateWithoutReceitasInput, usuariosUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReceitasInput
    upsert?: usuariosUpsertWithoutReceitasInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutReceitasInput, usuariosUpdateWithoutReceitasInput>, usuariosUncheckedUpdateWithoutReceitasInput>
  }

  export type ingrediente_receitaUncheckedUpdateManyWithoutReceitasNestedInput = {
    create?: XOR<ingrediente_receitaCreateWithoutReceitasInput, ingrediente_receitaUncheckedCreateWithoutReceitasInput> | ingrediente_receitaCreateWithoutReceitasInput[] | ingrediente_receitaUncheckedCreateWithoutReceitasInput[]
    connectOrCreate?: ingrediente_receitaCreateOrConnectWithoutReceitasInput | ingrediente_receitaCreateOrConnectWithoutReceitasInput[]
    upsert?: ingrediente_receitaUpsertWithWhereUniqueWithoutReceitasInput | ingrediente_receitaUpsertWithWhereUniqueWithoutReceitasInput[]
    createMany?: ingrediente_receitaCreateManyReceitasInputEnvelope
    set?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    disconnect?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    delete?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    connect?: ingrediente_receitaWhereUniqueInput | ingrediente_receitaWhereUniqueInput[]
    update?: ingrediente_receitaUpdateWithWhereUniqueWithoutReceitasInput | ingrediente_receitaUpdateWithWhereUniqueWithoutReceitasInput[]
    updateMany?: ingrediente_receitaUpdateManyWithWhereWithoutReceitasInput | ingrediente_receitaUpdateManyWithWhereWithoutReceitasInput[]
    deleteMany?: ingrediente_receitaScalarWhereInput | ingrediente_receitaScalarWhereInput[]
  }

  export type receitasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<receitasCreateWithoutUsuariosInput, receitasUncheckedCreateWithoutUsuariosInput> | receitasCreateWithoutUsuariosInput[] | receitasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: receitasCreateOrConnectWithoutUsuariosInput | receitasCreateOrConnectWithoutUsuariosInput[]
    createMany?: receitasCreateManyUsuariosInputEnvelope
    connect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
  }

  export type receitasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<receitasCreateWithoutUsuariosInput, receitasUncheckedCreateWithoutUsuariosInput> | receitasCreateWithoutUsuariosInput[] | receitasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: receitasCreateOrConnectWithoutUsuariosInput | receitasCreateOrConnectWithoutUsuariosInput[]
    createMany?: receitasCreateManyUsuariosInputEnvelope
    connect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type receitasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<receitasCreateWithoutUsuariosInput, receitasUncheckedCreateWithoutUsuariosInput> | receitasCreateWithoutUsuariosInput[] | receitasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: receitasCreateOrConnectWithoutUsuariosInput | receitasCreateOrConnectWithoutUsuariosInput[]
    upsert?: receitasUpsertWithWhereUniqueWithoutUsuariosInput | receitasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: receitasCreateManyUsuariosInputEnvelope
    set?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    disconnect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    delete?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    connect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    update?: receitasUpdateWithWhereUniqueWithoutUsuariosInput | receitasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: receitasUpdateManyWithWhereWithoutUsuariosInput | receitasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: receitasScalarWhereInput | receitasScalarWhereInput[]
  }

  export type receitasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<receitasCreateWithoutUsuariosInput, receitasUncheckedCreateWithoutUsuariosInput> | receitasCreateWithoutUsuariosInput[] | receitasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: receitasCreateOrConnectWithoutUsuariosInput | receitasCreateOrConnectWithoutUsuariosInput[]
    upsert?: receitasUpsertWithWhereUniqueWithoutUsuariosInput | receitasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: receitasCreateManyUsuariosInputEnvelope
    set?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    disconnect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    delete?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    connect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    update?: receitasUpdateWithWhereUniqueWithoutUsuariosInput | receitasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: receitasUpdateManyWithWhereWithoutUsuariosInput | receitasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: receitasScalarWhereInput | receitasScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type ingredientesCreateWithoutEstoqueInput = {
    id?: bigint | number
    created_at?: Date | string
    nome?: string | null
    uni_medida_compra?: string | null
    valor_item?: number | null
    ingrediente_receita?: ingrediente_receitaCreateNestedManyWithoutIngredientesInput
  }

  export type ingredientesUncheckedCreateWithoutEstoqueInput = {
    id?: bigint | number
    created_at?: Date | string
    nome?: string | null
    uni_medida_compra?: string | null
    valor_item?: number | null
    ingrediente_receita?: ingrediente_receitaUncheckedCreateNestedManyWithoutIngredientesInput
  }

  export type ingredientesCreateOrConnectWithoutEstoqueInput = {
    where: ingredientesWhereUniqueInput
    create: XOR<ingredientesCreateWithoutEstoqueInput, ingredientesUncheckedCreateWithoutEstoqueInput>
  }

  export type ingredientesUpsertWithoutEstoqueInput = {
    update: XOR<ingredientesUpdateWithoutEstoqueInput, ingredientesUncheckedUpdateWithoutEstoqueInput>
    create: XOR<ingredientesCreateWithoutEstoqueInput, ingredientesUncheckedCreateWithoutEstoqueInput>
    where?: ingredientesWhereInput
  }

  export type ingredientesUpdateToOneWithWhereWithoutEstoqueInput = {
    where?: ingredientesWhereInput
    data: XOR<ingredientesUpdateWithoutEstoqueInput, ingredientesUncheckedUpdateWithoutEstoqueInput>
  }

  export type ingredientesUpdateWithoutEstoqueInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    uni_medida_compra?: NullableStringFieldUpdateOperationsInput | string | null
    valor_item?: NullableFloatFieldUpdateOperationsInput | number | null
    ingrediente_receita?: ingrediente_receitaUpdateManyWithoutIngredientesNestedInput
  }

  export type ingredientesUncheckedUpdateWithoutEstoqueInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    uni_medida_compra?: NullableStringFieldUpdateOperationsInput | string | null
    valor_item?: NullableFloatFieldUpdateOperationsInput | number | null
    ingrediente_receita?: ingrediente_receitaUncheckedUpdateManyWithoutIngredientesNestedInput
  }

  export type ingredientesCreateWithoutIngrediente_receitaInput = {
    id?: bigint | number
    created_at?: Date | string
    nome?: string | null
    uni_medida_compra?: string | null
    valor_item?: number | null
    estoque?: estoqueCreateNestedManyWithoutIngredientesInput
  }

  export type ingredientesUncheckedCreateWithoutIngrediente_receitaInput = {
    id?: bigint | number
    created_at?: Date | string
    nome?: string | null
    uni_medida_compra?: string | null
    valor_item?: number | null
    estoque?: estoqueUncheckedCreateNestedManyWithoutIngredientesInput
  }

  export type ingredientesCreateOrConnectWithoutIngrediente_receitaInput = {
    where: ingredientesWhereUniqueInput
    create: XOR<ingredientesCreateWithoutIngrediente_receitaInput, ingredientesUncheckedCreateWithoutIngrediente_receitaInput>
  }

  export type receitasCreateWithoutIngrediente_receitaInput = {
    id?: bigint | number
    nome?: string | null
    descricao?: string | null
    created_at?: Date | string
    usuarios?: usuariosCreateNestedOneWithoutReceitasInput
  }

  export type receitasUncheckedCreateWithoutIngrediente_receitaInput = {
    id?: bigint | number
    nome?: string | null
    descricao?: string | null
    created_at?: Date | string
    id_usuario?: number | null
  }

  export type receitasCreateOrConnectWithoutIngrediente_receitaInput = {
    where: receitasWhereUniqueInput
    create: XOR<receitasCreateWithoutIngrediente_receitaInput, receitasUncheckedCreateWithoutIngrediente_receitaInput>
  }

  export type ingredientesUpsertWithoutIngrediente_receitaInput = {
    update: XOR<ingredientesUpdateWithoutIngrediente_receitaInput, ingredientesUncheckedUpdateWithoutIngrediente_receitaInput>
    create: XOR<ingredientesCreateWithoutIngrediente_receitaInput, ingredientesUncheckedCreateWithoutIngrediente_receitaInput>
    where?: ingredientesWhereInput
  }

  export type ingredientesUpdateToOneWithWhereWithoutIngrediente_receitaInput = {
    where?: ingredientesWhereInput
    data: XOR<ingredientesUpdateWithoutIngrediente_receitaInput, ingredientesUncheckedUpdateWithoutIngrediente_receitaInput>
  }

  export type ingredientesUpdateWithoutIngrediente_receitaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    uni_medida_compra?: NullableStringFieldUpdateOperationsInput | string | null
    valor_item?: NullableFloatFieldUpdateOperationsInput | number | null
    estoque?: estoqueUpdateManyWithoutIngredientesNestedInput
  }

  export type ingredientesUncheckedUpdateWithoutIngrediente_receitaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    uni_medida_compra?: NullableStringFieldUpdateOperationsInput | string | null
    valor_item?: NullableFloatFieldUpdateOperationsInput | number | null
    estoque?: estoqueUncheckedUpdateManyWithoutIngredientesNestedInput
  }

  export type receitasUpsertWithoutIngrediente_receitaInput = {
    update: XOR<receitasUpdateWithoutIngrediente_receitaInput, receitasUncheckedUpdateWithoutIngrediente_receitaInput>
    create: XOR<receitasCreateWithoutIngrediente_receitaInput, receitasUncheckedCreateWithoutIngrediente_receitaInput>
    where?: receitasWhereInput
  }

  export type receitasUpdateToOneWithWhereWithoutIngrediente_receitaInput = {
    where?: receitasWhereInput
    data: XOR<receitasUpdateWithoutIngrediente_receitaInput, receitasUncheckedUpdateWithoutIngrediente_receitaInput>
  }

  export type receitasUpdateWithoutIngrediente_receitaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: usuariosUpdateOneWithoutReceitasNestedInput
  }

  export type receitasUncheckedUpdateWithoutIngrediente_receitaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type estoqueCreateWithoutIngredientesInput = {
    id?: bigint | number
    created_at?: Date | string
    qnt_item?: number | null
    qnt_min?: number | null
  }

  export type estoqueUncheckedCreateWithoutIngredientesInput = {
    id?: bigint | number
    created_at?: Date | string
    qnt_item?: number | null
    qnt_min?: number | null
  }

  export type estoqueCreateOrConnectWithoutIngredientesInput = {
    where: estoqueWhereUniqueInput
    create: XOR<estoqueCreateWithoutIngredientesInput, estoqueUncheckedCreateWithoutIngredientesInput>
  }

  export type estoqueCreateManyIngredientesInputEnvelope = {
    data: estoqueCreateManyIngredientesInput | estoqueCreateManyIngredientesInput[]
    skipDuplicates?: boolean
  }

  export type ingrediente_receitaCreateWithoutIngredientesInput = {
    id?: bigint | number
    medida?: number | null
    uni_medida?: string | null
    base?: number | null
    created_at?: Date | string
    receitas?: receitasCreateNestedOneWithoutIngrediente_receitaInput
  }

  export type ingrediente_receitaUncheckedCreateWithoutIngredientesInput = {
    id?: bigint | number
    id_receita?: bigint | number | null
    medida?: number | null
    uni_medida?: string | null
    base?: number | null
    created_at?: Date | string
  }

  export type ingrediente_receitaCreateOrConnectWithoutIngredientesInput = {
    where: ingrediente_receitaWhereUniqueInput
    create: XOR<ingrediente_receitaCreateWithoutIngredientesInput, ingrediente_receitaUncheckedCreateWithoutIngredientesInput>
  }

  export type ingrediente_receitaCreateManyIngredientesInputEnvelope = {
    data: ingrediente_receitaCreateManyIngredientesInput | ingrediente_receitaCreateManyIngredientesInput[]
    skipDuplicates?: boolean
  }

  export type estoqueUpsertWithWhereUniqueWithoutIngredientesInput = {
    where: estoqueWhereUniqueInput
    update: XOR<estoqueUpdateWithoutIngredientesInput, estoqueUncheckedUpdateWithoutIngredientesInput>
    create: XOR<estoqueCreateWithoutIngredientesInput, estoqueUncheckedCreateWithoutIngredientesInput>
  }

  export type estoqueUpdateWithWhereUniqueWithoutIngredientesInput = {
    where: estoqueWhereUniqueInput
    data: XOR<estoqueUpdateWithoutIngredientesInput, estoqueUncheckedUpdateWithoutIngredientesInput>
  }

  export type estoqueUpdateManyWithWhereWithoutIngredientesInput = {
    where: estoqueScalarWhereInput
    data: XOR<estoqueUpdateManyMutationInput, estoqueUncheckedUpdateManyWithoutIngredientesInput>
  }

  export type estoqueScalarWhereInput = {
    AND?: estoqueScalarWhereInput | estoqueScalarWhereInput[]
    OR?: estoqueScalarWhereInput[]
    NOT?: estoqueScalarWhereInput | estoqueScalarWhereInput[]
    id?: BigIntFilter<"estoque"> | bigint | number
    created_at?: DateTimeFilter<"estoque"> | Date | string
    qnt_item?: IntNullableFilter<"estoque"> | number | null
    qnt_min?: IntNullableFilter<"estoque"> | number | null
    id_ingrediente?: BigIntNullableFilter<"estoque"> | bigint | number | null
  }

  export type ingrediente_receitaUpsertWithWhereUniqueWithoutIngredientesInput = {
    where: ingrediente_receitaWhereUniqueInput
    update: XOR<ingrediente_receitaUpdateWithoutIngredientesInput, ingrediente_receitaUncheckedUpdateWithoutIngredientesInput>
    create: XOR<ingrediente_receitaCreateWithoutIngredientesInput, ingrediente_receitaUncheckedCreateWithoutIngredientesInput>
  }

  export type ingrediente_receitaUpdateWithWhereUniqueWithoutIngredientesInput = {
    where: ingrediente_receitaWhereUniqueInput
    data: XOR<ingrediente_receitaUpdateWithoutIngredientesInput, ingrediente_receitaUncheckedUpdateWithoutIngredientesInput>
  }

  export type ingrediente_receitaUpdateManyWithWhereWithoutIngredientesInput = {
    where: ingrediente_receitaScalarWhereInput
    data: XOR<ingrediente_receitaUpdateManyMutationInput, ingrediente_receitaUncheckedUpdateManyWithoutIngredientesInput>
  }

  export type ingrediente_receitaScalarWhereInput = {
    AND?: ingrediente_receitaScalarWhereInput | ingrediente_receitaScalarWhereInput[]
    OR?: ingrediente_receitaScalarWhereInput[]
    NOT?: ingrediente_receitaScalarWhereInput | ingrediente_receitaScalarWhereInput[]
    id?: BigIntFilter<"ingrediente_receita"> | bigint | number
    id_ingrediente?: BigIntNullableFilter<"ingrediente_receita"> | bigint | number | null
    id_receita?: BigIntNullableFilter<"ingrediente_receita"> | bigint | number | null
    medida?: FloatNullableFilter<"ingrediente_receita"> | number | null
    uni_medida?: StringNullableFilter<"ingrediente_receita"> | string | null
    base?: FloatNullableFilter<"ingrediente_receita"> | number | null
    created_at?: DateTimeFilter<"ingrediente_receita"> | Date | string
  }

  export type ingrediente_receitaCreateWithoutReceitasInput = {
    id?: bigint | number
    medida?: number | null
    uni_medida?: string | null
    base?: number | null
    created_at?: Date | string
    ingredientes?: ingredientesCreateNestedOneWithoutIngrediente_receitaInput
  }

  export type ingrediente_receitaUncheckedCreateWithoutReceitasInput = {
    id?: bigint | number
    id_ingrediente?: bigint | number | null
    medida?: number | null
    uni_medida?: string | null
    base?: number | null
    created_at?: Date | string
  }

  export type ingrediente_receitaCreateOrConnectWithoutReceitasInput = {
    where: ingrediente_receitaWhereUniqueInput
    create: XOR<ingrediente_receitaCreateWithoutReceitasInput, ingrediente_receitaUncheckedCreateWithoutReceitasInput>
  }

  export type ingrediente_receitaCreateManyReceitasInputEnvelope = {
    data: ingrediente_receitaCreateManyReceitasInput | ingrediente_receitaCreateManyReceitasInput[]
    skipDuplicates?: boolean
  }

  export type usuariosCreateWithoutReceitasInput = {
    nome?: string | null
    permissao: number
    login?: string | null
    email?: string | null
    senha?: string | null
    created_at?: Date | string
  }

  export type usuariosUncheckedCreateWithoutReceitasInput = {
    id?: number
    nome?: string | null
    permissao: number
    login?: string | null
    email?: string | null
    senha?: string | null
    created_at?: Date | string
  }

  export type usuariosCreateOrConnectWithoutReceitasInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutReceitasInput, usuariosUncheckedCreateWithoutReceitasInput>
  }

  export type ingrediente_receitaUpsertWithWhereUniqueWithoutReceitasInput = {
    where: ingrediente_receitaWhereUniqueInput
    update: XOR<ingrediente_receitaUpdateWithoutReceitasInput, ingrediente_receitaUncheckedUpdateWithoutReceitasInput>
    create: XOR<ingrediente_receitaCreateWithoutReceitasInput, ingrediente_receitaUncheckedCreateWithoutReceitasInput>
  }

  export type ingrediente_receitaUpdateWithWhereUniqueWithoutReceitasInput = {
    where: ingrediente_receitaWhereUniqueInput
    data: XOR<ingrediente_receitaUpdateWithoutReceitasInput, ingrediente_receitaUncheckedUpdateWithoutReceitasInput>
  }

  export type ingrediente_receitaUpdateManyWithWhereWithoutReceitasInput = {
    where: ingrediente_receitaScalarWhereInput
    data: XOR<ingrediente_receitaUpdateManyMutationInput, ingrediente_receitaUncheckedUpdateManyWithoutReceitasInput>
  }

  export type usuariosUpsertWithoutReceitasInput = {
    update: XOR<usuariosUpdateWithoutReceitasInput, usuariosUncheckedUpdateWithoutReceitasInput>
    create: XOR<usuariosCreateWithoutReceitasInput, usuariosUncheckedCreateWithoutReceitasInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutReceitasInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutReceitasInput, usuariosUncheckedUpdateWithoutReceitasInput>
  }

  export type usuariosUpdateWithoutReceitasInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: IntFieldUpdateOperationsInput | number
    login?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateWithoutReceitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: IntFieldUpdateOperationsInput | number
    login?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type receitasCreateWithoutUsuariosInput = {
    id?: bigint | number
    nome?: string | null
    descricao?: string | null
    created_at?: Date | string
    ingrediente_receita?: ingrediente_receitaCreateNestedManyWithoutReceitasInput
  }

  export type receitasUncheckedCreateWithoutUsuariosInput = {
    id?: bigint | number
    nome?: string | null
    descricao?: string | null
    created_at?: Date | string
    ingrediente_receita?: ingrediente_receitaUncheckedCreateNestedManyWithoutReceitasInput
  }

  export type receitasCreateOrConnectWithoutUsuariosInput = {
    where: receitasWhereUniqueInput
    create: XOR<receitasCreateWithoutUsuariosInput, receitasUncheckedCreateWithoutUsuariosInput>
  }

  export type receitasCreateManyUsuariosInputEnvelope = {
    data: receitasCreateManyUsuariosInput | receitasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type receitasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: receitasWhereUniqueInput
    update: XOR<receitasUpdateWithoutUsuariosInput, receitasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<receitasCreateWithoutUsuariosInput, receitasUncheckedCreateWithoutUsuariosInput>
  }

  export type receitasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: receitasWhereUniqueInput
    data: XOR<receitasUpdateWithoutUsuariosInput, receitasUncheckedUpdateWithoutUsuariosInput>
  }

  export type receitasUpdateManyWithWhereWithoutUsuariosInput = {
    where: receitasScalarWhereInput
    data: XOR<receitasUpdateManyMutationInput, receitasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type receitasScalarWhereInput = {
    AND?: receitasScalarWhereInput | receitasScalarWhereInput[]
    OR?: receitasScalarWhereInput[]
    NOT?: receitasScalarWhereInput | receitasScalarWhereInput[]
    id?: BigIntFilter<"receitas"> | bigint | number
    nome?: StringNullableFilter<"receitas"> | string | null
    descricao?: StringNullableFilter<"receitas"> | string | null
    created_at?: DateTimeFilter<"receitas"> | Date | string
    id_usuario?: IntNullableFilter<"receitas"> | number | null
  }

  export type estoqueCreateManyIngredientesInput = {
    id?: bigint | number
    created_at?: Date | string
    qnt_item?: number | null
    qnt_min?: number | null
  }

  export type ingrediente_receitaCreateManyIngredientesInput = {
    id?: bigint | number
    id_receita?: bigint | number | null
    medida?: number | null
    uni_medida?: string | null
    base?: number | null
    created_at?: Date | string
  }

  export type estoqueUpdateWithoutIngredientesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    qnt_item?: NullableIntFieldUpdateOperationsInput | number | null
    qnt_min?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type estoqueUncheckedUpdateWithoutIngredientesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    qnt_item?: NullableIntFieldUpdateOperationsInput | number | null
    qnt_min?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type estoqueUncheckedUpdateManyWithoutIngredientesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    qnt_item?: NullableIntFieldUpdateOperationsInput | number | null
    qnt_min?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ingrediente_receitaUpdateWithoutIngredientesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    medida?: NullableFloatFieldUpdateOperationsInput | number | null
    uni_medida?: NullableStringFieldUpdateOperationsInput | string | null
    base?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: receitasUpdateOneWithoutIngrediente_receitaNestedInput
  }

  export type ingrediente_receitaUncheckedUpdateWithoutIngredientesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_receita?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    medida?: NullableFloatFieldUpdateOperationsInput | number | null
    uni_medida?: NullableStringFieldUpdateOperationsInput | string | null
    base?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingrediente_receitaUncheckedUpdateManyWithoutIngredientesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_receita?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    medida?: NullableFloatFieldUpdateOperationsInput | number | null
    uni_medida?: NullableStringFieldUpdateOperationsInput | string | null
    base?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingrediente_receitaCreateManyReceitasInput = {
    id?: bigint | number
    id_ingrediente?: bigint | number | null
    medida?: number | null
    uni_medida?: string | null
    base?: number | null
    created_at?: Date | string
  }

  export type ingrediente_receitaUpdateWithoutReceitasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    medida?: NullableFloatFieldUpdateOperationsInput | number | null
    uni_medida?: NullableStringFieldUpdateOperationsInput | string | null
    base?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredientes?: ingredientesUpdateOneWithoutIngrediente_receitaNestedInput
  }

  export type ingrediente_receitaUncheckedUpdateWithoutReceitasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_ingrediente?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    medida?: NullableFloatFieldUpdateOperationsInput | number | null
    uni_medida?: NullableStringFieldUpdateOperationsInput | string | null
    base?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ingrediente_receitaUncheckedUpdateManyWithoutReceitasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_ingrediente?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    medida?: NullableFloatFieldUpdateOperationsInput | number | null
    uni_medida?: NullableStringFieldUpdateOperationsInput | string | null
    base?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type receitasCreateManyUsuariosInput = {
    id?: bigint | number
    nome?: string | null
    descricao?: string | null
    created_at?: Date | string
  }

  export type receitasUpdateWithoutUsuariosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingrediente_receita?: ingrediente_receitaUpdateManyWithoutReceitasNestedInput
  }

  export type receitasUncheckedUpdateWithoutUsuariosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingrediente_receita?: ingrediente_receitaUncheckedUpdateManyWithoutReceitasNestedInput
  }

  export type receitasUncheckedUpdateManyWithoutUsuariosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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