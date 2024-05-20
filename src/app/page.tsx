'use client'
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Example } from "@/viem.config";
import {ErrorHandling} from "./errorHandling"
import { useEthersProvider, useEthersSigner } from '@/client-provider-ethersjs';
import { callMeReadContract } from '@/readContractTs';

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  // // Mendapatkan nilai logs dari Example
  // const { mutateAsset, logs } = Example();

  // const provider = useEthersProvider();
  // console.log(provider, "ethers.js provider")
  // const signer = useEthersSigner();
  // console.log(signer, "Signer from ethers.JS")

  callMeReadContract()

  return (
    <>
      <div>
        <h2>Account</h2>
        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>
        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>


      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>

        {/* memanggil logs dari transacrtion di jaringan blockchain */}
        {/* <div>
          <span>
            <button type="button" onClick={() => mutateAsset()}>
              Mutate Asset
            </button>
          </span>
          <span>
            {logs && logs.map((log, index) => (
              <div key={index}>
                <p>Address: {log.address}</p>
                <p>Topics: {JSON.stringify(log.topics)}</p>
                <p>Data: {log.data}</p>
                <p>Tx Hash: {log.transactionHash}</p>
              </div>
            ))}
          </span>
        </div> */}
        <ErrorHandling/>
      </div>
    </>
  );
}

export default App;
