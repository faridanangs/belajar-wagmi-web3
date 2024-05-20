'use client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {useState, type ReactNode} from "react"
// import {config} from "@/config"
import {config} from "@/viem.config"
import { WagmiProvider } from "wagmi"

export function Providers(props: {children: ReactNode}){
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}