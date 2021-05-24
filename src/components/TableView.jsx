import React, { useState } from "react";
import Table from "react-bootstrap/Table";

import TableShow from './TableShow';

const TableView = () => {
  const [isCreate, setIsCreate] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isApprove, setApprove] = useState(false);
  

  const [datas, setDatas] = useState([
    {
      id:1,
      moduleName: "Configuration",
      activityName: "Item Category",
      isCreate,
      isView,
      isEdit,
      isDelete,
      isApprove,
    },
    {
      id:2,
      moduleName: "Configuration",
      activityName: "Item Category",
      isCreate,
      isView,
      isEdit,
      isDelete,
      isApprove,
    },
    {
      id:3,
      moduleName: "Configuration",
      activityName: "Item Category",
      isCreate,
      isView,
      isEdit,
      isDelete,
      isApprove,
    },
    {
      id:4,
      moduleName: "Configuration",
      activityName: "Item Category",
      isCreate,
      isView,
      isEdit,
      isDelete,
      isApprove,
    },
    {
      id:5,
      moduleName: "Configuration",
      activityName: "Item Category",
      isCreate,
      isView,
      isEdit,
      isDelete,
      isApprove,
    }
  ]);



  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Module Name</th>
            <th>Activity Name</th>
            <th>Create</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Approve</th>
          </tr>
        </thead>
        <tbody>
          { datas.map(data=> <TableShow data={data} key={data.id}/>)}
        </tbody>
      </Table>
    </div>
  );
};

export default TableView;
