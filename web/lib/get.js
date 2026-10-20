export async function get(path) {
    const res = await fetch(`${process.env.BACKEND_URL}${path}`, {
        credentials: "include"
    });
    return res.json();
}
