"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.send('Hello 2');
    }
}
exports.indexController = new IndexController();
exports.default = exports.indexController;
