import HapiAxios from "hapi-axios";

const URLApi = async (server) => (
    await server.register({
        plugin: HapiAxios,
        options: {
            instances: [
                {
                    name: 'elevenia',
                    axios: {
                        baseURL: 'http://api.elevenia.co.id/rest',
                        headers: {
                            'Content-Type': 'application/xml',
                            'Accept-Charset': 'utf-8',
                            'openapikey': '721407f393e84a28593374cc2b347a98'
                        }
                        // you can use any axios config here. https://github.com/axios/axios#creating-an-instance
                    },
                },
            ],
        },
    })
)

export default URLApi