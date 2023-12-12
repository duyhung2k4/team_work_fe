import React, { useContext } from "react";
import MenuMobileOption from "./Option";

import { Divider, Drawer, Group, Stack } from "@mantine/core";
import { styleMenuMobileStyle } from "./styles";
import { IconMenu2 } from "@tabler/icons-react";
import { KeyMenuRouter, MENU_ROUTER } from "@/constant/router";
import { Context } from "@/context/app.context";
import { AppMenuTypes } from "@/context/menu/action";

const MenuMobile: React.FC = () => {
  const { classes, theme } = styleMenuMobileStyle();
  const { state, dispatch } = useContext(Context);

  const status = state.menu.status === "open" ? true : false

  const handleClose = () => {
    dispatch({
      type: AppMenuTypes.CLOSE_MENU
    })
  }

  return (
    <Drawer
      opened={status ? true : false}
      title=""
      onClose={handleClose}
      closeOnClickOutside
      size={240}
      classNames={{
        header: classes.header,
        body:classes.body,
      }}
    >
      <Stack className={classes.root}>
        <Stack spacing={0}>
          <Group
            position="left"
            className={classes.control}
            onClick={handleClose}
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
                <MenuMobileOption
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