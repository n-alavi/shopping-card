import Navbar from "../Navbar/navbar/Navbar";

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  return;
  <>
    <Navbar />
    {children}
  </>;
}
export default Layout;
