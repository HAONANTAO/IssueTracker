import { Box, Card } from "@radix-ui/themes";
import React from "react";

import { Skeleton } from "../components/Loading";
const loading = () => {
  return (
    <div className="max-w-xl">
    
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
          {issue ? "Edit The Issue" : "Create New Issue"}
          {loading && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default loading;
