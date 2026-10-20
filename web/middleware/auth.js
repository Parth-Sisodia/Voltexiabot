export default async function auth(ctx) {
    const res = await fetch(`${process.env.BACKEND_URL}/auth/user`, {
        credentials: "include"
    });

    const data = await res.json();
    if (!data.user) {
        if (ctx.res) {
            ctx.res.writeHead(302, { Location: "/" });
            ctx.res.end();
        }
    }

    return data.user;
}
