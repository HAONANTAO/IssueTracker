"use client";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
// works in app router
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ValidationSchema } from "../ValidationSchema";
import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner";

type issueForm = z.infer<typeof ValidationSchema>;
const NewIssue = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<issueForm>({
    resolver: zodResolver(ValidationSchema),
  });
  const [eerror, setEerror] = useState("");
  const [loading, Setloading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      Setloading(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setEerror("an unexpected error occurred!");
    }
  });
  return (
    <div className="max-w-xl">
      {eerror && (
        <Callout.Root color="red">
          <Callout.Text>{eerror}</Callout.Text>
        </Callout.Root>
      )}
      <form onSubmit={} className="flex flex-col space-y-2 space-x-4 max-w-xl">
        <div className="flex items-center justify-center">
          <span>New Issue Create</span>
        </div>
        <TextField.Input
          placeholder="Input the Issue Title here..."
          {...register("title")}
        />
        {<ErrorMessage>{errors.title?.message}</ErrorMessage>}
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
        {<ErrorMessage>{errors.title?.message}</ErrorMessage>}

        <Button disabled={loading}>
          Create New Issue
          {loading && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssue;
