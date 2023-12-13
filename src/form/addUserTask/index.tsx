import React, { useEffect, useMemo } from "react";
import { UserProject } from "@/dto/response/project";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { Checkbox, LoadingOverlay, Stack } from "@mantine/core";
import { TaskModel } from "@/model/task";
import Loading from "@/layout/Loading";
import { useAddUserTaskMutation, useGetAllUserTaskQuery, useRemoveUserTaskMutation } from "@/redux/query/api/task";
import { useNotification } from "@/hook/useNotification";

export interface FormAddUserTaskProps {
  task?: TaskModel
}
const FormAddUserTask: React.FC<FormAddUserTaskProps> = (props) => {
  const userOfProject: UserProject[] = useAppSelector((state: RootState) => state.project.userOfProject) || [];
  const [addUser, { isLoading: loadingAdd }] = useAddUserTaskMutation();
  const [removeUser, { isLoading: loadRemove }] = useRemoveUserTaskMutation();
  const noti = useNotification();

  const {
    data,
    refetch,
    isLoading: loadGet
  } = useGetAllUserTaskQuery(null);
  const allUserOfTask = data?.data || [];

  const loading = useMemo(() => {
    return loadingAdd || loadGet || loadRemove;
  }, [loadingAdd, loadGet, loadRemove]);

  useEffect(() => {
    refetch();
  }, []);

  if (!props.task) {
    return <Loading />
  }
  const taskProfiles = allUserOfTask.filter((t) => t.taskId === props.task?.id);

  const handleAdd = async (credentialId: number) => {
    if (!props.task?.id) {
      noti.error("Thất bại");
      return;
    }

    const result = await addUser({
      credentialId,
      taskId: props.task.id,
    });

    if ("error" in result) {
      noti.error("Thất bại");
      return;
    }

    refetch();
  }

  const handeRemove = async (credentialId: number) => {
    if (!props.task?.id) {
      noti.error("Thất bại");
      return;
    }

    const result = await removeUser({
      credentialId,
      taskId: props.task.id,
    });

    if ("error" in result) {
      noti.error("Thất bại");
      return;
    }

    refetch();
  }


  return (
    <Stack>
      <LoadingOverlay visible={loading} />
      <Checkbox
        label={`${props.task.creater?.name} (Chủ sở hữu)`}
        checked={
          taskProfiles.find((t) => t.implementerId === props.task?.createrId) !== undefined
            ? true : false
        }
        onClick={() => {
          if (!props.task?.createrId) {
            noti.error("Thất bại");
            return;
          }
          const checked = taskProfiles.find((t) => t.implementerId === props.task?.createrId) !== undefined
          ? true : false
          if(checked) {
            handeRemove(props.task.createrId)
          } else {
            handleAdd(props.task.createrId)
          }
        }}
      />
      {
        userOfProject.map((u, index) => {
          const checked = taskProfiles.find((t) => t.implementerId === u.projectProfile.profileId) !== undefined
            ? true : false

          return (
            <Checkbox
              key={index}
              label={u.credential.profile?.name}
              onClick={() => {
                if(checked) {
                  handeRemove(u.projectProfile.profileId)
                } else {
                  handleAdd(u.projectProfile.profileId)
                }
              }}
              checked={checked}
            />
          )
        }
        )
      }
    </Stack>
  )
}

export default FormAddUserTask;