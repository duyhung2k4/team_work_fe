import { LoadingOverlay, Modal } from "@mantine/core";
import React from "react";
import { styleModel } from "./styles";
import { useScreen } from "@/hook/useScreen";

export interface ModalCustomProps {
  title: string
  open: boolean
  onClose: () => void
  children: React.ReactNode
  loading?: boolean
}
const ModalCustom: React.FC<ModalCustomProps> = (props) => {
  const { width } = useScreen();
  const { classes } = styleModel(width);

  return (
    <Modal
      opened={props.open}
      onClose={props.onClose}
      title={props.title}
      size={width > 900 ? "lg" : "md"}
      fullScreen={width > 600 ? false : true}
      classNames={{
        inner: classes.inner,
        header: classes.header,
        root: classes.root,
        content: classes.content,
        body: classes.body,
      }}
    >
      <LoadingOverlay visible={props.loading || false} />
      {props.children}
    </Modal>
  )
}

export default ModalCustom;