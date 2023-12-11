import { Divider, Drawer, Group, Stack } from "@mantine/core";
import React from "react";
import { styleMenuMobileStyle } from "./styles";
import { IconMenu2 } from "@tabler/icons-react";
import { KeyMenuRouter, MENU_ROUTER } from "@/constant/router";
import MenuOption from "../Menu/Option";

const MenuMobile: React.FC = () => {
  const { classes, theme } = styleMenuMobileStyle();

  return (
    <Drawer
      opened={false}
      title=""
      onClose={() => { }}
      className={classes.root}
      size={240}
    >
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
    </Drawer>
  )
}

export default MenuMobile;