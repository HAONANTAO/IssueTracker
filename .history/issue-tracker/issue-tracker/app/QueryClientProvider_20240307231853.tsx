import React from "react";

import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const QueryClientProvider = ({ children }) => {
  return (
    <ReactQueryClientProvider client={queryClient}></ReactQueryClientProvider>
  );
};

export default QueryClientProvider;
