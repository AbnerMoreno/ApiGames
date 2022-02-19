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

    public async delete(req: Request, res: Response){
        const {id} = req.params;
        await db.query('DELETE * FROM games WHERE id = ?',[id])
        res.json({message: 'el juego fue eliminado con exito'})
    }

    public async update(req: Request, res: Response){
        const {id} = req.params;
         await db.query('UPDATE games set ? WHERE id = ?', [req.body, id])
        res.json({text:'updating a pymes: ' + req.params.id}) 
    }
}
export const gamesController = new GamesController();
export default gamesController