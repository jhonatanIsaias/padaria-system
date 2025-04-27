// src/common/dto/response.dto.ts
import { HttpStatus } from '@nestjs/common';

export class ResponseDto<T> {
  private _message: string;
  private _statusCode: HttpStatus;
  private _data?: T;

  constructor(builder: ResponseDtoBuilder<T>) {
    this._message = builder.message;
    this._statusCode = builder.statusCode;
    this._data = builder.data;
  }

  get message(): string {
    return this._message;
  }

  get statusCode(): HttpStatus {
    return this._statusCode;
  }

  get data(): T | undefined {
    return this._data;
  }

  // Método de construção do Builder (opcional)
  static builder<T>(message: string, statusCode: HttpStatus): ResponseDtoBuilder<T> {
    return new ResponseDtoBuilder<T>(message, statusCode);
  }
}

export class ResponseDtoBuilder<T> {
  message: string;
  statusCode: HttpStatus;
  data?: T;

  constructor(message: string, statusCode: HttpStatus) {
    this.message = message;
    this.statusCode = statusCode;
  }

  setData(data: T): this {
    this.data = data;
    return this;
  }

  build(): ResponseDto<T> {
    return new ResponseDto<T>(this);
  }
}
