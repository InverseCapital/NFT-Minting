import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Hello world',
    description: 'Returns hello world',
  })
  @ApiResponse({
    status: 200,
    description: 'Hello world',
  })
  @ApiResponse({
    status: 503,
    description: 'The server is not configured correctly',
    type: HttpException,
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
