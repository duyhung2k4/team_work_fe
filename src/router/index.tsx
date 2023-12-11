import React, { Suspense } from "react";
import { Routes, Route } from "react-router";
import { ROUTER } from "@/constant/router";
import {
  ComfirmCodeRegisterPage,
  DashboardPage,
  LoginPage,
  ProtectedPage,
  PublicPage,
  RegisterPage,
} from "./page";
import Loading from "@/layout/Loading";

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route element={<PublicPage />}>
          <Route path={ROUTER.PUBLIC.REGISTER.INDEX} element={<RegisterPage />} />
          <Route path={ROUTER.PUBLIC.LOGIN.INDEX} element={<LoginPage />} />
          <Route path={ROUTER.PUBLIC.CONFIRM_CODE_REGISTER.INDEX} element={<ComfirmCodeRegisterPage />} />
        </Route>
        <Route element={<ProtectedPage />}>
          <Route path={ROUTER.PROTECTED.DEFAULT.INDEX} element={<DashboardPage />} />
          <Route path={ROUTER.PROTECTED.DASHBOARD.INDEX} element={<DashboardPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRouter;