import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { File } from '../models';
import { FileRepository } from '../repositories';
export declare class FileController {
    fileRepository: FileRepository;
    constructor(fileRepository: FileRepository);
    create(file: Omit<File, 'id'>): Promise<File>;
    count(where?: Where<File>): Promise<Count>;
    find(filter?: Filter<File>): Promise<File[]>;
    updateAll(file: File, where?: Where<File>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<File>): Promise<File>;
    updateById(id: string, file: File): Promise<void>;
    replaceById(id: string, file: File): Promise<void>;
    deleteById(id: string): Promise<void>;
}
