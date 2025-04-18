"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

function QueryProvider({ children }: Props) {
  const queryClient = useRef<QueryClient>(undefined);
  if (!queryClient.current) {
    queryClient.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClient.current}>
      {children}
    </QueryClientProvider>
  );
}

export default QueryProvider;
