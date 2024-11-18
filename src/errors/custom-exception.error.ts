import { HttpException, HttpStatus } from '@nestjs/common';
import { AppErrorCode } from './types/app-error-message.enum';

export class CustomHttpException extends HttpException {
  errorCode: AppErrorCode;

  constructor(
    errorCode: AppErrorCode,
    statusCode: HttpStatus,
    message?: string,
  ) {
    super(message, statusCode);
    this.errorCode = errorCode;
  }
}
