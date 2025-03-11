import React from 'react';
import { useUser } from '../services/queries';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Userzz = () => {
    const { data, error, isLoading } = useUser();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;

    console.log("Data:", data);

    return (
        <div>
            <NavBar/>
            <h1>Users</h1>
            {data?.users?.length > 0 ? (
                <ul>
                    {data.users.map((user, index) => (
                        <li key={index}>
                            <strong>ID:</strong> {user.id} <br />
                            <strong>Name:</strong> {user.firstName} {user.lastName} <br />
                            <strong>Email:</strong> {user.email} <br />
                            <strong>Address:</strong> {user.address?.address}, {user.address?.city}, {user.address?.state}, {user.address?.country} <br />
                            <strong>Corrdinates:</strong>{user.address?.coordinates?.lat},{user.address?.coordinates?.lng}
                            <Link to={`/userzz/${user.id}`}>View Details</Link>
                            <hr />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users available</p>
            )}
        </div>
    );
};

export default Userzz;
