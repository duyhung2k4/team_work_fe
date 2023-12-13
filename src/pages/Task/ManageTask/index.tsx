import React, { useEffect, useMemo, useState } from "react";
import DrawerCustom from "@/components/DrawerCustom";
import FormTask from "@/form/task";
import TableCustom from "@/components/Table";
import dayjs from "dayjs";

import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { Box, Group, Text, Tooltip } from "@mantine/core";
import { FORM_ID } from "@/form/form.id";
import { useGetAllUserTaskQuery, useGetTaskQuery } from "@/redux/query/api/task";
import { DataTableColumn } from "mantine-datatable";
import { LEVEL_OBJECT_UPPER, STATUS_OBJECT_UPPER, TaskModel } from "@/model/task";
import { IconAddressBook } from "@tabler/icons-react";
import FormAddUserTask from "@/form/addUserTask";



const ManagerTask: React.FC = () => {
  const projectCreateDetail = useAppSelector((state: RootState) => state.project.projectCreatedDetail);
  const projectJoinedDetail = useAppSelector((state: RootState) => state.project.projectJoinedDetail);
  const user = useAppSelector((state: RootState) => state.profile.credential);

  const [open, setOpen] = useState<boolean>(false);
  const [addUser, setAddUser] = useState<boolean>(false);
  const [defaultTask, setDefaultTask] = useState<TaskModel | undefined>(undefined);

  const {
    data: dataFetch,
    refetch,
    isFetching,
  } = useGetTaskQuery(projectCreateDetail?.id || projectJoinedDetail?.id || 0);
  const taskOfProject = dataFetch?.data || [];

  const {
    data: dataAllFetch,
    refetch: refetchAll,
  } = useGetAllUserTaskQuery(null);
  const allTaskProfile = dataAllFetch?.data || [];

  const record = useMemo(() => {
    if(projectCreateDetail !== undefined) {
      return taskOfProject;
    }

    const listData: TaskModel[] = [];
    for(let i = 0; i < taskOfProject.length; i++) {
      for(let j = 0; j < allTaskProfile.length; j++) {
        if(
          allTaskProfile[j].implementerId === user?.profileId && 
          allTaskProfile[j].taskId === taskOfProject[i].id
        ) {
          listData.push(taskOfProject[i]);
          break;
        }
      }
    }
    return listData;
  }, [taskOfProject, allTaskProfile])

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
  ]

  if (projectCreateDetail !== undefined) {
    colums.push({
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
    })
  }

  useEffect(() => {
    if (addUser) {
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
        records={record}
        onCreate={projectCreateDetail !== undefined ? () => setOpen(true) : undefined}
        onReload={() => {
          refetch();
          refetchAll();
        }}
        onRowClick={(record) => {
          if (!addUser) {
            setDefaultTask(record as TaskModel);
            setOpen(true);
          }
        }}
        pinLastColumn={projectCreateDetail ? true : false}
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
            refetchAll();
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
        showFooter={false}
      >
        <FormAddUserTask
          task={defaultTask}
        />
      </DrawerCustom>
    </Box>
  )
}

export default ManagerTask;