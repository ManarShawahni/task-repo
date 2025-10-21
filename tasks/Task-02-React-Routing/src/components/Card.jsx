export default function Card({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginTop: "20px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
