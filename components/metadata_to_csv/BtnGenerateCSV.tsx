import React, { useState } from 'react';
import { useMetadataToCSV } from '../../contexts/MetadataToCSVContext';
import { saveAs } from 'file-saver';

export default function BtnGenerateCSV() {
    const {
        metadataDirUrl,
        setMetadataDirUrl,
        startTokenId,
        setStartTokenId,
        endTokenId,
        setEndTokenId
    } = useMetadataToCSV();

    const [progress, setProgress] = useState(0); // current progress
    const [isProcessing, setIsProcessing] = useState(false); // to determine if CSV generation is ongoing

    const fetchJSONData = async (tokenId) => {
        const proxyUrl = `/api/metadataProxy?url=${encodeURIComponent(metadataDirUrl.replace('{id}', tokenId))}`;

        try {
            const response = await fetch(proxyUrl);

            // Check if the response from the proxy was successful
            if (!response.ok) {
                throw new Error(`Failed to fetch token ID ${tokenId} with status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Error fetching data for token ID ${tokenId}:`, error);
            throw error;
        }
    };

    const generateCSVFile = async () => {
        setIsProcessing(true);
        console.log("generateCSVFile");

        let traitTypes = new Set();
        let fileUrls = [];

        for (let i = startTokenId; i <= endTokenId; i++) {
            fileUrls.push(i);
        }

        try {
            // First, get all possible trait types
            for (const tokenId of fileUrls) {
                setProgress((tokenId - startTokenId + 1) / (endTokenId - startTokenId + 1) * 100);
                const data = await fetchJSONData(tokenId);

                if (data && data.attributes) {
                    data.attributes.forEach(attribute => {
                        traitTypes.add(`attributes:${attribute.trait_type}`);
                    });
                }
            }

            // Convert traitTypes to array and add non-attribute keys
            let headers = ['name', 'description', 'image', 'dna', 'edition', 'date', 'animation_url', 'filename', ...Array.from(traitTypes)];
            const csvData = [headers];

            for (const url of fileUrls) {
                const data = await fetchJSONData(url);

                if (data) {
                    const flatData = [];
                    headers.forEach(header => {
                        if ((header as string).startsWith('attributes:')) {
                            const trait = (header as string).split(':')[1];
                            const attribute = data.attributes.find(attr => attr.trait_type === trait);
                            flatData.push(attribute ? attribute.value : '');
                        } else if (header === 'filename') {
                            flatData.push(`${url}.json`);
                        } else {
                            flatData.push(data[header as string] || '');
                        }
                    });
                    csvData.push(flatData);
                }
            }

            // Convert 2D array to CSV format and download
            const csvString = csvData.map(row => row.map(cell => (typeof cell === 'string' && cell.includes(',')) ? `"${cell}"` : cell).join(',')).join('\n');
            const blob = new Blob([csvString], { type: "text/csv;charset=utf-8" });
            saveAs(blob, "metadata.csv");

        } catch (error) {
            console.error("Error generating CSV:", error);
            alert("Failed to generate CSV. Please check the console for more details.");
        }
        setIsProcessing(false);
    }

    return (
        <div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={generateCSVFile}
                disabled={isProcessing} // disable the button while processing
            >
                Generate CSV File
            </button>
            {isProcessing && (
                <div>
                    Processing: {progress.toFixed(2)}% completed
                </div>
            )}
        </div>
    );
}
