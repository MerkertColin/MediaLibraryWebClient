import axios from "axios";
import React, {FunctionComponent} from "react";
import { MediaTypes } from "../misc/MediaTypes";

interface InputMaskProps {
    medium: MediaTypes
}
 


const InputMask: FunctionComponent<InputMaskProps> = ({medium}) => {
    const onSubmit = (e: any) => {
        e.preventDefault();
        axios.post("http://localhost:1887/books", {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
        .then((res) => console.log(res) )
        .catch((err) => console.log(err))
    }
    
    if (medium === MediaTypes.Books) {
        return ( 
            <form onSubmit={onSubmit}>
                <label htmlFor="bk-author">Author:</label>
                <input type="text" id="bk-author"></input>
                <label>Title:</label>
                <input type="text" id="bk-title"></input>
                <label>Subtitle:</label>
                <input type="text" id="bk-subtitle"></input>
                <input type="radio" name="state" id="bk-state-finished"></input>
                <label>Finished</label>
                <input type="radio" name="state" id="bk-state-started"></input>
                <label>Started</label>
                <input type="radio" name="state" id="bk-state-notstarted"></input>
                <label>Not Started</label>
                <button>Submit</button>
            </form>
         );
    } else if (medium === MediaTypes.Games) {
        return (             
        <form action="">
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <input type="radio"></input>
        </form> 
    );
    }
    else if (medium === MediaTypes.Movies) {
        return (             
        <form action="">
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <input type="radio"></input>
        </form>
    );
    }
    else {
        return (             
        <form action="">
            <input type="text">Author</input>
            <input type="text">Title</input>
            <input type="text">Subtitle</input>
            <input type="radio">State</input>
        </form> 
    );
    }
}
 
export default InputMask;