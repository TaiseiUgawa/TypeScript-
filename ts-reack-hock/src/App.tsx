import { UserCard } from "./components/UserCard";
import "./styles.css";
import { useAllUsers } from "./hooks/useAllUsers";

// const sampleUserData = {
//   id: 1,
//   name: "",
//   email: "test@test.com",
//   address: "ADDRESS"
// };

export default function App() {
  const { getUserData, userProfile, loading, error } = useAllUsers();
  const fetchUserData = () => {
    getUserData();
  };

  return (
    <div className="App">
      <button onClick={fetchUserData}>Fetch DATA</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>faild fetch data</p>
      ) : loading ? (
        <p>loading ...</p>
      ) : (
        <>
          {userProfile.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
