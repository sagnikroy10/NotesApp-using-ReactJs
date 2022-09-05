import React from "react";
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
const Notes =(props)=> {

  const deleteNote =()=>{
    props.Delete(props.id);
  };
    return (
        <div className="note">
          <h1>{props.title}</h1>
          <br />
          <p>{props.content}</p>
          
          <button onClick={deleteNote}>
          <DeleteTwoToneIcon  class="delete" />
          </button>
          </div>
  );
};

export default Notes;