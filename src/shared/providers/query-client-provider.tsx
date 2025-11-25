"use client";

import { QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getQueryClient } from "@/shared/lib/query-client/get-query-client";

export function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </ReactQueryClientProvider>
  );
}
