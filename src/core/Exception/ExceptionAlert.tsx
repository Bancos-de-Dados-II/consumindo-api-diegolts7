import { Alert, type AlertColor } from "@mui/material";
import type { JSX } from "react";

export function ExceptionAlert(
  message: string,
  severity: AlertColor
): JSX.Element {
  return <Alert severity={severity}>{message}</Alert>;
}
