import React, { memo, useCallback, useState } from "react";
import { Task } from "..";
import Form from "../../../components/form";
import Input from "../../../components/input";
import Button from "../../../components/button";
type Props = { handleSubmit: (form: Task) => void };

function FormAdd(props: Props) {
  const [form, setForm] = useState<Task>({ id: 0, name: "", done: false });
  const [vaildtions, setVaildtions] = useState<{ name?: string }>({
    name: undefined,
  });
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setVaildtions((prev) => ({ ...prev, name: undefined }));
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  const handleSubmit = useCallback(() => {
    if (form.name === "") {
      setVaildtions((prev) => ({ ...prev, name: "required*" }));
      return;
    }
    props.handleSubmit(form);
    setForm({ id: 0, name: "", done: false });
    // eslint-disable-next-line
  }, [form.name]);
  console.count("form");

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: "10px" }}>
        <Input
          placeholder="Add New Task.."
          name="name"
          onChange={handleChange}
          errormessage={vaildtions.name}
          value={form.name || ""}
        />
        <Button type="submit">Add</Button>
      </div>
    </Form>
  );
}
export default memo(FormAdd);
