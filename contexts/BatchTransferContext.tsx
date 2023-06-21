import { ThirdwebProvider } from "@thirdweb-dev/react"
import React, { Dispatch, SetStateAction, useContext, useState } from "react"

type BatchTransferContextType = {
    contractAddress: string;
    functionName: string;
    setFunctionName: Dispatch<SetStateAction<string>>;
    raw_input: string;
    setRawInput: Dispatch<SetStateAction<string>>;
    setContractAddress: Dispatch<SetStateAction<string>>;
    isApproved: boolean;
    setIsApproved: Dispatch<SetStateAction<boolean>>;
};

const BatchTransferContext = React.createContext<BatchTransferContextType>({
    contractAddress: "",
    functionName: "batchTransfer",
    setFunctionName: () => {},
    raw_input: "",
    setRawInput: () => {},
    setContractAddress: () => {},
    isApproved: false,
    setIsApproved: () => {},
})

export function BatchTransferProvider({ children }) {
    const [contractAddress, setContractAddress] = useState("")
    const [isApproved, setIsApproved] = useState(false)
    const [functionName, setFunctionName] = useState("batchTransfer")
    const [raw_input, setRawInput] = useState("")

    return (
        <BatchTransferContext.Provider value={{
            contractAddress,
            functionName,
            setFunctionName,
            raw_input,
            setRawInput,
            setContractAddress,
            isApproved,
            setIsApproved,
        }}>
            <ThirdwebProvider activeChain="ethereum">
                {children}
            </ThirdwebProvider>
        </BatchTransferContext.Provider>
    )
}

export function useBatchTransfer() {
    return useContext(BatchTransferContext)
}