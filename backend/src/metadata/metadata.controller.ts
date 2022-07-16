import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MetadataDTO } from 'src/dtos/metadata.dto';
import { MetadataService } from './metadata.service';

@Controller('metadata')
export class MetadataController {
    constructor(private readonly metadataService: MetadataService) { }

    @Get('/:fileId')
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

    getById(@Param('fileId') fileId: number): string {
        console.log(fileId);
        try {
            return this.metadataService.getById(fileId);
        } catch {
            throw new HttpException('Record not found', 404);
        }
    }

    @Post('/:fileId')
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

    writeMetadata(@Param('fileId') fileId: number, @Body('metadata') metadataObj: MetadataDTO) {
        console.log(metadataObj);
        try {
            this.metadataService.writeMetadata(fileId, metadataObj);
        } catch {
            throw new HttpException('Record not found', 404);
        }
    }
}
