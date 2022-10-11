import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { File, User, UserRelations } from '../models';
import { FileRepository } from './file.repository';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    protected fileRepositoryGetter: Getter<FileRepository>;
    readonly files: HasManyRepositoryFactory<File, typeof User.prototype.id>;
    constructor(dataSource: MongodbDataSource, fileRepositoryGetter: Getter<FileRepository>);
}
