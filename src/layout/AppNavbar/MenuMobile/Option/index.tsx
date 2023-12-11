import { SPACING_ICON_WIDTH_NAME_OPTION } from "@/constant/screen";
import { Box, Group } from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styleOptionMenuStyle } from "./styles";
import { Context } from "@/context/app.context";
import { getPath } from "@/utils/path";

export interface MenuMobileOptionProps {
  href: string
  name: string
  icon: React.ReactNode
}
const MenuMobileOption: React.FC<MenuMobileOptionProps> = (props) => {
  const { classes } = styleOptionMenuStyle();
  const [active, setActive] = useState<boolean>(false);
  const { state } = useContext(Context);

  const navigation = useNavigate();
  const url = getPath().url;

  useEffect(() => {
    setActive(props.href === url ? true : false);
  }, [url]);
  return (
    <Group
      spacing={SPACING_ICON_WIDTH_NAME_OPTION}
      className={`${classes.root} ${active ? classes.active : ""}`}
      onClick={() => navigation(props.href)}
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

export default MenuMobileOption;