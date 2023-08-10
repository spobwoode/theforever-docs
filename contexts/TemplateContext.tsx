import React, { useContext } from "react"

type MetadataToCSVContextType = {

}

const MetadataToCSVContext = React.createContext<MetadataToCSVContextType>({

})

export function MetadataToCSVProvider({ children }) {


    return (
        <MetadataToCSVContext.Provider value={{

        }}>
            {children}
        </MetadataToCSVContext.Provider>
    )
}

export function useMetadataToCSV() {
    return useContext(MetadataToCSVContext)
}