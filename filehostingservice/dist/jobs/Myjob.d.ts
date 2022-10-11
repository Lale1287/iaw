import { CronJob } from '@loopback/cron';
import { FileRepository } from '../repositories/file.repository';
export declare class MyCronJob extends CronJob {
    fileRepository: FileRepository;
    constructor(fileRepository: FileRepository);
}
