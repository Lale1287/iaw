import { Count, Filter, Where } from '@loopback/repository';
import { User, File } from '../models';
import { UserRepository } from '../repositories';
export declare class UserFileController {
    protected userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    find(id: string, filter?: Filter<File>): Promise<File[]>;
    create(id: typeof User.prototype.id, file: Omit<File, 'id'>): Promise<File>;
    patch(id: string, file: Partial<File>, where?: Where<File>): Promise<Count>;
    delete(id: string, where?: Where<File>): Promise<Count>;
}
