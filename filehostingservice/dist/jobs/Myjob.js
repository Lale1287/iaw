"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCronJob = void 0;
const tslib_1 = require("tslib");
const cron_1 = require("@loopback/cron");
const repository_1 = require("@loopback/repository");
const file_repository_1 = require("../repositories/file.repository");
let MyCronJob = class MyCronJob extends cron_1.CronJob {
    constructor(fileRepository) {
        super({
            name: 'job-B', onTick: async () => {
                let files = await fileRepository.find();
                console.log(new Date());
                console.log(files);
            },
            cronTime: '*/10 * * * * *',
            start: true,
        });
        this.fileRepository = fileRepository;
    }
};
MyCronJob = tslib_1.__decorate([
    (0, cron_1.cronJob)(),
    tslib_1.__param(0, (0, repository_1.repository)(file_repository_1.FileRepository)),
    tslib_1.__metadata("design:paramtypes", [file_repository_1.FileRepository])
], MyCronJob);
exports.MyCronJob = MyCronJob;
//# sourceMappingURL=Myjob.js.map