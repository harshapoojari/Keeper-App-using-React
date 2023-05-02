import { useState } from "react"
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import Zoom from '@mui/material/Zoom';


function CreateArea(props){
    const [note,setNote]=useState({
        title:"",
        content:""
    })
    const [ui,setUi]=useState({
        row:"1",
        bool:false,

    })
    function handleUi()
    {
         setUi({
            row:"3",
            bool:true
         })
    }
  function handleChange(event)
   {
    const {name,value}=event.target;
    setNote(prevNote=>{
        return{
            ...prevNote,
            [name]:value

        }
    })
   }

   function submitNote(event)
    {
        props.onAdd(note);
     event.preventDefault();
     setNote({
        title:"",
        content:""
     })
    }

    return <div>
        <form className="create-note">
          {ui.bool &&  <input onChange={handleChange} name="title" type="text" placeholder="Title" value={note.title}/>}
            <textarea onChange={handleChange} onClick={handleUi} name="content" placeholder="Take a note..." rows={ui.row} value={note.content}></textarea>
            <Zoom in={ui.bool}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
        </form>
    </div>
}

export default CreateArea