import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import dayjs from "dayjs";

import { Button, Divider, Group, LoadingOverlay, Stack, Text, TextInput } from "@mantine/core";
import { styleComfirmCodeRegister } from "./styles";
import { COOKIES } from "@/constant/cookies";
import { SaveInfoResponse } from "@/dto/response/register.response";
import { Navigate, useNavigate } from "react-router";
import { ROUTER } from "@/constant/router";
import { useConfirmCodeRegisterMutation, useSendRegisterInfoMutation } from "@/redux/query/api/register.api";
import { useStatus } from "@/redux/hook";
import { END_POINT_NAME, STATUS, TYPE_API } from "@/redux/query/endPointName";
import { useNotification } from "@/hook/useNotification";


const textButton = {
  sendCode: "Gửi lại mã",
  confirm: "Xác nhận"
}

const ComfirmCodeRegister: React.FC = () => {
  const { classes, theme } = styleComfirmCodeRegister();
  const [exprice, setExprice] = useState<number | null>(null);
  const [code, setCode] = useState<string | undefined>(undefined);

  const statusConfirm = useStatus("registerApi", TYPE_API.mutation, END_POINT_NAME.REGISTER_SEND_REGISTER_INFO);
  const statusSendInfo = useStatus("registerApi", TYPE_API.mutation, END_POINT_NAME.REGISTER_SEND_REGISTER_INFO);
  const status = statusConfirm === STATUS.PENDING || statusSendInfo === STATUS.PENDING ? true : false;
 
  const navigation = useNavigate();
  const notification = useNotification();
  const [sendInfo] = useSendRegisterInfoMutation();
  const [confirmCode] = useConfirmCodeRegisterMutation();

  const data = Cookies.get(COOKIES.EXPRICE_INFO_REGISTER);
  if(data === undefined) {
    return <Navigate to={ROUTER.PUBLIC.REGISTER.INDEX} />;
  }
  const saveInfo = JSON.parse(data) as SaveInfoResponse;




  useEffect(() => {
    const calcExprice = setInterval(() => {
      const timeExprice = dayjs(saveInfo.finishAt).diff(dayjs().toDate(), "second")
      
      if(timeExprice < 0) {
        setExprice(0);
        clearInterval(calcExprice);
        return;
      }

      setExprice(timeExprice);
    }, 1000);

    return () => {
      clearInterval(calcExprice);
    }
  }, [data]);




  const handleConfirmCode = async () => {
    if(code === undefined || code?.length !== 6) {
      return;
    }
    const result = await confirmCode({
      saveInfoId: saveInfo.id,
      code,
    });

    if("error" in result) {
      notification.error("Xác nhận mã thất bại!");
      return
    }
    
    navigation(ROUTER.PUBLIC.LOGIN.INDEX);
    notification.success("Đăng kí thành công");
  }

  const handleRepeatSendCode = async () => {
    const result = await sendInfo(saveInfo);

    if("error" in result) {
      notification.error("Gửi mã thất bại!");
      return
    }

    const data = result.data.data;
    if(data === null) {
      notification.error("Có lỗi khi xử lí. Vui lòng thử lại sau!");
      return;
    }
    
    const finishAt = dayjs(data.finishAt).add(5, "minute");
    Cookies.set(COOKIES.EXPRICE_INFO_REGISTER, JSON.stringify(data), { expires: finishAt.toDate() } );
    notification.success("Gửi mã thành công");
  }



  
  return (
    <Group
      className={classes.root}
      position="center"
    >
      <Stack 
        className={classes.form}
        pos={"relative"}
      >
        <LoadingOverlay radius={30} visible={status}/>
        <Text className={classes.title}>Nhập mã xác nhận</Text>
          <Stack>
            <TextInput
              className={classes.boxInputCode}
              placeholder="Nhập mã xác nhận"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              error={code?.length === 6 ? false : "Yêu cầu đủ 6 kí tự"}
            />
          </Stack>
        <Text className={classes.message}>
          {
            exprice === null ? "" :
              (exprice > 0 ?
                `Mã xác nhận hết hạn sau ${exprice} giây`
                : "Mã xác nhận đã hết hạn"
              )
          }
        </Text>
        <Stack mt={30}>
          <Button
            onClick={
              (exprice !== null && exprice > 0 ) && (code !== undefined && code.length === 6)
              ? handleConfirmCode 
              : handleRepeatSendCode
            }
          >{exprice !== null && exprice > 0 ? textButton.confirm : textButton.sendCode}</Button>
          <Divider
            my={0}
            label="Hoặc"
            labelPosition="center"
            color={theme.colors["gray"][6]}
          />
          <Button
            onClick={() => navigation(ROUTER.PUBLIC.REGISTER.INDEX)}
          >Đăng kí</Button>
        </Stack>
      </Stack>
    </Group>
  )
}

export default ComfirmCodeRegister;