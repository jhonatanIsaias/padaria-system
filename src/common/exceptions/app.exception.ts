import { HttpException, HttpStatus } from '@nestjs/common';

export class AppException extends HttpException {
  
    private static statusCode: HttpStatus = HttpStatus.BAD_REQUEST;
  private static errorMessage: string = 'Erro inesperado';

  private constructor(message: string, status: HttpStatus) {
    super({ message }, status);
  }

 
  static builder(): typeof AppException {
    return this;
  }

  static message(message: string): typeof AppException {
    this.errorMessage = message;
    return this;
  }

  static status(status: HttpStatus): typeof AppException {
    this.statusCode = status;
    return this;
  }

  static build(): never {
    throw new AppException(this.errorMessage, this.statusCode);
  }
}
