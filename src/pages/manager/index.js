import CustomButton from "@/components/buttons/button";
import PostHeader from "@/components/headers/postHeader";
import LeaveList from "@/components/list";
import { leaves } from "@/const/dummy";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const index = () => {
  const classes = useStyles();
  return (
    <Box>
      <PostHeader />
      <LeaveList />
    </Box>
  );
};

export default index;
const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    padding: "20px",
    border: "1px solid black",
    borderRadius: "8px",
    alignItems: "center",
  },
});
