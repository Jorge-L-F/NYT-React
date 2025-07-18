import axios from "axios";
import secrets from "../../secrets.json";

const get_url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=' + secrets.token;

export async function fetchFeed() {
    await axios.get(get_url).then(
        response => {return response.data},
        error => {
            if (error.response) {
                return error.response.data + "\n" + error.errorResponse.status + "\n" + error.errorResponse.headers;
            }
            else if (data.request)
                return error.request;
            else
                return error.message;
        }
    )
}