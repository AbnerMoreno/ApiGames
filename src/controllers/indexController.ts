import {Request, Response} from 'express';

class IndexController{

    public index(req: Request, res: Response,){
        res.send('Hello mundo hpta')
    }
}
export const indexController = new IndexController();
export default indexController;