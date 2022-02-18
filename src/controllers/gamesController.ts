import {Request, Response, } from 'express';
import db from "../database";

class GamesController{

    public async list(req: Request, res: Response,){
       const games = db.query('SELECT * FROM  games');
       res.json(games);
    }

    public async getOne(req: Request, res: Response){
        // const list = await db.query('Select id FROM games')
        // const {id} = req.params;
        // const games = await db.query('SELECT * FROM games WHERE id = ?', [id]);
        // console.log(games.length);
        // res.json({text:'creating a pymes'+ req.params.id})
    }

    public async create(req: Request, res: Response){
        // await db.query('INSERT INTO games set ?',[req.body]);
        // console.log(req.body);
        // res.json({text: 'creating a pymes'});
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