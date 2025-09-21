import Navbar from "../components/Navbar";
import logo from "../assets/logo.svg";

export default function Career() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <img src={logo} alt="Code X Novas" className="h-20 mb-6" />
        <h1 className="text-4xl font-bold">Career Page</h1>
        <p className="text-gray-600 mt-4">This is a placeholder for Services content.</p>
      </div>
    </div>
  );
}
