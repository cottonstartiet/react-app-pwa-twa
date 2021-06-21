export type ApiStatus = 'default' | 'inprogress' | 'success' | 'error';

export interface IApiStatus<T> {
    statusCode?: number;
    status: ApiStatus;
    data?: T;
}

export const defaultApiStatus = {
    initial: {
        statusCode: undefined,
        status: 'default',
        data: undefined
    } as IApiStatus<any>
}