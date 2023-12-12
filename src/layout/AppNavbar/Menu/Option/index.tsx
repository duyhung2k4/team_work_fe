import React, { useContext, useEffect, useState } from "react";
import { Box, Group } from "@mantine/core";
import { styleMenuOption } from "./styled";
import { useNavigate } from "react-router";
import { getPath } from "@/utils/path";
import { SPACING_ICON_WIDTH_NAME_OPTION } from "@/constant/screen";
import { Context } from "@/context/app.context";
import { Link } from "react-router-dom";
import { AppMenuTypes } from "@/context/menu/action";

export interface MenuOptionProps {
  href: string
  name: string
  icon: React.ReactNode
}
const MenuOption: React.FC<MenuOptionProps> = (props) => {
  const [active, setActive] = useState<boolean>(false);
  const { classes } = styleMenuOption();
  const { state, dispatch } = useContext(Context);

  const navigation = useNavigate();
  const url = getPath().url;

  useEffect(() => {
    setActive(props.href === url ? true : false);
  }, [url]);

  const handleNavigate = () => {
    navigation(props.href);
    dispatch({
      type: AppMenuTypes.SET_PATHNAME,
      payload: props.href,
    });
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
      >{state.menu.status === "open" ? props.name : ""}</Link>
    </Group>
  )
}

export default MenuOption;