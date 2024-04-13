const BASE_URL = "https://e4325ed6-ef45-4c74-803e-2db2861a6f76-00-2dxs620ipv9bg.pike.replit.dev";
async function sendPostRequest(URL, data){
    return await fetch(URL, {
        method: "post",
        // core: true,
        headers:{
            Accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const API = {
    signup: async (newUser) => await sendPostRequest(`${BASE_URL}/register`, newUser),
    login: async (email, password) => await sendPostRequest(`${BASE_URL}/auth`, {email, password}),
}