import express from 'express'

interface Options {
    port: number;
}

export class Server{
    public readonly app = express();
    private readonly port: number; // avoidign hidden dependencies, we are using readonly to avoid changes in the port,
    constructor(options: Options){
        const { port = 3100 } = options;
        this.port = options.port;
    }

    async start(){
        this.app.listen(this.port, () => {
            console.log('Server is running on port', this.port);
        })
    }
}