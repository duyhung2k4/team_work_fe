import React, { useEffect } from "react";
import { Tabs } from '@mantine/core';
import { 
  IconMessageCircle, 
  IconSettings, 
  IconSubtask,
} from '@tabler/icons-react';
import Loading from "@/layout/Loading";
import Member from "./Member";

import { styleTask } from "./styles";
import { useGetProjectJoinedDetailQuery, useGetProjectCreateDetailQuery } from "@/redux/query/api/project";
import { useParams } from "react-router";
import ManageTask from "./ManageTask";

const Task: React.FC = () => {
  const { classes } = styleTask();
  const { project_id } = useParams();

  if(project_id === undefined) {
    return <Loading/>
  }

  const { refetch: refetchJoined } = useGetProjectJoinedDetailQuery(Number(project_id));
  const { refetch: reftchCreated } = useGetProjectCreateDetailQuery(Number(project_id));

  useEffect(() => {
    refetchJoined();
    reftchCreated();
  }, []);

  return (
    <Tabs 
      defaultValue="task"
      classNames={{
        root: classes.root,
        tabRightSection: classes.tabRightSection,
        tab: classes.tab,
        panel: classes.panel,
        tabsList: classes.tabsList,
      }}
      keepMounted
    >
      <Tabs.List>
        <Tabs.Tab value="task" icon={<IconSubtask size="0.8rem" />}>Tác vụ</Tabs.Tab>
        <Tabs.Tab value="member" icon={<IconMessageCircle size="0.8rem" />}>Thành viên</Tabs.Tab>
        <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>Cài đặt</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="task" pt="xs">
        <ManageTask/>
      </Tabs.Panel>

      <Tabs.Panel value="member" pt="xs">
        <Member/>
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  )
}

export default Task;