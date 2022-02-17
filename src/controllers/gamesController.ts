import {Request, Response} from 'express';
import db from "../database";
class GamesController{

    public list(req: Request, res: Response,){
       db.query('describe games');
       res.json('games')
    }

    public getOne(req: Request, res: Response){
        res.json({text:'creating a game'+ req.params.id})
    }

    public create(req: Request, res: Response){
        res.json({text:'creating a game'})
    }

    public delete(req: Request, res: Response){
        res.json({text:'deleting a game' + req.params.id}) 
    }

    public update(req: Request, res: Response){
        res.json({text:'updating a game' + req.params.id}) 
    }
}
export const gamesController = new GamesController();
export default gamesController