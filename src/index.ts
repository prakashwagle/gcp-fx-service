import express from "express";
import path from "path";
import * as http from 'http';
import {json} from "body-parser";
import debug from "debug";
import { currencyRouter } from "./fx-service";
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: number = 4000;
const debugLog: debug.IDebugger = debug('app');

app.use(json());
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.use('/currency',currencyRouter)

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );