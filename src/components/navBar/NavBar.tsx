import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box } from "@mui/material";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>;
  componentNavBar?: React.ReactNode;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

export default function CustomNavbar(props: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? props.window() : undefined,
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          color="default"
          position="fixed"
          elevation={trigger ? 4 : 0}
          sx={{
            background: trigger ? "rgba(245, 232, 192, 0.4)" : "transparent",
            transition: "background-color 0.3s ease",
            backdropFilter: "blur(2px)",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
            }}
          >
            {props.componentNavBar}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar /> {/* Espaço para compensar o AppBar fixo */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          paddingTop: "5vh",
        }}
      >
        {props.children}
      </Box>
    </React.Fragment>
  );
}
