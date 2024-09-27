import React, { useMemo, useState } from "react";
import { Badge, Box, Table } from "@mantine/core";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { useNavigate } from "react-router-dom";
import { data } from "./Data";

const List = () => {
  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);

    return date.toLocaleString();
  };

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "project", header: "Project" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "scenario", header: "Scenario" },
      {
        accessorKey: "priority",
        header: "Priority",
        Cell: ({ cell }) => (
          <Badge
            color={
              cell.getValue() === "High"
                ? "red"
                : cell.getValue() === "Medium"
                ? "yellow"
                : "green"
            }
          >
            {cell.getValue()}
          </Badge>
        ),
      },
      { accessorKey: "development_status", header: "Development Status" },
      { accessorKey: "credits_required", header: "Credits Required" },
      {
        accessorKey: "last_run_time",
        header: "Last Run Time",
        Cell: ({ cell }) => (cell.getValue() ? cell.getValue() : "-"),
      },
      {
        accessorKey: "last_run_status",
        header: "Last Run Status",
        Cell: ({ cell }) => (cell.getValue() ? cell.getValue() : "-"),
      },
      {
        accessorKey: "has_test_data",
        header: "Has Test Data",
        Cell: ({ cell }) => (cell.getValue() ? "Yes" : "No"),
      },
      { accessorKey: "created_by", header: "Created By" },
      {
        accessorKey: "created_at",
        header: "Created At",
        Cell: ({ cell }) => formatDateTime(cell.getValue()),
      },
      {
        accessorKey: "updated_at",
        header: "Updated At",
        Cell: ({ cell }) => formatDateTime(cell.getValue()),
      },
    ],
    []
  );

  const navigate = useNavigate();

  return (
    <div>
      <Box style={{ padding: "20px" }}>
        <MantineReactTable
          columns={columns}
          data={data}
          enableSorting
          enableGlobalFilter={false}
          enableColumnFilters={true}
          enableDensityToggle={false}
          enableFullScreenToggle={false}
          enableHiding={false}
          enablePagination={false}
          mantinePaginationProps={false}
          mantineTableBodyRowProps={({ row }) => ({
            onClick: () => {
              navigate(`/detail/${row.original.id}`);
            },
            style: {
              cursor: "pointer",
            },
          })}
        />
      </Box>
    </div>
  );
};

export default List;
