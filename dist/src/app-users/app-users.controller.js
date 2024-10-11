"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUsersController = void 0;
const common_1 = require("@nestjs/common");
const app_users_service_1 = require("./app-users.service");
const create_app_user_dto_1 = require("./dto/create-app-user.dto");
let AppUsersController = class AppUsersController {
    constructor(appUsersService) {
        this.appUsersService = appUsersService;
    }
    create(createAppUserDto) {
        return this.appUsersService.create(createAppUserDto);
    }
    findAll() {
        return this.appUsersService.findAll();
    }
    findOne(id) {
        return this.appUsersService.findOne(Number(id));
    }
    update(id, updateAppUserDto) {
        return this.appUsersService.update(Number(id), updateAppUserDto);
    }
    remove(id) {
        return this.appUsersService.remove(Number(id));
    }
};
exports.AppUsersController = AppUsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_app_user_dto_1.CreateAppUserDto]),
    __metadata("design:returntype", Promise)
], AppUsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppUsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppUsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppUsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppUsersController.prototype, "remove", null);
exports.AppUsersController = AppUsersController = __decorate([
    (0, common_1.Controller)('app-users'),
    __metadata("design:paramtypes", [app_users_service_1.AppUsersService])
], AppUsersController);
//# sourceMappingURL=app-users.controller.js.map