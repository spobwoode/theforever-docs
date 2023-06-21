import React from 'react'
import { useMetadataGenerator } from '../../contexts/MetadataGeneratorContext'
import JSZip from 'jszip'
import { saveAs } from 'file-saver';

export default function BtnGenerate() {
    const {
        name,
        title,
        subtitle,
        contract_address,
        spreadsheet_id,
        description,
        animation_url,
        external_url,
        image,
        collectionSize,
        startTokenId
    } = useMetadataGenerator()

    // loop through the collection size and create metadata files for each token, then zip and download
    const generateMetadataFiles= () => {
        // create a zip file
        const zip = new JSZip()

        // loop through the collection size and create metadata files for each token
        for (let i = startTokenId; i < collectionSize; i++) {
            // create a json object for each token
            const token = {
                name: name,
                description: description,
                image: image,
                external_url: external_url,
                animation_url: animation_url,
                // attributes: [
                //     {
                //         trait_type: "title",
                //         value: title,
                //     },
                //     {
                //         trait_type: "subtitle",
                //         value: subtitle,
                //     },
                //     {
                //         trait_type: "contract_address",
                //         value: contract_address,
                //     },
                //     {
                //         trait_type: "spreadsheet_id",
                //         value: spreadsheet_id,
                //     },
                // ],
            }

            // add the json object to the zip file
            zip.file(`${i}`, JSON.stringify(token, null, 2))
        }

        // generate the zip file
        zip.generateAsync({type:"blob"})
        .then(function(content) {
            // see FileSaver.js
            saveAs(content, "metadata.zip")
        })  
    }

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={generateMetadataFiles}
        >
            Generate Metadata Files
        </button>
    )
}