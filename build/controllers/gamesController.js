"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        database_1.default.query('describe games');
        res.json('games');
    }
    create(req, res) {
        res.json({ text: 'creating a game' });
    }
    delete(req, res) {
        res.json({ text: 'deleting a game' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'updating a game' + req.params.id });
    }
}
exports.gamesController = new GamesController();
exports.default = exports.gamesController;
