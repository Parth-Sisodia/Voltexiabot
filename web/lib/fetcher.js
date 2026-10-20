export async function fetcher(path, opts = {}) {
    const res = await fetch(`${process.env.BACKEND_URL}${path}`, {
        credentials: "include",
        ...opts
    });
    return res.json();
}
