import { useState } from "react";
import eleven from "./images/eleven.jpg";
import darkroast from "./images/darkroast.jpg";
import frappe from "./images/frappe.jpg";
import background from "./images/background.jpg";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const menu = [
    { id: 1, name: "Eleven's Espresso", price: 150, image: eleven },
    { id: 2, name: "Demogorgon Dark Roast", price: 180, image: darkroast },
    { id: 3, name: "Mind Flayer Frappe", price: 220, image: frappe },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      {/* 🔥 Title */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "85px",
          textTransform: "uppercase",
          letterSpacing: "6px",
          color: "#ff6a00",
          textShadow:
            "0 0 5px #ff6a00, 0 0 15px #ff4500, 0 0 30px #ff0000",
          marginBottom: "50px",
        }}
      >
        Hawkins Café
      </h1>

      {/* Menu Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {menu.map((item) => (
          <div
            key={item.id}
            style={{
              background: "rgba(0,0,0,0.6)",
              borderRadius: "10px",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "#ff6a00",
                }}
              >
                {item.name}
              </h3>

              <p>₹{item.price}</p>

              <button
                onClick={() => setCartCount(cartCount + 1)}
                style={{
                  background: "#ff6a00",
                  border: "none",
                  padding: "10px",
                  width: "100%",
                  cursor: "pointer",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2
        style={{
          textAlign: "center",
          marginTop: "40px",
          color: "#ff6a00",
        }}
      >
        🛒 Cart Items: {cartCount}
      </h2>
    </div>
  );
}

export default App;