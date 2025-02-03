import { envs } from "./config";
import { Server } from "./presentation/server";
import { AppRoutes } from "./presentation/routes"; // Adjust the import path as necessary

(()=> {
main();
})()

async function main() {
    // todo: await base de datos

    // todo: inicio de nuestro server
    console.log('main');
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    }).start();
}