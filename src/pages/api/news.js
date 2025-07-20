import axios from "axios";
import Cors from "cors";
import secrets from "../../../secrets.json";

const get_url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=' + secrets.token;

const cors = Cors({
    methods: ["GET"],
    origin: "*"
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, result => {
            if (result instanceof Error) {
                console.log("Rejected by CORS.");
                return reject(result);
            }

            console.log("Accepted by CORS.");
            return resolve(result);
        });
    });
}

export default async function handler(req, res) {
    if (req.method === 'GET') {
        await runMiddleware(req, res, cors);
        console.log("Request received.")
        res.setHeader("Content-Type", "application/json");
        await axios.get(get_url).then(
            response => {
                res.status(200).send(response.data.results);
                res.end();
            },
            error => {
                if (error.response) {
                    res.status(500)
                        .send(error.response.data + "\n" + error.errorResponse.status + "\n" + error.errorResponse.headers);
                }
                else if (data.request)
                    res.status(500).send(error.request);
                else
                    res.status(500).send(error.message);

                res.end();
            }
        );
    }
}