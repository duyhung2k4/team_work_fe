import React, { useEffect, useState } from "react";
import Loading from "@/layout/Loading";
import MemberCard from "./Card";
import ModalCustom from "@/components/ModalCustom";
import SearchMember from "./Search";

import { IconUserPlus } from "@tabler/icons-react";
import { useScreen } from "@/hook/useScreen";
import { Box, Button, Grid, Group, Text } from "@mantine/core";
import { useGetUserProjectQuery } from "@/redux/query/api/account.api";
import { useParams } from "react-router";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { UserProject } from "@/dto/response/project";



const Member: React.FC = () => {
  const { width } = useScreen();
  const [open, setOpen] = useState<boolean>(false);
  const { project_id } = useParams();

  const userOfProjects: UserProject[] | null = useAppSelector((state: RootState) => state.project.userOfProject);

  if(project_id === undefined) {
    return <Loading/>
  }

  const {
    refetch,
  } = useGetUserProjectQuery(Number(project_id));

  useEffect(() => {
    refetch();
  }, []);

  if(userOfProjects === null) {
    return <Loading/>
  }

  return (
    <>
      <Box
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Group position="apart">
          <Text>Danh sách thành viên</Text>
          <Box onClick={() => setOpen(true)}>
            {
              width > 600 ?
                <Button
                  leftIcon={<IconUserPlus />}
                >Thêm mới thành viên</Button>
                :
                <Button>
                  <IconUserPlus />
                </Button>
            }
          </Box>
        </Group>
        <Grid mt={20} columns={12}>
          {
            userOfProjects.map((user, index) =>
              <Grid.Col key={index} md={4} sm={6} xs={12}>
                <MemberCard {...user} />
              </Grid.Col>
            )
          }
        </Grid>
      </Box>

      <ModalCustom
        title="Thêm thành viên"
        open={open}
        onClose={() => setOpen(false)}
      >
        <SearchMember
          cb={() => {
            setOpen(false);
            refetch();
          }}
        />
      </ModalCustom>
    </>
  )
}

export default Member;