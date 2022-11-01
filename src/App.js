import react from "react";
import { ReactDOM } from "react-dom";

export default function App() {
  const [toDo, setToDo] = react.useState("");
  const [allToDos, setAllToDos] = react.useState([]);

  var item = {
    id: Math.floor(Math.random() * 100000),
    text: toDo,
  };

  function handleChange(e) {
    setToDo(e.target.value);
  }
  function deletetd(id) {
    console.log(id)
    const updated = [...allToDos].filter((todo) => todo.id !== id);
    setAllToDos(updated);
  }

  function handleSubmit(e) {
    if (toDo === "") {
      alert("you need to put a todo sirr");
      return;
    }
    e.preventDefault();
    setAllToDos((prev) => [...prev, item]);
    setToDo("");
  }

  return (
    <div className="hero">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="btn-shine">TODO list</h1>
        <input
          value={toDo}
          id="input"
          placeholder="your to do here..."
          onChange={handleChange}
        ></input>
        <button type="submit" className="button">
          ADD
        </button>
      </form>
      <ul>
        {allToDos.map((td) => (
          <div key={td.id} className="td-component button">
            <li>{td.text}</li>
            <button className="delete" onClick={() => deletetd(td.id)}>
              DELETE
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
