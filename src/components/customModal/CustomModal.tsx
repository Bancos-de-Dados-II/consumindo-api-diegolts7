import { Dialog, DialogContent, Box } from "@mui/material";
import { type ReactNode } from "react";

export interface CustomModalProps {
  open: boolean;
  onClose: () => void;
}

const CustomModal = ({
  props,
  modalCentral,
}: {
  props: CustomModalProps;
  modalCentral: ReactNode;
}) => {
  const { open, onClose } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullScreen
      sx={{
        "& .MuiDialog-paper": {
          background:
            "linear-gradient(135deg, rgba(248, 243, 224, 0.3) 0%, rgba(245, 232, 192, 0.3) 50%, rgba(240, 220, 157, 0.3) 100%)",
          boxShadow: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {/* Modal externo grande */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: "100%",
          }}
        >
          {/* Modal principal */}
          {modalCentral}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
