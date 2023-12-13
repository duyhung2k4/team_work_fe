import { Group, Stack, Text } from "@mantine/core";
import { DataTableColumn } from "mantine-datatable";
import React from "react";
import { styleTableScreenMobileCard } from "./styles";

export interface TableScreenMobileCardProps {
  record: Record<string, any>
  field: DataTableColumn<any>[]
  onClick?: (record: any) => void
}
export const TableScreenMobileCard: React.FC<TableScreenMobileCardProps> = (props) => {
  const { classes } = styleTableScreenMobileCard();

  return (
    <Stack
      spacing={0}
      className={classes.root}
      onClick={() => {
        props.onClick && props.onClick(props.record)
      }}
    >
      <Group
        position="apart"
        className={classes.content}
      ></Group>
      {
        props.field.map((f, index) => {
          const cutField = f.accessor.split(".");
          let value = props.record as any;
          cutField.forEach((field) => {
            value = value[field];
          });

          if(f.render) {
            value = f.render(props.record, index);
          }
          return (
            <Stack
              spacing={0}
              style={{
                padding: 8,
              }}
              key={index}
            >
              <Text style={{ fontWeight: 600 }}>{f.title}</Text>
              <Text>{value}</Text>
            </Stack>
          )
        }
        )
      }
    </Stack>
  )
}