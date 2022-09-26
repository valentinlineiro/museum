export interface Resource<T> {
  id: string;
  created: number;
  resource: T;
}
