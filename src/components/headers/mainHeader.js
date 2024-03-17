import { icons } from "@/assets/icon";
import { Box, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Divider from "../divider/divider";
import React, { useEffect, useState } from "react";
import CustomBottomSheet from "../BottomSheet/customBottomSheet";

import Logout from "@mui/icons-material/Logout";

import {
  ErrorOutlineOutlined,
  Person2Outlined,
  ShareOutlined,
} from "@mui/icons-material";
import BrandHeaderPop from "../popup/brandHeaderPop";

const MainHeader = ({eventHandler}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("isOpen", isOpen);
  }, [isOpen]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (val) => {
    console.log("-->", val);
    setIsOpen(val);
  };

  return (
    <>
      <Box className={classes.wrapper} onClick={() => handleClose(true)}>
        <img
          src={icons.logo.src}
          style={{ width: "90%", transform: "translateX(10%)" }}
          className={classes.icons}
        />
        <Box onClick={() => console.log("sdfg")}>
          <img src={icons.menu.src} />
        </Box>
        {/* <AccountMenu /> */}
      </Box>
      <Divider />
      <CustomBottomSheet
        isopen={isOpen}
        children={<BrandHeaderPop eventHandler={eventHandler}/>}
        close={() => handleClose(false)}
        showButton={false}
      />
    </>
  );
};

export default MainHeader;

const useStyles = makeStyles({
  wrapper: {
    height: "60px",
    margin: "auto",
    padding: "auto",
    marginTop: "14px",
    marginBottom: "14px",
    display: "flex",
    // justifyContent:'center',
    alignItems: "center",
  },
  icons: {
    height: "32px",
    width: "32px",
  },
});
