import type { ReactNode } from "react";
import Empty from "../Errors/Empty";
import ErrorApi from "../Errors/ErrorApi";
import { CircularProgress } from "@mui/material";

interface CustomRequestProps {
  isLoading?: boolean;
  isSuccess?: boolean;
  isClear?: boolean;
  componentClear?: ReactNode;
  componentError?: ReactNode;
  componentLoading?: ReactNode;
  children: ReactNode;
}

const CustomRequest: React.FC<CustomRequestProps> = ({
  isLoading = false,
  componentError = <ErrorApi />,
  children,
  componentLoading = <CircularProgress size={"30px"} />,
  isSuccess,
  isClear = false,
  componentClear = <Empty />,
}) => {
  return (
    <>
      {isLoading
        ? componentLoading
        : isSuccess
        ? isClear
          ? componentClear
          : children
        : componentError}
    </>
  );
};

export default CustomRequest;
