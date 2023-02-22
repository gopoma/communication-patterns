import { createClient } from "@node-rpc/client";
import { jsonSerializer } from "@node-rpc/client/dist/serializers/jsonSerializer";
import { axiosXHR } from "@node-rpc/client/dist/xhr/axios";
import { IApi } from "./interfaces";


const api = createClient<IApi>({
    endpoint: "http://localhost:4000/calculator",
    serializer: jsonSerializer,
    xhr: axiosXHR, // XMLHTTPRequest
});

(async () => {
    try {
        const response = await api.sub(13, 9).call();
        console.log(response);
    } catch(error) {
        console.log(error);
    }
})()
