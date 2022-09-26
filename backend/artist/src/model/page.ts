export interface Page<T> {
  items: Array<T>;
  count: number;
  last?: string;
}
