import React from 'react'
import { useMetadataGenerator } from '../../contexts/MetadataGeneratorContext'
import TextInputField from '../TextInputField'
import NumberInputField from '../NumberInputField'

export default function MetadataInputs() {
    const {
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
    } = useMetadataGenerator()

    return (
        <div className="flex flex-col">
            <TextInputField label="Name" value={name} setValue={setName} />
            <TextInputField label="Title" value={title} setValue={setTitle} />
            <TextInputField label="Subtitle" value={subtitle} setValue={setSubtitle} />
            <TextInputField label="Contract Address" value={contract_address} setValue={setContractAddress} />
            <TextInputField label="Spreadsheet ID" value={spreadsheet_id} setValue={setSpreadsheetId} />
            <TextInputField label="Description" value={description} setValue={setDescription} />
            <TextInputField label="Animation URL" value={animation_url} setValue={setAnimationUrl} />
            <TextInputField label="External URL" value={external_url} setValue={setExternalUrl} />
            <TextInputField label="Image" value={image} setValue={setImage} />
            <NumberInputField label="Collection Size" value={collectionSize} setValue={setCollectionSize} />
            <NumberInputField label="Start Token ID" value={startTokenId} setValue={setStartTokenId} />
        </div>
    )
}