import { lazy } from "react";

export const LoginPage = lazy(() => import("@/pages/Login"));
export const RegisterPage = lazy(() => import("@/pages/Register"));
export const ComfirmCodeRegisterPage = lazy(() => import("@/pages/ConfirmCodeRegister"));