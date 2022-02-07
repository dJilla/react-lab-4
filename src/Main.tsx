import { SearchForm } from "./SearchForm";
import { ResultsList } from "./ResultsList";
import { useState, useEffect } from "react";
import { getSearchResponse, getTrendingResponse } from "./GiphyApi";
import { SearchResponse } from "./SearchResponse";
import { Gif } from "./Gif";

export function Main() {

    const [gifs, setGifs] = useState<any>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (searchTerm !== "") {
          getSearchResponse(searchTerm).then((data) => setGifs(data.data));
        } else {
          getTrendingResponse().then((data) => setGifs(data.data));
        }
      }, [searchTerm]);

    console.log(searchTerm)

    function setSearch(search:string) {
        setSearchTerm(search);
    }

    return (

        <div>
            <SearchForm onSubmit={(searchTerm) => setSearch(searchTerm)}></SearchForm>
            <ResultsList gifs={gifs}></ResultsList>
        </div>
    );
}