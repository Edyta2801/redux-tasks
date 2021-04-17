import React from "react";
import { connect } from "react-redux";

// const tasks = [
//   {
//     id: 1,
//     name: "Nakarmić kota",
//   },
//   { id: 2, name: "Odkurzyć" },
//   { id: 3, name: "Nauczyć się Reacta" },
// ];

function List(props) {
  return (
    <div className="container">
      {props.tasks.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </div>
  );
}

const mapStateToProps=(state)=>({
tasks:state.tasks.tasks,
isLoading:state.tasks.isLoading,
hasError:state.tasks.hasError
})
export default connect(mapStateToProps)(List);