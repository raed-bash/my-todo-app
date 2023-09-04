import React, { useEffect, useRef, useState } from "react";
import { Task } from "..";
import Button from "../../../components/button";
import Input from "../../../components/input";
import useUpdatedEffect from "../../../hooks/use-updated-effect";
type Props = {
  todos: Task[];
  toggleDone: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (task: Task) => void;
};
export default function List(props: Props) {
  const { todos, toggleDone, deleteTask, editTask } = props;
  const [editInput, setEditInput] = useState<number | null>(null);
  const editInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    editInputRef.current?.focus();
  }, [editInput]);
  return (
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {todos &&
        todos.map((task, i) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px 10px",
            }}
            key={i}
          >
            <span style={{ minWidth: "190px", maxWidth: "662px" }}>
              {editInput === task.id ? (
                <Input
                  style={{ padding: "5px", height: undefined }}
                  defaultValue={task.name}
                  onBlur={(e) => {
                    setEditInput(null);
                    editTask({ ...task, name: e.target.value });
                  }}
                  ref={editInputRef}
                />
              ) : task?.done ? (
                <del style={{ color: "rgb(154 154 154)" }}>{task?.name}</del>
              ) : (
                task?.name
              )}
            </span>
            <span style={{ gap: "10px", display: "flex" }}>
              <input
                type="checkbox"
                onClick={() => toggleDone(task.id)}
                defaultChecked={task.done}
              />
              <Button
                variant="primary"
                onClick={() => {
                  setEditInput(task.id);
                }}
              >
                edit{" "}
              </Button>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>
                delete{" "}
              </Button>
            </span>
          </div>
        ))}
    </div>
  );
}
