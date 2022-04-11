import { useEffect, useState } from "react";
import { QuotesResponse } from "../models/Quotes";
import { fetchQuotes } from "../services/QuotesApiService";






function FamousQuotes() {
    const [quotes,setQuotes] = useState<QuotesResponse[]>([])

    useEffect(() => {
        fetchQuotes().then(data => {
            setQuotes(data);
        });
    }, [])

    return (
        <div className="Quotes">
            <h2>Famous Quotes</h2>
            <ul>
                {quotes.map((quote,i)=> 
                <li key={i}>{quote.author} said {quote.text}</li>
                )}
            </ul>
        </div>
    )

    } 

    export default FamousQuotes