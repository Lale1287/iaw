"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FileController = class FileController {
    constructor(fileRepository) {
        this.fileRepository = fileRepository;
    }
    async create(file) {
        return this.fileRepository.create(file);
    }
    async count(where) {
        return this.fileRepository.count(where);
    }
    async find(filter) {
        return this.fileRepository.find(filter);
    }
    async updateAll(file, where) {
        return this.fileRepository.updateAll(file, where);
    }
    async findById(id, filter) {
        return this.fileRepository.findById(id, filter);
    }
    async updateById(id, file) {
        await this.fileRepository.updateById(id, file);
    }
    async replaceById(id, file) {
        await this.fileRepository.replaceById(id, file);
    }
    async deleteById(id) {
        await this.fileRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/files'),
    (0, rest_1.response)(200, {
        description: 'File model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.File) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.File, {
                    title: 'NewFile',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FileController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/files/count'),
    (0, rest_1.response)(200, {
        description: 'File model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.File)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FileController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/files'),
    (0, rest_1.response)(200, {
        description: 'Array of File model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.File, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.File)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FileController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/files'),
    (0, rest_1.response)(200, {
        description: 'File PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.File, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.File)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.File, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FileController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/files/{id}'),
    (0, rest_1.response)(200, {
        description: 'File model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.File, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.File, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FileController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/files/{id}'),
    (0, rest_1.response)(204, {
        description: 'File PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.File, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.File]),
    tslib_1.__metadata("design:returntype", Promise)
], FileController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/files/{id}'),
    (0, rest_1.response)(204, {
        description: 'File PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.File]),
    tslib_1.__metadata("design:returntype", Promise)
], FileController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/files/{id}'),
    (0, rest_1.response)(204, {
        description: 'File DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], FileController.prototype, "deleteById", null);
FileController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.FileRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FileRepository])
], FileController);
exports.FileController = FileController;
//# sourceMappingURL=file.controller.js.map