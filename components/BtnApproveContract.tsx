import { useContractWrite, useContract, Web3Button } from '@thirdweb-dev/react'
import React from 'react'
import { useAddress } from "@thirdweb-dev/react"
import { useBatchTransfer } from '../contexts/BatchTransferContext'
import { ethers } from 'ethers'

export default function BtnApproveContract() {
    const {contractAddress, isApproved, setIsApproved} = useBatchTransfer()
    const { contract } = useContract(contractAddress);
    const { mutateAsync, isLoading, error } = useContractWrite(
        contract,
        "setApprovalForAll",
    );
    const address = useAddress()
    const mainnetBatchTransferContractAddress = "0x7Ee128B2DacA0D2f4e61bE49d668AE82964E65F8"

    return (
        <>
            {
                isApproved ? (
                    <div 
                        style={{
                            color: 'green',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid green',
                            width: '100%',
                            textAlign: 'center'
                        }}
                    >Approved</div>
                ) : (
                    <Web3Button
                        contractAddress={contractAddress}
                        contractAbi={[
                            { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
                        ]}
                        // action={async (contract) => {
                        //     //console.log(contract)

                        //     // const ethersContract = new ethers.Contract(contractAddress, [
                        //     //     { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
                        //     // ])
                        //     // await ethersContract.setApprovalForAll(mainnetBatchTransferContractAddress, true)
                            
                        // }}
                            action={() => mutateAsync([mainnetBatchTransferContractAddress, true])}
                        onSuccess={() => console.log('success')}
                        onError={(err) => console.log(err)}
                    >
                        Approve
                    </Web3Button>
                )
            }
        </>
    )
}
