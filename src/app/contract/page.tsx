'use client'
import React from 'react'
import { useAccount, useBalance } from 'wagmi'

const Page = () => {
    // const {addresses} = useAccount();
    const {data: balance} = useBalance({
        address: '0x2a2ea31c458cf13f1fFDEaFC83DbDe2F3F52B374',
        // chainId: 1337
    })

    console.log(balance,"balance ui")
  return (
    <div>
        balance: {balance?.value.toString()}
    </div>
  )
}

export default Page