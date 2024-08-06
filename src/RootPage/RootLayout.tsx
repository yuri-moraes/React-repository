import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

export default function RootLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main style={{ paddingTop: "70px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
