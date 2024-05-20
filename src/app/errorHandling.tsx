import {useBlockNumber} from "wagmi"

export const ErrorHandling = ()=> {
    const {data, error} = useBlockNumber();

    if (error?.name === 'HttpRequestError'){
        const {status} = error;
        return <div>A http error occured. Status: {status}</div>
    }else if (error?.name === 'LimitExceededRpcError'){
        const {code} = error;
        return <div>Rate Limit exceded. Code: {code}</div>
    }else if(error?.name === 'RpcError'){
        const {code} = error;
        return <div>An RPC error occured. Code: {code}</div>
    }else {
        return <div>{data}</div>
    }
}