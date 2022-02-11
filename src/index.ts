import express, { Application } from 'express';

class Server{

    public app: Application;

    constructor(){
       this.app = express();
    }

    config(): void{
        // this.app.set('port', process.env.PORT || 3000 );
        this.app.set('port', process.env.PORT || 3000);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();