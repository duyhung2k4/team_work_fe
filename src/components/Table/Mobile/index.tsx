import React from "react";
import { TableCustomProps } from "..";
import { Button, Group, LoadingOverlay, Stack, TextInput, Tooltip } from "@mantine/core";
import { TableScreenMobileCard } from "./Card";
import { IconLayoutGridAdd, IconReload, IconSearch } from "@tabler/icons-react";
import { styleTableScreenMobile } from "./styles";
import { useScreen } from "@/hook/useScreen";

export const TableScreenMobile: React.FC<TableCustomProps> = (props) => {
  const { classes } = styleTableScreenMobile();
  const { width } = useScreen();
  const sizeIcon = width <= 600 ? 14 : undefined;

  return (
    <Stack
      style={{
        height: "100%",
      }}
    >
      <LoadingOverlay
        visible={props.loading ? props.loading : false}
        radius={30}
      />
      <Stack
        style={{
          height: `calc(100% - ${48})`,
          overflowY: "scroll",
        }}
      >
        {
          props.records.map((r, index) =>
            <TableScreenMobileCard
              key={index}
              record={r}
              field={props.columns}
              onClick={props.onRowClick}
            />
          )}
      </Stack>
      <Group
        style={{
          height: 48,
        }}
        position="apart"
      >
        <TextInput
          classNames={{
            root: classes.inputRoot,
            wrapper: classes.inputWarper,
            input: classes.input,
          }}
          icon={<IconSearch size={22} />}
          placeholder={props.placeholderSearch}
        />
        <Group>
          <Tooltip label="Làm mới">
            <Button onClick={props.onReload}>
              <IconReload
                style={{
                  cursor: "pointer"
                }}
                size={sizeIcon}
              />
            </Button>
          </Tooltip>
          <Tooltip label={props.textButtonCreate}>
            <Button 
              onClick={props.onCreate}
              display={props.onCreate ? undefined : "none"}
            >
              <IconLayoutGridAdd
                style={{
                  cursor: "pointer"
                }}
                size={sizeIcon}
              />
            </Button>
          </Tooltip>
        </Group>
      </Group>
    </Stack>
  )
}