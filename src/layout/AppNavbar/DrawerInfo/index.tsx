import React from "react";
import Cookies from "js-cookie";
import { Avatar, Button, Drawer, Stack, Text } from "@mantine/core";
import { styleDrawerInfo } from "./styles";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { COOKIES } from "@/constant/cookies";
import { useNavigate } from "react-router";
import { ROUTER } from "@/constant/router";
import dayjs from "dayjs";

export interface DrawerInfoProps {
  opened: boolean
  setStatus: React.Dispatch<React.SetStateAction<boolean>>
}
export const DrawerAccountInfo: React.FC<DrawerInfoProps> = (props) => {
  const { classes } = styleDrawerInfo();
  const user = useAppSelector((state: RootState) => state.profile.credential);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove(COOKIES.ACCESS_TOKEN);
    Cookies.remove(COOKIES.REFRESH_TOKEN);
    navigate(ROUTER.PUBLIC.LOGIN.INDEX);
  }

  return (
    <Drawer
      classNames={{
        header: classes.header,
        body: classes.body,
      }}
      size={320}
      opened={props.opened}
      onClose={() => props.setStatus(false)}
      position="right"
    >
      <Stack
        justify="space-between"
        align="center"
        style={{
          minHeight: `100vh`
        }}
      >
        <Stack align="center" spacing={8}>
          <Avatar
            color="cyan"
            size={100}
            radius={100}
            style={{
              textTransform: "uppercase",
              marginTop: 50,
            }}
          >{user?.profile?.name[0]}</Avatar>
          <Text
            color="#FFF"
            fw={600}
            size={24}
          >{user?.profile?.name}</Text>
          <Text
            color="#FFF"
            fw={600}
            size={16}
            mt={12}
          >{dayjs(user?.profile?.createdAt).format("DD/MM/YYYY")}</Text>
        </Stack>

        <Button
          style={{
            fontSize: 16,
            marginBottom: 20,
            width: "80%",
            borderRadius: 8,
            backgroundColor: "#E3FAFC",
            color: "#15AABF"
          }}
          onClick={handleLogout}
        >Đăng xuất</Button>
      </Stack>
    </Drawer>
  )
}