'use client'
import { abi, contractAddrss } from '@/context/context'
import React from 'react'
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { useReadContract } from 'wagmi'

const Page = () => {
    const {data: owner} = useReadContract({
       address: contractAddrss,
       abi: abi,
       functionName: 'getOwner',
       args: [],
       blockTag: 'latest'
    })

    const {data: hash, writeContract, isPending} = useWriteContract()
    const {isLoading: isConfirming, isSuccess: isConfirmed} = useWaitForTransactionReceipt({hash})

    const submit = async(e: React.FormEvent<HTMLFormElement>)=> {
      const formData = new FormData(e.target as HTMLFormElement)
      const owner = formData.get("address") as `0x${string}`
      writeContract({
        address: contractAddrss,
        abi: abi,
        functionName: 'changeOwner',
        args: [owner],
    })
    }
  return (
    <div>
        owner: {owner}

        <form onSubmit={submit} className='mt-8'>
          <h1>Change Owner</h1>
          <input name="address" placeholder='0x123...aBC' required />
          <button type="submit">{isPending? "Confirming..": "Send"}</button>
        </form>
        <div>
         {hash &&  <span>Transaction hash: {hash}</span>}
          <br />
          {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
                  </div>
    </div>
  )
}

export default Page