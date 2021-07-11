import { FC } from "react";
import classNames from "classnames";
import { useScroll } from "@libs/scroll";
import Header from "@components/Header";
import Footer from "@components/Footer";

interface Props {
  children?: any | any[];
}

const Layout: FC<Props> = ({ children }) => {
  const [scrolled] = useScroll();
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
        <div
          className={classNames(
            "fixed top-0 left-0 z-20 h-1 bg-blue-600 dark:bg-lime-600 bg-opacity-75",
            {
              "rounded-r-full": scrolled !== 100,
            }
          )}
          style={{ width: `${scrolled}%` }}
        />
        <Header />
        <div className="py-8 overflow-hidden">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
