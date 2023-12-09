import React from "react";
import { FORM_ID } from "../form.id";
import { PasswordInput, Stack, TextInput } from "@mantine/core";
import { useLoginInfoMutation } from "@/redux/query/api/login.api";
import { useNotification } from "@/hook/useNotification";
import { useNavigate } from "react-router";
import { FormFieldLogin } from "./field";
import { useForm } from "@mantine/form";
import { LoginRequest } from "@/dto/request/login.request";
import { ROUTER } from "@/constant/router";

const FormLogin: React.FC = () => {

  const [login] = useLoginInfoMutation();
  const notification = useNotification();
  const navigation = useNavigate();
  
  const form = useForm<FormFieldLogin>({
    initialValues: {
      username: "",
      password: "",
    },
    validate: {
      username: (value: string) => value.length === 0 ? "Chưa điền tên đăng nhập" : null,
      password: (value: string) => value.length === 0 ? "Chưa nhập mật khẩu" : null
    }
  });

  const handleSubmit = async (values: FormFieldLogin) => {
    const result = await login(values as LoginRequest);

    if("error" in result) {
      notification.error("Đăng nhập thất bại");
      return;
    }

    navigation(ROUTER.PROTECTED.DASHBOARD.INDEX);
  }
  return (
    <form id={FORM_ID.LOGIN} onSubmit={form.onSubmit(handleSubmit)}>
    <Stack spacing={24}>
      <TextInput
        withAsterisk
        placeholder="Tên đăng nhập"
        {...form.getInputProps("username")}
      />
      <PasswordInput
        withAsterisk
        placeholder="Mật khẩu"
        {...form.getInputProps("password")}
      />
    </Stack>
  </form>
  )
}

export default FormLogin;