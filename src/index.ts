export const Lang = {
  isString(value: any): value is string {
    return value instanceof String;
  },
  isNullOrUndefined: (value: any) => {
    return value === undefined || value === null;
  },
  isDefined: (value: any) => {
    return !Lang.isNullOrUndefined(value);
  },
  namOf<T>(key: keyof T) {
    return key;
  },
};
