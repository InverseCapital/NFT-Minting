import { Injectable } from '@nestjs/common';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
import { MetadataDTO } from '../dtos/metadata.dto';

const DB_PATH = './db/db.json';

@Injectable()
export class MetadataService {
  db: JsonDB;
  constructor() {
    this.db = new JsonDB(new Config(DB_PATH, true, true, '/'));
  }

  writeMetadata(fileId: number, metadataObj: MetadataDTO) {
    this.db.push(`/${fileId}`, metadataObj);
    return this.getById(fileId);
  }

  getById(fileId: number) {
    try {
      return this.db.getData(`/${fileId}`);
    } catch (error) {
      return null;
    }
  }

  getAll() {
    return this.db.getData('/');
  }
}
