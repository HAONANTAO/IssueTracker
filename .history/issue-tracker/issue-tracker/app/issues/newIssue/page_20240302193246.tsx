"use client";
import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
interface issueForm {
  title: string;
  description: string;
}

const NewIssue = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<issueForm>();

  const handleSubmit = ()=>{
    
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(
          async (data) => await axios.post("/api/issues", data),
        )}
        className="flex flex-col space-y-2 space-x-4 max-w-xl">
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
              placeholder="Input the Issue Description here..."
              {...field}
            />
          )}
        />
        <Button>Create New Issue</Button>
      </form>
    </>
  );
};

export default NewIssue;
