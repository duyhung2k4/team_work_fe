import React, { useMemo } from "react";
import { LEVEL, LEVEL_OBJECT, LEVEL_OBJECT_KEY, STATUS, STATUS_OBJECT, STATUS_OBJECT_KEY, TaskModel } from "@/model/task";
import { LoadingOverlay, Select, Stack, TextInput, Textarea } from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { FORM_ID } from "../form.id";
import dayjs from "dayjs";
import { useParams } from "react-router";
import Loading from "@/layout/Loading";
import { CreateTaskRequest } from "@/dto/request/task.request";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useCreateTaskMutation, useUpdateTaskMutation } from "@/redux/query/api/task";
import { useNotification } from "@/hook/useNotification";

interface FieldFormTask {
  name: string
  level: LEVEL
  finishAt?: Date
  timeFinishAt?: Date
  status: STATUS
  detail: string
}

export interface FormTaskProps {
  cb?: () => void
  defaultValue?: TaskModel,
}
const FormTask: React.FC<FormTaskProps> = (props) => {
  const user = useAppSelector((state: RootState) => state.profile.credential);
  const noti = useNotification();

  const { project_id } = useParams();
  if(project_id === undefined || user === null || user === undefined) {
    return <Loading/>
  }

  const [create, { isLoading: loadingCreate }] = useCreateTaskMutation();
  const [update, { isLoading: loadingUpdate }] = useUpdateTaskMutation();

  const loading = useMemo(() => {
    return loadingCreate || loadingUpdate;
  }, [loadingCreate, loadingUpdate]);

  const form = useForm<FieldFormTask>({
    initialValues: {
      name: props.defaultValue?.name || "",
      level: props.defaultValue?.level || LEVEL.NONE,
      detail: props.defaultValue?.detail || "",
      status: props.defaultValue?.status || STATUS.OPEN,
    },
    validate: {
      name: (value: string) => value.length === 0 ? "Yêu cầu nhập tên tác vụ" : null,
      timeFinishAt: (value, values) => 
        (value !== undefined || values.finishAt !== undefined) &&  
        dayjs(dayjs().format("YYYY-MM-DD"))
        .isAfter(
          dayjs(`${dayjs(values.finishAt || "0001-01-01").format("YYYY-MM-DD")} ${value || "00:00"}:00`)
        )
        ? "Ngày kết thúc phải lớn hơn hiện tại" : null
    }
  });

  const handleSubmit = async (values: FieldFormTask) => {
    if(!user?.id) {
      return;
    }

    let finishAt = undefined;
    if(values.finishAt !== undefined) {
      finishAt = 
        values.finishAt === undefined ? undefined : 
        dayjs(`${dayjs(values.finishAt).format("YYYY-MM-DD")} ${values.timeFinishAt || "00:00"}:00`).toDate();
    }

    const newTask: CreateTaskRequest = {
      createrId: user.profileId,
      projectId: Number(project_id),
      name: values.name,
      level: values.level,
      startAt: dayjs().toDate(),
      finishAt,
      status: values.status,
      detail: values.detail,
    }

    if(props.defaultValue) {
      const updateTask: TaskModel = {
        ...props.defaultValue,
        ...newTask,
      } as TaskModel;

      const result = await update(updateTask);
      if("error" in result) {
        noti.error("Cập nhật tác vụ thất bại");
        return;
      }
      
      noti.success("Cập nhật tác vụ thành công");
      props.cb && props.cb();
    } else {
      const result = await create(newTask);
      if("error" in result) {
        noti.error("Thêm tác vụ thất bại");
        return;
      }
      
      noti.success("Thêm tác vụ thành công");
      props.cb && props.cb();
    }
  }

  const isOwnerProject = props.defaultValue?.createrId === user.profileId ? true : false;

  return (
    <form 
      id={FORM_ID.CREATE_TASK}
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <LoadingOverlay visible={loading}/>
      <Stack>
        <TextInput
          withAsterisk
          label="Tên tác vụ"
          placeholder="Tên tác vụ"
          readOnly={!isOwnerProject}
          {...form.getInputProps("name")}
        />
        <Select
          withAsterisk
          label="Độ ưu tiên"
          placeholder="Độ ưu tiên"
          readOnly={!isOwnerProject}
          data={Object.keys(LEVEL_OBJECT).map((key: string) => ({
            label: LEVEL_OBJECT[key as LEVEL_OBJECT_KEY],
            value: LEVEL[key as LEVEL_OBJECT_KEY]
          }))}
          {...form.getInputProps("level")}
        />
        <Select
          display={props.defaultValue ? undefined : "none"}
          withAsterisk
          label="Trạng thái"
          placeholder="Trạng thái"
          data={
            Object.keys(STATUS_OBJECT).map((key: string) => ({
              label: STATUS_OBJECT[key as STATUS_OBJECT_KEY],
              value: STATUS[key as STATUS_OBJECT_KEY]
            }))
          }
          {...form.getInputProps("status")}
        />
        <DatePickerInput
          yearLabelFormat="YYYY"
          monthLabelFormat="MM-YYYY"
          label="Ngày kết thúc"
          readOnly={!isOwnerProject}
          placeholder="Ngày kết thúc"
          icon={<IconCalendar />}
          {...form.getInputProps("finishAt")}
        />
        <TimeInput
          label="Giờ kết thúc"
          placeholder="Giờ kết thúc"
          readOnly={!isOwnerProject}
          {...form.getInputProps("timeFinishAt")}
        />
        <Textarea
          label="Mô tả"
          placeholder="Mô tả"
          readOnly={!isOwnerProject}
          styles={{
            input: {
              height: "120px !important"
            }
          }}
          {...form.getInputProps("detail")}
        />
      </Stack>
    </form>
  )
}

export default FormTask;