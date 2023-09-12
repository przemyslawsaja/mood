/**
 * Represents a type that can either have a value of type T or be null.
 *
 * @template T - The type to make nullable.
 */
export type Nullable<T> = T | null;

/**
 * Represents an action object typically used in Redux-like reducers.
 *
 * @template T - The type of the action.
 * @template P - The type of the payload (optional).
 */
export type ReducerAction<T, P> = {
  type: T;
  payload?: P;
};

/**
 * Make a type assembled from several types/utilities more readable.
 * (e.g. the type will be shown as the final resulting type instead of as a bunch of type utils wrapping the initial type).
 */
type FinalType<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

/**
 * Merge keys of U into T, overriding value types with those in U.
 */
export type Override<
  T,
  U extends Partial<Record<keyof T, unknown>>,
> = FinalType<Omit<T, keyof U> & U>;
