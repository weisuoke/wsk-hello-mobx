import React from "react";
import { observer, inject } from "mobx-react";

const Fun = inject("BirdStore", "TodoListStore")(
  observer(props => {
    console.log("Fun", props);
    return <div>{props.TodoListStore.firstTodo}</div>;
  })
);

export default Fun;
