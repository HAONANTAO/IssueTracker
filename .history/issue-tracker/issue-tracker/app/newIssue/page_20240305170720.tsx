"use client";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
// import SimpleMDE from "react-simplemde-editor";
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
import delay from "delay";

type issueForm = z.infer<typeof ValidationSchema>;
const NewIssue = () => {
  const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
    ssr: false, // 关闭服务端渲染
  });

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
    await delay(1000);
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
      <form
        onSubmit={onSubmit}
        className="flex flex-col space-y-2 space-x-4 max-w-xl">
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
          render={({ field }) => (
            <SimpleMDE
              placeholder="Input the Issue Description here..."
              {...field}
              ref={field.ref}
            />
          )}
        />
        {<ErrorMessage>{errors.description?.message}</ErrorMessage>}

        <Button disabled={loading}>
          Create New Issue
          {loading && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssue;
