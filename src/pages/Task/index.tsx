import React, { useEffect } from "react";
import { Box, Group, Tabs, Text } from '@mantine/core';
import {
  IconMessageCircle,
  IconSettings,
  IconSubtask,
  IconX,
} from '@tabler/icons-react';
import Loading from "@/layout/Loading";
import Member from "./Member";

import { styleTask } from "./styles";
import { useGetProjectJoinedDetailQuery, useGetProjectCreateDetailQuery } from "@/redux/query/api/project";
import { useNavigate, useParams } from "react-router";
import ManageTask from "./ManageTask";
import { ROUTER } from "@/constant/router";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

const Task: React.FC = () => {
  const { classes } = styleTask();
  const { project_id } = useParams();
  const navigate = useNavigate();

  const projectCreateDetail = useAppSelector((state: RootState) => state.project.projectCreatedDetail);
  const projectJoinedDetail = useAppSelector((state: RootState) => state.project.projectJoinedDetail);
  const project = projectCreateDetail || projectJoinedDetail;

  if (project_id === undefined) {
    return <Loading />
  }

  const { refetch: refetchJoined } = useGetProjectJoinedDetailQuery(Number(project_id));
  const { refetch: reftchCreated } = useGetProjectCreateDetailQuery(Number(project_id));

  useEffect(() => {
    refetchJoined();
    reftchCreated();
  }, []);

  return (
    <Box h={"100%"}>
      <Group position="apart">
        <Text>
          <span style={{ fontWeight: 600 }}>Tên dự án:</span> {project?.name}
          &nbsp;/&nbsp; 
          <span style={{ fontWeight: 600 }}>Mã dự án:</span> {project?.code}
        </Text>
        <IconX
          style={{
            cursor: "pointer",
          }}
          onClick={() => navigate(ROUTER.PROTECTED.PROJECT.INDEX)}
          color="gray"
        />
      </Group>
      <Box h={"calc(100% - 64px)"}>
        <Tabs
          defaultValue="task"
          classNames={{
            root: classes.root,
            tabRightSection: classes.tabRightSection,
            tab: classes.tab,
            panel: classes.panel,
            tabsList: classes.tabsList,
          }}
        >
          <Tabs.List>
            <Tabs.Tab value="task" icon={<IconSubtask size="0.8rem" />}>Tác vụ</Tabs.Tab>
            <Tabs.Tab value="member" icon={<IconMessageCircle size="0.8rem" />}>Thành viên</Tabs.Tab>
            <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>Cài đặt</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel h={"100%"} value="task" pt="xs">
            <ManageTask />
          </Tabs.Panel>

          <Tabs.Panel value="member" pt="xs">
            <Member />
          </Tabs.Panel>

          <Tabs.Panel value="settings" pt="xs">
            Settings tab content
          </Tabs.Panel>
        </Tabs>
      </Box>
    </Box>
  )
}

export default Task;