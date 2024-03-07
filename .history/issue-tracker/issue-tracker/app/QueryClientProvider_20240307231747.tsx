import React from "react";

import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const QueryClientProvider = () => {
  return <ReactQueryClientProvider></ReactQueryClientProvider>>;
};

export default QueryClientProvider;
