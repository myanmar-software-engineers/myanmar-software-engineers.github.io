import { PropsWithChildren } from "react";

const OverflowContainer: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="overflow-y-hidden overflow-x-hidden relative">
      {children}
    </div>
  );
};
export default OverflowContainer;
