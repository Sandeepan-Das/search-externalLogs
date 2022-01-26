import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useSelector, useDispatch } from "react-redux";
import MuiAlert from "@mui/material/Alert";
import { SnackData } from "../../actions/table";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackBar() {
  const snack = useSelector((state) => state.SnackToggle);
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "CLOSE" });
  };
  return (
    <div>
      <Snackbar
        open={snack}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Search Completed.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SnackBar;
