import React from "react";
import { TableCustomProps } from "..";
import { Group, LoadingOverlay, Stack, TextInput, Tooltip } from "@mantine/core";
import { TableScreenMobileCard } from "./Card";
import { IconLayoutGridAdd, IconReload, IconSearch } from "@tabler/icons-react";
import { styleTableScreenMobile } from "./styles";

export const TableScreenMobile: React.FC<TableCustomProps> = (props) => {
  const { classes } = styleTableScreenMobile();

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
          placeholder="Tên dự án"
        />
        <Group>
          <Tooltip label="Làm mới">
            <IconReload
              onClick={props.onReload}
              style={{
                cursor: "pointer"
              }}
            />
          </Tooltip>
          <Tooltip label="Thêm một dự án">
            <IconLayoutGridAdd
              onClick={props.onCreate}
              style={{
                cursor: "pointer"
              }}
            />
          </Tooltip>
        </Group>
      </Group>
    </Stack>
  )
}