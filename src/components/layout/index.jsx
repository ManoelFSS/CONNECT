import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <section className={styles.layout}>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </section>
  );
};

export default Layout;
