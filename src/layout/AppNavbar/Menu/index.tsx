import React from "react";
import MenuOption from "./Option";

import { Divider, Group, Stack } from "@mantine/core";
import { styleMenu } from "./styles";
import { IconMenu2 } from "@tabler/icons-react";
import { KeyMenuRouter, MENU_ROUTER } from "@/constant/router";

const AppNavbarMenu: React.FC = () => {
  const { classes, theme } = styleMenu();

  return (
    <Stack className={classes.root}>
      <Stack spacing={0}>
        <Group 
          position="left"
          className={classes.control}
        >
          <IconMenu2 
            className={classes.icon}
          />
        </Group>
        <Divider 
          my="xs"
          color={theme.colors.info[1]}
        />
        <Stack className={classes.menu} spacing={24}>
          {Object.keys(MENU_ROUTER).map((key: string) => {
            const keyConvert = key as KeyMenuRouter
            const option = MENU_ROUTER[keyConvert];
            return (
              <MenuOption
                key={option.INDEX}
                href={option.INDEX}
                icon={option.ICON}
                name={option.NAME}
              />
            )
          })}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default AppNavbarMenu;