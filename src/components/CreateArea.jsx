import React, {useState} from "react";

function CreateArea(props) {
  
    const [note, setNote] = useState({
        title : "",
        body : ""
    });
  
    function handleChange(event){
        const {name, value} = event.target;
        setNote( prevValue => {
            return {
                ...prevValue,
                [name] : value
            };
        });
    }

    function handleClick(event){
        props.onAdd(note);
        setNote({
            title: "",
            body: ""
          });
        event.preventDefault();
    }

    return (
    <div>
      <form>
        <input name="title" onChange = {handleChange} value = {note.title}  placeholder="Title" />
        <textarea name="body" onChange = {handleChange} value = {note.body}  placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
