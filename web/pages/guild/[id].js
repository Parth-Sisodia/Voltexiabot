import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function GuildPage() {
    const router = useRouter();
    const { id } = router.query;

    const [settings, setSettings] = useState({
        punishmentChannel: "",
        ticketCategory: "",
        staffRole: ""
    });

    useEffect(() => {
        if (!id) return;

        fetch(`${process.env.BACKEND_URL}/settings/${id}`, { credentials: "include" })
            .then(res => res.json())
            .then(data => setSettings(data));
    }, [id]);

    function save(e) {
        e.preventDefault();

        fetch(`${process.env.BACKEND_URL}/settings/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(settings)
        }).then(() => alert("Saved"));
    }

    return (
        <div className="container">
            <h1>Guild Settings: {id}</h1>

            <form onSubmit={save}>
                <div className="card">
                    <label>Punishment Channel</label>
                    <input
                        value={settings.punishmentChannel || ""}
                        onChange={e => setSettings({ ...settings, punishmentChannel: e.target.value })}
                    />
                </div>

                <div className="card">
                    <label>Ticket Category</label>
                    <input
                        value={settings.ticketCategory || ""}
                        onChange={e => setSettings({ ...settings, ticketCategory: e.target.value })}
                    />
                </div>

                <div className="card">
                    <label>Staff Role</label>
                    <input
                        value={settings.staffRole || ""}
                        onChange={e => setSettings({ ...settings, staffRole: e.target.value })}
                    />
                </div>

                <button className="button" type="submit">Save</button>
            </form>
        </div>
    );
}
