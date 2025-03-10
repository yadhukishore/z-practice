import React from "react";
import { useParams } from "react-router-dom";
import { useUSerDetail } from "../services/queries";

const UserDetail = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useUSerDetail(id);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching user data</p>;

    return (
        <div>
            <h1>User Details</h1>
            {data ? (
                <div>
                    <img src={data.image} alt={data.firstName} width="100" />
                    <p><strong>Name:</strong> {data.firstName} {data.lastName}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    <p><strong>Age:</strong> {data.age}</p>
                    <p><strong>Gender:</strong> {data.gender}</p>
                    <p><strong>Phone:</strong> {data.phone}</p>
                    <p><strong>Company:</strong> {data.company.name}</p>
                </div>
            ) : (
                <p>No user data available</p>
            )}
        </div>
    );
};

export default UserDetail;
