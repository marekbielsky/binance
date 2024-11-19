import { HttpException, HttpStatus } from '@nestjs/common';
import { AppErrorCode, errorMessages } from './types/app-error-message.enum';

export class CustomHttpException extends HttpException {
  public errorCode: AppErrorCode;

  constructor(
    errorCode: AppErrorCode,
    statusCode: HttpStatus,
    message: string = errorMessages[errorCode],
  ) {
    super(message, statusCode);
    this.errorCode = errorCode;
  }
}
