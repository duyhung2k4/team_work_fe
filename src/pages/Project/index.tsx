import React, { useEffect, useMemo, useState } from "react";
import TableCustom from "@/components/Table";
import DrawerCustom from "@/components/DrawerCustom";

import { Box, Text } from "@mantine/core";
import { FieldTableProject } from "./source.columns";
import { DataTableColumn } from "mantine-datatable";
import FormCreateProject from "@/form/createProject";
import { FORM_ID } from "@/form/form.id";
import { useGetProjectCreateQuery, useGetProjectJoinedQuery } from "@/redux/query/api/project";
import { ProjectModel } from "@/model/project";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { ROUTER } from "@/constant/router";

const Project: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const {
    data: projectCreate,
    refetch: refetchProjectCreate,
    isFetching: fetchingProjectCreate,
  } = useGetProjectCreateQuery(null);

  const {
    data: projectJoined,
    refetch: refetchProjectJoined,
    isFetching: fetchingProjectJoined,
  } = useGetProjectJoinedQuery(null);

  const columnsTableProject: DataTableColumn<FieldTableProject>[] = [
    {
      accessor: "code",
      title: "Mã dự án",
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
      accessor: "name",
      title: "Tên dự án",
      textAlignment: "left",
      width: 250,
      ellipsis: true,
    },
    {
      accessor: "creater.name",
      title: "Chủ sở hữu",
      textAlignment: "left",
      width: 300,
      ellipsis: true,
    },
    {
      accessor: "updatedAt",
      title: "Ngày tạo",
      textAlignment: "left",
      width: 300,
      ellipsis: true,
      render: (records, index) => <Text key={index}>{dayjs(records.createAt).format("DD/MM/YYYY")}</Text>
    }
  ]


  const navigation = useNavigate();

  const loading = useMemo(() => {
    return fetchingProjectCreate || fetchingProjectJoined;
  }, [fetchingProjectCreate, fetchingProjectJoined]);

  const records: ProjectModel[] = useMemo(() => {
    const listProjectCreate = projectCreate?.data || [];
    const listProjectJoined = projectJoined?.data || [];
    return [...listProjectCreate, ...listProjectJoined];
  }, [projectCreate, projectJoined]);

  useEffect(() => {
    refetchProjectCreate();
    refetchProjectJoined();
  }, []);


  const handleRefetch = () => {
    refetchProjectCreate();
    refetchProjectJoined();
  }

  const handleNavigationTask = (record: ProjectModel) => {
    if (!record.id) {
      return;
    }

    const url = ROUTER.PROTECTED.TASK.INDEX.replace(":project_id", `${record.id}`);
    navigation(url);
  }

  return (
    <Box
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <TableCustom
        columns={columnsTableProject}
        records={records}
        onCreate={() => setOpen(true)}
        onReload={handleRefetch}
        onRowClick={handleNavigationTask}
        loading={loading}
        placeholderSearch="Tên dự án"
        textButtonCreate="Thêm một dự án"
      />
      <DrawerCustom
        opened={open}
        setStatus={setOpen}
        title="Thêm mới dự án"
        formId={FORM_ID.CREATE_PROJECT}
      >
        <FormCreateProject
          cb={() => {
            setOpen(false);
            handleRefetch();
          }}
        />
      </DrawerCustom>
    </Box>
  )
}

export default Project;