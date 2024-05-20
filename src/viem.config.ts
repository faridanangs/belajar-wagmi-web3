// 1. import module
import { useMutation, useQuery } from "@tanstack/react-query";
import { http, createConfig, useClient, cookieStorage, createStorage } from "wagmi";
import { base, celo, mainnet, optimism, zora , zkSync, sepolia, localhost} from "wagmi/chains";
import { getLogs, watchAsset } from "viem/actions";
import {injected, metaMask, safe, mock, walletConnect} from "wagmi/connectors"

// 2. set up a wagmi config
export const config = createConfig({
  chains: [base, mainnet, optimism, zora, celo, localhost],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
    
  }),
  connectors: [
    injected(),
    metaMask(),
    safe(),
    // mock(),
    // coinbaseWallet({ appName: 'Create Wagmi', linkAPIUrl: "" }),
    walletConnect({ projectId: "ce6ac5e8ab546d26a66333c40be4c701" }),
  ],
  transports: {
    [base.id]: http(),
    [mainnet.id]: http(),
    [optimism.id]: http(),
    [zora.id]: http(),
    [celo.id]: http(),
    [zkSync.id]: http(),
    [sepolia.id]: http(),
    [localhost.id]: http(),
  },
});

export function Example() {
  // 3. Extract a Viem Client for the current active chain.
    // 3. Extract a Viem Client for the current active chain.
    const publicClient = useClient({ config });

    // 4. Create a "custom" Query Hook that utilizes the Client.
    const { data: logs } = useQuery({
      queryKey: ['logs', publicClient.uid],
      queryFn: () => getLogs(publicClient, /* ... */),
    });
    
    // 5. Create a "custom" Mutation Hook that utilizes the Client.
    const mutateAsset = async (asset) => {
      try {
        // Extract a new client for the current chain & account
        const walletClient = useClient({ config });
        await watchAsset(walletClient, asset);
        // Handle success if needed
      } catch (error) {
        // Handle error if needed
      }
    };
  return {mutateAsset, logs}
}


// declare module 'wagmi'{
//   interface Register{
//     config: typeof config
//   }
// }