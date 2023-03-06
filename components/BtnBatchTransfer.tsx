import { Web3Button } from '@thirdweb-dev/react'
import React from 'react'
import { useBatchTransfer } from '../contexts/BatchTransferContext'

export default function BtnBatchTransfer() {
    const [recipients, setRecipients] = React.useState<string[]>([])
    const [tokenIds, setTokenIds] = React.useState<string[]>([])
    const {
        functionName, 
        raw_input, 
        setRawInput,
        contractAddress,
    } = useBatchTransfer()

    React.useEffect(() => {
        const lines = raw_input.split('\n')
        const _recipients = []
        const _tokenIds = []
        for (const line of lines) {
            const [recipient, tokenId] = line.split(',')
            _recipients.push(recipient)
            _tokenIds.push(tokenId)
        }
        setRecipients(_recipients)
        setTokenIds(_tokenIds)
    }, [raw_input])

    return (
        <>            
            <Web3Button
                contractAddress={"0x7Ee128B2DacA0D2f4e61bE49d668AE82964E65F8"}
                action={(contract) => {
                    contract.call(functionName, contractAddress, recipients, tokenIds)
                }}
            >
                batchTransfer
            </Web3Button>
        </>
    )
}
