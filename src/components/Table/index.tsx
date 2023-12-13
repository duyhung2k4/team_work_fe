import React from "react";

import { TableScreenPC } from "./ScreenPC";
import { DataTableColumn } from "mantine-datatable";
import { useScreen } from "@/hook/useScreen";
import { TableScreenMobile } from "./Mobile";

export interface TableCustomProps {
  columns: DataTableColumn<any>[];
  records: any[];
  placeholderSearch: string
  textButtonCreate: string
  onCreate?: () => void
  onReload?: () => void
  onRowClick?: (record: any) => void
  loading?: boolean
  pinLastColumn?: boolean
}
const TableCustom: React.FC<TableCustomProps> = (props) => {
  const { width } = useScreen();
  return (
    <>
      {width > 600 ? <TableScreenPC {...props}/> : <TableScreenMobile {...props}/>}
    </>
  )
}

export default TableCustom;