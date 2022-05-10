const token = "";
const base_uri = "";

export async function updateNote(id)
{
    const response = await fetch(`${base_uri}/notes/${id}`, {
        method: "PATCH",
        headers: {
            Autorization: `Token token = ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
}