import express, { Router } from 'express'

interface Options {
    port: number;
    routes: Router;
}

export class Server{
    public readonly app = express();
    private readonly port: number; // avoidign hidden dependencies, we are using readonly to avoid changes in the port,
    private readonly routes: Router;
    constructor(options: Options){
        const { port = 3100, routes } = options;
        this.port = options.port;
        this.routes = routes;
    }

    async start(){
        // use defined routes
        this.app.use(this.routes);

        // listening port
        this.app.listen(this.port, () => {
            console.log('Server is running on port', this.port);
        })
    }
}