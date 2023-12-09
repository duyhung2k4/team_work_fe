import React, { Suspense } from "react";
import { Routes, Route } from "react-router";
import { ROUTER } from "@/constant/router";
import { 
  ComfirmCodeRegisterPage, 
  LoginPage, 
  RegisterPage,
} from "./page";

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={"Loading...."}>
      <Routes>
        <Route>
          <Route path={ROUTER.PUBLIC.REGISTER.INDEX} element={<RegisterPage />} />
          <Route path={ROUTER.PUBLIC.LOGIN.INDEX} element={<LoginPage />} />
          <Route path={ROUTER.PUBLIC.CONFIRM_CODE_REGISTER.INDEX} element={<ComfirmCodeRegisterPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRouter;