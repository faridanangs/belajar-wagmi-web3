import { erc721Abi } from 'viem'
import {useReadContract} from 'wagmi'

export function callMeReadContract (){
    const {data} = useReadContract({
        address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
        abi: erc721Abi,
        functionName: 'balanceOf',
        args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
    })
    
    console.log(data);
}