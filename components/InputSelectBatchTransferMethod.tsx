import React from 'react'
import { useBatchTransfer } from '../contexts/BatchTransferContext'

export default function InputSelectBatchTransferMethod() {

    const {functionName, setFunctionName} = useBatchTransfer()

    return (
        <select 
            name="functionName" 
            id="functionName" 
            onChange={(e) => setFunctionName(e.target.value)} 
            value={functionName}
            style={{
                width: '100%',
                height: '40px',
                fontSize: '16px',
                padding: '0 10px',
                borderRadius: '5px',
            }}
        >
            <option value="batchTransfer">transferFrom</option>
            <option value="batchSafeTransfer">safeTransferFrom</option>
        </select>
    )
}
