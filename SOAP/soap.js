const axios = require("axios").default;
const parseString = require("xml2js").parseString;
const parseStringPromise = require("xml2js").parseStringPromise;


const xmlToJSON = (string) => {
    return new Promise((resolve, reject) => {
        parseString(string, {
            trim: true,
            explicitArray: false,
            explicitRoot: false
        }, (err, result) => {
            if(err) {
                return reject(err);
            }
            return resolve(result);
        })
    });
};

async function doSOAPRequest(url, body) {
    try {
        const response = await axios.post(url, 
            `<?xml version="1.0" encoding="utf-8"?>
            <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                <soap:Body>
                    ${body}
                </soap:Body>
            </soap:Envelope>`, {
                headers: {
                    "Content-Type": "text/xml; charset=utf-8"
                }
            }
        );

        // const json = await xmlToJSON(response.data);
        const json = await parseStringPromise(response.data, {
            trim: true,
            explicitArray: false,
            explicitRoot: false
        });
        const responseBody = json["soap:Body"];


        return {
            success: true,
            data: responseBody
        };
    } catch(error) {
        console.log(error);
        return {
            success: false,
            message: "An Error ocurred"
        };
    }
}


module.exports = doSOAPRequest;
