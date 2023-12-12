import TableCustom from "@/components/Table";
import { Box } from "@mantine/core";
import React from "react";
import { columnsTableProject } from "./source.columns";

const Project: React.FC = () => {
  return (
    <Box
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <TableCustom
        columns={columnsTableProject}
        records={[]}
      />
    </Box>
  )
}

export default Project;