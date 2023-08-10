// pages/api/metadataProxy.js
import https from 'https';


export default async (req, res) => {
    try {
        const url = req.query.url;
        const response = await fetch(url);

        // Check if the response from the external URL was successful
        if (!response.ok) {
            throw new Error(`Failed to fetch from external URL with status: ${response.status}`);
        }

        const data = await new Promise((resolve, reject) => {
            https.get(url, (resp) => {
                let data = '';

                // A chunk of data has been received.
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    resolve(JSON.parse(data));
                });

            }).on("error", (err) => {
                reject(err);
            });
        });

        res.json(data);
    } catch (error) {
        console.error("Error fetching external data:", error);
        res.status(500).json({ message: "Failed to fetch external data." });
    }
};
