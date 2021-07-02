type UnwrapPromise<T> = T extends Promise<infer U> ? U : T

export type StaticPropsReturnType<T> = UnwrapPromise<ReturnType<T>>
