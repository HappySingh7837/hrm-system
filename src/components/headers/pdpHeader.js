import { icons } from "@/assets/icon";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Divider from "../divider/divider";
import {
  handlePop,
  handleRouting,
  handleRoutingOnLogin,
  handleRoutingWithReplace,
  shareLink,
} from "@/helpers/helperFunc";
import CustomBottomSheet from "../BottomSheet/customBottomSheet";
import CustomButton from "../buttons/button";
import { routeEndpoint } from "@/utility/routeEndPoints";
import { ProductDetailPageActionEventGeneratation } from "@/helpers/eventHelpersFunc";
import { MoengageAtrributes } from "@/helpers/eventAndAttributesName";

const ProductDetailHeader = ({ share = true, onform = false, detail ,dismissEventhandler}) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  const handleOpen = (val) => {
    if (onform) {
      setIsOpen(val);
    } else {
      ProductDetailPageActionEventGeneratation(
        detail,
        MoengageAtrributes.BackPressed
      );
       handleRoutingWithReplace(routeEndpoint.brands + localStorage.getItem("brandId"));
    }
  };
  const handleBackPress = () => {
    dismissEventhandler()
    handleOpen(false);
    handleRoutingOnLogin(routeEndpoint.product + localStorage.getItem("pid"));
  };
  return (
    <>
      <Box className={classes.wrapper}>
        <Box style={{ display: "flex" }}>
          <img
            src={icons.arrow.src}
            className={classes.iconWrapper}
            style={{ paddingLeft: "16px" }}
            onClick={() => handleOpen(true)}
          />
          <Typography style={{ marginLeft: ".6rem", marginRight: ".8rem" }}>
            प्रोडक्ट विवरण
          </Typography>
        </Box>
        <Box style={{ display: "flex" }}>
          {share && (
            <Box
              style={{ display: "flex" }}
              onClick={() => {
               
                ProductDetailPageActionEventGeneratation(
                  detail,
                  MoengageAtrributes.ShareClicked
                );
                shareLink("product", localStorage.getItem("pid"));
              }}
            >
              <img src={icons.share.src} className={classes.iconWrapper} />
              <Typography style={{ marginLeft: ".6rem", marginRight: "16px" }}>
                शेयर
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Divider />
      <CustomBottomSheet
        isopen={isOpen}
        showButton={false}
        label={"वापस जाएं"}
        close={handleOpen}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              textAlign: "center",
              marginTop: "1rem",
              fontSize: "20px",
              padding: "20px",
            }}
          >
            वापस जाने पर आपको यह फॉर्म दोबारा भरना पड़ेगा
          </Typography>
          <Box
            style={{
              width: "92%",
              backgroundColor: "#189D3B",
              textAlign: "center",
              padding: "8px",
              color: "white",
              borderRadius: "4px",
              marginTop: ".6rem",
              fontWeight: "bold",
            }}
            onClick={() => handleOpen(false)}
          >
            <Typography>फॉर्म भरना जारी रखें</Typography>
          </Box>
          <Box
            style={{
              width: "92%",
              textAlign: "center",
              padding: "8px",
              color: "white",
              borderRadius: "4px",
              color: "#777777",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
            onClick={() => handleBackPress()}
          >
            <Typography>मुझे वापस जाना है</Typography>
          </Box>
        </Box>
      </CustomBottomSheet>
    </>
  );
};

export default ProductDetailHeader;

const useStyles = makeStyles({
  wrapper: {
    //height: "20px",
    // margin: "auto",
    padding: "  8px 16p 8px 16px !important",
    marginTop: "16px",
    marginBottom: "14px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  iconWrapper: {
    height: "24px",
    width: "24px",
  },
});

// <Box >
// <img src={icons.arrow.src} className={classes.iconWrapper} />
// <Typography style={{ marginLeft: ".6rem", marginRight: ".8rem" }}>
//   प्रोडक्ट विवरण
// </Typography>
// </Box>
// <Box >
// <img src={icons.share.src} className={classes.iconWrapper} />
// <Typography style={{ marginLeft: ".6rem", marginRight: "0rem" }}>
//   शेयर
// </Typography>
// </Box>
