import Navbar from "../Navbar/navbar/Navbar";

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
