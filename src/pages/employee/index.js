
import CustomBottomSheet from "@/components/BottomSheet/customBottomSheet";
import LeavesBottomSheet from "@/components/BottomSheet/leavesBootonSheet";
import CustomButton from "@/components/buttons/button";
import PostHeader from "@/components/headers/postHeader";
import LeaveList from "@/components/list";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const index = () => {
  const classes = useStyles();
  const [isopen, setIsopen] = useState(false);
  const handleIsOpen = () => {
    setIsopen(true);
  };
  return (
    <Box>
      <PostHeader />
      <Box className={classes.applyBtnWrapper}>
        <CustomButton
          label=" Apply Leave"
          className={classes.btn}
          onClick={handleIsOpen}
        />
      </Box>
      <LeaveList isEmp={true} callback={isopen}/>
      <CustomBottomSheet
        id="leave_dailog"
        isopen={isopen}
        showButton={false}
        close={() => setIsopen(false)}
        children={<LeavesBottomSheet onclose={() => setIsopen(false)} />}
      />
    </Box>
  );
};

export default index;
const useStyles = makeStyles({
  applyBtnWrapper: {
    display: "flex",
    // justifyContent: "end",
    padding: "20px",
  },
  btn: {
    backgroundColor: "#3190E7",
    minHeight: "48px",
    padding: "4px",
    marginLeft: ".3rem",
    marginRight: ".3rem",
    color: "#ffffff",
    borderRadius: "8px",
    minWidth: "80px",
    height: "40px",
    border: "1px solid #3190E7",
  },
});
