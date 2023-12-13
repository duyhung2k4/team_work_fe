import React, { useEffect, useState } from "react";
import DrawerCustom from "@/components/DrawerCustom";
import FormTask from "@/form/task";
import TableCustom from "@/components/Table";
import dayjs from "dayjs";

import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { Box, Group, Text, Tooltip } from "@mantine/core";
import { FORM_ID } from "@/form/form.id";
import { useGetTaskQuery } from "@/redux/query/api/task";
import { DataTableColumn } from "mantine-datatable";
import { LEVEL_OBJECT_UPPER, STATUS_OBJECT_UPPER, TaskModel } from "@/model/task";
import { IconAddressBook } from "@tabler/icons-react";
import FormAddUserTask from "@/form/addUserTask";



const ManagerTask: React.FC = () => {
  const projectCreateDetail = useAppSelector((state: RootState) => state.project.projectCreatedDetail);
  
  const [open, setOpen] = useState<boolean>(false);
  const [addUser, setAddUser] = useState<boolean>(false);
  const [defaultTask, setDefaultTask] = useState<TaskModel | undefined>(undefined);

  const {
    data,
    refetch,
    isFetching,
  } = useGetTaskQuery(projectCreateDetail?.id || 0);

  const colums: DataTableColumn<TaskModel>[] = [
    {
      accessor: "name",
      title: "Tên tác vụ",
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
      accessor: "creater.name",
      title: "Người tạo",
      width: 200,
      ellipsis: true,
    },
    {
      accessor: "startAt",
      title: "Ngày tạo",
      width: 200,
      ellipsis: true,
      render: (record, index) => <Text key={index}>{dayjs(record.startAt).format("DD/MM/YYYY-HH:mm")}</Text>
    },
    {
      accessor: "finishAt",
      title: "Ngày kết thúc",
      width: 200,
      ellipsis: true,
      render: (record, index) => 
        <Text key={index}>{
          dayjs(record.finishAt).format("YYYY") === "0001" ? "" : 
          dayjs(record.finishAt).format("DD/MM/YYYY-HH:mm")
        }</Text>
    },
    {
      accessor: "status",
      title: "Trạng thái",
      width: 200,
      ellipsis: true,
      render: (record, index) => <Text key={index}>{STATUS_OBJECT_UPPER[record.status]}</Text>
    },
    {
      accessor: "level",
      title: "Độ ưu tiên",
      width: 200,
      ellipsis: true,
      render: (record, index) => <Text key={index}>{LEVEL_OBJECT_UPPER[record.level]}</Text>
    },
    {
      accessor: "detail",
      title: "Mô tả",
      width: 200,
      render: (record, index) => (
        <Tooltip 
          key={index} 
          label={record.detail}
        >
          <Text
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >{record.detail}</Text>
        </Tooltip>
      )
    },
    {
      accessor: "action",
      title: "Thao tác",
      textAlignment: "center",
      width: 150,
      render: (_, index) => {
        return (
          <Group 
            position="center" key={index}
            onClick={() => {
              setAddUser(true);
            }}
          >
            <IconAddressBook color="#1B3276" />
          </Group>
        )
      }
    }
  ]

  useEffect(() => {
    if(addUser) {
      setOpen(false);
    }
  }, [addUser]);

  return (
    <Box
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <TableCustom
        columns={colums}
        records={data?.data || []}
        onCreate={projectCreateDetail !== undefined ? () => setOpen(true) : undefined}
        onReload={refetch}
        onRowClick={(record) => {
          if(!addUser) {
            setDefaultTask(record as TaskModel);
            setOpen(true);
          }
        }}
        pinLastColumn
        loading={isFetching}
        placeholderSearch="Tên tác vụ"
        textButtonCreate="Thêm một tác vụ"
      />


      <DrawerCustom
        opened={open}
        setStatus={setOpen}
        onClose={() => setDefaultTask(undefined)}
        title={defaultTask ? "Cập nhật tác vụ" : `Thêm mới tác vụ`}
        formId={FORM_ID.CREATE_TASK}
      >
        <FormTask
          cb={() => {
            setOpen(false);
            refetch();
          }}
          defaultValue={defaultTask}
        />
      </DrawerCustom>

      <DrawerCustom
        opened={addUser}
        setStatus={setAddUser}
        onClose={() => {
          setDefaultTask(undefined);
        }}
        title={"Giao tác vụ"}
        formId={FORM_ID.CREATE_TASK}
      >
        <FormAddUserTask
          task={defaultTask}
        />
      </DrawerCustom>
    </Box>
  )
}

export default ManagerTask;