import { useEffect, useState } from "react";

export default function Dashboard() {
    const [guilds, setGuilds] = useState([]);

    useEffect(() => {
        fetch(`${process.env.BACKEND_URL}/guilds`, { credentials: "include" })
            .then(res => res.json())
            .then(data => setGuilds(data.guilds || []));
    }, []);

    return (
        <div className="container">
            <h1>Your Servers</h1>

            {guilds.map(g => (
                <div key={g.id} className="card">
                    <h2>{g.name}</h2>
                    <a className="button" href={`/guild/${g.id}`}>Manage</a>
                </div>
            ))}
        </div>
    );
}
