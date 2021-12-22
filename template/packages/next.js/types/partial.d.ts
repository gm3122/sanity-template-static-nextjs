import { Primitive } from 'type-fest'

export type PartialReturnPromise<T> = T extends Primitive
  ? T
  : T extends () => Promise<infer U>
  ? () => Promise<PartialReturnPromise<U>>
  : {
      [K in keyof T]?: PartialReturnPromise<T[K]>
    }
