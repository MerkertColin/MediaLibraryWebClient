import axios from "axios";
import React, {FunctionComponent, useState} from "react";
import { MediaTypes } from "../misc/MediaTypes";

interface InputMaskProps {
    medium: MediaTypes
}
 


const InputMask: FunctionComponent<InputMaskProps> = ({medium}) => {
    
    const [inputBody, setInputBody] = useState({})
    
    const onSubmitBooks = (e: any) => {
        e.preventDefault();
        const body = {
            author: e.target.bk_author.value,
            title: e.target.bk_title.value,
            subtitle: e.target.bk_subtitle.value,
            state: e.target.state.value
        }
        axios.post("http://localhost:1887/books", body)
        .then((res) => console.log(res) )
        .catch((err) => console.log(err))
    }
    
    const onClick = () => {

    }

    if (medium === MediaTypes.Books) {
        return ( 
            <form onSubmit={onSubmitBooks}>
                <label htmlFor="bk-author">Author:</label>
                <input type="text" id="bk-author" name="bk_author"></input>
                <label>Title:</label>
                <input type="text" id="bk-title" name="bk_title"></input>
                <label>Subtitle:</label>
                <input type="text" id="bk-subtitle" name="bk_subtitle"></input>
                <input type="radio" name="state" value="finished" id="bk-state-finished"></input>
                <label>Finished</label>
                <input type="radio" name="state" value="started" id="bk-state-started"></input>
                <label>Started</label>
                <input type="radio" name="state" value="not started" id="bk-state-notstarted"></input>
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