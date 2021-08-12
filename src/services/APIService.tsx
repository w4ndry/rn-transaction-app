export const get = async (url: string) => {
    try {

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        return json
    } catch (error) {
        throw error
    }
}