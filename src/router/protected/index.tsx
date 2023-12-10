import Loading from "@/components/Loading";
import { ROUTER } from "@/constant/router";
import { useAppSelector } from "@/redux/hook";
import { useLoginTokenMutation } from "@/redux/query/api/login.api";
import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router";

const Protected: React.FC = () => {
  const [loginToken] = useLoginTokenMutation();
  const profile = useAppSelector((state: RootState) => state.profile.credential);

  useEffect(() => {
    loginToken(null);
  }, []);

  if(profile === undefined) {
    return <Loading/>
  }

  if(profile === null) {
    return <Navigate to={ROUTER.PUBLIC.LOGIN.INDEX}/>
  }

  return (
    <Outlet/>
  )
}

export default Protected;