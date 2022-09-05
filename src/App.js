import React,{ useEffect,useState } from "react";
import Header from "./Header";
import Addnote from "./Addnote";
import Notes from "./Notes";
const getLocalItmes = () => {
  let list = localStorage.getItem('lists');
  console.log(list);

  if (list) {
      return JSON.parse(localStorage.getItem('lists'));
  } else {
      return [];
  }
}
const App =()=> {
  const[addItem,setAddItem]=useState(getLocalItmes());
  const addNote =(note)=>{
    setAddItem((prevData)=> {
      return [...prevData,note];
    });
    console.log(note); 
  };
  //to set local storage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(addItem))}, [addItem]);
 
  const onDelete =(id)=>{
    setAddItem((prev)=>
      prev.filter((current,indx)=>{
        return indx !== id;
      })
    );
  };
 
  
    return( 
  <>
  <Header />
  <Addnote passNote={addNote} />
  
  {addItem.map((val,index)=> {
    return (
    <Notes 
       key={index}
       id={index}
       title={val.title}
       content={val.content}
       Delete={onDelete}
    />
    );
  })}
  
  </>
  );
};
export default App;