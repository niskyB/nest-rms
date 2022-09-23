import { ErrorBody } from './error.interface';

class ExceptionResponse {
    public send(errorMessage: string, errorDetail: string) {
        const errorBody: ErrorBody = { errorMessage, errorDetail };
        return {
            errorBody,
        };
    }
}

export const apiResponse = new ExceptionResponse();
