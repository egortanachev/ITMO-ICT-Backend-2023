"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const uuid_1 = require("uuid");
const user_2 = __importDefault(require("../services/user"));
class UserController {
    constructor() {
        this.me = (request, response) => __awaiter(this, void 0, void 0, function* () {
            response.send(request.user);
        });
        this.get = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const records = yield this.userService.listUsers();
                return response.json(records);
            }
            catch (error) {
                response.status(404).send({ "error": error.message });
            }
        });
        this.post = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const id = (0, uuid_1.v4)();
            try {
                const record = yield user_1.default.create(Object.assign(Object.assign({}, request.body), { id }));
                return response.json({ record, msg: 'Successfully create user' });
            }
            catch (error) {
                response.status(400).send({ "error": error.message });
            }
        });
        this.getbyID = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.userService.getById(request.params.id);
                return response.json(record);
            }
            catch (error) {
                response.status(404).send({ "error": error.message });
            }
        });
        this.put = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.userService.updateUser(request.params.id, request.body);
                return response.json({ record, msg: 'Successfully update user' });
            }
            catch (error) {
                response.status(404).send({ "error": error.message });
            }
        });
        this.delete = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.userService.deleteUser(request.params.id);
                return response.json({ msg: 'Successfully delete user' });
            }
            catch (error) {
                response.status(404).send({ "error": error.message });
            }
        });
        this.userService = new user_2.default();
    }
}
exports.default = UserController;
