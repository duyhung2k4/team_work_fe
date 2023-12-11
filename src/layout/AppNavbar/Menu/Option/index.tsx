import { Group, Text } from "@mantine/core";
import React, { useState } from "react";
import { styleMenuOption } from "./styled";
import { useNavigate } from "react-router";

export interface MenuOptionProps {
  href: string
  name: string
  icon: React.ReactNode
}
const MenuOption: React.FC<MenuOptionProps> = (props) => {
  const [active, setActive] = useState<boolean>(false);
  const { classes } = styleMenuOption();

  const navigation = useNavigate();

  return (
    <Group 
      spacing={8} 
      className={classes.root}
      onClick={() => navigation(props.href)}
    >
      {props.icon}
      <Text className={classes.name}>{props.name}</Text>
    </Group>
  )
}

export default MenuOption;