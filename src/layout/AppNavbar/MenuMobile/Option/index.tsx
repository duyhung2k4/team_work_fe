import React, { useContext, useEffect, useState } from "react";

import { SPACING_ICON_WIDTH_NAME_OPTION } from "@/constant/screen";
import { Box, Group } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { styleOptionMenuStyle } from "./styles";
import { Context } from "@/context/app.context";
import { getPath } from "@/utils/path";
import { AppMenuTypes } from "@/context/menu/action";

export interface MenuMobileOptionProps {
  href: string
  name: string
  icon: React.ReactNode
}
const MenuMobileOption: React.FC<MenuMobileOptionProps> = (props) => {
  const { classes } = styleOptionMenuStyle();
  const [active, setActive] = useState<boolean>(false);
  const { dispatch } = useContext(Context);

  const navigation = useNavigate();
  const url = getPath().url;

  useEffect(() => {
    setActive(props.href === url ? true : false);
  }, [url]);

  const handleNavigate = () => {
    navigation(props.href);
    dispatch({
      type: AppMenuTypes.CLOSE_MENU,
    })
  }

  return (
    <Group
      spacing={SPACING_ICON_WIDTH_NAME_OPTION}
      className={`${classes.root} ${active ? classes.active : ""}`}
      onClick={handleNavigate}
    >
      <Box className={classes.icon}>
        {props.icon}
      </Box>
      <Link
        to={props.href}
        className={`${classes.name} ${active ? classes.active : ""}`}
      >{props.name}</Link>
    </Group>
  )
}

export default MenuMobileOption;