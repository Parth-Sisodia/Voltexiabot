import { useState, useEffect } from "react";

export default function useGuilds() {
    const [guilds, setGuilds] = useState([]);

    async function load() {
        const res = await fetch(`${process.env.BACKEND_URL}/guilds`, {
            credentials: "include"
        });
        const json = await res.json();
        setGuilds(json.guilds || []);
    }

    useEffect(() => {
        load();
    }, []);

    return guilds;
}
