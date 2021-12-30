import { Primitive } from 'type-fest'

export type StaticReturnType<T> = Awaited<ReturnType<T>>

type JsonProperty = Primitive | Array<unknown> | Record<string | number, unknown>

type ToJson<T extends JsonProperty> = T extends null
  ? null | undefined
  : T extends Array<infer U>
  ? Array<ToJson<U>>
  : T extends Record<string | number, unknown>
  ? {
      [K in keyof T]: ToJson<T[K]>
    }
  : T

export type StaticPropsReturnType<T> = ToJson<StaticReturnType<T>['props']>

export type NoUndefinedProps<T> = { [P in keyof T]-?: NonNullable<T[P]> }
