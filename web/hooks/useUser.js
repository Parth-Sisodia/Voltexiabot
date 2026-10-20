import { useState, useEffect } from "react";

export default function useUser() {
    const [user, setUser] = useState(null);

    async function load() {
        const res = await fetch(`${process.env.BACKEND_URL}/auth/user`, {
            credentials: "include"
        });
        const json = await res.json();
        setUser(json.user || null);
    }

    useEffect(() => {
        load();
    }, []);

    return user;
}
