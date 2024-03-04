

import { connect } from "mongoose";
import React,{Component} from "react";
import { Connect } from "react-redux";


class NotesForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            title:'',
            content:''
        };
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmission = (e) =>{
        e.preventDefault();

        let{title,content} = this.state;
        this.props.addnote(title,content);

        this.setState({title:'',content:''});
    }

    render(){
        return(
            <React.Fragment>
                <h3>Add a Note</h3>

                <form onSubmit={this.handleSubmission}>
                    Title: <br />
                    <input type="text" name="Title" value={this.state.title} onChange={this.handleChange} /><br />

                    Content: <br />
                    <textarea name="content" value={this.state.content} onChange={this.handleChange}></textarea><br />

                    <button type="submit">Add Note</button> 
                </form>
            </React.Fragment>
        )
    }
}

export default connect(
    null,
    {
        addnote:addnote
    }
)(NotesForm);