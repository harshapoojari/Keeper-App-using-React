import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import note from "../note";
import CreateArea from "./CreateArea";
import { useState } from "react";



function App()
{

    
    const [notes,setNotes]=useState([])

    function addNote(note)
    {
     setNotes(prevNote=>{
        return [...prevNote,note]
     })
    }

    function deleteNote(id)
    {
        setNotes(prevvalue=>{
            return prevvalue.filter((items,index)=>
            {
                return id!==index
            })
        })
    }
    return(
        <div>
            <Header/>
            <CreateArea onAdd={addNote} />
            {
                notes.map((newItem,index)=><Note key={index} id={index} title={newItem.title} content={newItem.content} onDelete={deleteNote}/>)
            }

           <Footer />
        </div>
    )
}
export default App