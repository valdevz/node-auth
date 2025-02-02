import { Server } from "./presentation/server";

(()=> {
main();
})()

async function main() {
    // todo: await base de datos

    // todo: inicio de nuestro server
    console.log('main');
    new Server({
        port: 3000,
    }).start();
}