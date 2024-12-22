export interface ResponseGeneric<T> {
    code: number;
    message: string;
    data: T[];
}
