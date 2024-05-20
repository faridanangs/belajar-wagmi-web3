'use client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {useState, type ReactNode} from "react"
// import {config} from "@/config"
import {config} from "@/viem.config"
import {type State, WagmiProvider } from "wagmi"

type Props = {
  children: ReactNode,
  initialState: State | undefined,
}
const queryClient = new QueryClient()

export function Providers({children, initialState}: Props){

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}