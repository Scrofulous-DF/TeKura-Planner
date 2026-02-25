import { useState, useEffect } from "react";
import { Nav } from "../components/nav";


export function Home() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch("api/hello")
        .then(res => res.json())
        .then(data => setMessage(data.message))
    }, []);

    return (
        <>
            <Nav />
            <h1>This is the home page</h1>
            <h3>Message from the server: {message}</h3>
        </>
    )
}