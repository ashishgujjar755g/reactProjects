import React from "react";
import Card from "./Components/Card";

function App() {
  const users = [
    {
      name: "Alice",
      avatar: "https://i.pravatar.cc/150?img=1",
      bio: "Frontend Developer from NYC",
      btnText: "chscghjgcjc",
      role: "jhdgayjhdjhvhv lorem",
    },
    {
      name: "Bob",
      avatar: "https://i.pravatar.cc/150?img=2",
      bio: "Backend Developer from London",
      btnText: "jkcsdds",
      role: "jhdgayjhdjhvhv lorem",
    },
    {
      name: "Carol",
      avatar: "https://i.pravatar.cc/150?img=3",
      bio: "Full Stack Engineer from Berlin",
      // btnText: "sdauwiuifbsiufg",
      role: "jhdgayjhdjhvhv lorem",
    },
  ];

  return (
    <div>
      <h1 className="">User Profiles</h1>
      {users.map((user, index) => (
        <Card
          key={index}
          name={user.name}
          avatar={user.avatar}
          bio={user.bio}
          bText={user.btnText}
          role={user.role}
        />
      ))}
    </div>
  );
}

export default App;
