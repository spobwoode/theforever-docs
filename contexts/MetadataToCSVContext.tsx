import React, { useContext } from "react"

type MetadataToCSVContextType = {
    metadataDirUrl: string,
    setMetadataDirUrl: (url: string) => void,
    startTokenId: number,
    setStartTokenId: (tokenId: number) => void,
    endTokenId: number,
    setEndTokenId: (tokenId: number) => void
}

const MetadataToCSVContext = React.createContext<MetadataToCSVContextType>({
    metadataDirUrl: "",
    setMetadataDirUrl: () => {},
    startTokenId: 1,
    setStartTokenId: () => {},
    endTokenId: 100,
    setEndTokenId: () => {}
})

export function MetadataToCSVProvider({ children }) {
    const [metadataDirUrl, setMetadataDirUrl] = React.useState("")
    const [startTokenId, setStartTokenId] = React.useState(1)
    const [endTokenId, setEndTokenId] = React.useState(100)

    return (
        <MetadataToCSVContext.Provider value={{
            metadataDirUrl,
            setMetadataDirUrl,
            startTokenId,
            setStartTokenId,
            endTokenId,
            setEndTokenId
        }}>
            {children}
        </MetadataToCSVContext.Provider>
    )
}

export function useMetadataToCSV() {
    return useContext(MetadataToCSVContext)
}