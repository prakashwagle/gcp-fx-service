import express from "express";
import path from "path";
import * as http from 'http';
import {json} from "body-parser";
import { ConvertRoutesConfig } from "./fx-service/convert.routes.config";
import debug from "debug";
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: Number = 4000;
const routes: ConvertRoutesConfig[] = [];
const debugLog: debug.IDebugger = debug('app');

app.use(json());
app.use(ConvertRoutesConfig);
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );