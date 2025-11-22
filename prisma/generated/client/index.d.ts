
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Escuela
 * 
 */
export type Escuela = $Result.DefaultSelection<Prisma.$EscuelaPayload>
/**
 * Model PlanDeEstudio
 * 
 */
export type PlanDeEstudio = $Result.DefaultSelection<Prisma.$PlanDeEstudioPayload>
/**
 * Model Ciclo
 * 
 */
export type Ciclo = $Result.DefaultSelection<Prisma.$CicloPayload>
/**
 * Model Generacion
 * 
 */
export type Generacion = $Result.DefaultSelection<Prisma.$GeneracionPayload>
/**
 * Model Departamento
 * 
 */
export type Departamento = $Result.DefaultSelection<Prisma.$DepartamentoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Grupo
 * 
 */
export type Grupo = $Result.DefaultSelection<Prisma.$GrupoPayload>
/**
 * Model Actividad
 * 
 */
export type Actividad = $Result.DefaultSelection<Prisma.$ActividadPayload>
/**
 * Model AlumnoActividad
 * 
 */
export type AlumnoActividad = $Result.DefaultSelection<Prisma.$AlumnoActividadPayload>
/**
 * Model PlanDepartamento
 * 
 */
export type PlanDepartamento = $Result.DefaultSelection<Prisma.$PlanDepartamentoPayload>
/**
 * Model RegistroCambios
 * 
 */
export type RegistroCambios = $Result.DefaultSelection<Prisma.$RegistroCambiosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  ADMINISTRADOR: 'ADMINISTRADOR',
  COORDINADOR: 'COORDINADOR',
  ALUMNO: 'ALUMNO'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const Turno: {
  MATUTINO: 'MATUTINO',
  VESPERTINO: 'VESPERTINO'
};

export type Turno = (typeof Turno)[keyof typeof Turno]


export const TipoCiclo: {
  SEMESTRAL: 'SEMESTRAL',
  CUATRIMESTRAL: 'CUATRIMESTRAL',
  ANUAL: 'ANUAL'
};

export type TipoCiclo = (typeof TipoCiclo)[keyof typeof TipoCiclo]


export const Fase: {
  FISICO_MATEMATICO: 'FISICO_MATEMATICO',
  QUIMICO_BIOLOGO: 'QUIMICO_BIOLOGO',
  SOCIALES: 'SOCIALES'
};

export type Fase = (typeof Fase)[keyof typeof Fase]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type Turno = $Enums.Turno

export const Turno: typeof $Enums.Turno

export type TipoCiclo = $Enums.TipoCiclo

export const TipoCiclo: typeof $Enums.TipoCiclo

export type Fase = $Enums.Fase

export const Fase: typeof $Enums.Fase

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Escuelas
 * const escuelas = await prisma.escuela.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Escuelas
   * const escuelas = await prisma.escuela.findMany()
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
   * `prisma.escuela`: Exposes CRUD operations for the **Escuela** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Escuelas
    * const escuelas = await prisma.escuela.findMany()
    * ```
    */
  get escuela(): Prisma.EscuelaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planDeEstudio`: Exposes CRUD operations for the **PlanDeEstudio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanDeEstudios
    * const planDeEstudios = await prisma.planDeEstudio.findMany()
    * ```
    */
  get planDeEstudio(): Prisma.PlanDeEstudioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ciclo`: Exposes CRUD operations for the **Ciclo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ciclos
    * const ciclos = await prisma.ciclo.findMany()
    * ```
    */
  get ciclo(): Prisma.CicloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generacion`: Exposes CRUD operations for the **Generacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generacions
    * const generacions = await prisma.generacion.findMany()
    * ```
    */
  get generacion(): Prisma.GeneracionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departamento`: Exposes CRUD operations for the **Departamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departamentos
    * const departamentos = await prisma.departamento.findMany()
    * ```
    */
  get departamento(): Prisma.DepartamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grupo`: Exposes CRUD operations for the **Grupo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grupos
    * const grupos = await prisma.grupo.findMany()
    * ```
    */
  get grupo(): Prisma.GrupoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actividad`: Exposes CRUD operations for the **Actividad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actividads
    * const actividads = await prisma.actividad.findMany()
    * ```
    */
  get actividad(): Prisma.ActividadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alumnoActividad`: Exposes CRUD operations for the **AlumnoActividad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlumnoActividads
    * const alumnoActividads = await prisma.alumnoActividad.findMany()
    * ```
    */
  get alumnoActividad(): Prisma.AlumnoActividadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planDepartamento`: Exposes CRUD operations for the **PlanDepartamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanDepartamentos
    * const planDepartamentos = await prisma.planDepartamento.findMany()
    * ```
    */
  get planDepartamento(): Prisma.PlanDepartamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registroCambios`: Exposes CRUD operations for the **RegistroCambios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroCambios
    * const registroCambios = await prisma.registroCambios.findMany()
    * ```
    */
  get registroCambios(): Prisma.RegistroCambiosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Escuela: 'Escuela',
    PlanDeEstudio: 'PlanDeEstudio',
    Ciclo: 'Ciclo',
    Generacion: 'Generacion',
    Departamento: 'Departamento',
    Usuario: 'Usuario',
    Grupo: 'Grupo',
    Actividad: 'Actividad',
    AlumnoActividad: 'AlumnoActividad',
    PlanDepartamento: 'PlanDepartamento',
    RegistroCambios: 'RegistroCambios'
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
      modelProps: "escuela" | "planDeEstudio" | "ciclo" | "generacion" | "departamento" | "usuario" | "grupo" | "actividad" | "alumnoActividad" | "planDepartamento" | "registroCambios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Escuela: {
        payload: Prisma.$EscuelaPayload<ExtArgs>
        fields: Prisma.EscuelaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EscuelaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EscuelaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>
          }
          findFirst: {
            args: Prisma.EscuelaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EscuelaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>
          }
          findMany: {
            args: Prisma.EscuelaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>[]
          }
          create: {
            args: Prisma.EscuelaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>
          }
          createMany: {
            args: Prisma.EscuelaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EscuelaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>[]
          }
          delete: {
            args: Prisma.EscuelaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>
          }
          update: {
            args: Prisma.EscuelaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>
          }
          deleteMany: {
            args: Prisma.EscuelaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EscuelaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EscuelaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>[]
          }
          upsert: {
            args: Prisma.EscuelaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>
          }
          aggregate: {
            args: Prisma.EscuelaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEscuela>
          }
          groupBy: {
            args: Prisma.EscuelaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EscuelaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EscuelaCountArgs<ExtArgs>
            result: $Utils.Optional<EscuelaCountAggregateOutputType> | number
          }
        }
      }
      PlanDeEstudio: {
        payload: Prisma.$PlanDeEstudioPayload<ExtArgs>
        fields: Prisma.PlanDeEstudioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanDeEstudioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDeEstudioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanDeEstudioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDeEstudioPayload>
          }
          findFirst: {
            args: Prisma.PlanDeEstudioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDeEstudioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanDeEstudioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDeEstudioPayload>
          }
          findMany: {
            args: Prisma.PlanDeEstudioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDeEstudioPayload>[]
          }
          create: {
            args: Prisma.PlanDeEstudioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDeEstudioPayload>
          }
          createMany: {
            args: Prisma.PlanDeEstudioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanDeEstudioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDeEstudioPayload>[]
          }
          delete: {
            args: Prisma.PlanDeEstudioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDeEstudioPayload>
          }
          update: {
            args: Prisma.PlanDeEstudioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDeEstudioPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeEstudioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanDeEstudioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanDeEstudioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDeEstudioPayload>[]
          }
          upsert: {
            args: Prisma.PlanDeEstudioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDeEstudioPayload>
          }
          aggregate: {
            args: Prisma.PlanDeEstudioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanDeEstudio>
          }
          groupBy: {
            args: Prisma.PlanDeEstudioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanDeEstudioGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanDeEstudioCountArgs<ExtArgs>
            result: $Utils.Optional<PlanDeEstudioCountAggregateOutputType> | number
          }
        }
      }
      Ciclo: {
        payload: Prisma.$CicloPayload<ExtArgs>
        fields: Prisma.CicloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CicloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CicloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          findFirst: {
            args: Prisma.CicloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CicloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          findMany: {
            args: Prisma.CicloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>[]
          }
          create: {
            args: Prisma.CicloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          createMany: {
            args: Prisma.CicloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CicloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>[]
          }
          delete: {
            args: Prisma.CicloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          update: {
            args: Prisma.CicloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          deleteMany: {
            args: Prisma.CicloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CicloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CicloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>[]
          }
          upsert: {
            args: Prisma.CicloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          aggregate: {
            args: Prisma.CicloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCiclo>
          }
          groupBy: {
            args: Prisma.CicloGroupByArgs<ExtArgs>
            result: $Utils.Optional<CicloGroupByOutputType>[]
          }
          count: {
            args: Prisma.CicloCountArgs<ExtArgs>
            result: $Utils.Optional<CicloCountAggregateOutputType> | number
          }
        }
      }
      Generacion: {
        payload: Prisma.$GeneracionPayload<ExtArgs>
        fields: Prisma.GeneracionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneracionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneracionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneracionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneracionPayload>
          }
          findFirst: {
            args: Prisma.GeneracionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneracionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneracionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneracionPayload>
          }
          findMany: {
            args: Prisma.GeneracionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneracionPayload>[]
          }
          create: {
            args: Prisma.GeneracionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneracionPayload>
          }
          createMany: {
            args: Prisma.GeneracionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneracionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneracionPayload>[]
          }
          delete: {
            args: Prisma.GeneracionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneracionPayload>
          }
          update: {
            args: Prisma.GeneracionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneracionPayload>
          }
          deleteMany: {
            args: Prisma.GeneracionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneracionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneracionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneracionPayload>[]
          }
          upsert: {
            args: Prisma.GeneracionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneracionPayload>
          }
          aggregate: {
            args: Prisma.GeneracionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneracion>
          }
          groupBy: {
            args: Prisma.GeneracionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneracionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneracionCountArgs<ExtArgs>
            result: $Utils.Optional<GeneracionCountAggregateOutputType> | number
          }
        }
      }
      Departamento: {
        payload: Prisma.$DepartamentoPayload<ExtArgs>
        fields: Prisma.DepartamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          findFirst: {
            args: Prisma.DepartamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          findMany: {
            args: Prisma.DepartamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>[]
          }
          create: {
            args: Prisma.DepartamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          createMany: {
            args: Prisma.DepartamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>[]
          }
          delete: {
            args: Prisma.DepartamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          update: {
            args: Prisma.DepartamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          deleteMany: {
            args: Prisma.DepartamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>[]
          }
          upsert: {
            args: Prisma.DepartamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          aggregate: {
            args: Prisma.DepartamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartamento>
          }
          groupBy: {
            args: Prisma.DepartamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartamentoCountArgs<ExtArgs>
            result: $Utils.Optional<DepartamentoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Grupo: {
        payload: Prisma.$GrupoPayload<ExtArgs>
        fields: Prisma.GrupoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrupoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrupoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          findFirst: {
            args: Prisma.GrupoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrupoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          findMany: {
            args: Prisma.GrupoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>[]
          }
          create: {
            args: Prisma.GrupoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          createMany: {
            args: Prisma.GrupoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrupoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>[]
          }
          delete: {
            args: Prisma.GrupoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          update: {
            args: Prisma.GrupoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          deleteMany: {
            args: Prisma.GrupoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrupoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrupoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>[]
          }
          upsert: {
            args: Prisma.GrupoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          aggregate: {
            args: Prisma.GrupoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrupo>
          }
          groupBy: {
            args: Prisma.GrupoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrupoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrupoCountArgs<ExtArgs>
            result: $Utils.Optional<GrupoCountAggregateOutputType> | number
          }
        }
      }
      Actividad: {
        payload: Prisma.$ActividadPayload<ExtArgs>
        fields: Prisma.ActividadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActividadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActividadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          findFirst: {
            args: Prisma.ActividadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActividadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          findMany: {
            args: Prisma.ActividadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>[]
          }
          create: {
            args: Prisma.ActividadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          createMany: {
            args: Prisma.ActividadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActividadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>[]
          }
          delete: {
            args: Prisma.ActividadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          update: {
            args: Prisma.ActividadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          deleteMany: {
            args: Prisma.ActividadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActividadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActividadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>[]
          }
          upsert: {
            args: Prisma.ActividadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          aggregate: {
            args: Prisma.ActividadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActividad>
          }
          groupBy: {
            args: Prisma.ActividadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActividadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActividadCountArgs<ExtArgs>
            result: $Utils.Optional<ActividadCountAggregateOutputType> | number
          }
        }
      }
      AlumnoActividad: {
        payload: Prisma.$AlumnoActividadPayload<ExtArgs>
        fields: Prisma.AlumnoActividadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlumnoActividadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoActividadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlumnoActividadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoActividadPayload>
          }
          findFirst: {
            args: Prisma.AlumnoActividadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoActividadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlumnoActividadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoActividadPayload>
          }
          findMany: {
            args: Prisma.AlumnoActividadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoActividadPayload>[]
          }
          create: {
            args: Prisma.AlumnoActividadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoActividadPayload>
          }
          createMany: {
            args: Prisma.AlumnoActividadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlumnoActividadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoActividadPayload>[]
          }
          delete: {
            args: Prisma.AlumnoActividadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoActividadPayload>
          }
          update: {
            args: Prisma.AlumnoActividadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoActividadPayload>
          }
          deleteMany: {
            args: Prisma.AlumnoActividadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlumnoActividadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlumnoActividadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoActividadPayload>[]
          }
          upsert: {
            args: Prisma.AlumnoActividadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumnoActividadPayload>
          }
          aggregate: {
            args: Prisma.AlumnoActividadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlumnoActividad>
          }
          groupBy: {
            args: Prisma.AlumnoActividadGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlumnoActividadGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlumnoActividadCountArgs<ExtArgs>
            result: $Utils.Optional<AlumnoActividadCountAggregateOutputType> | number
          }
        }
      }
      PlanDepartamento: {
        payload: Prisma.$PlanDepartamentoPayload<ExtArgs>
        fields: Prisma.PlanDepartamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanDepartamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDepartamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanDepartamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDepartamentoPayload>
          }
          findFirst: {
            args: Prisma.PlanDepartamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDepartamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanDepartamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDepartamentoPayload>
          }
          findMany: {
            args: Prisma.PlanDepartamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDepartamentoPayload>[]
          }
          create: {
            args: Prisma.PlanDepartamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDepartamentoPayload>
          }
          createMany: {
            args: Prisma.PlanDepartamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanDepartamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDepartamentoPayload>[]
          }
          delete: {
            args: Prisma.PlanDepartamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDepartamentoPayload>
          }
          update: {
            args: Prisma.PlanDepartamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDepartamentoPayload>
          }
          deleteMany: {
            args: Prisma.PlanDepartamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanDepartamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanDepartamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDepartamentoPayload>[]
          }
          upsert: {
            args: Prisma.PlanDepartamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanDepartamentoPayload>
          }
          aggregate: {
            args: Prisma.PlanDepartamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanDepartamento>
          }
          groupBy: {
            args: Prisma.PlanDepartamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanDepartamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanDepartamentoCountArgs<ExtArgs>
            result: $Utils.Optional<PlanDepartamentoCountAggregateOutputType> | number
          }
        }
      }
      RegistroCambios: {
        payload: Prisma.$RegistroCambiosPayload<ExtArgs>
        fields: Prisma.RegistroCambiosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroCambiosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCambiosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroCambiosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCambiosPayload>
          }
          findFirst: {
            args: Prisma.RegistroCambiosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCambiosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroCambiosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCambiosPayload>
          }
          findMany: {
            args: Prisma.RegistroCambiosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCambiosPayload>[]
          }
          create: {
            args: Prisma.RegistroCambiosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCambiosPayload>
          }
          createMany: {
            args: Prisma.RegistroCambiosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroCambiosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCambiosPayload>[]
          }
          delete: {
            args: Prisma.RegistroCambiosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCambiosPayload>
          }
          update: {
            args: Prisma.RegistroCambiosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCambiosPayload>
          }
          deleteMany: {
            args: Prisma.RegistroCambiosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroCambiosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistroCambiosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCambiosPayload>[]
          }
          upsert: {
            args: Prisma.RegistroCambiosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCambiosPayload>
          }
          aggregate: {
            args: Prisma.RegistroCambiosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroCambios>
          }
          groupBy: {
            args: Prisma.RegistroCambiosGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroCambiosGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroCambiosCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroCambiosCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    escuela?: EscuelaOmit
    planDeEstudio?: PlanDeEstudioOmit
    ciclo?: CicloOmit
    generacion?: GeneracionOmit
    departamento?: DepartamentoOmit
    usuario?: UsuarioOmit
    grupo?: GrupoOmit
    actividad?: ActividadOmit
    alumnoActividad?: AlumnoActividadOmit
    planDepartamento?: PlanDepartamentoOmit
    registroCambios?: RegistroCambiosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type EscuelaCountOutputType
   */

  export type EscuelaCountOutputType = {
    planes: number
    departamentos: number
    usuarios: number
    generaciones: number
    grupos: number
  }

  export type EscuelaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planes?: boolean | EscuelaCountOutputTypeCountPlanesArgs
    departamentos?: boolean | EscuelaCountOutputTypeCountDepartamentosArgs
    usuarios?: boolean | EscuelaCountOutputTypeCountUsuariosArgs
    generaciones?: boolean | EscuelaCountOutputTypeCountGeneracionesArgs
    grupos?: boolean | EscuelaCountOutputTypeCountGruposArgs
  }

  // Custom InputTypes
  /**
   * EscuelaCountOutputType without action
   */
  export type EscuelaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscuelaCountOutputType
     */
    select?: EscuelaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EscuelaCountOutputType without action
   */
  export type EscuelaCountOutputTypeCountPlanesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanDeEstudioWhereInput
  }

  /**
   * EscuelaCountOutputType without action
   */
  export type EscuelaCountOutputTypeCountDepartamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartamentoWhereInput
  }

  /**
   * EscuelaCountOutputType without action
   */
  export type EscuelaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * EscuelaCountOutputType without action
   */
  export type EscuelaCountOutputTypeCountGeneracionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneracionWhereInput
  }

  /**
   * EscuelaCountOutputType without action
   */
  export type EscuelaCountOutputTypeCountGruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrupoWhereInput
  }


  /**
   * Count Type PlanDeEstudioCountOutputType
   */

  export type PlanDeEstudioCountOutputType = {
    ciclos: number
    generaciones: number
    planDeptos: number
    grupos: number
  }

  export type PlanDeEstudioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciclos?: boolean | PlanDeEstudioCountOutputTypeCountCiclosArgs
    generaciones?: boolean | PlanDeEstudioCountOutputTypeCountGeneracionesArgs
    planDeptos?: boolean | PlanDeEstudioCountOutputTypeCountPlanDeptosArgs
    grupos?: boolean | PlanDeEstudioCountOutputTypeCountGruposArgs
  }

  // Custom InputTypes
  /**
   * PlanDeEstudioCountOutputType without action
   */
  export type PlanDeEstudioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDeEstudioCountOutputType
     */
    select?: PlanDeEstudioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanDeEstudioCountOutputType without action
   */
  export type PlanDeEstudioCountOutputTypeCountCiclosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CicloWhereInput
  }

  /**
   * PlanDeEstudioCountOutputType without action
   */
  export type PlanDeEstudioCountOutputTypeCountGeneracionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneracionWhereInput
  }

  /**
   * PlanDeEstudioCountOutputType without action
   */
  export type PlanDeEstudioCountOutputTypeCountPlanDeptosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanDepartamentoWhereInput
  }

  /**
   * PlanDeEstudioCountOutputType without action
   */
  export type PlanDeEstudioCountOutputTypeCountGruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrupoWhereInput
  }


  /**
   * Count Type CicloCountOutputType
   */

  export type CicloCountOutputType = {
    grupos: number
    actividades: number
    alumnoActs: number
  }

  export type CicloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grupos?: boolean | CicloCountOutputTypeCountGruposArgs
    actividades?: boolean | CicloCountOutputTypeCountActividadesArgs
    alumnoActs?: boolean | CicloCountOutputTypeCountAlumnoActsArgs
  }

  // Custom InputTypes
  /**
   * CicloCountOutputType without action
   */
  export type CicloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloCountOutputType
     */
    select?: CicloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CicloCountOutputType without action
   */
  export type CicloCountOutputTypeCountGruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrupoWhereInput
  }

  /**
   * CicloCountOutputType without action
   */
  export type CicloCountOutputTypeCountActividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActividadWhereInput
  }

  /**
   * CicloCountOutputType without action
   */
  export type CicloCountOutputTypeCountAlumnoActsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnoActividadWhereInput
  }


  /**
   * Count Type GeneracionCountOutputType
   */

  export type GeneracionCountOutputType = {
    grupos: number
    alumnos: number
  }

  export type GeneracionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grupos?: boolean | GeneracionCountOutputTypeCountGruposArgs
    alumnos?: boolean | GeneracionCountOutputTypeCountAlumnosArgs
  }

  // Custom InputTypes
  /**
   * GeneracionCountOutputType without action
   */
  export type GeneracionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneracionCountOutputType
     */
    select?: GeneracionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneracionCountOutputType without action
   */
  export type GeneracionCountOutputTypeCountGruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrupoWhereInput
  }

  /**
   * GeneracionCountOutputType without action
   */
  export type GeneracionCountOutputTypeCountAlumnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type DepartamentoCountOutputType
   */

  export type DepartamentoCountOutputType = {
    actividades: number
    planDeptos: number
  }

  export type DepartamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actividades?: boolean | DepartamentoCountOutputTypeCountActividadesArgs
    planDeptos?: boolean | DepartamentoCountOutputTypeCountPlanDeptosArgs
  }

  // Custom InputTypes
  /**
   * DepartamentoCountOutputType without action
   */
  export type DepartamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartamentoCountOutputType
     */
    select?: DepartamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartamentoCountOutputType without action
   */
  export type DepartamentoCountOutputTypeCountActividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActividadWhereInput
  }

  /**
   * DepartamentoCountOutputType without action
   */
  export type DepartamentoCountOutputTypeCountPlanDeptosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanDepartamentoWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    actividades_creadas: number
    registros_act: number
    registros_puntos: number
    logs: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actividades_creadas?: boolean | UsuarioCountOutputTypeCountActividades_creadasArgs
    registros_act?: boolean | UsuarioCountOutputTypeCountRegistros_actArgs
    registros_puntos?: boolean | UsuarioCountOutputTypeCountRegistros_puntosArgs
    logs?: boolean | UsuarioCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountActividades_creadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActividadWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRegistros_actArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnoActividadWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRegistros_puntosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnoActividadWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroCambiosWhereInput
  }


  /**
   * Count Type GrupoCountOutputType
   */

  export type GrupoCountOutputType = {
    alumnos: number
  }

  export type GrupoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumnos?: boolean | GrupoCountOutputTypeCountAlumnosArgs
  }

  // Custom InputTypes
  /**
   * GrupoCountOutputType without action
   */
  export type GrupoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoCountOutputType
     */
    select?: GrupoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GrupoCountOutputType without action
   */
  export type GrupoCountOutputTypeCountAlumnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type ActividadCountOutputType
   */

  export type ActividadCountOutputType = {
    alumnoActs: number
  }

  export type ActividadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumnoActs?: boolean | ActividadCountOutputTypeCountAlumnoActsArgs
  }

  // Custom InputTypes
  /**
   * ActividadCountOutputType without action
   */
  export type ActividadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActividadCountOutputType
     */
    select?: ActividadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActividadCountOutputType without action
   */
  export type ActividadCountOutputTypeCountAlumnoActsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnoActividadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Escuela
   */

  export type AggregateEscuela = {
    _count: EscuelaCountAggregateOutputType | null
    _avg: EscuelaAvgAggregateOutputType | null
    _sum: EscuelaSumAggregateOutputType | null
    _min: EscuelaMinAggregateOutputType | null
    _max: EscuelaMaxAggregateOutputType | null
  }

  export type EscuelaAvgAggregateOutputType = {
    id_escuela: number | null
  }

  export type EscuelaSumAggregateOutputType = {
    id_escuela: number | null
  }

  export type EscuelaMinAggregateOutputType = {
    id_escuela: number | null
    nombre: string | null
    clave: string | null
    estado: boolean | null
  }

  export type EscuelaMaxAggregateOutputType = {
    id_escuela: number | null
    nombre: string | null
    clave: string | null
    estado: boolean | null
  }

  export type EscuelaCountAggregateOutputType = {
    id_escuela: number
    nombre: number
    clave: number
    estado: number
    _all: number
  }


  export type EscuelaAvgAggregateInputType = {
    id_escuela?: true
  }

  export type EscuelaSumAggregateInputType = {
    id_escuela?: true
  }

  export type EscuelaMinAggregateInputType = {
    id_escuela?: true
    nombre?: true
    clave?: true
    estado?: true
  }

  export type EscuelaMaxAggregateInputType = {
    id_escuela?: true
    nombre?: true
    clave?: true
    estado?: true
  }

  export type EscuelaCountAggregateInputType = {
    id_escuela?: true
    nombre?: true
    clave?: true
    estado?: true
    _all?: true
  }

  export type EscuelaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escuela to aggregate.
     */
    where?: EscuelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escuelas to fetch.
     */
    orderBy?: EscuelaOrderByWithRelationInput | EscuelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EscuelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escuelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escuelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Escuelas
    **/
    _count?: true | EscuelaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EscuelaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EscuelaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EscuelaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EscuelaMaxAggregateInputType
  }

  export type GetEscuelaAggregateType<T extends EscuelaAggregateArgs> = {
        [P in keyof T & keyof AggregateEscuela]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEscuela[P]>
      : GetScalarType<T[P], AggregateEscuela[P]>
  }




  export type EscuelaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscuelaWhereInput
    orderBy?: EscuelaOrderByWithAggregationInput | EscuelaOrderByWithAggregationInput[]
    by: EscuelaScalarFieldEnum[] | EscuelaScalarFieldEnum
    having?: EscuelaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EscuelaCountAggregateInputType | true
    _avg?: EscuelaAvgAggregateInputType
    _sum?: EscuelaSumAggregateInputType
    _min?: EscuelaMinAggregateInputType
    _max?: EscuelaMaxAggregateInputType
  }

  export type EscuelaGroupByOutputType = {
    id_escuela: number
    nombre: string
    clave: string | null
    estado: boolean
    _count: EscuelaCountAggregateOutputType | null
    _avg: EscuelaAvgAggregateOutputType | null
    _sum: EscuelaSumAggregateOutputType | null
    _min: EscuelaMinAggregateOutputType | null
    _max: EscuelaMaxAggregateOutputType | null
  }

  type GetEscuelaGroupByPayload<T extends EscuelaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EscuelaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EscuelaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EscuelaGroupByOutputType[P]>
            : GetScalarType<T[P], EscuelaGroupByOutputType[P]>
        }
      >
    >


  export type EscuelaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_escuela?: boolean
    nombre?: boolean
    clave?: boolean
    estado?: boolean
    planes?: boolean | Escuela$planesArgs<ExtArgs>
    departamentos?: boolean | Escuela$departamentosArgs<ExtArgs>
    usuarios?: boolean | Escuela$usuariosArgs<ExtArgs>
    generaciones?: boolean | Escuela$generacionesArgs<ExtArgs>
    grupos?: boolean | Escuela$gruposArgs<ExtArgs>
    _count?: boolean | EscuelaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["escuela"]>

  export type EscuelaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_escuela?: boolean
    nombre?: boolean
    clave?: boolean
    estado?: boolean
  }, ExtArgs["result"]["escuela"]>

  export type EscuelaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_escuela?: boolean
    nombre?: boolean
    clave?: boolean
    estado?: boolean
  }, ExtArgs["result"]["escuela"]>

  export type EscuelaSelectScalar = {
    id_escuela?: boolean
    nombre?: boolean
    clave?: boolean
    estado?: boolean
  }

  export type EscuelaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_escuela" | "nombre" | "clave" | "estado", ExtArgs["result"]["escuela"]>
  export type EscuelaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planes?: boolean | Escuela$planesArgs<ExtArgs>
    departamentos?: boolean | Escuela$departamentosArgs<ExtArgs>
    usuarios?: boolean | Escuela$usuariosArgs<ExtArgs>
    generaciones?: boolean | Escuela$generacionesArgs<ExtArgs>
    grupos?: boolean | Escuela$gruposArgs<ExtArgs>
    _count?: boolean | EscuelaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EscuelaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EscuelaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EscuelaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Escuela"
    objects: {
      planes: Prisma.$PlanDeEstudioPayload<ExtArgs>[]
      departamentos: Prisma.$DepartamentoPayload<ExtArgs>[]
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      generaciones: Prisma.$GeneracionPayload<ExtArgs>[]
      grupos: Prisma.$GrupoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_escuela: number
      nombre: string
      clave: string | null
      estado: boolean
    }, ExtArgs["result"]["escuela"]>
    composites: {}
  }

  type EscuelaGetPayload<S extends boolean | null | undefined | EscuelaDefaultArgs> = $Result.GetResult<Prisma.$EscuelaPayload, S>

  type EscuelaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EscuelaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EscuelaCountAggregateInputType | true
    }

  export interface EscuelaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Escuela'], meta: { name: 'Escuela' } }
    /**
     * Find zero or one Escuela that matches the filter.
     * @param {EscuelaFindUniqueArgs} args - Arguments to find a Escuela
     * @example
     * // Get one Escuela
     * const escuela = await prisma.escuela.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EscuelaFindUniqueArgs>(args: SelectSubset<T, EscuelaFindUniqueArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Escuela that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EscuelaFindUniqueOrThrowArgs} args - Arguments to find a Escuela
     * @example
     * // Get one Escuela
     * const escuela = await prisma.escuela.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EscuelaFindUniqueOrThrowArgs>(args: SelectSubset<T, EscuelaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Escuela that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscuelaFindFirstArgs} args - Arguments to find a Escuela
     * @example
     * // Get one Escuela
     * const escuela = await prisma.escuela.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EscuelaFindFirstArgs>(args?: SelectSubset<T, EscuelaFindFirstArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Escuela that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscuelaFindFirstOrThrowArgs} args - Arguments to find a Escuela
     * @example
     * // Get one Escuela
     * const escuela = await prisma.escuela.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EscuelaFindFirstOrThrowArgs>(args?: SelectSubset<T, EscuelaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Escuelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscuelaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Escuelas
     * const escuelas = await prisma.escuela.findMany()
     * 
     * // Get first 10 Escuelas
     * const escuelas = await prisma.escuela.findMany({ take: 10 })
     * 
     * // Only select the `id_escuela`
     * const escuelaWithId_escuelaOnly = await prisma.escuela.findMany({ select: { id_escuela: true } })
     * 
     */
    findMany<T extends EscuelaFindManyArgs>(args?: SelectSubset<T, EscuelaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Escuela.
     * @param {EscuelaCreateArgs} args - Arguments to create a Escuela.
     * @example
     * // Create one Escuela
     * const Escuela = await prisma.escuela.create({
     *   data: {
     *     // ... data to create a Escuela
     *   }
     * })
     * 
     */
    create<T extends EscuelaCreateArgs>(args: SelectSubset<T, EscuelaCreateArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Escuelas.
     * @param {EscuelaCreateManyArgs} args - Arguments to create many Escuelas.
     * @example
     * // Create many Escuelas
     * const escuela = await prisma.escuela.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EscuelaCreateManyArgs>(args?: SelectSubset<T, EscuelaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Escuelas and returns the data saved in the database.
     * @param {EscuelaCreateManyAndReturnArgs} args - Arguments to create many Escuelas.
     * @example
     * // Create many Escuelas
     * const escuela = await prisma.escuela.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Escuelas and only return the `id_escuela`
     * const escuelaWithId_escuelaOnly = await prisma.escuela.createManyAndReturn({
     *   select: { id_escuela: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EscuelaCreateManyAndReturnArgs>(args?: SelectSubset<T, EscuelaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Escuela.
     * @param {EscuelaDeleteArgs} args - Arguments to delete one Escuela.
     * @example
     * // Delete one Escuela
     * const Escuela = await prisma.escuela.delete({
     *   where: {
     *     // ... filter to delete one Escuela
     *   }
     * })
     * 
     */
    delete<T extends EscuelaDeleteArgs>(args: SelectSubset<T, EscuelaDeleteArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Escuela.
     * @param {EscuelaUpdateArgs} args - Arguments to update one Escuela.
     * @example
     * // Update one Escuela
     * const escuela = await prisma.escuela.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EscuelaUpdateArgs>(args: SelectSubset<T, EscuelaUpdateArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Escuelas.
     * @param {EscuelaDeleteManyArgs} args - Arguments to filter Escuelas to delete.
     * @example
     * // Delete a few Escuelas
     * const { count } = await prisma.escuela.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EscuelaDeleteManyArgs>(args?: SelectSubset<T, EscuelaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Escuelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscuelaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Escuelas
     * const escuela = await prisma.escuela.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EscuelaUpdateManyArgs>(args: SelectSubset<T, EscuelaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Escuelas and returns the data updated in the database.
     * @param {EscuelaUpdateManyAndReturnArgs} args - Arguments to update many Escuelas.
     * @example
     * // Update many Escuelas
     * const escuela = await prisma.escuela.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Escuelas and only return the `id_escuela`
     * const escuelaWithId_escuelaOnly = await prisma.escuela.updateManyAndReturn({
     *   select: { id_escuela: true },
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
    updateManyAndReturn<T extends EscuelaUpdateManyAndReturnArgs>(args: SelectSubset<T, EscuelaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Escuela.
     * @param {EscuelaUpsertArgs} args - Arguments to update or create a Escuela.
     * @example
     * // Update or create a Escuela
     * const escuela = await prisma.escuela.upsert({
     *   create: {
     *     // ... data to create a Escuela
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Escuela we want to update
     *   }
     * })
     */
    upsert<T extends EscuelaUpsertArgs>(args: SelectSubset<T, EscuelaUpsertArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Escuelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscuelaCountArgs} args - Arguments to filter Escuelas to count.
     * @example
     * // Count the number of Escuelas
     * const count = await prisma.escuela.count({
     *   where: {
     *     // ... the filter for the Escuelas we want to count
     *   }
     * })
    **/
    count<T extends EscuelaCountArgs>(
      args?: Subset<T, EscuelaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EscuelaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Escuela.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscuelaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EscuelaAggregateArgs>(args: Subset<T, EscuelaAggregateArgs>): Prisma.PrismaPromise<GetEscuelaAggregateType<T>>

    /**
     * Group by Escuela.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscuelaGroupByArgs} args - Group by arguments.
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
      T extends EscuelaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EscuelaGroupByArgs['orderBy'] }
        : { orderBy?: EscuelaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EscuelaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEscuelaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Escuela model
   */
  readonly fields: EscuelaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Escuela.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EscuelaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planes<T extends Escuela$planesArgs<ExtArgs> = {}>(args?: Subset<T, Escuela$planesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departamentos<T extends Escuela$departamentosArgs<ExtArgs> = {}>(args?: Subset<T, Escuela$departamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends Escuela$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Escuela$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generaciones<T extends Escuela$generacionesArgs<ExtArgs> = {}>(args?: Subset<T, Escuela$generacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneracionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grupos<T extends Escuela$gruposArgs<ExtArgs> = {}>(args?: Subset<T, Escuela$gruposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Escuela model
   */
  interface EscuelaFieldRefs {
    readonly id_escuela: FieldRef<"Escuela", 'Int'>
    readonly nombre: FieldRef<"Escuela", 'String'>
    readonly clave: FieldRef<"Escuela", 'String'>
    readonly estado: FieldRef<"Escuela", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Escuela findUnique
   */
  export type EscuelaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escuela
     */
    omit?: EscuelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * Filter, which Escuela to fetch.
     */
    where: EscuelaWhereUniqueInput
  }

  /**
   * Escuela findUniqueOrThrow
   */
  export type EscuelaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escuela
     */
    omit?: EscuelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * Filter, which Escuela to fetch.
     */
    where: EscuelaWhereUniqueInput
  }

  /**
   * Escuela findFirst
   */
  export type EscuelaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escuela
     */
    omit?: EscuelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * Filter, which Escuela to fetch.
     */
    where?: EscuelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escuelas to fetch.
     */
    orderBy?: EscuelaOrderByWithRelationInput | EscuelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escuelas.
     */
    cursor?: EscuelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escuelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escuelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escuelas.
     */
    distinct?: EscuelaScalarFieldEnum | EscuelaScalarFieldEnum[]
  }

  /**
   * Escuela findFirstOrThrow
   */
  export type EscuelaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escuela
     */
    omit?: EscuelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * Filter, which Escuela to fetch.
     */
    where?: EscuelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escuelas to fetch.
     */
    orderBy?: EscuelaOrderByWithRelationInput | EscuelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escuelas.
     */
    cursor?: EscuelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escuelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escuelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escuelas.
     */
    distinct?: EscuelaScalarFieldEnum | EscuelaScalarFieldEnum[]
  }

  /**
   * Escuela findMany
   */
  export type EscuelaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escuela
     */
    omit?: EscuelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * Filter, which Escuelas to fetch.
     */
    where?: EscuelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escuelas to fetch.
     */
    orderBy?: EscuelaOrderByWithRelationInput | EscuelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Escuelas.
     */
    cursor?: EscuelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escuelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escuelas.
     */
    skip?: number
    distinct?: EscuelaScalarFieldEnum | EscuelaScalarFieldEnum[]
  }

  /**
   * Escuela create
   */
  export type EscuelaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escuela
     */
    omit?: EscuelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * The data needed to create a Escuela.
     */
    data: XOR<EscuelaCreateInput, EscuelaUncheckedCreateInput>
  }

  /**
   * Escuela createMany
   */
  export type EscuelaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Escuelas.
     */
    data: EscuelaCreateManyInput | EscuelaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Escuela createManyAndReturn
   */
  export type EscuelaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Escuela
     */
    omit?: EscuelaOmit<ExtArgs> | null
    /**
     * The data used to create many Escuelas.
     */
    data: EscuelaCreateManyInput | EscuelaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Escuela update
   */
  export type EscuelaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escuela
     */
    omit?: EscuelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * The data needed to update a Escuela.
     */
    data: XOR<EscuelaUpdateInput, EscuelaUncheckedUpdateInput>
    /**
     * Choose, which Escuela to update.
     */
    where: EscuelaWhereUniqueInput
  }

  /**
   * Escuela updateMany
   */
  export type EscuelaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Escuelas.
     */
    data: XOR<EscuelaUpdateManyMutationInput, EscuelaUncheckedUpdateManyInput>
    /**
     * Filter which Escuelas to update
     */
    where?: EscuelaWhereInput
    /**
     * Limit how many Escuelas to update.
     */
    limit?: number
  }

  /**
   * Escuela updateManyAndReturn
   */
  export type EscuelaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Escuela
     */
    omit?: EscuelaOmit<ExtArgs> | null
    /**
     * The data used to update Escuelas.
     */
    data: XOR<EscuelaUpdateManyMutationInput, EscuelaUncheckedUpdateManyInput>
    /**
     * Filter which Escuelas to update
     */
    where?: EscuelaWhereInput
    /**
     * Limit how many Escuelas to update.
     */
    limit?: number
  }

  /**
   * Escuela upsert
   */
  export type EscuelaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escuela
     */
    omit?: EscuelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * The filter to search for the Escuela to update in case it exists.
     */
    where: EscuelaWhereUniqueInput
    /**
     * In case the Escuela found by the `where` argument doesn't exist, create a new Escuela with this data.
     */
    create: XOR<EscuelaCreateInput, EscuelaUncheckedCreateInput>
    /**
     * In case the Escuela was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EscuelaUpdateInput, EscuelaUncheckedUpdateInput>
  }

  /**
   * Escuela delete
   */
  export type EscuelaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escuela
     */
    omit?: EscuelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * Filter which Escuela to delete.
     */
    where: EscuelaWhereUniqueInput
  }

  /**
   * Escuela deleteMany
   */
  export type EscuelaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escuelas to delete
     */
    where?: EscuelaWhereInput
    /**
     * Limit how many Escuelas to delete.
     */
    limit?: number
  }

  /**
   * Escuela.planes
   */
  export type Escuela$planesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDeEstudio
     */
    select?: PlanDeEstudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDeEstudio
     */
    omit?: PlanDeEstudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDeEstudioInclude<ExtArgs> | null
    where?: PlanDeEstudioWhereInput
    orderBy?: PlanDeEstudioOrderByWithRelationInput | PlanDeEstudioOrderByWithRelationInput[]
    cursor?: PlanDeEstudioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanDeEstudioScalarFieldEnum | PlanDeEstudioScalarFieldEnum[]
  }

  /**
   * Escuela.departamentos
   */
  export type Escuela$departamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    where?: DepartamentoWhereInput
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    cursor?: DepartamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * Escuela.usuarios
   */
  export type Escuela$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Escuela.generaciones
   */
  export type Escuela$generacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generacion
     */
    select?: GeneracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generacion
     */
    omit?: GeneracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneracionInclude<ExtArgs> | null
    where?: GeneracionWhereInput
    orderBy?: GeneracionOrderByWithRelationInput | GeneracionOrderByWithRelationInput[]
    cursor?: GeneracionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneracionScalarFieldEnum | GeneracionScalarFieldEnum[]
  }

  /**
   * Escuela.grupos
   */
  export type Escuela$gruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    where?: GrupoWhereInput
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    cursor?: GrupoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrupoScalarFieldEnum | GrupoScalarFieldEnum[]
  }

  /**
   * Escuela without action
   */
  export type EscuelaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escuela
     */
    omit?: EscuelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscuelaInclude<ExtArgs> | null
  }


  /**
   * Model PlanDeEstudio
   */

  export type AggregatePlanDeEstudio = {
    _count: PlanDeEstudioCountAggregateOutputType | null
    _avg: PlanDeEstudioAvgAggregateOutputType | null
    _sum: PlanDeEstudioSumAggregateOutputType | null
    _min: PlanDeEstudioMinAggregateOutputType | null
    _max: PlanDeEstudioMaxAggregateOutputType | null
  }

  export type PlanDeEstudioAvgAggregateOutputType = {
    id_plan: number | null
    id_escuela: number | null
  }

  export type PlanDeEstudioSumAggregateOutputType = {
    id_plan: number | null
    id_escuela: number | null
  }

  export type PlanDeEstudioMinAggregateOutputType = {
    id_plan: number | null
    nombre: string | null
    descripcion: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    id_escuela: number | null
  }

  export type PlanDeEstudioMaxAggregateOutputType = {
    id_plan: number | null
    nombre: string | null
    descripcion: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    id_escuela: number | null
  }

  export type PlanDeEstudioCountAggregateOutputType = {
    id_plan: number
    nombre: number
    descripcion: number
    fecha_inicio: number
    fecha_fin: number
    id_escuela: number
    _all: number
  }


  export type PlanDeEstudioAvgAggregateInputType = {
    id_plan?: true
    id_escuela?: true
  }

  export type PlanDeEstudioSumAggregateInputType = {
    id_plan?: true
    id_escuela?: true
  }

  export type PlanDeEstudioMinAggregateInputType = {
    id_plan?: true
    nombre?: true
    descripcion?: true
    fecha_inicio?: true
    fecha_fin?: true
    id_escuela?: true
  }

  export type PlanDeEstudioMaxAggregateInputType = {
    id_plan?: true
    nombre?: true
    descripcion?: true
    fecha_inicio?: true
    fecha_fin?: true
    id_escuela?: true
  }

  export type PlanDeEstudioCountAggregateInputType = {
    id_plan?: true
    nombre?: true
    descripcion?: true
    fecha_inicio?: true
    fecha_fin?: true
    id_escuela?: true
    _all?: true
  }

  export type PlanDeEstudioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanDeEstudio to aggregate.
     */
    where?: PlanDeEstudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanDeEstudios to fetch.
     */
    orderBy?: PlanDeEstudioOrderByWithRelationInput | PlanDeEstudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanDeEstudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanDeEstudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanDeEstudios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanDeEstudios
    **/
    _count?: true | PlanDeEstudioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanDeEstudioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanDeEstudioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanDeEstudioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanDeEstudioMaxAggregateInputType
  }

  export type GetPlanDeEstudioAggregateType<T extends PlanDeEstudioAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanDeEstudio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanDeEstudio[P]>
      : GetScalarType<T[P], AggregatePlanDeEstudio[P]>
  }




  export type PlanDeEstudioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanDeEstudioWhereInput
    orderBy?: PlanDeEstudioOrderByWithAggregationInput | PlanDeEstudioOrderByWithAggregationInput[]
    by: PlanDeEstudioScalarFieldEnum[] | PlanDeEstudioScalarFieldEnum
    having?: PlanDeEstudioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanDeEstudioCountAggregateInputType | true
    _avg?: PlanDeEstudioAvgAggregateInputType
    _sum?: PlanDeEstudioSumAggregateInputType
    _min?: PlanDeEstudioMinAggregateInputType
    _max?: PlanDeEstudioMaxAggregateInputType
  }

  export type PlanDeEstudioGroupByOutputType = {
    id_plan: number
    nombre: string
    descripcion: string | null
    fecha_inicio: Date
    fecha_fin: Date | null
    id_escuela: number
    _count: PlanDeEstudioCountAggregateOutputType | null
    _avg: PlanDeEstudioAvgAggregateOutputType | null
    _sum: PlanDeEstudioSumAggregateOutputType | null
    _min: PlanDeEstudioMinAggregateOutputType | null
    _max: PlanDeEstudioMaxAggregateOutputType | null
  }

  type GetPlanDeEstudioGroupByPayload<T extends PlanDeEstudioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanDeEstudioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanDeEstudioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanDeEstudioGroupByOutputType[P]>
            : GetScalarType<T[P], PlanDeEstudioGroupByOutputType[P]>
        }
      >
    >


  export type PlanDeEstudioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_plan?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    id_escuela?: boolean
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
    ciclos?: boolean | PlanDeEstudio$ciclosArgs<ExtArgs>
    generaciones?: boolean | PlanDeEstudio$generacionesArgs<ExtArgs>
    planDeptos?: boolean | PlanDeEstudio$planDeptosArgs<ExtArgs>
    grupos?: boolean | PlanDeEstudio$gruposArgs<ExtArgs>
    _count?: boolean | PlanDeEstudioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planDeEstudio"]>

  export type PlanDeEstudioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_plan?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    id_escuela?: boolean
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planDeEstudio"]>

  export type PlanDeEstudioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_plan?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    id_escuela?: boolean
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planDeEstudio"]>

  export type PlanDeEstudioSelectScalar = {
    id_plan?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    id_escuela?: boolean
  }

  export type PlanDeEstudioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_plan" | "nombre" | "descripcion" | "fecha_inicio" | "fecha_fin" | "id_escuela", ExtArgs["result"]["planDeEstudio"]>
  export type PlanDeEstudioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
    ciclos?: boolean | PlanDeEstudio$ciclosArgs<ExtArgs>
    generaciones?: boolean | PlanDeEstudio$generacionesArgs<ExtArgs>
    planDeptos?: boolean | PlanDeEstudio$planDeptosArgs<ExtArgs>
    grupos?: boolean | PlanDeEstudio$gruposArgs<ExtArgs>
    _count?: boolean | PlanDeEstudioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanDeEstudioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }
  export type PlanDeEstudioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }

  export type $PlanDeEstudioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanDeEstudio"
    objects: {
      escuela: Prisma.$EscuelaPayload<ExtArgs>
      ciclos: Prisma.$CicloPayload<ExtArgs>[]
      generaciones: Prisma.$GeneracionPayload<ExtArgs>[]
      planDeptos: Prisma.$PlanDepartamentoPayload<ExtArgs>[]
      grupos: Prisma.$GrupoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_plan: number
      nombre: string
      descripcion: string | null
      fecha_inicio: Date
      fecha_fin: Date | null
      id_escuela: number
    }, ExtArgs["result"]["planDeEstudio"]>
    composites: {}
  }

  type PlanDeEstudioGetPayload<S extends boolean | null | undefined | PlanDeEstudioDefaultArgs> = $Result.GetResult<Prisma.$PlanDeEstudioPayload, S>

  type PlanDeEstudioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanDeEstudioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanDeEstudioCountAggregateInputType | true
    }

  export interface PlanDeEstudioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanDeEstudio'], meta: { name: 'PlanDeEstudio' } }
    /**
     * Find zero or one PlanDeEstudio that matches the filter.
     * @param {PlanDeEstudioFindUniqueArgs} args - Arguments to find a PlanDeEstudio
     * @example
     * // Get one PlanDeEstudio
     * const planDeEstudio = await prisma.planDeEstudio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanDeEstudioFindUniqueArgs>(args: SelectSubset<T, PlanDeEstudioFindUniqueArgs<ExtArgs>>): Prisma__PlanDeEstudioClient<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanDeEstudio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanDeEstudioFindUniqueOrThrowArgs} args - Arguments to find a PlanDeEstudio
     * @example
     * // Get one PlanDeEstudio
     * const planDeEstudio = await prisma.planDeEstudio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanDeEstudioFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanDeEstudioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanDeEstudioClient<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanDeEstudio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDeEstudioFindFirstArgs} args - Arguments to find a PlanDeEstudio
     * @example
     * // Get one PlanDeEstudio
     * const planDeEstudio = await prisma.planDeEstudio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanDeEstudioFindFirstArgs>(args?: SelectSubset<T, PlanDeEstudioFindFirstArgs<ExtArgs>>): Prisma__PlanDeEstudioClient<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanDeEstudio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDeEstudioFindFirstOrThrowArgs} args - Arguments to find a PlanDeEstudio
     * @example
     * // Get one PlanDeEstudio
     * const planDeEstudio = await prisma.planDeEstudio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanDeEstudioFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanDeEstudioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanDeEstudioClient<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanDeEstudios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDeEstudioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanDeEstudios
     * const planDeEstudios = await prisma.planDeEstudio.findMany()
     * 
     * // Get first 10 PlanDeEstudios
     * const planDeEstudios = await prisma.planDeEstudio.findMany({ take: 10 })
     * 
     * // Only select the `id_plan`
     * const planDeEstudioWithId_planOnly = await prisma.planDeEstudio.findMany({ select: { id_plan: true } })
     * 
     */
    findMany<T extends PlanDeEstudioFindManyArgs>(args?: SelectSubset<T, PlanDeEstudioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanDeEstudio.
     * @param {PlanDeEstudioCreateArgs} args - Arguments to create a PlanDeEstudio.
     * @example
     * // Create one PlanDeEstudio
     * const PlanDeEstudio = await prisma.planDeEstudio.create({
     *   data: {
     *     // ... data to create a PlanDeEstudio
     *   }
     * })
     * 
     */
    create<T extends PlanDeEstudioCreateArgs>(args: SelectSubset<T, PlanDeEstudioCreateArgs<ExtArgs>>): Prisma__PlanDeEstudioClient<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanDeEstudios.
     * @param {PlanDeEstudioCreateManyArgs} args - Arguments to create many PlanDeEstudios.
     * @example
     * // Create many PlanDeEstudios
     * const planDeEstudio = await prisma.planDeEstudio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanDeEstudioCreateManyArgs>(args?: SelectSubset<T, PlanDeEstudioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanDeEstudios and returns the data saved in the database.
     * @param {PlanDeEstudioCreateManyAndReturnArgs} args - Arguments to create many PlanDeEstudios.
     * @example
     * // Create many PlanDeEstudios
     * const planDeEstudio = await prisma.planDeEstudio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanDeEstudios and only return the `id_plan`
     * const planDeEstudioWithId_planOnly = await prisma.planDeEstudio.createManyAndReturn({
     *   select: { id_plan: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanDeEstudioCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanDeEstudioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanDeEstudio.
     * @param {PlanDeEstudioDeleteArgs} args - Arguments to delete one PlanDeEstudio.
     * @example
     * // Delete one PlanDeEstudio
     * const PlanDeEstudio = await prisma.planDeEstudio.delete({
     *   where: {
     *     // ... filter to delete one PlanDeEstudio
     *   }
     * })
     * 
     */
    delete<T extends PlanDeEstudioDeleteArgs>(args: SelectSubset<T, PlanDeEstudioDeleteArgs<ExtArgs>>): Prisma__PlanDeEstudioClient<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanDeEstudio.
     * @param {PlanDeEstudioUpdateArgs} args - Arguments to update one PlanDeEstudio.
     * @example
     * // Update one PlanDeEstudio
     * const planDeEstudio = await prisma.planDeEstudio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanDeEstudioUpdateArgs>(args: SelectSubset<T, PlanDeEstudioUpdateArgs<ExtArgs>>): Prisma__PlanDeEstudioClient<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanDeEstudios.
     * @param {PlanDeEstudioDeleteManyArgs} args - Arguments to filter PlanDeEstudios to delete.
     * @example
     * // Delete a few PlanDeEstudios
     * const { count } = await prisma.planDeEstudio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeEstudioDeleteManyArgs>(args?: SelectSubset<T, PlanDeEstudioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanDeEstudios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDeEstudioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanDeEstudios
     * const planDeEstudio = await prisma.planDeEstudio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanDeEstudioUpdateManyArgs>(args: SelectSubset<T, PlanDeEstudioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanDeEstudios and returns the data updated in the database.
     * @param {PlanDeEstudioUpdateManyAndReturnArgs} args - Arguments to update many PlanDeEstudios.
     * @example
     * // Update many PlanDeEstudios
     * const planDeEstudio = await prisma.planDeEstudio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanDeEstudios and only return the `id_plan`
     * const planDeEstudioWithId_planOnly = await prisma.planDeEstudio.updateManyAndReturn({
     *   select: { id_plan: true },
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
    updateManyAndReturn<T extends PlanDeEstudioUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanDeEstudioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanDeEstudio.
     * @param {PlanDeEstudioUpsertArgs} args - Arguments to update or create a PlanDeEstudio.
     * @example
     * // Update or create a PlanDeEstudio
     * const planDeEstudio = await prisma.planDeEstudio.upsert({
     *   create: {
     *     // ... data to create a PlanDeEstudio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanDeEstudio we want to update
     *   }
     * })
     */
    upsert<T extends PlanDeEstudioUpsertArgs>(args: SelectSubset<T, PlanDeEstudioUpsertArgs<ExtArgs>>): Prisma__PlanDeEstudioClient<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanDeEstudios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDeEstudioCountArgs} args - Arguments to filter PlanDeEstudios to count.
     * @example
     * // Count the number of PlanDeEstudios
     * const count = await prisma.planDeEstudio.count({
     *   where: {
     *     // ... the filter for the PlanDeEstudios we want to count
     *   }
     * })
    **/
    count<T extends PlanDeEstudioCountArgs>(
      args?: Subset<T, PlanDeEstudioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanDeEstudioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanDeEstudio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDeEstudioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanDeEstudioAggregateArgs>(args: Subset<T, PlanDeEstudioAggregateArgs>): Prisma.PrismaPromise<GetPlanDeEstudioAggregateType<T>>

    /**
     * Group by PlanDeEstudio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDeEstudioGroupByArgs} args - Group by arguments.
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
      T extends PlanDeEstudioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanDeEstudioGroupByArgs['orderBy'] }
        : { orderBy?: PlanDeEstudioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanDeEstudioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanDeEstudioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanDeEstudio model
   */
  readonly fields: PlanDeEstudioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanDeEstudio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanDeEstudioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    escuela<T extends EscuelaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EscuelaDefaultArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ciclos<T extends PlanDeEstudio$ciclosArgs<ExtArgs> = {}>(args?: Subset<T, PlanDeEstudio$ciclosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generaciones<T extends PlanDeEstudio$generacionesArgs<ExtArgs> = {}>(args?: Subset<T, PlanDeEstudio$generacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneracionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    planDeptos<T extends PlanDeEstudio$planDeptosArgs<ExtArgs> = {}>(args?: Subset<T, PlanDeEstudio$planDeptosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanDepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grupos<T extends PlanDeEstudio$gruposArgs<ExtArgs> = {}>(args?: Subset<T, PlanDeEstudio$gruposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PlanDeEstudio model
   */
  interface PlanDeEstudioFieldRefs {
    readonly id_plan: FieldRef<"PlanDeEstudio", 'Int'>
    readonly nombre: FieldRef<"PlanDeEstudio", 'String'>
    readonly descripcion: FieldRef<"PlanDeEstudio", 'String'>
    readonly fecha_inicio: FieldRef<"PlanDeEstudio", 'DateTime'>
    readonly fecha_fin: FieldRef<"PlanDeEstudio", 'DateTime'>
    readonly id_escuela: FieldRef<"PlanDeEstudio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlanDeEstudio findUnique
   */
  export type PlanDeEstudioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDeEstudio
     */
    select?: PlanDeEstudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDeEstudio
     */
    omit?: PlanDeEstudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDeEstudioInclude<ExtArgs> | null
    /**
     * Filter, which PlanDeEstudio to fetch.
     */
    where: PlanDeEstudioWhereUniqueInput
  }

  /**
   * PlanDeEstudio findUniqueOrThrow
   */
  export type PlanDeEstudioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDeEstudio
     */
    select?: PlanDeEstudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDeEstudio
     */
    omit?: PlanDeEstudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDeEstudioInclude<ExtArgs> | null
    /**
     * Filter, which PlanDeEstudio to fetch.
     */
    where: PlanDeEstudioWhereUniqueInput
  }

  /**
   * PlanDeEstudio findFirst
   */
  export type PlanDeEstudioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDeEstudio
     */
    select?: PlanDeEstudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDeEstudio
     */
    omit?: PlanDeEstudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDeEstudioInclude<ExtArgs> | null
    /**
     * Filter, which PlanDeEstudio to fetch.
     */
    where?: PlanDeEstudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanDeEstudios to fetch.
     */
    orderBy?: PlanDeEstudioOrderByWithRelationInput | PlanDeEstudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanDeEstudios.
     */
    cursor?: PlanDeEstudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanDeEstudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanDeEstudios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanDeEstudios.
     */
    distinct?: PlanDeEstudioScalarFieldEnum | PlanDeEstudioScalarFieldEnum[]
  }

  /**
   * PlanDeEstudio findFirstOrThrow
   */
  export type PlanDeEstudioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDeEstudio
     */
    select?: PlanDeEstudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDeEstudio
     */
    omit?: PlanDeEstudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDeEstudioInclude<ExtArgs> | null
    /**
     * Filter, which PlanDeEstudio to fetch.
     */
    where?: PlanDeEstudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanDeEstudios to fetch.
     */
    orderBy?: PlanDeEstudioOrderByWithRelationInput | PlanDeEstudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanDeEstudios.
     */
    cursor?: PlanDeEstudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanDeEstudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanDeEstudios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanDeEstudios.
     */
    distinct?: PlanDeEstudioScalarFieldEnum | PlanDeEstudioScalarFieldEnum[]
  }

  /**
   * PlanDeEstudio findMany
   */
  export type PlanDeEstudioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDeEstudio
     */
    select?: PlanDeEstudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDeEstudio
     */
    omit?: PlanDeEstudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDeEstudioInclude<ExtArgs> | null
    /**
     * Filter, which PlanDeEstudios to fetch.
     */
    where?: PlanDeEstudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanDeEstudios to fetch.
     */
    orderBy?: PlanDeEstudioOrderByWithRelationInput | PlanDeEstudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanDeEstudios.
     */
    cursor?: PlanDeEstudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanDeEstudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanDeEstudios.
     */
    skip?: number
    distinct?: PlanDeEstudioScalarFieldEnum | PlanDeEstudioScalarFieldEnum[]
  }

  /**
   * PlanDeEstudio create
   */
  export type PlanDeEstudioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDeEstudio
     */
    select?: PlanDeEstudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDeEstudio
     */
    omit?: PlanDeEstudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDeEstudioInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanDeEstudio.
     */
    data: XOR<PlanDeEstudioCreateInput, PlanDeEstudioUncheckedCreateInput>
  }

  /**
   * PlanDeEstudio createMany
   */
  export type PlanDeEstudioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanDeEstudios.
     */
    data: PlanDeEstudioCreateManyInput | PlanDeEstudioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanDeEstudio createManyAndReturn
   */
  export type PlanDeEstudioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDeEstudio
     */
    select?: PlanDeEstudioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDeEstudio
     */
    omit?: PlanDeEstudioOmit<ExtArgs> | null
    /**
     * The data used to create many PlanDeEstudios.
     */
    data: PlanDeEstudioCreateManyInput | PlanDeEstudioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDeEstudioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanDeEstudio update
   */
  export type PlanDeEstudioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDeEstudio
     */
    select?: PlanDeEstudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDeEstudio
     */
    omit?: PlanDeEstudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDeEstudioInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanDeEstudio.
     */
    data: XOR<PlanDeEstudioUpdateInput, PlanDeEstudioUncheckedUpdateInput>
    /**
     * Choose, which PlanDeEstudio to update.
     */
    where: PlanDeEstudioWhereUniqueInput
  }

  /**
   * PlanDeEstudio updateMany
   */
  export type PlanDeEstudioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanDeEstudios.
     */
    data: XOR<PlanDeEstudioUpdateManyMutationInput, PlanDeEstudioUncheckedUpdateManyInput>
    /**
     * Filter which PlanDeEstudios to update
     */
    where?: PlanDeEstudioWhereInput
    /**
     * Limit how many PlanDeEstudios to update.
     */
    limit?: number
  }

  /**
   * PlanDeEstudio updateManyAndReturn
   */
  export type PlanDeEstudioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDeEstudio
     */
    select?: PlanDeEstudioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDeEstudio
     */
    omit?: PlanDeEstudioOmit<ExtArgs> | null
    /**
     * The data used to update PlanDeEstudios.
     */
    data: XOR<PlanDeEstudioUpdateManyMutationInput, PlanDeEstudioUncheckedUpdateManyInput>
    /**
     * Filter which PlanDeEstudios to update
     */
    where?: PlanDeEstudioWhereInput
    /**
     * Limit how many PlanDeEstudios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDeEstudioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanDeEstudio upsert
   */
  export type PlanDeEstudioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDeEstudio
     */
    select?: PlanDeEstudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDeEstudio
     */
    omit?: PlanDeEstudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDeEstudioInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanDeEstudio to update in case it exists.
     */
    where: PlanDeEstudioWhereUniqueInput
    /**
     * In case the PlanDeEstudio found by the `where` argument doesn't exist, create a new PlanDeEstudio with this data.
     */
    create: XOR<PlanDeEstudioCreateInput, PlanDeEstudioUncheckedCreateInput>
    /**
     * In case the PlanDeEstudio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanDeEstudioUpdateInput, PlanDeEstudioUncheckedUpdateInput>
  }

  /**
   * PlanDeEstudio delete
   */
  export type PlanDeEstudioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDeEstudio
     */
    select?: PlanDeEstudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDeEstudio
     */
    omit?: PlanDeEstudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDeEstudioInclude<ExtArgs> | null
    /**
     * Filter which PlanDeEstudio to delete.
     */
    where: PlanDeEstudioWhereUniqueInput
  }

  /**
   * PlanDeEstudio deleteMany
   */
  export type PlanDeEstudioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanDeEstudios to delete
     */
    where?: PlanDeEstudioWhereInput
    /**
     * Limit how many PlanDeEstudios to delete.
     */
    limit?: number
  }

  /**
   * PlanDeEstudio.ciclos
   */
  export type PlanDeEstudio$ciclosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    where?: CicloWhereInput
    orderBy?: CicloOrderByWithRelationInput | CicloOrderByWithRelationInput[]
    cursor?: CicloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CicloScalarFieldEnum | CicloScalarFieldEnum[]
  }

  /**
   * PlanDeEstudio.generaciones
   */
  export type PlanDeEstudio$generacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generacion
     */
    select?: GeneracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generacion
     */
    omit?: GeneracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneracionInclude<ExtArgs> | null
    where?: GeneracionWhereInput
    orderBy?: GeneracionOrderByWithRelationInput | GeneracionOrderByWithRelationInput[]
    cursor?: GeneracionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneracionScalarFieldEnum | GeneracionScalarFieldEnum[]
  }

  /**
   * PlanDeEstudio.planDeptos
   */
  export type PlanDeEstudio$planDeptosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDepartamento
     */
    select?: PlanDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDepartamento
     */
    omit?: PlanDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDepartamentoInclude<ExtArgs> | null
    where?: PlanDepartamentoWhereInput
    orderBy?: PlanDepartamentoOrderByWithRelationInput | PlanDepartamentoOrderByWithRelationInput[]
    cursor?: PlanDepartamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanDepartamentoScalarFieldEnum | PlanDepartamentoScalarFieldEnum[]
  }

  /**
   * PlanDeEstudio.grupos
   */
  export type PlanDeEstudio$gruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    where?: GrupoWhereInput
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    cursor?: GrupoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrupoScalarFieldEnum | GrupoScalarFieldEnum[]
  }

  /**
   * PlanDeEstudio without action
   */
  export type PlanDeEstudioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDeEstudio
     */
    select?: PlanDeEstudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDeEstudio
     */
    omit?: PlanDeEstudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDeEstudioInclude<ExtArgs> | null
  }


  /**
   * Model Ciclo
   */

  export type AggregateCiclo = {
    _count: CicloCountAggregateOutputType | null
    _avg: CicloAvgAggregateOutputType | null
    _sum: CicloSumAggregateOutputType | null
    _min: CicloMinAggregateOutputType | null
    _max: CicloMaxAggregateOutputType | null
  }

  export type CicloAvgAggregateOutputType = {
    id_ciclo: number | null
    id_plan: number | null
  }

  export type CicloSumAggregateOutputType = {
    id_ciclo: number | null
    id_plan: number | null
  }

  export type CicloMinAggregateOutputType = {
    id_ciclo: number | null
    nombre: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    tipo: $Enums.TipoCiclo | null
    activo: boolean | null
    id_plan: number | null
  }

  export type CicloMaxAggregateOutputType = {
    id_ciclo: number | null
    nombre: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    tipo: $Enums.TipoCiclo | null
    activo: boolean | null
    id_plan: number | null
  }

  export type CicloCountAggregateOutputType = {
    id_ciclo: number
    nombre: number
    fecha_inicio: number
    fecha_fin: number
    tipo: number
    activo: number
    id_plan: number
    _all: number
  }


  export type CicloAvgAggregateInputType = {
    id_ciclo?: true
    id_plan?: true
  }

  export type CicloSumAggregateInputType = {
    id_ciclo?: true
    id_plan?: true
  }

  export type CicloMinAggregateInputType = {
    id_ciclo?: true
    nombre?: true
    fecha_inicio?: true
    fecha_fin?: true
    tipo?: true
    activo?: true
    id_plan?: true
  }

  export type CicloMaxAggregateInputType = {
    id_ciclo?: true
    nombre?: true
    fecha_inicio?: true
    fecha_fin?: true
    tipo?: true
    activo?: true
    id_plan?: true
  }

  export type CicloCountAggregateInputType = {
    id_ciclo?: true
    nombre?: true
    fecha_inicio?: true
    fecha_fin?: true
    tipo?: true
    activo?: true
    id_plan?: true
    _all?: true
  }

  export type CicloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciclo to aggregate.
     */
    where?: CicloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciclos to fetch.
     */
    orderBy?: CicloOrderByWithRelationInput | CicloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CicloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciclos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciclos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ciclos
    **/
    _count?: true | CicloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CicloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CicloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CicloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CicloMaxAggregateInputType
  }

  export type GetCicloAggregateType<T extends CicloAggregateArgs> = {
        [P in keyof T & keyof AggregateCiclo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCiclo[P]>
      : GetScalarType<T[P], AggregateCiclo[P]>
  }




  export type CicloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CicloWhereInput
    orderBy?: CicloOrderByWithAggregationInput | CicloOrderByWithAggregationInput[]
    by: CicloScalarFieldEnum[] | CicloScalarFieldEnum
    having?: CicloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CicloCountAggregateInputType | true
    _avg?: CicloAvgAggregateInputType
    _sum?: CicloSumAggregateInputType
    _min?: CicloMinAggregateInputType
    _max?: CicloMaxAggregateInputType
  }

  export type CicloGroupByOutputType = {
    id_ciclo: number
    nombre: string
    fecha_inicio: Date
    fecha_fin: Date
    tipo: $Enums.TipoCiclo
    activo: boolean
    id_plan: number
    _count: CicloCountAggregateOutputType | null
    _avg: CicloAvgAggregateOutputType | null
    _sum: CicloSumAggregateOutputType | null
    _min: CicloMinAggregateOutputType | null
    _max: CicloMaxAggregateOutputType | null
  }

  type GetCicloGroupByPayload<T extends CicloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CicloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CicloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CicloGroupByOutputType[P]>
            : GetScalarType<T[P], CicloGroupByOutputType[P]>
        }
      >
    >


  export type CicloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ciclo?: boolean
    nombre?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    tipo?: boolean
    activo?: boolean
    id_plan?: boolean
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    grupos?: boolean | Ciclo$gruposArgs<ExtArgs>
    actividades?: boolean | Ciclo$actividadesArgs<ExtArgs>
    alumnoActs?: boolean | Ciclo$alumnoActsArgs<ExtArgs>
    _count?: boolean | CicloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ciclo"]>

  export type CicloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ciclo?: boolean
    nombre?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    tipo?: boolean
    activo?: boolean
    id_plan?: boolean
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ciclo"]>

  export type CicloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ciclo?: boolean
    nombre?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    tipo?: boolean
    activo?: boolean
    id_plan?: boolean
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ciclo"]>

  export type CicloSelectScalar = {
    id_ciclo?: boolean
    nombre?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    tipo?: boolean
    activo?: boolean
    id_plan?: boolean
  }

  export type CicloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ciclo" | "nombre" | "fecha_inicio" | "fecha_fin" | "tipo" | "activo" | "id_plan", ExtArgs["result"]["ciclo"]>
  export type CicloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    grupos?: boolean | Ciclo$gruposArgs<ExtArgs>
    actividades?: boolean | Ciclo$actividadesArgs<ExtArgs>
    alumnoActs?: boolean | Ciclo$alumnoActsArgs<ExtArgs>
    _count?: boolean | CicloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CicloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
  }
  export type CicloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
  }

  export type $CicloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ciclo"
    objects: {
      plan: Prisma.$PlanDeEstudioPayload<ExtArgs>
      grupos: Prisma.$GrupoPayload<ExtArgs>[]
      actividades: Prisma.$ActividadPayload<ExtArgs>[]
      alumnoActs: Prisma.$AlumnoActividadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ciclo: number
      nombre: string
      fecha_inicio: Date
      fecha_fin: Date
      tipo: $Enums.TipoCiclo
      activo: boolean
      id_plan: number
    }, ExtArgs["result"]["ciclo"]>
    composites: {}
  }

  type CicloGetPayload<S extends boolean | null | undefined | CicloDefaultArgs> = $Result.GetResult<Prisma.$CicloPayload, S>

  type CicloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CicloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CicloCountAggregateInputType | true
    }

  export interface CicloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ciclo'], meta: { name: 'Ciclo' } }
    /**
     * Find zero or one Ciclo that matches the filter.
     * @param {CicloFindUniqueArgs} args - Arguments to find a Ciclo
     * @example
     * // Get one Ciclo
     * const ciclo = await prisma.ciclo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CicloFindUniqueArgs>(args: SelectSubset<T, CicloFindUniqueArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ciclo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CicloFindUniqueOrThrowArgs} args - Arguments to find a Ciclo
     * @example
     * // Get one Ciclo
     * const ciclo = await prisma.ciclo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CicloFindUniqueOrThrowArgs>(args: SelectSubset<T, CicloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciclo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloFindFirstArgs} args - Arguments to find a Ciclo
     * @example
     * // Get one Ciclo
     * const ciclo = await prisma.ciclo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CicloFindFirstArgs>(args?: SelectSubset<T, CicloFindFirstArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciclo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloFindFirstOrThrowArgs} args - Arguments to find a Ciclo
     * @example
     * // Get one Ciclo
     * const ciclo = await prisma.ciclo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CicloFindFirstOrThrowArgs>(args?: SelectSubset<T, CicloFindFirstOrThrowArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ciclos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ciclos
     * const ciclos = await prisma.ciclo.findMany()
     * 
     * // Get first 10 Ciclos
     * const ciclos = await prisma.ciclo.findMany({ take: 10 })
     * 
     * // Only select the `id_ciclo`
     * const cicloWithId_cicloOnly = await prisma.ciclo.findMany({ select: { id_ciclo: true } })
     * 
     */
    findMany<T extends CicloFindManyArgs>(args?: SelectSubset<T, CicloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ciclo.
     * @param {CicloCreateArgs} args - Arguments to create a Ciclo.
     * @example
     * // Create one Ciclo
     * const Ciclo = await prisma.ciclo.create({
     *   data: {
     *     // ... data to create a Ciclo
     *   }
     * })
     * 
     */
    create<T extends CicloCreateArgs>(args: SelectSubset<T, CicloCreateArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ciclos.
     * @param {CicloCreateManyArgs} args - Arguments to create many Ciclos.
     * @example
     * // Create many Ciclos
     * const ciclo = await prisma.ciclo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CicloCreateManyArgs>(args?: SelectSubset<T, CicloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ciclos and returns the data saved in the database.
     * @param {CicloCreateManyAndReturnArgs} args - Arguments to create many Ciclos.
     * @example
     * // Create many Ciclos
     * const ciclo = await prisma.ciclo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ciclos and only return the `id_ciclo`
     * const cicloWithId_cicloOnly = await prisma.ciclo.createManyAndReturn({
     *   select: { id_ciclo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CicloCreateManyAndReturnArgs>(args?: SelectSubset<T, CicloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ciclo.
     * @param {CicloDeleteArgs} args - Arguments to delete one Ciclo.
     * @example
     * // Delete one Ciclo
     * const Ciclo = await prisma.ciclo.delete({
     *   where: {
     *     // ... filter to delete one Ciclo
     *   }
     * })
     * 
     */
    delete<T extends CicloDeleteArgs>(args: SelectSubset<T, CicloDeleteArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ciclo.
     * @param {CicloUpdateArgs} args - Arguments to update one Ciclo.
     * @example
     * // Update one Ciclo
     * const ciclo = await prisma.ciclo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CicloUpdateArgs>(args: SelectSubset<T, CicloUpdateArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ciclos.
     * @param {CicloDeleteManyArgs} args - Arguments to filter Ciclos to delete.
     * @example
     * // Delete a few Ciclos
     * const { count } = await prisma.ciclo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CicloDeleteManyArgs>(args?: SelectSubset<T, CicloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciclos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ciclos
     * const ciclo = await prisma.ciclo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CicloUpdateManyArgs>(args: SelectSubset<T, CicloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciclos and returns the data updated in the database.
     * @param {CicloUpdateManyAndReturnArgs} args - Arguments to update many Ciclos.
     * @example
     * // Update many Ciclos
     * const ciclo = await prisma.ciclo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ciclos and only return the `id_ciclo`
     * const cicloWithId_cicloOnly = await prisma.ciclo.updateManyAndReturn({
     *   select: { id_ciclo: true },
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
    updateManyAndReturn<T extends CicloUpdateManyAndReturnArgs>(args: SelectSubset<T, CicloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ciclo.
     * @param {CicloUpsertArgs} args - Arguments to update or create a Ciclo.
     * @example
     * // Update or create a Ciclo
     * const ciclo = await prisma.ciclo.upsert({
     *   create: {
     *     // ... data to create a Ciclo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ciclo we want to update
     *   }
     * })
     */
    upsert<T extends CicloUpsertArgs>(args: SelectSubset<T, CicloUpsertArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ciclos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloCountArgs} args - Arguments to filter Ciclos to count.
     * @example
     * // Count the number of Ciclos
     * const count = await prisma.ciclo.count({
     *   where: {
     *     // ... the filter for the Ciclos we want to count
     *   }
     * })
    **/
    count<T extends CicloCountArgs>(
      args?: Subset<T, CicloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CicloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ciclo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CicloAggregateArgs>(args: Subset<T, CicloAggregateArgs>): Prisma.PrismaPromise<GetCicloAggregateType<T>>

    /**
     * Group by Ciclo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloGroupByArgs} args - Group by arguments.
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
      T extends CicloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CicloGroupByArgs['orderBy'] }
        : { orderBy?: CicloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CicloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCicloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ciclo model
   */
  readonly fields: CicloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ciclo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CicloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDeEstudioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDeEstudioDefaultArgs<ExtArgs>>): Prisma__PlanDeEstudioClient<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    grupos<T extends Ciclo$gruposArgs<ExtArgs> = {}>(args?: Subset<T, Ciclo$gruposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actividades<T extends Ciclo$actividadesArgs<ExtArgs> = {}>(args?: Subset<T, Ciclo$actividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alumnoActs<T extends Ciclo$alumnoActsArgs<ExtArgs> = {}>(args?: Subset<T, Ciclo$alumnoActsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoActividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ciclo model
   */
  interface CicloFieldRefs {
    readonly id_ciclo: FieldRef<"Ciclo", 'Int'>
    readonly nombre: FieldRef<"Ciclo", 'String'>
    readonly fecha_inicio: FieldRef<"Ciclo", 'DateTime'>
    readonly fecha_fin: FieldRef<"Ciclo", 'DateTime'>
    readonly tipo: FieldRef<"Ciclo", 'TipoCiclo'>
    readonly activo: FieldRef<"Ciclo", 'Boolean'>
    readonly id_plan: FieldRef<"Ciclo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ciclo findUnique
   */
  export type CicloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter, which Ciclo to fetch.
     */
    where: CicloWhereUniqueInput
  }

  /**
   * Ciclo findUniqueOrThrow
   */
  export type CicloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter, which Ciclo to fetch.
     */
    where: CicloWhereUniqueInput
  }

  /**
   * Ciclo findFirst
   */
  export type CicloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter, which Ciclo to fetch.
     */
    where?: CicloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciclos to fetch.
     */
    orderBy?: CicloOrderByWithRelationInput | CicloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciclos.
     */
    cursor?: CicloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciclos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciclos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciclos.
     */
    distinct?: CicloScalarFieldEnum | CicloScalarFieldEnum[]
  }

  /**
   * Ciclo findFirstOrThrow
   */
  export type CicloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter, which Ciclo to fetch.
     */
    where?: CicloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciclos to fetch.
     */
    orderBy?: CicloOrderByWithRelationInput | CicloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciclos.
     */
    cursor?: CicloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciclos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciclos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciclos.
     */
    distinct?: CicloScalarFieldEnum | CicloScalarFieldEnum[]
  }

  /**
   * Ciclo findMany
   */
  export type CicloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter, which Ciclos to fetch.
     */
    where?: CicloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciclos to fetch.
     */
    orderBy?: CicloOrderByWithRelationInput | CicloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ciclos.
     */
    cursor?: CicloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciclos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciclos.
     */
    skip?: number
    distinct?: CicloScalarFieldEnum | CicloScalarFieldEnum[]
  }

  /**
   * Ciclo create
   */
  export type CicloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * The data needed to create a Ciclo.
     */
    data: XOR<CicloCreateInput, CicloUncheckedCreateInput>
  }

  /**
   * Ciclo createMany
   */
  export type CicloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ciclos.
     */
    data: CicloCreateManyInput | CicloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ciclo createManyAndReturn
   */
  export type CicloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * The data used to create many Ciclos.
     */
    data: CicloCreateManyInput | CicloCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ciclo update
   */
  export type CicloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * The data needed to update a Ciclo.
     */
    data: XOR<CicloUpdateInput, CicloUncheckedUpdateInput>
    /**
     * Choose, which Ciclo to update.
     */
    where: CicloWhereUniqueInput
  }

  /**
   * Ciclo updateMany
   */
  export type CicloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ciclos.
     */
    data: XOR<CicloUpdateManyMutationInput, CicloUncheckedUpdateManyInput>
    /**
     * Filter which Ciclos to update
     */
    where?: CicloWhereInput
    /**
     * Limit how many Ciclos to update.
     */
    limit?: number
  }

  /**
   * Ciclo updateManyAndReturn
   */
  export type CicloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * The data used to update Ciclos.
     */
    data: XOR<CicloUpdateManyMutationInput, CicloUncheckedUpdateManyInput>
    /**
     * Filter which Ciclos to update
     */
    where?: CicloWhereInput
    /**
     * Limit how many Ciclos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ciclo upsert
   */
  export type CicloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * The filter to search for the Ciclo to update in case it exists.
     */
    where: CicloWhereUniqueInput
    /**
     * In case the Ciclo found by the `where` argument doesn't exist, create a new Ciclo with this data.
     */
    create: XOR<CicloCreateInput, CicloUncheckedCreateInput>
    /**
     * In case the Ciclo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CicloUpdateInput, CicloUncheckedUpdateInput>
  }

  /**
   * Ciclo delete
   */
  export type CicloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter which Ciclo to delete.
     */
    where: CicloWhereUniqueInput
  }

  /**
   * Ciclo deleteMany
   */
  export type CicloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciclos to delete
     */
    where?: CicloWhereInput
    /**
     * Limit how many Ciclos to delete.
     */
    limit?: number
  }

  /**
   * Ciclo.grupos
   */
  export type Ciclo$gruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    where?: GrupoWhereInput
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    cursor?: GrupoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrupoScalarFieldEnum | GrupoScalarFieldEnum[]
  }

  /**
   * Ciclo.actividades
   */
  export type Ciclo$actividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    where?: ActividadWhereInput
    orderBy?: ActividadOrderByWithRelationInput | ActividadOrderByWithRelationInput[]
    cursor?: ActividadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * Ciclo.alumnoActs
   */
  export type Ciclo$alumnoActsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadInclude<ExtArgs> | null
    where?: AlumnoActividadWhereInput
    orderBy?: AlumnoActividadOrderByWithRelationInput | AlumnoActividadOrderByWithRelationInput[]
    cursor?: AlumnoActividadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlumnoActividadScalarFieldEnum | AlumnoActividadScalarFieldEnum[]
  }

  /**
   * Ciclo without action
   */
  export type CicloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
  }


  /**
   * Model Generacion
   */

  export type AggregateGeneracion = {
    _count: GeneracionCountAggregateOutputType | null
    _avg: GeneracionAvgAggregateOutputType | null
    _sum: GeneracionSumAggregateOutputType | null
    _min: GeneracionMinAggregateOutputType | null
    _max: GeneracionMaxAggregateOutputType | null
  }

  export type GeneracionAvgAggregateOutputType = {
    id_generacion: number | null
    ano_inicio: number | null
    ano_fin: number | null
    id_plan: number | null
    id_escuela: number | null
  }

  export type GeneracionSumAggregateOutputType = {
    id_generacion: number | null
    ano_inicio: number | null
    ano_fin: number | null
    id_plan: number | null
    id_escuela: number | null
  }

  export type GeneracionMinAggregateOutputType = {
    id_generacion: number | null
    nombre: string | null
    ano_inicio: number | null
    ano_fin: number | null
    id_plan: number | null
    id_escuela: number | null
  }

  export type GeneracionMaxAggregateOutputType = {
    id_generacion: number | null
    nombre: string | null
    ano_inicio: number | null
    ano_fin: number | null
    id_plan: number | null
    id_escuela: number | null
  }

  export type GeneracionCountAggregateOutputType = {
    id_generacion: number
    nombre: number
    ano_inicio: number
    ano_fin: number
    id_plan: number
    id_escuela: number
    _all: number
  }


  export type GeneracionAvgAggregateInputType = {
    id_generacion?: true
    ano_inicio?: true
    ano_fin?: true
    id_plan?: true
    id_escuela?: true
  }

  export type GeneracionSumAggregateInputType = {
    id_generacion?: true
    ano_inicio?: true
    ano_fin?: true
    id_plan?: true
    id_escuela?: true
  }

  export type GeneracionMinAggregateInputType = {
    id_generacion?: true
    nombre?: true
    ano_inicio?: true
    ano_fin?: true
    id_plan?: true
    id_escuela?: true
  }

  export type GeneracionMaxAggregateInputType = {
    id_generacion?: true
    nombre?: true
    ano_inicio?: true
    ano_fin?: true
    id_plan?: true
    id_escuela?: true
  }

  export type GeneracionCountAggregateInputType = {
    id_generacion?: true
    nombre?: true
    ano_inicio?: true
    ano_fin?: true
    id_plan?: true
    id_escuela?: true
    _all?: true
  }

  export type GeneracionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generacion to aggregate.
     */
    where?: GeneracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generacions to fetch.
     */
    orderBy?: GeneracionOrderByWithRelationInput | GeneracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generacions
    **/
    _count?: true | GeneracionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneracionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneracionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneracionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneracionMaxAggregateInputType
  }

  export type GetGeneracionAggregateType<T extends GeneracionAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneracion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneracion[P]>
      : GetScalarType<T[P], AggregateGeneracion[P]>
  }




  export type GeneracionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneracionWhereInput
    orderBy?: GeneracionOrderByWithAggregationInput | GeneracionOrderByWithAggregationInput[]
    by: GeneracionScalarFieldEnum[] | GeneracionScalarFieldEnum
    having?: GeneracionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneracionCountAggregateInputType | true
    _avg?: GeneracionAvgAggregateInputType
    _sum?: GeneracionSumAggregateInputType
    _min?: GeneracionMinAggregateInputType
    _max?: GeneracionMaxAggregateInputType
  }

  export type GeneracionGroupByOutputType = {
    id_generacion: number
    nombre: string
    ano_inicio: number
    ano_fin: number
    id_plan: number
    id_escuela: number
    _count: GeneracionCountAggregateOutputType | null
    _avg: GeneracionAvgAggregateOutputType | null
    _sum: GeneracionSumAggregateOutputType | null
    _min: GeneracionMinAggregateOutputType | null
    _max: GeneracionMaxAggregateOutputType | null
  }

  type GetGeneracionGroupByPayload<T extends GeneracionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneracionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneracionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneracionGroupByOutputType[P]>
            : GetScalarType<T[P], GeneracionGroupByOutputType[P]>
        }
      >
    >


  export type GeneracionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_generacion?: boolean
    nombre?: boolean
    ano_inicio?: boolean
    ano_fin?: boolean
    id_plan?: boolean
    id_escuela?: boolean
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
    grupos?: boolean | Generacion$gruposArgs<ExtArgs>
    alumnos?: boolean | Generacion$alumnosArgs<ExtArgs>
    _count?: boolean | GeneracionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generacion"]>

  export type GeneracionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_generacion?: boolean
    nombre?: boolean
    ano_inicio?: boolean
    ano_fin?: boolean
    id_plan?: boolean
    id_escuela?: boolean
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generacion"]>

  export type GeneracionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_generacion?: boolean
    nombre?: boolean
    ano_inicio?: boolean
    ano_fin?: boolean
    id_plan?: boolean
    id_escuela?: boolean
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generacion"]>

  export type GeneracionSelectScalar = {
    id_generacion?: boolean
    nombre?: boolean
    ano_inicio?: boolean
    ano_fin?: boolean
    id_plan?: boolean
    id_escuela?: boolean
  }

  export type GeneracionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_generacion" | "nombre" | "ano_inicio" | "ano_fin" | "id_plan" | "id_escuela", ExtArgs["result"]["generacion"]>
  export type GeneracionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
    grupos?: boolean | Generacion$gruposArgs<ExtArgs>
    alumnos?: boolean | Generacion$alumnosArgs<ExtArgs>
    _count?: boolean | GeneracionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GeneracionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }
  export type GeneracionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }

  export type $GeneracionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Generacion"
    objects: {
      plan: Prisma.$PlanDeEstudioPayload<ExtArgs>
      escuela: Prisma.$EscuelaPayload<ExtArgs>
      grupos: Prisma.$GrupoPayload<ExtArgs>[]
      alumnos: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_generacion: number
      nombre: string
      ano_inicio: number
      ano_fin: number
      id_plan: number
      id_escuela: number
    }, ExtArgs["result"]["generacion"]>
    composites: {}
  }

  type GeneracionGetPayload<S extends boolean | null | undefined | GeneracionDefaultArgs> = $Result.GetResult<Prisma.$GeneracionPayload, S>

  type GeneracionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneracionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneracionCountAggregateInputType | true
    }

  export interface GeneracionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Generacion'], meta: { name: 'Generacion' } }
    /**
     * Find zero or one Generacion that matches the filter.
     * @param {GeneracionFindUniqueArgs} args - Arguments to find a Generacion
     * @example
     * // Get one Generacion
     * const generacion = await prisma.generacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneracionFindUniqueArgs>(args: SelectSubset<T, GeneracionFindUniqueArgs<ExtArgs>>): Prisma__GeneracionClient<$Result.GetResult<Prisma.$GeneracionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Generacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneracionFindUniqueOrThrowArgs} args - Arguments to find a Generacion
     * @example
     * // Get one Generacion
     * const generacion = await prisma.generacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneracionFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneracionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneracionClient<$Result.GetResult<Prisma.$GeneracionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneracionFindFirstArgs} args - Arguments to find a Generacion
     * @example
     * // Get one Generacion
     * const generacion = await prisma.generacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneracionFindFirstArgs>(args?: SelectSubset<T, GeneracionFindFirstArgs<ExtArgs>>): Prisma__GeneracionClient<$Result.GetResult<Prisma.$GeneracionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneracionFindFirstOrThrowArgs} args - Arguments to find a Generacion
     * @example
     * // Get one Generacion
     * const generacion = await prisma.generacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneracionFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneracionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneracionClient<$Result.GetResult<Prisma.$GeneracionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneracionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generacions
     * const generacions = await prisma.generacion.findMany()
     * 
     * // Get first 10 Generacions
     * const generacions = await prisma.generacion.findMany({ take: 10 })
     * 
     * // Only select the `id_generacion`
     * const generacionWithId_generacionOnly = await prisma.generacion.findMany({ select: { id_generacion: true } })
     * 
     */
    findMany<T extends GeneracionFindManyArgs>(args?: SelectSubset<T, GeneracionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneracionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Generacion.
     * @param {GeneracionCreateArgs} args - Arguments to create a Generacion.
     * @example
     * // Create one Generacion
     * const Generacion = await prisma.generacion.create({
     *   data: {
     *     // ... data to create a Generacion
     *   }
     * })
     * 
     */
    create<T extends GeneracionCreateArgs>(args: SelectSubset<T, GeneracionCreateArgs<ExtArgs>>): Prisma__GeneracionClient<$Result.GetResult<Prisma.$GeneracionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generacions.
     * @param {GeneracionCreateManyArgs} args - Arguments to create many Generacions.
     * @example
     * // Create many Generacions
     * const generacion = await prisma.generacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneracionCreateManyArgs>(args?: SelectSubset<T, GeneracionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Generacions and returns the data saved in the database.
     * @param {GeneracionCreateManyAndReturnArgs} args - Arguments to create many Generacions.
     * @example
     * // Create many Generacions
     * const generacion = await prisma.generacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Generacions and only return the `id_generacion`
     * const generacionWithId_generacionOnly = await prisma.generacion.createManyAndReturn({
     *   select: { id_generacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneracionCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneracionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneracionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Generacion.
     * @param {GeneracionDeleteArgs} args - Arguments to delete one Generacion.
     * @example
     * // Delete one Generacion
     * const Generacion = await prisma.generacion.delete({
     *   where: {
     *     // ... filter to delete one Generacion
     *   }
     * })
     * 
     */
    delete<T extends GeneracionDeleteArgs>(args: SelectSubset<T, GeneracionDeleteArgs<ExtArgs>>): Prisma__GeneracionClient<$Result.GetResult<Prisma.$GeneracionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Generacion.
     * @param {GeneracionUpdateArgs} args - Arguments to update one Generacion.
     * @example
     * // Update one Generacion
     * const generacion = await prisma.generacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneracionUpdateArgs>(args: SelectSubset<T, GeneracionUpdateArgs<ExtArgs>>): Prisma__GeneracionClient<$Result.GetResult<Prisma.$GeneracionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generacions.
     * @param {GeneracionDeleteManyArgs} args - Arguments to filter Generacions to delete.
     * @example
     * // Delete a few Generacions
     * const { count } = await prisma.generacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneracionDeleteManyArgs>(args?: SelectSubset<T, GeneracionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneracionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generacions
     * const generacion = await prisma.generacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneracionUpdateManyArgs>(args: SelectSubset<T, GeneracionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generacions and returns the data updated in the database.
     * @param {GeneracionUpdateManyAndReturnArgs} args - Arguments to update many Generacions.
     * @example
     * // Update many Generacions
     * const generacion = await prisma.generacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Generacions and only return the `id_generacion`
     * const generacionWithId_generacionOnly = await prisma.generacion.updateManyAndReturn({
     *   select: { id_generacion: true },
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
    updateManyAndReturn<T extends GeneracionUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneracionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneracionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Generacion.
     * @param {GeneracionUpsertArgs} args - Arguments to update or create a Generacion.
     * @example
     * // Update or create a Generacion
     * const generacion = await prisma.generacion.upsert({
     *   create: {
     *     // ... data to create a Generacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Generacion we want to update
     *   }
     * })
     */
    upsert<T extends GeneracionUpsertArgs>(args: SelectSubset<T, GeneracionUpsertArgs<ExtArgs>>): Prisma__GeneracionClient<$Result.GetResult<Prisma.$GeneracionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneracionCountArgs} args - Arguments to filter Generacions to count.
     * @example
     * // Count the number of Generacions
     * const count = await prisma.generacion.count({
     *   where: {
     *     // ... the filter for the Generacions we want to count
     *   }
     * })
    **/
    count<T extends GeneracionCountArgs>(
      args?: Subset<T, GeneracionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneracionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Generacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneracionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneracionAggregateArgs>(args: Subset<T, GeneracionAggregateArgs>): Prisma.PrismaPromise<GetGeneracionAggregateType<T>>

    /**
     * Group by Generacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneracionGroupByArgs} args - Group by arguments.
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
      T extends GeneracionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneracionGroupByArgs['orderBy'] }
        : { orderBy?: GeneracionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneracionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneracionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Generacion model
   */
  readonly fields: GeneracionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Generacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneracionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDeEstudioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDeEstudioDefaultArgs<ExtArgs>>): Prisma__PlanDeEstudioClient<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    escuela<T extends EscuelaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EscuelaDefaultArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    grupos<T extends Generacion$gruposArgs<ExtArgs> = {}>(args?: Subset<T, Generacion$gruposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alumnos<T extends Generacion$alumnosArgs<ExtArgs> = {}>(args?: Subset<T, Generacion$alumnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Generacion model
   */
  interface GeneracionFieldRefs {
    readonly id_generacion: FieldRef<"Generacion", 'Int'>
    readonly nombre: FieldRef<"Generacion", 'String'>
    readonly ano_inicio: FieldRef<"Generacion", 'Int'>
    readonly ano_fin: FieldRef<"Generacion", 'Int'>
    readonly id_plan: FieldRef<"Generacion", 'Int'>
    readonly id_escuela: FieldRef<"Generacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Generacion findUnique
   */
  export type GeneracionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generacion
     */
    select?: GeneracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generacion
     */
    omit?: GeneracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneracionInclude<ExtArgs> | null
    /**
     * Filter, which Generacion to fetch.
     */
    where: GeneracionWhereUniqueInput
  }

  /**
   * Generacion findUniqueOrThrow
   */
  export type GeneracionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generacion
     */
    select?: GeneracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generacion
     */
    omit?: GeneracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneracionInclude<ExtArgs> | null
    /**
     * Filter, which Generacion to fetch.
     */
    where: GeneracionWhereUniqueInput
  }

  /**
   * Generacion findFirst
   */
  export type GeneracionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generacion
     */
    select?: GeneracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generacion
     */
    omit?: GeneracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneracionInclude<ExtArgs> | null
    /**
     * Filter, which Generacion to fetch.
     */
    where?: GeneracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generacions to fetch.
     */
    orderBy?: GeneracionOrderByWithRelationInput | GeneracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generacions.
     */
    cursor?: GeneracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generacions.
     */
    distinct?: GeneracionScalarFieldEnum | GeneracionScalarFieldEnum[]
  }

  /**
   * Generacion findFirstOrThrow
   */
  export type GeneracionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generacion
     */
    select?: GeneracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generacion
     */
    omit?: GeneracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneracionInclude<ExtArgs> | null
    /**
     * Filter, which Generacion to fetch.
     */
    where?: GeneracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generacions to fetch.
     */
    orderBy?: GeneracionOrderByWithRelationInput | GeneracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generacions.
     */
    cursor?: GeneracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generacions.
     */
    distinct?: GeneracionScalarFieldEnum | GeneracionScalarFieldEnum[]
  }

  /**
   * Generacion findMany
   */
  export type GeneracionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generacion
     */
    select?: GeneracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generacion
     */
    omit?: GeneracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneracionInclude<ExtArgs> | null
    /**
     * Filter, which Generacions to fetch.
     */
    where?: GeneracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generacions to fetch.
     */
    orderBy?: GeneracionOrderByWithRelationInput | GeneracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generacions.
     */
    cursor?: GeneracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generacions.
     */
    skip?: number
    distinct?: GeneracionScalarFieldEnum | GeneracionScalarFieldEnum[]
  }

  /**
   * Generacion create
   */
  export type GeneracionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generacion
     */
    select?: GeneracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generacion
     */
    omit?: GeneracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneracionInclude<ExtArgs> | null
    /**
     * The data needed to create a Generacion.
     */
    data: XOR<GeneracionCreateInput, GeneracionUncheckedCreateInput>
  }

  /**
   * Generacion createMany
   */
  export type GeneracionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generacions.
     */
    data: GeneracionCreateManyInput | GeneracionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Generacion createManyAndReturn
   */
  export type GeneracionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generacion
     */
    select?: GeneracionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generacion
     */
    omit?: GeneracionOmit<ExtArgs> | null
    /**
     * The data used to create many Generacions.
     */
    data: GeneracionCreateManyInput | GeneracionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneracionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Generacion update
   */
  export type GeneracionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generacion
     */
    select?: GeneracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generacion
     */
    omit?: GeneracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneracionInclude<ExtArgs> | null
    /**
     * The data needed to update a Generacion.
     */
    data: XOR<GeneracionUpdateInput, GeneracionUncheckedUpdateInput>
    /**
     * Choose, which Generacion to update.
     */
    where: GeneracionWhereUniqueInput
  }

  /**
   * Generacion updateMany
   */
  export type GeneracionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generacions.
     */
    data: XOR<GeneracionUpdateManyMutationInput, GeneracionUncheckedUpdateManyInput>
    /**
     * Filter which Generacions to update
     */
    where?: GeneracionWhereInput
    /**
     * Limit how many Generacions to update.
     */
    limit?: number
  }

  /**
   * Generacion updateManyAndReturn
   */
  export type GeneracionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generacion
     */
    select?: GeneracionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generacion
     */
    omit?: GeneracionOmit<ExtArgs> | null
    /**
     * The data used to update Generacions.
     */
    data: XOR<GeneracionUpdateManyMutationInput, GeneracionUncheckedUpdateManyInput>
    /**
     * Filter which Generacions to update
     */
    where?: GeneracionWhereInput
    /**
     * Limit how many Generacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneracionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Generacion upsert
   */
  export type GeneracionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generacion
     */
    select?: GeneracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generacion
     */
    omit?: GeneracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneracionInclude<ExtArgs> | null
    /**
     * The filter to search for the Generacion to update in case it exists.
     */
    where: GeneracionWhereUniqueInput
    /**
     * In case the Generacion found by the `where` argument doesn't exist, create a new Generacion with this data.
     */
    create: XOR<GeneracionCreateInput, GeneracionUncheckedCreateInput>
    /**
     * In case the Generacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneracionUpdateInput, GeneracionUncheckedUpdateInput>
  }

  /**
   * Generacion delete
   */
  export type GeneracionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generacion
     */
    select?: GeneracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generacion
     */
    omit?: GeneracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneracionInclude<ExtArgs> | null
    /**
     * Filter which Generacion to delete.
     */
    where: GeneracionWhereUniqueInput
  }

  /**
   * Generacion deleteMany
   */
  export type GeneracionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generacions to delete
     */
    where?: GeneracionWhereInput
    /**
     * Limit how many Generacions to delete.
     */
    limit?: number
  }

  /**
   * Generacion.grupos
   */
  export type Generacion$gruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    where?: GrupoWhereInput
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    cursor?: GrupoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrupoScalarFieldEnum | GrupoScalarFieldEnum[]
  }

  /**
   * Generacion.alumnos
   */
  export type Generacion$alumnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Generacion without action
   */
  export type GeneracionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generacion
     */
    select?: GeneracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generacion
     */
    omit?: GeneracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneracionInclude<ExtArgs> | null
  }


  /**
   * Model Departamento
   */

  export type AggregateDepartamento = {
    _count: DepartamentoCountAggregateOutputType | null
    _avg: DepartamentoAvgAggregateOutputType | null
    _sum: DepartamentoSumAggregateOutputType | null
    _min: DepartamentoMinAggregateOutputType | null
    _max: DepartamentoMaxAggregateOutputType | null
  }

  export type DepartamentoAvgAggregateOutputType = {
    id_departamento: number | null
    id_escuela: number | null
  }

  export type DepartamentoSumAggregateOutputType = {
    id_departamento: number | null
    id_escuela: number | null
  }

  export type DepartamentoMinAggregateOutputType = {
    id_departamento: number | null
    nombre: string | null
    descripcion: string | null
    id_escuela: number | null
  }

  export type DepartamentoMaxAggregateOutputType = {
    id_departamento: number | null
    nombre: string | null
    descripcion: string | null
    id_escuela: number | null
  }

  export type DepartamentoCountAggregateOutputType = {
    id_departamento: number
    nombre: number
    descripcion: number
    id_escuela: number
    _all: number
  }


  export type DepartamentoAvgAggregateInputType = {
    id_departamento?: true
    id_escuela?: true
  }

  export type DepartamentoSumAggregateInputType = {
    id_departamento?: true
    id_escuela?: true
  }

  export type DepartamentoMinAggregateInputType = {
    id_departamento?: true
    nombre?: true
    descripcion?: true
    id_escuela?: true
  }

  export type DepartamentoMaxAggregateInputType = {
    id_departamento?: true
    nombre?: true
    descripcion?: true
    id_escuela?: true
  }

  export type DepartamentoCountAggregateInputType = {
    id_departamento?: true
    nombre?: true
    descripcion?: true
    id_escuela?: true
    _all?: true
  }

  export type DepartamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departamento to aggregate.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departamentos
    **/
    _count?: true | DepartamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartamentoMaxAggregateInputType
  }

  export type GetDepartamentoAggregateType<T extends DepartamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartamento[P]>
      : GetScalarType<T[P], AggregateDepartamento[P]>
  }




  export type DepartamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartamentoWhereInput
    orderBy?: DepartamentoOrderByWithAggregationInput | DepartamentoOrderByWithAggregationInput[]
    by: DepartamentoScalarFieldEnum[] | DepartamentoScalarFieldEnum
    having?: DepartamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartamentoCountAggregateInputType | true
    _avg?: DepartamentoAvgAggregateInputType
    _sum?: DepartamentoSumAggregateInputType
    _min?: DepartamentoMinAggregateInputType
    _max?: DepartamentoMaxAggregateInputType
  }

  export type DepartamentoGroupByOutputType = {
    id_departamento: number
    nombre: string
    descripcion: string | null
    id_escuela: number
    _count: DepartamentoCountAggregateOutputType | null
    _avg: DepartamentoAvgAggregateOutputType | null
    _sum: DepartamentoSumAggregateOutputType | null
    _min: DepartamentoMinAggregateOutputType | null
    _max: DepartamentoMaxAggregateOutputType | null
  }

  type GetDepartamentoGroupByPayload<T extends DepartamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartamentoGroupByOutputType[P]>
            : GetScalarType<T[P], DepartamentoGroupByOutputType[P]>
        }
      >
    >


  export type DepartamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_departamento?: boolean
    nombre?: boolean
    descripcion?: boolean
    id_escuela?: boolean
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
    actividades?: boolean | Departamento$actividadesArgs<ExtArgs>
    planDeptos?: boolean | Departamento$planDeptosArgs<ExtArgs>
    _count?: boolean | DepartamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departamento"]>

  export type DepartamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_departamento?: boolean
    nombre?: boolean
    descripcion?: boolean
    id_escuela?: boolean
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departamento"]>

  export type DepartamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_departamento?: boolean
    nombre?: boolean
    descripcion?: boolean
    id_escuela?: boolean
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departamento"]>

  export type DepartamentoSelectScalar = {
    id_departamento?: boolean
    nombre?: boolean
    descripcion?: boolean
    id_escuela?: boolean
  }

  export type DepartamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_departamento" | "nombre" | "descripcion" | "id_escuela", ExtArgs["result"]["departamento"]>
  export type DepartamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
    actividades?: boolean | Departamento$actividadesArgs<ExtArgs>
    planDeptos?: boolean | Departamento$planDeptosArgs<ExtArgs>
    _count?: boolean | DepartamentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }
  export type DepartamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }

  export type $DepartamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departamento"
    objects: {
      escuela: Prisma.$EscuelaPayload<ExtArgs>
      actividades: Prisma.$ActividadPayload<ExtArgs>[]
      planDeptos: Prisma.$PlanDepartamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_departamento: number
      nombre: string
      descripcion: string | null
      id_escuela: number
    }, ExtArgs["result"]["departamento"]>
    composites: {}
  }

  type DepartamentoGetPayload<S extends boolean | null | undefined | DepartamentoDefaultArgs> = $Result.GetResult<Prisma.$DepartamentoPayload, S>

  type DepartamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartamentoCountAggregateInputType | true
    }

  export interface DepartamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departamento'], meta: { name: 'Departamento' } }
    /**
     * Find zero or one Departamento that matches the filter.
     * @param {DepartamentoFindUniqueArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartamentoFindUniqueArgs>(args: SelectSubset<T, DepartamentoFindUniqueArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartamentoFindUniqueOrThrowArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoFindFirstArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartamentoFindFirstArgs>(args?: SelectSubset<T, DepartamentoFindFirstArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoFindFirstOrThrowArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departamentos
     * const departamentos = await prisma.departamento.findMany()
     * 
     * // Get first 10 Departamentos
     * const departamentos = await prisma.departamento.findMany({ take: 10 })
     * 
     * // Only select the `id_departamento`
     * const departamentoWithId_departamentoOnly = await prisma.departamento.findMany({ select: { id_departamento: true } })
     * 
     */
    findMany<T extends DepartamentoFindManyArgs>(args?: SelectSubset<T, DepartamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departamento.
     * @param {DepartamentoCreateArgs} args - Arguments to create a Departamento.
     * @example
     * // Create one Departamento
     * const Departamento = await prisma.departamento.create({
     *   data: {
     *     // ... data to create a Departamento
     *   }
     * })
     * 
     */
    create<T extends DepartamentoCreateArgs>(args: SelectSubset<T, DepartamentoCreateArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departamentos.
     * @param {DepartamentoCreateManyArgs} args - Arguments to create many Departamentos.
     * @example
     * // Create many Departamentos
     * const departamento = await prisma.departamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartamentoCreateManyArgs>(args?: SelectSubset<T, DepartamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departamentos and returns the data saved in the database.
     * @param {DepartamentoCreateManyAndReturnArgs} args - Arguments to create many Departamentos.
     * @example
     * // Create many Departamentos
     * const departamento = await prisma.departamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departamentos and only return the `id_departamento`
     * const departamentoWithId_departamentoOnly = await prisma.departamento.createManyAndReturn({
     *   select: { id_departamento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Departamento.
     * @param {DepartamentoDeleteArgs} args - Arguments to delete one Departamento.
     * @example
     * // Delete one Departamento
     * const Departamento = await prisma.departamento.delete({
     *   where: {
     *     // ... filter to delete one Departamento
     *   }
     * })
     * 
     */
    delete<T extends DepartamentoDeleteArgs>(args: SelectSubset<T, DepartamentoDeleteArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departamento.
     * @param {DepartamentoUpdateArgs} args - Arguments to update one Departamento.
     * @example
     * // Update one Departamento
     * const departamento = await prisma.departamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartamentoUpdateArgs>(args: SelectSubset<T, DepartamentoUpdateArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departamentos.
     * @param {DepartamentoDeleteManyArgs} args - Arguments to filter Departamentos to delete.
     * @example
     * // Delete a few Departamentos
     * const { count } = await prisma.departamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartamentoDeleteManyArgs>(args?: SelectSubset<T, DepartamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departamentos
     * const departamento = await prisma.departamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartamentoUpdateManyArgs>(args: SelectSubset<T, DepartamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departamentos and returns the data updated in the database.
     * @param {DepartamentoUpdateManyAndReturnArgs} args - Arguments to update many Departamentos.
     * @example
     * // Update many Departamentos
     * const departamento = await prisma.departamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departamentos and only return the `id_departamento`
     * const departamentoWithId_departamentoOnly = await prisma.departamento.updateManyAndReturn({
     *   select: { id_departamento: true },
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
    updateManyAndReturn<T extends DepartamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Departamento.
     * @param {DepartamentoUpsertArgs} args - Arguments to update or create a Departamento.
     * @example
     * // Update or create a Departamento
     * const departamento = await prisma.departamento.upsert({
     *   create: {
     *     // ... data to create a Departamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departamento we want to update
     *   }
     * })
     */
    upsert<T extends DepartamentoUpsertArgs>(args: SelectSubset<T, DepartamentoUpsertArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoCountArgs} args - Arguments to filter Departamentos to count.
     * @example
     * // Count the number of Departamentos
     * const count = await prisma.departamento.count({
     *   where: {
     *     // ... the filter for the Departamentos we want to count
     *   }
     * })
    **/
    count<T extends DepartamentoCountArgs>(
      args?: Subset<T, DepartamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartamentoAggregateArgs>(args: Subset<T, DepartamentoAggregateArgs>): Prisma.PrismaPromise<GetDepartamentoAggregateType<T>>

    /**
     * Group by Departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoGroupByArgs} args - Group by arguments.
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
      T extends DepartamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartamentoGroupByArgs['orderBy'] }
        : { orderBy?: DepartamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departamento model
   */
  readonly fields: DepartamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    escuela<T extends EscuelaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EscuelaDefaultArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actividades<T extends Departamento$actividadesArgs<ExtArgs> = {}>(args?: Subset<T, Departamento$actividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    planDeptos<T extends Departamento$planDeptosArgs<ExtArgs> = {}>(args?: Subset<T, Departamento$planDeptosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanDepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Departamento model
   */
  interface DepartamentoFieldRefs {
    readonly id_departamento: FieldRef<"Departamento", 'Int'>
    readonly nombre: FieldRef<"Departamento", 'String'>
    readonly descripcion: FieldRef<"Departamento", 'String'>
    readonly id_escuela: FieldRef<"Departamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Departamento findUnique
   */
  export type DepartamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento findUniqueOrThrow
   */
  export type DepartamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento findFirst
   */
  export type DepartamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departamentos.
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departamentos.
     */
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * Departamento findFirstOrThrow
   */
  export type DepartamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departamentos.
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departamentos.
     */
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * Departamento findMany
   */
  export type DepartamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamentos to fetch.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departamentos.
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * Departamento create
   */
  export type DepartamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Departamento.
     */
    data: XOR<DepartamentoCreateInput, DepartamentoUncheckedCreateInput>
  }

  /**
   * Departamento createMany
   */
  export type DepartamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departamentos.
     */
    data: DepartamentoCreateManyInput | DepartamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departamento createManyAndReturn
   */
  export type DepartamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Departamentos.
     */
    data: DepartamentoCreateManyInput | DepartamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Departamento update
   */
  export type DepartamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Departamento.
     */
    data: XOR<DepartamentoUpdateInput, DepartamentoUncheckedUpdateInput>
    /**
     * Choose, which Departamento to update.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento updateMany
   */
  export type DepartamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departamentos.
     */
    data: XOR<DepartamentoUpdateManyMutationInput, DepartamentoUncheckedUpdateManyInput>
    /**
     * Filter which Departamentos to update
     */
    where?: DepartamentoWhereInput
    /**
     * Limit how many Departamentos to update.
     */
    limit?: number
  }

  /**
   * Departamento updateManyAndReturn
   */
  export type DepartamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * The data used to update Departamentos.
     */
    data: XOR<DepartamentoUpdateManyMutationInput, DepartamentoUncheckedUpdateManyInput>
    /**
     * Filter which Departamentos to update
     */
    where?: DepartamentoWhereInput
    /**
     * Limit how many Departamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Departamento upsert
   */
  export type DepartamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Departamento to update in case it exists.
     */
    where: DepartamentoWhereUniqueInput
    /**
     * In case the Departamento found by the `where` argument doesn't exist, create a new Departamento with this data.
     */
    create: XOR<DepartamentoCreateInput, DepartamentoUncheckedCreateInput>
    /**
     * In case the Departamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartamentoUpdateInput, DepartamentoUncheckedUpdateInput>
  }

  /**
   * Departamento delete
   */
  export type DepartamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter which Departamento to delete.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento deleteMany
   */
  export type DepartamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departamentos to delete
     */
    where?: DepartamentoWhereInput
    /**
     * Limit how many Departamentos to delete.
     */
    limit?: number
  }

  /**
   * Departamento.actividades
   */
  export type Departamento$actividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    where?: ActividadWhereInput
    orderBy?: ActividadOrderByWithRelationInput | ActividadOrderByWithRelationInput[]
    cursor?: ActividadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * Departamento.planDeptos
   */
  export type Departamento$planDeptosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDepartamento
     */
    select?: PlanDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDepartamento
     */
    omit?: PlanDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDepartamentoInclude<ExtArgs> | null
    where?: PlanDepartamentoWhereInput
    orderBy?: PlanDepartamentoOrderByWithRelationInput | PlanDepartamentoOrderByWithRelationInput[]
    cursor?: PlanDepartamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanDepartamentoScalarFieldEnum | PlanDepartamentoScalarFieldEnum[]
  }

  /**
   * Departamento without action
   */
  export type DepartamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
    id_escuela: number | null
    id_grupo: number | null
    generacionId_generacion: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
    id_escuela: number | null
    id_grupo: number | null
    generacionId_generacion: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    num_cuenta: string | null
    nip: string | null
    nombre: string | null
    correo: string | null
    rol: $Enums.Rol | null
    id_escuela: number | null
    id_grupo: number | null
    activo: boolean | null
    generacionId_generacion: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    num_cuenta: string | null
    nip: string | null
    nombre: string | null
    correo: string | null
    rol: $Enums.Rol | null
    id_escuela: number | null
    id_grupo: number | null
    activo: boolean | null
    generacionId_generacion: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    num_cuenta: number
    nip: number
    nombre: number
    correo: number
    rol: number
    id_escuela: number
    id_grupo: number
    activo: number
    generacionId_generacion: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
    id_escuela?: true
    id_grupo?: true
    generacionId_generacion?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
    id_escuela?: true
    id_grupo?: true
    generacionId_generacion?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    num_cuenta?: true
    nip?: true
    nombre?: true
    correo?: true
    rol?: true
    id_escuela?: true
    id_grupo?: true
    activo?: true
    generacionId_generacion?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    num_cuenta?: true
    nip?: true
    nombre?: true
    correo?: true
    rol?: true
    id_escuela?: true
    id_grupo?: true
    activo?: true
    generacionId_generacion?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    num_cuenta?: true
    nip?: true
    nombre?: true
    correo?: true
    rol?: true
    id_escuela?: true
    id_grupo?: true
    activo?: true
    generacionId_generacion?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    num_cuenta: string
    nip: string
    nombre: string
    correo: string | null
    rol: $Enums.Rol
    id_escuela: number
    id_grupo: number | null
    activo: boolean
    generacionId_generacion: number | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    num_cuenta?: boolean
    nip?: boolean
    nombre?: boolean
    correo?: boolean
    rol?: boolean
    id_escuela?: boolean
    id_grupo?: boolean
    activo?: boolean
    generacionId_generacion?: boolean
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
    grupo?: boolean | Usuario$grupoArgs<ExtArgs>
    actividades_creadas?: boolean | Usuario$actividades_creadasArgs<ExtArgs>
    registros_act?: boolean | Usuario$registros_actArgs<ExtArgs>
    registros_puntos?: boolean | Usuario$registros_puntosArgs<ExtArgs>
    logs?: boolean | Usuario$logsArgs<ExtArgs>
    generacion?: boolean | Usuario$generacionArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    num_cuenta?: boolean
    nip?: boolean
    nombre?: boolean
    correo?: boolean
    rol?: boolean
    id_escuela?: boolean
    id_grupo?: boolean
    activo?: boolean
    generacionId_generacion?: boolean
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
    grupo?: boolean | Usuario$grupoArgs<ExtArgs>
    generacion?: boolean | Usuario$generacionArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    num_cuenta?: boolean
    nip?: boolean
    nombre?: boolean
    correo?: boolean
    rol?: boolean
    id_escuela?: boolean
    id_grupo?: boolean
    activo?: boolean
    generacionId_generacion?: boolean
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
    grupo?: boolean | Usuario$grupoArgs<ExtArgs>
    generacion?: boolean | Usuario$generacionArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    num_cuenta?: boolean
    nip?: boolean
    nombre?: boolean
    correo?: boolean
    rol?: boolean
    id_escuela?: boolean
    id_grupo?: boolean
    activo?: boolean
    generacionId_generacion?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "num_cuenta" | "nip" | "nombre" | "correo" | "rol" | "id_escuela" | "id_grupo" | "activo" | "generacionId_generacion", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
    grupo?: boolean | Usuario$grupoArgs<ExtArgs>
    actividades_creadas?: boolean | Usuario$actividades_creadasArgs<ExtArgs>
    registros_act?: boolean | Usuario$registros_actArgs<ExtArgs>
    registros_puntos?: boolean | Usuario$registros_puntosArgs<ExtArgs>
    logs?: boolean | Usuario$logsArgs<ExtArgs>
    generacion?: boolean | Usuario$generacionArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
    grupo?: boolean | Usuario$grupoArgs<ExtArgs>
    generacion?: boolean | Usuario$generacionArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
    grupo?: boolean | Usuario$grupoArgs<ExtArgs>
    generacion?: boolean | Usuario$generacionArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      escuela: Prisma.$EscuelaPayload<ExtArgs>
      grupo: Prisma.$GrupoPayload<ExtArgs> | null
      actividades_creadas: Prisma.$ActividadPayload<ExtArgs>[]
      registros_act: Prisma.$AlumnoActividadPayload<ExtArgs>[]
      registros_puntos: Prisma.$AlumnoActividadPayload<ExtArgs>[]
      logs: Prisma.$RegistroCambiosPayload<ExtArgs>[]
      generacion: Prisma.$GeneracionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      num_cuenta: string
      nip: string
      nombre: string
      correo: string | null
      rol: $Enums.Rol
      id_escuela: number
      id_grupo: number | null
      activo: boolean
      generacionId_generacion: number | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    escuela<T extends EscuelaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EscuelaDefaultArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    grupo<T extends Usuario$grupoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$grupoArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    actividades_creadas<T extends Usuario$actividades_creadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$actividades_creadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registros_act<T extends Usuario$registros_actArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$registros_actArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoActividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registros_puntos<T extends Usuario$registros_puntosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$registros_puntosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoActividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Usuario$logsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroCambiosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generacion<T extends Usuario$generacionArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$generacionArgs<ExtArgs>>): Prisma__GeneracionClient<$Result.GetResult<Prisma.$GeneracionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly num_cuenta: FieldRef<"Usuario", 'String'>
    readonly nip: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly id_escuela: FieldRef<"Usuario", 'Int'>
    readonly id_grupo: FieldRef<"Usuario", 'Int'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
    readonly generacionId_generacion: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.grupo
   */
  export type Usuario$grupoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    where?: GrupoWhereInput
  }

  /**
   * Usuario.actividades_creadas
   */
  export type Usuario$actividades_creadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    where?: ActividadWhereInput
    orderBy?: ActividadOrderByWithRelationInput | ActividadOrderByWithRelationInput[]
    cursor?: ActividadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * Usuario.registros_act
   */
  export type Usuario$registros_actArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadInclude<ExtArgs> | null
    where?: AlumnoActividadWhereInput
    orderBy?: AlumnoActividadOrderByWithRelationInput | AlumnoActividadOrderByWithRelationInput[]
    cursor?: AlumnoActividadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlumnoActividadScalarFieldEnum | AlumnoActividadScalarFieldEnum[]
  }

  /**
   * Usuario.registros_puntos
   */
  export type Usuario$registros_puntosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadInclude<ExtArgs> | null
    where?: AlumnoActividadWhereInput
    orderBy?: AlumnoActividadOrderByWithRelationInput | AlumnoActividadOrderByWithRelationInput[]
    cursor?: AlumnoActividadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlumnoActividadScalarFieldEnum | AlumnoActividadScalarFieldEnum[]
  }

  /**
   * Usuario.logs
   */
  export type Usuario$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCambios
     */
    select?: RegistroCambiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCambios
     */
    omit?: RegistroCambiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCambiosInclude<ExtArgs> | null
    where?: RegistroCambiosWhereInput
    orderBy?: RegistroCambiosOrderByWithRelationInput | RegistroCambiosOrderByWithRelationInput[]
    cursor?: RegistroCambiosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroCambiosScalarFieldEnum | RegistroCambiosScalarFieldEnum[]
  }

  /**
   * Usuario.generacion
   */
  export type Usuario$generacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generacion
     */
    select?: GeneracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generacion
     */
    omit?: GeneracionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneracionInclude<ExtArgs> | null
    where?: GeneracionWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Grupo
   */

  export type AggregateGrupo = {
    _count: GrupoCountAggregateOutputType | null
    _avg: GrupoAvgAggregateOutputType | null
    _sum: GrupoSumAggregateOutputType | null
    _min: GrupoMinAggregateOutputType | null
    _max: GrupoMaxAggregateOutputType | null
  }

  export type GrupoAvgAggregateOutputType = {
    id_grupo: number | null
    nivel: number | null
    id_generacion: number | null
    id_ciclo: number | null
    id_plan: number | null
    id_escuela: number | null
  }

  export type GrupoSumAggregateOutputType = {
    id_grupo: number | null
    nivel: number | null
    id_generacion: number | null
    id_ciclo: number | null
    id_plan: number | null
    id_escuela: number | null
  }

  export type GrupoMinAggregateOutputType = {
    id_grupo: number | null
    nombre: string | null
    nivel: number | null
    turno: $Enums.Turno | null
    id_generacion: number | null
    id_ciclo: number | null
    id_plan: number | null
    id_escuela: number | null
    fase: $Enums.Fase | null
    activo: boolean | null
  }

  export type GrupoMaxAggregateOutputType = {
    id_grupo: number | null
    nombre: string | null
    nivel: number | null
    turno: $Enums.Turno | null
    id_generacion: number | null
    id_ciclo: number | null
    id_plan: number | null
    id_escuela: number | null
    fase: $Enums.Fase | null
    activo: boolean | null
  }

  export type GrupoCountAggregateOutputType = {
    id_grupo: number
    nombre: number
    nivel: number
    turno: number
    id_generacion: number
    id_ciclo: number
    id_plan: number
    id_escuela: number
    fase: number
    activo: number
    _all: number
  }


  export type GrupoAvgAggregateInputType = {
    id_grupo?: true
    nivel?: true
    id_generacion?: true
    id_ciclo?: true
    id_plan?: true
    id_escuela?: true
  }

  export type GrupoSumAggregateInputType = {
    id_grupo?: true
    nivel?: true
    id_generacion?: true
    id_ciclo?: true
    id_plan?: true
    id_escuela?: true
  }

  export type GrupoMinAggregateInputType = {
    id_grupo?: true
    nombre?: true
    nivel?: true
    turno?: true
    id_generacion?: true
    id_ciclo?: true
    id_plan?: true
    id_escuela?: true
    fase?: true
    activo?: true
  }

  export type GrupoMaxAggregateInputType = {
    id_grupo?: true
    nombre?: true
    nivel?: true
    turno?: true
    id_generacion?: true
    id_ciclo?: true
    id_plan?: true
    id_escuela?: true
    fase?: true
    activo?: true
  }

  export type GrupoCountAggregateInputType = {
    id_grupo?: true
    nombre?: true
    nivel?: true
    turno?: true
    id_generacion?: true
    id_ciclo?: true
    id_plan?: true
    id_escuela?: true
    fase?: true
    activo?: true
    _all?: true
  }

  export type GrupoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grupo to aggregate.
     */
    where?: GrupoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrupoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grupos
    **/
    _count?: true | GrupoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrupoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrupoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrupoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrupoMaxAggregateInputType
  }

  export type GetGrupoAggregateType<T extends GrupoAggregateArgs> = {
        [P in keyof T & keyof AggregateGrupo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrupo[P]>
      : GetScalarType<T[P], AggregateGrupo[P]>
  }




  export type GrupoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrupoWhereInput
    orderBy?: GrupoOrderByWithAggregationInput | GrupoOrderByWithAggregationInput[]
    by: GrupoScalarFieldEnum[] | GrupoScalarFieldEnum
    having?: GrupoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrupoCountAggregateInputType | true
    _avg?: GrupoAvgAggregateInputType
    _sum?: GrupoSumAggregateInputType
    _min?: GrupoMinAggregateInputType
    _max?: GrupoMaxAggregateInputType
  }

  export type GrupoGroupByOutputType = {
    id_grupo: number
    nombre: string
    nivel: number
    turno: $Enums.Turno
    id_generacion: number
    id_ciclo: number
    id_plan: number
    id_escuela: number
    fase: $Enums.Fase | null
    activo: boolean
    _count: GrupoCountAggregateOutputType | null
    _avg: GrupoAvgAggregateOutputType | null
    _sum: GrupoSumAggregateOutputType | null
    _min: GrupoMinAggregateOutputType | null
    _max: GrupoMaxAggregateOutputType | null
  }

  type GetGrupoGroupByPayload<T extends GrupoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrupoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrupoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrupoGroupByOutputType[P]>
            : GetScalarType<T[P], GrupoGroupByOutputType[P]>
        }
      >
    >


  export type GrupoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_grupo?: boolean
    nombre?: boolean
    nivel?: boolean
    turno?: boolean
    id_generacion?: boolean
    id_ciclo?: boolean
    id_plan?: boolean
    id_escuela?: boolean
    fase?: boolean
    activo?: boolean
    generacion?: boolean | GeneracionDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
    alumnos?: boolean | Grupo$alumnosArgs<ExtArgs>
    _count?: boolean | GrupoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupo"]>

  export type GrupoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_grupo?: boolean
    nombre?: boolean
    nivel?: boolean
    turno?: boolean
    id_generacion?: boolean
    id_ciclo?: boolean
    id_plan?: boolean
    id_escuela?: boolean
    fase?: boolean
    activo?: boolean
    generacion?: boolean | GeneracionDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupo"]>

  export type GrupoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_grupo?: boolean
    nombre?: boolean
    nivel?: boolean
    turno?: boolean
    id_generacion?: boolean
    id_ciclo?: boolean
    id_plan?: boolean
    id_escuela?: boolean
    fase?: boolean
    activo?: boolean
    generacion?: boolean | GeneracionDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupo"]>

  export type GrupoSelectScalar = {
    id_grupo?: boolean
    nombre?: boolean
    nivel?: boolean
    turno?: boolean
    id_generacion?: boolean
    id_ciclo?: boolean
    id_plan?: boolean
    id_escuela?: boolean
    fase?: boolean
    activo?: boolean
  }

  export type GrupoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_grupo" | "nombre" | "nivel" | "turno" | "id_generacion" | "id_ciclo" | "id_plan" | "id_escuela" | "fase" | "activo", ExtArgs["result"]["grupo"]>
  export type GrupoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generacion?: boolean | GeneracionDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
    alumnos?: boolean | Grupo$alumnosArgs<ExtArgs>
    _count?: boolean | GrupoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GrupoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generacion?: boolean | GeneracionDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }
  export type GrupoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generacion?: boolean | GeneracionDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    escuela?: boolean | EscuelaDefaultArgs<ExtArgs>
  }

  export type $GrupoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grupo"
    objects: {
      generacion: Prisma.$GeneracionPayload<ExtArgs>
      ciclo: Prisma.$CicloPayload<ExtArgs>
      plan: Prisma.$PlanDeEstudioPayload<ExtArgs>
      escuela: Prisma.$EscuelaPayload<ExtArgs>
      alumnos: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_grupo: number
      nombre: string
      nivel: number
      turno: $Enums.Turno
      id_generacion: number
      id_ciclo: number
      id_plan: number
      id_escuela: number
      fase: $Enums.Fase | null
      activo: boolean
    }, ExtArgs["result"]["grupo"]>
    composites: {}
  }

  type GrupoGetPayload<S extends boolean | null | undefined | GrupoDefaultArgs> = $Result.GetResult<Prisma.$GrupoPayload, S>

  type GrupoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrupoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrupoCountAggregateInputType | true
    }

  export interface GrupoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grupo'], meta: { name: 'Grupo' } }
    /**
     * Find zero or one Grupo that matches the filter.
     * @param {GrupoFindUniqueArgs} args - Arguments to find a Grupo
     * @example
     * // Get one Grupo
     * const grupo = await prisma.grupo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrupoFindUniqueArgs>(args: SelectSubset<T, GrupoFindUniqueArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grupo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrupoFindUniqueOrThrowArgs} args - Arguments to find a Grupo
     * @example
     * // Get one Grupo
     * const grupo = await prisma.grupo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrupoFindUniqueOrThrowArgs>(args: SelectSubset<T, GrupoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grupo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoFindFirstArgs} args - Arguments to find a Grupo
     * @example
     * // Get one Grupo
     * const grupo = await prisma.grupo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrupoFindFirstArgs>(args?: SelectSubset<T, GrupoFindFirstArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grupo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoFindFirstOrThrowArgs} args - Arguments to find a Grupo
     * @example
     * // Get one Grupo
     * const grupo = await prisma.grupo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrupoFindFirstOrThrowArgs>(args?: SelectSubset<T, GrupoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grupos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grupos
     * const grupos = await prisma.grupo.findMany()
     * 
     * // Get first 10 Grupos
     * const grupos = await prisma.grupo.findMany({ take: 10 })
     * 
     * // Only select the `id_grupo`
     * const grupoWithId_grupoOnly = await prisma.grupo.findMany({ select: { id_grupo: true } })
     * 
     */
    findMany<T extends GrupoFindManyArgs>(args?: SelectSubset<T, GrupoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grupo.
     * @param {GrupoCreateArgs} args - Arguments to create a Grupo.
     * @example
     * // Create one Grupo
     * const Grupo = await prisma.grupo.create({
     *   data: {
     *     // ... data to create a Grupo
     *   }
     * })
     * 
     */
    create<T extends GrupoCreateArgs>(args: SelectSubset<T, GrupoCreateArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grupos.
     * @param {GrupoCreateManyArgs} args - Arguments to create many Grupos.
     * @example
     * // Create many Grupos
     * const grupo = await prisma.grupo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrupoCreateManyArgs>(args?: SelectSubset<T, GrupoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grupos and returns the data saved in the database.
     * @param {GrupoCreateManyAndReturnArgs} args - Arguments to create many Grupos.
     * @example
     * // Create many Grupos
     * const grupo = await prisma.grupo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grupos and only return the `id_grupo`
     * const grupoWithId_grupoOnly = await prisma.grupo.createManyAndReturn({
     *   select: { id_grupo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrupoCreateManyAndReturnArgs>(args?: SelectSubset<T, GrupoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grupo.
     * @param {GrupoDeleteArgs} args - Arguments to delete one Grupo.
     * @example
     * // Delete one Grupo
     * const Grupo = await prisma.grupo.delete({
     *   where: {
     *     // ... filter to delete one Grupo
     *   }
     * })
     * 
     */
    delete<T extends GrupoDeleteArgs>(args: SelectSubset<T, GrupoDeleteArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grupo.
     * @param {GrupoUpdateArgs} args - Arguments to update one Grupo.
     * @example
     * // Update one Grupo
     * const grupo = await prisma.grupo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrupoUpdateArgs>(args: SelectSubset<T, GrupoUpdateArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grupos.
     * @param {GrupoDeleteManyArgs} args - Arguments to filter Grupos to delete.
     * @example
     * // Delete a few Grupos
     * const { count } = await prisma.grupo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrupoDeleteManyArgs>(args?: SelectSubset<T, GrupoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grupos
     * const grupo = await prisma.grupo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrupoUpdateManyArgs>(args: SelectSubset<T, GrupoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grupos and returns the data updated in the database.
     * @param {GrupoUpdateManyAndReturnArgs} args - Arguments to update many Grupos.
     * @example
     * // Update many Grupos
     * const grupo = await prisma.grupo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Grupos and only return the `id_grupo`
     * const grupoWithId_grupoOnly = await prisma.grupo.updateManyAndReturn({
     *   select: { id_grupo: true },
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
    updateManyAndReturn<T extends GrupoUpdateManyAndReturnArgs>(args: SelectSubset<T, GrupoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grupo.
     * @param {GrupoUpsertArgs} args - Arguments to update or create a Grupo.
     * @example
     * // Update or create a Grupo
     * const grupo = await prisma.grupo.upsert({
     *   create: {
     *     // ... data to create a Grupo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grupo we want to update
     *   }
     * })
     */
    upsert<T extends GrupoUpsertArgs>(args: SelectSubset<T, GrupoUpsertArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoCountArgs} args - Arguments to filter Grupos to count.
     * @example
     * // Count the number of Grupos
     * const count = await prisma.grupo.count({
     *   where: {
     *     // ... the filter for the Grupos we want to count
     *   }
     * })
    **/
    count<T extends GrupoCountArgs>(
      args?: Subset<T, GrupoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrupoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grupo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GrupoAggregateArgs>(args: Subset<T, GrupoAggregateArgs>): Prisma.PrismaPromise<GetGrupoAggregateType<T>>

    /**
     * Group by Grupo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoGroupByArgs} args - Group by arguments.
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
      T extends GrupoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrupoGroupByArgs['orderBy'] }
        : { orderBy?: GrupoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GrupoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrupoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grupo model
   */
  readonly fields: GrupoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grupo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrupoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    generacion<T extends GeneracionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneracionDefaultArgs<ExtArgs>>): Prisma__GeneracionClient<$Result.GetResult<Prisma.$GeneracionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ciclo<T extends CicloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CicloDefaultArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends PlanDeEstudioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDeEstudioDefaultArgs<ExtArgs>>): Prisma__PlanDeEstudioClient<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    escuela<T extends EscuelaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EscuelaDefaultArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alumnos<T extends Grupo$alumnosArgs<ExtArgs> = {}>(args?: Subset<T, Grupo$alumnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Grupo model
   */
  interface GrupoFieldRefs {
    readonly id_grupo: FieldRef<"Grupo", 'Int'>
    readonly nombre: FieldRef<"Grupo", 'String'>
    readonly nivel: FieldRef<"Grupo", 'Int'>
    readonly turno: FieldRef<"Grupo", 'Turno'>
    readonly id_generacion: FieldRef<"Grupo", 'Int'>
    readonly id_ciclo: FieldRef<"Grupo", 'Int'>
    readonly id_plan: FieldRef<"Grupo", 'Int'>
    readonly id_escuela: FieldRef<"Grupo", 'Int'>
    readonly fase: FieldRef<"Grupo", 'Fase'>
    readonly activo: FieldRef<"Grupo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Grupo findUnique
   */
  export type GrupoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter, which Grupo to fetch.
     */
    where: GrupoWhereUniqueInput
  }

  /**
   * Grupo findUniqueOrThrow
   */
  export type GrupoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter, which Grupo to fetch.
     */
    where: GrupoWhereUniqueInput
  }

  /**
   * Grupo findFirst
   */
  export type GrupoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter, which Grupo to fetch.
     */
    where?: GrupoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grupos.
     */
    cursor?: GrupoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grupos.
     */
    distinct?: GrupoScalarFieldEnum | GrupoScalarFieldEnum[]
  }

  /**
   * Grupo findFirstOrThrow
   */
  export type GrupoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter, which Grupo to fetch.
     */
    where?: GrupoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grupos.
     */
    cursor?: GrupoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grupos.
     */
    distinct?: GrupoScalarFieldEnum | GrupoScalarFieldEnum[]
  }

  /**
   * Grupo findMany
   */
  export type GrupoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter, which Grupos to fetch.
     */
    where?: GrupoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grupos.
     */
    cursor?: GrupoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    distinct?: GrupoScalarFieldEnum | GrupoScalarFieldEnum[]
  }

  /**
   * Grupo create
   */
  export type GrupoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * The data needed to create a Grupo.
     */
    data: XOR<GrupoCreateInput, GrupoUncheckedCreateInput>
  }

  /**
   * Grupo createMany
   */
  export type GrupoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grupos.
     */
    data: GrupoCreateManyInput | GrupoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grupo createManyAndReturn
   */
  export type GrupoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * The data used to create many Grupos.
     */
    data: GrupoCreateManyInput | GrupoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grupo update
   */
  export type GrupoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * The data needed to update a Grupo.
     */
    data: XOR<GrupoUpdateInput, GrupoUncheckedUpdateInput>
    /**
     * Choose, which Grupo to update.
     */
    where: GrupoWhereUniqueInput
  }

  /**
   * Grupo updateMany
   */
  export type GrupoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grupos.
     */
    data: XOR<GrupoUpdateManyMutationInput, GrupoUncheckedUpdateManyInput>
    /**
     * Filter which Grupos to update
     */
    where?: GrupoWhereInput
    /**
     * Limit how many Grupos to update.
     */
    limit?: number
  }

  /**
   * Grupo updateManyAndReturn
   */
  export type GrupoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * The data used to update Grupos.
     */
    data: XOR<GrupoUpdateManyMutationInput, GrupoUncheckedUpdateManyInput>
    /**
     * Filter which Grupos to update
     */
    where?: GrupoWhereInput
    /**
     * Limit how many Grupos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grupo upsert
   */
  export type GrupoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * The filter to search for the Grupo to update in case it exists.
     */
    where: GrupoWhereUniqueInput
    /**
     * In case the Grupo found by the `where` argument doesn't exist, create a new Grupo with this data.
     */
    create: XOR<GrupoCreateInput, GrupoUncheckedCreateInput>
    /**
     * In case the Grupo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrupoUpdateInput, GrupoUncheckedUpdateInput>
  }

  /**
   * Grupo delete
   */
  export type GrupoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter which Grupo to delete.
     */
    where: GrupoWhereUniqueInput
  }

  /**
   * Grupo deleteMany
   */
  export type GrupoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grupos to delete
     */
    where?: GrupoWhereInput
    /**
     * Limit how many Grupos to delete.
     */
    limit?: number
  }

  /**
   * Grupo.alumnos
   */
  export type Grupo$alumnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Grupo without action
   */
  export type GrupoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grupo
     */
    omit?: GrupoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoInclude<ExtArgs> | null
  }


  /**
   * Model Actividad
   */

  export type AggregateActividad = {
    _count: ActividadCountAggregateOutputType | null
    _avg: ActividadAvgAggregateOutputType | null
    _sum: ActividadSumAggregateOutputType | null
    _min: ActividadMinAggregateOutputType | null
    _max: ActividadMaxAggregateOutputType | null
  }

  export type ActividadAvgAggregateOutputType = {
    id_actividad: number | null
    puntos: number | null
    id_departamento: number | null
    id_coordinador: number | null
    id_ciclo: number | null
  }

  export type ActividadSumAggregateOutputType = {
    id_actividad: number | null
    puntos: number | null
    id_departamento: number | null
    id_coordinador: number | null
    id_ciclo: number | null
  }

  export type ActividadMinAggregateOutputType = {
    id_actividad: number | null
    nombre: string | null
    descripcion: string | null
    fecha: Date | null
    puntos: number | null
    id_departamento: number | null
    id_coordinador: number | null
    id_ciclo: number | null
  }

  export type ActividadMaxAggregateOutputType = {
    id_actividad: number | null
    nombre: string | null
    descripcion: string | null
    fecha: Date | null
    puntos: number | null
    id_departamento: number | null
    id_coordinador: number | null
    id_ciclo: number | null
  }

  export type ActividadCountAggregateOutputType = {
    id_actividad: number
    nombre: number
    descripcion: number
    fecha: number
    puntos: number
    id_departamento: number
    id_coordinador: number
    id_ciclo: number
    _all: number
  }


  export type ActividadAvgAggregateInputType = {
    id_actividad?: true
    puntos?: true
    id_departamento?: true
    id_coordinador?: true
    id_ciclo?: true
  }

  export type ActividadSumAggregateInputType = {
    id_actividad?: true
    puntos?: true
    id_departamento?: true
    id_coordinador?: true
    id_ciclo?: true
  }

  export type ActividadMinAggregateInputType = {
    id_actividad?: true
    nombre?: true
    descripcion?: true
    fecha?: true
    puntos?: true
    id_departamento?: true
    id_coordinador?: true
    id_ciclo?: true
  }

  export type ActividadMaxAggregateInputType = {
    id_actividad?: true
    nombre?: true
    descripcion?: true
    fecha?: true
    puntos?: true
    id_departamento?: true
    id_coordinador?: true
    id_ciclo?: true
  }

  export type ActividadCountAggregateInputType = {
    id_actividad?: true
    nombre?: true
    descripcion?: true
    fecha?: true
    puntos?: true
    id_departamento?: true
    id_coordinador?: true
    id_ciclo?: true
    _all?: true
  }

  export type ActividadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actividad to aggregate.
     */
    where?: ActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actividads to fetch.
     */
    orderBy?: ActividadOrderByWithRelationInput | ActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actividads
    **/
    _count?: true | ActividadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActividadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActividadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActividadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActividadMaxAggregateInputType
  }

  export type GetActividadAggregateType<T extends ActividadAggregateArgs> = {
        [P in keyof T & keyof AggregateActividad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActividad[P]>
      : GetScalarType<T[P], AggregateActividad[P]>
  }




  export type ActividadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActividadWhereInput
    orderBy?: ActividadOrderByWithAggregationInput | ActividadOrderByWithAggregationInput[]
    by: ActividadScalarFieldEnum[] | ActividadScalarFieldEnum
    having?: ActividadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActividadCountAggregateInputType | true
    _avg?: ActividadAvgAggregateInputType
    _sum?: ActividadSumAggregateInputType
    _min?: ActividadMinAggregateInputType
    _max?: ActividadMaxAggregateInputType
  }

  export type ActividadGroupByOutputType = {
    id_actividad: number
    nombre: string
    descripcion: string | null
    fecha: Date
    puntos: number
    id_departamento: number
    id_coordinador: number
    id_ciclo: number
    _count: ActividadCountAggregateOutputType | null
    _avg: ActividadAvgAggregateOutputType | null
    _sum: ActividadSumAggregateOutputType | null
    _min: ActividadMinAggregateOutputType | null
    _max: ActividadMaxAggregateOutputType | null
  }

  type GetActividadGroupByPayload<T extends ActividadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActividadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActividadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActividadGroupByOutputType[P]>
            : GetScalarType<T[P], ActividadGroupByOutputType[P]>
        }
      >
    >


  export type ActividadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_actividad?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha?: boolean
    puntos?: boolean
    id_departamento?: boolean
    id_coordinador?: boolean
    id_ciclo?: boolean
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
    coordinador?: boolean | UsuarioDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
    alumnoActs?: boolean | Actividad$alumnoActsArgs<ExtArgs>
    _count?: boolean | ActividadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actividad"]>

  export type ActividadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_actividad?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha?: boolean
    puntos?: boolean
    id_departamento?: boolean
    id_coordinador?: boolean
    id_ciclo?: boolean
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
    coordinador?: boolean | UsuarioDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actividad"]>

  export type ActividadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_actividad?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha?: boolean
    puntos?: boolean
    id_departamento?: boolean
    id_coordinador?: boolean
    id_ciclo?: boolean
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
    coordinador?: boolean | UsuarioDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actividad"]>

  export type ActividadSelectScalar = {
    id_actividad?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha?: boolean
    puntos?: boolean
    id_departamento?: boolean
    id_coordinador?: boolean
    id_ciclo?: boolean
  }

  export type ActividadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_actividad" | "nombre" | "descripcion" | "fecha" | "puntos" | "id_departamento" | "id_coordinador" | "id_ciclo", ExtArgs["result"]["actividad"]>
  export type ActividadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
    coordinador?: boolean | UsuarioDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
    alumnoActs?: boolean | Actividad$alumnoActsArgs<ExtArgs>
    _count?: boolean | ActividadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActividadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
    coordinador?: boolean | UsuarioDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }
  export type ActividadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
    coordinador?: boolean | UsuarioDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }

  export type $ActividadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actividad"
    objects: {
      departamento: Prisma.$DepartamentoPayload<ExtArgs>
      coordinador: Prisma.$UsuarioPayload<ExtArgs>
      ciclo: Prisma.$CicloPayload<ExtArgs>
      alumnoActs: Prisma.$AlumnoActividadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_actividad: number
      nombre: string
      descripcion: string | null
      fecha: Date
      puntos: number
      id_departamento: number
      id_coordinador: number
      id_ciclo: number
    }, ExtArgs["result"]["actividad"]>
    composites: {}
  }

  type ActividadGetPayload<S extends boolean | null | undefined | ActividadDefaultArgs> = $Result.GetResult<Prisma.$ActividadPayload, S>

  type ActividadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActividadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActividadCountAggregateInputType | true
    }

  export interface ActividadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actividad'], meta: { name: 'Actividad' } }
    /**
     * Find zero or one Actividad that matches the filter.
     * @param {ActividadFindUniqueArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActividadFindUniqueArgs>(args: SelectSubset<T, ActividadFindUniqueArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actividad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActividadFindUniqueOrThrowArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActividadFindUniqueOrThrowArgs>(args: SelectSubset<T, ActividadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actividad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadFindFirstArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActividadFindFirstArgs>(args?: SelectSubset<T, ActividadFindFirstArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actividad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadFindFirstOrThrowArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActividadFindFirstOrThrowArgs>(args?: SelectSubset<T, ActividadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actividads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actividads
     * const actividads = await prisma.actividad.findMany()
     * 
     * // Get first 10 Actividads
     * const actividads = await prisma.actividad.findMany({ take: 10 })
     * 
     * // Only select the `id_actividad`
     * const actividadWithId_actividadOnly = await prisma.actividad.findMany({ select: { id_actividad: true } })
     * 
     */
    findMany<T extends ActividadFindManyArgs>(args?: SelectSubset<T, ActividadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actividad.
     * @param {ActividadCreateArgs} args - Arguments to create a Actividad.
     * @example
     * // Create one Actividad
     * const Actividad = await prisma.actividad.create({
     *   data: {
     *     // ... data to create a Actividad
     *   }
     * })
     * 
     */
    create<T extends ActividadCreateArgs>(args: SelectSubset<T, ActividadCreateArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actividads.
     * @param {ActividadCreateManyArgs} args - Arguments to create many Actividads.
     * @example
     * // Create many Actividads
     * const actividad = await prisma.actividad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActividadCreateManyArgs>(args?: SelectSubset<T, ActividadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actividads and returns the data saved in the database.
     * @param {ActividadCreateManyAndReturnArgs} args - Arguments to create many Actividads.
     * @example
     * // Create many Actividads
     * const actividad = await prisma.actividad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actividads and only return the `id_actividad`
     * const actividadWithId_actividadOnly = await prisma.actividad.createManyAndReturn({
     *   select: { id_actividad: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActividadCreateManyAndReturnArgs>(args?: SelectSubset<T, ActividadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Actividad.
     * @param {ActividadDeleteArgs} args - Arguments to delete one Actividad.
     * @example
     * // Delete one Actividad
     * const Actividad = await prisma.actividad.delete({
     *   where: {
     *     // ... filter to delete one Actividad
     *   }
     * })
     * 
     */
    delete<T extends ActividadDeleteArgs>(args: SelectSubset<T, ActividadDeleteArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actividad.
     * @param {ActividadUpdateArgs} args - Arguments to update one Actividad.
     * @example
     * // Update one Actividad
     * const actividad = await prisma.actividad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActividadUpdateArgs>(args: SelectSubset<T, ActividadUpdateArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actividads.
     * @param {ActividadDeleteManyArgs} args - Arguments to filter Actividads to delete.
     * @example
     * // Delete a few Actividads
     * const { count } = await prisma.actividad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActividadDeleteManyArgs>(args?: SelectSubset<T, ActividadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actividads
     * const actividad = await prisma.actividad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActividadUpdateManyArgs>(args: SelectSubset<T, ActividadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actividads and returns the data updated in the database.
     * @param {ActividadUpdateManyAndReturnArgs} args - Arguments to update many Actividads.
     * @example
     * // Update many Actividads
     * const actividad = await prisma.actividad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actividads and only return the `id_actividad`
     * const actividadWithId_actividadOnly = await prisma.actividad.updateManyAndReturn({
     *   select: { id_actividad: true },
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
    updateManyAndReturn<T extends ActividadUpdateManyAndReturnArgs>(args: SelectSubset<T, ActividadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Actividad.
     * @param {ActividadUpsertArgs} args - Arguments to update or create a Actividad.
     * @example
     * // Update or create a Actividad
     * const actividad = await prisma.actividad.upsert({
     *   create: {
     *     // ... data to create a Actividad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actividad we want to update
     *   }
     * })
     */
    upsert<T extends ActividadUpsertArgs>(args: SelectSubset<T, ActividadUpsertArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadCountArgs} args - Arguments to filter Actividads to count.
     * @example
     * // Count the number of Actividads
     * const count = await prisma.actividad.count({
     *   where: {
     *     // ... the filter for the Actividads we want to count
     *   }
     * })
    **/
    count<T extends ActividadCountArgs>(
      args?: Subset<T, ActividadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActividadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActividadAggregateArgs>(args: Subset<T, ActividadAggregateArgs>): Prisma.PrismaPromise<GetActividadAggregateType<T>>

    /**
     * Group by Actividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadGroupByArgs} args - Group by arguments.
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
      T extends ActividadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActividadGroupByArgs['orderBy'] }
        : { orderBy?: ActividadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActividadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActividadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actividad model
   */
  readonly fields: ActividadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actividad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActividadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departamento<T extends DepartamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartamentoDefaultArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coordinador<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ciclo<T extends CicloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CicloDefaultArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alumnoActs<T extends Actividad$alumnoActsArgs<ExtArgs> = {}>(args?: Subset<T, Actividad$alumnoActsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoActividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Actividad model
   */
  interface ActividadFieldRefs {
    readonly id_actividad: FieldRef<"Actividad", 'Int'>
    readonly nombre: FieldRef<"Actividad", 'String'>
    readonly descripcion: FieldRef<"Actividad", 'String'>
    readonly fecha: FieldRef<"Actividad", 'DateTime'>
    readonly puntos: FieldRef<"Actividad", 'Int'>
    readonly id_departamento: FieldRef<"Actividad", 'Int'>
    readonly id_coordinador: FieldRef<"Actividad", 'Int'>
    readonly id_ciclo: FieldRef<"Actividad", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Actividad findUnique
   */
  export type ActividadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * Filter, which Actividad to fetch.
     */
    where: ActividadWhereUniqueInput
  }

  /**
   * Actividad findUniqueOrThrow
   */
  export type ActividadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * Filter, which Actividad to fetch.
     */
    where: ActividadWhereUniqueInput
  }

  /**
   * Actividad findFirst
   */
  export type ActividadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * Filter, which Actividad to fetch.
     */
    where?: ActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actividads to fetch.
     */
    orderBy?: ActividadOrderByWithRelationInput | ActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actividads.
     */
    cursor?: ActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actividads.
     */
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * Actividad findFirstOrThrow
   */
  export type ActividadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * Filter, which Actividad to fetch.
     */
    where?: ActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actividads to fetch.
     */
    orderBy?: ActividadOrderByWithRelationInput | ActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actividads.
     */
    cursor?: ActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actividads.
     */
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * Actividad findMany
   */
  export type ActividadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * Filter, which Actividads to fetch.
     */
    where?: ActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actividads to fetch.
     */
    orderBy?: ActividadOrderByWithRelationInput | ActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actividads.
     */
    cursor?: ActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actividads.
     */
    skip?: number
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * Actividad create
   */
  export type ActividadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * The data needed to create a Actividad.
     */
    data: XOR<ActividadCreateInput, ActividadUncheckedCreateInput>
  }

  /**
   * Actividad createMany
   */
  export type ActividadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actividads.
     */
    data: ActividadCreateManyInput | ActividadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actividad createManyAndReturn
   */
  export type ActividadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * The data used to create many Actividads.
     */
    data: ActividadCreateManyInput | ActividadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Actividad update
   */
  export type ActividadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * The data needed to update a Actividad.
     */
    data: XOR<ActividadUpdateInput, ActividadUncheckedUpdateInput>
    /**
     * Choose, which Actividad to update.
     */
    where: ActividadWhereUniqueInput
  }

  /**
   * Actividad updateMany
   */
  export type ActividadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actividads.
     */
    data: XOR<ActividadUpdateManyMutationInput, ActividadUncheckedUpdateManyInput>
    /**
     * Filter which Actividads to update
     */
    where?: ActividadWhereInput
    /**
     * Limit how many Actividads to update.
     */
    limit?: number
  }

  /**
   * Actividad updateManyAndReturn
   */
  export type ActividadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * The data used to update Actividads.
     */
    data: XOR<ActividadUpdateManyMutationInput, ActividadUncheckedUpdateManyInput>
    /**
     * Filter which Actividads to update
     */
    where?: ActividadWhereInput
    /**
     * Limit how many Actividads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Actividad upsert
   */
  export type ActividadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * The filter to search for the Actividad to update in case it exists.
     */
    where: ActividadWhereUniqueInput
    /**
     * In case the Actividad found by the `where` argument doesn't exist, create a new Actividad with this data.
     */
    create: XOR<ActividadCreateInput, ActividadUncheckedCreateInput>
    /**
     * In case the Actividad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActividadUpdateInput, ActividadUncheckedUpdateInput>
  }

  /**
   * Actividad delete
   */
  export type ActividadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * Filter which Actividad to delete.
     */
    where: ActividadWhereUniqueInput
  }

  /**
   * Actividad deleteMany
   */
  export type ActividadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actividads to delete
     */
    where?: ActividadWhereInput
    /**
     * Limit how many Actividads to delete.
     */
    limit?: number
  }

  /**
   * Actividad.alumnoActs
   */
  export type Actividad$alumnoActsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadInclude<ExtArgs> | null
    where?: AlumnoActividadWhereInput
    orderBy?: AlumnoActividadOrderByWithRelationInput | AlumnoActividadOrderByWithRelationInput[]
    cursor?: AlumnoActividadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlumnoActividadScalarFieldEnum | AlumnoActividadScalarFieldEnum[]
  }

  /**
   * Actividad without action
   */
  export type ActividadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
  }


  /**
   * Model AlumnoActividad
   */

  export type AggregateAlumnoActividad = {
    _count: AlumnoActividadCountAggregateOutputType | null
    _avg: AlumnoActividadAvgAggregateOutputType | null
    _sum: AlumnoActividadSumAggregateOutputType | null
    _min: AlumnoActividadMinAggregateOutputType | null
    _max: AlumnoActividadMaxAggregateOutputType | null
  }

  export type AlumnoActividadAvgAggregateOutputType = {
    id_alumno_actividad: number | null
    id_alumno: number | null
    id_actividad: number | null
    puntos_otorgados: number | null
    id_coordinador: number | null
    id_ciclo: number | null
  }

  export type AlumnoActividadSumAggregateOutputType = {
    id_alumno_actividad: number | null
    id_alumno: number | null
    id_actividad: number | null
    puntos_otorgados: number | null
    id_coordinador: number | null
    id_ciclo: number | null
  }

  export type AlumnoActividadMinAggregateOutputType = {
    id_alumno_actividad: number | null
    id_alumno: number | null
    id_actividad: number | null
    puntos_otorgados: number | null
    fecha_registro: Date | null
    id_coordinador: number | null
    id_ciclo: number | null
  }

  export type AlumnoActividadMaxAggregateOutputType = {
    id_alumno_actividad: number | null
    id_alumno: number | null
    id_actividad: number | null
    puntos_otorgados: number | null
    fecha_registro: Date | null
    id_coordinador: number | null
    id_ciclo: number | null
  }

  export type AlumnoActividadCountAggregateOutputType = {
    id_alumno_actividad: number
    id_alumno: number
    id_actividad: number
    puntos_otorgados: number
    fecha_registro: number
    id_coordinador: number
    id_ciclo: number
    _all: number
  }


  export type AlumnoActividadAvgAggregateInputType = {
    id_alumno_actividad?: true
    id_alumno?: true
    id_actividad?: true
    puntos_otorgados?: true
    id_coordinador?: true
    id_ciclo?: true
  }

  export type AlumnoActividadSumAggregateInputType = {
    id_alumno_actividad?: true
    id_alumno?: true
    id_actividad?: true
    puntos_otorgados?: true
    id_coordinador?: true
    id_ciclo?: true
  }

  export type AlumnoActividadMinAggregateInputType = {
    id_alumno_actividad?: true
    id_alumno?: true
    id_actividad?: true
    puntos_otorgados?: true
    fecha_registro?: true
    id_coordinador?: true
    id_ciclo?: true
  }

  export type AlumnoActividadMaxAggregateInputType = {
    id_alumno_actividad?: true
    id_alumno?: true
    id_actividad?: true
    puntos_otorgados?: true
    fecha_registro?: true
    id_coordinador?: true
    id_ciclo?: true
  }

  export type AlumnoActividadCountAggregateInputType = {
    id_alumno_actividad?: true
    id_alumno?: true
    id_actividad?: true
    puntos_otorgados?: true
    fecha_registro?: true
    id_coordinador?: true
    id_ciclo?: true
    _all?: true
  }

  export type AlumnoActividadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlumnoActividad to aggregate.
     */
    where?: AlumnoActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumnoActividads to fetch.
     */
    orderBy?: AlumnoActividadOrderByWithRelationInput | AlumnoActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlumnoActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumnoActividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumnoActividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlumnoActividads
    **/
    _count?: true | AlumnoActividadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlumnoActividadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlumnoActividadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlumnoActividadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlumnoActividadMaxAggregateInputType
  }

  export type GetAlumnoActividadAggregateType<T extends AlumnoActividadAggregateArgs> = {
        [P in keyof T & keyof AggregateAlumnoActividad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlumnoActividad[P]>
      : GetScalarType<T[P], AggregateAlumnoActividad[P]>
  }




  export type AlumnoActividadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnoActividadWhereInput
    orderBy?: AlumnoActividadOrderByWithAggregationInput | AlumnoActividadOrderByWithAggregationInput[]
    by: AlumnoActividadScalarFieldEnum[] | AlumnoActividadScalarFieldEnum
    having?: AlumnoActividadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlumnoActividadCountAggregateInputType | true
    _avg?: AlumnoActividadAvgAggregateInputType
    _sum?: AlumnoActividadSumAggregateInputType
    _min?: AlumnoActividadMinAggregateInputType
    _max?: AlumnoActividadMaxAggregateInputType
  }

  export type AlumnoActividadGroupByOutputType = {
    id_alumno_actividad: number
    id_alumno: number
    id_actividad: number
    puntos_otorgados: number
    fecha_registro: Date
    id_coordinador: number
    id_ciclo: number
    _count: AlumnoActividadCountAggregateOutputType | null
    _avg: AlumnoActividadAvgAggregateOutputType | null
    _sum: AlumnoActividadSumAggregateOutputType | null
    _min: AlumnoActividadMinAggregateOutputType | null
    _max: AlumnoActividadMaxAggregateOutputType | null
  }

  type GetAlumnoActividadGroupByPayload<T extends AlumnoActividadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlumnoActividadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlumnoActividadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlumnoActividadGroupByOutputType[P]>
            : GetScalarType<T[P], AlumnoActividadGroupByOutputType[P]>
        }
      >
    >


  export type AlumnoActividadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alumno_actividad?: boolean
    id_alumno?: boolean
    id_actividad?: boolean
    puntos_otorgados?: boolean
    fecha_registro?: boolean
    id_coordinador?: boolean
    id_ciclo?: boolean
    alumno?: boolean | UsuarioDefaultArgs<ExtArgs>
    actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    coordinador?: boolean | UsuarioDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alumnoActividad"]>

  export type AlumnoActividadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alumno_actividad?: boolean
    id_alumno?: boolean
    id_actividad?: boolean
    puntos_otorgados?: boolean
    fecha_registro?: boolean
    id_coordinador?: boolean
    id_ciclo?: boolean
    alumno?: boolean | UsuarioDefaultArgs<ExtArgs>
    actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    coordinador?: boolean | UsuarioDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alumnoActividad"]>

  export type AlumnoActividadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alumno_actividad?: boolean
    id_alumno?: boolean
    id_actividad?: boolean
    puntos_otorgados?: boolean
    fecha_registro?: boolean
    id_coordinador?: boolean
    id_ciclo?: boolean
    alumno?: boolean | UsuarioDefaultArgs<ExtArgs>
    actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    coordinador?: boolean | UsuarioDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alumnoActividad"]>

  export type AlumnoActividadSelectScalar = {
    id_alumno_actividad?: boolean
    id_alumno?: boolean
    id_actividad?: boolean
    puntos_otorgados?: boolean
    fecha_registro?: boolean
    id_coordinador?: boolean
    id_ciclo?: boolean
  }

  export type AlumnoActividadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_alumno_actividad" | "id_alumno" | "id_actividad" | "puntos_otorgados" | "fecha_registro" | "id_coordinador" | "id_ciclo", ExtArgs["result"]["alumnoActividad"]>
  export type AlumnoActividadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumno?: boolean | UsuarioDefaultArgs<ExtArgs>
    actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    coordinador?: boolean | UsuarioDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }
  export type AlumnoActividadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumno?: boolean | UsuarioDefaultArgs<ExtArgs>
    actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    coordinador?: boolean | UsuarioDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }
  export type AlumnoActividadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumno?: boolean | UsuarioDefaultArgs<ExtArgs>
    actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    coordinador?: boolean | UsuarioDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }

  export type $AlumnoActividadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlumnoActividad"
    objects: {
      alumno: Prisma.$UsuarioPayload<ExtArgs>
      actividad: Prisma.$ActividadPayload<ExtArgs>
      coordinador: Prisma.$UsuarioPayload<ExtArgs>
      ciclo: Prisma.$CicloPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_alumno_actividad: number
      id_alumno: number
      id_actividad: number
      puntos_otorgados: number
      fecha_registro: Date
      id_coordinador: number
      id_ciclo: number
    }, ExtArgs["result"]["alumnoActividad"]>
    composites: {}
  }

  type AlumnoActividadGetPayload<S extends boolean | null | undefined | AlumnoActividadDefaultArgs> = $Result.GetResult<Prisma.$AlumnoActividadPayload, S>

  type AlumnoActividadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlumnoActividadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlumnoActividadCountAggregateInputType | true
    }

  export interface AlumnoActividadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlumnoActividad'], meta: { name: 'AlumnoActividad' } }
    /**
     * Find zero or one AlumnoActividad that matches the filter.
     * @param {AlumnoActividadFindUniqueArgs} args - Arguments to find a AlumnoActividad
     * @example
     * // Get one AlumnoActividad
     * const alumnoActividad = await prisma.alumnoActividad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlumnoActividadFindUniqueArgs>(args: SelectSubset<T, AlumnoActividadFindUniqueArgs<ExtArgs>>): Prisma__AlumnoActividadClient<$Result.GetResult<Prisma.$AlumnoActividadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlumnoActividad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlumnoActividadFindUniqueOrThrowArgs} args - Arguments to find a AlumnoActividad
     * @example
     * // Get one AlumnoActividad
     * const alumnoActividad = await prisma.alumnoActividad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlumnoActividadFindUniqueOrThrowArgs>(args: SelectSubset<T, AlumnoActividadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlumnoActividadClient<$Result.GetResult<Prisma.$AlumnoActividadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlumnoActividad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoActividadFindFirstArgs} args - Arguments to find a AlumnoActividad
     * @example
     * // Get one AlumnoActividad
     * const alumnoActividad = await prisma.alumnoActividad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlumnoActividadFindFirstArgs>(args?: SelectSubset<T, AlumnoActividadFindFirstArgs<ExtArgs>>): Prisma__AlumnoActividadClient<$Result.GetResult<Prisma.$AlumnoActividadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlumnoActividad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoActividadFindFirstOrThrowArgs} args - Arguments to find a AlumnoActividad
     * @example
     * // Get one AlumnoActividad
     * const alumnoActividad = await prisma.alumnoActividad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlumnoActividadFindFirstOrThrowArgs>(args?: SelectSubset<T, AlumnoActividadFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlumnoActividadClient<$Result.GetResult<Prisma.$AlumnoActividadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlumnoActividads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoActividadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlumnoActividads
     * const alumnoActividads = await prisma.alumnoActividad.findMany()
     * 
     * // Get first 10 AlumnoActividads
     * const alumnoActividads = await prisma.alumnoActividad.findMany({ take: 10 })
     * 
     * // Only select the `id_alumno_actividad`
     * const alumnoActividadWithId_alumno_actividadOnly = await prisma.alumnoActividad.findMany({ select: { id_alumno_actividad: true } })
     * 
     */
    findMany<T extends AlumnoActividadFindManyArgs>(args?: SelectSubset<T, AlumnoActividadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoActividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlumnoActividad.
     * @param {AlumnoActividadCreateArgs} args - Arguments to create a AlumnoActividad.
     * @example
     * // Create one AlumnoActividad
     * const AlumnoActividad = await prisma.alumnoActividad.create({
     *   data: {
     *     // ... data to create a AlumnoActividad
     *   }
     * })
     * 
     */
    create<T extends AlumnoActividadCreateArgs>(args: SelectSubset<T, AlumnoActividadCreateArgs<ExtArgs>>): Prisma__AlumnoActividadClient<$Result.GetResult<Prisma.$AlumnoActividadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlumnoActividads.
     * @param {AlumnoActividadCreateManyArgs} args - Arguments to create many AlumnoActividads.
     * @example
     * // Create many AlumnoActividads
     * const alumnoActividad = await prisma.alumnoActividad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlumnoActividadCreateManyArgs>(args?: SelectSubset<T, AlumnoActividadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlumnoActividads and returns the data saved in the database.
     * @param {AlumnoActividadCreateManyAndReturnArgs} args - Arguments to create many AlumnoActividads.
     * @example
     * // Create many AlumnoActividads
     * const alumnoActividad = await prisma.alumnoActividad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlumnoActividads and only return the `id_alumno_actividad`
     * const alumnoActividadWithId_alumno_actividadOnly = await prisma.alumnoActividad.createManyAndReturn({
     *   select: { id_alumno_actividad: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlumnoActividadCreateManyAndReturnArgs>(args?: SelectSubset<T, AlumnoActividadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoActividadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlumnoActividad.
     * @param {AlumnoActividadDeleteArgs} args - Arguments to delete one AlumnoActividad.
     * @example
     * // Delete one AlumnoActividad
     * const AlumnoActividad = await prisma.alumnoActividad.delete({
     *   where: {
     *     // ... filter to delete one AlumnoActividad
     *   }
     * })
     * 
     */
    delete<T extends AlumnoActividadDeleteArgs>(args: SelectSubset<T, AlumnoActividadDeleteArgs<ExtArgs>>): Prisma__AlumnoActividadClient<$Result.GetResult<Prisma.$AlumnoActividadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlumnoActividad.
     * @param {AlumnoActividadUpdateArgs} args - Arguments to update one AlumnoActividad.
     * @example
     * // Update one AlumnoActividad
     * const alumnoActividad = await prisma.alumnoActividad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlumnoActividadUpdateArgs>(args: SelectSubset<T, AlumnoActividadUpdateArgs<ExtArgs>>): Prisma__AlumnoActividadClient<$Result.GetResult<Prisma.$AlumnoActividadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlumnoActividads.
     * @param {AlumnoActividadDeleteManyArgs} args - Arguments to filter AlumnoActividads to delete.
     * @example
     * // Delete a few AlumnoActividads
     * const { count } = await prisma.alumnoActividad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlumnoActividadDeleteManyArgs>(args?: SelectSubset<T, AlumnoActividadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlumnoActividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoActividadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlumnoActividads
     * const alumnoActividad = await prisma.alumnoActividad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlumnoActividadUpdateManyArgs>(args: SelectSubset<T, AlumnoActividadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlumnoActividads and returns the data updated in the database.
     * @param {AlumnoActividadUpdateManyAndReturnArgs} args - Arguments to update many AlumnoActividads.
     * @example
     * // Update many AlumnoActividads
     * const alumnoActividad = await prisma.alumnoActividad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlumnoActividads and only return the `id_alumno_actividad`
     * const alumnoActividadWithId_alumno_actividadOnly = await prisma.alumnoActividad.updateManyAndReturn({
     *   select: { id_alumno_actividad: true },
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
    updateManyAndReturn<T extends AlumnoActividadUpdateManyAndReturnArgs>(args: SelectSubset<T, AlumnoActividadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnoActividadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlumnoActividad.
     * @param {AlumnoActividadUpsertArgs} args - Arguments to update or create a AlumnoActividad.
     * @example
     * // Update or create a AlumnoActividad
     * const alumnoActividad = await prisma.alumnoActividad.upsert({
     *   create: {
     *     // ... data to create a AlumnoActividad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlumnoActividad we want to update
     *   }
     * })
     */
    upsert<T extends AlumnoActividadUpsertArgs>(args: SelectSubset<T, AlumnoActividadUpsertArgs<ExtArgs>>): Prisma__AlumnoActividadClient<$Result.GetResult<Prisma.$AlumnoActividadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlumnoActividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoActividadCountArgs} args - Arguments to filter AlumnoActividads to count.
     * @example
     * // Count the number of AlumnoActividads
     * const count = await prisma.alumnoActividad.count({
     *   where: {
     *     // ... the filter for the AlumnoActividads we want to count
     *   }
     * })
    **/
    count<T extends AlumnoActividadCountArgs>(
      args?: Subset<T, AlumnoActividadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlumnoActividadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlumnoActividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoActividadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlumnoActividadAggregateArgs>(args: Subset<T, AlumnoActividadAggregateArgs>): Prisma.PrismaPromise<GetAlumnoActividadAggregateType<T>>

    /**
     * Group by AlumnoActividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoActividadGroupByArgs} args - Group by arguments.
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
      T extends AlumnoActividadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlumnoActividadGroupByArgs['orderBy'] }
        : { orderBy?: AlumnoActividadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlumnoActividadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumnoActividadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlumnoActividad model
   */
  readonly fields: AlumnoActividadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlumnoActividad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlumnoActividadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alumno<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actividad<T extends ActividadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActividadDefaultArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coordinador<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ciclo<T extends CicloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CicloDefaultArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AlumnoActividad model
   */
  interface AlumnoActividadFieldRefs {
    readonly id_alumno_actividad: FieldRef<"AlumnoActividad", 'Int'>
    readonly id_alumno: FieldRef<"AlumnoActividad", 'Int'>
    readonly id_actividad: FieldRef<"AlumnoActividad", 'Int'>
    readonly puntos_otorgados: FieldRef<"AlumnoActividad", 'Int'>
    readonly fecha_registro: FieldRef<"AlumnoActividad", 'DateTime'>
    readonly id_coordinador: FieldRef<"AlumnoActividad", 'Int'>
    readonly id_ciclo: FieldRef<"AlumnoActividad", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AlumnoActividad findUnique
   */
  export type AlumnoActividadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadInclude<ExtArgs> | null
    /**
     * Filter, which AlumnoActividad to fetch.
     */
    where: AlumnoActividadWhereUniqueInput
  }

  /**
   * AlumnoActividad findUniqueOrThrow
   */
  export type AlumnoActividadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadInclude<ExtArgs> | null
    /**
     * Filter, which AlumnoActividad to fetch.
     */
    where: AlumnoActividadWhereUniqueInput
  }

  /**
   * AlumnoActividad findFirst
   */
  export type AlumnoActividadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadInclude<ExtArgs> | null
    /**
     * Filter, which AlumnoActividad to fetch.
     */
    where?: AlumnoActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumnoActividads to fetch.
     */
    orderBy?: AlumnoActividadOrderByWithRelationInput | AlumnoActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlumnoActividads.
     */
    cursor?: AlumnoActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumnoActividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumnoActividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlumnoActividads.
     */
    distinct?: AlumnoActividadScalarFieldEnum | AlumnoActividadScalarFieldEnum[]
  }

  /**
   * AlumnoActividad findFirstOrThrow
   */
  export type AlumnoActividadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadInclude<ExtArgs> | null
    /**
     * Filter, which AlumnoActividad to fetch.
     */
    where?: AlumnoActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumnoActividads to fetch.
     */
    orderBy?: AlumnoActividadOrderByWithRelationInput | AlumnoActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlumnoActividads.
     */
    cursor?: AlumnoActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumnoActividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumnoActividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlumnoActividads.
     */
    distinct?: AlumnoActividadScalarFieldEnum | AlumnoActividadScalarFieldEnum[]
  }

  /**
   * AlumnoActividad findMany
   */
  export type AlumnoActividadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadInclude<ExtArgs> | null
    /**
     * Filter, which AlumnoActividads to fetch.
     */
    where?: AlumnoActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumnoActividads to fetch.
     */
    orderBy?: AlumnoActividadOrderByWithRelationInput | AlumnoActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlumnoActividads.
     */
    cursor?: AlumnoActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumnoActividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumnoActividads.
     */
    skip?: number
    distinct?: AlumnoActividadScalarFieldEnum | AlumnoActividadScalarFieldEnum[]
  }

  /**
   * AlumnoActividad create
   */
  export type AlumnoActividadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadInclude<ExtArgs> | null
    /**
     * The data needed to create a AlumnoActividad.
     */
    data: XOR<AlumnoActividadCreateInput, AlumnoActividadUncheckedCreateInput>
  }

  /**
   * AlumnoActividad createMany
   */
  export type AlumnoActividadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlumnoActividads.
     */
    data: AlumnoActividadCreateManyInput | AlumnoActividadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlumnoActividad createManyAndReturn
   */
  export type AlumnoActividadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * The data used to create many AlumnoActividads.
     */
    data: AlumnoActividadCreateManyInput | AlumnoActividadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlumnoActividad update
   */
  export type AlumnoActividadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadInclude<ExtArgs> | null
    /**
     * The data needed to update a AlumnoActividad.
     */
    data: XOR<AlumnoActividadUpdateInput, AlumnoActividadUncheckedUpdateInput>
    /**
     * Choose, which AlumnoActividad to update.
     */
    where: AlumnoActividadWhereUniqueInput
  }

  /**
   * AlumnoActividad updateMany
   */
  export type AlumnoActividadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlumnoActividads.
     */
    data: XOR<AlumnoActividadUpdateManyMutationInput, AlumnoActividadUncheckedUpdateManyInput>
    /**
     * Filter which AlumnoActividads to update
     */
    where?: AlumnoActividadWhereInput
    /**
     * Limit how many AlumnoActividads to update.
     */
    limit?: number
  }

  /**
   * AlumnoActividad updateManyAndReturn
   */
  export type AlumnoActividadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * The data used to update AlumnoActividads.
     */
    data: XOR<AlumnoActividadUpdateManyMutationInput, AlumnoActividadUncheckedUpdateManyInput>
    /**
     * Filter which AlumnoActividads to update
     */
    where?: AlumnoActividadWhereInput
    /**
     * Limit how many AlumnoActividads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlumnoActividad upsert
   */
  export type AlumnoActividadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadInclude<ExtArgs> | null
    /**
     * The filter to search for the AlumnoActividad to update in case it exists.
     */
    where: AlumnoActividadWhereUniqueInput
    /**
     * In case the AlumnoActividad found by the `where` argument doesn't exist, create a new AlumnoActividad with this data.
     */
    create: XOR<AlumnoActividadCreateInput, AlumnoActividadUncheckedCreateInput>
    /**
     * In case the AlumnoActividad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlumnoActividadUpdateInput, AlumnoActividadUncheckedUpdateInput>
  }

  /**
   * AlumnoActividad delete
   */
  export type AlumnoActividadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadInclude<ExtArgs> | null
    /**
     * Filter which AlumnoActividad to delete.
     */
    where: AlumnoActividadWhereUniqueInput
  }

  /**
   * AlumnoActividad deleteMany
   */
  export type AlumnoActividadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlumnoActividads to delete
     */
    where?: AlumnoActividadWhereInput
    /**
     * Limit how many AlumnoActividads to delete.
     */
    limit?: number
  }

  /**
   * AlumnoActividad without action
   */
  export type AlumnoActividadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoActividad
     */
    select?: AlumnoActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumnoActividad
     */
    omit?: AlumnoActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlumnoActividadInclude<ExtArgs> | null
  }


  /**
   * Model PlanDepartamento
   */

  export type AggregatePlanDepartamento = {
    _count: PlanDepartamentoCountAggregateOutputType | null
    _avg: PlanDepartamentoAvgAggregateOutputType | null
    _sum: PlanDepartamentoSumAggregateOutputType | null
    _min: PlanDepartamentoMinAggregateOutputType | null
    _max: PlanDepartamentoMaxAggregateOutputType | null
  }

  export type PlanDepartamentoAvgAggregateOutputType = {
    id_plan_departamento: number | null
    id_plan: number | null
    id_departamento: number | null
    puntos_requeridos: number | null
  }

  export type PlanDepartamentoSumAggregateOutputType = {
    id_plan_departamento: number | null
    id_plan: number | null
    id_departamento: number | null
    puntos_requeridos: number | null
  }

  export type PlanDepartamentoMinAggregateOutputType = {
    id_plan_departamento: number | null
    id_plan: number | null
    id_departamento: number | null
    puntos_requeridos: number | null
  }

  export type PlanDepartamentoMaxAggregateOutputType = {
    id_plan_departamento: number | null
    id_plan: number | null
    id_departamento: number | null
    puntos_requeridos: number | null
  }

  export type PlanDepartamentoCountAggregateOutputType = {
    id_plan_departamento: number
    id_plan: number
    id_departamento: number
    puntos_requeridos: number
    _all: number
  }


  export type PlanDepartamentoAvgAggregateInputType = {
    id_plan_departamento?: true
    id_plan?: true
    id_departamento?: true
    puntos_requeridos?: true
  }

  export type PlanDepartamentoSumAggregateInputType = {
    id_plan_departamento?: true
    id_plan?: true
    id_departamento?: true
    puntos_requeridos?: true
  }

  export type PlanDepartamentoMinAggregateInputType = {
    id_plan_departamento?: true
    id_plan?: true
    id_departamento?: true
    puntos_requeridos?: true
  }

  export type PlanDepartamentoMaxAggregateInputType = {
    id_plan_departamento?: true
    id_plan?: true
    id_departamento?: true
    puntos_requeridos?: true
  }

  export type PlanDepartamentoCountAggregateInputType = {
    id_plan_departamento?: true
    id_plan?: true
    id_departamento?: true
    puntos_requeridos?: true
    _all?: true
  }

  export type PlanDepartamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanDepartamento to aggregate.
     */
    where?: PlanDepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanDepartamentos to fetch.
     */
    orderBy?: PlanDepartamentoOrderByWithRelationInput | PlanDepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanDepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanDepartamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanDepartamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanDepartamentos
    **/
    _count?: true | PlanDepartamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanDepartamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanDepartamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanDepartamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanDepartamentoMaxAggregateInputType
  }

  export type GetPlanDepartamentoAggregateType<T extends PlanDepartamentoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanDepartamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanDepartamento[P]>
      : GetScalarType<T[P], AggregatePlanDepartamento[P]>
  }




  export type PlanDepartamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanDepartamentoWhereInput
    orderBy?: PlanDepartamentoOrderByWithAggregationInput | PlanDepartamentoOrderByWithAggregationInput[]
    by: PlanDepartamentoScalarFieldEnum[] | PlanDepartamentoScalarFieldEnum
    having?: PlanDepartamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanDepartamentoCountAggregateInputType | true
    _avg?: PlanDepartamentoAvgAggregateInputType
    _sum?: PlanDepartamentoSumAggregateInputType
    _min?: PlanDepartamentoMinAggregateInputType
    _max?: PlanDepartamentoMaxAggregateInputType
  }

  export type PlanDepartamentoGroupByOutputType = {
    id_plan_departamento: number
    id_plan: number
    id_departamento: number
    puntos_requeridos: number
    _count: PlanDepartamentoCountAggregateOutputType | null
    _avg: PlanDepartamentoAvgAggregateOutputType | null
    _sum: PlanDepartamentoSumAggregateOutputType | null
    _min: PlanDepartamentoMinAggregateOutputType | null
    _max: PlanDepartamentoMaxAggregateOutputType | null
  }

  type GetPlanDepartamentoGroupByPayload<T extends PlanDepartamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanDepartamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanDepartamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanDepartamentoGroupByOutputType[P]>
            : GetScalarType<T[P], PlanDepartamentoGroupByOutputType[P]>
        }
      >
    >


  export type PlanDepartamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_plan_departamento?: boolean
    id_plan?: boolean
    id_departamento?: boolean
    puntos_requeridos?: boolean
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planDepartamento"]>

  export type PlanDepartamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_plan_departamento?: boolean
    id_plan?: boolean
    id_departamento?: boolean
    puntos_requeridos?: boolean
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planDepartamento"]>

  export type PlanDepartamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_plan_departamento?: boolean
    id_plan?: boolean
    id_departamento?: boolean
    puntos_requeridos?: boolean
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planDepartamento"]>

  export type PlanDepartamentoSelectScalar = {
    id_plan_departamento?: boolean
    id_plan?: boolean
    id_departamento?: boolean
    puntos_requeridos?: boolean
  }

  export type PlanDepartamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_plan_departamento" | "id_plan" | "id_departamento" | "puntos_requeridos", ExtArgs["result"]["planDepartamento"]>
  export type PlanDepartamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }
  export type PlanDepartamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }
  export type PlanDepartamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDeEstudioDefaultArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }

  export type $PlanDepartamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanDepartamento"
    objects: {
      plan: Prisma.$PlanDeEstudioPayload<ExtArgs>
      departamento: Prisma.$DepartamentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_plan_departamento: number
      id_plan: number
      id_departamento: number
      puntos_requeridos: number
    }, ExtArgs["result"]["planDepartamento"]>
    composites: {}
  }

  type PlanDepartamentoGetPayload<S extends boolean | null | undefined | PlanDepartamentoDefaultArgs> = $Result.GetResult<Prisma.$PlanDepartamentoPayload, S>

  type PlanDepartamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanDepartamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanDepartamentoCountAggregateInputType | true
    }

  export interface PlanDepartamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanDepartamento'], meta: { name: 'PlanDepartamento' } }
    /**
     * Find zero or one PlanDepartamento that matches the filter.
     * @param {PlanDepartamentoFindUniqueArgs} args - Arguments to find a PlanDepartamento
     * @example
     * // Get one PlanDepartamento
     * const planDepartamento = await prisma.planDepartamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanDepartamentoFindUniqueArgs>(args: SelectSubset<T, PlanDepartamentoFindUniqueArgs<ExtArgs>>): Prisma__PlanDepartamentoClient<$Result.GetResult<Prisma.$PlanDepartamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanDepartamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanDepartamentoFindUniqueOrThrowArgs} args - Arguments to find a PlanDepartamento
     * @example
     * // Get one PlanDepartamento
     * const planDepartamento = await prisma.planDepartamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanDepartamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanDepartamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanDepartamentoClient<$Result.GetResult<Prisma.$PlanDepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanDepartamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDepartamentoFindFirstArgs} args - Arguments to find a PlanDepartamento
     * @example
     * // Get one PlanDepartamento
     * const planDepartamento = await prisma.planDepartamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanDepartamentoFindFirstArgs>(args?: SelectSubset<T, PlanDepartamentoFindFirstArgs<ExtArgs>>): Prisma__PlanDepartamentoClient<$Result.GetResult<Prisma.$PlanDepartamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanDepartamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDepartamentoFindFirstOrThrowArgs} args - Arguments to find a PlanDepartamento
     * @example
     * // Get one PlanDepartamento
     * const planDepartamento = await prisma.planDepartamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanDepartamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanDepartamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanDepartamentoClient<$Result.GetResult<Prisma.$PlanDepartamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanDepartamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDepartamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanDepartamentos
     * const planDepartamentos = await prisma.planDepartamento.findMany()
     * 
     * // Get first 10 PlanDepartamentos
     * const planDepartamentos = await prisma.planDepartamento.findMany({ take: 10 })
     * 
     * // Only select the `id_plan_departamento`
     * const planDepartamentoWithId_plan_departamentoOnly = await prisma.planDepartamento.findMany({ select: { id_plan_departamento: true } })
     * 
     */
    findMany<T extends PlanDepartamentoFindManyArgs>(args?: SelectSubset<T, PlanDepartamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanDepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanDepartamento.
     * @param {PlanDepartamentoCreateArgs} args - Arguments to create a PlanDepartamento.
     * @example
     * // Create one PlanDepartamento
     * const PlanDepartamento = await prisma.planDepartamento.create({
     *   data: {
     *     // ... data to create a PlanDepartamento
     *   }
     * })
     * 
     */
    create<T extends PlanDepartamentoCreateArgs>(args: SelectSubset<T, PlanDepartamentoCreateArgs<ExtArgs>>): Prisma__PlanDepartamentoClient<$Result.GetResult<Prisma.$PlanDepartamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanDepartamentos.
     * @param {PlanDepartamentoCreateManyArgs} args - Arguments to create many PlanDepartamentos.
     * @example
     * // Create many PlanDepartamentos
     * const planDepartamento = await prisma.planDepartamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanDepartamentoCreateManyArgs>(args?: SelectSubset<T, PlanDepartamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanDepartamentos and returns the data saved in the database.
     * @param {PlanDepartamentoCreateManyAndReturnArgs} args - Arguments to create many PlanDepartamentos.
     * @example
     * // Create many PlanDepartamentos
     * const planDepartamento = await prisma.planDepartamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanDepartamentos and only return the `id_plan_departamento`
     * const planDepartamentoWithId_plan_departamentoOnly = await prisma.planDepartamento.createManyAndReturn({
     *   select: { id_plan_departamento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanDepartamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanDepartamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanDepartamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanDepartamento.
     * @param {PlanDepartamentoDeleteArgs} args - Arguments to delete one PlanDepartamento.
     * @example
     * // Delete one PlanDepartamento
     * const PlanDepartamento = await prisma.planDepartamento.delete({
     *   where: {
     *     // ... filter to delete one PlanDepartamento
     *   }
     * })
     * 
     */
    delete<T extends PlanDepartamentoDeleteArgs>(args: SelectSubset<T, PlanDepartamentoDeleteArgs<ExtArgs>>): Prisma__PlanDepartamentoClient<$Result.GetResult<Prisma.$PlanDepartamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanDepartamento.
     * @param {PlanDepartamentoUpdateArgs} args - Arguments to update one PlanDepartamento.
     * @example
     * // Update one PlanDepartamento
     * const planDepartamento = await prisma.planDepartamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanDepartamentoUpdateArgs>(args: SelectSubset<T, PlanDepartamentoUpdateArgs<ExtArgs>>): Prisma__PlanDepartamentoClient<$Result.GetResult<Prisma.$PlanDepartamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanDepartamentos.
     * @param {PlanDepartamentoDeleteManyArgs} args - Arguments to filter PlanDepartamentos to delete.
     * @example
     * // Delete a few PlanDepartamentos
     * const { count } = await prisma.planDepartamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDepartamentoDeleteManyArgs>(args?: SelectSubset<T, PlanDepartamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanDepartamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDepartamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanDepartamentos
     * const planDepartamento = await prisma.planDepartamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanDepartamentoUpdateManyArgs>(args: SelectSubset<T, PlanDepartamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanDepartamentos and returns the data updated in the database.
     * @param {PlanDepartamentoUpdateManyAndReturnArgs} args - Arguments to update many PlanDepartamentos.
     * @example
     * // Update many PlanDepartamentos
     * const planDepartamento = await prisma.planDepartamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanDepartamentos and only return the `id_plan_departamento`
     * const planDepartamentoWithId_plan_departamentoOnly = await prisma.planDepartamento.updateManyAndReturn({
     *   select: { id_plan_departamento: true },
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
    updateManyAndReturn<T extends PlanDepartamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanDepartamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanDepartamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanDepartamento.
     * @param {PlanDepartamentoUpsertArgs} args - Arguments to update or create a PlanDepartamento.
     * @example
     * // Update or create a PlanDepartamento
     * const planDepartamento = await prisma.planDepartamento.upsert({
     *   create: {
     *     // ... data to create a PlanDepartamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanDepartamento we want to update
     *   }
     * })
     */
    upsert<T extends PlanDepartamentoUpsertArgs>(args: SelectSubset<T, PlanDepartamentoUpsertArgs<ExtArgs>>): Prisma__PlanDepartamentoClient<$Result.GetResult<Prisma.$PlanDepartamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanDepartamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDepartamentoCountArgs} args - Arguments to filter PlanDepartamentos to count.
     * @example
     * // Count the number of PlanDepartamentos
     * const count = await prisma.planDepartamento.count({
     *   where: {
     *     // ... the filter for the PlanDepartamentos we want to count
     *   }
     * })
    **/
    count<T extends PlanDepartamentoCountArgs>(
      args?: Subset<T, PlanDepartamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanDepartamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanDepartamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDepartamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanDepartamentoAggregateArgs>(args: Subset<T, PlanDepartamentoAggregateArgs>): Prisma.PrismaPromise<GetPlanDepartamentoAggregateType<T>>

    /**
     * Group by PlanDepartamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanDepartamentoGroupByArgs} args - Group by arguments.
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
      T extends PlanDepartamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanDepartamentoGroupByArgs['orderBy'] }
        : { orderBy?: PlanDepartamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanDepartamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanDepartamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanDepartamento model
   */
  readonly fields: PlanDepartamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanDepartamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanDepartamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDeEstudioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDeEstudioDefaultArgs<ExtArgs>>): Prisma__PlanDeEstudioClient<$Result.GetResult<Prisma.$PlanDeEstudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    departamento<T extends DepartamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartamentoDefaultArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlanDepartamento model
   */
  interface PlanDepartamentoFieldRefs {
    readonly id_plan_departamento: FieldRef<"PlanDepartamento", 'Int'>
    readonly id_plan: FieldRef<"PlanDepartamento", 'Int'>
    readonly id_departamento: FieldRef<"PlanDepartamento", 'Int'>
    readonly puntos_requeridos: FieldRef<"PlanDepartamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlanDepartamento findUnique
   */
  export type PlanDepartamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDepartamento
     */
    select?: PlanDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDepartamento
     */
    omit?: PlanDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which PlanDepartamento to fetch.
     */
    where: PlanDepartamentoWhereUniqueInput
  }

  /**
   * PlanDepartamento findUniqueOrThrow
   */
  export type PlanDepartamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDepartamento
     */
    select?: PlanDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDepartamento
     */
    omit?: PlanDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which PlanDepartamento to fetch.
     */
    where: PlanDepartamentoWhereUniqueInput
  }

  /**
   * PlanDepartamento findFirst
   */
  export type PlanDepartamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDepartamento
     */
    select?: PlanDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDepartamento
     */
    omit?: PlanDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which PlanDepartamento to fetch.
     */
    where?: PlanDepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanDepartamentos to fetch.
     */
    orderBy?: PlanDepartamentoOrderByWithRelationInput | PlanDepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanDepartamentos.
     */
    cursor?: PlanDepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanDepartamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanDepartamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanDepartamentos.
     */
    distinct?: PlanDepartamentoScalarFieldEnum | PlanDepartamentoScalarFieldEnum[]
  }

  /**
   * PlanDepartamento findFirstOrThrow
   */
  export type PlanDepartamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDepartamento
     */
    select?: PlanDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDepartamento
     */
    omit?: PlanDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which PlanDepartamento to fetch.
     */
    where?: PlanDepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanDepartamentos to fetch.
     */
    orderBy?: PlanDepartamentoOrderByWithRelationInput | PlanDepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanDepartamentos.
     */
    cursor?: PlanDepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanDepartamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanDepartamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanDepartamentos.
     */
    distinct?: PlanDepartamentoScalarFieldEnum | PlanDepartamentoScalarFieldEnum[]
  }

  /**
   * PlanDepartamento findMany
   */
  export type PlanDepartamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDepartamento
     */
    select?: PlanDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDepartamento
     */
    omit?: PlanDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which PlanDepartamentos to fetch.
     */
    where?: PlanDepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanDepartamentos to fetch.
     */
    orderBy?: PlanDepartamentoOrderByWithRelationInput | PlanDepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanDepartamentos.
     */
    cursor?: PlanDepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanDepartamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanDepartamentos.
     */
    skip?: number
    distinct?: PlanDepartamentoScalarFieldEnum | PlanDepartamentoScalarFieldEnum[]
  }

  /**
   * PlanDepartamento create
   */
  export type PlanDepartamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDepartamento
     */
    select?: PlanDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDepartamento
     */
    omit?: PlanDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanDepartamento.
     */
    data: XOR<PlanDepartamentoCreateInput, PlanDepartamentoUncheckedCreateInput>
  }

  /**
   * PlanDepartamento createMany
   */
  export type PlanDepartamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanDepartamentos.
     */
    data: PlanDepartamentoCreateManyInput | PlanDepartamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanDepartamento createManyAndReturn
   */
  export type PlanDepartamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDepartamento
     */
    select?: PlanDepartamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDepartamento
     */
    omit?: PlanDepartamentoOmit<ExtArgs> | null
    /**
     * The data used to create many PlanDepartamentos.
     */
    data: PlanDepartamentoCreateManyInput | PlanDepartamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDepartamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanDepartamento update
   */
  export type PlanDepartamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDepartamento
     */
    select?: PlanDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDepartamento
     */
    omit?: PlanDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanDepartamento.
     */
    data: XOR<PlanDepartamentoUpdateInput, PlanDepartamentoUncheckedUpdateInput>
    /**
     * Choose, which PlanDepartamento to update.
     */
    where: PlanDepartamentoWhereUniqueInput
  }

  /**
   * PlanDepartamento updateMany
   */
  export type PlanDepartamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanDepartamentos.
     */
    data: XOR<PlanDepartamentoUpdateManyMutationInput, PlanDepartamentoUncheckedUpdateManyInput>
    /**
     * Filter which PlanDepartamentos to update
     */
    where?: PlanDepartamentoWhereInput
    /**
     * Limit how many PlanDepartamentos to update.
     */
    limit?: number
  }

  /**
   * PlanDepartamento updateManyAndReturn
   */
  export type PlanDepartamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDepartamento
     */
    select?: PlanDepartamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDepartamento
     */
    omit?: PlanDepartamentoOmit<ExtArgs> | null
    /**
     * The data used to update PlanDepartamentos.
     */
    data: XOR<PlanDepartamentoUpdateManyMutationInput, PlanDepartamentoUncheckedUpdateManyInput>
    /**
     * Filter which PlanDepartamentos to update
     */
    where?: PlanDepartamentoWhereInput
    /**
     * Limit how many PlanDepartamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDepartamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanDepartamento upsert
   */
  export type PlanDepartamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDepartamento
     */
    select?: PlanDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDepartamento
     */
    omit?: PlanDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDepartamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanDepartamento to update in case it exists.
     */
    where: PlanDepartamentoWhereUniqueInput
    /**
     * In case the PlanDepartamento found by the `where` argument doesn't exist, create a new PlanDepartamento with this data.
     */
    create: XOR<PlanDepartamentoCreateInput, PlanDepartamentoUncheckedCreateInput>
    /**
     * In case the PlanDepartamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanDepartamentoUpdateInput, PlanDepartamentoUncheckedUpdateInput>
  }

  /**
   * PlanDepartamento delete
   */
  export type PlanDepartamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDepartamento
     */
    select?: PlanDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDepartamento
     */
    omit?: PlanDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDepartamentoInclude<ExtArgs> | null
    /**
     * Filter which PlanDepartamento to delete.
     */
    where: PlanDepartamentoWhereUniqueInput
  }

  /**
   * PlanDepartamento deleteMany
   */
  export type PlanDepartamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanDepartamentos to delete
     */
    where?: PlanDepartamentoWhereInput
    /**
     * Limit how many PlanDepartamentos to delete.
     */
    limit?: number
  }

  /**
   * PlanDepartamento without action
   */
  export type PlanDepartamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanDepartamento
     */
    select?: PlanDepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanDepartamento
     */
    omit?: PlanDepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanDepartamentoInclude<ExtArgs> | null
  }


  /**
   * Model RegistroCambios
   */

  export type AggregateRegistroCambios = {
    _count: RegistroCambiosCountAggregateOutputType | null
    _avg: RegistroCambiosAvgAggregateOutputType | null
    _sum: RegistroCambiosSumAggregateOutputType | null
    _min: RegistroCambiosMinAggregateOutputType | null
    _max: RegistroCambiosMaxAggregateOutputType | null
  }

  export type RegistroCambiosAvgAggregateOutputType = {
    id_registro: number | null
    id_usuario: number | null
  }

  export type RegistroCambiosSumAggregateOutputType = {
    id_registro: number | null
    id_usuario: number | null
  }

  export type RegistroCambiosMinAggregateOutputType = {
    id_registro: number | null
    id_usuario: number | null
    modulo: string | null
    accion: string | null
    descripcion: string | null
    fecha: Date | null
  }

  export type RegistroCambiosMaxAggregateOutputType = {
    id_registro: number | null
    id_usuario: number | null
    modulo: string | null
    accion: string | null
    descripcion: string | null
    fecha: Date | null
  }

  export type RegistroCambiosCountAggregateOutputType = {
    id_registro: number
    id_usuario: number
    modulo: number
    accion: number
    descripcion: number
    fecha: number
    _all: number
  }


  export type RegistroCambiosAvgAggregateInputType = {
    id_registro?: true
    id_usuario?: true
  }

  export type RegistroCambiosSumAggregateInputType = {
    id_registro?: true
    id_usuario?: true
  }

  export type RegistroCambiosMinAggregateInputType = {
    id_registro?: true
    id_usuario?: true
    modulo?: true
    accion?: true
    descripcion?: true
    fecha?: true
  }

  export type RegistroCambiosMaxAggregateInputType = {
    id_registro?: true
    id_usuario?: true
    modulo?: true
    accion?: true
    descripcion?: true
    fecha?: true
  }

  export type RegistroCambiosCountAggregateInputType = {
    id_registro?: true
    id_usuario?: true
    modulo?: true
    accion?: true
    descripcion?: true
    fecha?: true
    _all?: true
  }

  export type RegistroCambiosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroCambios to aggregate.
     */
    where?: RegistroCambiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroCambios to fetch.
     */
    orderBy?: RegistroCambiosOrderByWithRelationInput | RegistroCambiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroCambiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroCambios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroCambios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroCambios
    **/
    _count?: true | RegistroCambiosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistroCambiosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistroCambiosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroCambiosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroCambiosMaxAggregateInputType
  }

  export type GetRegistroCambiosAggregateType<T extends RegistroCambiosAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroCambios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroCambios[P]>
      : GetScalarType<T[P], AggregateRegistroCambios[P]>
  }




  export type RegistroCambiosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroCambiosWhereInput
    orderBy?: RegistroCambiosOrderByWithAggregationInput | RegistroCambiosOrderByWithAggregationInput[]
    by: RegistroCambiosScalarFieldEnum[] | RegistroCambiosScalarFieldEnum
    having?: RegistroCambiosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroCambiosCountAggregateInputType | true
    _avg?: RegistroCambiosAvgAggregateInputType
    _sum?: RegistroCambiosSumAggregateInputType
    _min?: RegistroCambiosMinAggregateInputType
    _max?: RegistroCambiosMaxAggregateInputType
  }

  export type RegistroCambiosGroupByOutputType = {
    id_registro: number
    id_usuario: number
    modulo: string
    accion: string
    descripcion: string | null
    fecha: Date
    _count: RegistroCambiosCountAggregateOutputType | null
    _avg: RegistroCambiosAvgAggregateOutputType | null
    _sum: RegistroCambiosSumAggregateOutputType | null
    _min: RegistroCambiosMinAggregateOutputType | null
    _max: RegistroCambiosMaxAggregateOutputType | null
  }

  type GetRegistroCambiosGroupByPayload<T extends RegistroCambiosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroCambiosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroCambiosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroCambiosGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroCambiosGroupByOutputType[P]>
        }
      >
    >


  export type RegistroCambiosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_registro?: boolean
    id_usuario?: boolean
    modulo?: boolean
    accion?: boolean
    descripcion?: boolean
    fecha?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroCambios"]>

  export type RegistroCambiosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_registro?: boolean
    id_usuario?: boolean
    modulo?: boolean
    accion?: boolean
    descripcion?: boolean
    fecha?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroCambios"]>

  export type RegistroCambiosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_registro?: boolean
    id_usuario?: boolean
    modulo?: boolean
    accion?: boolean
    descripcion?: boolean
    fecha?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroCambios"]>

  export type RegistroCambiosSelectScalar = {
    id_registro?: boolean
    id_usuario?: boolean
    modulo?: boolean
    accion?: boolean
    descripcion?: boolean
    fecha?: boolean
  }

  export type RegistroCambiosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_registro" | "id_usuario" | "modulo" | "accion" | "descripcion" | "fecha", ExtArgs["result"]["registroCambios"]>
  export type RegistroCambiosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RegistroCambiosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RegistroCambiosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $RegistroCambiosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroCambios"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_registro: number
      id_usuario: number
      modulo: string
      accion: string
      descripcion: string | null
      fecha: Date
    }, ExtArgs["result"]["registroCambios"]>
    composites: {}
  }

  type RegistroCambiosGetPayload<S extends boolean | null | undefined | RegistroCambiosDefaultArgs> = $Result.GetResult<Prisma.$RegistroCambiosPayload, S>

  type RegistroCambiosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroCambiosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroCambiosCountAggregateInputType | true
    }

  export interface RegistroCambiosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroCambios'], meta: { name: 'RegistroCambios' } }
    /**
     * Find zero or one RegistroCambios that matches the filter.
     * @param {RegistroCambiosFindUniqueArgs} args - Arguments to find a RegistroCambios
     * @example
     * // Get one RegistroCambios
     * const registroCambios = await prisma.registroCambios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroCambiosFindUniqueArgs>(args: SelectSubset<T, RegistroCambiosFindUniqueArgs<ExtArgs>>): Prisma__RegistroCambiosClient<$Result.GetResult<Prisma.$RegistroCambiosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroCambios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroCambiosFindUniqueOrThrowArgs} args - Arguments to find a RegistroCambios
     * @example
     * // Get one RegistroCambios
     * const registroCambios = await prisma.registroCambios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroCambiosFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroCambiosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroCambiosClient<$Result.GetResult<Prisma.$RegistroCambiosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroCambios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCambiosFindFirstArgs} args - Arguments to find a RegistroCambios
     * @example
     * // Get one RegistroCambios
     * const registroCambios = await prisma.registroCambios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroCambiosFindFirstArgs>(args?: SelectSubset<T, RegistroCambiosFindFirstArgs<ExtArgs>>): Prisma__RegistroCambiosClient<$Result.GetResult<Prisma.$RegistroCambiosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroCambios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCambiosFindFirstOrThrowArgs} args - Arguments to find a RegistroCambios
     * @example
     * // Get one RegistroCambios
     * const registroCambios = await prisma.registroCambios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroCambiosFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroCambiosFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroCambiosClient<$Result.GetResult<Prisma.$RegistroCambiosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroCambios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCambiosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroCambios
     * const registroCambios = await prisma.registroCambios.findMany()
     * 
     * // Get first 10 RegistroCambios
     * const registroCambios = await prisma.registroCambios.findMany({ take: 10 })
     * 
     * // Only select the `id_registro`
     * const registroCambiosWithId_registroOnly = await prisma.registroCambios.findMany({ select: { id_registro: true } })
     * 
     */
    findMany<T extends RegistroCambiosFindManyArgs>(args?: SelectSubset<T, RegistroCambiosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroCambiosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroCambios.
     * @param {RegistroCambiosCreateArgs} args - Arguments to create a RegistroCambios.
     * @example
     * // Create one RegistroCambios
     * const RegistroCambios = await prisma.registroCambios.create({
     *   data: {
     *     // ... data to create a RegistroCambios
     *   }
     * })
     * 
     */
    create<T extends RegistroCambiosCreateArgs>(args: SelectSubset<T, RegistroCambiosCreateArgs<ExtArgs>>): Prisma__RegistroCambiosClient<$Result.GetResult<Prisma.$RegistroCambiosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroCambios.
     * @param {RegistroCambiosCreateManyArgs} args - Arguments to create many RegistroCambios.
     * @example
     * // Create many RegistroCambios
     * const registroCambios = await prisma.registroCambios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroCambiosCreateManyArgs>(args?: SelectSubset<T, RegistroCambiosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistroCambios and returns the data saved in the database.
     * @param {RegistroCambiosCreateManyAndReturnArgs} args - Arguments to create many RegistroCambios.
     * @example
     * // Create many RegistroCambios
     * const registroCambios = await prisma.registroCambios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistroCambios and only return the `id_registro`
     * const registroCambiosWithId_registroOnly = await prisma.registroCambios.createManyAndReturn({
     *   select: { id_registro: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroCambiosCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroCambiosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroCambiosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistroCambios.
     * @param {RegistroCambiosDeleteArgs} args - Arguments to delete one RegistroCambios.
     * @example
     * // Delete one RegistroCambios
     * const RegistroCambios = await prisma.registroCambios.delete({
     *   where: {
     *     // ... filter to delete one RegistroCambios
     *   }
     * })
     * 
     */
    delete<T extends RegistroCambiosDeleteArgs>(args: SelectSubset<T, RegistroCambiosDeleteArgs<ExtArgs>>): Prisma__RegistroCambiosClient<$Result.GetResult<Prisma.$RegistroCambiosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroCambios.
     * @param {RegistroCambiosUpdateArgs} args - Arguments to update one RegistroCambios.
     * @example
     * // Update one RegistroCambios
     * const registroCambios = await prisma.registroCambios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroCambiosUpdateArgs>(args: SelectSubset<T, RegistroCambiosUpdateArgs<ExtArgs>>): Prisma__RegistroCambiosClient<$Result.GetResult<Prisma.$RegistroCambiosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroCambios.
     * @param {RegistroCambiosDeleteManyArgs} args - Arguments to filter RegistroCambios to delete.
     * @example
     * // Delete a few RegistroCambios
     * const { count } = await prisma.registroCambios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroCambiosDeleteManyArgs>(args?: SelectSubset<T, RegistroCambiosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroCambios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCambiosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroCambios
     * const registroCambios = await prisma.registroCambios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroCambiosUpdateManyArgs>(args: SelectSubset<T, RegistroCambiosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroCambios and returns the data updated in the database.
     * @param {RegistroCambiosUpdateManyAndReturnArgs} args - Arguments to update many RegistroCambios.
     * @example
     * // Update many RegistroCambios
     * const registroCambios = await prisma.registroCambios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistroCambios and only return the `id_registro`
     * const registroCambiosWithId_registroOnly = await prisma.registroCambios.updateManyAndReturn({
     *   select: { id_registro: true },
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
    updateManyAndReturn<T extends RegistroCambiosUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistroCambiosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroCambiosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistroCambios.
     * @param {RegistroCambiosUpsertArgs} args - Arguments to update or create a RegistroCambios.
     * @example
     * // Update or create a RegistroCambios
     * const registroCambios = await prisma.registroCambios.upsert({
     *   create: {
     *     // ... data to create a RegistroCambios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroCambios we want to update
     *   }
     * })
     */
    upsert<T extends RegistroCambiosUpsertArgs>(args: SelectSubset<T, RegistroCambiosUpsertArgs<ExtArgs>>): Prisma__RegistroCambiosClient<$Result.GetResult<Prisma.$RegistroCambiosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroCambios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCambiosCountArgs} args - Arguments to filter RegistroCambios to count.
     * @example
     * // Count the number of RegistroCambios
     * const count = await prisma.registroCambios.count({
     *   where: {
     *     // ... the filter for the RegistroCambios we want to count
     *   }
     * })
    **/
    count<T extends RegistroCambiosCountArgs>(
      args?: Subset<T, RegistroCambiosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroCambiosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroCambios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCambiosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroCambiosAggregateArgs>(args: Subset<T, RegistroCambiosAggregateArgs>): Prisma.PrismaPromise<GetRegistroCambiosAggregateType<T>>

    /**
     * Group by RegistroCambios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCambiosGroupByArgs} args - Group by arguments.
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
      T extends RegistroCambiosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroCambiosGroupByArgs['orderBy'] }
        : { orderBy?: RegistroCambiosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroCambiosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroCambiosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroCambios model
   */
  readonly fields: RegistroCambiosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroCambios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroCambiosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RegistroCambios model
   */
  interface RegistroCambiosFieldRefs {
    readonly id_registro: FieldRef<"RegistroCambios", 'Int'>
    readonly id_usuario: FieldRef<"RegistroCambios", 'Int'>
    readonly modulo: FieldRef<"RegistroCambios", 'String'>
    readonly accion: FieldRef<"RegistroCambios", 'String'>
    readonly descripcion: FieldRef<"RegistroCambios", 'String'>
    readonly fecha: FieldRef<"RegistroCambios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistroCambios findUnique
   */
  export type RegistroCambiosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCambios
     */
    select?: RegistroCambiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCambios
     */
    omit?: RegistroCambiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCambiosInclude<ExtArgs> | null
    /**
     * Filter, which RegistroCambios to fetch.
     */
    where: RegistroCambiosWhereUniqueInput
  }

  /**
   * RegistroCambios findUniqueOrThrow
   */
  export type RegistroCambiosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCambios
     */
    select?: RegistroCambiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCambios
     */
    omit?: RegistroCambiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCambiosInclude<ExtArgs> | null
    /**
     * Filter, which RegistroCambios to fetch.
     */
    where: RegistroCambiosWhereUniqueInput
  }

  /**
   * RegistroCambios findFirst
   */
  export type RegistroCambiosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCambios
     */
    select?: RegistroCambiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCambios
     */
    omit?: RegistroCambiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCambiosInclude<ExtArgs> | null
    /**
     * Filter, which RegistroCambios to fetch.
     */
    where?: RegistroCambiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroCambios to fetch.
     */
    orderBy?: RegistroCambiosOrderByWithRelationInput | RegistroCambiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroCambios.
     */
    cursor?: RegistroCambiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroCambios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroCambios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroCambios.
     */
    distinct?: RegistroCambiosScalarFieldEnum | RegistroCambiosScalarFieldEnum[]
  }

  /**
   * RegistroCambios findFirstOrThrow
   */
  export type RegistroCambiosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCambios
     */
    select?: RegistroCambiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCambios
     */
    omit?: RegistroCambiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCambiosInclude<ExtArgs> | null
    /**
     * Filter, which RegistroCambios to fetch.
     */
    where?: RegistroCambiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroCambios to fetch.
     */
    orderBy?: RegistroCambiosOrderByWithRelationInput | RegistroCambiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroCambios.
     */
    cursor?: RegistroCambiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroCambios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroCambios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroCambios.
     */
    distinct?: RegistroCambiosScalarFieldEnum | RegistroCambiosScalarFieldEnum[]
  }

  /**
   * RegistroCambios findMany
   */
  export type RegistroCambiosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCambios
     */
    select?: RegistroCambiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCambios
     */
    omit?: RegistroCambiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCambiosInclude<ExtArgs> | null
    /**
     * Filter, which RegistroCambios to fetch.
     */
    where?: RegistroCambiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroCambios to fetch.
     */
    orderBy?: RegistroCambiosOrderByWithRelationInput | RegistroCambiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroCambios.
     */
    cursor?: RegistroCambiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroCambios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroCambios.
     */
    skip?: number
    distinct?: RegistroCambiosScalarFieldEnum | RegistroCambiosScalarFieldEnum[]
  }

  /**
   * RegistroCambios create
   */
  export type RegistroCambiosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCambios
     */
    select?: RegistroCambiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCambios
     */
    omit?: RegistroCambiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCambiosInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistroCambios.
     */
    data: XOR<RegistroCambiosCreateInput, RegistroCambiosUncheckedCreateInput>
  }

  /**
   * RegistroCambios createMany
   */
  export type RegistroCambiosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroCambios.
     */
    data: RegistroCambiosCreateManyInput | RegistroCambiosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroCambios createManyAndReturn
   */
  export type RegistroCambiosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCambios
     */
    select?: RegistroCambiosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCambios
     */
    omit?: RegistroCambiosOmit<ExtArgs> | null
    /**
     * The data used to create many RegistroCambios.
     */
    data: RegistroCambiosCreateManyInput | RegistroCambiosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCambiosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroCambios update
   */
  export type RegistroCambiosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCambios
     */
    select?: RegistroCambiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCambios
     */
    omit?: RegistroCambiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCambiosInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistroCambios.
     */
    data: XOR<RegistroCambiosUpdateInput, RegistroCambiosUncheckedUpdateInput>
    /**
     * Choose, which RegistroCambios to update.
     */
    where: RegistroCambiosWhereUniqueInput
  }

  /**
   * RegistroCambios updateMany
   */
  export type RegistroCambiosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroCambios.
     */
    data: XOR<RegistroCambiosUpdateManyMutationInput, RegistroCambiosUncheckedUpdateManyInput>
    /**
     * Filter which RegistroCambios to update
     */
    where?: RegistroCambiosWhereInput
    /**
     * Limit how many RegistroCambios to update.
     */
    limit?: number
  }

  /**
   * RegistroCambios updateManyAndReturn
   */
  export type RegistroCambiosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCambios
     */
    select?: RegistroCambiosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCambios
     */
    omit?: RegistroCambiosOmit<ExtArgs> | null
    /**
     * The data used to update RegistroCambios.
     */
    data: XOR<RegistroCambiosUpdateManyMutationInput, RegistroCambiosUncheckedUpdateManyInput>
    /**
     * Filter which RegistroCambios to update
     */
    where?: RegistroCambiosWhereInput
    /**
     * Limit how many RegistroCambios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCambiosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroCambios upsert
   */
  export type RegistroCambiosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCambios
     */
    select?: RegistroCambiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCambios
     */
    omit?: RegistroCambiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCambiosInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistroCambios to update in case it exists.
     */
    where: RegistroCambiosWhereUniqueInput
    /**
     * In case the RegistroCambios found by the `where` argument doesn't exist, create a new RegistroCambios with this data.
     */
    create: XOR<RegistroCambiosCreateInput, RegistroCambiosUncheckedCreateInput>
    /**
     * In case the RegistroCambios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroCambiosUpdateInput, RegistroCambiosUncheckedUpdateInput>
  }

  /**
   * RegistroCambios delete
   */
  export type RegistroCambiosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCambios
     */
    select?: RegistroCambiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCambios
     */
    omit?: RegistroCambiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCambiosInclude<ExtArgs> | null
    /**
     * Filter which RegistroCambios to delete.
     */
    where: RegistroCambiosWhereUniqueInput
  }

  /**
   * RegistroCambios deleteMany
   */
  export type RegistroCambiosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroCambios to delete
     */
    where?: RegistroCambiosWhereInput
    /**
     * Limit how many RegistroCambios to delete.
     */
    limit?: number
  }

  /**
   * RegistroCambios without action
   */
  export type RegistroCambiosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCambios
     */
    select?: RegistroCambiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCambios
     */
    omit?: RegistroCambiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCambiosInclude<ExtArgs> | null
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


  export const EscuelaScalarFieldEnum: {
    id_escuela: 'id_escuela',
    nombre: 'nombre',
    clave: 'clave',
    estado: 'estado'
  };

  export type EscuelaScalarFieldEnum = (typeof EscuelaScalarFieldEnum)[keyof typeof EscuelaScalarFieldEnum]


  export const PlanDeEstudioScalarFieldEnum: {
    id_plan: 'id_plan',
    nombre: 'nombre',
    descripcion: 'descripcion',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin',
    id_escuela: 'id_escuela'
  };

  export type PlanDeEstudioScalarFieldEnum = (typeof PlanDeEstudioScalarFieldEnum)[keyof typeof PlanDeEstudioScalarFieldEnum]


  export const CicloScalarFieldEnum: {
    id_ciclo: 'id_ciclo',
    nombre: 'nombre',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin',
    tipo: 'tipo',
    activo: 'activo',
    id_plan: 'id_plan'
  };

  export type CicloScalarFieldEnum = (typeof CicloScalarFieldEnum)[keyof typeof CicloScalarFieldEnum]


  export const GeneracionScalarFieldEnum: {
    id_generacion: 'id_generacion',
    nombre: 'nombre',
    ano_inicio: 'ano_inicio',
    ano_fin: 'ano_fin',
    id_plan: 'id_plan',
    id_escuela: 'id_escuela'
  };

  export type GeneracionScalarFieldEnum = (typeof GeneracionScalarFieldEnum)[keyof typeof GeneracionScalarFieldEnum]


  export const DepartamentoScalarFieldEnum: {
    id_departamento: 'id_departamento',
    nombre: 'nombre',
    descripcion: 'descripcion',
    id_escuela: 'id_escuela'
  };

  export type DepartamentoScalarFieldEnum = (typeof DepartamentoScalarFieldEnum)[keyof typeof DepartamentoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    num_cuenta: 'num_cuenta',
    nip: 'nip',
    nombre: 'nombre',
    correo: 'correo',
    rol: 'rol',
    id_escuela: 'id_escuela',
    id_grupo: 'id_grupo',
    activo: 'activo',
    generacionId_generacion: 'generacionId_generacion'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const GrupoScalarFieldEnum: {
    id_grupo: 'id_grupo',
    nombre: 'nombre',
    nivel: 'nivel',
    turno: 'turno',
    id_generacion: 'id_generacion',
    id_ciclo: 'id_ciclo',
    id_plan: 'id_plan',
    id_escuela: 'id_escuela',
    fase: 'fase',
    activo: 'activo'
  };

  export type GrupoScalarFieldEnum = (typeof GrupoScalarFieldEnum)[keyof typeof GrupoScalarFieldEnum]


  export const ActividadScalarFieldEnum: {
    id_actividad: 'id_actividad',
    nombre: 'nombre',
    descripcion: 'descripcion',
    fecha: 'fecha',
    puntos: 'puntos',
    id_departamento: 'id_departamento',
    id_coordinador: 'id_coordinador',
    id_ciclo: 'id_ciclo'
  };

  export type ActividadScalarFieldEnum = (typeof ActividadScalarFieldEnum)[keyof typeof ActividadScalarFieldEnum]


  export const AlumnoActividadScalarFieldEnum: {
    id_alumno_actividad: 'id_alumno_actividad',
    id_alumno: 'id_alumno',
    id_actividad: 'id_actividad',
    puntos_otorgados: 'puntos_otorgados',
    fecha_registro: 'fecha_registro',
    id_coordinador: 'id_coordinador',
    id_ciclo: 'id_ciclo'
  };

  export type AlumnoActividadScalarFieldEnum = (typeof AlumnoActividadScalarFieldEnum)[keyof typeof AlumnoActividadScalarFieldEnum]


  export const PlanDepartamentoScalarFieldEnum: {
    id_plan_departamento: 'id_plan_departamento',
    id_plan: 'id_plan',
    id_departamento: 'id_departamento',
    puntos_requeridos: 'puntos_requeridos'
  };

  export type PlanDepartamentoScalarFieldEnum = (typeof PlanDepartamentoScalarFieldEnum)[keyof typeof PlanDepartamentoScalarFieldEnum]


  export const RegistroCambiosScalarFieldEnum: {
    id_registro: 'id_registro',
    id_usuario: 'id_usuario',
    modulo: 'modulo',
    accion: 'accion',
    descripcion: 'descripcion',
    fecha: 'fecha'
  };

  export type RegistroCambiosScalarFieldEnum = (typeof RegistroCambiosScalarFieldEnum)[keyof typeof RegistroCambiosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TipoCiclo'
   */
  export type EnumTipoCicloFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCiclo'>
    


  /**
   * Reference to a field of type 'TipoCiclo[]'
   */
  export type ListEnumTipoCicloFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCiclo[]'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'Turno'
   */
  export type EnumTurnoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Turno'>
    


  /**
   * Reference to a field of type 'Turno[]'
   */
  export type ListEnumTurnoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Turno[]'>
    


  /**
   * Reference to a field of type 'Fase'
   */
  export type EnumFaseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Fase'>
    


  /**
   * Reference to a field of type 'Fase[]'
   */
  export type ListEnumFaseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Fase[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EscuelaWhereInput = {
    AND?: EscuelaWhereInput | EscuelaWhereInput[]
    OR?: EscuelaWhereInput[]
    NOT?: EscuelaWhereInput | EscuelaWhereInput[]
    id_escuela?: IntFilter<"Escuela"> | number
    nombre?: StringFilter<"Escuela"> | string
    clave?: StringNullableFilter<"Escuela"> | string | null
    estado?: BoolFilter<"Escuela"> | boolean
    planes?: PlanDeEstudioListRelationFilter
    departamentos?: DepartamentoListRelationFilter
    usuarios?: UsuarioListRelationFilter
    generaciones?: GeneracionListRelationFilter
    grupos?: GrupoListRelationFilter
  }

  export type EscuelaOrderByWithRelationInput = {
    id_escuela?: SortOrder
    nombre?: SortOrder
    clave?: SortOrderInput | SortOrder
    estado?: SortOrder
    planes?: PlanDeEstudioOrderByRelationAggregateInput
    departamentos?: DepartamentoOrderByRelationAggregateInput
    usuarios?: UsuarioOrderByRelationAggregateInput
    generaciones?: GeneracionOrderByRelationAggregateInput
    grupos?: GrupoOrderByRelationAggregateInput
  }

  export type EscuelaWhereUniqueInput = Prisma.AtLeast<{
    id_escuela?: number
    AND?: EscuelaWhereInput | EscuelaWhereInput[]
    OR?: EscuelaWhereInput[]
    NOT?: EscuelaWhereInput | EscuelaWhereInput[]
    nombre?: StringFilter<"Escuela"> | string
    clave?: StringNullableFilter<"Escuela"> | string | null
    estado?: BoolFilter<"Escuela"> | boolean
    planes?: PlanDeEstudioListRelationFilter
    departamentos?: DepartamentoListRelationFilter
    usuarios?: UsuarioListRelationFilter
    generaciones?: GeneracionListRelationFilter
    grupos?: GrupoListRelationFilter
  }, "id_escuela">

  export type EscuelaOrderByWithAggregationInput = {
    id_escuela?: SortOrder
    nombre?: SortOrder
    clave?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: EscuelaCountOrderByAggregateInput
    _avg?: EscuelaAvgOrderByAggregateInput
    _max?: EscuelaMaxOrderByAggregateInput
    _min?: EscuelaMinOrderByAggregateInput
    _sum?: EscuelaSumOrderByAggregateInput
  }

  export type EscuelaScalarWhereWithAggregatesInput = {
    AND?: EscuelaScalarWhereWithAggregatesInput | EscuelaScalarWhereWithAggregatesInput[]
    OR?: EscuelaScalarWhereWithAggregatesInput[]
    NOT?: EscuelaScalarWhereWithAggregatesInput | EscuelaScalarWhereWithAggregatesInput[]
    id_escuela?: IntWithAggregatesFilter<"Escuela"> | number
    nombre?: StringWithAggregatesFilter<"Escuela"> | string
    clave?: StringNullableWithAggregatesFilter<"Escuela"> | string | null
    estado?: BoolWithAggregatesFilter<"Escuela"> | boolean
  }

  export type PlanDeEstudioWhereInput = {
    AND?: PlanDeEstudioWhereInput | PlanDeEstudioWhereInput[]
    OR?: PlanDeEstudioWhereInput[]
    NOT?: PlanDeEstudioWhereInput | PlanDeEstudioWhereInput[]
    id_plan?: IntFilter<"PlanDeEstudio"> | number
    nombre?: StringFilter<"PlanDeEstudio"> | string
    descripcion?: StringNullableFilter<"PlanDeEstudio"> | string | null
    fecha_inicio?: DateTimeFilter<"PlanDeEstudio"> | Date | string
    fecha_fin?: DateTimeNullableFilter<"PlanDeEstudio"> | Date | string | null
    id_escuela?: IntFilter<"PlanDeEstudio"> | number
    escuela?: XOR<EscuelaScalarRelationFilter, EscuelaWhereInput>
    ciclos?: CicloListRelationFilter
    generaciones?: GeneracionListRelationFilter
    planDeptos?: PlanDepartamentoListRelationFilter
    grupos?: GrupoListRelationFilter
  }

  export type PlanDeEstudioOrderByWithRelationInput = {
    id_plan?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrderInput | SortOrder
    id_escuela?: SortOrder
    escuela?: EscuelaOrderByWithRelationInput
    ciclos?: CicloOrderByRelationAggregateInput
    generaciones?: GeneracionOrderByRelationAggregateInput
    planDeptos?: PlanDepartamentoOrderByRelationAggregateInput
    grupos?: GrupoOrderByRelationAggregateInput
  }

  export type PlanDeEstudioWhereUniqueInput = Prisma.AtLeast<{
    id_plan?: number
    AND?: PlanDeEstudioWhereInput | PlanDeEstudioWhereInput[]
    OR?: PlanDeEstudioWhereInput[]
    NOT?: PlanDeEstudioWhereInput | PlanDeEstudioWhereInput[]
    nombre?: StringFilter<"PlanDeEstudio"> | string
    descripcion?: StringNullableFilter<"PlanDeEstudio"> | string | null
    fecha_inicio?: DateTimeFilter<"PlanDeEstudio"> | Date | string
    fecha_fin?: DateTimeNullableFilter<"PlanDeEstudio"> | Date | string | null
    id_escuela?: IntFilter<"PlanDeEstudio"> | number
    escuela?: XOR<EscuelaScalarRelationFilter, EscuelaWhereInput>
    ciclos?: CicloListRelationFilter
    generaciones?: GeneracionListRelationFilter
    planDeptos?: PlanDepartamentoListRelationFilter
    grupos?: GrupoListRelationFilter
  }, "id_plan">

  export type PlanDeEstudioOrderByWithAggregationInput = {
    id_plan?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrderInput | SortOrder
    id_escuela?: SortOrder
    _count?: PlanDeEstudioCountOrderByAggregateInput
    _avg?: PlanDeEstudioAvgOrderByAggregateInput
    _max?: PlanDeEstudioMaxOrderByAggregateInput
    _min?: PlanDeEstudioMinOrderByAggregateInput
    _sum?: PlanDeEstudioSumOrderByAggregateInput
  }

  export type PlanDeEstudioScalarWhereWithAggregatesInput = {
    AND?: PlanDeEstudioScalarWhereWithAggregatesInput | PlanDeEstudioScalarWhereWithAggregatesInput[]
    OR?: PlanDeEstudioScalarWhereWithAggregatesInput[]
    NOT?: PlanDeEstudioScalarWhereWithAggregatesInput | PlanDeEstudioScalarWhereWithAggregatesInput[]
    id_plan?: IntWithAggregatesFilter<"PlanDeEstudio"> | number
    nombre?: StringWithAggregatesFilter<"PlanDeEstudio"> | string
    descripcion?: StringNullableWithAggregatesFilter<"PlanDeEstudio"> | string | null
    fecha_inicio?: DateTimeWithAggregatesFilter<"PlanDeEstudio"> | Date | string
    fecha_fin?: DateTimeNullableWithAggregatesFilter<"PlanDeEstudio"> | Date | string | null
    id_escuela?: IntWithAggregatesFilter<"PlanDeEstudio"> | number
  }

  export type CicloWhereInput = {
    AND?: CicloWhereInput | CicloWhereInput[]
    OR?: CicloWhereInput[]
    NOT?: CicloWhereInput | CicloWhereInput[]
    id_ciclo?: IntFilter<"Ciclo"> | number
    nombre?: StringFilter<"Ciclo"> | string
    fecha_inicio?: DateTimeFilter<"Ciclo"> | Date | string
    fecha_fin?: DateTimeFilter<"Ciclo"> | Date | string
    tipo?: EnumTipoCicloFilter<"Ciclo"> | $Enums.TipoCiclo
    activo?: BoolFilter<"Ciclo"> | boolean
    id_plan?: IntFilter<"Ciclo"> | number
    plan?: XOR<PlanDeEstudioScalarRelationFilter, PlanDeEstudioWhereInput>
    grupos?: GrupoListRelationFilter
    actividades?: ActividadListRelationFilter
    alumnoActs?: AlumnoActividadListRelationFilter
  }

  export type CicloOrderByWithRelationInput = {
    id_ciclo?: SortOrder
    nombre?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    tipo?: SortOrder
    activo?: SortOrder
    id_plan?: SortOrder
    plan?: PlanDeEstudioOrderByWithRelationInput
    grupos?: GrupoOrderByRelationAggregateInput
    actividades?: ActividadOrderByRelationAggregateInput
    alumnoActs?: AlumnoActividadOrderByRelationAggregateInput
  }

  export type CicloWhereUniqueInput = Prisma.AtLeast<{
    id_ciclo?: number
    AND?: CicloWhereInput | CicloWhereInput[]
    OR?: CicloWhereInput[]
    NOT?: CicloWhereInput | CicloWhereInput[]
    nombre?: StringFilter<"Ciclo"> | string
    fecha_inicio?: DateTimeFilter<"Ciclo"> | Date | string
    fecha_fin?: DateTimeFilter<"Ciclo"> | Date | string
    tipo?: EnumTipoCicloFilter<"Ciclo"> | $Enums.TipoCiclo
    activo?: BoolFilter<"Ciclo"> | boolean
    id_plan?: IntFilter<"Ciclo"> | number
    plan?: XOR<PlanDeEstudioScalarRelationFilter, PlanDeEstudioWhereInput>
    grupos?: GrupoListRelationFilter
    actividades?: ActividadListRelationFilter
    alumnoActs?: AlumnoActividadListRelationFilter
  }, "id_ciclo">

  export type CicloOrderByWithAggregationInput = {
    id_ciclo?: SortOrder
    nombre?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    tipo?: SortOrder
    activo?: SortOrder
    id_plan?: SortOrder
    _count?: CicloCountOrderByAggregateInput
    _avg?: CicloAvgOrderByAggregateInput
    _max?: CicloMaxOrderByAggregateInput
    _min?: CicloMinOrderByAggregateInput
    _sum?: CicloSumOrderByAggregateInput
  }

  export type CicloScalarWhereWithAggregatesInput = {
    AND?: CicloScalarWhereWithAggregatesInput | CicloScalarWhereWithAggregatesInput[]
    OR?: CicloScalarWhereWithAggregatesInput[]
    NOT?: CicloScalarWhereWithAggregatesInput | CicloScalarWhereWithAggregatesInput[]
    id_ciclo?: IntWithAggregatesFilter<"Ciclo"> | number
    nombre?: StringWithAggregatesFilter<"Ciclo"> | string
    fecha_inicio?: DateTimeWithAggregatesFilter<"Ciclo"> | Date | string
    fecha_fin?: DateTimeWithAggregatesFilter<"Ciclo"> | Date | string
    tipo?: EnumTipoCicloWithAggregatesFilter<"Ciclo"> | $Enums.TipoCiclo
    activo?: BoolWithAggregatesFilter<"Ciclo"> | boolean
    id_plan?: IntWithAggregatesFilter<"Ciclo"> | number
  }

  export type GeneracionWhereInput = {
    AND?: GeneracionWhereInput | GeneracionWhereInput[]
    OR?: GeneracionWhereInput[]
    NOT?: GeneracionWhereInput | GeneracionWhereInput[]
    id_generacion?: IntFilter<"Generacion"> | number
    nombre?: StringFilter<"Generacion"> | string
    ano_inicio?: IntFilter<"Generacion"> | number
    ano_fin?: IntFilter<"Generacion"> | number
    id_plan?: IntFilter<"Generacion"> | number
    id_escuela?: IntFilter<"Generacion"> | number
    plan?: XOR<PlanDeEstudioScalarRelationFilter, PlanDeEstudioWhereInput>
    escuela?: XOR<EscuelaScalarRelationFilter, EscuelaWhereInput>
    grupos?: GrupoListRelationFilter
    alumnos?: UsuarioListRelationFilter
  }

  export type GeneracionOrderByWithRelationInput = {
    id_generacion?: SortOrder
    nombre?: SortOrder
    ano_inicio?: SortOrder
    ano_fin?: SortOrder
    id_plan?: SortOrder
    id_escuela?: SortOrder
    plan?: PlanDeEstudioOrderByWithRelationInput
    escuela?: EscuelaOrderByWithRelationInput
    grupos?: GrupoOrderByRelationAggregateInput
    alumnos?: UsuarioOrderByRelationAggregateInput
  }

  export type GeneracionWhereUniqueInput = Prisma.AtLeast<{
    id_generacion?: number
    AND?: GeneracionWhereInput | GeneracionWhereInput[]
    OR?: GeneracionWhereInput[]
    NOT?: GeneracionWhereInput | GeneracionWhereInput[]
    nombre?: StringFilter<"Generacion"> | string
    ano_inicio?: IntFilter<"Generacion"> | number
    ano_fin?: IntFilter<"Generacion"> | number
    id_plan?: IntFilter<"Generacion"> | number
    id_escuela?: IntFilter<"Generacion"> | number
    plan?: XOR<PlanDeEstudioScalarRelationFilter, PlanDeEstudioWhereInput>
    escuela?: XOR<EscuelaScalarRelationFilter, EscuelaWhereInput>
    grupos?: GrupoListRelationFilter
    alumnos?: UsuarioListRelationFilter
  }, "id_generacion">

  export type GeneracionOrderByWithAggregationInput = {
    id_generacion?: SortOrder
    nombre?: SortOrder
    ano_inicio?: SortOrder
    ano_fin?: SortOrder
    id_plan?: SortOrder
    id_escuela?: SortOrder
    _count?: GeneracionCountOrderByAggregateInput
    _avg?: GeneracionAvgOrderByAggregateInput
    _max?: GeneracionMaxOrderByAggregateInput
    _min?: GeneracionMinOrderByAggregateInput
    _sum?: GeneracionSumOrderByAggregateInput
  }

  export type GeneracionScalarWhereWithAggregatesInput = {
    AND?: GeneracionScalarWhereWithAggregatesInput | GeneracionScalarWhereWithAggregatesInput[]
    OR?: GeneracionScalarWhereWithAggregatesInput[]
    NOT?: GeneracionScalarWhereWithAggregatesInput | GeneracionScalarWhereWithAggregatesInput[]
    id_generacion?: IntWithAggregatesFilter<"Generacion"> | number
    nombre?: StringWithAggregatesFilter<"Generacion"> | string
    ano_inicio?: IntWithAggregatesFilter<"Generacion"> | number
    ano_fin?: IntWithAggregatesFilter<"Generacion"> | number
    id_plan?: IntWithAggregatesFilter<"Generacion"> | number
    id_escuela?: IntWithAggregatesFilter<"Generacion"> | number
  }

  export type DepartamentoWhereInput = {
    AND?: DepartamentoWhereInput | DepartamentoWhereInput[]
    OR?: DepartamentoWhereInput[]
    NOT?: DepartamentoWhereInput | DepartamentoWhereInput[]
    id_departamento?: IntFilter<"Departamento"> | number
    nombre?: StringFilter<"Departamento"> | string
    descripcion?: StringNullableFilter<"Departamento"> | string | null
    id_escuela?: IntFilter<"Departamento"> | number
    escuela?: XOR<EscuelaScalarRelationFilter, EscuelaWhereInput>
    actividades?: ActividadListRelationFilter
    planDeptos?: PlanDepartamentoListRelationFilter
  }

  export type DepartamentoOrderByWithRelationInput = {
    id_departamento?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    id_escuela?: SortOrder
    escuela?: EscuelaOrderByWithRelationInput
    actividades?: ActividadOrderByRelationAggregateInput
    planDeptos?: PlanDepartamentoOrderByRelationAggregateInput
  }

  export type DepartamentoWhereUniqueInput = Prisma.AtLeast<{
    id_departamento?: number
    AND?: DepartamentoWhereInput | DepartamentoWhereInput[]
    OR?: DepartamentoWhereInput[]
    NOT?: DepartamentoWhereInput | DepartamentoWhereInput[]
    nombre?: StringFilter<"Departamento"> | string
    descripcion?: StringNullableFilter<"Departamento"> | string | null
    id_escuela?: IntFilter<"Departamento"> | number
    escuela?: XOR<EscuelaScalarRelationFilter, EscuelaWhereInput>
    actividades?: ActividadListRelationFilter
    planDeptos?: PlanDepartamentoListRelationFilter
  }, "id_departamento">

  export type DepartamentoOrderByWithAggregationInput = {
    id_departamento?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    id_escuela?: SortOrder
    _count?: DepartamentoCountOrderByAggregateInput
    _avg?: DepartamentoAvgOrderByAggregateInput
    _max?: DepartamentoMaxOrderByAggregateInput
    _min?: DepartamentoMinOrderByAggregateInput
    _sum?: DepartamentoSumOrderByAggregateInput
  }

  export type DepartamentoScalarWhereWithAggregatesInput = {
    AND?: DepartamentoScalarWhereWithAggregatesInput | DepartamentoScalarWhereWithAggregatesInput[]
    OR?: DepartamentoScalarWhereWithAggregatesInput[]
    NOT?: DepartamentoScalarWhereWithAggregatesInput | DepartamentoScalarWhereWithAggregatesInput[]
    id_departamento?: IntWithAggregatesFilter<"Departamento"> | number
    nombre?: StringWithAggregatesFilter<"Departamento"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Departamento"> | string | null
    id_escuela?: IntWithAggregatesFilter<"Departamento"> | number
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    num_cuenta?: StringFilter<"Usuario"> | string
    nip?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    correo?: StringNullableFilter<"Usuario"> | string | null
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    id_escuela?: IntFilter<"Usuario"> | number
    id_grupo?: IntNullableFilter<"Usuario"> | number | null
    activo?: BoolFilter<"Usuario"> | boolean
    generacionId_generacion?: IntNullableFilter<"Usuario"> | number | null
    escuela?: XOR<EscuelaScalarRelationFilter, EscuelaWhereInput>
    grupo?: XOR<GrupoNullableScalarRelationFilter, GrupoWhereInput> | null
    actividades_creadas?: ActividadListRelationFilter
    registros_act?: AlumnoActividadListRelationFilter
    registros_puntos?: AlumnoActividadListRelationFilter
    logs?: RegistroCambiosListRelationFilter
    generacion?: XOR<GeneracionNullableScalarRelationFilter, GeneracionWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    num_cuenta?: SortOrder
    nip?: SortOrder
    nombre?: SortOrder
    correo?: SortOrderInput | SortOrder
    rol?: SortOrder
    id_escuela?: SortOrder
    id_grupo?: SortOrderInput | SortOrder
    activo?: SortOrder
    generacionId_generacion?: SortOrderInput | SortOrder
    escuela?: EscuelaOrderByWithRelationInput
    grupo?: GrupoOrderByWithRelationInput
    actividades_creadas?: ActividadOrderByRelationAggregateInput
    registros_act?: AlumnoActividadOrderByRelationAggregateInput
    registros_puntos?: AlumnoActividadOrderByRelationAggregateInput
    logs?: RegistroCambiosOrderByRelationAggregateInput
    generacion?: GeneracionOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    num_cuenta?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nip?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    correo?: StringNullableFilter<"Usuario"> | string | null
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    id_escuela?: IntFilter<"Usuario"> | number
    id_grupo?: IntNullableFilter<"Usuario"> | number | null
    activo?: BoolFilter<"Usuario"> | boolean
    generacionId_generacion?: IntNullableFilter<"Usuario"> | number | null
    escuela?: XOR<EscuelaScalarRelationFilter, EscuelaWhereInput>
    grupo?: XOR<GrupoNullableScalarRelationFilter, GrupoWhereInput> | null
    actividades_creadas?: ActividadListRelationFilter
    registros_act?: AlumnoActividadListRelationFilter
    registros_puntos?: AlumnoActividadListRelationFilter
    logs?: RegistroCambiosListRelationFilter
    generacion?: XOR<GeneracionNullableScalarRelationFilter, GeneracionWhereInput> | null
  }, "id_usuario" | "num_cuenta">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    num_cuenta?: SortOrder
    nip?: SortOrder
    nombre?: SortOrder
    correo?: SortOrderInput | SortOrder
    rol?: SortOrder
    id_escuela?: SortOrder
    id_grupo?: SortOrderInput | SortOrder
    activo?: SortOrder
    generacionId_generacion?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    num_cuenta?: StringWithAggregatesFilter<"Usuario"> | string
    nip?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    id_escuela?: IntWithAggregatesFilter<"Usuario"> | number
    id_grupo?: IntNullableWithAggregatesFilter<"Usuario"> | number | null
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    generacionId_generacion?: IntNullableWithAggregatesFilter<"Usuario"> | number | null
  }

  export type GrupoWhereInput = {
    AND?: GrupoWhereInput | GrupoWhereInput[]
    OR?: GrupoWhereInput[]
    NOT?: GrupoWhereInput | GrupoWhereInput[]
    id_grupo?: IntFilter<"Grupo"> | number
    nombre?: StringFilter<"Grupo"> | string
    nivel?: IntFilter<"Grupo"> | number
    turno?: EnumTurnoFilter<"Grupo"> | $Enums.Turno
    id_generacion?: IntFilter<"Grupo"> | number
    id_ciclo?: IntFilter<"Grupo"> | number
    id_plan?: IntFilter<"Grupo"> | number
    id_escuela?: IntFilter<"Grupo"> | number
    fase?: EnumFaseNullableFilter<"Grupo"> | $Enums.Fase | null
    activo?: BoolFilter<"Grupo"> | boolean
    generacion?: XOR<GeneracionScalarRelationFilter, GeneracionWhereInput>
    ciclo?: XOR<CicloScalarRelationFilter, CicloWhereInput>
    plan?: XOR<PlanDeEstudioScalarRelationFilter, PlanDeEstudioWhereInput>
    escuela?: XOR<EscuelaScalarRelationFilter, EscuelaWhereInput>
    alumnos?: UsuarioListRelationFilter
  }

  export type GrupoOrderByWithRelationInput = {
    id_grupo?: SortOrder
    nombre?: SortOrder
    nivel?: SortOrder
    turno?: SortOrder
    id_generacion?: SortOrder
    id_ciclo?: SortOrder
    id_plan?: SortOrder
    id_escuela?: SortOrder
    fase?: SortOrderInput | SortOrder
    activo?: SortOrder
    generacion?: GeneracionOrderByWithRelationInput
    ciclo?: CicloOrderByWithRelationInput
    plan?: PlanDeEstudioOrderByWithRelationInput
    escuela?: EscuelaOrderByWithRelationInput
    alumnos?: UsuarioOrderByRelationAggregateInput
  }

  export type GrupoWhereUniqueInput = Prisma.AtLeast<{
    id_grupo?: number
    AND?: GrupoWhereInput | GrupoWhereInput[]
    OR?: GrupoWhereInput[]
    NOT?: GrupoWhereInput | GrupoWhereInput[]
    nombre?: StringFilter<"Grupo"> | string
    nivel?: IntFilter<"Grupo"> | number
    turno?: EnumTurnoFilter<"Grupo"> | $Enums.Turno
    id_generacion?: IntFilter<"Grupo"> | number
    id_ciclo?: IntFilter<"Grupo"> | number
    id_plan?: IntFilter<"Grupo"> | number
    id_escuela?: IntFilter<"Grupo"> | number
    fase?: EnumFaseNullableFilter<"Grupo"> | $Enums.Fase | null
    activo?: BoolFilter<"Grupo"> | boolean
    generacion?: XOR<GeneracionScalarRelationFilter, GeneracionWhereInput>
    ciclo?: XOR<CicloScalarRelationFilter, CicloWhereInput>
    plan?: XOR<PlanDeEstudioScalarRelationFilter, PlanDeEstudioWhereInput>
    escuela?: XOR<EscuelaScalarRelationFilter, EscuelaWhereInput>
    alumnos?: UsuarioListRelationFilter
  }, "id_grupo">

  export type GrupoOrderByWithAggregationInput = {
    id_grupo?: SortOrder
    nombre?: SortOrder
    nivel?: SortOrder
    turno?: SortOrder
    id_generacion?: SortOrder
    id_ciclo?: SortOrder
    id_plan?: SortOrder
    id_escuela?: SortOrder
    fase?: SortOrderInput | SortOrder
    activo?: SortOrder
    _count?: GrupoCountOrderByAggregateInput
    _avg?: GrupoAvgOrderByAggregateInput
    _max?: GrupoMaxOrderByAggregateInput
    _min?: GrupoMinOrderByAggregateInput
    _sum?: GrupoSumOrderByAggregateInput
  }

  export type GrupoScalarWhereWithAggregatesInput = {
    AND?: GrupoScalarWhereWithAggregatesInput | GrupoScalarWhereWithAggregatesInput[]
    OR?: GrupoScalarWhereWithAggregatesInput[]
    NOT?: GrupoScalarWhereWithAggregatesInput | GrupoScalarWhereWithAggregatesInput[]
    id_grupo?: IntWithAggregatesFilter<"Grupo"> | number
    nombre?: StringWithAggregatesFilter<"Grupo"> | string
    nivel?: IntWithAggregatesFilter<"Grupo"> | number
    turno?: EnumTurnoWithAggregatesFilter<"Grupo"> | $Enums.Turno
    id_generacion?: IntWithAggregatesFilter<"Grupo"> | number
    id_ciclo?: IntWithAggregatesFilter<"Grupo"> | number
    id_plan?: IntWithAggregatesFilter<"Grupo"> | number
    id_escuela?: IntWithAggregatesFilter<"Grupo"> | number
    fase?: EnumFaseNullableWithAggregatesFilter<"Grupo"> | $Enums.Fase | null
    activo?: BoolWithAggregatesFilter<"Grupo"> | boolean
  }

  export type ActividadWhereInput = {
    AND?: ActividadWhereInput | ActividadWhereInput[]
    OR?: ActividadWhereInput[]
    NOT?: ActividadWhereInput | ActividadWhereInput[]
    id_actividad?: IntFilter<"Actividad"> | number
    nombre?: StringFilter<"Actividad"> | string
    descripcion?: StringNullableFilter<"Actividad"> | string | null
    fecha?: DateTimeFilter<"Actividad"> | Date | string
    puntos?: IntFilter<"Actividad"> | number
    id_departamento?: IntFilter<"Actividad"> | number
    id_coordinador?: IntFilter<"Actividad"> | number
    id_ciclo?: IntFilter<"Actividad"> | number
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
    coordinador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ciclo?: XOR<CicloScalarRelationFilter, CicloWhereInput>
    alumnoActs?: AlumnoActividadListRelationFilter
  }

  export type ActividadOrderByWithRelationInput = {
    id_actividad?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha?: SortOrder
    puntos?: SortOrder
    id_departamento?: SortOrder
    id_coordinador?: SortOrder
    id_ciclo?: SortOrder
    departamento?: DepartamentoOrderByWithRelationInput
    coordinador?: UsuarioOrderByWithRelationInput
    ciclo?: CicloOrderByWithRelationInput
    alumnoActs?: AlumnoActividadOrderByRelationAggregateInput
  }

  export type ActividadWhereUniqueInput = Prisma.AtLeast<{
    id_actividad?: number
    AND?: ActividadWhereInput | ActividadWhereInput[]
    OR?: ActividadWhereInput[]
    NOT?: ActividadWhereInput | ActividadWhereInput[]
    nombre?: StringFilter<"Actividad"> | string
    descripcion?: StringNullableFilter<"Actividad"> | string | null
    fecha?: DateTimeFilter<"Actividad"> | Date | string
    puntos?: IntFilter<"Actividad"> | number
    id_departamento?: IntFilter<"Actividad"> | number
    id_coordinador?: IntFilter<"Actividad"> | number
    id_ciclo?: IntFilter<"Actividad"> | number
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
    coordinador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ciclo?: XOR<CicloScalarRelationFilter, CicloWhereInput>
    alumnoActs?: AlumnoActividadListRelationFilter
  }, "id_actividad">

  export type ActividadOrderByWithAggregationInput = {
    id_actividad?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha?: SortOrder
    puntos?: SortOrder
    id_departamento?: SortOrder
    id_coordinador?: SortOrder
    id_ciclo?: SortOrder
    _count?: ActividadCountOrderByAggregateInput
    _avg?: ActividadAvgOrderByAggregateInput
    _max?: ActividadMaxOrderByAggregateInput
    _min?: ActividadMinOrderByAggregateInput
    _sum?: ActividadSumOrderByAggregateInput
  }

  export type ActividadScalarWhereWithAggregatesInput = {
    AND?: ActividadScalarWhereWithAggregatesInput | ActividadScalarWhereWithAggregatesInput[]
    OR?: ActividadScalarWhereWithAggregatesInput[]
    NOT?: ActividadScalarWhereWithAggregatesInput | ActividadScalarWhereWithAggregatesInput[]
    id_actividad?: IntWithAggregatesFilter<"Actividad"> | number
    nombre?: StringWithAggregatesFilter<"Actividad"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Actividad"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"Actividad"> | Date | string
    puntos?: IntWithAggregatesFilter<"Actividad"> | number
    id_departamento?: IntWithAggregatesFilter<"Actividad"> | number
    id_coordinador?: IntWithAggregatesFilter<"Actividad"> | number
    id_ciclo?: IntWithAggregatesFilter<"Actividad"> | number
  }

  export type AlumnoActividadWhereInput = {
    AND?: AlumnoActividadWhereInput | AlumnoActividadWhereInput[]
    OR?: AlumnoActividadWhereInput[]
    NOT?: AlumnoActividadWhereInput | AlumnoActividadWhereInput[]
    id_alumno_actividad?: IntFilter<"AlumnoActividad"> | number
    id_alumno?: IntFilter<"AlumnoActividad"> | number
    id_actividad?: IntFilter<"AlumnoActividad"> | number
    puntos_otorgados?: IntFilter<"AlumnoActividad"> | number
    fecha_registro?: DateTimeFilter<"AlumnoActividad"> | Date | string
    id_coordinador?: IntFilter<"AlumnoActividad"> | number
    id_ciclo?: IntFilter<"AlumnoActividad"> | number
    alumno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    actividad?: XOR<ActividadScalarRelationFilter, ActividadWhereInput>
    coordinador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ciclo?: XOR<CicloScalarRelationFilter, CicloWhereInput>
  }

  export type AlumnoActividadOrderByWithRelationInput = {
    id_alumno_actividad?: SortOrder
    id_alumno?: SortOrder
    id_actividad?: SortOrder
    puntos_otorgados?: SortOrder
    fecha_registro?: SortOrder
    id_coordinador?: SortOrder
    id_ciclo?: SortOrder
    alumno?: UsuarioOrderByWithRelationInput
    actividad?: ActividadOrderByWithRelationInput
    coordinador?: UsuarioOrderByWithRelationInput
    ciclo?: CicloOrderByWithRelationInput
  }

  export type AlumnoActividadWhereUniqueInput = Prisma.AtLeast<{
    id_alumno_actividad?: number
    AND?: AlumnoActividadWhereInput | AlumnoActividadWhereInput[]
    OR?: AlumnoActividadWhereInput[]
    NOT?: AlumnoActividadWhereInput | AlumnoActividadWhereInput[]
    id_alumno?: IntFilter<"AlumnoActividad"> | number
    id_actividad?: IntFilter<"AlumnoActividad"> | number
    puntos_otorgados?: IntFilter<"AlumnoActividad"> | number
    fecha_registro?: DateTimeFilter<"AlumnoActividad"> | Date | string
    id_coordinador?: IntFilter<"AlumnoActividad"> | number
    id_ciclo?: IntFilter<"AlumnoActividad"> | number
    alumno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    actividad?: XOR<ActividadScalarRelationFilter, ActividadWhereInput>
    coordinador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ciclo?: XOR<CicloScalarRelationFilter, CicloWhereInput>
  }, "id_alumno_actividad">

  export type AlumnoActividadOrderByWithAggregationInput = {
    id_alumno_actividad?: SortOrder
    id_alumno?: SortOrder
    id_actividad?: SortOrder
    puntos_otorgados?: SortOrder
    fecha_registro?: SortOrder
    id_coordinador?: SortOrder
    id_ciclo?: SortOrder
    _count?: AlumnoActividadCountOrderByAggregateInput
    _avg?: AlumnoActividadAvgOrderByAggregateInput
    _max?: AlumnoActividadMaxOrderByAggregateInput
    _min?: AlumnoActividadMinOrderByAggregateInput
    _sum?: AlumnoActividadSumOrderByAggregateInput
  }

  export type AlumnoActividadScalarWhereWithAggregatesInput = {
    AND?: AlumnoActividadScalarWhereWithAggregatesInput | AlumnoActividadScalarWhereWithAggregatesInput[]
    OR?: AlumnoActividadScalarWhereWithAggregatesInput[]
    NOT?: AlumnoActividadScalarWhereWithAggregatesInput | AlumnoActividadScalarWhereWithAggregatesInput[]
    id_alumno_actividad?: IntWithAggregatesFilter<"AlumnoActividad"> | number
    id_alumno?: IntWithAggregatesFilter<"AlumnoActividad"> | number
    id_actividad?: IntWithAggregatesFilter<"AlumnoActividad"> | number
    puntos_otorgados?: IntWithAggregatesFilter<"AlumnoActividad"> | number
    fecha_registro?: DateTimeWithAggregatesFilter<"AlumnoActividad"> | Date | string
    id_coordinador?: IntWithAggregatesFilter<"AlumnoActividad"> | number
    id_ciclo?: IntWithAggregatesFilter<"AlumnoActividad"> | number
  }

  export type PlanDepartamentoWhereInput = {
    AND?: PlanDepartamentoWhereInput | PlanDepartamentoWhereInput[]
    OR?: PlanDepartamentoWhereInput[]
    NOT?: PlanDepartamentoWhereInput | PlanDepartamentoWhereInput[]
    id_plan_departamento?: IntFilter<"PlanDepartamento"> | number
    id_plan?: IntFilter<"PlanDepartamento"> | number
    id_departamento?: IntFilter<"PlanDepartamento"> | number
    puntos_requeridos?: IntFilter<"PlanDepartamento"> | number
    plan?: XOR<PlanDeEstudioScalarRelationFilter, PlanDeEstudioWhereInput>
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
  }

  export type PlanDepartamentoOrderByWithRelationInput = {
    id_plan_departamento?: SortOrder
    id_plan?: SortOrder
    id_departamento?: SortOrder
    puntos_requeridos?: SortOrder
    plan?: PlanDeEstudioOrderByWithRelationInput
    departamento?: DepartamentoOrderByWithRelationInput
  }

  export type PlanDepartamentoWhereUniqueInput = Prisma.AtLeast<{
    id_plan_departamento?: number
    AND?: PlanDepartamentoWhereInput | PlanDepartamentoWhereInput[]
    OR?: PlanDepartamentoWhereInput[]
    NOT?: PlanDepartamentoWhereInput | PlanDepartamentoWhereInput[]
    id_plan?: IntFilter<"PlanDepartamento"> | number
    id_departamento?: IntFilter<"PlanDepartamento"> | number
    puntos_requeridos?: IntFilter<"PlanDepartamento"> | number
    plan?: XOR<PlanDeEstudioScalarRelationFilter, PlanDeEstudioWhereInput>
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
  }, "id_plan_departamento">

  export type PlanDepartamentoOrderByWithAggregationInput = {
    id_plan_departamento?: SortOrder
    id_plan?: SortOrder
    id_departamento?: SortOrder
    puntos_requeridos?: SortOrder
    _count?: PlanDepartamentoCountOrderByAggregateInput
    _avg?: PlanDepartamentoAvgOrderByAggregateInput
    _max?: PlanDepartamentoMaxOrderByAggregateInput
    _min?: PlanDepartamentoMinOrderByAggregateInput
    _sum?: PlanDepartamentoSumOrderByAggregateInput
  }

  export type PlanDepartamentoScalarWhereWithAggregatesInput = {
    AND?: PlanDepartamentoScalarWhereWithAggregatesInput | PlanDepartamentoScalarWhereWithAggregatesInput[]
    OR?: PlanDepartamentoScalarWhereWithAggregatesInput[]
    NOT?: PlanDepartamentoScalarWhereWithAggregatesInput | PlanDepartamentoScalarWhereWithAggregatesInput[]
    id_plan_departamento?: IntWithAggregatesFilter<"PlanDepartamento"> | number
    id_plan?: IntWithAggregatesFilter<"PlanDepartamento"> | number
    id_departamento?: IntWithAggregatesFilter<"PlanDepartamento"> | number
    puntos_requeridos?: IntWithAggregatesFilter<"PlanDepartamento"> | number
  }

  export type RegistroCambiosWhereInput = {
    AND?: RegistroCambiosWhereInput | RegistroCambiosWhereInput[]
    OR?: RegistroCambiosWhereInput[]
    NOT?: RegistroCambiosWhereInput | RegistroCambiosWhereInput[]
    id_registro?: IntFilter<"RegistroCambios"> | number
    id_usuario?: IntFilter<"RegistroCambios"> | number
    modulo?: StringFilter<"RegistroCambios"> | string
    accion?: StringFilter<"RegistroCambios"> | string
    descripcion?: StringNullableFilter<"RegistroCambios"> | string | null
    fecha?: DateTimeFilter<"RegistroCambios"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type RegistroCambiosOrderByWithRelationInput = {
    id_registro?: SortOrder
    id_usuario?: SortOrder
    modulo?: SortOrder
    accion?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type RegistroCambiosWhereUniqueInput = Prisma.AtLeast<{
    id_registro?: number
    AND?: RegistroCambiosWhereInput | RegistroCambiosWhereInput[]
    OR?: RegistroCambiosWhereInput[]
    NOT?: RegistroCambiosWhereInput | RegistroCambiosWhereInput[]
    id_usuario?: IntFilter<"RegistroCambios"> | number
    modulo?: StringFilter<"RegistroCambios"> | string
    accion?: StringFilter<"RegistroCambios"> | string
    descripcion?: StringNullableFilter<"RegistroCambios"> | string | null
    fecha?: DateTimeFilter<"RegistroCambios"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_registro">

  export type RegistroCambiosOrderByWithAggregationInput = {
    id_registro?: SortOrder
    id_usuario?: SortOrder
    modulo?: SortOrder
    accion?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha?: SortOrder
    _count?: RegistroCambiosCountOrderByAggregateInput
    _avg?: RegistroCambiosAvgOrderByAggregateInput
    _max?: RegistroCambiosMaxOrderByAggregateInput
    _min?: RegistroCambiosMinOrderByAggregateInput
    _sum?: RegistroCambiosSumOrderByAggregateInput
  }

  export type RegistroCambiosScalarWhereWithAggregatesInput = {
    AND?: RegistroCambiosScalarWhereWithAggregatesInput | RegistroCambiosScalarWhereWithAggregatesInput[]
    OR?: RegistroCambiosScalarWhereWithAggregatesInput[]
    NOT?: RegistroCambiosScalarWhereWithAggregatesInput | RegistroCambiosScalarWhereWithAggregatesInput[]
    id_registro?: IntWithAggregatesFilter<"RegistroCambios"> | number
    id_usuario?: IntWithAggregatesFilter<"RegistroCambios"> | number
    modulo?: StringWithAggregatesFilter<"RegistroCambios"> | string
    accion?: StringWithAggregatesFilter<"RegistroCambios"> | string
    descripcion?: StringNullableWithAggregatesFilter<"RegistroCambios"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"RegistroCambios"> | Date | string
  }

  export type EscuelaCreateInput = {
    nombre: string
    clave?: string | null
    estado?: boolean
    planes?: PlanDeEstudioCreateNestedManyWithoutEscuelaInput
    departamentos?: DepartamentoCreateNestedManyWithoutEscuelaInput
    usuarios?: UsuarioCreateNestedManyWithoutEscuelaInput
    generaciones?: GeneracionCreateNestedManyWithoutEscuelaInput
    grupos?: GrupoCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaUncheckedCreateInput = {
    id_escuela?: number
    nombre: string
    clave?: string | null
    estado?: boolean
    planes?: PlanDeEstudioUncheckedCreateNestedManyWithoutEscuelaInput
    departamentos?: DepartamentoUncheckedCreateNestedManyWithoutEscuelaInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutEscuelaInput
    generaciones?: GeneracionUncheckedCreateNestedManyWithoutEscuelaInput
    grupos?: GrupoUncheckedCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    planes?: PlanDeEstudioUpdateManyWithoutEscuelaNestedInput
    departamentos?: DepartamentoUpdateManyWithoutEscuelaNestedInput
    usuarios?: UsuarioUpdateManyWithoutEscuelaNestedInput
    generaciones?: GeneracionUpdateManyWithoutEscuelaNestedInput
    grupos?: GrupoUpdateManyWithoutEscuelaNestedInput
  }

  export type EscuelaUncheckedUpdateInput = {
    id_escuela?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    planes?: PlanDeEstudioUncheckedUpdateManyWithoutEscuelaNestedInput
    departamentos?: DepartamentoUncheckedUpdateManyWithoutEscuelaNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutEscuelaNestedInput
    generaciones?: GeneracionUncheckedUpdateManyWithoutEscuelaNestedInput
    grupos?: GrupoUncheckedUpdateManyWithoutEscuelaNestedInput
  }

  export type EscuelaCreateManyInput = {
    id_escuela?: number
    nombre: string
    clave?: string | null
    estado?: boolean
  }

  export type EscuelaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EscuelaUncheckedUpdateManyInput = {
    id_escuela?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlanDeEstudioCreateInput = {
    nombre: string
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    escuela: EscuelaCreateNestedOneWithoutPlanesInput
    ciclos?: CicloCreateNestedManyWithoutPlanInput
    generaciones?: GeneracionCreateNestedManyWithoutPlanInput
    planDeptos?: PlanDepartamentoCreateNestedManyWithoutPlanInput
    grupos?: GrupoCreateNestedManyWithoutPlanInput
  }

  export type PlanDeEstudioUncheckedCreateInput = {
    id_plan?: number
    nombre: string
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_escuela: number
    ciclos?: CicloUncheckedCreateNestedManyWithoutPlanInput
    generaciones?: GeneracionUncheckedCreateNestedManyWithoutPlanInput
    planDeptos?: PlanDepartamentoUncheckedCreateNestedManyWithoutPlanInput
    grupos?: GrupoUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanDeEstudioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escuela?: EscuelaUpdateOneRequiredWithoutPlanesNestedInput
    ciclos?: CicloUpdateManyWithoutPlanNestedInput
    generaciones?: GeneracionUpdateManyWithoutPlanNestedInput
    planDeptos?: PlanDepartamentoUpdateManyWithoutPlanNestedInput
    grupos?: GrupoUpdateManyWithoutPlanNestedInput
  }

  export type PlanDeEstudioUncheckedUpdateInput = {
    id_plan?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_escuela?: IntFieldUpdateOperationsInput | number
    ciclos?: CicloUncheckedUpdateManyWithoutPlanNestedInput
    generaciones?: GeneracionUncheckedUpdateManyWithoutPlanNestedInput
    planDeptos?: PlanDepartamentoUncheckedUpdateManyWithoutPlanNestedInput
    grupos?: GrupoUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanDeEstudioCreateManyInput = {
    id_plan?: number
    nombre: string
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_escuela: number
  }

  export type PlanDeEstudioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlanDeEstudioUncheckedUpdateManyInput = {
    id_plan?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_escuela?: IntFieldUpdateOperationsInput | number
  }

  export type CicloCreateInput = {
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    tipo: $Enums.TipoCiclo
    activo?: boolean
    plan: PlanDeEstudioCreateNestedOneWithoutCiclosInput
    grupos?: GrupoCreateNestedManyWithoutCicloInput
    actividades?: ActividadCreateNestedManyWithoutCicloInput
    alumnoActs?: AlumnoActividadCreateNestedManyWithoutCicloInput
  }

  export type CicloUncheckedCreateInput = {
    id_ciclo?: number
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    tipo: $Enums.TipoCiclo
    activo?: boolean
    id_plan: number
    grupos?: GrupoUncheckedCreateNestedManyWithoutCicloInput
    actividades?: ActividadUncheckedCreateNestedManyWithoutCicloInput
    alumnoActs?: AlumnoActividadUncheckedCreateNestedManyWithoutCicloInput
  }

  export type CicloUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCicloFieldUpdateOperationsInput | $Enums.TipoCiclo
    activo?: BoolFieldUpdateOperationsInput | boolean
    plan?: PlanDeEstudioUpdateOneRequiredWithoutCiclosNestedInput
    grupos?: GrupoUpdateManyWithoutCicloNestedInput
    actividades?: ActividadUpdateManyWithoutCicloNestedInput
    alumnoActs?: AlumnoActividadUpdateManyWithoutCicloNestedInput
  }

  export type CicloUncheckedUpdateInput = {
    id_ciclo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCicloFieldUpdateOperationsInput | $Enums.TipoCiclo
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_plan?: IntFieldUpdateOperationsInput | number
    grupos?: GrupoUncheckedUpdateManyWithoutCicloNestedInput
    actividades?: ActividadUncheckedUpdateManyWithoutCicloNestedInput
    alumnoActs?: AlumnoActividadUncheckedUpdateManyWithoutCicloNestedInput
  }

  export type CicloCreateManyInput = {
    id_ciclo?: number
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    tipo: $Enums.TipoCiclo
    activo?: boolean
    id_plan: number
  }

  export type CicloUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCicloFieldUpdateOperationsInput | $Enums.TipoCiclo
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CicloUncheckedUpdateManyInput = {
    id_ciclo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCicloFieldUpdateOperationsInput | $Enums.TipoCiclo
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_plan?: IntFieldUpdateOperationsInput | number
  }

  export type GeneracionCreateInput = {
    nombre: string
    ano_inicio: number
    ano_fin: number
    plan: PlanDeEstudioCreateNestedOneWithoutGeneracionesInput
    escuela: EscuelaCreateNestedOneWithoutGeneracionesInput
    grupos?: GrupoCreateNestedManyWithoutGeneracionInput
    alumnos?: UsuarioCreateNestedManyWithoutGeneracionInput
  }

  export type GeneracionUncheckedCreateInput = {
    id_generacion?: number
    nombre: string
    ano_inicio: number
    ano_fin: number
    id_plan: number
    id_escuela: number
    grupos?: GrupoUncheckedCreateNestedManyWithoutGeneracionInput
    alumnos?: UsuarioUncheckedCreateNestedManyWithoutGeneracionInput
  }

  export type GeneracionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ano_inicio?: IntFieldUpdateOperationsInput | number
    ano_fin?: IntFieldUpdateOperationsInput | number
    plan?: PlanDeEstudioUpdateOneRequiredWithoutGeneracionesNestedInput
    escuela?: EscuelaUpdateOneRequiredWithoutGeneracionesNestedInput
    grupos?: GrupoUpdateManyWithoutGeneracionNestedInput
    alumnos?: UsuarioUpdateManyWithoutGeneracionNestedInput
  }

  export type GeneracionUncheckedUpdateInput = {
    id_generacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ano_inicio?: IntFieldUpdateOperationsInput | number
    ano_fin?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    id_escuela?: IntFieldUpdateOperationsInput | number
    grupos?: GrupoUncheckedUpdateManyWithoutGeneracionNestedInput
    alumnos?: UsuarioUncheckedUpdateManyWithoutGeneracionNestedInput
  }

  export type GeneracionCreateManyInput = {
    id_generacion?: number
    nombre: string
    ano_inicio: number
    ano_fin: number
    id_plan: number
    id_escuela: number
  }

  export type GeneracionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ano_inicio?: IntFieldUpdateOperationsInput | number
    ano_fin?: IntFieldUpdateOperationsInput | number
  }

  export type GeneracionUncheckedUpdateManyInput = {
    id_generacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ano_inicio?: IntFieldUpdateOperationsInput | number
    ano_fin?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    id_escuela?: IntFieldUpdateOperationsInput | number
  }

  export type DepartamentoCreateInput = {
    nombre: string
    descripcion?: string | null
    escuela: EscuelaCreateNestedOneWithoutDepartamentosInput
    actividades?: ActividadCreateNestedManyWithoutDepartamentoInput
    planDeptos?: PlanDepartamentoCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoUncheckedCreateInput = {
    id_departamento?: number
    nombre: string
    descripcion?: string | null
    id_escuela: number
    actividades?: ActividadUncheckedCreateNestedManyWithoutDepartamentoInput
    planDeptos?: PlanDepartamentoUncheckedCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    escuela?: EscuelaUpdateOneRequiredWithoutDepartamentosNestedInput
    actividades?: ActividadUpdateManyWithoutDepartamentoNestedInput
    planDeptos?: PlanDepartamentoUpdateManyWithoutDepartamentoNestedInput
  }

  export type DepartamentoUncheckedUpdateInput = {
    id_departamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_escuela?: IntFieldUpdateOperationsInput | number
    actividades?: ActividadUncheckedUpdateManyWithoutDepartamentoNestedInput
    planDeptos?: PlanDepartamentoUncheckedUpdateManyWithoutDepartamentoNestedInput
  }

  export type DepartamentoCreateManyInput = {
    id_departamento?: number
    nombre: string
    descripcion?: string | null
    id_escuela: number
  }

  export type DepartamentoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartamentoUncheckedUpdateManyInput = {
    id_departamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_escuela?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateInput = {
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    activo?: boolean
    escuela: EscuelaCreateNestedOneWithoutUsuariosInput
    grupo?: GrupoCreateNestedOneWithoutAlumnosInput
    actividades_creadas?: ActividadCreateNestedManyWithoutCoordinadorInput
    registros_act?: AlumnoActividadCreateNestedManyWithoutAlumnoInput
    registros_puntos?: AlumnoActividadCreateNestedManyWithoutCoordinadorInput
    logs?: RegistroCambiosCreateNestedManyWithoutUsuarioInput
    generacion?: GeneracionCreateNestedOneWithoutAlumnosInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    id_escuela: number
    id_grupo?: number | null
    activo?: boolean
    generacionId_generacion?: number | null
    actividades_creadas?: ActividadUncheckedCreateNestedManyWithoutCoordinadorInput
    registros_act?: AlumnoActividadUncheckedCreateNestedManyWithoutAlumnoInput
    registros_puntos?: AlumnoActividadUncheckedCreateNestedManyWithoutCoordinadorInput
    logs?: RegistroCambiosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    activo?: BoolFieldUpdateOperationsInput | boolean
    escuela?: EscuelaUpdateOneRequiredWithoutUsuariosNestedInput
    grupo?: GrupoUpdateOneWithoutAlumnosNestedInput
    actividades_creadas?: ActividadUpdateManyWithoutCoordinadorNestedInput
    registros_act?: AlumnoActividadUpdateManyWithoutAlumnoNestedInput
    registros_puntos?: AlumnoActividadUpdateManyWithoutCoordinadorNestedInput
    logs?: RegistroCambiosUpdateManyWithoutUsuarioNestedInput
    generacion?: GeneracionUpdateOneWithoutAlumnosNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    id_escuela?: IntFieldUpdateOperationsInput | number
    id_grupo?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    generacionId_generacion?: NullableIntFieldUpdateOperationsInput | number | null
    actividades_creadas?: ActividadUncheckedUpdateManyWithoutCoordinadorNestedInput
    registros_act?: AlumnoActividadUncheckedUpdateManyWithoutAlumnoNestedInput
    registros_puntos?: AlumnoActividadUncheckedUpdateManyWithoutCoordinadorNestedInput
    logs?: RegistroCambiosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: number
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    id_escuela: number
    id_grupo?: number | null
    activo?: boolean
    generacionId_generacion?: number | null
  }

  export type UsuarioUpdateManyMutationInput = {
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    id_escuela?: IntFieldUpdateOperationsInput | number
    id_grupo?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    generacionId_generacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GrupoCreateInput = {
    nombre: string
    nivel: number
    turno: $Enums.Turno
    fase?: $Enums.Fase | null
    activo?: boolean
    generacion: GeneracionCreateNestedOneWithoutGruposInput
    ciclo: CicloCreateNestedOneWithoutGruposInput
    plan: PlanDeEstudioCreateNestedOneWithoutGruposInput
    escuela: EscuelaCreateNestedOneWithoutGruposInput
    alumnos?: UsuarioCreateNestedManyWithoutGrupoInput
  }

  export type GrupoUncheckedCreateInput = {
    id_grupo?: number
    nombre: string
    nivel: number
    turno: $Enums.Turno
    id_generacion: number
    id_ciclo: number
    id_plan: number
    id_escuela: number
    fase?: $Enums.Fase | null
    activo?: boolean
    alumnos?: UsuarioUncheckedCreateNestedManyWithoutGrupoInput
  }

  export type GrupoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    generacion?: GeneracionUpdateOneRequiredWithoutGruposNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutGruposNestedInput
    plan?: PlanDeEstudioUpdateOneRequiredWithoutGruposNestedInput
    escuela?: EscuelaUpdateOneRequiredWithoutGruposNestedInput
    alumnos?: UsuarioUpdateManyWithoutGrupoNestedInput
  }

  export type GrupoUncheckedUpdateInput = {
    id_grupo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    id_generacion?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    id_escuela?: IntFieldUpdateOperationsInput | number
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    alumnos?: UsuarioUncheckedUpdateManyWithoutGrupoNestedInput
  }

  export type GrupoCreateManyInput = {
    id_grupo?: number
    nombre: string
    nivel: number
    turno: $Enums.Turno
    id_generacion: number
    id_ciclo: number
    id_plan: number
    id_escuela: number
    fase?: $Enums.Fase | null
    activo?: boolean
  }

  export type GrupoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GrupoUncheckedUpdateManyInput = {
    id_grupo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    id_generacion?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    id_escuela?: IntFieldUpdateOperationsInput | number
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActividadCreateInput = {
    nombre: string
    descripcion?: string | null
    fecha: Date | string
    puntos: number
    departamento: DepartamentoCreateNestedOneWithoutActividadesInput
    coordinador: UsuarioCreateNestedOneWithoutActividades_creadasInput
    ciclo: CicloCreateNestedOneWithoutActividadesInput
    alumnoActs?: AlumnoActividadCreateNestedManyWithoutActividadInput
  }

  export type ActividadUncheckedCreateInput = {
    id_actividad?: number
    nombre: string
    descripcion?: string | null
    fecha: Date | string
    puntos: number
    id_departamento: number
    id_coordinador: number
    id_ciclo: number
    alumnoActs?: AlumnoActividadUncheckedCreateNestedManyWithoutActividadInput
  }

  export type ActividadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntos?: IntFieldUpdateOperationsInput | number
    departamento?: DepartamentoUpdateOneRequiredWithoutActividadesNestedInput
    coordinador?: UsuarioUpdateOneRequiredWithoutActividades_creadasNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutActividadesNestedInput
    alumnoActs?: AlumnoActividadUpdateManyWithoutActividadNestedInput
  }

  export type ActividadUncheckedUpdateInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntos?: IntFieldUpdateOperationsInput | number
    id_departamento?: IntFieldUpdateOperationsInput | number
    id_coordinador?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
    alumnoActs?: AlumnoActividadUncheckedUpdateManyWithoutActividadNestedInput
  }

  export type ActividadCreateManyInput = {
    id_actividad?: number
    nombre: string
    descripcion?: string | null
    fecha: Date | string
    puntos: number
    id_departamento: number
    id_coordinador: number
    id_ciclo: number
  }

  export type ActividadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntos?: IntFieldUpdateOperationsInput | number
  }

  export type ActividadUncheckedUpdateManyInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntos?: IntFieldUpdateOperationsInput | number
    id_departamento?: IntFieldUpdateOperationsInput | number
    id_coordinador?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoActividadCreateInput = {
    puntos_otorgados: number
    fecha_registro: Date | string
    alumno: UsuarioCreateNestedOneWithoutRegistros_actInput
    actividad: ActividadCreateNestedOneWithoutAlumnoActsInput
    coordinador: UsuarioCreateNestedOneWithoutRegistros_puntosInput
    ciclo: CicloCreateNestedOneWithoutAlumnoActsInput
  }

  export type AlumnoActividadUncheckedCreateInput = {
    id_alumno_actividad?: number
    id_alumno: number
    id_actividad: number
    puntos_otorgados: number
    fecha_registro: Date | string
    id_coordinador: number
    id_ciclo: number
  }

  export type AlumnoActividadUpdateInput = {
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    alumno?: UsuarioUpdateOneRequiredWithoutRegistros_actNestedInput
    actividad?: ActividadUpdateOneRequiredWithoutAlumnoActsNestedInput
    coordinador?: UsuarioUpdateOneRequiredWithoutRegistros_puntosNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutAlumnoActsNestedInput
  }

  export type AlumnoActividadUncheckedUpdateInput = {
    id_alumno_actividad?: IntFieldUpdateOperationsInput | number
    id_alumno?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_coordinador?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoActividadCreateManyInput = {
    id_alumno_actividad?: number
    id_alumno: number
    id_actividad: number
    puntos_otorgados: number
    fecha_registro: Date | string
    id_coordinador: number
    id_ciclo: number
  }

  export type AlumnoActividadUpdateManyMutationInput = {
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlumnoActividadUncheckedUpdateManyInput = {
    id_alumno_actividad?: IntFieldUpdateOperationsInput | number
    id_alumno?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_coordinador?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
  }

  export type PlanDepartamentoCreateInput = {
    puntos_requeridos: number
    plan: PlanDeEstudioCreateNestedOneWithoutPlanDeptosInput
    departamento: DepartamentoCreateNestedOneWithoutPlanDeptosInput
  }

  export type PlanDepartamentoUncheckedCreateInput = {
    id_plan_departamento?: number
    id_plan: number
    id_departamento: number
    puntos_requeridos: number
  }

  export type PlanDepartamentoUpdateInput = {
    puntos_requeridos?: IntFieldUpdateOperationsInput | number
    plan?: PlanDeEstudioUpdateOneRequiredWithoutPlanDeptosNestedInput
    departamento?: DepartamentoUpdateOneRequiredWithoutPlanDeptosNestedInput
  }

  export type PlanDepartamentoUncheckedUpdateInput = {
    id_plan_departamento?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    id_departamento?: IntFieldUpdateOperationsInput | number
    puntos_requeridos?: IntFieldUpdateOperationsInput | number
  }

  export type PlanDepartamentoCreateManyInput = {
    id_plan_departamento?: number
    id_plan: number
    id_departamento: number
    puntos_requeridos: number
  }

  export type PlanDepartamentoUpdateManyMutationInput = {
    puntos_requeridos?: IntFieldUpdateOperationsInput | number
  }

  export type PlanDepartamentoUncheckedUpdateManyInput = {
    id_plan_departamento?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    id_departamento?: IntFieldUpdateOperationsInput | number
    puntos_requeridos?: IntFieldUpdateOperationsInput | number
  }

  export type RegistroCambiosCreateInput = {
    modulo: string
    accion: string
    descripcion?: string | null
    fecha?: Date | string
    usuario: UsuarioCreateNestedOneWithoutLogsInput
  }

  export type RegistroCambiosUncheckedCreateInput = {
    id_registro?: number
    id_usuario: number
    modulo: string
    accion: string
    descripcion?: string | null
    fecha?: Date | string
  }

  export type RegistroCambiosUpdateInput = {
    modulo?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutLogsNestedInput
  }

  export type RegistroCambiosUncheckedUpdateInput = {
    id_registro?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    modulo?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroCambiosCreateManyInput = {
    id_registro?: number
    id_usuario: number
    modulo: string
    accion: string
    descripcion?: string | null
    fecha?: Date | string
  }

  export type RegistroCambiosUpdateManyMutationInput = {
    modulo?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroCambiosUncheckedUpdateManyInput = {
    id_registro?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    modulo?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PlanDeEstudioListRelationFilter = {
    every?: PlanDeEstudioWhereInput
    some?: PlanDeEstudioWhereInput
    none?: PlanDeEstudioWhereInput
  }

  export type DepartamentoListRelationFilter = {
    every?: DepartamentoWhereInput
    some?: DepartamentoWhereInput
    none?: DepartamentoWhereInput
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type GeneracionListRelationFilter = {
    every?: GeneracionWhereInput
    some?: GeneracionWhereInput
    none?: GeneracionWhereInput
  }

  export type GrupoListRelationFilter = {
    every?: GrupoWhereInput
    some?: GrupoWhereInput
    none?: GrupoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlanDeEstudioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeneracionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GrupoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EscuelaCountOrderByAggregateInput = {
    id_escuela?: SortOrder
    nombre?: SortOrder
    clave?: SortOrder
    estado?: SortOrder
  }

  export type EscuelaAvgOrderByAggregateInput = {
    id_escuela?: SortOrder
  }

  export type EscuelaMaxOrderByAggregateInput = {
    id_escuela?: SortOrder
    nombre?: SortOrder
    clave?: SortOrder
    estado?: SortOrder
  }

  export type EscuelaMinOrderByAggregateInput = {
    id_escuela?: SortOrder
    nombre?: SortOrder
    clave?: SortOrder
    estado?: SortOrder
  }

  export type EscuelaSumOrderByAggregateInput = {
    id_escuela?: SortOrder
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EscuelaScalarRelationFilter = {
    is?: EscuelaWhereInput
    isNot?: EscuelaWhereInput
  }

  export type CicloListRelationFilter = {
    every?: CicloWhereInput
    some?: CicloWhereInput
    none?: CicloWhereInput
  }

  export type PlanDepartamentoListRelationFilter = {
    every?: PlanDepartamentoWhereInput
    some?: PlanDepartamentoWhereInput
    none?: PlanDepartamentoWhereInput
  }

  export type CicloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanDepartamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanDeEstudioCountOrderByAggregateInput = {
    id_plan?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    id_escuela?: SortOrder
  }

  export type PlanDeEstudioAvgOrderByAggregateInput = {
    id_plan?: SortOrder
    id_escuela?: SortOrder
  }

  export type PlanDeEstudioMaxOrderByAggregateInput = {
    id_plan?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    id_escuela?: SortOrder
  }

  export type PlanDeEstudioMinOrderByAggregateInput = {
    id_plan?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    id_escuela?: SortOrder
  }

  export type PlanDeEstudioSumOrderByAggregateInput = {
    id_plan?: SortOrder
    id_escuela?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTipoCicloFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCiclo | EnumTipoCicloFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCiclo[] | ListEnumTipoCicloFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCiclo[] | ListEnumTipoCicloFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCicloFilter<$PrismaModel> | $Enums.TipoCiclo
  }

  export type PlanDeEstudioScalarRelationFilter = {
    is?: PlanDeEstudioWhereInput
    isNot?: PlanDeEstudioWhereInput
  }

  export type ActividadListRelationFilter = {
    every?: ActividadWhereInput
    some?: ActividadWhereInput
    none?: ActividadWhereInput
  }

  export type AlumnoActividadListRelationFilter = {
    every?: AlumnoActividadWhereInput
    some?: AlumnoActividadWhereInput
    none?: AlumnoActividadWhereInput
  }

  export type ActividadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlumnoActividadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CicloCountOrderByAggregateInput = {
    id_ciclo?: SortOrder
    nombre?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    tipo?: SortOrder
    activo?: SortOrder
    id_plan?: SortOrder
  }

  export type CicloAvgOrderByAggregateInput = {
    id_ciclo?: SortOrder
    id_plan?: SortOrder
  }

  export type CicloMaxOrderByAggregateInput = {
    id_ciclo?: SortOrder
    nombre?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    tipo?: SortOrder
    activo?: SortOrder
    id_plan?: SortOrder
  }

  export type CicloMinOrderByAggregateInput = {
    id_ciclo?: SortOrder
    nombre?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    tipo?: SortOrder
    activo?: SortOrder
    id_plan?: SortOrder
  }

  export type CicloSumOrderByAggregateInput = {
    id_ciclo?: SortOrder
    id_plan?: SortOrder
  }

  export type EnumTipoCicloWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCiclo | EnumTipoCicloFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCiclo[] | ListEnumTipoCicloFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCiclo[] | ListEnumTipoCicloFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCicloWithAggregatesFilter<$PrismaModel> | $Enums.TipoCiclo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCicloFilter<$PrismaModel>
    _max?: NestedEnumTipoCicloFilter<$PrismaModel>
  }

  export type GeneracionCountOrderByAggregateInput = {
    id_generacion?: SortOrder
    nombre?: SortOrder
    ano_inicio?: SortOrder
    ano_fin?: SortOrder
    id_plan?: SortOrder
    id_escuela?: SortOrder
  }

  export type GeneracionAvgOrderByAggregateInput = {
    id_generacion?: SortOrder
    ano_inicio?: SortOrder
    ano_fin?: SortOrder
    id_plan?: SortOrder
    id_escuela?: SortOrder
  }

  export type GeneracionMaxOrderByAggregateInput = {
    id_generacion?: SortOrder
    nombre?: SortOrder
    ano_inicio?: SortOrder
    ano_fin?: SortOrder
    id_plan?: SortOrder
    id_escuela?: SortOrder
  }

  export type GeneracionMinOrderByAggregateInput = {
    id_generacion?: SortOrder
    nombre?: SortOrder
    ano_inicio?: SortOrder
    ano_fin?: SortOrder
    id_plan?: SortOrder
    id_escuela?: SortOrder
  }

  export type GeneracionSumOrderByAggregateInput = {
    id_generacion?: SortOrder
    ano_inicio?: SortOrder
    ano_fin?: SortOrder
    id_plan?: SortOrder
    id_escuela?: SortOrder
  }

  export type DepartamentoCountOrderByAggregateInput = {
    id_departamento?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    id_escuela?: SortOrder
  }

  export type DepartamentoAvgOrderByAggregateInput = {
    id_departamento?: SortOrder
    id_escuela?: SortOrder
  }

  export type DepartamentoMaxOrderByAggregateInput = {
    id_departamento?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    id_escuela?: SortOrder
  }

  export type DepartamentoMinOrderByAggregateInput = {
    id_departamento?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    id_escuela?: SortOrder
  }

  export type DepartamentoSumOrderByAggregateInput = {
    id_departamento?: SortOrder
    id_escuela?: SortOrder
  }

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type GrupoNullableScalarRelationFilter = {
    is?: GrupoWhereInput | null
    isNot?: GrupoWhereInput | null
  }

  export type RegistroCambiosListRelationFilter = {
    every?: RegistroCambiosWhereInput
    some?: RegistroCambiosWhereInput
    none?: RegistroCambiosWhereInput
  }

  export type GeneracionNullableScalarRelationFilter = {
    is?: GeneracionWhereInput | null
    isNot?: GeneracionWhereInput | null
  }

  export type RegistroCambiosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    num_cuenta?: SortOrder
    nip?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    rol?: SortOrder
    id_escuela?: SortOrder
    id_grupo?: SortOrder
    activo?: SortOrder
    generacionId_generacion?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_escuela?: SortOrder
    id_grupo?: SortOrder
    generacionId_generacion?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    num_cuenta?: SortOrder
    nip?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    rol?: SortOrder
    id_escuela?: SortOrder
    id_grupo?: SortOrder
    activo?: SortOrder
    generacionId_generacion?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    num_cuenta?: SortOrder
    nip?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    rol?: SortOrder
    id_escuela?: SortOrder
    id_grupo?: SortOrder
    activo?: SortOrder
    generacionId_generacion?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_escuela?: SortOrder
    id_grupo?: SortOrder
    generacionId_generacion?: SortOrder
  }

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type EnumTurnoFilter<$PrismaModel = never> = {
    equals?: $Enums.Turno | EnumTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumTurnoFilter<$PrismaModel> | $Enums.Turno
  }

  export type EnumFaseNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Fase | EnumFaseFieldRefInput<$PrismaModel> | null
    in?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFaseNullableFilter<$PrismaModel> | $Enums.Fase | null
  }

  export type GeneracionScalarRelationFilter = {
    is?: GeneracionWhereInput
    isNot?: GeneracionWhereInput
  }

  export type CicloScalarRelationFilter = {
    is?: CicloWhereInput
    isNot?: CicloWhereInput
  }

  export type GrupoCountOrderByAggregateInput = {
    id_grupo?: SortOrder
    nombre?: SortOrder
    nivel?: SortOrder
    turno?: SortOrder
    id_generacion?: SortOrder
    id_ciclo?: SortOrder
    id_plan?: SortOrder
    id_escuela?: SortOrder
    fase?: SortOrder
    activo?: SortOrder
  }

  export type GrupoAvgOrderByAggregateInput = {
    id_grupo?: SortOrder
    nivel?: SortOrder
    id_generacion?: SortOrder
    id_ciclo?: SortOrder
    id_plan?: SortOrder
    id_escuela?: SortOrder
  }

  export type GrupoMaxOrderByAggregateInput = {
    id_grupo?: SortOrder
    nombre?: SortOrder
    nivel?: SortOrder
    turno?: SortOrder
    id_generacion?: SortOrder
    id_ciclo?: SortOrder
    id_plan?: SortOrder
    id_escuela?: SortOrder
    fase?: SortOrder
    activo?: SortOrder
  }

  export type GrupoMinOrderByAggregateInput = {
    id_grupo?: SortOrder
    nombre?: SortOrder
    nivel?: SortOrder
    turno?: SortOrder
    id_generacion?: SortOrder
    id_ciclo?: SortOrder
    id_plan?: SortOrder
    id_escuela?: SortOrder
    fase?: SortOrder
    activo?: SortOrder
  }

  export type GrupoSumOrderByAggregateInput = {
    id_grupo?: SortOrder
    nivel?: SortOrder
    id_generacion?: SortOrder
    id_ciclo?: SortOrder
    id_plan?: SortOrder
    id_escuela?: SortOrder
  }

  export type EnumTurnoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Turno | EnumTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumTurnoWithAggregatesFilter<$PrismaModel> | $Enums.Turno
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTurnoFilter<$PrismaModel>
    _max?: NestedEnumTurnoFilter<$PrismaModel>
  }

  export type EnumFaseNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Fase | EnumFaseFieldRefInput<$PrismaModel> | null
    in?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFaseNullableWithAggregatesFilter<$PrismaModel> | $Enums.Fase | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFaseNullableFilter<$PrismaModel>
    _max?: NestedEnumFaseNullableFilter<$PrismaModel>
  }

  export type DepartamentoScalarRelationFilter = {
    is?: DepartamentoWhereInput
    isNot?: DepartamentoWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ActividadCountOrderByAggregateInput = {
    id_actividad?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    puntos?: SortOrder
    id_departamento?: SortOrder
    id_coordinador?: SortOrder
    id_ciclo?: SortOrder
  }

  export type ActividadAvgOrderByAggregateInput = {
    id_actividad?: SortOrder
    puntos?: SortOrder
    id_departamento?: SortOrder
    id_coordinador?: SortOrder
    id_ciclo?: SortOrder
  }

  export type ActividadMaxOrderByAggregateInput = {
    id_actividad?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    puntos?: SortOrder
    id_departamento?: SortOrder
    id_coordinador?: SortOrder
    id_ciclo?: SortOrder
  }

  export type ActividadMinOrderByAggregateInput = {
    id_actividad?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    puntos?: SortOrder
    id_departamento?: SortOrder
    id_coordinador?: SortOrder
    id_ciclo?: SortOrder
  }

  export type ActividadSumOrderByAggregateInput = {
    id_actividad?: SortOrder
    puntos?: SortOrder
    id_departamento?: SortOrder
    id_coordinador?: SortOrder
    id_ciclo?: SortOrder
  }

  export type ActividadScalarRelationFilter = {
    is?: ActividadWhereInput
    isNot?: ActividadWhereInput
  }

  export type AlumnoActividadCountOrderByAggregateInput = {
    id_alumno_actividad?: SortOrder
    id_alumno?: SortOrder
    id_actividad?: SortOrder
    puntos_otorgados?: SortOrder
    fecha_registro?: SortOrder
    id_coordinador?: SortOrder
    id_ciclo?: SortOrder
  }

  export type AlumnoActividadAvgOrderByAggregateInput = {
    id_alumno_actividad?: SortOrder
    id_alumno?: SortOrder
    id_actividad?: SortOrder
    puntos_otorgados?: SortOrder
    id_coordinador?: SortOrder
    id_ciclo?: SortOrder
  }

  export type AlumnoActividadMaxOrderByAggregateInput = {
    id_alumno_actividad?: SortOrder
    id_alumno?: SortOrder
    id_actividad?: SortOrder
    puntos_otorgados?: SortOrder
    fecha_registro?: SortOrder
    id_coordinador?: SortOrder
    id_ciclo?: SortOrder
  }

  export type AlumnoActividadMinOrderByAggregateInput = {
    id_alumno_actividad?: SortOrder
    id_alumno?: SortOrder
    id_actividad?: SortOrder
    puntos_otorgados?: SortOrder
    fecha_registro?: SortOrder
    id_coordinador?: SortOrder
    id_ciclo?: SortOrder
  }

  export type AlumnoActividadSumOrderByAggregateInput = {
    id_alumno_actividad?: SortOrder
    id_alumno?: SortOrder
    id_actividad?: SortOrder
    puntos_otorgados?: SortOrder
    id_coordinador?: SortOrder
    id_ciclo?: SortOrder
  }

  export type PlanDepartamentoCountOrderByAggregateInput = {
    id_plan_departamento?: SortOrder
    id_plan?: SortOrder
    id_departamento?: SortOrder
    puntos_requeridos?: SortOrder
  }

  export type PlanDepartamentoAvgOrderByAggregateInput = {
    id_plan_departamento?: SortOrder
    id_plan?: SortOrder
    id_departamento?: SortOrder
    puntos_requeridos?: SortOrder
  }

  export type PlanDepartamentoMaxOrderByAggregateInput = {
    id_plan_departamento?: SortOrder
    id_plan?: SortOrder
    id_departamento?: SortOrder
    puntos_requeridos?: SortOrder
  }

  export type PlanDepartamentoMinOrderByAggregateInput = {
    id_plan_departamento?: SortOrder
    id_plan?: SortOrder
    id_departamento?: SortOrder
    puntos_requeridos?: SortOrder
  }

  export type PlanDepartamentoSumOrderByAggregateInput = {
    id_plan_departamento?: SortOrder
    id_plan?: SortOrder
    id_departamento?: SortOrder
    puntos_requeridos?: SortOrder
  }

  export type RegistroCambiosCountOrderByAggregateInput = {
    id_registro?: SortOrder
    id_usuario?: SortOrder
    modulo?: SortOrder
    accion?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
  }

  export type RegistroCambiosAvgOrderByAggregateInput = {
    id_registro?: SortOrder
    id_usuario?: SortOrder
  }

  export type RegistroCambiosMaxOrderByAggregateInput = {
    id_registro?: SortOrder
    id_usuario?: SortOrder
    modulo?: SortOrder
    accion?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
  }

  export type RegistroCambiosMinOrderByAggregateInput = {
    id_registro?: SortOrder
    id_usuario?: SortOrder
    modulo?: SortOrder
    accion?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
  }

  export type RegistroCambiosSumOrderByAggregateInput = {
    id_registro?: SortOrder
    id_usuario?: SortOrder
  }

  export type PlanDeEstudioCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<PlanDeEstudioCreateWithoutEscuelaInput, PlanDeEstudioUncheckedCreateWithoutEscuelaInput> | PlanDeEstudioCreateWithoutEscuelaInput[] | PlanDeEstudioUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: PlanDeEstudioCreateOrConnectWithoutEscuelaInput | PlanDeEstudioCreateOrConnectWithoutEscuelaInput[]
    createMany?: PlanDeEstudioCreateManyEscuelaInputEnvelope
    connect?: PlanDeEstudioWhereUniqueInput | PlanDeEstudioWhereUniqueInput[]
  }

  export type DepartamentoCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<DepartamentoCreateWithoutEscuelaInput, DepartamentoUncheckedCreateWithoutEscuelaInput> | DepartamentoCreateWithoutEscuelaInput[] | DepartamentoUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: DepartamentoCreateOrConnectWithoutEscuelaInput | DepartamentoCreateOrConnectWithoutEscuelaInput[]
    createMany?: DepartamentoCreateManyEscuelaInputEnvelope
    connect?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
  }

  export type UsuarioCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<UsuarioCreateWithoutEscuelaInput, UsuarioUncheckedCreateWithoutEscuelaInput> | UsuarioCreateWithoutEscuelaInput[] | UsuarioUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutEscuelaInput | UsuarioCreateOrConnectWithoutEscuelaInput[]
    createMany?: UsuarioCreateManyEscuelaInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type GeneracionCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<GeneracionCreateWithoutEscuelaInput, GeneracionUncheckedCreateWithoutEscuelaInput> | GeneracionCreateWithoutEscuelaInput[] | GeneracionUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: GeneracionCreateOrConnectWithoutEscuelaInput | GeneracionCreateOrConnectWithoutEscuelaInput[]
    createMany?: GeneracionCreateManyEscuelaInputEnvelope
    connect?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
  }

  export type GrupoCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<GrupoCreateWithoutEscuelaInput, GrupoUncheckedCreateWithoutEscuelaInput> | GrupoCreateWithoutEscuelaInput[] | GrupoUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutEscuelaInput | GrupoCreateOrConnectWithoutEscuelaInput[]
    createMany?: GrupoCreateManyEscuelaInputEnvelope
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
  }

  export type PlanDeEstudioUncheckedCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<PlanDeEstudioCreateWithoutEscuelaInput, PlanDeEstudioUncheckedCreateWithoutEscuelaInput> | PlanDeEstudioCreateWithoutEscuelaInput[] | PlanDeEstudioUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: PlanDeEstudioCreateOrConnectWithoutEscuelaInput | PlanDeEstudioCreateOrConnectWithoutEscuelaInput[]
    createMany?: PlanDeEstudioCreateManyEscuelaInputEnvelope
    connect?: PlanDeEstudioWhereUniqueInput | PlanDeEstudioWhereUniqueInput[]
  }

  export type DepartamentoUncheckedCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<DepartamentoCreateWithoutEscuelaInput, DepartamentoUncheckedCreateWithoutEscuelaInput> | DepartamentoCreateWithoutEscuelaInput[] | DepartamentoUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: DepartamentoCreateOrConnectWithoutEscuelaInput | DepartamentoCreateOrConnectWithoutEscuelaInput[]
    createMany?: DepartamentoCreateManyEscuelaInputEnvelope
    connect?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<UsuarioCreateWithoutEscuelaInput, UsuarioUncheckedCreateWithoutEscuelaInput> | UsuarioCreateWithoutEscuelaInput[] | UsuarioUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutEscuelaInput | UsuarioCreateOrConnectWithoutEscuelaInput[]
    createMany?: UsuarioCreateManyEscuelaInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type GeneracionUncheckedCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<GeneracionCreateWithoutEscuelaInput, GeneracionUncheckedCreateWithoutEscuelaInput> | GeneracionCreateWithoutEscuelaInput[] | GeneracionUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: GeneracionCreateOrConnectWithoutEscuelaInput | GeneracionCreateOrConnectWithoutEscuelaInput[]
    createMany?: GeneracionCreateManyEscuelaInputEnvelope
    connect?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
  }

  export type GrupoUncheckedCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<GrupoCreateWithoutEscuelaInput, GrupoUncheckedCreateWithoutEscuelaInput> | GrupoCreateWithoutEscuelaInput[] | GrupoUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutEscuelaInput | GrupoCreateOrConnectWithoutEscuelaInput[]
    createMany?: GrupoCreateManyEscuelaInputEnvelope
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PlanDeEstudioUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<PlanDeEstudioCreateWithoutEscuelaInput, PlanDeEstudioUncheckedCreateWithoutEscuelaInput> | PlanDeEstudioCreateWithoutEscuelaInput[] | PlanDeEstudioUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: PlanDeEstudioCreateOrConnectWithoutEscuelaInput | PlanDeEstudioCreateOrConnectWithoutEscuelaInput[]
    upsert?: PlanDeEstudioUpsertWithWhereUniqueWithoutEscuelaInput | PlanDeEstudioUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: PlanDeEstudioCreateManyEscuelaInputEnvelope
    set?: PlanDeEstudioWhereUniqueInput | PlanDeEstudioWhereUniqueInput[]
    disconnect?: PlanDeEstudioWhereUniqueInput | PlanDeEstudioWhereUniqueInput[]
    delete?: PlanDeEstudioWhereUniqueInput | PlanDeEstudioWhereUniqueInput[]
    connect?: PlanDeEstudioWhereUniqueInput | PlanDeEstudioWhereUniqueInput[]
    update?: PlanDeEstudioUpdateWithWhereUniqueWithoutEscuelaInput | PlanDeEstudioUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: PlanDeEstudioUpdateManyWithWhereWithoutEscuelaInput | PlanDeEstudioUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: PlanDeEstudioScalarWhereInput | PlanDeEstudioScalarWhereInput[]
  }

  export type DepartamentoUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<DepartamentoCreateWithoutEscuelaInput, DepartamentoUncheckedCreateWithoutEscuelaInput> | DepartamentoCreateWithoutEscuelaInput[] | DepartamentoUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: DepartamentoCreateOrConnectWithoutEscuelaInput | DepartamentoCreateOrConnectWithoutEscuelaInput[]
    upsert?: DepartamentoUpsertWithWhereUniqueWithoutEscuelaInput | DepartamentoUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: DepartamentoCreateManyEscuelaInputEnvelope
    set?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    disconnect?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    delete?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    connect?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    update?: DepartamentoUpdateWithWhereUniqueWithoutEscuelaInput | DepartamentoUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: DepartamentoUpdateManyWithWhereWithoutEscuelaInput | DepartamentoUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: DepartamentoScalarWhereInput | DepartamentoScalarWhereInput[]
  }

  export type UsuarioUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<UsuarioCreateWithoutEscuelaInput, UsuarioUncheckedCreateWithoutEscuelaInput> | UsuarioCreateWithoutEscuelaInput[] | UsuarioUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutEscuelaInput | UsuarioCreateOrConnectWithoutEscuelaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutEscuelaInput | UsuarioUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: UsuarioCreateManyEscuelaInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutEscuelaInput | UsuarioUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutEscuelaInput | UsuarioUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type GeneracionUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<GeneracionCreateWithoutEscuelaInput, GeneracionUncheckedCreateWithoutEscuelaInput> | GeneracionCreateWithoutEscuelaInput[] | GeneracionUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: GeneracionCreateOrConnectWithoutEscuelaInput | GeneracionCreateOrConnectWithoutEscuelaInput[]
    upsert?: GeneracionUpsertWithWhereUniqueWithoutEscuelaInput | GeneracionUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: GeneracionCreateManyEscuelaInputEnvelope
    set?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    disconnect?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    delete?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    connect?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    update?: GeneracionUpdateWithWhereUniqueWithoutEscuelaInput | GeneracionUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: GeneracionUpdateManyWithWhereWithoutEscuelaInput | GeneracionUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: GeneracionScalarWhereInput | GeneracionScalarWhereInput[]
  }

  export type GrupoUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<GrupoCreateWithoutEscuelaInput, GrupoUncheckedCreateWithoutEscuelaInput> | GrupoCreateWithoutEscuelaInput[] | GrupoUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutEscuelaInput | GrupoCreateOrConnectWithoutEscuelaInput[]
    upsert?: GrupoUpsertWithWhereUniqueWithoutEscuelaInput | GrupoUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: GrupoCreateManyEscuelaInputEnvelope
    set?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    disconnect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    delete?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    update?: GrupoUpdateWithWhereUniqueWithoutEscuelaInput | GrupoUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: GrupoUpdateManyWithWhereWithoutEscuelaInput | GrupoUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlanDeEstudioUncheckedUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<PlanDeEstudioCreateWithoutEscuelaInput, PlanDeEstudioUncheckedCreateWithoutEscuelaInput> | PlanDeEstudioCreateWithoutEscuelaInput[] | PlanDeEstudioUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: PlanDeEstudioCreateOrConnectWithoutEscuelaInput | PlanDeEstudioCreateOrConnectWithoutEscuelaInput[]
    upsert?: PlanDeEstudioUpsertWithWhereUniqueWithoutEscuelaInput | PlanDeEstudioUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: PlanDeEstudioCreateManyEscuelaInputEnvelope
    set?: PlanDeEstudioWhereUniqueInput | PlanDeEstudioWhereUniqueInput[]
    disconnect?: PlanDeEstudioWhereUniqueInput | PlanDeEstudioWhereUniqueInput[]
    delete?: PlanDeEstudioWhereUniqueInput | PlanDeEstudioWhereUniqueInput[]
    connect?: PlanDeEstudioWhereUniqueInput | PlanDeEstudioWhereUniqueInput[]
    update?: PlanDeEstudioUpdateWithWhereUniqueWithoutEscuelaInput | PlanDeEstudioUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: PlanDeEstudioUpdateManyWithWhereWithoutEscuelaInput | PlanDeEstudioUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: PlanDeEstudioScalarWhereInput | PlanDeEstudioScalarWhereInput[]
  }

  export type DepartamentoUncheckedUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<DepartamentoCreateWithoutEscuelaInput, DepartamentoUncheckedCreateWithoutEscuelaInput> | DepartamentoCreateWithoutEscuelaInput[] | DepartamentoUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: DepartamentoCreateOrConnectWithoutEscuelaInput | DepartamentoCreateOrConnectWithoutEscuelaInput[]
    upsert?: DepartamentoUpsertWithWhereUniqueWithoutEscuelaInput | DepartamentoUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: DepartamentoCreateManyEscuelaInputEnvelope
    set?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    disconnect?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    delete?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    connect?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    update?: DepartamentoUpdateWithWhereUniqueWithoutEscuelaInput | DepartamentoUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: DepartamentoUpdateManyWithWhereWithoutEscuelaInput | DepartamentoUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: DepartamentoScalarWhereInput | DepartamentoScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<UsuarioCreateWithoutEscuelaInput, UsuarioUncheckedCreateWithoutEscuelaInput> | UsuarioCreateWithoutEscuelaInput[] | UsuarioUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutEscuelaInput | UsuarioCreateOrConnectWithoutEscuelaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutEscuelaInput | UsuarioUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: UsuarioCreateManyEscuelaInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutEscuelaInput | UsuarioUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutEscuelaInput | UsuarioUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type GeneracionUncheckedUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<GeneracionCreateWithoutEscuelaInput, GeneracionUncheckedCreateWithoutEscuelaInput> | GeneracionCreateWithoutEscuelaInput[] | GeneracionUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: GeneracionCreateOrConnectWithoutEscuelaInput | GeneracionCreateOrConnectWithoutEscuelaInput[]
    upsert?: GeneracionUpsertWithWhereUniqueWithoutEscuelaInput | GeneracionUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: GeneracionCreateManyEscuelaInputEnvelope
    set?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    disconnect?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    delete?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    connect?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    update?: GeneracionUpdateWithWhereUniqueWithoutEscuelaInput | GeneracionUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: GeneracionUpdateManyWithWhereWithoutEscuelaInput | GeneracionUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: GeneracionScalarWhereInput | GeneracionScalarWhereInput[]
  }

  export type GrupoUncheckedUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<GrupoCreateWithoutEscuelaInput, GrupoUncheckedCreateWithoutEscuelaInput> | GrupoCreateWithoutEscuelaInput[] | GrupoUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutEscuelaInput | GrupoCreateOrConnectWithoutEscuelaInput[]
    upsert?: GrupoUpsertWithWhereUniqueWithoutEscuelaInput | GrupoUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: GrupoCreateManyEscuelaInputEnvelope
    set?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    disconnect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    delete?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    update?: GrupoUpdateWithWhereUniqueWithoutEscuelaInput | GrupoUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: GrupoUpdateManyWithWhereWithoutEscuelaInput | GrupoUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
  }

  export type EscuelaCreateNestedOneWithoutPlanesInput = {
    create?: XOR<EscuelaCreateWithoutPlanesInput, EscuelaUncheckedCreateWithoutPlanesInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutPlanesInput
    connect?: EscuelaWhereUniqueInput
  }

  export type CicloCreateNestedManyWithoutPlanInput = {
    create?: XOR<CicloCreateWithoutPlanInput, CicloUncheckedCreateWithoutPlanInput> | CicloCreateWithoutPlanInput[] | CicloUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: CicloCreateOrConnectWithoutPlanInput | CicloCreateOrConnectWithoutPlanInput[]
    createMany?: CicloCreateManyPlanInputEnvelope
    connect?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
  }

  export type GeneracionCreateNestedManyWithoutPlanInput = {
    create?: XOR<GeneracionCreateWithoutPlanInput, GeneracionUncheckedCreateWithoutPlanInput> | GeneracionCreateWithoutPlanInput[] | GeneracionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: GeneracionCreateOrConnectWithoutPlanInput | GeneracionCreateOrConnectWithoutPlanInput[]
    createMany?: GeneracionCreateManyPlanInputEnvelope
    connect?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
  }

  export type PlanDepartamentoCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlanDepartamentoCreateWithoutPlanInput, PlanDepartamentoUncheckedCreateWithoutPlanInput> | PlanDepartamentoCreateWithoutPlanInput[] | PlanDepartamentoUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanDepartamentoCreateOrConnectWithoutPlanInput | PlanDepartamentoCreateOrConnectWithoutPlanInput[]
    createMany?: PlanDepartamentoCreateManyPlanInputEnvelope
    connect?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
  }

  export type GrupoCreateNestedManyWithoutPlanInput = {
    create?: XOR<GrupoCreateWithoutPlanInput, GrupoUncheckedCreateWithoutPlanInput> | GrupoCreateWithoutPlanInput[] | GrupoUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutPlanInput | GrupoCreateOrConnectWithoutPlanInput[]
    createMany?: GrupoCreateManyPlanInputEnvelope
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
  }

  export type CicloUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<CicloCreateWithoutPlanInput, CicloUncheckedCreateWithoutPlanInput> | CicloCreateWithoutPlanInput[] | CicloUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: CicloCreateOrConnectWithoutPlanInput | CicloCreateOrConnectWithoutPlanInput[]
    createMany?: CicloCreateManyPlanInputEnvelope
    connect?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
  }

  export type GeneracionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<GeneracionCreateWithoutPlanInput, GeneracionUncheckedCreateWithoutPlanInput> | GeneracionCreateWithoutPlanInput[] | GeneracionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: GeneracionCreateOrConnectWithoutPlanInput | GeneracionCreateOrConnectWithoutPlanInput[]
    createMany?: GeneracionCreateManyPlanInputEnvelope
    connect?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
  }

  export type PlanDepartamentoUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlanDepartamentoCreateWithoutPlanInput, PlanDepartamentoUncheckedCreateWithoutPlanInput> | PlanDepartamentoCreateWithoutPlanInput[] | PlanDepartamentoUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanDepartamentoCreateOrConnectWithoutPlanInput | PlanDepartamentoCreateOrConnectWithoutPlanInput[]
    createMany?: PlanDepartamentoCreateManyPlanInputEnvelope
    connect?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
  }

  export type GrupoUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<GrupoCreateWithoutPlanInput, GrupoUncheckedCreateWithoutPlanInput> | GrupoCreateWithoutPlanInput[] | GrupoUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutPlanInput | GrupoCreateOrConnectWithoutPlanInput[]
    createMany?: GrupoCreateManyPlanInputEnvelope
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EscuelaUpdateOneRequiredWithoutPlanesNestedInput = {
    create?: XOR<EscuelaCreateWithoutPlanesInput, EscuelaUncheckedCreateWithoutPlanesInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutPlanesInput
    upsert?: EscuelaUpsertWithoutPlanesInput
    connect?: EscuelaWhereUniqueInput
    update?: XOR<XOR<EscuelaUpdateToOneWithWhereWithoutPlanesInput, EscuelaUpdateWithoutPlanesInput>, EscuelaUncheckedUpdateWithoutPlanesInput>
  }

  export type CicloUpdateManyWithoutPlanNestedInput = {
    create?: XOR<CicloCreateWithoutPlanInput, CicloUncheckedCreateWithoutPlanInput> | CicloCreateWithoutPlanInput[] | CicloUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: CicloCreateOrConnectWithoutPlanInput | CicloCreateOrConnectWithoutPlanInput[]
    upsert?: CicloUpsertWithWhereUniqueWithoutPlanInput | CicloUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: CicloCreateManyPlanInputEnvelope
    set?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    disconnect?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    delete?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    connect?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    update?: CicloUpdateWithWhereUniqueWithoutPlanInput | CicloUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: CicloUpdateManyWithWhereWithoutPlanInput | CicloUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: CicloScalarWhereInput | CicloScalarWhereInput[]
  }

  export type GeneracionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<GeneracionCreateWithoutPlanInput, GeneracionUncheckedCreateWithoutPlanInput> | GeneracionCreateWithoutPlanInput[] | GeneracionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: GeneracionCreateOrConnectWithoutPlanInput | GeneracionCreateOrConnectWithoutPlanInput[]
    upsert?: GeneracionUpsertWithWhereUniqueWithoutPlanInput | GeneracionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: GeneracionCreateManyPlanInputEnvelope
    set?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    disconnect?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    delete?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    connect?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    update?: GeneracionUpdateWithWhereUniqueWithoutPlanInput | GeneracionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: GeneracionUpdateManyWithWhereWithoutPlanInput | GeneracionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: GeneracionScalarWhereInput | GeneracionScalarWhereInput[]
  }

  export type PlanDepartamentoUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlanDepartamentoCreateWithoutPlanInput, PlanDepartamentoUncheckedCreateWithoutPlanInput> | PlanDepartamentoCreateWithoutPlanInput[] | PlanDepartamentoUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanDepartamentoCreateOrConnectWithoutPlanInput | PlanDepartamentoCreateOrConnectWithoutPlanInput[]
    upsert?: PlanDepartamentoUpsertWithWhereUniqueWithoutPlanInput | PlanDepartamentoUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlanDepartamentoCreateManyPlanInputEnvelope
    set?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    disconnect?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    delete?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    connect?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    update?: PlanDepartamentoUpdateWithWhereUniqueWithoutPlanInput | PlanDepartamentoUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlanDepartamentoUpdateManyWithWhereWithoutPlanInput | PlanDepartamentoUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlanDepartamentoScalarWhereInput | PlanDepartamentoScalarWhereInput[]
  }

  export type GrupoUpdateManyWithoutPlanNestedInput = {
    create?: XOR<GrupoCreateWithoutPlanInput, GrupoUncheckedCreateWithoutPlanInput> | GrupoCreateWithoutPlanInput[] | GrupoUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutPlanInput | GrupoCreateOrConnectWithoutPlanInput[]
    upsert?: GrupoUpsertWithWhereUniqueWithoutPlanInput | GrupoUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: GrupoCreateManyPlanInputEnvelope
    set?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    disconnect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    delete?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    update?: GrupoUpdateWithWhereUniqueWithoutPlanInput | GrupoUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: GrupoUpdateManyWithWhereWithoutPlanInput | GrupoUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
  }

  export type CicloUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<CicloCreateWithoutPlanInput, CicloUncheckedCreateWithoutPlanInput> | CicloCreateWithoutPlanInput[] | CicloUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: CicloCreateOrConnectWithoutPlanInput | CicloCreateOrConnectWithoutPlanInput[]
    upsert?: CicloUpsertWithWhereUniqueWithoutPlanInput | CicloUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: CicloCreateManyPlanInputEnvelope
    set?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    disconnect?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    delete?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    connect?: CicloWhereUniqueInput | CicloWhereUniqueInput[]
    update?: CicloUpdateWithWhereUniqueWithoutPlanInput | CicloUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: CicloUpdateManyWithWhereWithoutPlanInput | CicloUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: CicloScalarWhereInput | CicloScalarWhereInput[]
  }

  export type GeneracionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<GeneracionCreateWithoutPlanInput, GeneracionUncheckedCreateWithoutPlanInput> | GeneracionCreateWithoutPlanInput[] | GeneracionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: GeneracionCreateOrConnectWithoutPlanInput | GeneracionCreateOrConnectWithoutPlanInput[]
    upsert?: GeneracionUpsertWithWhereUniqueWithoutPlanInput | GeneracionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: GeneracionCreateManyPlanInputEnvelope
    set?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    disconnect?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    delete?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    connect?: GeneracionWhereUniqueInput | GeneracionWhereUniqueInput[]
    update?: GeneracionUpdateWithWhereUniqueWithoutPlanInput | GeneracionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: GeneracionUpdateManyWithWhereWithoutPlanInput | GeneracionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: GeneracionScalarWhereInput | GeneracionScalarWhereInput[]
  }

  export type PlanDepartamentoUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlanDepartamentoCreateWithoutPlanInput, PlanDepartamentoUncheckedCreateWithoutPlanInput> | PlanDepartamentoCreateWithoutPlanInput[] | PlanDepartamentoUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanDepartamentoCreateOrConnectWithoutPlanInput | PlanDepartamentoCreateOrConnectWithoutPlanInput[]
    upsert?: PlanDepartamentoUpsertWithWhereUniqueWithoutPlanInput | PlanDepartamentoUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlanDepartamentoCreateManyPlanInputEnvelope
    set?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    disconnect?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    delete?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    connect?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    update?: PlanDepartamentoUpdateWithWhereUniqueWithoutPlanInput | PlanDepartamentoUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlanDepartamentoUpdateManyWithWhereWithoutPlanInput | PlanDepartamentoUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlanDepartamentoScalarWhereInput | PlanDepartamentoScalarWhereInput[]
  }

  export type GrupoUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<GrupoCreateWithoutPlanInput, GrupoUncheckedCreateWithoutPlanInput> | GrupoCreateWithoutPlanInput[] | GrupoUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutPlanInput | GrupoCreateOrConnectWithoutPlanInput[]
    upsert?: GrupoUpsertWithWhereUniqueWithoutPlanInput | GrupoUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: GrupoCreateManyPlanInputEnvelope
    set?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    disconnect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    delete?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    update?: GrupoUpdateWithWhereUniqueWithoutPlanInput | GrupoUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: GrupoUpdateManyWithWhereWithoutPlanInput | GrupoUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
  }

  export type PlanDeEstudioCreateNestedOneWithoutCiclosInput = {
    create?: XOR<PlanDeEstudioCreateWithoutCiclosInput, PlanDeEstudioUncheckedCreateWithoutCiclosInput>
    connectOrCreate?: PlanDeEstudioCreateOrConnectWithoutCiclosInput
    connect?: PlanDeEstudioWhereUniqueInput
  }

  export type GrupoCreateNestedManyWithoutCicloInput = {
    create?: XOR<GrupoCreateWithoutCicloInput, GrupoUncheckedCreateWithoutCicloInput> | GrupoCreateWithoutCicloInput[] | GrupoUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutCicloInput | GrupoCreateOrConnectWithoutCicloInput[]
    createMany?: GrupoCreateManyCicloInputEnvelope
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
  }

  export type ActividadCreateNestedManyWithoutCicloInput = {
    create?: XOR<ActividadCreateWithoutCicloInput, ActividadUncheckedCreateWithoutCicloInput> | ActividadCreateWithoutCicloInput[] | ActividadUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: ActividadCreateOrConnectWithoutCicloInput | ActividadCreateOrConnectWithoutCicloInput[]
    createMany?: ActividadCreateManyCicloInputEnvelope
    connect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
  }

  export type AlumnoActividadCreateNestedManyWithoutCicloInput = {
    create?: XOR<AlumnoActividadCreateWithoutCicloInput, AlumnoActividadUncheckedCreateWithoutCicloInput> | AlumnoActividadCreateWithoutCicloInput[] | AlumnoActividadUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutCicloInput | AlumnoActividadCreateOrConnectWithoutCicloInput[]
    createMany?: AlumnoActividadCreateManyCicloInputEnvelope
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
  }

  export type GrupoUncheckedCreateNestedManyWithoutCicloInput = {
    create?: XOR<GrupoCreateWithoutCicloInput, GrupoUncheckedCreateWithoutCicloInput> | GrupoCreateWithoutCicloInput[] | GrupoUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutCicloInput | GrupoCreateOrConnectWithoutCicloInput[]
    createMany?: GrupoCreateManyCicloInputEnvelope
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
  }

  export type ActividadUncheckedCreateNestedManyWithoutCicloInput = {
    create?: XOR<ActividadCreateWithoutCicloInput, ActividadUncheckedCreateWithoutCicloInput> | ActividadCreateWithoutCicloInput[] | ActividadUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: ActividadCreateOrConnectWithoutCicloInput | ActividadCreateOrConnectWithoutCicloInput[]
    createMany?: ActividadCreateManyCicloInputEnvelope
    connect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
  }

  export type AlumnoActividadUncheckedCreateNestedManyWithoutCicloInput = {
    create?: XOR<AlumnoActividadCreateWithoutCicloInput, AlumnoActividadUncheckedCreateWithoutCicloInput> | AlumnoActividadCreateWithoutCicloInput[] | AlumnoActividadUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutCicloInput | AlumnoActividadCreateOrConnectWithoutCicloInput[]
    createMany?: AlumnoActividadCreateManyCicloInputEnvelope
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
  }

  export type EnumTipoCicloFieldUpdateOperationsInput = {
    set?: $Enums.TipoCiclo
  }

  export type PlanDeEstudioUpdateOneRequiredWithoutCiclosNestedInput = {
    create?: XOR<PlanDeEstudioCreateWithoutCiclosInput, PlanDeEstudioUncheckedCreateWithoutCiclosInput>
    connectOrCreate?: PlanDeEstudioCreateOrConnectWithoutCiclosInput
    upsert?: PlanDeEstudioUpsertWithoutCiclosInput
    connect?: PlanDeEstudioWhereUniqueInput
    update?: XOR<XOR<PlanDeEstudioUpdateToOneWithWhereWithoutCiclosInput, PlanDeEstudioUpdateWithoutCiclosInput>, PlanDeEstudioUncheckedUpdateWithoutCiclosInput>
  }

  export type GrupoUpdateManyWithoutCicloNestedInput = {
    create?: XOR<GrupoCreateWithoutCicloInput, GrupoUncheckedCreateWithoutCicloInput> | GrupoCreateWithoutCicloInput[] | GrupoUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutCicloInput | GrupoCreateOrConnectWithoutCicloInput[]
    upsert?: GrupoUpsertWithWhereUniqueWithoutCicloInput | GrupoUpsertWithWhereUniqueWithoutCicloInput[]
    createMany?: GrupoCreateManyCicloInputEnvelope
    set?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    disconnect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    delete?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    update?: GrupoUpdateWithWhereUniqueWithoutCicloInput | GrupoUpdateWithWhereUniqueWithoutCicloInput[]
    updateMany?: GrupoUpdateManyWithWhereWithoutCicloInput | GrupoUpdateManyWithWhereWithoutCicloInput[]
    deleteMany?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
  }

  export type ActividadUpdateManyWithoutCicloNestedInput = {
    create?: XOR<ActividadCreateWithoutCicloInput, ActividadUncheckedCreateWithoutCicloInput> | ActividadCreateWithoutCicloInput[] | ActividadUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: ActividadCreateOrConnectWithoutCicloInput | ActividadCreateOrConnectWithoutCicloInput[]
    upsert?: ActividadUpsertWithWhereUniqueWithoutCicloInput | ActividadUpsertWithWhereUniqueWithoutCicloInput[]
    createMany?: ActividadCreateManyCicloInputEnvelope
    set?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    disconnect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    delete?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    connect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    update?: ActividadUpdateWithWhereUniqueWithoutCicloInput | ActividadUpdateWithWhereUniqueWithoutCicloInput[]
    updateMany?: ActividadUpdateManyWithWhereWithoutCicloInput | ActividadUpdateManyWithWhereWithoutCicloInput[]
    deleteMany?: ActividadScalarWhereInput | ActividadScalarWhereInput[]
  }

  export type AlumnoActividadUpdateManyWithoutCicloNestedInput = {
    create?: XOR<AlumnoActividadCreateWithoutCicloInput, AlumnoActividadUncheckedCreateWithoutCicloInput> | AlumnoActividadCreateWithoutCicloInput[] | AlumnoActividadUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutCicloInput | AlumnoActividadCreateOrConnectWithoutCicloInput[]
    upsert?: AlumnoActividadUpsertWithWhereUniqueWithoutCicloInput | AlumnoActividadUpsertWithWhereUniqueWithoutCicloInput[]
    createMany?: AlumnoActividadCreateManyCicloInputEnvelope
    set?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    disconnect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    delete?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    update?: AlumnoActividadUpdateWithWhereUniqueWithoutCicloInput | AlumnoActividadUpdateWithWhereUniqueWithoutCicloInput[]
    updateMany?: AlumnoActividadUpdateManyWithWhereWithoutCicloInput | AlumnoActividadUpdateManyWithWhereWithoutCicloInput[]
    deleteMany?: AlumnoActividadScalarWhereInput | AlumnoActividadScalarWhereInput[]
  }

  export type GrupoUncheckedUpdateManyWithoutCicloNestedInput = {
    create?: XOR<GrupoCreateWithoutCicloInput, GrupoUncheckedCreateWithoutCicloInput> | GrupoCreateWithoutCicloInput[] | GrupoUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutCicloInput | GrupoCreateOrConnectWithoutCicloInput[]
    upsert?: GrupoUpsertWithWhereUniqueWithoutCicloInput | GrupoUpsertWithWhereUniqueWithoutCicloInput[]
    createMany?: GrupoCreateManyCicloInputEnvelope
    set?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    disconnect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    delete?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    update?: GrupoUpdateWithWhereUniqueWithoutCicloInput | GrupoUpdateWithWhereUniqueWithoutCicloInput[]
    updateMany?: GrupoUpdateManyWithWhereWithoutCicloInput | GrupoUpdateManyWithWhereWithoutCicloInput[]
    deleteMany?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
  }

  export type ActividadUncheckedUpdateManyWithoutCicloNestedInput = {
    create?: XOR<ActividadCreateWithoutCicloInput, ActividadUncheckedCreateWithoutCicloInput> | ActividadCreateWithoutCicloInput[] | ActividadUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: ActividadCreateOrConnectWithoutCicloInput | ActividadCreateOrConnectWithoutCicloInput[]
    upsert?: ActividadUpsertWithWhereUniqueWithoutCicloInput | ActividadUpsertWithWhereUniqueWithoutCicloInput[]
    createMany?: ActividadCreateManyCicloInputEnvelope
    set?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    disconnect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    delete?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    connect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    update?: ActividadUpdateWithWhereUniqueWithoutCicloInput | ActividadUpdateWithWhereUniqueWithoutCicloInput[]
    updateMany?: ActividadUpdateManyWithWhereWithoutCicloInput | ActividadUpdateManyWithWhereWithoutCicloInput[]
    deleteMany?: ActividadScalarWhereInput | ActividadScalarWhereInput[]
  }

  export type AlumnoActividadUncheckedUpdateManyWithoutCicloNestedInput = {
    create?: XOR<AlumnoActividadCreateWithoutCicloInput, AlumnoActividadUncheckedCreateWithoutCicloInput> | AlumnoActividadCreateWithoutCicloInput[] | AlumnoActividadUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutCicloInput | AlumnoActividadCreateOrConnectWithoutCicloInput[]
    upsert?: AlumnoActividadUpsertWithWhereUniqueWithoutCicloInput | AlumnoActividadUpsertWithWhereUniqueWithoutCicloInput[]
    createMany?: AlumnoActividadCreateManyCicloInputEnvelope
    set?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    disconnect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    delete?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    update?: AlumnoActividadUpdateWithWhereUniqueWithoutCicloInput | AlumnoActividadUpdateWithWhereUniqueWithoutCicloInput[]
    updateMany?: AlumnoActividadUpdateManyWithWhereWithoutCicloInput | AlumnoActividadUpdateManyWithWhereWithoutCicloInput[]
    deleteMany?: AlumnoActividadScalarWhereInput | AlumnoActividadScalarWhereInput[]
  }

  export type PlanDeEstudioCreateNestedOneWithoutGeneracionesInput = {
    create?: XOR<PlanDeEstudioCreateWithoutGeneracionesInput, PlanDeEstudioUncheckedCreateWithoutGeneracionesInput>
    connectOrCreate?: PlanDeEstudioCreateOrConnectWithoutGeneracionesInput
    connect?: PlanDeEstudioWhereUniqueInput
  }

  export type EscuelaCreateNestedOneWithoutGeneracionesInput = {
    create?: XOR<EscuelaCreateWithoutGeneracionesInput, EscuelaUncheckedCreateWithoutGeneracionesInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutGeneracionesInput
    connect?: EscuelaWhereUniqueInput
  }

  export type GrupoCreateNestedManyWithoutGeneracionInput = {
    create?: XOR<GrupoCreateWithoutGeneracionInput, GrupoUncheckedCreateWithoutGeneracionInput> | GrupoCreateWithoutGeneracionInput[] | GrupoUncheckedCreateWithoutGeneracionInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutGeneracionInput | GrupoCreateOrConnectWithoutGeneracionInput[]
    createMany?: GrupoCreateManyGeneracionInputEnvelope
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
  }

  export type UsuarioCreateNestedManyWithoutGeneracionInput = {
    create?: XOR<UsuarioCreateWithoutGeneracionInput, UsuarioUncheckedCreateWithoutGeneracionInput> | UsuarioCreateWithoutGeneracionInput[] | UsuarioUncheckedCreateWithoutGeneracionInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGeneracionInput | UsuarioCreateOrConnectWithoutGeneracionInput[]
    createMany?: UsuarioCreateManyGeneracionInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type GrupoUncheckedCreateNestedManyWithoutGeneracionInput = {
    create?: XOR<GrupoCreateWithoutGeneracionInput, GrupoUncheckedCreateWithoutGeneracionInput> | GrupoCreateWithoutGeneracionInput[] | GrupoUncheckedCreateWithoutGeneracionInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutGeneracionInput | GrupoCreateOrConnectWithoutGeneracionInput[]
    createMany?: GrupoCreateManyGeneracionInputEnvelope
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutGeneracionInput = {
    create?: XOR<UsuarioCreateWithoutGeneracionInput, UsuarioUncheckedCreateWithoutGeneracionInput> | UsuarioCreateWithoutGeneracionInput[] | UsuarioUncheckedCreateWithoutGeneracionInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGeneracionInput | UsuarioCreateOrConnectWithoutGeneracionInput[]
    createMany?: UsuarioCreateManyGeneracionInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type PlanDeEstudioUpdateOneRequiredWithoutGeneracionesNestedInput = {
    create?: XOR<PlanDeEstudioCreateWithoutGeneracionesInput, PlanDeEstudioUncheckedCreateWithoutGeneracionesInput>
    connectOrCreate?: PlanDeEstudioCreateOrConnectWithoutGeneracionesInput
    upsert?: PlanDeEstudioUpsertWithoutGeneracionesInput
    connect?: PlanDeEstudioWhereUniqueInput
    update?: XOR<XOR<PlanDeEstudioUpdateToOneWithWhereWithoutGeneracionesInput, PlanDeEstudioUpdateWithoutGeneracionesInput>, PlanDeEstudioUncheckedUpdateWithoutGeneracionesInput>
  }

  export type EscuelaUpdateOneRequiredWithoutGeneracionesNestedInput = {
    create?: XOR<EscuelaCreateWithoutGeneracionesInput, EscuelaUncheckedCreateWithoutGeneracionesInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutGeneracionesInput
    upsert?: EscuelaUpsertWithoutGeneracionesInput
    connect?: EscuelaWhereUniqueInput
    update?: XOR<XOR<EscuelaUpdateToOneWithWhereWithoutGeneracionesInput, EscuelaUpdateWithoutGeneracionesInput>, EscuelaUncheckedUpdateWithoutGeneracionesInput>
  }

  export type GrupoUpdateManyWithoutGeneracionNestedInput = {
    create?: XOR<GrupoCreateWithoutGeneracionInput, GrupoUncheckedCreateWithoutGeneracionInput> | GrupoCreateWithoutGeneracionInput[] | GrupoUncheckedCreateWithoutGeneracionInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutGeneracionInput | GrupoCreateOrConnectWithoutGeneracionInput[]
    upsert?: GrupoUpsertWithWhereUniqueWithoutGeneracionInput | GrupoUpsertWithWhereUniqueWithoutGeneracionInput[]
    createMany?: GrupoCreateManyGeneracionInputEnvelope
    set?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    disconnect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    delete?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    update?: GrupoUpdateWithWhereUniqueWithoutGeneracionInput | GrupoUpdateWithWhereUniqueWithoutGeneracionInput[]
    updateMany?: GrupoUpdateManyWithWhereWithoutGeneracionInput | GrupoUpdateManyWithWhereWithoutGeneracionInput[]
    deleteMany?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
  }

  export type UsuarioUpdateManyWithoutGeneracionNestedInput = {
    create?: XOR<UsuarioCreateWithoutGeneracionInput, UsuarioUncheckedCreateWithoutGeneracionInput> | UsuarioCreateWithoutGeneracionInput[] | UsuarioUncheckedCreateWithoutGeneracionInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGeneracionInput | UsuarioCreateOrConnectWithoutGeneracionInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutGeneracionInput | UsuarioUpsertWithWhereUniqueWithoutGeneracionInput[]
    createMany?: UsuarioCreateManyGeneracionInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutGeneracionInput | UsuarioUpdateWithWhereUniqueWithoutGeneracionInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutGeneracionInput | UsuarioUpdateManyWithWhereWithoutGeneracionInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type GrupoUncheckedUpdateManyWithoutGeneracionNestedInput = {
    create?: XOR<GrupoCreateWithoutGeneracionInput, GrupoUncheckedCreateWithoutGeneracionInput> | GrupoCreateWithoutGeneracionInput[] | GrupoUncheckedCreateWithoutGeneracionInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutGeneracionInput | GrupoCreateOrConnectWithoutGeneracionInput[]
    upsert?: GrupoUpsertWithWhereUniqueWithoutGeneracionInput | GrupoUpsertWithWhereUniqueWithoutGeneracionInput[]
    createMany?: GrupoCreateManyGeneracionInputEnvelope
    set?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    disconnect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    delete?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    update?: GrupoUpdateWithWhereUniqueWithoutGeneracionInput | GrupoUpdateWithWhereUniqueWithoutGeneracionInput[]
    updateMany?: GrupoUpdateManyWithWhereWithoutGeneracionInput | GrupoUpdateManyWithWhereWithoutGeneracionInput[]
    deleteMany?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutGeneracionNestedInput = {
    create?: XOR<UsuarioCreateWithoutGeneracionInput, UsuarioUncheckedCreateWithoutGeneracionInput> | UsuarioCreateWithoutGeneracionInput[] | UsuarioUncheckedCreateWithoutGeneracionInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGeneracionInput | UsuarioCreateOrConnectWithoutGeneracionInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutGeneracionInput | UsuarioUpsertWithWhereUniqueWithoutGeneracionInput[]
    createMany?: UsuarioCreateManyGeneracionInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutGeneracionInput | UsuarioUpdateWithWhereUniqueWithoutGeneracionInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutGeneracionInput | UsuarioUpdateManyWithWhereWithoutGeneracionInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type EscuelaCreateNestedOneWithoutDepartamentosInput = {
    create?: XOR<EscuelaCreateWithoutDepartamentosInput, EscuelaUncheckedCreateWithoutDepartamentosInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutDepartamentosInput
    connect?: EscuelaWhereUniqueInput
  }

  export type ActividadCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<ActividadCreateWithoutDepartamentoInput, ActividadUncheckedCreateWithoutDepartamentoInput> | ActividadCreateWithoutDepartamentoInput[] | ActividadUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: ActividadCreateOrConnectWithoutDepartamentoInput | ActividadCreateOrConnectWithoutDepartamentoInput[]
    createMany?: ActividadCreateManyDepartamentoInputEnvelope
    connect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
  }

  export type PlanDepartamentoCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<PlanDepartamentoCreateWithoutDepartamentoInput, PlanDepartamentoUncheckedCreateWithoutDepartamentoInput> | PlanDepartamentoCreateWithoutDepartamentoInput[] | PlanDepartamentoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: PlanDepartamentoCreateOrConnectWithoutDepartamentoInput | PlanDepartamentoCreateOrConnectWithoutDepartamentoInput[]
    createMany?: PlanDepartamentoCreateManyDepartamentoInputEnvelope
    connect?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
  }

  export type ActividadUncheckedCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<ActividadCreateWithoutDepartamentoInput, ActividadUncheckedCreateWithoutDepartamentoInput> | ActividadCreateWithoutDepartamentoInput[] | ActividadUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: ActividadCreateOrConnectWithoutDepartamentoInput | ActividadCreateOrConnectWithoutDepartamentoInput[]
    createMany?: ActividadCreateManyDepartamentoInputEnvelope
    connect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
  }

  export type PlanDepartamentoUncheckedCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<PlanDepartamentoCreateWithoutDepartamentoInput, PlanDepartamentoUncheckedCreateWithoutDepartamentoInput> | PlanDepartamentoCreateWithoutDepartamentoInput[] | PlanDepartamentoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: PlanDepartamentoCreateOrConnectWithoutDepartamentoInput | PlanDepartamentoCreateOrConnectWithoutDepartamentoInput[]
    createMany?: PlanDepartamentoCreateManyDepartamentoInputEnvelope
    connect?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
  }

  export type EscuelaUpdateOneRequiredWithoutDepartamentosNestedInput = {
    create?: XOR<EscuelaCreateWithoutDepartamentosInput, EscuelaUncheckedCreateWithoutDepartamentosInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutDepartamentosInput
    upsert?: EscuelaUpsertWithoutDepartamentosInput
    connect?: EscuelaWhereUniqueInput
    update?: XOR<XOR<EscuelaUpdateToOneWithWhereWithoutDepartamentosInput, EscuelaUpdateWithoutDepartamentosInput>, EscuelaUncheckedUpdateWithoutDepartamentosInput>
  }

  export type ActividadUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<ActividadCreateWithoutDepartamentoInput, ActividadUncheckedCreateWithoutDepartamentoInput> | ActividadCreateWithoutDepartamentoInput[] | ActividadUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: ActividadCreateOrConnectWithoutDepartamentoInput | ActividadCreateOrConnectWithoutDepartamentoInput[]
    upsert?: ActividadUpsertWithWhereUniqueWithoutDepartamentoInput | ActividadUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: ActividadCreateManyDepartamentoInputEnvelope
    set?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    disconnect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    delete?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    connect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    update?: ActividadUpdateWithWhereUniqueWithoutDepartamentoInput | ActividadUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: ActividadUpdateManyWithWhereWithoutDepartamentoInput | ActividadUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: ActividadScalarWhereInput | ActividadScalarWhereInput[]
  }

  export type PlanDepartamentoUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<PlanDepartamentoCreateWithoutDepartamentoInput, PlanDepartamentoUncheckedCreateWithoutDepartamentoInput> | PlanDepartamentoCreateWithoutDepartamentoInput[] | PlanDepartamentoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: PlanDepartamentoCreateOrConnectWithoutDepartamentoInput | PlanDepartamentoCreateOrConnectWithoutDepartamentoInput[]
    upsert?: PlanDepartamentoUpsertWithWhereUniqueWithoutDepartamentoInput | PlanDepartamentoUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: PlanDepartamentoCreateManyDepartamentoInputEnvelope
    set?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    disconnect?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    delete?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    connect?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    update?: PlanDepartamentoUpdateWithWhereUniqueWithoutDepartamentoInput | PlanDepartamentoUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: PlanDepartamentoUpdateManyWithWhereWithoutDepartamentoInput | PlanDepartamentoUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: PlanDepartamentoScalarWhereInput | PlanDepartamentoScalarWhereInput[]
  }

  export type ActividadUncheckedUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<ActividadCreateWithoutDepartamentoInput, ActividadUncheckedCreateWithoutDepartamentoInput> | ActividadCreateWithoutDepartamentoInput[] | ActividadUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: ActividadCreateOrConnectWithoutDepartamentoInput | ActividadCreateOrConnectWithoutDepartamentoInput[]
    upsert?: ActividadUpsertWithWhereUniqueWithoutDepartamentoInput | ActividadUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: ActividadCreateManyDepartamentoInputEnvelope
    set?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    disconnect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    delete?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    connect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    update?: ActividadUpdateWithWhereUniqueWithoutDepartamentoInput | ActividadUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: ActividadUpdateManyWithWhereWithoutDepartamentoInput | ActividadUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: ActividadScalarWhereInput | ActividadScalarWhereInput[]
  }

  export type PlanDepartamentoUncheckedUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<PlanDepartamentoCreateWithoutDepartamentoInput, PlanDepartamentoUncheckedCreateWithoutDepartamentoInput> | PlanDepartamentoCreateWithoutDepartamentoInput[] | PlanDepartamentoUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: PlanDepartamentoCreateOrConnectWithoutDepartamentoInput | PlanDepartamentoCreateOrConnectWithoutDepartamentoInput[]
    upsert?: PlanDepartamentoUpsertWithWhereUniqueWithoutDepartamentoInput | PlanDepartamentoUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: PlanDepartamentoCreateManyDepartamentoInputEnvelope
    set?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    disconnect?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    delete?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    connect?: PlanDepartamentoWhereUniqueInput | PlanDepartamentoWhereUniqueInput[]
    update?: PlanDepartamentoUpdateWithWhereUniqueWithoutDepartamentoInput | PlanDepartamentoUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: PlanDepartamentoUpdateManyWithWhereWithoutDepartamentoInput | PlanDepartamentoUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: PlanDepartamentoScalarWhereInput | PlanDepartamentoScalarWhereInput[]
  }

  export type EscuelaCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<EscuelaCreateWithoutUsuariosInput, EscuelaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutUsuariosInput
    connect?: EscuelaWhereUniqueInput
  }

  export type GrupoCreateNestedOneWithoutAlumnosInput = {
    create?: XOR<GrupoCreateWithoutAlumnosInput, GrupoUncheckedCreateWithoutAlumnosInput>
    connectOrCreate?: GrupoCreateOrConnectWithoutAlumnosInput
    connect?: GrupoWhereUniqueInput
  }

  export type ActividadCreateNestedManyWithoutCoordinadorInput = {
    create?: XOR<ActividadCreateWithoutCoordinadorInput, ActividadUncheckedCreateWithoutCoordinadorInput> | ActividadCreateWithoutCoordinadorInput[] | ActividadUncheckedCreateWithoutCoordinadorInput[]
    connectOrCreate?: ActividadCreateOrConnectWithoutCoordinadorInput | ActividadCreateOrConnectWithoutCoordinadorInput[]
    createMany?: ActividadCreateManyCoordinadorInputEnvelope
    connect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
  }

  export type AlumnoActividadCreateNestedManyWithoutAlumnoInput = {
    create?: XOR<AlumnoActividadCreateWithoutAlumnoInput, AlumnoActividadUncheckedCreateWithoutAlumnoInput> | AlumnoActividadCreateWithoutAlumnoInput[] | AlumnoActividadUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutAlumnoInput | AlumnoActividadCreateOrConnectWithoutAlumnoInput[]
    createMany?: AlumnoActividadCreateManyAlumnoInputEnvelope
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
  }

  export type AlumnoActividadCreateNestedManyWithoutCoordinadorInput = {
    create?: XOR<AlumnoActividadCreateWithoutCoordinadorInput, AlumnoActividadUncheckedCreateWithoutCoordinadorInput> | AlumnoActividadCreateWithoutCoordinadorInput[] | AlumnoActividadUncheckedCreateWithoutCoordinadorInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutCoordinadorInput | AlumnoActividadCreateOrConnectWithoutCoordinadorInput[]
    createMany?: AlumnoActividadCreateManyCoordinadorInputEnvelope
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
  }

  export type RegistroCambiosCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RegistroCambiosCreateWithoutUsuarioInput, RegistroCambiosUncheckedCreateWithoutUsuarioInput> | RegistroCambiosCreateWithoutUsuarioInput[] | RegistroCambiosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RegistroCambiosCreateOrConnectWithoutUsuarioInput | RegistroCambiosCreateOrConnectWithoutUsuarioInput[]
    createMany?: RegistroCambiosCreateManyUsuarioInputEnvelope
    connect?: RegistroCambiosWhereUniqueInput | RegistroCambiosWhereUniqueInput[]
  }

  export type GeneracionCreateNestedOneWithoutAlumnosInput = {
    create?: XOR<GeneracionCreateWithoutAlumnosInput, GeneracionUncheckedCreateWithoutAlumnosInput>
    connectOrCreate?: GeneracionCreateOrConnectWithoutAlumnosInput
    connect?: GeneracionWhereUniqueInput
  }

  export type ActividadUncheckedCreateNestedManyWithoutCoordinadorInput = {
    create?: XOR<ActividadCreateWithoutCoordinadorInput, ActividadUncheckedCreateWithoutCoordinadorInput> | ActividadCreateWithoutCoordinadorInput[] | ActividadUncheckedCreateWithoutCoordinadorInput[]
    connectOrCreate?: ActividadCreateOrConnectWithoutCoordinadorInput | ActividadCreateOrConnectWithoutCoordinadorInput[]
    createMany?: ActividadCreateManyCoordinadorInputEnvelope
    connect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
  }

  export type AlumnoActividadUncheckedCreateNestedManyWithoutAlumnoInput = {
    create?: XOR<AlumnoActividadCreateWithoutAlumnoInput, AlumnoActividadUncheckedCreateWithoutAlumnoInput> | AlumnoActividadCreateWithoutAlumnoInput[] | AlumnoActividadUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutAlumnoInput | AlumnoActividadCreateOrConnectWithoutAlumnoInput[]
    createMany?: AlumnoActividadCreateManyAlumnoInputEnvelope
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
  }

  export type AlumnoActividadUncheckedCreateNestedManyWithoutCoordinadorInput = {
    create?: XOR<AlumnoActividadCreateWithoutCoordinadorInput, AlumnoActividadUncheckedCreateWithoutCoordinadorInput> | AlumnoActividadCreateWithoutCoordinadorInput[] | AlumnoActividadUncheckedCreateWithoutCoordinadorInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutCoordinadorInput | AlumnoActividadCreateOrConnectWithoutCoordinadorInput[]
    createMany?: AlumnoActividadCreateManyCoordinadorInputEnvelope
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
  }

  export type RegistroCambiosUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RegistroCambiosCreateWithoutUsuarioInput, RegistroCambiosUncheckedCreateWithoutUsuarioInput> | RegistroCambiosCreateWithoutUsuarioInput[] | RegistroCambiosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RegistroCambiosCreateOrConnectWithoutUsuarioInput | RegistroCambiosCreateOrConnectWithoutUsuarioInput[]
    createMany?: RegistroCambiosCreateManyUsuarioInputEnvelope
    connect?: RegistroCambiosWhereUniqueInput | RegistroCambiosWhereUniqueInput[]
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type EscuelaUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<EscuelaCreateWithoutUsuariosInput, EscuelaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutUsuariosInput
    upsert?: EscuelaUpsertWithoutUsuariosInput
    connect?: EscuelaWhereUniqueInput
    update?: XOR<XOR<EscuelaUpdateToOneWithWhereWithoutUsuariosInput, EscuelaUpdateWithoutUsuariosInput>, EscuelaUncheckedUpdateWithoutUsuariosInput>
  }

  export type GrupoUpdateOneWithoutAlumnosNestedInput = {
    create?: XOR<GrupoCreateWithoutAlumnosInput, GrupoUncheckedCreateWithoutAlumnosInput>
    connectOrCreate?: GrupoCreateOrConnectWithoutAlumnosInput
    upsert?: GrupoUpsertWithoutAlumnosInput
    disconnect?: GrupoWhereInput | boolean
    delete?: GrupoWhereInput | boolean
    connect?: GrupoWhereUniqueInput
    update?: XOR<XOR<GrupoUpdateToOneWithWhereWithoutAlumnosInput, GrupoUpdateWithoutAlumnosInput>, GrupoUncheckedUpdateWithoutAlumnosInput>
  }

  export type ActividadUpdateManyWithoutCoordinadorNestedInput = {
    create?: XOR<ActividadCreateWithoutCoordinadorInput, ActividadUncheckedCreateWithoutCoordinadorInput> | ActividadCreateWithoutCoordinadorInput[] | ActividadUncheckedCreateWithoutCoordinadorInput[]
    connectOrCreate?: ActividadCreateOrConnectWithoutCoordinadorInput | ActividadCreateOrConnectWithoutCoordinadorInput[]
    upsert?: ActividadUpsertWithWhereUniqueWithoutCoordinadorInput | ActividadUpsertWithWhereUniqueWithoutCoordinadorInput[]
    createMany?: ActividadCreateManyCoordinadorInputEnvelope
    set?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    disconnect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    delete?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    connect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    update?: ActividadUpdateWithWhereUniqueWithoutCoordinadorInput | ActividadUpdateWithWhereUniqueWithoutCoordinadorInput[]
    updateMany?: ActividadUpdateManyWithWhereWithoutCoordinadorInput | ActividadUpdateManyWithWhereWithoutCoordinadorInput[]
    deleteMany?: ActividadScalarWhereInput | ActividadScalarWhereInput[]
  }

  export type AlumnoActividadUpdateManyWithoutAlumnoNestedInput = {
    create?: XOR<AlumnoActividadCreateWithoutAlumnoInput, AlumnoActividadUncheckedCreateWithoutAlumnoInput> | AlumnoActividadCreateWithoutAlumnoInput[] | AlumnoActividadUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutAlumnoInput | AlumnoActividadCreateOrConnectWithoutAlumnoInput[]
    upsert?: AlumnoActividadUpsertWithWhereUniqueWithoutAlumnoInput | AlumnoActividadUpsertWithWhereUniqueWithoutAlumnoInput[]
    createMany?: AlumnoActividadCreateManyAlumnoInputEnvelope
    set?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    disconnect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    delete?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    update?: AlumnoActividadUpdateWithWhereUniqueWithoutAlumnoInput | AlumnoActividadUpdateWithWhereUniqueWithoutAlumnoInput[]
    updateMany?: AlumnoActividadUpdateManyWithWhereWithoutAlumnoInput | AlumnoActividadUpdateManyWithWhereWithoutAlumnoInput[]
    deleteMany?: AlumnoActividadScalarWhereInput | AlumnoActividadScalarWhereInput[]
  }

  export type AlumnoActividadUpdateManyWithoutCoordinadorNestedInput = {
    create?: XOR<AlumnoActividadCreateWithoutCoordinadorInput, AlumnoActividadUncheckedCreateWithoutCoordinadorInput> | AlumnoActividadCreateWithoutCoordinadorInput[] | AlumnoActividadUncheckedCreateWithoutCoordinadorInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutCoordinadorInput | AlumnoActividadCreateOrConnectWithoutCoordinadorInput[]
    upsert?: AlumnoActividadUpsertWithWhereUniqueWithoutCoordinadorInput | AlumnoActividadUpsertWithWhereUniqueWithoutCoordinadorInput[]
    createMany?: AlumnoActividadCreateManyCoordinadorInputEnvelope
    set?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    disconnect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    delete?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    update?: AlumnoActividadUpdateWithWhereUniqueWithoutCoordinadorInput | AlumnoActividadUpdateWithWhereUniqueWithoutCoordinadorInput[]
    updateMany?: AlumnoActividadUpdateManyWithWhereWithoutCoordinadorInput | AlumnoActividadUpdateManyWithWhereWithoutCoordinadorInput[]
    deleteMany?: AlumnoActividadScalarWhereInput | AlumnoActividadScalarWhereInput[]
  }

  export type RegistroCambiosUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RegistroCambiosCreateWithoutUsuarioInput, RegistroCambiosUncheckedCreateWithoutUsuarioInput> | RegistroCambiosCreateWithoutUsuarioInput[] | RegistroCambiosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RegistroCambiosCreateOrConnectWithoutUsuarioInput | RegistroCambiosCreateOrConnectWithoutUsuarioInput[]
    upsert?: RegistroCambiosUpsertWithWhereUniqueWithoutUsuarioInput | RegistroCambiosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RegistroCambiosCreateManyUsuarioInputEnvelope
    set?: RegistroCambiosWhereUniqueInput | RegistroCambiosWhereUniqueInput[]
    disconnect?: RegistroCambiosWhereUniqueInput | RegistroCambiosWhereUniqueInput[]
    delete?: RegistroCambiosWhereUniqueInput | RegistroCambiosWhereUniqueInput[]
    connect?: RegistroCambiosWhereUniqueInput | RegistroCambiosWhereUniqueInput[]
    update?: RegistroCambiosUpdateWithWhereUniqueWithoutUsuarioInput | RegistroCambiosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RegistroCambiosUpdateManyWithWhereWithoutUsuarioInput | RegistroCambiosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RegistroCambiosScalarWhereInput | RegistroCambiosScalarWhereInput[]
  }

  export type GeneracionUpdateOneWithoutAlumnosNestedInput = {
    create?: XOR<GeneracionCreateWithoutAlumnosInput, GeneracionUncheckedCreateWithoutAlumnosInput>
    connectOrCreate?: GeneracionCreateOrConnectWithoutAlumnosInput
    upsert?: GeneracionUpsertWithoutAlumnosInput
    disconnect?: GeneracionWhereInput | boolean
    delete?: GeneracionWhereInput | boolean
    connect?: GeneracionWhereUniqueInput
    update?: XOR<XOR<GeneracionUpdateToOneWithWhereWithoutAlumnosInput, GeneracionUpdateWithoutAlumnosInput>, GeneracionUncheckedUpdateWithoutAlumnosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ActividadUncheckedUpdateManyWithoutCoordinadorNestedInput = {
    create?: XOR<ActividadCreateWithoutCoordinadorInput, ActividadUncheckedCreateWithoutCoordinadorInput> | ActividadCreateWithoutCoordinadorInput[] | ActividadUncheckedCreateWithoutCoordinadorInput[]
    connectOrCreate?: ActividadCreateOrConnectWithoutCoordinadorInput | ActividadCreateOrConnectWithoutCoordinadorInput[]
    upsert?: ActividadUpsertWithWhereUniqueWithoutCoordinadorInput | ActividadUpsertWithWhereUniqueWithoutCoordinadorInput[]
    createMany?: ActividadCreateManyCoordinadorInputEnvelope
    set?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    disconnect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    delete?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    connect?: ActividadWhereUniqueInput | ActividadWhereUniqueInput[]
    update?: ActividadUpdateWithWhereUniqueWithoutCoordinadorInput | ActividadUpdateWithWhereUniqueWithoutCoordinadorInput[]
    updateMany?: ActividadUpdateManyWithWhereWithoutCoordinadorInput | ActividadUpdateManyWithWhereWithoutCoordinadorInput[]
    deleteMany?: ActividadScalarWhereInput | ActividadScalarWhereInput[]
  }

  export type AlumnoActividadUncheckedUpdateManyWithoutAlumnoNestedInput = {
    create?: XOR<AlumnoActividadCreateWithoutAlumnoInput, AlumnoActividadUncheckedCreateWithoutAlumnoInput> | AlumnoActividadCreateWithoutAlumnoInput[] | AlumnoActividadUncheckedCreateWithoutAlumnoInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutAlumnoInput | AlumnoActividadCreateOrConnectWithoutAlumnoInput[]
    upsert?: AlumnoActividadUpsertWithWhereUniqueWithoutAlumnoInput | AlumnoActividadUpsertWithWhereUniqueWithoutAlumnoInput[]
    createMany?: AlumnoActividadCreateManyAlumnoInputEnvelope
    set?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    disconnect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    delete?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    update?: AlumnoActividadUpdateWithWhereUniqueWithoutAlumnoInput | AlumnoActividadUpdateWithWhereUniqueWithoutAlumnoInput[]
    updateMany?: AlumnoActividadUpdateManyWithWhereWithoutAlumnoInput | AlumnoActividadUpdateManyWithWhereWithoutAlumnoInput[]
    deleteMany?: AlumnoActividadScalarWhereInput | AlumnoActividadScalarWhereInput[]
  }

  export type AlumnoActividadUncheckedUpdateManyWithoutCoordinadorNestedInput = {
    create?: XOR<AlumnoActividadCreateWithoutCoordinadorInput, AlumnoActividadUncheckedCreateWithoutCoordinadorInput> | AlumnoActividadCreateWithoutCoordinadorInput[] | AlumnoActividadUncheckedCreateWithoutCoordinadorInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutCoordinadorInput | AlumnoActividadCreateOrConnectWithoutCoordinadorInput[]
    upsert?: AlumnoActividadUpsertWithWhereUniqueWithoutCoordinadorInput | AlumnoActividadUpsertWithWhereUniqueWithoutCoordinadorInput[]
    createMany?: AlumnoActividadCreateManyCoordinadorInputEnvelope
    set?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    disconnect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    delete?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    update?: AlumnoActividadUpdateWithWhereUniqueWithoutCoordinadorInput | AlumnoActividadUpdateWithWhereUniqueWithoutCoordinadorInput[]
    updateMany?: AlumnoActividadUpdateManyWithWhereWithoutCoordinadorInput | AlumnoActividadUpdateManyWithWhereWithoutCoordinadorInput[]
    deleteMany?: AlumnoActividadScalarWhereInput | AlumnoActividadScalarWhereInput[]
  }

  export type RegistroCambiosUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RegistroCambiosCreateWithoutUsuarioInput, RegistroCambiosUncheckedCreateWithoutUsuarioInput> | RegistroCambiosCreateWithoutUsuarioInput[] | RegistroCambiosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RegistroCambiosCreateOrConnectWithoutUsuarioInput | RegistroCambiosCreateOrConnectWithoutUsuarioInput[]
    upsert?: RegistroCambiosUpsertWithWhereUniqueWithoutUsuarioInput | RegistroCambiosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RegistroCambiosCreateManyUsuarioInputEnvelope
    set?: RegistroCambiosWhereUniqueInput | RegistroCambiosWhereUniqueInput[]
    disconnect?: RegistroCambiosWhereUniqueInput | RegistroCambiosWhereUniqueInput[]
    delete?: RegistroCambiosWhereUniqueInput | RegistroCambiosWhereUniqueInput[]
    connect?: RegistroCambiosWhereUniqueInput | RegistroCambiosWhereUniqueInput[]
    update?: RegistroCambiosUpdateWithWhereUniqueWithoutUsuarioInput | RegistroCambiosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RegistroCambiosUpdateManyWithWhereWithoutUsuarioInput | RegistroCambiosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RegistroCambiosScalarWhereInput | RegistroCambiosScalarWhereInput[]
  }

  export type GeneracionCreateNestedOneWithoutGruposInput = {
    create?: XOR<GeneracionCreateWithoutGruposInput, GeneracionUncheckedCreateWithoutGruposInput>
    connectOrCreate?: GeneracionCreateOrConnectWithoutGruposInput
    connect?: GeneracionWhereUniqueInput
  }

  export type CicloCreateNestedOneWithoutGruposInput = {
    create?: XOR<CicloCreateWithoutGruposInput, CicloUncheckedCreateWithoutGruposInput>
    connectOrCreate?: CicloCreateOrConnectWithoutGruposInput
    connect?: CicloWhereUniqueInput
  }

  export type PlanDeEstudioCreateNestedOneWithoutGruposInput = {
    create?: XOR<PlanDeEstudioCreateWithoutGruposInput, PlanDeEstudioUncheckedCreateWithoutGruposInput>
    connectOrCreate?: PlanDeEstudioCreateOrConnectWithoutGruposInput
    connect?: PlanDeEstudioWhereUniqueInput
  }

  export type EscuelaCreateNestedOneWithoutGruposInput = {
    create?: XOR<EscuelaCreateWithoutGruposInput, EscuelaUncheckedCreateWithoutGruposInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutGruposInput
    connect?: EscuelaWhereUniqueInput
  }

  export type UsuarioCreateNestedManyWithoutGrupoInput = {
    create?: XOR<UsuarioCreateWithoutGrupoInput, UsuarioUncheckedCreateWithoutGrupoInput> | UsuarioCreateWithoutGrupoInput[] | UsuarioUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGrupoInput | UsuarioCreateOrConnectWithoutGrupoInput[]
    createMany?: UsuarioCreateManyGrupoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutGrupoInput = {
    create?: XOR<UsuarioCreateWithoutGrupoInput, UsuarioUncheckedCreateWithoutGrupoInput> | UsuarioCreateWithoutGrupoInput[] | UsuarioUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGrupoInput | UsuarioCreateOrConnectWithoutGrupoInput[]
    createMany?: UsuarioCreateManyGrupoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type EnumTurnoFieldUpdateOperationsInput = {
    set?: $Enums.Turno
  }

  export type NullableEnumFaseFieldUpdateOperationsInput = {
    set?: $Enums.Fase | null
  }

  export type GeneracionUpdateOneRequiredWithoutGruposNestedInput = {
    create?: XOR<GeneracionCreateWithoutGruposInput, GeneracionUncheckedCreateWithoutGruposInput>
    connectOrCreate?: GeneracionCreateOrConnectWithoutGruposInput
    upsert?: GeneracionUpsertWithoutGruposInput
    connect?: GeneracionWhereUniqueInput
    update?: XOR<XOR<GeneracionUpdateToOneWithWhereWithoutGruposInput, GeneracionUpdateWithoutGruposInput>, GeneracionUncheckedUpdateWithoutGruposInput>
  }

  export type CicloUpdateOneRequiredWithoutGruposNestedInput = {
    create?: XOR<CicloCreateWithoutGruposInput, CicloUncheckedCreateWithoutGruposInput>
    connectOrCreate?: CicloCreateOrConnectWithoutGruposInput
    upsert?: CicloUpsertWithoutGruposInput
    connect?: CicloWhereUniqueInput
    update?: XOR<XOR<CicloUpdateToOneWithWhereWithoutGruposInput, CicloUpdateWithoutGruposInput>, CicloUncheckedUpdateWithoutGruposInput>
  }

  export type PlanDeEstudioUpdateOneRequiredWithoutGruposNestedInput = {
    create?: XOR<PlanDeEstudioCreateWithoutGruposInput, PlanDeEstudioUncheckedCreateWithoutGruposInput>
    connectOrCreate?: PlanDeEstudioCreateOrConnectWithoutGruposInput
    upsert?: PlanDeEstudioUpsertWithoutGruposInput
    connect?: PlanDeEstudioWhereUniqueInput
    update?: XOR<XOR<PlanDeEstudioUpdateToOneWithWhereWithoutGruposInput, PlanDeEstudioUpdateWithoutGruposInput>, PlanDeEstudioUncheckedUpdateWithoutGruposInput>
  }

  export type EscuelaUpdateOneRequiredWithoutGruposNestedInput = {
    create?: XOR<EscuelaCreateWithoutGruposInput, EscuelaUncheckedCreateWithoutGruposInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutGruposInput
    upsert?: EscuelaUpsertWithoutGruposInput
    connect?: EscuelaWhereUniqueInput
    update?: XOR<XOR<EscuelaUpdateToOneWithWhereWithoutGruposInput, EscuelaUpdateWithoutGruposInput>, EscuelaUncheckedUpdateWithoutGruposInput>
  }

  export type UsuarioUpdateManyWithoutGrupoNestedInput = {
    create?: XOR<UsuarioCreateWithoutGrupoInput, UsuarioUncheckedCreateWithoutGrupoInput> | UsuarioCreateWithoutGrupoInput[] | UsuarioUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGrupoInput | UsuarioCreateOrConnectWithoutGrupoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutGrupoInput | UsuarioUpsertWithWhereUniqueWithoutGrupoInput[]
    createMany?: UsuarioCreateManyGrupoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutGrupoInput | UsuarioUpdateWithWhereUniqueWithoutGrupoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutGrupoInput | UsuarioUpdateManyWithWhereWithoutGrupoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutGrupoNestedInput = {
    create?: XOR<UsuarioCreateWithoutGrupoInput, UsuarioUncheckedCreateWithoutGrupoInput> | UsuarioCreateWithoutGrupoInput[] | UsuarioUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGrupoInput | UsuarioCreateOrConnectWithoutGrupoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutGrupoInput | UsuarioUpsertWithWhereUniqueWithoutGrupoInput[]
    createMany?: UsuarioCreateManyGrupoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutGrupoInput | UsuarioUpdateWithWhereUniqueWithoutGrupoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutGrupoInput | UsuarioUpdateManyWithWhereWithoutGrupoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type DepartamentoCreateNestedOneWithoutActividadesInput = {
    create?: XOR<DepartamentoCreateWithoutActividadesInput, DepartamentoUncheckedCreateWithoutActividadesInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutActividadesInput
    connect?: DepartamentoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutActividades_creadasInput = {
    create?: XOR<UsuarioCreateWithoutActividades_creadasInput, UsuarioUncheckedCreateWithoutActividades_creadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutActividades_creadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CicloCreateNestedOneWithoutActividadesInput = {
    create?: XOR<CicloCreateWithoutActividadesInput, CicloUncheckedCreateWithoutActividadesInput>
    connectOrCreate?: CicloCreateOrConnectWithoutActividadesInput
    connect?: CicloWhereUniqueInput
  }

  export type AlumnoActividadCreateNestedManyWithoutActividadInput = {
    create?: XOR<AlumnoActividadCreateWithoutActividadInput, AlumnoActividadUncheckedCreateWithoutActividadInput> | AlumnoActividadCreateWithoutActividadInput[] | AlumnoActividadUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutActividadInput | AlumnoActividadCreateOrConnectWithoutActividadInput[]
    createMany?: AlumnoActividadCreateManyActividadInputEnvelope
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
  }

  export type AlumnoActividadUncheckedCreateNestedManyWithoutActividadInput = {
    create?: XOR<AlumnoActividadCreateWithoutActividadInput, AlumnoActividadUncheckedCreateWithoutActividadInput> | AlumnoActividadCreateWithoutActividadInput[] | AlumnoActividadUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutActividadInput | AlumnoActividadCreateOrConnectWithoutActividadInput[]
    createMany?: AlumnoActividadCreateManyActividadInputEnvelope
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
  }

  export type DepartamentoUpdateOneRequiredWithoutActividadesNestedInput = {
    create?: XOR<DepartamentoCreateWithoutActividadesInput, DepartamentoUncheckedCreateWithoutActividadesInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutActividadesInput
    upsert?: DepartamentoUpsertWithoutActividadesInput
    connect?: DepartamentoWhereUniqueInput
    update?: XOR<XOR<DepartamentoUpdateToOneWithWhereWithoutActividadesInput, DepartamentoUpdateWithoutActividadesInput>, DepartamentoUncheckedUpdateWithoutActividadesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutActividades_creadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutActividades_creadasInput, UsuarioUncheckedCreateWithoutActividades_creadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutActividades_creadasInput
    upsert?: UsuarioUpsertWithoutActividades_creadasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutActividades_creadasInput, UsuarioUpdateWithoutActividades_creadasInput>, UsuarioUncheckedUpdateWithoutActividades_creadasInput>
  }

  export type CicloUpdateOneRequiredWithoutActividadesNestedInput = {
    create?: XOR<CicloCreateWithoutActividadesInput, CicloUncheckedCreateWithoutActividadesInput>
    connectOrCreate?: CicloCreateOrConnectWithoutActividadesInput
    upsert?: CicloUpsertWithoutActividadesInput
    connect?: CicloWhereUniqueInput
    update?: XOR<XOR<CicloUpdateToOneWithWhereWithoutActividadesInput, CicloUpdateWithoutActividadesInput>, CicloUncheckedUpdateWithoutActividadesInput>
  }

  export type AlumnoActividadUpdateManyWithoutActividadNestedInput = {
    create?: XOR<AlumnoActividadCreateWithoutActividadInput, AlumnoActividadUncheckedCreateWithoutActividadInput> | AlumnoActividadCreateWithoutActividadInput[] | AlumnoActividadUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutActividadInput | AlumnoActividadCreateOrConnectWithoutActividadInput[]
    upsert?: AlumnoActividadUpsertWithWhereUniqueWithoutActividadInput | AlumnoActividadUpsertWithWhereUniqueWithoutActividadInput[]
    createMany?: AlumnoActividadCreateManyActividadInputEnvelope
    set?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    disconnect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    delete?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    update?: AlumnoActividadUpdateWithWhereUniqueWithoutActividadInput | AlumnoActividadUpdateWithWhereUniqueWithoutActividadInput[]
    updateMany?: AlumnoActividadUpdateManyWithWhereWithoutActividadInput | AlumnoActividadUpdateManyWithWhereWithoutActividadInput[]
    deleteMany?: AlumnoActividadScalarWhereInput | AlumnoActividadScalarWhereInput[]
  }

  export type AlumnoActividadUncheckedUpdateManyWithoutActividadNestedInput = {
    create?: XOR<AlumnoActividadCreateWithoutActividadInput, AlumnoActividadUncheckedCreateWithoutActividadInput> | AlumnoActividadCreateWithoutActividadInput[] | AlumnoActividadUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: AlumnoActividadCreateOrConnectWithoutActividadInput | AlumnoActividadCreateOrConnectWithoutActividadInput[]
    upsert?: AlumnoActividadUpsertWithWhereUniqueWithoutActividadInput | AlumnoActividadUpsertWithWhereUniqueWithoutActividadInput[]
    createMany?: AlumnoActividadCreateManyActividadInputEnvelope
    set?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    disconnect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    delete?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    connect?: AlumnoActividadWhereUniqueInput | AlumnoActividadWhereUniqueInput[]
    update?: AlumnoActividadUpdateWithWhereUniqueWithoutActividadInput | AlumnoActividadUpdateWithWhereUniqueWithoutActividadInput[]
    updateMany?: AlumnoActividadUpdateManyWithWhereWithoutActividadInput | AlumnoActividadUpdateManyWithWhereWithoutActividadInput[]
    deleteMany?: AlumnoActividadScalarWhereInput | AlumnoActividadScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutRegistros_actInput = {
    create?: XOR<UsuarioCreateWithoutRegistros_actInput, UsuarioUncheckedCreateWithoutRegistros_actInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRegistros_actInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ActividadCreateNestedOneWithoutAlumnoActsInput = {
    create?: XOR<ActividadCreateWithoutAlumnoActsInput, ActividadUncheckedCreateWithoutAlumnoActsInput>
    connectOrCreate?: ActividadCreateOrConnectWithoutAlumnoActsInput
    connect?: ActividadWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutRegistros_puntosInput = {
    create?: XOR<UsuarioCreateWithoutRegistros_puntosInput, UsuarioUncheckedCreateWithoutRegistros_puntosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRegistros_puntosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CicloCreateNestedOneWithoutAlumnoActsInput = {
    create?: XOR<CicloCreateWithoutAlumnoActsInput, CicloUncheckedCreateWithoutAlumnoActsInput>
    connectOrCreate?: CicloCreateOrConnectWithoutAlumnoActsInput
    connect?: CicloWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutRegistros_actNestedInput = {
    create?: XOR<UsuarioCreateWithoutRegistros_actInput, UsuarioUncheckedCreateWithoutRegistros_actInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRegistros_actInput
    upsert?: UsuarioUpsertWithoutRegistros_actInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRegistros_actInput, UsuarioUpdateWithoutRegistros_actInput>, UsuarioUncheckedUpdateWithoutRegistros_actInput>
  }

  export type ActividadUpdateOneRequiredWithoutAlumnoActsNestedInput = {
    create?: XOR<ActividadCreateWithoutAlumnoActsInput, ActividadUncheckedCreateWithoutAlumnoActsInput>
    connectOrCreate?: ActividadCreateOrConnectWithoutAlumnoActsInput
    upsert?: ActividadUpsertWithoutAlumnoActsInput
    connect?: ActividadWhereUniqueInput
    update?: XOR<XOR<ActividadUpdateToOneWithWhereWithoutAlumnoActsInput, ActividadUpdateWithoutAlumnoActsInput>, ActividadUncheckedUpdateWithoutAlumnoActsInput>
  }

  export type UsuarioUpdateOneRequiredWithoutRegistros_puntosNestedInput = {
    create?: XOR<UsuarioCreateWithoutRegistros_puntosInput, UsuarioUncheckedCreateWithoutRegistros_puntosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRegistros_puntosInput
    upsert?: UsuarioUpsertWithoutRegistros_puntosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRegistros_puntosInput, UsuarioUpdateWithoutRegistros_puntosInput>, UsuarioUncheckedUpdateWithoutRegistros_puntosInput>
  }

  export type CicloUpdateOneRequiredWithoutAlumnoActsNestedInput = {
    create?: XOR<CicloCreateWithoutAlumnoActsInput, CicloUncheckedCreateWithoutAlumnoActsInput>
    connectOrCreate?: CicloCreateOrConnectWithoutAlumnoActsInput
    upsert?: CicloUpsertWithoutAlumnoActsInput
    connect?: CicloWhereUniqueInput
    update?: XOR<XOR<CicloUpdateToOneWithWhereWithoutAlumnoActsInput, CicloUpdateWithoutAlumnoActsInput>, CicloUncheckedUpdateWithoutAlumnoActsInput>
  }

  export type PlanDeEstudioCreateNestedOneWithoutPlanDeptosInput = {
    create?: XOR<PlanDeEstudioCreateWithoutPlanDeptosInput, PlanDeEstudioUncheckedCreateWithoutPlanDeptosInput>
    connectOrCreate?: PlanDeEstudioCreateOrConnectWithoutPlanDeptosInput
    connect?: PlanDeEstudioWhereUniqueInput
  }

  export type DepartamentoCreateNestedOneWithoutPlanDeptosInput = {
    create?: XOR<DepartamentoCreateWithoutPlanDeptosInput, DepartamentoUncheckedCreateWithoutPlanDeptosInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutPlanDeptosInput
    connect?: DepartamentoWhereUniqueInput
  }

  export type PlanDeEstudioUpdateOneRequiredWithoutPlanDeptosNestedInput = {
    create?: XOR<PlanDeEstudioCreateWithoutPlanDeptosInput, PlanDeEstudioUncheckedCreateWithoutPlanDeptosInput>
    connectOrCreate?: PlanDeEstudioCreateOrConnectWithoutPlanDeptosInput
    upsert?: PlanDeEstudioUpsertWithoutPlanDeptosInput
    connect?: PlanDeEstudioWhereUniqueInput
    update?: XOR<XOR<PlanDeEstudioUpdateToOneWithWhereWithoutPlanDeptosInput, PlanDeEstudioUpdateWithoutPlanDeptosInput>, PlanDeEstudioUncheckedUpdateWithoutPlanDeptosInput>
  }

  export type DepartamentoUpdateOneRequiredWithoutPlanDeptosNestedInput = {
    create?: XOR<DepartamentoCreateWithoutPlanDeptosInput, DepartamentoUncheckedCreateWithoutPlanDeptosInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutPlanDeptosInput
    upsert?: DepartamentoUpsertWithoutPlanDeptosInput
    connect?: DepartamentoWhereUniqueInput
    update?: XOR<XOR<DepartamentoUpdateToOneWithWhereWithoutPlanDeptosInput, DepartamentoUpdateWithoutPlanDeptosInput>, DepartamentoUncheckedUpdateWithoutPlanDeptosInput>
  }

  export type UsuarioCreateNestedOneWithoutLogsInput = {
    create?: XOR<UsuarioCreateWithoutLogsInput, UsuarioUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<UsuarioCreateWithoutLogsInput, UsuarioUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogsInput
    upsert?: UsuarioUpsertWithoutLogsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLogsInput, UsuarioUpdateWithoutLogsInput>, UsuarioUncheckedUpdateWithoutLogsInput>
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

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipoCicloFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCiclo | EnumTipoCicloFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCiclo[] | ListEnumTipoCicloFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCiclo[] | ListEnumTipoCicloFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCicloFilter<$PrismaModel> | $Enums.TipoCiclo
  }

  export type NestedEnumTipoCicloWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCiclo | EnumTipoCicloFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCiclo[] | ListEnumTipoCicloFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCiclo[] | ListEnumTipoCicloFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCicloWithAggregatesFilter<$PrismaModel> | $Enums.TipoCiclo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCicloFilter<$PrismaModel>
    _max?: NestedEnumTipoCicloFilter<$PrismaModel>
  }

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type NestedEnumTurnoFilter<$PrismaModel = never> = {
    equals?: $Enums.Turno | EnumTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumTurnoFilter<$PrismaModel> | $Enums.Turno
  }

  export type NestedEnumFaseNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Fase | EnumFaseFieldRefInput<$PrismaModel> | null
    in?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFaseNullableFilter<$PrismaModel> | $Enums.Fase | null
  }

  export type NestedEnumTurnoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Turno | EnumTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumTurnoWithAggregatesFilter<$PrismaModel> | $Enums.Turno
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTurnoFilter<$PrismaModel>
    _max?: NestedEnumTurnoFilter<$PrismaModel>
  }

  export type NestedEnumFaseNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Fase | EnumFaseFieldRefInput<$PrismaModel> | null
    in?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Fase[] | ListEnumFaseFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFaseNullableWithAggregatesFilter<$PrismaModel> | $Enums.Fase | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFaseNullableFilter<$PrismaModel>
    _max?: NestedEnumFaseNullableFilter<$PrismaModel>
  }

  export type PlanDeEstudioCreateWithoutEscuelaInput = {
    nombre: string
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    ciclos?: CicloCreateNestedManyWithoutPlanInput
    generaciones?: GeneracionCreateNestedManyWithoutPlanInput
    planDeptos?: PlanDepartamentoCreateNestedManyWithoutPlanInput
    grupos?: GrupoCreateNestedManyWithoutPlanInput
  }

  export type PlanDeEstudioUncheckedCreateWithoutEscuelaInput = {
    id_plan?: number
    nombre: string
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    ciclos?: CicloUncheckedCreateNestedManyWithoutPlanInput
    generaciones?: GeneracionUncheckedCreateNestedManyWithoutPlanInput
    planDeptos?: PlanDepartamentoUncheckedCreateNestedManyWithoutPlanInput
    grupos?: GrupoUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanDeEstudioCreateOrConnectWithoutEscuelaInput = {
    where: PlanDeEstudioWhereUniqueInput
    create: XOR<PlanDeEstudioCreateWithoutEscuelaInput, PlanDeEstudioUncheckedCreateWithoutEscuelaInput>
  }

  export type PlanDeEstudioCreateManyEscuelaInputEnvelope = {
    data: PlanDeEstudioCreateManyEscuelaInput | PlanDeEstudioCreateManyEscuelaInput[]
    skipDuplicates?: boolean
  }

  export type DepartamentoCreateWithoutEscuelaInput = {
    nombre: string
    descripcion?: string | null
    actividades?: ActividadCreateNestedManyWithoutDepartamentoInput
    planDeptos?: PlanDepartamentoCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoUncheckedCreateWithoutEscuelaInput = {
    id_departamento?: number
    nombre: string
    descripcion?: string | null
    actividades?: ActividadUncheckedCreateNestedManyWithoutDepartamentoInput
    planDeptos?: PlanDepartamentoUncheckedCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoCreateOrConnectWithoutEscuelaInput = {
    where: DepartamentoWhereUniqueInput
    create: XOR<DepartamentoCreateWithoutEscuelaInput, DepartamentoUncheckedCreateWithoutEscuelaInput>
  }

  export type DepartamentoCreateManyEscuelaInputEnvelope = {
    data: DepartamentoCreateManyEscuelaInput | DepartamentoCreateManyEscuelaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutEscuelaInput = {
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    activo?: boolean
    grupo?: GrupoCreateNestedOneWithoutAlumnosInput
    actividades_creadas?: ActividadCreateNestedManyWithoutCoordinadorInput
    registros_act?: AlumnoActividadCreateNestedManyWithoutAlumnoInput
    registros_puntos?: AlumnoActividadCreateNestedManyWithoutCoordinadorInput
    logs?: RegistroCambiosCreateNestedManyWithoutUsuarioInput
    generacion?: GeneracionCreateNestedOneWithoutAlumnosInput
  }

  export type UsuarioUncheckedCreateWithoutEscuelaInput = {
    id_usuario?: number
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    id_grupo?: number | null
    activo?: boolean
    generacionId_generacion?: number | null
    actividades_creadas?: ActividadUncheckedCreateNestedManyWithoutCoordinadorInput
    registros_act?: AlumnoActividadUncheckedCreateNestedManyWithoutAlumnoInput
    registros_puntos?: AlumnoActividadUncheckedCreateNestedManyWithoutCoordinadorInput
    logs?: RegistroCambiosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutEscuelaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEscuelaInput, UsuarioUncheckedCreateWithoutEscuelaInput>
  }

  export type UsuarioCreateManyEscuelaInputEnvelope = {
    data: UsuarioCreateManyEscuelaInput | UsuarioCreateManyEscuelaInput[]
    skipDuplicates?: boolean
  }

  export type GeneracionCreateWithoutEscuelaInput = {
    nombre: string
    ano_inicio: number
    ano_fin: number
    plan: PlanDeEstudioCreateNestedOneWithoutGeneracionesInput
    grupos?: GrupoCreateNestedManyWithoutGeneracionInput
    alumnos?: UsuarioCreateNestedManyWithoutGeneracionInput
  }

  export type GeneracionUncheckedCreateWithoutEscuelaInput = {
    id_generacion?: number
    nombre: string
    ano_inicio: number
    ano_fin: number
    id_plan: number
    grupos?: GrupoUncheckedCreateNestedManyWithoutGeneracionInput
    alumnos?: UsuarioUncheckedCreateNestedManyWithoutGeneracionInput
  }

  export type GeneracionCreateOrConnectWithoutEscuelaInput = {
    where: GeneracionWhereUniqueInput
    create: XOR<GeneracionCreateWithoutEscuelaInput, GeneracionUncheckedCreateWithoutEscuelaInput>
  }

  export type GeneracionCreateManyEscuelaInputEnvelope = {
    data: GeneracionCreateManyEscuelaInput | GeneracionCreateManyEscuelaInput[]
    skipDuplicates?: boolean
  }

  export type GrupoCreateWithoutEscuelaInput = {
    nombre: string
    nivel: number
    turno: $Enums.Turno
    fase?: $Enums.Fase | null
    activo?: boolean
    generacion: GeneracionCreateNestedOneWithoutGruposInput
    ciclo: CicloCreateNestedOneWithoutGruposInput
    plan: PlanDeEstudioCreateNestedOneWithoutGruposInput
    alumnos?: UsuarioCreateNestedManyWithoutGrupoInput
  }

  export type GrupoUncheckedCreateWithoutEscuelaInput = {
    id_grupo?: number
    nombre: string
    nivel: number
    turno: $Enums.Turno
    id_generacion: number
    id_ciclo: number
    id_plan: number
    fase?: $Enums.Fase | null
    activo?: boolean
    alumnos?: UsuarioUncheckedCreateNestedManyWithoutGrupoInput
  }

  export type GrupoCreateOrConnectWithoutEscuelaInput = {
    where: GrupoWhereUniqueInput
    create: XOR<GrupoCreateWithoutEscuelaInput, GrupoUncheckedCreateWithoutEscuelaInput>
  }

  export type GrupoCreateManyEscuelaInputEnvelope = {
    data: GrupoCreateManyEscuelaInput | GrupoCreateManyEscuelaInput[]
    skipDuplicates?: boolean
  }

  export type PlanDeEstudioUpsertWithWhereUniqueWithoutEscuelaInput = {
    where: PlanDeEstudioWhereUniqueInput
    update: XOR<PlanDeEstudioUpdateWithoutEscuelaInput, PlanDeEstudioUncheckedUpdateWithoutEscuelaInput>
    create: XOR<PlanDeEstudioCreateWithoutEscuelaInput, PlanDeEstudioUncheckedCreateWithoutEscuelaInput>
  }

  export type PlanDeEstudioUpdateWithWhereUniqueWithoutEscuelaInput = {
    where: PlanDeEstudioWhereUniqueInput
    data: XOR<PlanDeEstudioUpdateWithoutEscuelaInput, PlanDeEstudioUncheckedUpdateWithoutEscuelaInput>
  }

  export type PlanDeEstudioUpdateManyWithWhereWithoutEscuelaInput = {
    where: PlanDeEstudioScalarWhereInput
    data: XOR<PlanDeEstudioUpdateManyMutationInput, PlanDeEstudioUncheckedUpdateManyWithoutEscuelaInput>
  }

  export type PlanDeEstudioScalarWhereInput = {
    AND?: PlanDeEstudioScalarWhereInput | PlanDeEstudioScalarWhereInput[]
    OR?: PlanDeEstudioScalarWhereInput[]
    NOT?: PlanDeEstudioScalarWhereInput | PlanDeEstudioScalarWhereInput[]
    id_plan?: IntFilter<"PlanDeEstudio"> | number
    nombre?: StringFilter<"PlanDeEstudio"> | string
    descripcion?: StringNullableFilter<"PlanDeEstudio"> | string | null
    fecha_inicio?: DateTimeFilter<"PlanDeEstudio"> | Date | string
    fecha_fin?: DateTimeNullableFilter<"PlanDeEstudio"> | Date | string | null
    id_escuela?: IntFilter<"PlanDeEstudio"> | number
  }

  export type DepartamentoUpsertWithWhereUniqueWithoutEscuelaInput = {
    where: DepartamentoWhereUniqueInput
    update: XOR<DepartamentoUpdateWithoutEscuelaInput, DepartamentoUncheckedUpdateWithoutEscuelaInput>
    create: XOR<DepartamentoCreateWithoutEscuelaInput, DepartamentoUncheckedCreateWithoutEscuelaInput>
  }

  export type DepartamentoUpdateWithWhereUniqueWithoutEscuelaInput = {
    where: DepartamentoWhereUniqueInput
    data: XOR<DepartamentoUpdateWithoutEscuelaInput, DepartamentoUncheckedUpdateWithoutEscuelaInput>
  }

  export type DepartamentoUpdateManyWithWhereWithoutEscuelaInput = {
    where: DepartamentoScalarWhereInput
    data: XOR<DepartamentoUpdateManyMutationInput, DepartamentoUncheckedUpdateManyWithoutEscuelaInput>
  }

  export type DepartamentoScalarWhereInput = {
    AND?: DepartamentoScalarWhereInput | DepartamentoScalarWhereInput[]
    OR?: DepartamentoScalarWhereInput[]
    NOT?: DepartamentoScalarWhereInput | DepartamentoScalarWhereInput[]
    id_departamento?: IntFilter<"Departamento"> | number
    nombre?: StringFilter<"Departamento"> | string
    descripcion?: StringNullableFilter<"Departamento"> | string | null
    id_escuela?: IntFilter<"Departamento"> | number
  }

  export type UsuarioUpsertWithWhereUniqueWithoutEscuelaInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutEscuelaInput, UsuarioUncheckedUpdateWithoutEscuelaInput>
    create: XOR<UsuarioCreateWithoutEscuelaInput, UsuarioUncheckedCreateWithoutEscuelaInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutEscuelaInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutEscuelaInput, UsuarioUncheckedUpdateWithoutEscuelaInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutEscuelaInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutEscuelaInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    num_cuenta?: StringFilter<"Usuario"> | string
    nip?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    correo?: StringNullableFilter<"Usuario"> | string | null
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    id_escuela?: IntFilter<"Usuario"> | number
    id_grupo?: IntNullableFilter<"Usuario"> | number | null
    activo?: BoolFilter<"Usuario"> | boolean
    generacionId_generacion?: IntNullableFilter<"Usuario"> | number | null
  }

  export type GeneracionUpsertWithWhereUniqueWithoutEscuelaInput = {
    where: GeneracionWhereUniqueInput
    update: XOR<GeneracionUpdateWithoutEscuelaInput, GeneracionUncheckedUpdateWithoutEscuelaInput>
    create: XOR<GeneracionCreateWithoutEscuelaInput, GeneracionUncheckedCreateWithoutEscuelaInput>
  }

  export type GeneracionUpdateWithWhereUniqueWithoutEscuelaInput = {
    where: GeneracionWhereUniqueInput
    data: XOR<GeneracionUpdateWithoutEscuelaInput, GeneracionUncheckedUpdateWithoutEscuelaInput>
  }

  export type GeneracionUpdateManyWithWhereWithoutEscuelaInput = {
    where: GeneracionScalarWhereInput
    data: XOR<GeneracionUpdateManyMutationInput, GeneracionUncheckedUpdateManyWithoutEscuelaInput>
  }

  export type GeneracionScalarWhereInput = {
    AND?: GeneracionScalarWhereInput | GeneracionScalarWhereInput[]
    OR?: GeneracionScalarWhereInput[]
    NOT?: GeneracionScalarWhereInput | GeneracionScalarWhereInput[]
    id_generacion?: IntFilter<"Generacion"> | number
    nombre?: StringFilter<"Generacion"> | string
    ano_inicio?: IntFilter<"Generacion"> | number
    ano_fin?: IntFilter<"Generacion"> | number
    id_plan?: IntFilter<"Generacion"> | number
    id_escuela?: IntFilter<"Generacion"> | number
  }

  export type GrupoUpsertWithWhereUniqueWithoutEscuelaInput = {
    where: GrupoWhereUniqueInput
    update: XOR<GrupoUpdateWithoutEscuelaInput, GrupoUncheckedUpdateWithoutEscuelaInput>
    create: XOR<GrupoCreateWithoutEscuelaInput, GrupoUncheckedCreateWithoutEscuelaInput>
  }

  export type GrupoUpdateWithWhereUniqueWithoutEscuelaInput = {
    where: GrupoWhereUniqueInput
    data: XOR<GrupoUpdateWithoutEscuelaInput, GrupoUncheckedUpdateWithoutEscuelaInput>
  }

  export type GrupoUpdateManyWithWhereWithoutEscuelaInput = {
    where: GrupoScalarWhereInput
    data: XOR<GrupoUpdateManyMutationInput, GrupoUncheckedUpdateManyWithoutEscuelaInput>
  }

  export type GrupoScalarWhereInput = {
    AND?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
    OR?: GrupoScalarWhereInput[]
    NOT?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
    id_grupo?: IntFilter<"Grupo"> | number
    nombre?: StringFilter<"Grupo"> | string
    nivel?: IntFilter<"Grupo"> | number
    turno?: EnumTurnoFilter<"Grupo"> | $Enums.Turno
    id_generacion?: IntFilter<"Grupo"> | number
    id_ciclo?: IntFilter<"Grupo"> | number
    id_plan?: IntFilter<"Grupo"> | number
    id_escuela?: IntFilter<"Grupo"> | number
    fase?: EnumFaseNullableFilter<"Grupo"> | $Enums.Fase | null
    activo?: BoolFilter<"Grupo"> | boolean
  }

  export type EscuelaCreateWithoutPlanesInput = {
    nombre: string
    clave?: string | null
    estado?: boolean
    departamentos?: DepartamentoCreateNestedManyWithoutEscuelaInput
    usuarios?: UsuarioCreateNestedManyWithoutEscuelaInput
    generaciones?: GeneracionCreateNestedManyWithoutEscuelaInput
    grupos?: GrupoCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaUncheckedCreateWithoutPlanesInput = {
    id_escuela?: number
    nombre: string
    clave?: string | null
    estado?: boolean
    departamentos?: DepartamentoUncheckedCreateNestedManyWithoutEscuelaInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutEscuelaInput
    generaciones?: GeneracionUncheckedCreateNestedManyWithoutEscuelaInput
    grupos?: GrupoUncheckedCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaCreateOrConnectWithoutPlanesInput = {
    where: EscuelaWhereUniqueInput
    create: XOR<EscuelaCreateWithoutPlanesInput, EscuelaUncheckedCreateWithoutPlanesInput>
  }

  export type CicloCreateWithoutPlanInput = {
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    tipo: $Enums.TipoCiclo
    activo?: boolean
    grupos?: GrupoCreateNestedManyWithoutCicloInput
    actividades?: ActividadCreateNestedManyWithoutCicloInput
    alumnoActs?: AlumnoActividadCreateNestedManyWithoutCicloInput
  }

  export type CicloUncheckedCreateWithoutPlanInput = {
    id_ciclo?: number
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    tipo: $Enums.TipoCiclo
    activo?: boolean
    grupos?: GrupoUncheckedCreateNestedManyWithoutCicloInput
    actividades?: ActividadUncheckedCreateNestedManyWithoutCicloInput
    alumnoActs?: AlumnoActividadUncheckedCreateNestedManyWithoutCicloInput
  }

  export type CicloCreateOrConnectWithoutPlanInput = {
    where: CicloWhereUniqueInput
    create: XOR<CicloCreateWithoutPlanInput, CicloUncheckedCreateWithoutPlanInput>
  }

  export type CicloCreateManyPlanInputEnvelope = {
    data: CicloCreateManyPlanInput | CicloCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type GeneracionCreateWithoutPlanInput = {
    nombre: string
    ano_inicio: number
    ano_fin: number
    escuela: EscuelaCreateNestedOneWithoutGeneracionesInput
    grupos?: GrupoCreateNestedManyWithoutGeneracionInput
    alumnos?: UsuarioCreateNestedManyWithoutGeneracionInput
  }

  export type GeneracionUncheckedCreateWithoutPlanInput = {
    id_generacion?: number
    nombre: string
    ano_inicio: number
    ano_fin: number
    id_escuela: number
    grupos?: GrupoUncheckedCreateNestedManyWithoutGeneracionInput
    alumnos?: UsuarioUncheckedCreateNestedManyWithoutGeneracionInput
  }

  export type GeneracionCreateOrConnectWithoutPlanInput = {
    where: GeneracionWhereUniqueInput
    create: XOR<GeneracionCreateWithoutPlanInput, GeneracionUncheckedCreateWithoutPlanInput>
  }

  export type GeneracionCreateManyPlanInputEnvelope = {
    data: GeneracionCreateManyPlanInput | GeneracionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type PlanDepartamentoCreateWithoutPlanInput = {
    puntos_requeridos: number
    departamento: DepartamentoCreateNestedOneWithoutPlanDeptosInput
  }

  export type PlanDepartamentoUncheckedCreateWithoutPlanInput = {
    id_plan_departamento?: number
    id_departamento: number
    puntos_requeridos: number
  }

  export type PlanDepartamentoCreateOrConnectWithoutPlanInput = {
    where: PlanDepartamentoWhereUniqueInput
    create: XOR<PlanDepartamentoCreateWithoutPlanInput, PlanDepartamentoUncheckedCreateWithoutPlanInput>
  }

  export type PlanDepartamentoCreateManyPlanInputEnvelope = {
    data: PlanDepartamentoCreateManyPlanInput | PlanDepartamentoCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type GrupoCreateWithoutPlanInput = {
    nombre: string
    nivel: number
    turno: $Enums.Turno
    fase?: $Enums.Fase | null
    activo?: boolean
    generacion: GeneracionCreateNestedOneWithoutGruposInput
    ciclo: CicloCreateNestedOneWithoutGruposInput
    escuela: EscuelaCreateNestedOneWithoutGruposInput
    alumnos?: UsuarioCreateNestedManyWithoutGrupoInput
  }

  export type GrupoUncheckedCreateWithoutPlanInput = {
    id_grupo?: number
    nombre: string
    nivel: number
    turno: $Enums.Turno
    id_generacion: number
    id_ciclo: number
    id_escuela: number
    fase?: $Enums.Fase | null
    activo?: boolean
    alumnos?: UsuarioUncheckedCreateNestedManyWithoutGrupoInput
  }

  export type GrupoCreateOrConnectWithoutPlanInput = {
    where: GrupoWhereUniqueInput
    create: XOR<GrupoCreateWithoutPlanInput, GrupoUncheckedCreateWithoutPlanInput>
  }

  export type GrupoCreateManyPlanInputEnvelope = {
    data: GrupoCreateManyPlanInput | GrupoCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type EscuelaUpsertWithoutPlanesInput = {
    update: XOR<EscuelaUpdateWithoutPlanesInput, EscuelaUncheckedUpdateWithoutPlanesInput>
    create: XOR<EscuelaCreateWithoutPlanesInput, EscuelaUncheckedCreateWithoutPlanesInput>
    where?: EscuelaWhereInput
  }

  export type EscuelaUpdateToOneWithWhereWithoutPlanesInput = {
    where?: EscuelaWhereInput
    data: XOR<EscuelaUpdateWithoutPlanesInput, EscuelaUncheckedUpdateWithoutPlanesInput>
  }

  export type EscuelaUpdateWithoutPlanesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    departamentos?: DepartamentoUpdateManyWithoutEscuelaNestedInput
    usuarios?: UsuarioUpdateManyWithoutEscuelaNestedInput
    generaciones?: GeneracionUpdateManyWithoutEscuelaNestedInput
    grupos?: GrupoUpdateManyWithoutEscuelaNestedInput
  }

  export type EscuelaUncheckedUpdateWithoutPlanesInput = {
    id_escuela?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    departamentos?: DepartamentoUncheckedUpdateManyWithoutEscuelaNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutEscuelaNestedInput
    generaciones?: GeneracionUncheckedUpdateManyWithoutEscuelaNestedInput
    grupos?: GrupoUncheckedUpdateManyWithoutEscuelaNestedInput
  }

  export type CicloUpsertWithWhereUniqueWithoutPlanInput = {
    where: CicloWhereUniqueInput
    update: XOR<CicloUpdateWithoutPlanInput, CicloUncheckedUpdateWithoutPlanInput>
    create: XOR<CicloCreateWithoutPlanInput, CicloUncheckedCreateWithoutPlanInput>
  }

  export type CicloUpdateWithWhereUniqueWithoutPlanInput = {
    where: CicloWhereUniqueInput
    data: XOR<CicloUpdateWithoutPlanInput, CicloUncheckedUpdateWithoutPlanInput>
  }

  export type CicloUpdateManyWithWhereWithoutPlanInput = {
    where: CicloScalarWhereInput
    data: XOR<CicloUpdateManyMutationInput, CicloUncheckedUpdateManyWithoutPlanInput>
  }

  export type CicloScalarWhereInput = {
    AND?: CicloScalarWhereInput | CicloScalarWhereInput[]
    OR?: CicloScalarWhereInput[]
    NOT?: CicloScalarWhereInput | CicloScalarWhereInput[]
    id_ciclo?: IntFilter<"Ciclo"> | number
    nombre?: StringFilter<"Ciclo"> | string
    fecha_inicio?: DateTimeFilter<"Ciclo"> | Date | string
    fecha_fin?: DateTimeFilter<"Ciclo"> | Date | string
    tipo?: EnumTipoCicloFilter<"Ciclo"> | $Enums.TipoCiclo
    activo?: BoolFilter<"Ciclo"> | boolean
    id_plan?: IntFilter<"Ciclo"> | number
  }

  export type GeneracionUpsertWithWhereUniqueWithoutPlanInput = {
    where: GeneracionWhereUniqueInput
    update: XOR<GeneracionUpdateWithoutPlanInput, GeneracionUncheckedUpdateWithoutPlanInput>
    create: XOR<GeneracionCreateWithoutPlanInput, GeneracionUncheckedCreateWithoutPlanInput>
  }

  export type GeneracionUpdateWithWhereUniqueWithoutPlanInput = {
    where: GeneracionWhereUniqueInput
    data: XOR<GeneracionUpdateWithoutPlanInput, GeneracionUncheckedUpdateWithoutPlanInput>
  }

  export type GeneracionUpdateManyWithWhereWithoutPlanInput = {
    where: GeneracionScalarWhereInput
    data: XOR<GeneracionUpdateManyMutationInput, GeneracionUncheckedUpdateManyWithoutPlanInput>
  }

  export type PlanDepartamentoUpsertWithWhereUniqueWithoutPlanInput = {
    where: PlanDepartamentoWhereUniqueInput
    update: XOR<PlanDepartamentoUpdateWithoutPlanInput, PlanDepartamentoUncheckedUpdateWithoutPlanInput>
    create: XOR<PlanDepartamentoCreateWithoutPlanInput, PlanDepartamentoUncheckedCreateWithoutPlanInput>
  }

  export type PlanDepartamentoUpdateWithWhereUniqueWithoutPlanInput = {
    where: PlanDepartamentoWhereUniqueInput
    data: XOR<PlanDepartamentoUpdateWithoutPlanInput, PlanDepartamentoUncheckedUpdateWithoutPlanInput>
  }

  export type PlanDepartamentoUpdateManyWithWhereWithoutPlanInput = {
    where: PlanDepartamentoScalarWhereInput
    data: XOR<PlanDepartamentoUpdateManyMutationInput, PlanDepartamentoUncheckedUpdateManyWithoutPlanInput>
  }

  export type PlanDepartamentoScalarWhereInput = {
    AND?: PlanDepartamentoScalarWhereInput | PlanDepartamentoScalarWhereInput[]
    OR?: PlanDepartamentoScalarWhereInput[]
    NOT?: PlanDepartamentoScalarWhereInput | PlanDepartamentoScalarWhereInput[]
    id_plan_departamento?: IntFilter<"PlanDepartamento"> | number
    id_plan?: IntFilter<"PlanDepartamento"> | number
    id_departamento?: IntFilter<"PlanDepartamento"> | number
    puntos_requeridos?: IntFilter<"PlanDepartamento"> | number
  }

  export type GrupoUpsertWithWhereUniqueWithoutPlanInput = {
    where: GrupoWhereUniqueInput
    update: XOR<GrupoUpdateWithoutPlanInput, GrupoUncheckedUpdateWithoutPlanInput>
    create: XOR<GrupoCreateWithoutPlanInput, GrupoUncheckedCreateWithoutPlanInput>
  }

  export type GrupoUpdateWithWhereUniqueWithoutPlanInput = {
    where: GrupoWhereUniqueInput
    data: XOR<GrupoUpdateWithoutPlanInput, GrupoUncheckedUpdateWithoutPlanInput>
  }

  export type GrupoUpdateManyWithWhereWithoutPlanInput = {
    where: GrupoScalarWhereInput
    data: XOR<GrupoUpdateManyMutationInput, GrupoUncheckedUpdateManyWithoutPlanInput>
  }

  export type PlanDeEstudioCreateWithoutCiclosInput = {
    nombre: string
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    escuela: EscuelaCreateNestedOneWithoutPlanesInput
    generaciones?: GeneracionCreateNestedManyWithoutPlanInput
    planDeptos?: PlanDepartamentoCreateNestedManyWithoutPlanInput
    grupos?: GrupoCreateNestedManyWithoutPlanInput
  }

  export type PlanDeEstudioUncheckedCreateWithoutCiclosInput = {
    id_plan?: number
    nombre: string
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_escuela: number
    generaciones?: GeneracionUncheckedCreateNestedManyWithoutPlanInput
    planDeptos?: PlanDepartamentoUncheckedCreateNestedManyWithoutPlanInput
    grupos?: GrupoUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanDeEstudioCreateOrConnectWithoutCiclosInput = {
    where: PlanDeEstudioWhereUniqueInput
    create: XOR<PlanDeEstudioCreateWithoutCiclosInput, PlanDeEstudioUncheckedCreateWithoutCiclosInput>
  }

  export type GrupoCreateWithoutCicloInput = {
    nombre: string
    nivel: number
    turno: $Enums.Turno
    fase?: $Enums.Fase | null
    activo?: boolean
    generacion: GeneracionCreateNestedOneWithoutGruposInput
    plan: PlanDeEstudioCreateNestedOneWithoutGruposInput
    escuela: EscuelaCreateNestedOneWithoutGruposInput
    alumnos?: UsuarioCreateNestedManyWithoutGrupoInput
  }

  export type GrupoUncheckedCreateWithoutCicloInput = {
    id_grupo?: number
    nombre: string
    nivel: number
    turno: $Enums.Turno
    id_generacion: number
    id_plan: number
    id_escuela: number
    fase?: $Enums.Fase | null
    activo?: boolean
    alumnos?: UsuarioUncheckedCreateNestedManyWithoutGrupoInput
  }

  export type GrupoCreateOrConnectWithoutCicloInput = {
    where: GrupoWhereUniqueInput
    create: XOR<GrupoCreateWithoutCicloInput, GrupoUncheckedCreateWithoutCicloInput>
  }

  export type GrupoCreateManyCicloInputEnvelope = {
    data: GrupoCreateManyCicloInput | GrupoCreateManyCicloInput[]
    skipDuplicates?: boolean
  }

  export type ActividadCreateWithoutCicloInput = {
    nombre: string
    descripcion?: string | null
    fecha: Date | string
    puntos: number
    departamento: DepartamentoCreateNestedOneWithoutActividadesInput
    coordinador: UsuarioCreateNestedOneWithoutActividades_creadasInput
    alumnoActs?: AlumnoActividadCreateNestedManyWithoutActividadInput
  }

  export type ActividadUncheckedCreateWithoutCicloInput = {
    id_actividad?: number
    nombre: string
    descripcion?: string | null
    fecha: Date | string
    puntos: number
    id_departamento: number
    id_coordinador: number
    alumnoActs?: AlumnoActividadUncheckedCreateNestedManyWithoutActividadInput
  }

  export type ActividadCreateOrConnectWithoutCicloInput = {
    where: ActividadWhereUniqueInput
    create: XOR<ActividadCreateWithoutCicloInput, ActividadUncheckedCreateWithoutCicloInput>
  }

  export type ActividadCreateManyCicloInputEnvelope = {
    data: ActividadCreateManyCicloInput | ActividadCreateManyCicloInput[]
    skipDuplicates?: boolean
  }

  export type AlumnoActividadCreateWithoutCicloInput = {
    puntos_otorgados: number
    fecha_registro: Date | string
    alumno: UsuarioCreateNestedOneWithoutRegistros_actInput
    actividad: ActividadCreateNestedOneWithoutAlumnoActsInput
    coordinador: UsuarioCreateNestedOneWithoutRegistros_puntosInput
  }

  export type AlumnoActividadUncheckedCreateWithoutCicloInput = {
    id_alumno_actividad?: number
    id_alumno: number
    id_actividad: number
    puntos_otorgados: number
    fecha_registro: Date | string
    id_coordinador: number
  }

  export type AlumnoActividadCreateOrConnectWithoutCicloInput = {
    where: AlumnoActividadWhereUniqueInput
    create: XOR<AlumnoActividadCreateWithoutCicloInput, AlumnoActividadUncheckedCreateWithoutCicloInput>
  }

  export type AlumnoActividadCreateManyCicloInputEnvelope = {
    data: AlumnoActividadCreateManyCicloInput | AlumnoActividadCreateManyCicloInput[]
    skipDuplicates?: boolean
  }

  export type PlanDeEstudioUpsertWithoutCiclosInput = {
    update: XOR<PlanDeEstudioUpdateWithoutCiclosInput, PlanDeEstudioUncheckedUpdateWithoutCiclosInput>
    create: XOR<PlanDeEstudioCreateWithoutCiclosInput, PlanDeEstudioUncheckedCreateWithoutCiclosInput>
    where?: PlanDeEstudioWhereInput
  }

  export type PlanDeEstudioUpdateToOneWithWhereWithoutCiclosInput = {
    where?: PlanDeEstudioWhereInput
    data: XOR<PlanDeEstudioUpdateWithoutCiclosInput, PlanDeEstudioUncheckedUpdateWithoutCiclosInput>
  }

  export type PlanDeEstudioUpdateWithoutCiclosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escuela?: EscuelaUpdateOneRequiredWithoutPlanesNestedInput
    generaciones?: GeneracionUpdateManyWithoutPlanNestedInput
    planDeptos?: PlanDepartamentoUpdateManyWithoutPlanNestedInput
    grupos?: GrupoUpdateManyWithoutPlanNestedInput
  }

  export type PlanDeEstudioUncheckedUpdateWithoutCiclosInput = {
    id_plan?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_escuela?: IntFieldUpdateOperationsInput | number
    generaciones?: GeneracionUncheckedUpdateManyWithoutPlanNestedInput
    planDeptos?: PlanDepartamentoUncheckedUpdateManyWithoutPlanNestedInput
    grupos?: GrupoUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type GrupoUpsertWithWhereUniqueWithoutCicloInput = {
    where: GrupoWhereUniqueInput
    update: XOR<GrupoUpdateWithoutCicloInput, GrupoUncheckedUpdateWithoutCicloInput>
    create: XOR<GrupoCreateWithoutCicloInput, GrupoUncheckedCreateWithoutCicloInput>
  }

  export type GrupoUpdateWithWhereUniqueWithoutCicloInput = {
    where: GrupoWhereUniqueInput
    data: XOR<GrupoUpdateWithoutCicloInput, GrupoUncheckedUpdateWithoutCicloInput>
  }

  export type GrupoUpdateManyWithWhereWithoutCicloInput = {
    where: GrupoScalarWhereInput
    data: XOR<GrupoUpdateManyMutationInput, GrupoUncheckedUpdateManyWithoutCicloInput>
  }

  export type ActividadUpsertWithWhereUniqueWithoutCicloInput = {
    where: ActividadWhereUniqueInput
    update: XOR<ActividadUpdateWithoutCicloInput, ActividadUncheckedUpdateWithoutCicloInput>
    create: XOR<ActividadCreateWithoutCicloInput, ActividadUncheckedCreateWithoutCicloInput>
  }

  export type ActividadUpdateWithWhereUniqueWithoutCicloInput = {
    where: ActividadWhereUniqueInput
    data: XOR<ActividadUpdateWithoutCicloInput, ActividadUncheckedUpdateWithoutCicloInput>
  }

  export type ActividadUpdateManyWithWhereWithoutCicloInput = {
    where: ActividadScalarWhereInput
    data: XOR<ActividadUpdateManyMutationInput, ActividadUncheckedUpdateManyWithoutCicloInput>
  }

  export type ActividadScalarWhereInput = {
    AND?: ActividadScalarWhereInput | ActividadScalarWhereInput[]
    OR?: ActividadScalarWhereInput[]
    NOT?: ActividadScalarWhereInput | ActividadScalarWhereInput[]
    id_actividad?: IntFilter<"Actividad"> | number
    nombre?: StringFilter<"Actividad"> | string
    descripcion?: StringNullableFilter<"Actividad"> | string | null
    fecha?: DateTimeFilter<"Actividad"> | Date | string
    puntos?: IntFilter<"Actividad"> | number
    id_departamento?: IntFilter<"Actividad"> | number
    id_coordinador?: IntFilter<"Actividad"> | number
    id_ciclo?: IntFilter<"Actividad"> | number
  }

  export type AlumnoActividadUpsertWithWhereUniqueWithoutCicloInput = {
    where: AlumnoActividadWhereUniqueInput
    update: XOR<AlumnoActividadUpdateWithoutCicloInput, AlumnoActividadUncheckedUpdateWithoutCicloInput>
    create: XOR<AlumnoActividadCreateWithoutCicloInput, AlumnoActividadUncheckedCreateWithoutCicloInput>
  }

  export type AlumnoActividadUpdateWithWhereUniqueWithoutCicloInput = {
    where: AlumnoActividadWhereUniqueInput
    data: XOR<AlumnoActividadUpdateWithoutCicloInput, AlumnoActividadUncheckedUpdateWithoutCicloInput>
  }

  export type AlumnoActividadUpdateManyWithWhereWithoutCicloInput = {
    where: AlumnoActividadScalarWhereInput
    data: XOR<AlumnoActividadUpdateManyMutationInput, AlumnoActividadUncheckedUpdateManyWithoutCicloInput>
  }

  export type AlumnoActividadScalarWhereInput = {
    AND?: AlumnoActividadScalarWhereInput | AlumnoActividadScalarWhereInput[]
    OR?: AlumnoActividadScalarWhereInput[]
    NOT?: AlumnoActividadScalarWhereInput | AlumnoActividadScalarWhereInput[]
    id_alumno_actividad?: IntFilter<"AlumnoActividad"> | number
    id_alumno?: IntFilter<"AlumnoActividad"> | number
    id_actividad?: IntFilter<"AlumnoActividad"> | number
    puntos_otorgados?: IntFilter<"AlumnoActividad"> | number
    fecha_registro?: DateTimeFilter<"AlumnoActividad"> | Date | string
    id_coordinador?: IntFilter<"AlumnoActividad"> | number
    id_ciclo?: IntFilter<"AlumnoActividad"> | number
  }

  export type PlanDeEstudioCreateWithoutGeneracionesInput = {
    nombre: string
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    escuela: EscuelaCreateNestedOneWithoutPlanesInput
    ciclos?: CicloCreateNestedManyWithoutPlanInput
    planDeptos?: PlanDepartamentoCreateNestedManyWithoutPlanInput
    grupos?: GrupoCreateNestedManyWithoutPlanInput
  }

  export type PlanDeEstudioUncheckedCreateWithoutGeneracionesInput = {
    id_plan?: number
    nombre: string
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_escuela: number
    ciclos?: CicloUncheckedCreateNestedManyWithoutPlanInput
    planDeptos?: PlanDepartamentoUncheckedCreateNestedManyWithoutPlanInput
    grupos?: GrupoUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanDeEstudioCreateOrConnectWithoutGeneracionesInput = {
    where: PlanDeEstudioWhereUniqueInput
    create: XOR<PlanDeEstudioCreateWithoutGeneracionesInput, PlanDeEstudioUncheckedCreateWithoutGeneracionesInput>
  }

  export type EscuelaCreateWithoutGeneracionesInput = {
    nombre: string
    clave?: string | null
    estado?: boolean
    planes?: PlanDeEstudioCreateNestedManyWithoutEscuelaInput
    departamentos?: DepartamentoCreateNestedManyWithoutEscuelaInput
    usuarios?: UsuarioCreateNestedManyWithoutEscuelaInput
    grupos?: GrupoCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaUncheckedCreateWithoutGeneracionesInput = {
    id_escuela?: number
    nombre: string
    clave?: string | null
    estado?: boolean
    planes?: PlanDeEstudioUncheckedCreateNestedManyWithoutEscuelaInput
    departamentos?: DepartamentoUncheckedCreateNestedManyWithoutEscuelaInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutEscuelaInput
    grupos?: GrupoUncheckedCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaCreateOrConnectWithoutGeneracionesInput = {
    where: EscuelaWhereUniqueInput
    create: XOR<EscuelaCreateWithoutGeneracionesInput, EscuelaUncheckedCreateWithoutGeneracionesInput>
  }

  export type GrupoCreateWithoutGeneracionInput = {
    nombre: string
    nivel: number
    turno: $Enums.Turno
    fase?: $Enums.Fase | null
    activo?: boolean
    ciclo: CicloCreateNestedOneWithoutGruposInput
    plan: PlanDeEstudioCreateNestedOneWithoutGruposInput
    escuela: EscuelaCreateNestedOneWithoutGruposInput
    alumnos?: UsuarioCreateNestedManyWithoutGrupoInput
  }

  export type GrupoUncheckedCreateWithoutGeneracionInput = {
    id_grupo?: number
    nombre: string
    nivel: number
    turno: $Enums.Turno
    id_ciclo: number
    id_plan: number
    id_escuela: number
    fase?: $Enums.Fase | null
    activo?: boolean
    alumnos?: UsuarioUncheckedCreateNestedManyWithoutGrupoInput
  }

  export type GrupoCreateOrConnectWithoutGeneracionInput = {
    where: GrupoWhereUniqueInput
    create: XOR<GrupoCreateWithoutGeneracionInput, GrupoUncheckedCreateWithoutGeneracionInput>
  }

  export type GrupoCreateManyGeneracionInputEnvelope = {
    data: GrupoCreateManyGeneracionInput | GrupoCreateManyGeneracionInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutGeneracionInput = {
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    activo?: boolean
    escuela: EscuelaCreateNestedOneWithoutUsuariosInput
    grupo?: GrupoCreateNestedOneWithoutAlumnosInput
    actividades_creadas?: ActividadCreateNestedManyWithoutCoordinadorInput
    registros_act?: AlumnoActividadCreateNestedManyWithoutAlumnoInput
    registros_puntos?: AlumnoActividadCreateNestedManyWithoutCoordinadorInput
    logs?: RegistroCambiosCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutGeneracionInput = {
    id_usuario?: number
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    id_escuela: number
    id_grupo?: number | null
    activo?: boolean
    actividades_creadas?: ActividadUncheckedCreateNestedManyWithoutCoordinadorInput
    registros_act?: AlumnoActividadUncheckedCreateNestedManyWithoutAlumnoInput
    registros_puntos?: AlumnoActividadUncheckedCreateNestedManyWithoutCoordinadorInput
    logs?: RegistroCambiosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutGeneracionInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutGeneracionInput, UsuarioUncheckedCreateWithoutGeneracionInput>
  }

  export type UsuarioCreateManyGeneracionInputEnvelope = {
    data: UsuarioCreateManyGeneracionInput | UsuarioCreateManyGeneracionInput[]
    skipDuplicates?: boolean
  }

  export type PlanDeEstudioUpsertWithoutGeneracionesInput = {
    update: XOR<PlanDeEstudioUpdateWithoutGeneracionesInput, PlanDeEstudioUncheckedUpdateWithoutGeneracionesInput>
    create: XOR<PlanDeEstudioCreateWithoutGeneracionesInput, PlanDeEstudioUncheckedCreateWithoutGeneracionesInput>
    where?: PlanDeEstudioWhereInput
  }

  export type PlanDeEstudioUpdateToOneWithWhereWithoutGeneracionesInput = {
    where?: PlanDeEstudioWhereInput
    data: XOR<PlanDeEstudioUpdateWithoutGeneracionesInput, PlanDeEstudioUncheckedUpdateWithoutGeneracionesInput>
  }

  export type PlanDeEstudioUpdateWithoutGeneracionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escuela?: EscuelaUpdateOneRequiredWithoutPlanesNestedInput
    ciclos?: CicloUpdateManyWithoutPlanNestedInput
    planDeptos?: PlanDepartamentoUpdateManyWithoutPlanNestedInput
    grupos?: GrupoUpdateManyWithoutPlanNestedInput
  }

  export type PlanDeEstudioUncheckedUpdateWithoutGeneracionesInput = {
    id_plan?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_escuela?: IntFieldUpdateOperationsInput | number
    ciclos?: CicloUncheckedUpdateManyWithoutPlanNestedInput
    planDeptos?: PlanDepartamentoUncheckedUpdateManyWithoutPlanNestedInput
    grupos?: GrupoUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type EscuelaUpsertWithoutGeneracionesInput = {
    update: XOR<EscuelaUpdateWithoutGeneracionesInput, EscuelaUncheckedUpdateWithoutGeneracionesInput>
    create: XOR<EscuelaCreateWithoutGeneracionesInput, EscuelaUncheckedCreateWithoutGeneracionesInput>
    where?: EscuelaWhereInput
  }

  export type EscuelaUpdateToOneWithWhereWithoutGeneracionesInput = {
    where?: EscuelaWhereInput
    data: XOR<EscuelaUpdateWithoutGeneracionesInput, EscuelaUncheckedUpdateWithoutGeneracionesInput>
  }

  export type EscuelaUpdateWithoutGeneracionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    planes?: PlanDeEstudioUpdateManyWithoutEscuelaNestedInput
    departamentos?: DepartamentoUpdateManyWithoutEscuelaNestedInput
    usuarios?: UsuarioUpdateManyWithoutEscuelaNestedInput
    grupos?: GrupoUpdateManyWithoutEscuelaNestedInput
  }

  export type EscuelaUncheckedUpdateWithoutGeneracionesInput = {
    id_escuela?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    planes?: PlanDeEstudioUncheckedUpdateManyWithoutEscuelaNestedInput
    departamentos?: DepartamentoUncheckedUpdateManyWithoutEscuelaNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutEscuelaNestedInput
    grupos?: GrupoUncheckedUpdateManyWithoutEscuelaNestedInput
  }

  export type GrupoUpsertWithWhereUniqueWithoutGeneracionInput = {
    where: GrupoWhereUniqueInput
    update: XOR<GrupoUpdateWithoutGeneracionInput, GrupoUncheckedUpdateWithoutGeneracionInput>
    create: XOR<GrupoCreateWithoutGeneracionInput, GrupoUncheckedCreateWithoutGeneracionInput>
  }

  export type GrupoUpdateWithWhereUniqueWithoutGeneracionInput = {
    where: GrupoWhereUniqueInput
    data: XOR<GrupoUpdateWithoutGeneracionInput, GrupoUncheckedUpdateWithoutGeneracionInput>
  }

  export type GrupoUpdateManyWithWhereWithoutGeneracionInput = {
    where: GrupoScalarWhereInput
    data: XOR<GrupoUpdateManyMutationInput, GrupoUncheckedUpdateManyWithoutGeneracionInput>
  }

  export type UsuarioUpsertWithWhereUniqueWithoutGeneracionInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutGeneracionInput, UsuarioUncheckedUpdateWithoutGeneracionInput>
    create: XOR<UsuarioCreateWithoutGeneracionInput, UsuarioUncheckedCreateWithoutGeneracionInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutGeneracionInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutGeneracionInput, UsuarioUncheckedUpdateWithoutGeneracionInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutGeneracionInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutGeneracionInput>
  }

  export type EscuelaCreateWithoutDepartamentosInput = {
    nombre: string
    clave?: string | null
    estado?: boolean
    planes?: PlanDeEstudioCreateNestedManyWithoutEscuelaInput
    usuarios?: UsuarioCreateNestedManyWithoutEscuelaInput
    generaciones?: GeneracionCreateNestedManyWithoutEscuelaInput
    grupos?: GrupoCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaUncheckedCreateWithoutDepartamentosInput = {
    id_escuela?: number
    nombre: string
    clave?: string | null
    estado?: boolean
    planes?: PlanDeEstudioUncheckedCreateNestedManyWithoutEscuelaInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutEscuelaInput
    generaciones?: GeneracionUncheckedCreateNestedManyWithoutEscuelaInput
    grupos?: GrupoUncheckedCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaCreateOrConnectWithoutDepartamentosInput = {
    where: EscuelaWhereUniqueInput
    create: XOR<EscuelaCreateWithoutDepartamentosInput, EscuelaUncheckedCreateWithoutDepartamentosInput>
  }

  export type ActividadCreateWithoutDepartamentoInput = {
    nombre: string
    descripcion?: string | null
    fecha: Date | string
    puntos: number
    coordinador: UsuarioCreateNestedOneWithoutActividades_creadasInput
    ciclo: CicloCreateNestedOneWithoutActividadesInput
    alumnoActs?: AlumnoActividadCreateNestedManyWithoutActividadInput
  }

  export type ActividadUncheckedCreateWithoutDepartamentoInput = {
    id_actividad?: number
    nombre: string
    descripcion?: string | null
    fecha: Date | string
    puntos: number
    id_coordinador: number
    id_ciclo: number
    alumnoActs?: AlumnoActividadUncheckedCreateNestedManyWithoutActividadInput
  }

  export type ActividadCreateOrConnectWithoutDepartamentoInput = {
    where: ActividadWhereUniqueInput
    create: XOR<ActividadCreateWithoutDepartamentoInput, ActividadUncheckedCreateWithoutDepartamentoInput>
  }

  export type ActividadCreateManyDepartamentoInputEnvelope = {
    data: ActividadCreateManyDepartamentoInput | ActividadCreateManyDepartamentoInput[]
    skipDuplicates?: boolean
  }

  export type PlanDepartamentoCreateWithoutDepartamentoInput = {
    puntos_requeridos: number
    plan: PlanDeEstudioCreateNestedOneWithoutPlanDeptosInput
  }

  export type PlanDepartamentoUncheckedCreateWithoutDepartamentoInput = {
    id_plan_departamento?: number
    id_plan: number
    puntos_requeridos: number
  }

  export type PlanDepartamentoCreateOrConnectWithoutDepartamentoInput = {
    where: PlanDepartamentoWhereUniqueInput
    create: XOR<PlanDepartamentoCreateWithoutDepartamentoInput, PlanDepartamentoUncheckedCreateWithoutDepartamentoInput>
  }

  export type PlanDepartamentoCreateManyDepartamentoInputEnvelope = {
    data: PlanDepartamentoCreateManyDepartamentoInput | PlanDepartamentoCreateManyDepartamentoInput[]
    skipDuplicates?: boolean
  }

  export type EscuelaUpsertWithoutDepartamentosInput = {
    update: XOR<EscuelaUpdateWithoutDepartamentosInput, EscuelaUncheckedUpdateWithoutDepartamentosInput>
    create: XOR<EscuelaCreateWithoutDepartamentosInput, EscuelaUncheckedCreateWithoutDepartamentosInput>
    where?: EscuelaWhereInput
  }

  export type EscuelaUpdateToOneWithWhereWithoutDepartamentosInput = {
    where?: EscuelaWhereInput
    data: XOR<EscuelaUpdateWithoutDepartamentosInput, EscuelaUncheckedUpdateWithoutDepartamentosInput>
  }

  export type EscuelaUpdateWithoutDepartamentosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    planes?: PlanDeEstudioUpdateManyWithoutEscuelaNestedInput
    usuarios?: UsuarioUpdateManyWithoutEscuelaNestedInput
    generaciones?: GeneracionUpdateManyWithoutEscuelaNestedInput
    grupos?: GrupoUpdateManyWithoutEscuelaNestedInput
  }

  export type EscuelaUncheckedUpdateWithoutDepartamentosInput = {
    id_escuela?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    planes?: PlanDeEstudioUncheckedUpdateManyWithoutEscuelaNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutEscuelaNestedInput
    generaciones?: GeneracionUncheckedUpdateManyWithoutEscuelaNestedInput
    grupos?: GrupoUncheckedUpdateManyWithoutEscuelaNestedInput
  }

  export type ActividadUpsertWithWhereUniqueWithoutDepartamentoInput = {
    where: ActividadWhereUniqueInput
    update: XOR<ActividadUpdateWithoutDepartamentoInput, ActividadUncheckedUpdateWithoutDepartamentoInput>
    create: XOR<ActividadCreateWithoutDepartamentoInput, ActividadUncheckedCreateWithoutDepartamentoInput>
  }

  export type ActividadUpdateWithWhereUniqueWithoutDepartamentoInput = {
    where: ActividadWhereUniqueInput
    data: XOR<ActividadUpdateWithoutDepartamentoInput, ActividadUncheckedUpdateWithoutDepartamentoInput>
  }

  export type ActividadUpdateManyWithWhereWithoutDepartamentoInput = {
    where: ActividadScalarWhereInput
    data: XOR<ActividadUpdateManyMutationInput, ActividadUncheckedUpdateManyWithoutDepartamentoInput>
  }

  export type PlanDepartamentoUpsertWithWhereUniqueWithoutDepartamentoInput = {
    where: PlanDepartamentoWhereUniqueInput
    update: XOR<PlanDepartamentoUpdateWithoutDepartamentoInput, PlanDepartamentoUncheckedUpdateWithoutDepartamentoInput>
    create: XOR<PlanDepartamentoCreateWithoutDepartamentoInput, PlanDepartamentoUncheckedCreateWithoutDepartamentoInput>
  }

  export type PlanDepartamentoUpdateWithWhereUniqueWithoutDepartamentoInput = {
    where: PlanDepartamentoWhereUniqueInput
    data: XOR<PlanDepartamentoUpdateWithoutDepartamentoInput, PlanDepartamentoUncheckedUpdateWithoutDepartamentoInput>
  }

  export type PlanDepartamentoUpdateManyWithWhereWithoutDepartamentoInput = {
    where: PlanDepartamentoScalarWhereInput
    data: XOR<PlanDepartamentoUpdateManyMutationInput, PlanDepartamentoUncheckedUpdateManyWithoutDepartamentoInput>
  }

  export type EscuelaCreateWithoutUsuariosInput = {
    nombre: string
    clave?: string | null
    estado?: boolean
    planes?: PlanDeEstudioCreateNestedManyWithoutEscuelaInput
    departamentos?: DepartamentoCreateNestedManyWithoutEscuelaInput
    generaciones?: GeneracionCreateNestedManyWithoutEscuelaInput
    grupos?: GrupoCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaUncheckedCreateWithoutUsuariosInput = {
    id_escuela?: number
    nombre: string
    clave?: string | null
    estado?: boolean
    planes?: PlanDeEstudioUncheckedCreateNestedManyWithoutEscuelaInput
    departamentos?: DepartamentoUncheckedCreateNestedManyWithoutEscuelaInput
    generaciones?: GeneracionUncheckedCreateNestedManyWithoutEscuelaInput
    grupos?: GrupoUncheckedCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaCreateOrConnectWithoutUsuariosInput = {
    where: EscuelaWhereUniqueInput
    create: XOR<EscuelaCreateWithoutUsuariosInput, EscuelaUncheckedCreateWithoutUsuariosInput>
  }

  export type GrupoCreateWithoutAlumnosInput = {
    nombre: string
    nivel: number
    turno: $Enums.Turno
    fase?: $Enums.Fase | null
    activo?: boolean
    generacion: GeneracionCreateNestedOneWithoutGruposInput
    ciclo: CicloCreateNestedOneWithoutGruposInput
    plan: PlanDeEstudioCreateNestedOneWithoutGruposInput
    escuela: EscuelaCreateNestedOneWithoutGruposInput
  }

  export type GrupoUncheckedCreateWithoutAlumnosInput = {
    id_grupo?: number
    nombre: string
    nivel: number
    turno: $Enums.Turno
    id_generacion: number
    id_ciclo: number
    id_plan: number
    id_escuela: number
    fase?: $Enums.Fase | null
    activo?: boolean
  }

  export type GrupoCreateOrConnectWithoutAlumnosInput = {
    where: GrupoWhereUniqueInput
    create: XOR<GrupoCreateWithoutAlumnosInput, GrupoUncheckedCreateWithoutAlumnosInput>
  }

  export type ActividadCreateWithoutCoordinadorInput = {
    nombre: string
    descripcion?: string | null
    fecha: Date | string
    puntos: number
    departamento: DepartamentoCreateNestedOneWithoutActividadesInput
    ciclo: CicloCreateNestedOneWithoutActividadesInput
    alumnoActs?: AlumnoActividadCreateNestedManyWithoutActividadInput
  }

  export type ActividadUncheckedCreateWithoutCoordinadorInput = {
    id_actividad?: number
    nombre: string
    descripcion?: string | null
    fecha: Date | string
    puntos: number
    id_departamento: number
    id_ciclo: number
    alumnoActs?: AlumnoActividadUncheckedCreateNestedManyWithoutActividadInput
  }

  export type ActividadCreateOrConnectWithoutCoordinadorInput = {
    where: ActividadWhereUniqueInput
    create: XOR<ActividadCreateWithoutCoordinadorInput, ActividadUncheckedCreateWithoutCoordinadorInput>
  }

  export type ActividadCreateManyCoordinadorInputEnvelope = {
    data: ActividadCreateManyCoordinadorInput | ActividadCreateManyCoordinadorInput[]
    skipDuplicates?: boolean
  }

  export type AlumnoActividadCreateWithoutAlumnoInput = {
    puntos_otorgados: number
    fecha_registro: Date | string
    actividad: ActividadCreateNestedOneWithoutAlumnoActsInput
    coordinador: UsuarioCreateNestedOneWithoutRegistros_puntosInput
    ciclo: CicloCreateNestedOneWithoutAlumnoActsInput
  }

  export type AlumnoActividadUncheckedCreateWithoutAlumnoInput = {
    id_alumno_actividad?: number
    id_actividad: number
    puntos_otorgados: number
    fecha_registro: Date | string
    id_coordinador: number
    id_ciclo: number
  }

  export type AlumnoActividadCreateOrConnectWithoutAlumnoInput = {
    where: AlumnoActividadWhereUniqueInput
    create: XOR<AlumnoActividadCreateWithoutAlumnoInput, AlumnoActividadUncheckedCreateWithoutAlumnoInput>
  }

  export type AlumnoActividadCreateManyAlumnoInputEnvelope = {
    data: AlumnoActividadCreateManyAlumnoInput | AlumnoActividadCreateManyAlumnoInput[]
    skipDuplicates?: boolean
  }

  export type AlumnoActividadCreateWithoutCoordinadorInput = {
    puntos_otorgados: number
    fecha_registro: Date | string
    alumno: UsuarioCreateNestedOneWithoutRegistros_actInput
    actividad: ActividadCreateNestedOneWithoutAlumnoActsInput
    ciclo: CicloCreateNestedOneWithoutAlumnoActsInput
  }

  export type AlumnoActividadUncheckedCreateWithoutCoordinadorInput = {
    id_alumno_actividad?: number
    id_alumno: number
    id_actividad: number
    puntos_otorgados: number
    fecha_registro: Date | string
    id_ciclo: number
  }

  export type AlumnoActividadCreateOrConnectWithoutCoordinadorInput = {
    where: AlumnoActividadWhereUniqueInput
    create: XOR<AlumnoActividadCreateWithoutCoordinadorInput, AlumnoActividadUncheckedCreateWithoutCoordinadorInput>
  }

  export type AlumnoActividadCreateManyCoordinadorInputEnvelope = {
    data: AlumnoActividadCreateManyCoordinadorInput | AlumnoActividadCreateManyCoordinadorInput[]
    skipDuplicates?: boolean
  }

  export type RegistroCambiosCreateWithoutUsuarioInput = {
    modulo: string
    accion: string
    descripcion?: string | null
    fecha?: Date | string
  }

  export type RegistroCambiosUncheckedCreateWithoutUsuarioInput = {
    id_registro?: number
    modulo: string
    accion: string
    descripcion?: string | null
    fecha?: Date | string
  }

  export type RegistroCambiosCreateOrConnectWithoutUsuarioInput = {
    where: RegistroCambiosWhereUniqueInput
    create: XOR<RegistroCambiosCreateWithoutUsuarioInput, RegistroCambiosUncheckedCreateWithoutUsuarioInput>
  }

  export type RegistroCambiosCreateManyUsuarioInputEnvelope = {
    data: RegistroCambiosCreateManyUsuarioInput | RegistroCambiosCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type GeneracionCreateWithoutAlumnosInput = {
    nombre: string
    ano_inicio: number
    ano_fin: number
    plan: PlanDeEstudioCreateNestedOneWithoutGeneracionesInput
    escuela: EscuelaCreateNestedOneWithoutGeneracionesInput
    grupos?: GrupoCreateNestedManyWithoutGeneracionInput
  }

  export type GeneracionUncheckedCreateWithoutAlumnosInput = {
    id_generacion?: number
    nombre: string
    ano_inicio: number
    ano_fin: number
    id_plan: number
    id_escuela: number
    grupos?: GrupoUncheckedCreateNestedManyWithoutGeneracionInput
  }

  export type GeneracionCreateOrConnectWithoutAlumnosInput = {
    where: GeneracionWhereUniqueInput
    create: XOR<GeneracionCreateWithoutAlumnosInput, GeneracionUncheckedCreateWithoutAlumnosInput>
  }

  export type EscuelaUpsertWithoutUsuariosInput = {
    update: XOR<EscuelaUpdateWithoutUsuariosInput, EscuelaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<EscuelaCreateWithoutUsuariosInput, EscuelaUncheckedCreateWithoutUsuariosInput>
    where?: EscuelaWhereInput
  }

  export type EscuelaUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: EscuelaWhereInput
    data: XOR<EscuelaUpdateWithoutUsuariosInput, EscuelaUncheckedUpdateWithoutUsuariosInput>
  }

  export type EscuelaUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    planes?: PlanDeEstudioUpdateManyWithoutEscuelaNestedInput
    departamentos?: DepartamentoUpdateManyWithoutEscuelaNestedInput
    generaciones?: GeneracionUpdateManyWithoutEscuelaNestedInput
    grupos?: GrupoUpdateManyWithoutEscuelaNestedInput
  }

  export type EscuelaUncheckedUpdateWithoutUsuariosInput = {
    id_escuela?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    planes?: PlanDeEstudioUncheckedUpdateManyWithoutEscuelaNestedInput
    departamentos?: DepartamentoUncheckedUpdateManyWithoutEscuelaNestedInput
    generaciones?: GeneracionUncheckedUpdateManyWithoutEscuelaNestedInput
    grupos?: GrupoUncheckedUpdateManyWithoutEscuelaNestedInput
  }

  export type GrupoUpsertWithoutAlumnosInput = {
    update: XOR<GrupoUpdateWithoutAlumnosInput, GrupoUncheckedUpdateWithoutAlumnosInput>
    create: XOR<GrupoCreateWithoutAlumnosInput, GrupoUncheckedCreateWithoutAlumnosInput>
    where?: GrupoWhereInput
  }

  export type GrupoUpdateToOneWithWhereWithoutAlumnosInput = {
    where?: GrupoWhereInput
    data: XOR<GrupoUpdateWithoutAlumnosInput, GrupoUncheckedUpdateWithoutAlumnosInput>
  }

  export type GrupoUpdateWithoutAlumnosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    generacion?: GeneracionUpdateOneRequiredWithoutGruposNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutGruposNestedInput
    plan?: PlanDeEstudioUpdateOneRequiredWithoutGruposNestedInput
    escuela?: EscuelaUpdateOneRequiredWithoutGruposNestedInput
  }

  export type GrupoUncheckedUpdateWithoutAlumnosInput = {
    id_grupo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    id_generacion?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    id_escuela?: IntFieldUpdateOperationsInput | number
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActividadUpsertWithWhereUniqueWithoutCoordinadorInput = {
    where: ActividadWhereUniqueInput
    update: XOR<ActividadUpdateWithoutCoordinadorInput, ActividadUncheckedUpdateWithoutCoordinadorInput>
    create: XOR<ActividadCreateWithoutCoordinadorInput, ActividadUncheckedCreateWithoutCoordinadorInput>
  }

  export type ActividadUpdateWithWhereUniqueWithoutCoordinadorInput = {
    where: ActividadWhereUniqueInput
    data: XOR<ActividadUpdateWithoutCoordinadorInput, ActividadUncheckedUpdateWithoutCoordinadorInput>
  }

  export type ActividadUpdateManyWithWhereWithoutCoordinadorInput = {
    where: ActividadScalarWhereInput
    data: XOR<ActividadUpdateManyMutationInput, ActividadUncheckedUpdateManyWithoutCoordinadorInput>
  }

  export type AlumnoActividadUpsertWithWhereUniqueWithoutAlumnoInput = {
    where: AlumnoActividadWhereUniqueInput
    update: XOR<AlumnoActividadUpdateWithoutAlumnoInput, AlumnoActividadUncheckedUpdateWithoutAlumnoInput>
    create: XOR<AlumnoActividadCreateWithoutAlumnoInput, AlumnoActividadUncheckedCreateWithoutAlumnoInput>
  }

  export type AlumnoActividadUpdateWithWhereUniqueWithoutAlumnoInput = {
    where: AlumnoActividadWhereUniqueInput
    data: XOR<AlumnoActividadUpdateWithoutAlumnoInput, AlumnoActividadUncheckedUpdateWithoutAlumnoInput>
  }

  export type AlumnoActividadUpdateManyWithWhereWithoutAlumnoInput = {
    where: AlumnoActividadScalarWhereInput
    data: XOR<AlumnoActividadUpdateManyMutationInput, AlumnoActividadUncheckedUpdateManyWithoutAlumnoInput>
  }

  export type AlumnoActividadUpsertWithWhereUniqueWithoutCoordinadorInput = {
    where: AlumnoActividadWhereUniqueInput
    update: XOR<AlumnoActividadUpdateWithoutCoordinadorInput, AlumnoActividadUncheckedUpdateWithoutCoordinadorInput>
    create: XOR<AlumnoActividadCreateWithoutCoordinadorInput, AlumnoActividadUncheckedCreateWithoutCoordinadorInput>
  }

  export type AlumnoActividadUpdateWithWhereUniqueWithoutCoordinadorInput = {
    where: AlumnoActividadWhereUniqueInput
    data: XOR<AlumnoActividadUpdateWithoutCoordinadorInput, AlumnoActividadUncheckedUpdateWithoutCoordinadorInput>
  }

  export type AlumnoActividadUpdateManyWithWhereWithoutCoordinadorInput = {
    where: AlumnoActividadScalarWhereInput
    data: XOR<AlumnoActividadUpdateManyMutationInput, AlumnoActividadUncheckedUpdateManyWithoutCoordinadorInput>
  }

  export type RegistroCambiosUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RegistroCambiosWhereUniqueInput
    update: XOR<RegistroCambiosUpdateWithoutUsuarioInput, RegistroCambiosUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RegistroCambiosCreateWithoutUsuarioInput, RegistroCambiosUncheckedCreateWithoutUsuarioInput>
  }

  export type RegistroCambiosUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RegistroCambiosWhereUniqueInput
    data: XOR<RegistroCambiosUpdateWithoutUsuarioInput, RegistroCambiosUncheckedUpdateWithoutUsuarioInput>
  }

  export type RegistroCambiosUpdateManyWithWhereWithoutUsuarioInput = {
    where: RegistroCambiosScalarWhereInput
    data: XOR<RegistroCambiosUpdateManyMutationInput, RegistroCambiosUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RegistroCambiosScalarWhereInput = {
    AND?: RegistroCambiosScalarWhereInput | RegistroCambiosScalarWhereInput[]
    OR?: RegistroCambiosScalarWhereInput[]
    NOT?: RegistroCambiosScalarWhereInput | RegistroCambiosScalarWhereInput[]
    id_registro?: IntFilter<"RegistroCambios"> | number
    id_usuario?: IntFilter<"RegistroCambios"> | number
    modulo?: StringFilter<"RegistroCambios"> | string
    accion?: StringFilter<"RegistroCambios"> | string
    descripcion?: StringNullableFilter<"RegistroCambios"> | string | null
    fecha?: DateTimeFilter<"RegistroCambios"> | Date | string
  }

  export type GeneracionUpsertWithoutAlumnosInput = {
    update: XOR<GeneracionUpdateWithoutAlumnosInput, GeneracionUncheckedUpdateWithoutAlumnosInput>
    create: XOR<GeneracionCreateWithoutAlumnosInput, GeneracionUncheckedCreateWithoutAlumnosInput>
    where?: GeneracionWhereInput
  }

  export type GeneracionUpdateToOneWithWhereWithoutAlumnosInput = {
    where?: GeneracionWhereInput
    data: XOR<GeneracionUpdateWithoutAlumnosInput, GeneracionUncheckedUpdateWithoutAlumnosInput>
  }

  export type GeneracionUpdateWithoutAlumnosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ano_inicio?: IntFieldUpdateOperationsInput | number
    ano_fin?: IntFieldUpdateOperationsInput | number
    plan?: PlanDeEstudioUpdateOneRequiredWithoutGeneracionesNestedInput
    escuela?: EscuelaUpdateOneRequiredWithoutGeneracionesNestedInput
    grupos?: GrupoUpdateManyWithoutGeneracionNestedInput
  }

  export type GeneracionUncheckedUpdateWithoutAlumnosInput = {
    id_generacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ano_inicio?: IntFieldUpdateOperationsInput | number
    ano_fin?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    id_escuela?: IntFieldUpdateOperationsInput | number
    grupos?: GrupoUncheckedUpdateManyWithoutGeneracionNestedInput
  }

  export type GeneracionCreateWithoutGruposInput = {
    nombre: string
    ano_inicio: number
    ano_fin: number
    plan: PlanDeEstudioCreateNestedOneWithoutGeneracionesInput
    escuela: EscuelaCreateNestedOneWithoutGeneracionesInput
    alumnos?: UsuarioCreateNestedManyWithoutGeneracionInput
  }

  export type GeneracionUncheckedCreateWithoutGruposInput = {
    id_generacion?: number
    nombre: string
    ano_inicio: number
    ano_fin: number
    id_plan: number
    id_escuela: number
    alumnos?: UsuarioUncheckedCreateNestedManyWithoutGeneracionInput
  }

  export type GeneracionCreateOrConnectWithoutGruposInput = {
    where: GeneracionWhereUniqueInput
    create: XOR<GeneracionCreateWithoutGruposInput, GeneracionUncheckedCreateWithoutGruposInput>
  }

  export type CicloCreateWithoutGruposInput = {
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    tipo: $Enums.TipoCiclo
    activo?: boolean
    plan: PlanDeEstudioCreateNestedOneWithoutCiclosInput
    actividades?: ActividadCreateNestedManyWithoutCicloInput
    alumnoActs?: AlumnoActividadCreateNestedManyWithoutCicloInput
  }

  export type CicloUncheckedCreateWithoutGruposInput = {
    id_ciclo?: number
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    tipo: $Enums.TipoCiclo
    activo?: boolean
    id_plan: number
    actividades?: ActividadUncheckedCreateNestedManyWithoutCicloInput
    alumnoActs?: AlumnoActividadUncheckedCreateNestedManyWithoutCicloInput
  }

  export type CicloCreateOrConnectWithoutGruposInput = {
    where: CicloWhereUniqueInput
    create: XOR<CicloCreateWithoutGruposInput, CicloUncheckedCreateWithoutGruposInput>
  }

  export type PlanDeEstudioCreateWithoutGruposInput = {
    nombre: string
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    escuela: EscuelaCreateNestedOneWithoutPlanesInput
    ciclos?: CicloCreateNestedManyWithoutPlanInput
    generaciones?: GeneracionCreateNestedManyWithoutPlanInput
    planDeptos?: PlanDepartamentoCreateNestedManyWithoutPlanInput
  }

  export type PlanDeEstudioUncheckedCreateWithoutGruposInput = {
    id_plan?: number
    nombre: string
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_escuela: number
    ciclos?: CicloUncheckedCreateNestedManyWithoutPlanInput
    generaciones?: GeneracionUncheckedCreateNestedManyWithoutPlanInput
    planDeptos?: PlanDepartamentoUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanDeEstudioCreateOrConnectWithoutGruposInput = {
    where: PlanDeEstudioWhereUniqueInput
    create: XOR<PlanDeEstudioCreateWithoutGruposInput, PlanDeEstudioUncheckedCreateWithoutGruposInput>
  }

  export type EscuelaCreateWithoutGruposInput = {
    nombre: string
    clave?: string | null
    estado?: boolean
    planes?: PlanDeEstudioCreateNestedManyWithoutEscuelaInput
    departamentos?: DepartamentoCreateNestedManyWithoutEscuelaInput
    usuarios?: UsuarioCreateNestedManyWithoutEscuelaInput
    generaciones?: GeneracionCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaUncheckedCreateWithoutGruposInput = {
    id_escuela?: number
    nombre: string
    clave?: string | null
    estado?: boolean
    planes?: PlanDeEstudioUncheckedCreateNestedManyWithoutEscuelaInput
    departamentos?: DepartamentoUncheckedCreateNestedManyWithoutEscuelaInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutEscuelaInput
    generaciones?: GeneracionUncheckedCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaCreateOrConnectWithoutGruposInput = {
    where: EscuelaWhereUniqueInput
    create: XOR<EscuelaCreateWithoutGruposInput, EscuelaUncheckedCreateWithoutGruposInput>
  }

  export type UsuarioCreateWithoutGrupoInput = {
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    activo?: boolean
    escuela: EscuelaCreateNestedOneWithoutUsuariosInput
    actividades_creadas?: ActividadCreateNestedManyWithoutCoordinadorInput
    registros_act?: AlumnoActividadCreateNestedManyWithoutAlumnoInput
    registros_puntos?: AlumnoActividadCreateNestedManyWithoutCoordinadorInput
    logs?: RegistroCambiosCreateNestedManyWithoutUsuarioInput
    generacion?: GeneracionCreateNestedOneWithoutAlumnosInput
  }

  export type UsuarioUncheckedCreateWithoutGrupoInput = {
    id_usuario?: number
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    id_escuela: number
    activo?: boolean
    generacionId_generacion?: number | null
    actividades_creadas?: ActividadUncheckedCreateNestedManyWithoutCoordinadorInput
    registros_act?: AlumnoActividadUncheckedCreateNestedManyWithoutAlumnoInput
    registros_puntos?: AlumnoActividadUncheckedCreateNestedManyWithoutCoordinadorInput
    logs?: RegistroCambiosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutGrupoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutGrupoInput, UsuarioUncheckedCreateWithoutGrupoInput>
  }

  export type UsuarioCreateManyGrupoInputEnvelope = {
    data: UsuarioCreateManyGrupoInput | UsuarioCreateManyGrupoInput[]
    skipDuplicates?: boolean
  }

  export type GeneracionUpsertWithoutGruposInput = {
    update: XOR<GeneracionUpdateWithoutGruposInput, GeneracionUncheckedUpdateWithoutGruposInput>
    create: XOR<GeneracionCreateWithoutGruposInput, GeneracionUncheckedCreateWithoutGruposInput>
    where?: GeneracionWhereInput
  }

  export type GeneracionUpdateToOneWithWhereWithoutGruposInput = {
    where?: GeneracionWhereInput
    data: XOR<GeneracionUpdateWithoutGruposInput, GeneracionUncheckedUpdateWithoutGruposInput>
  }

  export type GeneracionUpdateWithoutGruposInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ano_inicio?: IntFieldUpdateOperationsInput | number
    ano_fin?: IntFieldUpdateOperationsInput | number
    plan?: PlanDeEstudioUpdateOneRequiredWithoutGeneracionesNestedInput
    escuela?: EscuelaUpdateOneRequiredWithoutGeneracionesNestedInput
    alumnos?: UsuarioUpdateManyWithoutGeneracionNestedInput
  }

  export type GeneracionUncheckedUpdateWithoutGruposInput = {
    id_generacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ano_inicio?: IntFieldUpdateOperationsInput | number
    ano_fin?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    id_escuela?: IntFieldUpdateOperationsInput | number
    alumnos?: UsuarioUncheckedUpdateManyWithoutGeneracionNestedInput
  }

  export type CicloUpsertWithoutGruposInput = {
    update: XOR<CicloUpdateWithoutGruposInput, CicloUncheckedUpdateWithoutGruposInput>
    create: XOR<CicloCreateWithoutGruposInput, CicloUncheckedCreateWithoutGruposInput>
    where?: CicloWhereInput
  }

  export type CicloUpdateToOneWithWhereWithoutGruposInput = {
    where?: CicloWhereInput
    data: XOR<CicloUpdateWithoutGruposInput, CicloUncheckedUpdateWithoutGruposInput>
  }

  export type CicloUpdateWithoutGruposInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCicloFieldUpdateOperationsInput | $Enums.TipoCiclo
    activo?: BoolFieldUpdateOperationsInput | boolean
    plan?: PlanDeEstudioUpdateOneRequiredWithoutCiclosNestedInput
    actividades?: ActividadUpdateManyWithoutCicloNestedInput
    alumnoActs?: AlumnoActividadUpdateManyWithoutCicloNestedInput
  }

  export type CicloUncheckedUpdateWithoutGruposInput = {
    id_ciclo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCicloFieldUpdateOperationsInput | $Enums.TipoCiclo
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_plan?: IntFieldUpdateOperationsInput | number
    actividades?: ActividadUncheckedUpdateManyWithoutCicloNestedInput
    alumnoActs?: AlumnoActividadUncheckedUpdateManyWithoutCicloNestedInput
  }

  export type PlanDeEstudioUpsertWithoutGruposInput = {
    update: XOR<PlanDeEstudioUpdateWithoutGruposInput, PlanDeEstudioUncheckedUpdateWithoutGruposInput>
    create: XOR<PlanDeEstudioCreateWithoutGruposInput, PlanDeEstudioUncheckedCreateWithoutGruposInput>
    where?: PlanDeEstudioWhereInput
  }

  export type PlanDeEstudioUpdateToOneWithWhereWithoutGruposInput = {
    where?: PlanDeEstudioWhereInput
    data: XOR<PlanDeEstudioUpdateWithoutGruposInput, PlanDeEstudioUncheckedUpdateWithoutGruposInput>
  }

  export type PlanDeEstudioUpdateWithoutGruposInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escuela?: EscuelaUpdateOneRequiredWithoutPlanesNestedInput
    ciclos?: CicloUpdateManyWithoutPlanNestedInput
    generaciones?: GeneracionUpdateManyWithoutPlanNestedInput
    planDeptos?: PlanDepartamentoUpdateManyWithoutPlanNestedInput
  }

  export type PlanDeEstudioUncheckedUpdateWithoutGruposInput = {
    id_plan?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_escuela?: IntFieldUpdateOperationsInput | number
    ciclos?: CicloUncheckedUpdateManyWithoutPlanNestedInput
    generaciones?: GeneracionUncheckedUpdateManyWithoutPlanNestedInput
    planDeptos?: PlanDepartamentoUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type EscuelaUpsertWithoutGruposInput = {
    update: XOR<EscuelaUpdateWithoutGruposInput, EscuelaUncheckedUpdateWithoutGruposInput>
    create: XOR<EscuelaCreateWithoutGruposInput, EscuelaUncheckedCreateWithoutGruposInput>
    where?: EscuelaWhereInput
  }

  export type EscuelaUpdateToOneWithWhereWithoutGruposInput = {
    where?: EscuelaWhereInput
    data: XOR<EscuelaUpdateWithoutGruposInput, EscuelaUncheckedUpdateWithoutGruposInput>
  }

  export type EscuelaUpdateWithoutGruposInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    planes?: PlanDeEstudioUpdateManyWithoutEscuelaNestedInput
    departamentos?: DepartamentoUpdateManyWithoutEscuelaNestedInput
    usuarios?: UsuarioUpdateManyWithoutEscuelaNestedInput
    generaciones?: GeneracionUpdateManyWithoutEscuelaNestedInput
  }

  export type EscuelaUncheckedUpdateWithoutGruposInput = {
    id_escuela?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    clave?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    planes?: PlanDeEstudioUncheckedUpdateManyWithoutEscuelaNestedInput
    departamentos?: DepartamentoUncheckedUpdateManyWithoutEscuelaNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutEscuelaNestedInput
    generaciones?: GeneracionUncheckedUpdateManyWithoutEscuelaNestedInput
  }

  export type UsuarioUpsertWithWhereUniqueWithoutGrupoInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutGrupoInput, UsuarioUncheckedUpdateWithoutGrupoInput>
    create: XOR<UsuarioCreateWithoutGrupoInput, UsuarioUncheckedCreateWithoutGrupoInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutGrupoInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutGrupoInput, UsuarioUncheckedUpdateWithoutGrupoInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutGrupoInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutGrupoInput>
  }

  export type DepartamentoCreateWithoutActividadesInput = {
    nombre: string
    descripcion?: string | null
    escuela: EscuelaCreateNestedOneWithoutDepartamentosInput
    planDeptos?: PlanDepartamentoCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoUncheckedCreateWithoutActividadesInput = {
    id_departamento?: number
    nombre: string
    descripcion?: string | null
    id_escuela: number
    planDeptos?: PlanDepartamentoUncheckedCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoCreateOrConnectWithoutActividadesInput = {
    where: DepartamentoWhereUniqueInput
    create: XOR<DepartamentoCreateWithoutActividadesInput, DepartamentoUncheckedCreateWithoutActividadesInput>
  }

  export type UsuarioCreateWithoutActividades_creadasInput = {
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    activo?: boolean
    escuela: EscuelaCreateNestedOneWithoutUsuariosInput
    grupo?: GrupoCreateNestedOneWithoutAlumnosInput
    registros_act?: AlumnoActividadCreateNestedManyWithoutAlumnoInput
    registros_puntos?: AlumnoActividadCreateNestedManyWithoutCoordinadorInput
    logs?: RegistroCambiosCreateNestedManyWithoutUsuarioInput
    generacion?: GeneracionCreateNestedOneWithoutAlumnosInput
  }

  export type UsuarioUncheckedCreateWithoutActividades_creadasInput = {
    id_usuario?: number
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    id_escuela: number
    id_grupo?: number | null
    activo?: boolean
    generacionId_generacion?: number | null
    registros_act?: AlumnoActividadUncheckedCreateNestedManyWithoutAlumnoInput
    registros_puntos?: AlumnoActividadUncheckedCreateNestedManyWithoutCoordinadorInput
    logs?: RegistroCambiosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutActividades_creadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutActividades_creadasInput, UsuarioUncheckedCreateWithoutActividades_creadasInput>
  }

  export type CicloCreateWithoutActividadesInput = {
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    tipo: $Enums.TipoCiclo
    activo?: boolean
    plan: PlanDeEstudioCreateNestedOneWithoutCiclosInput
    grupos?: GrupoCreateNestedManyWithoutCicloInput
    alumnoActs?: AlumnoActividadCreateNestedManyWithoutCicloInput
  }

  export type CicloUncheckedCreateWithoutActividadesInput = {
    id_ciclo?: number
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    tipo: $Enums.TipoCiclo
    activo?: boolean
    id_plan: number
    grupos?: GrupoUncheckedCreateNestedManyWithoutCicloInput
    alumnoActs?: AlumnoActividadUncheckedCreateNestedManyWithoutCicloInput
  }

  export type CicloCreateOrConnectWithoutActividadesInput = {
    where: CicloWhereUniqueInput
    create: XOR<CicloCreateWithoutActividadesInput, CicloUncheckedCreateWithoutActividadesInput>
  }

  export type AlumnoActividadCreateWithoutActividadInput = {
    puntos_otorgados: number
    fecha_registro: Date | string
    alumno: UsuarioCreateNestedOneWithoutRegistros_actInput
    coordinador: UsuarioCreateNestedOneWithoutRegistros_puntosInput
    ciclo: CicloCreateNestedOneWithoutAlumnoActsInput
  }

  export type AlumnoActividadUncheckedCreateWithoutActividadInput = {
    id_alumno_actividad?: number
    id_alumno: number
    puntos_otorgados: number
    fecha_registro: Date | string
    id_coordinador: number
    id_ciclo: number
  }

  export type AlumnoActividadCreateOrConnectWithoutActividadInput = {
    where: AlumnoActividadWhereUniqueInput
    create: XOR<AlumnoActividadCreateWithoutActividadInput, AlumnoActividadUncheckedCreateWithoutActividadInput>
  }

  export type AlumnoActividadCreateManyActividadInputEnvelope = {
    data: AlumnoActividadCreateManyActividadInput | AlumnoActividadCreateManyActividadInput[]
    skipDuplicates?: boolean
  }

  export type DepartamentoUpsertWithoutActividadesInput = {
    update: XOR<DepartamentoUpdateWithoutActividadesInput, DepartamentoUncheckedUpdateWithoutActividadesInput>
    create: XOR<DepartamentoCreateWithoutActividadesInput, DepartamentoUncheckedCreateWithoutActividadesInput>
    where?: DepartamentoWhereInput
  }

  export type DepartamentoUpdateToOneWithWhereWithoutActividadesInput = {
    where?: DepartamentoWhereInput
    data: XOR<DepartamentoUpdateWithoutActividadesInput, DepartamentoUncheckedUpdateWithoutActividadesInput>
  }

  export type DepartamentoUpdateWithoutActividadesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    escuela?: EscuelaUpdateOneRequiredWithoutDepartamentosNestedInput
    planDeptos?: PlanDepartamentoUpdateManyWithoutDepartamentoNestedInput
  }

  export type DepartamentoUncheckedUpdateWithoutActividadesInput = {
    id_departamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_escuela?: IntFieldUpdateOperationsInput | number
    planDeptos?: PlanDepartamentoUncheckedUpdateManyWithoutDepartamentoNestedInput
  }

  export type UsuarioUpsertWithoutActividades_creadasInput = {
    update: XOR<UsuarioUpdateWithoutActividades_creadasInput, UsuarioUncheckedUpdateWithoutActividades_creadasInput>
    create: XOR<UsuarioCreateWithoutActividades_creadasInput, UsuarioUncheckedCreateWithoutActividades_creadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutActividades_creadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutActividades_creadasInput, UsuarioUncheckedUpdateWithoutActividades_creadasInput>
  }

  export type UsuarioUpdateWithoutActividades_creadasInput = {
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    activo?: BoolFieldUpdateOperationsInput | boolean
    escuela?: EscuelaUpdateOneRequiredWithoutUsuariosNestedInput
    grupo?: GrupoUpdateOneWithoutAlumnosNestedInput
    registros_act?: AlumnoActividadUpdateManyWithoutAlumnoNestedInput
    registros_puntos?: AlumnoActividadUpdateManyWithoutCoordinadorNestedInput
    logs?: RegistroCambiosUpdateManyWithoutUsuarioNestedInput
    generacion?: GeneracionUpdateOneWithoutAlumnosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutActividades_creadasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    id_escuela?: IntFieldUpdateOperationsInput | number
    id_grupo?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    generacionId_generacion?: NullableIntFieldUpdateOperationsInput | number | null
    registros_act?: AlumnoActividadUncheckedUpdateManyWithoutAlumnoNestedInput
    registros_puntos?: AlumnoActividadUncheckedUpdateManyWithoutCoordinadorNestedInput
    logs?: RegistroCambiosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CicloUpsertWithoutActividadesInput = {
    update: XOR<CicloUpdateWithoutActividadesInput, CicloUncheckedUpdateWithoutActividadesInput>
    create: XOR<CicloCreateWithoutActividadesInput, CicloUncheckedCreateWithoutActividadesInput>
    where?: CicloWhereInput
  }

  export type CicloUpdateToOneWithWhereWithoutActividadesInput = {
    where?: CicloWhereInput
    data: XOR<CicloUpdateWithoutActividadesInput, CicloUncheckedUpdateWithoutActividadesInput>
  }

  export type CicloUpdateWithoutActividadesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCicloFieldUpdateOperationsInput | $Enums.TipoCiclo
    activo?: BoolFieldUpdateOperationsInput | boolean
    plan?: PlanDeEstudioUpdateOneRequiredWithoutCiclosNestedInput
    grupos?: GrupoUpdateManyWithoutCicloNestedInput
    alumnoActs?: AlumnoActividadUpdateManyWithoutCicloNestedInput
  }

  export type CicloUncheckedUpdateWithoutActividadesInput = {
    id_ciclo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCicloFieldUpdateOperationsInput | $Enums.TipoCiclo
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_plan?: IntFieldUpdateOperationsInput | number
    grupos?: GrupoUncheckedUpdateManyWithoutCicloNestedInput
    alumnoActs?: AlumnoActividadUncheckedUpdateManyWithoutCicloNestedInput
  }

  export type AlumnoActividadUpsertWithWhereUniqueWithoutActividadInput = {
    where: AlumnoActividadWhereUniqueInput
    update: XOR<AlumnoActividadUpdateWithoutActividadInput, AlumnoActividadUncheckedUpdateWithoutActividadInput>
    create: XOR<AlumnoActividadCreateWithoutActividadInput, AlumnoActividadUncheckedCreateWithoutActividadInput>
  }

  export type AlumnoActividadUpdateWithWhereUniqueWithoutActividadInput = {
    where: AlumnoActividadWhereUniqueInput
    data: XOR<AlumnoActividadUpdateWithoutActividadInput, AlumnoActividadUncheckedUpdateWithoutActividadInput>
  }

  export type AlumnoActividadUpdateManyWithWhereWithoutActividadInput = {
    where: AlumnoActividadScalarWhereInput
    data: XOR<AlumnoActividadUpdateManyMutationInput, AlumnoActividadUncheckedUpdateManyWithoutActividadInput>
  }

  export type UsuarioCreateWithoutRegistros_actInput = {
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    activo?: boolean
    escuela: EscuelaCreateNestedOneWithoutUsuariosInput
    grupo?: GrupoCreateNestedOneWithoutAlumnosInput
    actividades_creadas?: ActividadCreateNestedManyWithoutCoordinadorInput
    registros_puntos?: AlumnoActividadCreateNestedManyWithoutCoordinadorInput
    logs?: RegistroCambiosCreateNestedManyWithoutUsuarioInput
    generacion?: GeneracionCreateNestedOneWithoutAlumnosInput
  }

  export type UsuarioUncheckedCreateWithoutRegistros_actInput = {
    id_usuario?: number
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    id_escuela: number
    id_grupo?: number | null
    activo?: boolean
    generacionId_generacion?: number | null
    actividades_creadas?: ActividadUncheckedCreateNestedManyWithoutCoordinadorInput
    registros_puntos?: AlumnoActividadUncheckedCreateNestedManyWithoutCoordinadorInput
    logs?: RegistroCambiosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRegistros_actInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRegistros_actInput, UsuarioUncheckedCreateWithoutRegistros_actInput>
  }

  export type ActividadCreateWithoutAlumnoActsInput = {
    nombre: string
    descripcion?: string | null
    fecha: Date | string
    puntos: number
    departamento: DepartamentoCreateNestedOneWithoutActividadesInput
    coordinador: UsuarioCreateNestedOneWithoutActividades_creadasInput
    ciclo: CicloCreateNestedOneWithoutActividadesInput
  }

  export type ActividadUncheckedCreateWithoutAlumnoActsInput = {
    id_actividad?: number
    nombre: string
    descripcion?: string | null
    fecha: Date | string
    puntos: number
    id_departamento: number
    id_coordinador: number
    id_ciclo: number
  }

  export type ActividadCreateOrConnectWithoutAlumnoActsInput = {
    where: ActividadWhereUniqueInput
    create: XOR<ActividadCreateWithoutAlumnoActsInput, ActividadUncheckedCreateWithoutAlumnoActsInput>
  }

  export type UsuarioCreateWithoutRegistros_puntosInput = {
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    activo?: boolean
    escuela: EscuelaCreateNestedOneWithoutUsuariosInput
    grupo?: GrupoCreateNestedOneWithoutAlumnosInput
    actividades_creadas?: ActividadCreateNestedManyWithoutCoordinadorInput
    registros_act?: AlumnoActividadCreateNestedManyWithoutAlumnoInput
    logs?: RegistroCambiosCreateNestedManyWithoutUsuarioInput
    generacion?: GeneracionCreateNestedOneWithoutAlumnosInput
  }

  export type UsuarioUncheckedCreateWithoutRegistros_puntosInput = {
    id_usuario?: number
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    id_escuela: number
    id_grupo?: number | null
    activo?: boolean
    generacionId_generacion?: number | null
    actividades_creadas?: ActividadUncheckedCreateNestedManyWithoutCoordinadorInput
    registros_act?: AlumnoActividadUncheckedCreateNestedManyWithoutAlumnoInput
    logs?: RegistroCambiosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRegistros_puntosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRegistros_puntosInput, UsuarioUncheckedCreateWithoutRegistros_puntosInput>
  }

  export type CicloCreateWithoutAlumnoActsInput = {
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    tipo: $Enums.TipoCiclo
    activo?: boolean
    plan: PlanDeEstudioCreateNestedOneWithoutCiclosInput
    grupos?: GrupoCreateNestedManyWithoutCicloInput
    actividades?: ActividadCreateNestedManyWithoutCicloInput
  }

  export type CicloUncheckedCreateWithoutAlumnoActsInput = {
    id_ciclo?: number
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    tipo: $Enums.TipoCiclo
    activo?: boolean
    id_plan: number
    grupos?: GrupoUncheckedCreateNestedManyWithoutCicloInput
    actividades?: ActividadUncheckedCreateNestedManyWithoutCicloInput
  }

  export type CicloCreateOrConnectWithoutAlumnoActsInput = {
    where: CicloWhereUniqueInput
    create: XOR<CicloCreateWithoutAlumnoActsInput, CicloUncheckedCreateWithoutAlumnoActsInput>
  }

  export type UsuarioUpsertWithoutRegistros_actInput = {
    update: XOR<UsuarioUpdateWithoutRegistros_actInput, UsuarioUncheckedUpdateWithoutRegistros_actInput>
    create: XOR<UsuarioCreateWithoutRegistros_actInput, UsuarioUncheckedCreateWithoutRegistros_actInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRegistros_actInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRegistros_actInput, UsuarioUncheckedUpdateWithoutRegistros_actInput>
  }

  export type UsuarioUpdateWithoutRegistros_actInput = {
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    activo?: BoolFieldUpdateOperationsInput | boolean
    escuela?: EscuelaUpdateOneRequiredWithoutUsuariosNestedInput
    grupo?: GrupoUpdateOneWithoutAlumnosNestedInput
    actividades_creadas?: ActividadUpdateManyWithoutCoordinadorNestedInput
    registros_puntos?: AlumnoActividadUpdateManyWithoutCoordinadorNestedInput
    logs?: RegistroCambiosUpdateManyWithoutUsuarioNestedInput
    generacion?: GeneracionUpdateOneWithoutAlumnosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRegistros_actInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    id_escuela?: IntFieldUpdateOperationsInput | number
    id_grupo?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    generacionId_generacion?: NullableIntFieldUpdateOperationsInput | number | null
    actividades_creadas?: ActividadUncheckedUpdateManyWithoutCoordinadorNestedInput
    registros_puntos?: AlumnoActividadUncheckedUpdateManyWithoutCoordinadorNestedInput
    logs?: RegistroCambiosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ActividadUpsertWithoutAlumnoActsInput = {
    update: XOR<ActividadUpdateWithoutAlumnoActsInput, ActividadUncheckedUpdateWithoutAlumnoActsInput>
    create: XOR<ActividadCreateWithoutAlumnoActsInput, ActividadUncheckedCreateWithoutAlumnoActsInput>
    where?: ActividadWhereInput
  }

  export type ActividadUpdateToOneWithWhereWithoutAlumnoActsInput = {
    where?: ActividadWhereInput
    data: XOR<ActividadUpdateWithoutAlumnoActsInput, ActividadUncheckedUpdateWithoutAlumnoActsInput>
  }

  export type ActividadUpdateWithoutAlumnoActsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntos?: IntFieldUpdateOperationsInput | number
    departamento?: DepartamentoUpdateOneRequiredWithoutActividadesNestedInput
    coordinador?: UsuarioUpdateOneRequiredWithoutActividades_creadasNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutActividadesNestedInput
  }

  export type ActividadUncheckedUpdateWithoutAlumnoActsInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntos?: IntFieldUpdateOperationsInput | number
    id_departamento?: IntFieldUpdateOperationsInput | number
    id_coordinador?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioUpsertWithoutRegistros_puntosInput = {
    update: XOR<UsuarioUpdateWithoutRegistros_puntosInput, UsuarioUncheckedUpdateWithoutRegistros_puntosInput>
    create: XOR<UsuarioCreateWithoutRegistros_puntosInput, UsuarioUncheckedCreateWithoutRegistros_puntosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRegistros_puntosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRegistros_puntosInput, UsuarioUncheckedUpdateWithoutRegistros_puntosInput>
  }

  export type UsuarioUpdateWithoutRegistros_puntosInput = {
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    activo?: BoolFieldUpdateOperationsInput | boolean
    escuela?: EscuelaUpdateOneRequiredWithoutUsuariosNestedInput
    grupo?: GrupoUpdateOneWithoutAlumnosNestedInput
    actividades_creadas?: ActividadUpdateManyWithoutCoordinadorNestedInput
    registros_act?: AlumnoActividadUpdateManyWithoutAlumnoNestedInput
    logs?: RegistroCambiosUpdateManyWithoutUsuarioNestedInput
    generacion?: GeneracionUpdateOneWithoutAlumnosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRegistros_puntosInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    id_escuela?: IntFieldUpdateOperationsInput | number
    id_grupo?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    generacionId_generacion?: NullableIntFieldUpdateOperationsInput | number | null
    actividades_creadas?: ActividadUncheckedUpdateManyWithoutCoordinadorNestedInput
    registros_act?: AlumnoActividadUncheckedUpdateManyWithoutAlumnoNestedInput
    logs?: RegistroCambiosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CicloUpsertWithoutAlumnoActsInput = {
    update: XOR<CicloUpdateWithoutAlumnoActsInput, CicloUncheckedUpdateWithoutAlumnoActsInput>
    create: XOR<CicloCreateWithoutAlumnoActsInput, CicloUncheckedCreateWithoutAlumnoActsInput>
    where?: CicloWhereInput
  }

  export type CicloUpdateToOneWithWhereWithoutAlumnoActsInput = {
    where?: CicloWhereInput
    data: XOR<CicloUpdateWithoutAlumnoActsInput, CicloUncheckedUpdateWithoutAlumnoActsInput>
  }

  export type CicloUpdateWithoutAlumnoActsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCicloFieldUpdateOperationsInput | $Enums.TipoCiclo
    activo?: BoolFieldUpdateOperationsInput | boolean
    plan?: PlanDeEstudioUpdateOneRequiredWithoutCiclosNestedInput
    grupos?: GrupoUpdateManyWithoutCicloNestedInput
    actividades?: ActividadUpdateManyWithoutCicloNestedInput
  }

  export type CicloUncheckedUpdateWithoutAlumnoActsInput = {
    id_ciclo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCicloFieldUpdateOperationsInput | $Enums.TipoCiclo
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_plan?: IntFieldUpdateOperationsInput | number
    grupos?: GrupoUncheckedUpdateManyWithoutCicloNestedInput
    actividades?: ActividadUncheckedUpdateManyWithoutCicloNestedInput
  }

  export type PlanDeEstudioCreateWithoutPlanDeptosInput = {
    nombre: string
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    escuela: EscuelaCreateNestedOneWithoutPlanesInput
    ciclos?: CicloCreateNestedManyWithoutPlanInput
    generaciones?: GeneracionCreateNestedManyWithoutPlanInput
    grupos?: GrupoCreateNestedManyWithoutPlanInput
  }

  export type PlanDeEstudioUncheckedCreateWithoutPlanDeptosInput = {
    id_plan?: number
    nombre: string
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
    id_escuela: number
    ciclos?: CicloUncheckedCreateNestedManyWithoutPlanInput
    generaciones?: GeneracionUncheckedCreateNestedManyWithoutPlanInput
    grupos?: GrupoUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanDeEstudioCreateOrConnectWithoutPlanDeptosInput = {
    where: PlanDeEstudioWhereUniqueInput
    create: XOR<PlanDeEstudioCreateWithoutPlanDeptosInput, PlanDeEstudioUncheckedCreateWithoutPlanDeptosInput>
  }

  export type DepartamentoCreateWithoutPlanDeptosInput = {
    nombre: string
    descripcion?: string | null
    escuela: EscuelaCreateNestedOneWithoutDepartamentosInput
    actividades?: ActividadCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoUncheckedCreateWithoutPlanDeptosInput = {
    id_departamento?: number
    nombre: string
    descripcion?: string | null
    id_escuela: number
    actividades?: ActividadUncheckedCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoCreateOrConnectWithoutPlanDeptosInput = {
    where: DepartamentoWhereUniqueInput
    create: XOR<DepartamentoCreateWithoutPlanDeptosInput, DepartamentoUncheckedCreateWithoutPlanDeptosInput>
  }

  export type PlanDeEstudioUpsertWithoutPlanDeptosInput = {
    update: XOR<PlanDeEstudioUpdateWithoutPlanDeptosInput, PlanDeEstudioUncheckedUpdateWithoutPlanDeptosInput>
    create: XOR<PlanDeEstudioCreateWithoutPlanDeptosInput, PlanDeEstudioUncheckedCreateWithoutPlanDeptosInput>
    where?: PlanDeEstudioWhereInput
  }

  export type PlanDeEstudioUpdateToOneWithWhereWithoutPlanDeptosInput = {
    where?: PlanDeEstudioWhereInput
    data: XOR<PlanDeEstudioUpdateWithoutPlanDeptosInput, PlanDeEstudioUncheckedUpdateWithoutPlanDeptosInput>
  }

  export type PlanDeEstudioUpdateWithoutPlanDeptosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escuela?: EscuelaUpdateOneRequiredWithoutPlanesNestedInput
    ciclos?: CicloUpdateManyWithoutPlanNestedInput
    generaciones?: GeneracionUpdateManyWithoutPlanNestedInput
    grupos?: GrupoUpdateManyWithoutPlanNestedInput
  }

  export type PlanDeEstudioUncheckedUpdateWithoutPlanDeptosInput = {
    id_plan?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_escuela?: IntFieldUpdateOperationsInput | number
    ciclos?: CicloUncheckedUpdateManyWithoutPlanNestedInput
    generaciones?: GeneracionUncheckedUpdateManyWithoutPlanNestedInput
    grupos?: GrupoUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type DepartamentoUpsertWithoutPlanDeptosInput = {
    update: XOR<DepartamentoUpdateWithoutPlanDeptosInput, DepartamentoUncheckedUpdateWithoutPlanDeptosInput>
    create: XOR<DepartamentoCreateWithoutPlanDeptosInput, DepartamentoUncheckedCreateWithoutPlanDeptosInput>
    where?: DepartamentoWhereInput
  }

  export type DepartamentoUpdateToOneWithWhereWithoutPlanDeptosInput = {
    where?: DepartamentoWhereInput
    data: XOR<DepartamentoUpdateWithoutPlanDeptosInput, DepartamentoUncheckedUpdateWithoutPlanDeptosInput>
  }

  export type DepartamentoUpdateWithoutPlanDeptosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    escuela?: EscuelaUpdateOneRequiredWithoutDepartamentosNestedInput
    actividades?: ActividadUpdateManyWithoutDepartamentoNestedInput
  }

  export type DepartamentoUncheckedUpdateWithoutPlanDeptosInput = {
    id_departamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    id_escuela?: IntFieldUpdateOperationsInput | number
    actividades?: ActividadUncheckedUpdateManyWithoutDepartamentoNestedInput
  }

  export type UsuarioCreateWithoutLogsInput = {
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    activo?: boolean
    escuela: EscuelaCreateNestedOneWithoutUsuariosInput
    grupo?: GrupoCreateNestedOneWithoutAlumnosInput
    actividades_creadas?: ActividadCreateNestedManyWithoutCoordinadorInput
    registros_act?: AlumnoActividadCreateNestedManyWithoutAlumnoInput
    registros_puntos?: AlumnoActividadCreateNestedManyWithoutCoordinadorInput
    generacion?: GeneracionCreateNestedOneWithoutAlumnosInput
  }

  export type UsuarioUncheckedCreateWithoutLogsInput = {
    id_usuario?: number
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    id_escuela: number
    id_grupo?: number | null
    activo?: boolean
    generacionId_generacion?: number | null
    actividades_creadas?: ActividadUncheckedCreateNestedManyWithoutCoordinadorInput
    registros_act?: AlumnoActividadUncheckedCreateNestedManyWithoutAlumnoInput
    registros_puntos?: AlumnoActividadUncheckedCreateNestedManyWithoutCoordinadorInput
  }

  export type UsuarioCreateOrConnectWithoutLogsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLogsInput, UsuarioUncheckedCreateWithoutLogsInput>
  }

  export type UsuarioUpsertWithoutLogsInput = {
    update: XOR<UsuarioUpdateWithoutLogsInput, UsuarioUncheckedUpdateWithoutLogsInput>
    create: XOR<UsuarioCreateWithoutLogsInput, UsuarioUncheckedCreateWithoutLogsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutLogsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutLogsInput, UsuarioUncheckedUpdateWithoutLogsInput>
  }

  export type UsuarioUpdateWithoutLogsInput = {
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    activo?: BoolFieldUpdateOperationsInput | boolean
    escuela?: EscuelaUpdateOneRequiredWithoutUsuariosNestedInput
    grupo?: GrupoUpdateOneWithoutAlumnosNestedInput
    actividades_creadas?: ActividadUpdateManyWithoutCoordinadorNestedInput
    registros_act?: AlumnoActividadUpdateManyWithoutAlumnoNestedInput
    registros_puntos?: AlumnoActividadUpdateManyWithoutCoordinadorNestedInput
    generacion?: GeneracionUpdateOneWithoutAlumnosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutLogsInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    id_escuela?: IntFieldUpdateOperationsInput | number
    id_grupo?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    generacionId_generacion?: NullableIntFieldUpdateOperationsInput | number | null
    actividades_creadas?: ActividadUncheckedUpdateManyWithoutCoordinadorNestedInput
    registros_act?: AlumnoActividadUncheckedUpdateManyWithoutAlumnoNestedInput
    registros_puntos?: AlumnoActividadUncheckedUpdateManyWithoutCoordinadorNestedInput
  }

  export type PlanDeEstudioCreateManyEscuelaInput = {
    id_plan?: number
    nombre: string
    descripcion?: string | null
    fecha_inicio: Date | string
    fecha_fin?: Date | string | null
  }

  export type DepartamentoCreateManyEscuelaInput = {
    id_departamento?: number
    nombre: string
    descripcion?: string | null
  }

  export type UsuarioCreateManyEscuelaInput = {
    id_usuario?: number
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    id_grupo?: number | null
    activo?: boolean
    generacionId_generacion?: number | null
  }

  export type GeneracionCreateManyEscuelaInput = {
    id_generacion?: number
    nombre: string
    ano_inicio: number
    ano_fin: number
    id_plan: number
  }

  export type GrupoCreateManyEscuelaInput = {
    id_grupo?: number
    nombre: string
    nivel: number
    turno: $Enums.Turno
    id_generacion: number
    id_ciclo: number
    id_plan: number
    fase?: $Enums.Fase | null
    activo?: boolean
  }

  export type PlanDeEstudioUpdateWithoutEscuelaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ciclos?: CicloUpdateManyWithoutPlanNestedInput
    generaciones?: GeneracionUpdateManyWithoutPlanNestedInput
    planDeptos?: PlanDepartamentoUpdateManyWithoutPlanNestedInput
    grupos?: GrupoUpdateManyWithoutPlanNestedInput
  }

  export type PlanDeEstudioUncheckedUpdateWithoutEscuelaInput = {
    id_plan?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ciclos?: CicloUncheckedUpdateManyWithoutPlanNestedInput
    generaciones?: GeneracionUncheckedUpdateManyWithoutPlanNestedInput
    planDeptos?: PlanDepartamentoUncheckedUpdateManyWithoutPlanNestedInput
    grupos?: GrupoUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanDeEstudioUncheckedUpdateManyWithoutEscuelaInput = {
    id_plan?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepartamentoUpdateWithoutEscuelaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    actividades?: ActividadUpdateManyWithoutDepartamentoNestedInput
    planDeptos?: PlanDepartamentoUpdateManyWithoutDepartamentoNestedInput
  }

  export type DepartamentoUncheckedUpdateWithoutEscuelaInput = {
    id_departamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    actividades?: ActividadUncheckedUpdateManyWithoutDepartamentoNestedInput
    planDeptos?: PlanDepartamentoUncheckedUpdateManyWithoutDepartamentoNestedInput
  }

  export type DepartamentoUncheckedUpdateManyWithoutEscuelaInput = {
    id_departamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUpdateWithoutEscuelaInput = {
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    activo?: BoolFieldUpdateOperationsInput | boolean
    grupo?: GrupoUpdateOneWithoutAlumnosNestedInput
    actividades_creadas?: ActividadUpdateManyWithoutCoordinadorNestedInput
    registros_act?: AlumnoActividadUpdateManyWithoutAlumnoNestedInput
    registros_puntos?: AlumnoActividadUpdateManyWithoutCoordinadorNestedInput
    logs?: RegistroCambiosUpdateManyWithoutUsuarioNestedInput
    generacion?: GeneracionUpdateOneWithoutAlumnosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEscuelaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    id_grupo?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    generacionId_generacion?: NullableIntFieldUpdateOperationsInput | number | null
    actividades_creadas?: ActividadUncheckedUpdateManyWithoutCoordinadorNestedInput
    registros_act?: AlumnoActividadUncheckedUpdateManyWithoutAlumnoNestedInput
    registros_puntos?: AlumnoActividadUncheckedUpdateManyWithoutCoordinadorNestedInput
    logs?: RegistroCambiosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutEscuelaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    id_grupo?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    generacionId_generacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GeneracionUpdateWithoutEscuelaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ano_inicio?: IntFieldUpdateOperationsInput | number
    ano_fin?: IntFieldUpdateOperationsInput | number
    plan?: PlanDeEstudioUpdateOneRequiredWithoutGeneracionesNestedInput
    grupos?: GrupoUpdateManyWithoutGeneracionNestedInput
    alumnos?: UsuarioUpdateManyWithoutGeneracionNestedInput
  }

  export type GeneracionUncheckedUpdateWithoutEscuelaInput = {
    id_generacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ano_inicio?: IntFieldUpdateOperationsInput | number
    ano_fin?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    grupos?: GrupoUncheckedUpdateManyWithoutGeneracionNestedInput
    alumnos?: UsuarioUncheckedUpdateManyWithoutGeneracionNestedInput
  }

  export type GeneracionUncheckedUpdateManyWithoutEscuelaInput = {
    id_generacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ano_inicio?: IntFieldUpdateOperationsInput | number
    ano_fin?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
  }

  export type GrupoUpdateWithoutEscuelaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    generacion?: GeneracionUpdateOneRequiredWithoutGruposNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutGruposNestedInput
    plan?: PlanDeEstudioUpdateOneRequiredWithoutGruposNestedInput
    alumnos?: UsuarioUpdateManyWithoutGrupoNestedInput
  }

  export type GrupoUncheckedUpdateWithoutEscuelaInput = {
    id_grupo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    id_generacion?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    alumnos?: UsuarioUncheckedUpdateManyWithoutGrupoNestedInput
  }

  export type GrupoUncheckedUpdateManyWithoutEscuelaInput = {
    id_grupo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    id_generacion?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CicloCreateManyPlanInput = {
    id_ciclo?: number
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    tipo: $Enums.TipoCiclo
    activo?: boolean
  }

  export type GeneracionCreateManyPlanInput = {
    id_generacion?: number
    nombre: string
    ano_inicio: number
    ano_fin: number
    id_escuela: number
  }

  export type PlanDepartamentoCreateManyPlanInput = {
    id_plan_departamento?: number
    id_departamento: number
    puntos_requeridos: number
  }

  export type GrupoCreateManyPlanInput = {
    id_grupo?: number
    nombre: string
    nivel: number
    turno: $Enums.Turno
    id_generacion: number
    id_ciclo: number
    id_escuela: number
    fase?: $Enums.Fase | null
    activo?: boolean
  }

  export type CicloUpdateWithoutPlanInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCicloFieldUpdateOperationsInput | $Enums.TipoCiclo
    activo?: BoolFieldUpdateOperationsInput | boolean
    grupos?: GrupoUpdateManyWithoutCicloNestedInput
    actividades?: ActividadUpdateManyWithoutCicloNestedInput
    alumnoActs?: AlumnoActividadUpdateManyWithoutCicloNestedInput
  }

  export type CicloUncheckedUpdateWithoutPlanInput = {
    id_ciclo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCicloFieldUpdateOperationsInput | $Enums.TipoCiclo
    activo?: BoolFieldUpdateOperationsInput | boolean
    grupos?: GrupoUncheckedUpdateManyWithoutCicloNestedInput
    actividades?: ActividadUncheckedUpdateManyWithoutCicloNestedInput
    alumnoActs?: AlumnoActividadUncheckedUpdateManyWithoutCicloNestedInput
  }

  export type CicloUncheckedUpdateManyWithoutPlanInput = {
    id_ciclo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCicloFieldUpdateOperationsInput | $Enums.TipoCiclo
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GeneracionUpdateWithoutPlanInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ano_inicio?: IntFieldUpdateOperationsInput | number
    ano_fin?: IntFieldUpdateOperationsInput | number
    escuela?: EscuelaUpdateOneRequiredWithoutGeneracionesNestedInput
    grupos?: GrupoUpdateManyWithoutGeneracionNestedInput
    alumnos?: UsuarioUpdateManyWithoutGeneracionNestedInput
  }

  export type GeneracionUncheckedUpdateWithoutPlanInput = {
    id_generacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ano_inicio?: IntFieldUpdateOperationsInput | number
    ano_fin?: IntFieldUpdateOperationsInput | number
    id_escuela?: IntFieldUpdateOperationsInput | number
    grupos?: GrupoUncheckedUpdateManyWithoutGeneracionNestedInput
    alumnos?: UsuarioUncheckedUpdateManyWithoutGeneracionNestedInput
  }

  export type GeneracionUncheckedUpdateManyWithoutPlanInput = {
    id_generacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ano_inicio?: IntFieldUpdateOperationsInput | number
    ano_fin?: IntFieldUpdateOperationsInput | number
    id_escuela?: IntFieldUpdateOperationsInput | number
  }

  export type PlanDepartamentoUpdateWithoutPlanInput = {
    puntos_requeridos?: IntFieldUpdateOperationsInput | number
    departamento?: DepartamentoUpdateOneRequiredWithoutPlanDeptosNestedInput
  }

  export type PlanDepartamentoUncheckedUpdateWithoutPlanInput = {
    id_plan_departamento?: IntFieldUpdateOperationsInput | number
    id_departamento?: IntFieldUpdateOperationsInput | number
    puntos_requeridos?: IntFieldUpdateOperationsInput | number
  }

  export type PlanDepartamentoUncheckedUpdateManyWithoutPlanInput = {
    id_plan_departamento?: IntFieldUpdateOperationsInput | number
    id_departamento?: IntFieldUpdateOperationsInput | number
    puntos_requeridos?: IntFieldUpdateOperationsInput | number
  }

  export type GrupoUpdateWithoutPlanInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    generacion?: GeneracionUpdateOneRequiredWithoutGruposNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutGruposNestedInput
    escuela?: EscuelaUpdateOneRequiredWithoutGruposNestedInput
    alumnos?: UsuarioUpdateManyWithoutGrupoNestedInput
  }

  export type GrupoUncheckedUpdateWithoutPlanInput = {
    id_grupo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    id_generacion?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
    id_escuela?: IntFieldUpdateOperationsInput | number
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    alumnos?: UsuarioUncheckedUpdateManyWithoutGrupoNestedInput
  }

  export type GrupoUncheckedUpdateManyWithoutPlanInput = {
    id_grupo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    id_generacion?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
    id_escuela?: IntFieldUpdateOperationsInput | number
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GrupoCreateManyCicloInput = {
    id_grupo?: number
    nombre: string
    nivel: number
    turno: $Enums.Turno
    id_generacion: number
    id_plan: number
    id_escuela: number
    fase?: $Enums.Fase | null
    activo?: boolean
  }

  export type ActividadCreateManyCicloInput = {
    id_actividad?: number
    nombre: string
    descripcion?: string | null
    fecha: Date | string
    puntos: number
    id_departamento: number
    id_coordinador: number
  }

  export type AlumnoActividadCreateManyCicloInput = {
    id_alumno_actividad?: number
    id_alumno: number
    id_actividad: number
    puntos_otorgados: number
    fecha_registro: Date | string
    id_coordinador: number
  }

  export type GrupoUpdateWithoutCicloInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    generacion?: GeneracionUpdateOneRequiredWithoutGruposNestedInput
    plan?: PlanDeEstudioUpdateOneRequiredWithoutGruposNestedInput
    escuela?: EscuelaUpdateOneRequiredWithoutGruposNestedInput
    alumnos?: UsuarioUpdateManyWithoutGrupoNestedInput
  }

  export type GrupoUncheckedUpdateWithoutCicloInput = {
    id_grupo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    id_generacion?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    id_escuela?: IntFieldUpdateOperationsInput | number
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    alumnos?: UsuarioUncheckedUpdateManyWithoutGrupoNestedInput
  }

  export type GrupoUncheckedUpdateManyWithoutCicloInput = {
    id_grupo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    id_generacion?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    id_escuela?: IntFieldUpdateOperationsInput | number
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActividadUpdateWithoutCicloInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntos?: IntFieldUpdateOperationsInput | number
    departamento?: DepartamentoUpdateOneRequiredWithoutActividadesNestedInput
    coordinador?: UsuarioUpdateOneRequiredWithoutActividades_creadasNestedInput
    alumnoActs?: AlumnoActividadUpdateManyWithoutActividadNestedInput
  }

  export type ActividadUncheckedUpdateWithoutCicloInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntos?: IntFieldUpdateOperationsInput | number
    id_departamento?: IntFieldUpdateOperationsInput | number
    id_coordinador?: IntFieldUpdateOperationsInput | number
    alumnoActs?: AlumnoActividadUncheckedUpdateManyWithoutActividadNestedInput
  }

  export type ActividadUncheckedUpdateManyWithoutCicloInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntos?: IntFieldUpdateOperationsInput | number
    id_departamento?: IntFieldUpdateOperationsInput | number
    id_coordinador?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoActividadUpdateWithoutCicloInput = {
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    alumno?: UsuarioUpdateOneRequiredWithoutRegistros_actNestedInput
    actividad?: ActividadUpdateOneRequiredWithoutAlumnoActsNestedInput
    coordinador?: UsuarioUpdateOneRequiredWithoutRegistros_puntosNestedInput
  }

  export type AlumnoActividadUncheckedUpdateWithoutCicloInput = {
    id_alumno_actividad?: IntFieldUpdateOperationsInput | number
    id_alumno?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_coordinador?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoActividadUncheckedUpdateManyWithoutCicloInput = {
    id_alumno_actividad?: IntFieldUpdateOperationsInput | number
    id_alumno?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_coordinador?: IntFieldUpdateOperationsInput | number
  }

  export type GrupoCreateManyGeneracionInput = {
    id_grupo?: number
    nombre: string
    nivel: number
    turno: $Enums.Turno
    id_ciclo: number
    id_plan: number
    id_escuela: number
    fase?: $Enums.Fase | null
    activo?: boolean
  }

  export type UsuarioCreateManyGeneracionInput = {
    id_usuario?: number
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    id_escuela: number
    id_grupo?: number | null
    activo?: boolean
  }

  export type GrupoUpdateWithoutGeneracionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    ciclo?: CicloUpdateOneRequiredWithoutGruposNestedInput
    plan?: PlanDeEstudioUpdateOneRequiredWithoutGruposNestedInput
    escuela?: EscuelaUpdateOneRequiredWithoutGruposNestedInput
    alumnos?: UsuarioUpdateManyWithoutGrupoNestedInput
  }

  export type GrupoUncheckedUpdateWithoutGeneracionInput = {
    id_grupo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    id_ciclo?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    id_escuela?: IntFieldUpdateOperationsInput | number
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    alumnos?: UsuarioUncheckedUpdateManyWithoutGrupoNestedInput
  }

  export type GrupoUncheckedUpdateManyWithoutGeneracionInput = {
    id_grupo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    turno?: EnumTurnoFieldUpdateOperationsInput | $Enums.Turno
    id_ciclo?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    id_escuela?: IntFieldUpdateOperationsInput | number
    fase?: NullableEnumFaseFieldUpdateOperationsInput | $Enums.Fase | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUpdateWithoutGeneracionInput = {
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    activo?: BoolFieldUpdateOperationsInput | boolean
    escuela?: EscuelaUpdateOneRequiredWithoutUsuariosNestedInput
    grupo?: GrupoUpdateOneWithoutAlumnosNestedInput
    actividades_creadas?: ActividadUpdateManyWithoutCoordinadorNestedInput
    registros_act?: AlumnoActividadUpdateManyWithoutAlumnoNestedInput
    registros_puntos?: AlumnoActividadUpdateManyWithoutCoordinadorNestedInput
    logs?: RegistroCambiosUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutGeneracionInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    id_escuela?: IntFieldUpdateOperationsInput | number
    id_grupo?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    actividades_creadas?: ActividadUncheckedUpdateManyWithoutCoordinadorNestedInput
    registros_act?: AlumnoActividadUncheckedUpdateManyWithoutAlumnoNestedInput
    registros_puntos?: AlumnoActividadUncheckedUpdateManyWithoutCoordinadorNestedInput
    logs?: RegistroCambiosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutGeneracionInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    id_escuela?: IntFieldUpdateOperationsInput | number
    id_grupo?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActividadCreateManyDepartamentoInput = {
    id_actividad?: number
    nombre: string
    descripcion?: string | null
    fecha: Date | string
    puntos: number
    id_coordinador: number
    id_ciclo: number
  }

  export type PlanDepartamentoCreateManyDepartamentoInput = {
    id_plan_departamento?: number
    id_plan: number
    puntos_requeridos: number
  }

  export type ActividadUpdateWithoutDepartamentoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntos?: IntFieldUpdateOperationsInput | number
    coordinador?: UsuarioUpdateOneRequiredWithoutActividades_creadasNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutActividadesNestedInput
    alumnoActs?: AlumnoActividadUpdateManyWithoutActividadNestedInput
  }

  export type ActividadUncheckedUpdateWithoutDepartamentoInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntos?: IntFieldUpdateOperationsInput | number
    id_coordinador?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
    alumnoActs?: AlumnoActividadUncheckedUpdateManyWithoutActividadNestedInput
  }

  export type ActividadUncheckedUpdateManyWithoutDepartamentoInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntos?: IntFieldUpdateOperationsInput | number
    id_coordinador?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
  }

  export type PlanDepartamentoUpdateWithoutDepartamentoInput = {
    puntos_requeridos?: IntFieldUpdateOperationsInput | number
    plan?: PlanDeEstudioUpdateOneRequiredWithoutPlanDeptosNestedInput
  }

  export type PlanDepartamentoUncheckedUpdateWithoutDepartamentoInput = {
    id_plan_departamento?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    puntos_requeridos?: IntFieldUpdateOperationsInput | number
  }

  export type PlanDepartamentoUncheckedUpdateManyWithoutDepartamentoInput = {
    id_plan_departamento?: IntFieldUpdateOperationsInput | number
    id_plan?: IntFieldUpdateOperationsInput | number
    puntos_requeridos?: IntFieldUpdateOperationsInput | number
  }

  export type ActividadCreateManyCoordinadorInput = {
    id_actividad?: number
    nombre: string
    descripcion?: string | null
    fecha: Date | string
    puntos: number
    id_departamento: number
    id_ciclo: number
  }

  export type AlumnoActividadCreateManyAlumnoInput = {
    id_alumno_actividad?: number
    id_actividad: number
    puntos_otorgados: number
    fecha_registro: Date | string
    id_coordinador: number
    id_ciclo: number
  }

  export type AlumnoActividadCreateManyCoordinadorInput = {
    id_alumno_actividad?: number
    id_alumno: number
    id_actividad: number
    puntos_otorgados: number
    fecha_registro: Date | string
    id_ciclo: number
  }

  export type RegistroCambiosCreateManyUsuarioInput = {
    id_registro?: number
    modulo: string
    accion: string
    descripcion?: string | null
    fecha?: Date | string
  }

  export type ActividadUpdateWithoutCoordinadorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntos?: IntFieldUpdateOperationsInput | number
    departamento?: DepartamentoUpdateOneRequiredWithoutActividadesNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutActividadesNestedInput
    alumnoActs?: AlumnoActividadUpdateManyWithoutActividadNestedInput
  }

  export type ActividadUncheckedUpdateWithoutCoordinadorInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntos?: IntFieldUpdateOperationsInput | number
    id_departamento?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
    alumnoActs?: AlumnoActividadUncheckedUpdateManyWithoutActividadNestedInput
  }

  export type ActividadUncheckedUpdateManyWithoutCoordinadorInput = {
    id_actividad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntos?: IntFieldUpdateOperationsInput | number
    id_departamento?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoActividadUpdateWithoutAlumnoInput = {
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    actividad?: ActividadUpdateOneRequiredWithoutAlumnoActsNestedInput
    coordinador?: UsuarioUpdateOneRequiredWithoutRegistros_puntosNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutAlumnoActsNestedInput
  }

  export type AlumnoActividadUncheckedUpdateWithoutAlumnoInput = {
    id_alumno_actividad?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_coordinador?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoActividadUncheckedUpdateManyWithoutAlumnoInput = {
    id_alumno_actividad?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_coordinador?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoActividadUpdateWithoutCoordinadorInput = {
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    alumno?: UsuarioUpdateOneRequiredWithoutRegistros_actNestedInput
    actividad?: ActividadUpdateOneRequiredWithoutAlumnoActsNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutAlumnoActsNestedInput
  }

  export type AlumnoActividadUncheckedUpdateWithoutCoordinadorInput = {
    id_alumno_actividad?: IntFieldUpdateOperationsInput | number
    id_alumno?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_ciclo?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoActividadUncheckedUpdateManyWithoutCoordinadorInput = {
    id_alumno_actividad?: IntFieldUpdateOperationsInput | number
    id_alumno?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_ciclo?: IntFieldUpdateOperationsInput | number
  }

  export type RegistroCambiosUpdateWithoutUsuarioInput = {
    modulo?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroCambiosUncheckedUpdateWithoutUsuarioInput = {
    id_registro?: IntFieldUpdateOperationsInput | number
    modulo?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroCambiosUncheckedUpdateManyWithoutUsuarioInput = {
    id_registro?: IntFieldUpdateOperationsInput | number
    modulo?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyGrupoInput = {
    id_usuario?: number
    num_cuenta: string
    nip: string
    nombre: string
    correo?: string | null
    rol: $Enums.Rol
    id_escuela: number
    activo?: boolean
    generacionId_generacion?: number | null
  }

  export type UsuarioUpdateWithoutGrupoInput = {
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    activo?: BoolFieldUpdateOperationsInput | boolean
    escuela?: EscuelaUpdateOneRequiredWithoutUsuariosNestedInput
    actividades_creadas?: ActividadUpdateManyWithoutCoordinadorNestedInput
    registros_act?: AlumnoActividadUpdateManyWithoutAlumnoNestedInput
    registros_puntos?: AlumnoActividadUpdateManyWithoutCoordinadorNestedInput
    logs?: RegistroCambiosUpdateManyWithoutUsuarioNestedInput
    generacion?: GeneracionUpdateOneWithoutAlumnosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutGrupoInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    id_escuela?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    generacionId_generacion?: NullableIntFieldUpdateOperationsInput | number | null
    actividades_creadas?: ActividadUncheckedUpdateManyWithoutCoordinadorNestedInput
    registros_act?: AlumnoActividadUncheckedUpdateManyWithoutAlumnoNestedInput
    registros_puntos?: AlumnoActividadUncheckedUpdateManyWithoutCoordinadorNestedInput
    logs?: RegistroCambiosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutGrupoInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    num_cuenta?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    id_escuela?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    generacionId_generacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlumnoActividadCreateManyActividadInput = {
    id_alumno_actividad?: number
    id_alumno: number
    puntos_otorgados: number
    fecha_registro: Date | string
    id_coordinador: number
    id_ciclo: number
  }

  export type AlumnoActividadUpdateWithoutActividadInput = {
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    alumno?: UsuarioUpdateOneRequiredWithoutRegistros_actNestedInput
    coordinador?: UsuarioUpdateOneRequiredWithoutRegistros_puntosNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutAlumnoActsNestedInput
  }

  export type AlumnoActividadUncheckedUpdateWithoutActividadInput = {
    id_alumno_actividad?: IntFieldUpdateOperationsInput | number
    id_alumno?: IntFieldUpdateOperationsInput | number
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_coordinador?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
  }

  export type AlumnoActividadUncheckedUpdateManyWithoutActividadInput = {
    id_alumno_actividad?: IntFieldUpdateOperationsInput | number
    id_alumno?: IntFieldUpdateOperationsInput | number
    puntos_otorgados?: IntFieldUpdateOperationsInput | number
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_coordinador?: IntFieldUpdateOperationsInput | number
    id_ciclo?: IntFieldUpdateOperationsInput | number
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