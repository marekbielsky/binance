import {
  AppErrorCode,
  errorMessages,
} from '../errors/types/app-error-message.enum';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { CustomHttpException } from '../errors/custom-exception.error';

@Catch(CustomHttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: CustomHttpException, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse();
    const statusCode = exception.getStatus();
    const errorCode = exception.errorCode;
    const message = exception.message;

    const errorResponse = {
      statusCode,
      message: message || errorMessages[errorCode],
      errorCode,
    };

    response.status(statusCode).json(errorResponse);
  }
}
