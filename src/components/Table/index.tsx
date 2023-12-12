import React from "react";
import { Box, Group, TextInput, Tooltip } from "@mantine/core";
import { DataTable, DataTableColumn } from "mantine-datatable";
import { IconLayoutGridAdd, IconSearch } from "@tabler/icons-react";
import { styleTableCustom } from "./styled";

export interface TableCustomProps {
  columns: DataTableColumn<any>[];
  records: any[];
}
const TableCustom: React.FC<TableCustomProps> = (props) => {
  const { classes } = styleTableCustom();
  const arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push({
      name: `Dự án ${i + 1}`,
      creater: "Duy Hùng",
      createAt: "12/12/2023",
      finishAt: "15/12/2023",
    })
  }

  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
      }}
    >
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
          icon={<IconSearch size={22}/>}
          placeholder="Tên dự án"
        />
        <Group>
          <Tooltip label="Thêm một dự án">
            <IconLayoutGridAdd
              style={{
                cursor: "pointer"
              }}
            />
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
        columns={props.columns}
        records={props.records}
      />
    </Box>
  )
}

export default TableCustom;