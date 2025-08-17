"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PrivyProvider } from "@privy-io/react-auth";
import { WagmiProvider, createConfig } from "@privy-io/wagmi";
import { base } from "wagmi/chains";
import { http } from "wagmi";

const queryClient = new QueryClient();
const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },
});
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider appId={"cme3q8jv906z8jp0bzkyjt279" as string}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>{children}</WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}
