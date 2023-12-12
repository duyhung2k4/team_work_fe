import { lazy } from "react";

export const PublicPage = lazy(() => import("@/router/public"));
export const ProtectedPage = lazy(() => import("@/router/protected"));



export const LoginPage = lazy(() => import("@/pages/Login"));
export const RegisterPage = lazy(() => import("@/pages/Register"));
export const ComfirmCodeRegisterPage = lazy(() => import("@/pages/ConfirmCodeRegister"));



export const DashboardPage = lazy(() => import("@/pages/Dashboard"));
export const ProjectPage = lazy(() => import("@/pages/Project"));