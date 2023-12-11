import { Group, LoadingOverlay, Stack } from "@mantine/core";
import React from "react";

const Loading: React.FC = () => {
  return (
    <Group
      h={"100vh"}
      w={"100vw"}
      position="center"
    >
      <Stack
        pos={"relative"}
        h={"100vh"}
        w={"100vw"}
        align="center"
      >
        <LoadingOverlay visible />
      </Stack>
    </Group>
  )
}

export default Loading