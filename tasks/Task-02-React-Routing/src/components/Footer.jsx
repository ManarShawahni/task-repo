export default function Footer() {
  return (
    <footer
      style={{ marginTop: "20px", textAlign: "center", fontSize: "14px" }}
    >
      <hr />
      <p>© {new Date().getFullYear()} My Simple React App</p>
    </footer>
  );
}
