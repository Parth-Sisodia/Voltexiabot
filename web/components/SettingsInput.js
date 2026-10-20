export default function SettingsInput({ label, value, onChange }) {
    return (
        <div className="card">
            <label>{label}</label>
            <input
                value={value || ""}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}
