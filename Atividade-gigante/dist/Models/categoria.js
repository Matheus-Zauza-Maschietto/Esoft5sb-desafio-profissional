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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
var typeorm_1 = require("typeorm");
var user_1 = require("./user");
var Categoria = /** @class */ (function () {
    function Categoria() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Categoria.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Categoria.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            length: 7
        }),
        __metadata("design:type", String)
    ], Categoria.prototype, "cor", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_1.User; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", user_1.User)
    ], Categoria.prototype, "responsavel", void 0);
    Categoria = __decorate([
        (0, typeorm_1.Entity)()
    ], Categoria);
    return Categoria;
}());
exports.Categoria = Categoria;
//# sourceMappingURL=categoria.js.map