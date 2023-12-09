import React from "react";
import FormRegister from "@/form/register";

import {
  Button,
  Divider,
  Group,
  LoadingOverlay,
  Stack,
  Text
} from "@mantine/core";
import { stylePageRegister } from "./styles";
import { useStatus } from "@/redux/hook";
import { END_POINT_NAME, STATUS, TYPE_API } from "@/redux/query/endPointName";
import { FORM_ID } from "@/form/form.id";

const Register: React.FC = () => {
  const { classes, theme } = stylePageRegister();

  const status = useStatus("registerApi", TYPE_API.mutation, END_POINT_NAME.REGISTER_SEND_REGISTER_INFO);


  return (
    <Group
      className={classes.root}
      position="center"
    >
      <Stack className={classes.form} pos={"relative"}>
        <LoadingOverlay
          visible={status === STATUS.PENDING}
          radius={30}
        />
        <Text className={classes.title}>Đăng kí</Text>
        <FormRegister />
        <Stack mt={30}>
          <Button
            type="submit"
            form={FORM_ID.REGISTER}
          >Đăng kí</Button>
          <Divider
            my={0}
            label="Hoặc"
            labelPosition="center"
            color={theme.colors["gray"][6]}
          />
          <Button>Đăng nhập</Button>
        </Stack>
      </Stack>
    </Group>
  )
}

export default Register;