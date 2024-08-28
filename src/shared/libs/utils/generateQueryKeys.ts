class generateQueryKeys<T> {
  queryKey: T;

  constructor(key: T) {
    this.queryKey = key;
  }

  all() {
    return [this.queryKey] as const;
  }

  lists() {
    return [{ type: this.queryKey, id: "LIST" }] as const;
  }

  list(info: { [key: any]: number | string | undefined | null }) {
    return [
      ...this.lists(),
      ...Object.values(info).map(
        (value) => ({ type: this.queryKey, id: value } as const)
      ),
    ] as const;
  }

  items() {
    return [{ type: this.queryKey, id: "ITEMS" }] as const;
  }

  item(uniqueKey: number | string) {
    return [...this.items(), { type: this.queryKey, id: uniqueKey }] as const;
  }
}

export const GenerateQueryKeys = <T>(key: T) => new generateQueryKeys<T>(key);
