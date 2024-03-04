"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
// works in app router
import { useRouter } from "next/navigation";
import { z } from "zod";
import {zodsol}
interface issueForm {
  title: string;
  description: string;
}

const NewIssue = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<issueForm>();
  const [eerror, setEerror] = useState("");

  return (
    <div className="max-w-xl">
      {eerror && (
        <Callout.Root color="red">
          <Callout.Text>{eerror}</Callout.Text>
        </Callout.Root>
      )}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setEerror("an unexpected error occurred!");
          }
        })}
        className="flex flex-col space-y-2 space-x-4 max-w-xl">
        <div className="flex items-center justify-center">
          <span>New Issue Create</span>
        </div>
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
    </div>
  );
};

export default NewIssue;
