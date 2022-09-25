import { ErrorMessageDetailEnum, ErrorMessageEnum } from '../../core';
import { ErrorBody } from './error.interface';

class ExceptionResponse {
    public send(errorMessage: ErrorMessageEnum, errorDetail: ErrorMessageDetailEnum) {
        const errorBody: ErrorBody = { errorMessage, errorDetail };
        return {
            errorBody,
        };
    }
}

export const apiResponse = new ExceptionResponse();
