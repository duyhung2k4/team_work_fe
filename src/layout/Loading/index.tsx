import React from "react";
import { 
  Group, 
  LoadingOverlay, 
  Stack, 
  createStyles,
} from "@mantine/core";

const Loading: React.FC = () => {
  const { theme } = createStyles(() => ({}))();

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
        <LoadingOverlay 
          visible
          overlayOpacity={0}
          style={{
            backgroundColor: theme.colors["dark-blue"][5],
          }}
        />
      </Stack>
    </Group>
  )
}

export default Loading