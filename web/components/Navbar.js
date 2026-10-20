export default function Navbar() {
    return (
        <div className="navbar">
            <a href="/dashboard">Dashboard</a>
            <a href={`${process.env.BACKEND_URL}/auth/login`}>Logout</a>
        </div>
    );
}
