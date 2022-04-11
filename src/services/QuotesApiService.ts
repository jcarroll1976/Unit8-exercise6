import axios ,{AxiosResponse} from "axios";
import { QuotesResponse} from "../models/Quotes";



export function fetchQuotes():Promise<QuotesResponse[]>{
    return axios.get<QuotesResponse[]>('https://grandcircusco.github.io/demo-apis/quotes.json')
        .then(response => {
       return response.data;
        });
}