import { base, celo, mainnet } from 'viem/chains'
import {createConfig, http} from 'wagmi'

export const config = createConfig({
    chains: [mainnet, celo, base],
    transports: {
        [base.id]: http(),
        [mainnet.id]: http(),
        [celo.id]: http(),
    }
})