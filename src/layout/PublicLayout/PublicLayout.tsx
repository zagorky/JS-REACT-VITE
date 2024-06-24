import { Outlet } from "react-router-dom";
import classes from "./PublicLayout.module.scss";
import { Footer, Header } from "@/components";

const PublicLayout = () => {
  return (
    <div className={classes.publicLayout}>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
