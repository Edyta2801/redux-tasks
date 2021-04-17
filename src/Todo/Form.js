import React, { useState } from "react";
import { connect } from "react-redux";

import { add } from "./redux";

function Form(props) {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.add({ id: 5, name: task });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input name="task" onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  add,
};

export default connect(null, mapDispatchToProps)(Form);
