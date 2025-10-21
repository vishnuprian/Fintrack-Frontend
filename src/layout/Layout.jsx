import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="p-6">{children}</main>
    </div>
  );
}