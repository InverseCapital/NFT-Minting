import { Body, Controller, Get, HttpException, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MetadataDTO } from 'src/dtos/metadata.dto';
import { MetadataService } from './metadata.service';

@Controller('metadata')
export class MetadataController {
    constructor(private readonly metadataService: MetadataService) { }

    @Get('/all')
    @ApiOperation({
        summary: 'Returns all the metadata from the database',
        description: 'Returns all the metadata from the database',
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
    getAll() {
        try {
            return this.metadataService.getAll();
        } catch {
            throw new HttpException('Record not found', 404);
        }
    }


    @Get('id/:fileId')
    @ApiOperation({
        summary: 'Returns metadata by fileId',
        description: 'Returns metadata by fileId',
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
    @ApiBody({description: '{"metadata": {"name": "Antonio","image": "http://img.png","description": "desc"}}'})
    @Post('/:fileId')
    @ApiOperation({
        summary: 'Write a new record by FileId',
        description: 'Write a new record by FileId',
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
