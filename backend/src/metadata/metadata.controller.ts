import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MetadataDTO } from 'src/dtos/metadata.dto';
import { MetadataService } from './metadata.service';

@Controller('metadata')
export class MetadataController {
  constructor(private readonly metadataService: MetadataService) {}

  @Get('/')
  @ApiOperation({
    summary: 'Get all metadata',
    description: 'Returns all the metadata from the database',
  })
  @ApiResponse({
    status: 200,
    description: 'All metadata',
  })
  @ApiResponse({
    status: 503,
    description: 'The server is not configured correctly',
    type: HttpException,
  })
  getAll() {
    try {
      return this.metadataService.getAll();
    } catch (error) {
      throw new HttpException(error.message, 503);
    }
  }

  @Get('/:fileId')
  @ApiOperation({
    summary: 'Get metadata by fileId',
    description: 'Returns metadata of a given file, identified by fileId',
  })
  @ApiResponse({
    status: 200,
    description: 'Metadata of file with given id',
  })
  @ApiResponse({
    status: 503,
    description: 'The server is not configured correctly',
    type: HttpException,
  })
  getById(@Param('fileId') fileId: number) {
    try {
      const metadata = this.metadataService.getById(fileId);

      if (!metadata) {
        throw new HttpException('File metadata not found', 404);
      }

      return metadata;
    } catch (error) {
      throw new HttpException(error.message, 503);
    }
  }

  @Post('/:fileId')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        image: {
          type: 'string',
        },
      },
    },
  })
  @ApiOperation({
    summary: 'Create metadata for a given file',
    description:
      'Creates metadata for a given file and returns the newly created metadata',
  })
  @ApiResponse({
    status: 200,
    description: 'Newly created metadata',
  })
  @ApiResponse({
    status: 503,
    description: 'The server is not configured correctly',
    type: HttpException,
  })
  writeMetadata(
    @Param('fileId') fileId: number,
    @Body() metadataObj: MetadataDTO,
  ) {
    try {
      const metadata = this.metadataService.writeMetadata(fileId, metadataObj);
      return metadata;
    } catch (error) {
      throw new HttpException(error.message, 503);
    }
  }
}
