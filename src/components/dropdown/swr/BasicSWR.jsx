import useSWR from "swr";

const fetcher = async (url) => await fetch(url).then((res) => res.json());
function Users(){
    const { data, error,isLoading } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);
    if (isLoading) return <h1>loading...</h1>;
    if (error) return <div>failed to load {error}</div>;
    return(
        <div>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Users;