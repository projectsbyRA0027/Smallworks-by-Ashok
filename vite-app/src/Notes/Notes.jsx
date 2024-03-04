import React,{Component} from "react";
import NotesForm from "./NotesForm";
import Allnotes from './AllNotes';

export default class Notes extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>0----------------0</h1>

                <NotesForm />
                    <hr />
                <Allnotes />
            </React.Fragment>
        )
    }
}