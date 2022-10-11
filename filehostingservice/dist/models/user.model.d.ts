import { Entity } from '@loopback/repository';
import { File } from './file.model';
export declare class User extends Entity {
    username: string;
    password: string;
    id?: string;
    files: File[];
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
