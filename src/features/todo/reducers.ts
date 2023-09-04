import { Task } from ".";

function handleToggleDone(state: Task[], payload: Pick<Task, "id">) {
  return state.map((task) => {
    if (task.id === payload.id) return { ...task, done: !task.done };
    return task;
  });
}
function handleEdit(state: Task[], payload: Task) {
  return state.map((task) => {
    if (task.id === payload.id) return { ...task, ...payload };
    return task;
  });
}

function handleAdd(state: Task[], payload: Task) {
  return [
    ...state,
    (payload = {
      ...payload,
      id: state.length ? Math.max(...state.map(({ id }) => id)) + 1 : 1,
    }),
  ];
}

function handleDelete(state: Task[], payload: Pick<Task, "id">) {
  return state.filter((task) => task.id !== payload.id);
}
export enum TypesActions {
  add = "add",
  edit = "edit",
  toggleDone = "toggleDone",
  delete = "delete",
  getTodos = "getTodos",
}
type Actions =
  | { type: undefined; payload: Task[] }
  | { type: TypesActions.add; payload: Task }
  | { type: TypesActions.edit; payload: Task }
  | {
      type: TypesActions.toggleDone | TypesActions.delete;
      payload: Pick<Task, "id">;
    };

export default function reducers(state: Task[], action: Actions) {
  switch (action.type) {
    case TypesActions.add:
      return handleAdd(state, action.payload);
    case TypesActions.edit:
      return handleEdit(state, action.payload);
    case TypesActions.toggleDone:
      return handleToggleDone(state, action.payload);
    case TypesActions.delete:
      return handleDelete(state, action.payload);
    default:
      return action.payload;
  }
}
