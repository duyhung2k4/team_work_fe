import { DataTableColumn } from "mantine-datatable";

export interface FieldTableProject {
  name: string,
  creater: string
  createAt: string
  finishAt: string
}
export const columnsTableProject: DataTableColumn<FieldTableProject>[] = [
  {
    accessor: "name",
    title: "Tên dự án",
    textAlignment: "left",
    width: 200,
    ellipsis: true,
    cellsSx: {
      position: "sticky",
      zIndex: 1,
      left: 0,
      backgroundColor: "inherit",
      borderRight: `1px solid #dee2e6 !important`,
    },
    titleSx: {
      position: "sticky",
      zIndex: 1,
      left: 0,
      backgroundColor: "inherit",
      opacity: 1,
      borderRight: `1px solid #dee2e6 !important`,
    }
  },
  {
    accessor: "creater",
    title: "Chủ sở hữu",
    textAlignment: "left",
    width: 250,
    ellipsis: true,
  },
  {
    accessor: "createAt",
    title: "Ngày tạo",
    textAlignment: "left",
    width: 300,
    ellipsis: true,
  },
  {
    accessor: "finishAt",
    title: "Ngày hoàn thành",
    textAlignment: "left",
    width: 300,
    ellipsis: true,
  }
]