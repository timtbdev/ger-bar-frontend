import { FC } from "react";

interface Props {
  children?: any | any[];
}

const Container: FC<Props> = ({ children }) => {
  return (
    <>
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          {children}
        </div>
      </>
  );
};

export default Container;