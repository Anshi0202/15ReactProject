import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isedit, setedit] = useState(false);
  const [editId, seteditId] = useState(null);
  const [alert, setalert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`hello`);
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isedit) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }

          return item;
        })
      );
      setName("");
      seteditId(null);
      setedit(false);
      showAlert(true, "success", `${name} plan changed`);
    } else {
      showAlert(true, "success", `${name} plan added`);
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setalert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "empty plan list");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", `item removed`);
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificitem = list.find((item) => item.id === id);
    setedit(true);
    seteditId(id);
    setName(specificitem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3> Trip Plan </h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isedit ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
