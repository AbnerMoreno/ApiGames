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
exports.gamesController = void 0;
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM  games');
            res.json('games in the world');
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const list = await db.query('Select id FROM games')
            const { id } = req.params;
            // const games = await db.query('SELECT * FROM games WHERE id = ?', [id]);
            // console.log(games.length);
            res.json({ text: 'creating a pymes' + req.params.id });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // await db.query('INSERT INTO games set ?',[req.body]);
            console.log(req.body);
            res.json({ text: 'creating a pymes' });
        });
    }
    delete(req, res) {
        res.json({ text: 'deleting a pymes ' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'updating a pymes: ' + req.params.id });
    }
}
exports.gamesController = new GamesController();
exports.default = exports.gamesController;
