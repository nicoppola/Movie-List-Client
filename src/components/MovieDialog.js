import React, { forwardRef } from "react";
import netflixIcon from "../images/netflix-icon.png";
import huluIcon from "../images/hulu-icon.png";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Button,
} from "@mui/material";

export default function MovieDialog(props) {
  const { name, open, onClose } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{name}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent dividers>
        <Typography paragraph={true}>
          This will be filled in eventually probably
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button>
          <img src={netflixIcon} width="40" alt="netflix" />
        </Button>
        <Button>
          <img src={huluIcon} width="31" alt="hulu" />
        </Button>
      </DialogActions>
    </Dialog>
  );
}
