import React, { Suspense } from "react";
import { Routes, Route } from "react-router";
import { KeyRouterProtected, PropKeyRouterProtected, ROUTER } from "@/constant/router";
import {
  ComfirmCodeRegisterPage,
  DashboardPage,
  LoginPage,
  MyProjectPage,
  ProjectJoinedPage,
  ProtectedPage,
  PublicPage,
  RegisterPage,
} from "./page";
import Loading from "@/layout/Loading";

interface PropKeyRouterProtectedRouterPage extends PropKeyRouterProtected {
  ELEMENT: React.ReactNode
}
const ROUTER_PROTECTED: Record<KeyRouterProtected, PropKeyRouterProtectedRouterPage> = {
  DEFAULT: {
    INDEX: ROUTER.PROTECTED.DEFAULT.INDEX,
    ELEMENT: <DashboardPage/>
  },
  DASHBOARD: {
    INDEX: ROUTER.PROTECTED.DASHBOARD.INDEX,
    ELEMENT: <DashboardPage/>
  },
  PROJECT_JOINED: {
    INDEX: ROUTER.PROTECTED.PROJECT_JOINED.INDEX,
    ELEMENT: <ProjectJoinedPage/>
  },
  MY_PROJECT: {
    INDEX: ROUTER.PROTECTED.MY_PROJECT.INDEX,
    ELEMENT: <MyProjectPage/>
  }
}

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
          {
            Object.keys(ROUTER_PROTECTED).map((key: string, index: number) => {
              const keyConvert = key as KeyRouterProtected;
              const route = ROUTER_PROTECTED[keyConvert];
              return (
                <Route key={index} path={route.INDEX} element={route.ELEMENT} />
              )
            })
          }
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRouter;