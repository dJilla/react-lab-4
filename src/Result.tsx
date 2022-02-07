import { Gif } from "./Gif";


export function Result(props: {gif:any}) {

    return (

        <div>

            <img src={props.gif.images.original.url}/>
            <h1>{props.gif.title}</h1>
            <a href={props.gif.url}>Link</a>
        </div>
    );
}