import React from "react";
import { loginStyles } from "./styles";
import {
  Button,
  Divider,
  Group,
  LoadingOverlay,
  Stack,
  Text,
} from "@mantine/core";
import { END_POINT_NAME, STATUS, TYPE_API } from "@/redux/query/endPointName";
import { FORM_ID } from "@/form/form.id";
import FormLogin from "@/form/login";
import { useNavigate } from "react-router";
import { ROUTER } from "@/constant/router";
import { useStatus } from "@/redux/hook";
import { AppScreen, useScreen } from "@/hook/useScreen";

const Login: React.FC = () => {
  const { classes, theme } = loginStyles();
  const navigation = useNavigate();
  
  const status = useStatus("loginApi", TYPE_API.mutation, END_POINT_NAME.LOGIN_INFO);
  const screen: AppScreen = useScreen();

  return (
    <Group
      className={classes.root}
      position="center"
    >
      <Stack className={screen.width > 460 ? classes.form : classes.formMobile} pos={"relative"}>
        <LoadingOverlay
          visible={status === STATUS.PENDING}
          radius={screen.width > 460 ? 30 : 0}
        />
        <Text className={classes.title}>Đăng nhập</Text>
        <FormLogin/>
        <Stack mt={30}>
          <Button
            type="submit"
            form={FORM_ID.LOGIN}
          >Đăng nhập</Button>
          <Divider
            my={0}
            label="Hoặc"
            labelPosition="center"
            color={theme.colors["gray"][6]}
          />
          <Button
            onClick={() => navigation(ROUTER.PUBLIC.REGISTER.INDEX)}
          >Đăng kí</Button>
        </Stack>
      </Stack>
    </Group>
  )
}

export default Login;