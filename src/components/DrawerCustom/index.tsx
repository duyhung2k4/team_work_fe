import React from "react";
import {
  Box,
  Button,
  Drawer,
  Group,
  LoadingOverlay,
  Stack,
} from "@mantine/core";
import { styleDrawerCustom } from "./styles";
import { HEIGHT_HEADER } from "@/constant/screen";
import { useStatus } from "@/redux/hook";
import { STATUS, TYPE_API, endPointName } from "@/redux/query/endPointName";

export interface DrawerCustomProps {
  opened: boolean
  title: string
  setStatus: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
  loading?: boolean
  formId?: string
  onClose?: () => void
}
const DrawerCustom: React.FC<DrawerCustomProps> = (props) => {
  const { classes } = styleDrawerCustom();
  const status = useStatus("projectApi", TYPE_API.mutation, endPointName.project.createProject.name);

  return (
    <Drawer
      classNames={{
        header: classes.header,
        body: classes.body,
      }}
      opened={props.opened}
      onClose={() => {
        props.setStatus(false);
        props.onClose && props.onClose();
      }}
      title={props.title}
      position="right"
    >
      <LoadingOverlay
        visible={status === STATUS.PENDING ? true : false}
      />
      <Stack
        justify="space-between"
        style={{
          height: `calc(100vh - ${HEIGHT_HEADER + 20 + 16}px)`,
        }}
      >
        <Box
          style={{
            height: `calc(100vh - ${HEIGHT_HEADER + 20 + 16 + 40}px)`,
            overflowY: "scroll",
          }}
        >
          {props.children}
        </Box>
        <Group position="right">
          <Button
            onClick={() => props.setStatus(false)}
          >Hủy</Button>
          <Button
            type="submit"
            form={props.formId}
          >Xác nhận</Button>
        </Group>
      </Stack>
    </Drawer>
  )
}

export default DrawerCustom;