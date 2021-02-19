export const isDefined = <T>(a: T | undefined | null): a is T => (
  a !== undefined && a !== null
);