import React from 'react'
import { useBatchTransfer } from '../contexts/BatchTransferContext'

export default function InputContractAddress() {
    const {contractAddress, setContractAddress} = useBatchTransfer()

    return (
        <input 
            type="text" 
            name="contractAddress" 
            id="contractAddress" 
            placeholder="Paste contract address here" 
            onChange={(e) => setContractAddress(e.target.value)} 
            value={contractAddress} 
            style={{
                width: '100%',
                height: '40px',
                fontSize: '16px',
                padding: '0 10px',
                borderRadius: '5px',
            }}
        />
    )
}
