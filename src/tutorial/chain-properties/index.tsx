import { parseEther } from "viem";
import { celo, zkSync } from "viem/chains";
import { useSimulateContract, useWaitForTransactionReceipt } from "wagmi";

// const result = useSimulateContract({
//     to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
//     value: parseEther('0.01'),
//     chainId: celo.id, 
//     feeCurrency: '0x…', 
//     // ^? (property) feeCurrency?: `0x${string}` | undefined
//     gatewayFee: 100,  
//     // ^? (property) gatewayFee?: bigint | undefined
//     gatewayFeeRecipient: '0x…', 
//     // ^? (property) gatewayFeeRecipient?: `0x${string}` | undefined
//   })

const {data} = useWaitForTransactionReceipt({
    chainId: zkSync.id,
    hash: "0x16854fcdd0219cacf5aec5e4eb2154dac9e406578a1510a6fc48bd0b67e69ea9"
})

data?.logs