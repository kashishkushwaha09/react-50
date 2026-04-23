import WebNavbar from "./WebNavbar";

const Layout = ({ children }) => {
  return (
    <>
      <WebNavbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;