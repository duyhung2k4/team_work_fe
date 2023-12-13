import React, { useEffect, useMemo, useState } from "react";
import { AddAccountRequest, FindAccountRequest } from "@/dto/request/account.request";
import { CredentialModel } from "@/model/credential";
import { useAddAccountMutation, useFindAccountMutation } from "@/redux/query/api/account.api";
import { Button, Group, LoadingOverlay, Stack, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { AccountCard } from "./Card";
import { useScreen } from "@/hook/useScreen";
import { useParams } from "react-router";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useNotification } from "@/hook/useNotification";

export interface SearchMemberProps {
  cb?: () => void
}
const SearchMember: React.FC<SearchMemberProps> = (props) => {
  const profile = useAppSelector((state: RootState) => state.profile.credential?.profile);
  const credentialState = useAppSelector((state: RootState) => state.profile.credential);
  const userProject = useAppSelector((state: RootState) => state.project.userOfProject) || [];

  const [search, setSearch] = useState<string>("");
  const [selectAccount, setSelectAccount] = useState<CredentialModel | null>(null);
  const [listAccount, setListAccount] = useState<CredentialModel[]>([]);
  const { width } = useScreen();
  const { project_id } = useParams();
  
  const noti = useNotification();
  const [findAccount, { isLoading: loadingFind }] = useFindAccountMutation();
  const [addAccount, { isLoading: loadingAdd }] = useAddAccountMutation();

  const loading = useMemo(() => {
    return loadingAdd || loadingFind;
  }, [loadingAdd, loadingFind]);

  useEffect(() => {
    const delay = setTimeout(handleSearch, 500);

    return () => {
      clearTimeout(delay);
    }
  }, [search]);


  const handleSearch = async () => {
    let searchRequest: FindAccountRequest = {
      email: "",
      username: "",
    }

    if (search.includes("@gmail.com")) {
      searchRequest = {
        email: search,
        username: "",
      }
    } else {
      searchRequest = {
        email: "",
        username: search,
      }
    }

    const result = await findAccount(searchRequest);
    if ("error" in result) {
      setListAccount([]);
      return;
    }

    if(result.data.data === null) {
      setListAccount([]);
      return;
    }

    let listAccountNotInProject: CredentialModel[] = [];
    result.data.data.forEach((credential) => {
      let checkExist = false;
      
      userProject.forEach((user) => {
        if(user.credential.id === credential.id) {
          checkExist = true;
        }
      })

      if(credential.id === credentialState?.id) {
        checkExist = true;
      }

      if(!checkExist) {
        listAccountNotInProject.push(credential);
      }
    })

    setListAccount(listAccountNotInProject);

    return result;
  }


  const handleAddAccount = async () => {
    if(
      project_id === undefined || 
      profile === undefined ||
      profile.id === undefined ||
      selectAccount?.id === undefined
    ) {
      return;
    }

    const projectId = Number(project_id);
    const addData: AddAccountRequest = {
      projectId,
      createrProjectId: profile.id,
      joinedId: selectAccount.profileId
    };

    const result = await addAccount(addData);
    if("error" in result) {
      noti.error("Thêm thành viên thất bại");
      return;
    }

    props.cb && props.cb();
    noti.success("Thêm thành viên thành công");
    
  }

  return (
    <Stack
      style={{
        height: width > 600 ? "60vh" : `calc(100vh - ${16 * 4 + 22}px)`,
      }}
      spacing={0}
    >
      <TextInput
        placeholder="Nhập tên tài khoản hoặc email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        icon={<IconSearch />}
        style={{
          height: 50,
        }}
      />
      <Stack
        pos={"relative"}
        style={{
          height: `calc(100% - ${100}px)`,
          overflowY: "scroll",
        }}
      >
        <LoadingOverlay visible={loading} />
        {
          listAccount.map((a, index) =>
            <AccountCard
              key={index}
              account={a}
              selectAccount={selectAccount}
              setSelectAccount={setSelectAccount}
            />
          )
        }
      </Stack>
      <Group
        position="right"
        align="flex-end"
        style={{
          height: 50,
        }}
      >
        <Button
          disabled={selectAccount ? false : true}
          onClick={handleAddAccount}
        >Thêm</Button>
      </Group>
    </Stack>
  )
}

export default SearchMember;