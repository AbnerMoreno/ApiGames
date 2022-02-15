import {Request, Response} from 'express';

class IndexController{

    public index(req: Request, res: Response,){
        res.send('Hello 2')
    }
}
export const indexController = new IndexController();
// export default indexController;