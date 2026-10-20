import { useState, useEffect } from "react";

export default function useBackend(path, auto = true) {
    const [data, setData] = useState(null);

    async function load() {
        const res = await fetch(`${process.env.BACKEND_URL}${path}`, {
            credentials: "include"
        });
        const json = await res.json();
        setData(json);
    }

    useEffect(() => {
        if (auto) load();
    }, [path]);

    return { data, reload: load };
}
