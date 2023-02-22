import { RPCFunctions, createServer } from "@node-rpc/server";
import { IApi } from "./interfaces";
import { jsonDeserializer } from "@node-rpc/server/dist/deserializers/jsonDeserializer"
import express, { Request, Response } from "express";


interface IContext {}

const api: RPCFunctions<IApi, IContext> = {
    add: (a: number, b: number) => () => a + b,
    sub: (a: number, b: number) => () => a - b,
    multiply: (a: number, b: number) => () => a * b,
};


const rpcServer = createServer({
    api,
    deserializer: jsonDeserializer
});

const app = express();

app.post("/calculator", async (req: Request, res: Response) => {
    try {
        const result = await rpcServer.handleAPIRequest(req, {});
        console.log(result);
        res.send(String(result));
    } catch(error) {
        console.log(error);
        return res.status(400).send("An error ocurred");
    }
});

app.listen(4000, () => {
    console.log(`Server listening on port 4000`);
});
