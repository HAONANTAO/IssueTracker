import React from "react";

import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const QueryClientProvider = () => {
  return <div>QueryClientProvider</div>;
};

export default QueryClientProvider;
