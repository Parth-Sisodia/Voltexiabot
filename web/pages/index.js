export default function Home() {
    return (
        <div className="container">
            <h1>Dashboard</h1>
            <a className="button" href={`${process.env.BACKEND_URL}/auth/login`}>
                Login with Discord
            </a>
        </div>
    );
}
