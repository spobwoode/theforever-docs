import React from 'react'
import TextInputField from '../TextInputField'
import { useMetadataToCSV } from '../../contexts/MetadataToCSVContext'
import NumberInputField from '../NumberInputField'

export default function MetadataUrlInput() {
    const { 
        metadataDirUrl, 
        setMetadataDirUrl,
        startTokenId,
        setStartTokenId,
        endTokenId,
        setEndTokenId
    } = useMetadataToCSV()
    return (
        <div className="flex flex-col">
            <NumberInputField label="Start Token ID" value={startTokenId} setValue={setStartTokenId} />
            <NumberInputField label="End Token ID" value={endTokenId} setValue={setEndTokenId} />
            <TextInputField label="Metadata URL" value={metadataDirUrl} setValue={setMetadataDirUrl} />
        </div>
    )
}
