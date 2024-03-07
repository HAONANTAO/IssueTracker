import { Box, Card } from "@radix-ui/themes";
import React from "react";

import { Skeleton } from "../components/Loading";
const loading = () => {
  return (
    <div className="max-w-xl">
      <form>
        <div className="flex items-center justify-center">
          <Skeleton></Skeleton>
        </div>
        <Skeleton width="max-w-full"></Skeleton>

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
     

        <Button disabled={loading}>
          {issue ? "Edit The Issue" : "Create New Issue"}
          {loading && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default loading;
