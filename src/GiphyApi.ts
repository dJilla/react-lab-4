import axios from 'axios';
import { SearchResponse } from './SearchResponse';
import { Gif } from './Gif';


export function getSearchResponse(searchTerm:string) {

    return axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${searchTerm}&limit=25&rating=g`)
                .then(response => response.data);
}

export function getTrendingResponse() {

    return axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25&rating=g`)
                .then(response => response.data);
}