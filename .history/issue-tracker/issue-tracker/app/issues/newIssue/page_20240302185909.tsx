"use client";
import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
interface issueForm {
  title: String;
  description: String;
}

const NewIssue = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<issueForm>();
  console.log(register("title"));
  return (
    <>
      <form className="flex flex-col space-y-2 space-x-4 max-w-xl">
        <h1 className="">NewIssue</h1>
        <TextField.Input
          placeholder="Input the Issue Title here..."
          {...register("title")}
        />
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <SimpleMDE
              {...field}
              options={{
                placeholder: "Input the Issue Description here...",
              }}
            />
          )}
        />
        <Button>Create New Issue</Button>
      </form>
    </>
  );
};

export default NewIssue;
