import {Request, Response} from 'express';
import db from "../database";
class GamesController{

    public async list(req: Request, res: Response,): Promise<void>{
       const games = await db.query('SELECT * FROM  games');
       res.json('games in the world');
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        // const list = await db.query('Select id FROM games')
        const {id} = req.params;
        const games = await db.query('SELECT * FROM games WHERE id = ?', [id]);
        // console.log(games.length);
        res.json({text:'creating a pymes'+ req.params.id})
    }

    public create(req: Request, res: Response){
        res.json({text: 'creating a pymes'});
    }

    public delete(req: Request, res: Response){
        res.json({text:'deleting a pymes ' + req.params.id}) 
    }

    public update(req: Request, res: Response){
        res.json({text:'updating a pymes: ' + req.params.id}) 
    }
}
export const gamesController = new GamesController();
export default gamesController