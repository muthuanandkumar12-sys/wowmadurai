import { Link } from "react-router-dom";

export default function PaymentCancel() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        background: "#fff5f5",
      }}
    >
      <h1 style={{ color: "#e74c3c" }}>❌ Payment Cancelled</h1>

      <p style={{ fontSize: "18px", margin: "10px 0" }}>
        Your payment was not completed.
      </p>

      <p style={{ color: "#555" }}>
        Don’t worry, no amount has been deducted.
      </p>

      <div style={{ marginTop: "30px" }}>
        <Link to="/hotels">
          <button style={btnStyle}>Try Again</button>
        </Link>

        <Link to="/">
          <button style={{ ...btnStyle, marginLeft: "15px" }}>
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  background: "#e74c3c",
  color: "#fff",
  fontSize: "16px",
};
