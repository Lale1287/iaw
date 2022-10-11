import { Entity } from '@loopback/repository';
export declare class File extends Entity {
    id?: string;
    name: string;
    size?: number;
    creationDate?: number;
    userId?: string;
    constructor(data?: Partial<File>);
}
export interface FileRelations {
}
export declare type FileWithRelations = File & FileRelations;
