import React from "react";
import Button from "@material-ui/core/Button";
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';
import {useState } from "react";


const Addnote =(props)=> {
  const[note,setNote]=useState({
    title: "",
    content: "",
});
const InputEvent=(event) =>{
   const{name,value}=event.target;
  setNote((prevdata) =>{
    return{
      ...prevdata,
      [name]:value,
    };
    });
    
  };

  const addEvent =() =>{
    props.passNote(note);
    setNote({
      title: "",
      content: "",
  });

  };

    return(
      <>
      <div class="container">
      <form>
          <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title"  />
          <p>
          <textarea rows="" column="" name="content" value={note.content} onChange={InputEvent} placeholder="Type your Note..." />
        </p>
        <Button onClick={addEvent}>
            <AddBoxTwoToneIcon class="add" />
        </Button>
    </form>
    </div>

    </>
    );
    };
    export default Addnote;
    