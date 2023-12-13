import { Stack, TextInput } from "@mantine/core";
import React from "react";
import { FORM_ID } from "../form.id";
import { useForm } from "@mantine/form";
import { RequestCreateProject } from "@/dto/request/project.request";
import { useCreateProjectMutation } from "@/redux/query/api/project";
import { useNotification } from "@/hook/useNotification";

export interface FormCreateProjectProps {
  cb?: () => void
}
const FormCreateProject: React.FC<FormCreateProjectProps> = (props) => {

  const [create] = useCreateProjectMutation();
  const noti = useNotification();

  const form = useForm<RequestCreateProject>({
    initialValues: {
      name: "",
    },
    validate: {
      name: (value: string) => value.length === 0 ? "Yêu cầu nhập tên dự á" : null,
    },
  });

  const handleCreate = async (value: RequestCreateProject) => {
    const result = await create(value);

    if("error" in result) {
      noti.error("Tạo dự án thất bại");
      return
    }

    noti.success("Tạo dự án thành công");
    props.cb && props.cb();
  }

  return (
    <form 
      id={FORM_ID.CREATE_PROJECT}
      onSubmit={form.onSubmit(handleCreate)}
    >
      <Stack>
        <TextInput
          label="Tên dự án"
          placeholder="Tên dự án"
          {...form.getInputProps("name")}
        />
      </Stack>
    </form>
  )
}

export default FormCreateProject;