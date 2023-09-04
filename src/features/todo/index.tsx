import Paper from "../../components/paper";
import React, { useCallback, useEffect, useReducer } from "react";
import reducers, { TypesActions } from "./reducers";
import FormAdd from "./components/form-add";
import List from "./components/list";
import useUpdatedEffect from "../../hooks/use-updated-effect";
export interface Task {
  id: number;
  name: string;
  done: boolean;
}
const initialValues: Task[] = [];
// const myHeaders = new Headers();

export default function Todo() {
  const [todos, dispatch] = useReducer(reducers, initialValues);
  useEffect(() => {
    try {
      const todo: string | null = localStorage.getItem("todos");

      dispatch({
        type: undefined,
        payload: todo ? JSON.parse(todo) : [],
      });
      // async function FetchData() {
      //   try {
      //     const response = await fetch("http://localhost:3001/todo");

      //     if (!response.ok) {
      //       throw new Error(`Error! status: ${response.status}`);
      //     }
      //     const result = await response.json();
      //     dispatch({ type: undefined, payload: result });
      //     return result;
      //   } catch (err) {
      //     console.error(err);
      //   }
      // }
      // FetchData();
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line
  }, []);

  useUpdatedEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // eslint-disable-next-line
  }, [todos]);

  return (
    <Paper
      style={{
        padding: 40,
        paddingTop: 20,
        borderRadius: "20px",
        minWidth: "33vw",
      }}
    >
      <h1 style={{ marginBottom: "15px", textAlign: "center" }}>Todo App</h1>
      <FormAdd
        handleSubmit={useCallback((form) => {
          dispatch({ type: TypesActions.add, payload: form });
        }, [])}
      />
      <List
        todos={todos}
        editTask={useCallback(
          (task) => dispatch({ type: TypesActions.edit, payload: task }),
          []
        )}
        toggleDone={useCallback(
          (taskId) =>
            dispatch({
              type: TypesActions.toggleDone,
              payload: { id: taskId },
            }),
          []
        )}
        deleteTask={useCallback(
          (taskId) =>
            dispatch({ type: TypesActions.delete, payload: { id: taskId } }),
          []
        )}
      />
    </Paper>
  );
}
