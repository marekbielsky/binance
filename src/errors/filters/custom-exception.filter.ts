import { CustomHttpException } from '../custom-exception.error';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AppErrorCode, errorMessages } from '../types/app-error-message.enum';

@Catch(CustomHttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: CustomHttpException, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse();
    const statusCode = exception.getStatus();
    const errorCode = exception.errorCode;
    const message = exception.message;

    const errorResponse = {
      statusCode,
      message: message || errorMessages[AppErrorCode.UnknownError],
      errorCode,
    };

    response.status(statusCode).json(errorResponse);
  }
}
