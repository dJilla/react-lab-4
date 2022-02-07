import { SearchResponse } from "./SearchResponse";
import { Gif } from "./Gif";
import { Result } from "./Result";
import axios from "axios";

export function ResultsList(props: {gifs:Gif[]}) {

    return (

        <div>
            <h1>Results</h1>
            {props.gifs.map(gif => <Result key={gif.id} gif={gif}></Result>)}
        </div>
    );
}