import React, { useContext } from "react"

type MetadataGeneratorContextType = {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    title: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    subtitle: string,
    setSubtitle: React.Dispatch<React.SetStateAction<string>>,
    contract_address: string,
    setContractAddress: React.Dispatch<React.SetStateAction<string>>,
    spreadsheet_id: string,
    setSpreadsheetId: React.Dispatch<React.SetStateAction<string>>,
    description: string,
    setDescription: React.Dispatch<React.SetStateAction<string>>,
    animation_url: string,
    setAnimationUrl: React.Dispatch<React.SetStateAction<string>>,
    external_url: string,
    setExternalUrl: React.Dispatch<React.SetStateAction<string>>,
    image: string,
    setImage: React.Dispatch<React.SetStateAction<string>>,
    collectionSize: number,
    setCollectionSize: React.Dispatch<React.SetStateAction<number>>,
    startTokenId: number,
    setStartTokenId: React.Dispatch<React.SetStateAction<number>>,
}

const MetadataGeneratorContext = React.createContext<MetadataGeneratorContextType>({
    name: "",
    setName: () => {},
    title: "",
    setTitle: () => {},
    subtitle: "",
    setSubtitle: () => {},
    contract_address: "",
    setContractAddress: () => {},
    spreadsheet_id: "",
    setSpreadsheetId: () => {},
    description: "",
    setDescription: () => {},
    animation_url: "",
    setAnimationUrl: () => {},
    external_url: "",
    setExternalUrl: () => {},
    image: "",
    setImage: () => {},
    collectionSize: 100,
    setCollectionSize: () => {},
    startTokenId: 1,
    setStartTokenId: () => {},
})

export function MetadataGeneratorProvider({ children }) {
    const [name, setName] = React.useState("")
    const [title, setTitle] = React.useState("")
    const [subtitle, setSubtitle] = React.useState("")
    const [contract_address, setContractAddress] = React.useState("")
    const [spreadsheet_id, setSpreadsheetId] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [animation_url, setAnimationUrl] = React.useState("")
    const [external_url, setExternalUrl] = React.useState("")
    const [image, setImage] = React.useState("")
    const [collectionSize, setCollectionSize] = React.useState(100)
    const [startTokenId, setStartTokenId] = React.useState(1)

    return (
        <MetadataGeneratorContext.Provider value={{
            name,
            setName,
            title,
            setTitle,
            subtitle,
            setSubtitle,
            contract_address,
            setContractAddress,
            spreadsheet_id,
            setSpreadsheetId,
            description,
            setDescription,
            animation_url,
            setAnimationUrl,
            external_url,
            setExternalUrl,
            image,
            setImage,
            collectionSize,
            setCollectionSize,
            startTokenId,
            setStartTokenId,
        }}>
            {children}
        </MetadataGeneratorContext.Provider>
    )
}

export function useMetadataGenerator() {
    return useContext(MetadataGeneratorContext)
}