import React,{Component} from "react";
import { connect} from "react-redux";


class Allnotes extends Component{   // class component in react
   removeNote = (index) =>{
    this.props.removeNote(index);
   }

   render(){
    const noteItems = this.props.map((note,index)=>
    <li key={index}>
      <b>{noteItems.title}</b>
      <button onClick={()=>this.removeNote(index)}>X</button>
      <br />
      <span>{note.content}</span>
    </li>);
    return(
        <React.Fragment>
            <h3>All Notes</h3>
            <ul>
                {noteItems}
            </ul>
        </React.Fragment>
    )
   }
}

const mapStateToProps = state =>{
    return{
        notes:state.notes
    };
};

const mapDispatchToProps = {
    removeNote : removeNote
};

export default connect(mapStateToProps,mapDispatchToProps)(Allnotes);