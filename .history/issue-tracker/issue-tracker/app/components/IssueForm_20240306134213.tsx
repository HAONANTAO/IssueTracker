"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
// works in app router
import { zodResolver } from "@hookform/resolvers/zod";
import delay from "delay";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { ValidationSchema } from "../ValidationSchema";
import ErrorMessage from "./ErrorMessage";
import Spinner from "./Spinner";
import { Issue } from "@prisma/client";

type issueForm = z.infer<typeof ValidationSchema>;
const IssueForm = ({ issue }: { issue?: Issue }) => {
  const router = useRouter();
  // const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  //   ssr: false, // 关闭服务端渲染
  // });
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
      if (issue) {
        await axios.patch(`/api/issues/${issue!.id}/edit`, data);
      }
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
          defaultValue={issue?.title}
          {...register("title")}
        />
        {<ErrorMessage>{errors.title?.message}</ErrorMessage>}
        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE
              placeholder="Input the Issue Description here..."
              {...field}
            />
          )}
        />
        {<ErrorMessage>{errors.description?.message}</ErrorMessage>}

        <Button disabled={loading}>
          {issue &&Create New Issue
          {loading && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
