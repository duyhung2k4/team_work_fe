import { UserProject } from "@/dto/response/project";
import { Avatar, Group, Stack, Text } from "@mantine/core";
import dayjs from "dayjs";
import React from "react";

const MemberCard: React.FC<UserProject> = (props) => {
  return (
    <Group
      style={{
        width: "100%",
        borderRadius: 8,
        backgroundColor: "#EBF0FF",
        padding: 16,
        cursor: "pointer"
      }}
      position="left"
    >
      <Avatar 
        radius="xl"
        size={"lg"}
        styles={{
          placeholder: {
            backgroundColor: "#4D4D4D",
            color: "#FFF"
          }
        }}
      ><Text style={{ textTransform: "uppercase" }}>{props.credential.profile?.name[0]}</Text></Avatar>
      <Stack spacing={0}>
        <Text fw={600}>{props.credential.profile?.name}</Text>
        <Text>{props.credential.email}</Text>
        <Text>
          <span>Tham gia:</span>
          &nbsp;
          <span>{
            props.projectProfile?.createdAt
            &&
            dayjs(props.projectProfile.createdAt).format("DD/MM/YYYY")
          }</span>
        </Text>
      </Stack>
    </Group>
  )
}

export default MemberCard;