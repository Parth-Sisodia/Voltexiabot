export default function GuildCard({ guild }) {
    return (
        <div className="card">
            <h2>{guild.name}</h2>
            <a className="button" href={`/guild/${guild.id}`}>Manage</a>
        </div>
    );
}
