import CustomButton from "@/components/buttons/button";
import CustomInput from "@/components/input";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { userFormValidationGenerator } from "@/components/formValidation/userFormValidation";
import { useState } from "react";
import { Users } from "@/const/dummy";
import { dispatch, store } from "@/redux/store";
import { setUserDetails, spinner } from "@/redux/actions/uiAction";
import { handleRouting } from "@/helpers/helperFunc";
import { useSelector } from "react-redux";
import { loaderSelector } from "@/redux/selectors/uiSelector";

const index = () => {
  const classes = useStyles();
  const [validation, setValidation] = useState({});
  const { handleSubmit, register, errors, getValues, reset } = useForm({
    resolver: yupResolver(userFormValidationGenerator({ ...validation })),
  });
  const loggedInUser = store.getState().common.userData;

  useEffect(() => {
    if (loggedInUser) {
      dispatch(setUserDetails(loggedInUser));
      handleRouting(loggedInUser.designation);
    }
  }, []);
  console.log(loggedInUser);
  const onSubmit = () => {
    const { user_name, password } = getValues();
    const user = Users.find(
      (u) => u.userName === user_name && u.password === password
    );
    console.log(user);

    if (user) {
      dispatch(setUserDetails(user));
      handleRouting(user.designation);
    }
  };
  return (
    <Box>
      <Box className={classes.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography>Hi, Welcome back</Typography>
          <CustomInput
            name={"user_name"}
            placeholder="Enter Name"
            label={"Enter Name"}
            inputRegister={register}
            error={errors["userName"] ? true : false}
          />
          <CustomInput
            name={"password"}
            placeholder="Enter Password"
            label={"Enter Password"}
            inputRegister={register}
            error={errors["password"] ? true : false}
          />
          <CustomButton label="Submit" />
        </form>
      </Box>
    </Box>
  );
};

export default index;

const useStyles = makeStyles({
  wrapper: {
    width: "50%",
    border: "1px solid #EFEFEF",
    margin: "auto",
    padding: "auto",
    transform: "translate(0%, 50%)",
    padding: "20px",
    borderRadius: "8px",
  },
});
