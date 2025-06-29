import React from "react";

function Card({ name, avatar, bio, role, bText = "click me" }) {
  //ye arguments ko props(property) bolte hai ye compnents(button,cards,header,links)etc. ko reuse krne ke liye use hote hai aur isme har ek card/button ke liye different data de skte hai
  const cardStyle = {
    width: "300px",
    background: "#fff",
    boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
    borderRadius: "12px",
    textAlign: "center",
    padding: "20px",
    fontFamily: "Segoe UI, sans-serif",
    transition: "transform 0.3s ease",
  };

  const avatarStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
  };

  const roleStyle = {
    fontWeight: "bold",
    color: "#555",
    margin: "0",
  };

  const bioStyle = {
    fontSize: "14px",
    color: "#777",
    margin: "10px 0",
  };

  const buttonStyle = {
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "10px",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform =
          "scale(1.03) translate(0px,-50px) rotate(50deg)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
    >
      <img src={avatar} alt={name} style={avatarStyle} />
      <h2>{name}</h2>
      <p style={roleStyle}>{role}</p>
      <p style={bioStyle}>{bio}</p>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.background = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.background = "#007bff")}
      >
        {bText}
      </button>
    </div>
  );
}

export default Card;
