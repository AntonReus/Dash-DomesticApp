import { BASE_URI } from "../../public/js/config.js";

export default async function login(email, password)
{
    const credentials = {email, password};

    const response = await fetch(`${base_uri}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    });

    const data = await response.json();
    return data;
}