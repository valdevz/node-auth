import { envs } from "./config";
import { Server } from "./presentation/server";
import { AppRoutes } from "./presentation/routes"; // Adjust the import path as necessary
import { MongoDatabase } from "./data/mongodb";

(()=> {
main();
})()

async function main() {
    
    await MongoDatabase.connect({
        dbName: envs.MONGO_DB_NAME,
        mongoUrl: envs.MONGO_URL
    });

    // todo: server start
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    }).start();
}