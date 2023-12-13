import React from "react";
import { Box, Button, Group, LoadingOverlay, TextInput, Tooltip } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { IconLayoutGridAdd, IconReload, IconSearch } from "@tabler/icons-react";
import { styleTableCustom } from "./styled";
import { TableCustomProps } from "..";

export const TableScreenPC: React.FC<TableCustomProps> = (props) => {
  const { classes } = styleTableCustom();

  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <LoadingOverlay
        visible={props.loading ? props.loading : false}
        radius={30}
      />
      <Group
        style={{
          padding: "7px 10px",
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
              />
            </Button>
          </Tooltip>
        </Group>
      </Group>
      <DataTable
        style={{
          height: `calc(100% - ${40}px)`
        }}
        highlightOnHover
        striped
        rowStyle={{
          cursor: "pointer",
        }}
        pinLastColumn={props.pinLastColumn}
        onRowClick={props.onRowClick}
        columns={props.columns}
        records={props.records}
      />
    </Box>
  )
}