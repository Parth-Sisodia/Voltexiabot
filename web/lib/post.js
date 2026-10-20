export async function post(path, body) {
    const res = await fetch(`${process.env.BACKEND_URL}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body)
    });
    return res.json();
}
