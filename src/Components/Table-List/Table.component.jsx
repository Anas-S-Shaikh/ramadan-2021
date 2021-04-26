import React from "react";
import { Table } from "antd";
import { columns } from "./Columns";
import { dataSource } from "./dataSource";
import "./Table.style.scss";
const TableList = () => {
  const now = new Date();
  const firstPage = new Date("2021-04-23");
  const secondPage = new Date("2021-05-03");

  function pageDecider() {
    if (now.getTime() <= firstPage.getTime()) {
      // console.log("first page");
      return 1;
    } else if (now.getTime() <= secondPage.getTime()) {
      // console.log("second page");
      return 2;
    } else {
      // console.log("last page");
      return 3;
    }
  }

  function onChange(pagination, filters, sorter, extra) {
    // console.log("filter", filters);
  }
  return (
    <div className="table-container">
      <Table
        columns={columns}
        dataSource={dataSource}
        onChange={onChange}
        pagination={{
          defaultPageSize: 10,
          total: 30,
          defaultCurrent: pageDecider(),
        }}
        rowClassName={(record) => {
          const recordDate = parseInt(record.date.slice(0, 2));
          if (recordDate === now.getDate()) {
            return "current";
          } else if (record.day === "Fri") {
            return "fri";
          } else {
            return "";
          }
        }}
      />
    </div>
  );
};

export default TableList;
