const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_KEY
});


export const getContenfulStuff = async () => {
    const response = await client.getEntries()
    const parseData = client.parseEntries(response)
    const respArray = parseData.items
    const cleanArray = respArray.map((value) => {

        return {
            title: value.fields.title, 
            url: value.fields.image.fields.file.url,
            description: value.fields.description
        }
        
    })
    return cleanArray 
}
