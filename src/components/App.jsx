import React, {useState} from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

export default function App(){
    
    const [notes, setNotes] = useState([]);
    
    function addNote(newNote){
        setNotes(prevNotes => {
            return [... prevNotes, newNote]
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
              return index !== id;
            });
        });
    }
    
    return <div>
        <Header />
        <CreateArea onAdd = {addNote} />
        {
            notes.map( (note, index) =>{
                return <Note 
                    id = {index} 
                    key = {index}
                    title = {note.title}
                    body = {note.body}
                    onDelete = {deleteNote}
                />
            })
        };
        
        <Footer />
    </div>
}