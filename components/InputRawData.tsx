import React from 'react'
import { useBatchTransfer } from '../contexts/BatchTransferContext'

export default function InputRawData() {
    const {raw_input, setRawInput} = useBatchTransfer()

    return (
        <textarea 
            name="raw_input" 
            id="raw_input" 
            placeholder="Paste raw data here" 
            onChange={(e) => setRawInput(e.target.value)} value={raw_input} 
            style={{
                width: '100%', 
                height: '200px',
                fontSize: '16px',
                padding: '10px',
                borderRadius: '5px',
            }}
        />
    )
}
