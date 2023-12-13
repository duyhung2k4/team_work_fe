import { CredentialModel } from "@/model/credential";
import { Avatar, Group, Stack, Text } from "@mantine/core";
import React from "react";

export interface AccountCardProps {
  account: CredentialModel,
  selectAccount: CredentialModel | null, 
  setSelectAccount: React.Dispatch<React.SetStateAction<CredentialModel | null>>
}
export const AccountCard: React.FC<AccountCardProps> = (props) => {
  return (
    <Group
      style={{
        width: "100%",
        height: 65,
        borderRadius: 8,
        backgroundColor: props.account.id === props.selectAccount?.id ? "#96AAE0" : "#EBF0FF",
        padding: 8,
        cursor: "pointer",
      }}
      onClick={() => {
        props.setSelectAccount(props.selectAccount?.id === props.account.id ? null : props.account);
      }}
      position="left"
    >
      <Avatar
        radius="xl"
        styles={{
          placeholder: {
            backgroundColor: "#4D4D4D",
            color: "#FFF"
          }
        }}
      >{props.account.profile?.name[0]}</Avatar>
      <Stack spacing={0}>
        <Text
          style={{
            fontWeight: 600,
          }}
        >{props.account.profile?.name}</Text>
        <Text>{props.account.email}</Text>
      </Stack>
    </Group>
  )
}