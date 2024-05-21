'use client'
import React from 'react'
import { parseEther } from 'viem'
import { useAccount, useBalance, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi'

const page = () => {

    const {address} = useAccount()
    const {data: balance} = useBalance({
        address: address,
        chainId: 1337
    })

    const {data: hash, isPending,sendTransaction} = useSendTransaction();
    const {isLoading: isConfirming, isSuccess: isConfirmed} = useWaitForTransactionReceipt({
        hash
    })
    const submit = async(e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const to = formData.get('address') as `0x${string}`
        const value = formData.get('value') as string
        sendTransaction({
            to,
            value: parseEther(value)
        })
    }

  return (
    <div>
        <div>
            Address: {address}
            <br />
            Balance: {balance?.formatted}{" "}{balance?.symbol}
        </div>
        <form onSubmit={submit}>
        <input name='address' placeholder='0x1234...BcD' required />
        <input name='value' placeholder='0.05' required />
        <button type='submit' disabled={isPending}>{isPending? "Cofirming..": "Send"}</button>
        </form>
        <div>{hash && <span>Transaction Hash: {hash}</span>}
        {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
      </div>
    </div>
  )
}

export default page