import React from "react";
import { PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FormFieldRegister } from "./field";
import { formId } from "../form.id";
import { useSendRegisterInfoMutation } from "@/redux/query/api/register.api";
import { ROLE } from "@/model/role";
import { useNotification } from "@/hook/useNotification";

const FormRegister: React.FC = () => {

  const [post] = useSendRegisterInfoMutation();
  const notification = useNotification();
  
  const form = useForm<FormFieldRegister>({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      username: (value: string) => value.length < 2 ? "Tên quá ngắn" : (value.length > 50 ? "Tên quá dài" : null),
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : "Email không hợp lệ"),
      password: (value: string) => value.length < 6 || value.length > 16 ? "Mật khẩu chỉ chứa từ 6 đến 16 kí tự" : null,
      confirmPassword: (value: string, values: FormFieldRegister) => value !== values.password ? "Sai mật khẩu" : null,
    }
  });

  const handleSubmit = async (values: FormFieldRegister) => {
    const result = await post({
      username: values.username,
      password: values.password,
      email: values.email,
      role: ROLE.USER,
    });

    if("error" in result) {
      notification.error("Email đã tồn tại");
      return;
    }

    console.log(result);
  }

  return (
    <form id={formId.register} onSubmit={form.onSubmit(handleSubmit)}>
      <Stack spacing={20}>
        <TextInput
          withAsterisk
          placeholder="Tên đăng nhập"
          {...form.getInputProps("username")}
        />
        <TextInput
          withAsterisk
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          withAsterisk
          placeholder="Mật khẩu"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          withAsterisk
          placeholder="Nhắc lại mật khẩu"
          {...form.getInputProps("confirmPassword")}
        />
      </Stack>
    </form>
  )
}

export default FormRegister;