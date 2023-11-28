import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {

    const { user } = useContext(AuthContext)

    const { email, displayName, photoURL, loading } = user;

    if (loading) {

        return <h1>Loading</h1>

    }


    return (
        <div>
            <div className="avatar grid gap-4">
                <div className="w-24 rounded-full">
                    <img src={photoURL} />

                </div>
                <h1 className="text-2xl font-semibold">{displayName}</h1>
            </div>

<br />
            <div className="text-xl font-medium grid md:grid-cols-2 px-2">
                <h5 className="my-2">Email: {email}</h5>
                <h5 className="my-2">Agreement accept date:</h5>
                <h5 className="my-2">Rented apartment:</h5>
                <h5 className="my-2">floor:</h5>
                <h5 className="my-2">block:</h5>
                <h5 className="my-2">room no:</h5>
            </div>
        </div>
    );
};

export default Profile;