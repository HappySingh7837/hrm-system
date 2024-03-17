import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { store } from "@/redux/store";
import CustomButton from "../buttons/button";

const PostHeader = ({}) => {
  const classes = useStyles();
  const user = store.getState().common.userData
    ? store.getState().common.userData
    : null;
  //console.log(user.name);
  return (
    <Box>
      <Box>
        <Box className={classes.wrapper}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            {user && (
              <Typography className={classes.userName}>
                {"Hi " + user.name + " Welcome Back"}
              </Typography>
            )}
          </Box>
          <Box>
            <CustomButton label="Logout" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostHeader;
const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    padding: "24px ",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {},
  userName: {
    fontSize: "16px",
    fontWeight: "500",
    marginLeft: ".4rem",
    color: "#3A3F3A",
  },
});
