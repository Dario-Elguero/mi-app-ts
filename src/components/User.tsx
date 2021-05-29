import { useState } from "react";
interface Users{
    uid:string;
    name:string;
}

export const User = () => {

    const [user, setUser] = useState<Users>();

    const login = () => {
        setUser({
            uid: "ABC123",
            name: "Dario Elguero"
        });
    }

    return (
        <div className="mt-5">
            <h3>User: useState</h3>
            <button 
            onClick={login}
            className="btn btn-outline-primary mt-2">
            Login
            </button>
            {user ?
            <pre>{JSON.stringify( user )}</pre>
            : <pre>Sin usuarios</pre>}
        </div>
    )
}
