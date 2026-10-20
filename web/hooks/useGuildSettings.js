import { useState, useEffect } from "react";

export default function useGuildSettings(guildId) {
    const [settings, setSettings] = useState(null);

    async function load() {
        const res = await fetch(`${process.env.BACKEND_URL}/settings/${guildId}`, {
            credentials: "include"
        });
        const json = await res.json();
        setSettings(json);
    }

    async function save(newSettings) {
        await fetch(`${process.env.BACKEND_URL}/settings/${guildId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(newSettings)
        });
        setSettings(newSettings);
    }

    useEffect(() => {
        if (guildId) load();
    }, [guildId]);

    return { settings, save };
}
