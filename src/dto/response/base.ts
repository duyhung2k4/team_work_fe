export type QueryReturnType<T = any> = 
  | {
    data: null,
    error: string,
    success: boolean
  }
  | {
    data: T,
    error: null,
    success: boolean
  }