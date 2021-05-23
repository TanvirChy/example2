import React, { useState } from "react";
import Table from "react-bootstrap/Table";


const TableView = () => {
  const [isCreate, setIsCreate] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isApprove, setApprove] = useState(false);


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
          <tr>
            <td>Configuration</td>
            <td>Item Category</td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isCreate}
                  onChange={(e) => {
                    setIsCreate(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isView}
                  onChange={(e) => {
                    setIsView(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isEdit}
                  onChange={(e) => {
                    setIsEdit(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isDelete}
                  onChange={(e) => {
                    setIsDelete(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isApprove}
                  onChange={(e) => {
                    setApprove(e.target.checked);
                  }}
                />
              </form>
            </td>
          </tr>
          <tr>
            <td>Configuration</td>
            <td>Item </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isCreate}
                  onChange={(e) => {
                    setIsCreate(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isView}
                  onChange={(e) => {
                    setIsView(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isEdit}
                  onChange={(e) => {
                    setIsEdit(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isDelete}
                  onChange={(e) => {
                    setIsDelete(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isApprove}
                  onChange={(e) => {
                    setApprove(e.target.checked);
                  }}
                />
              </form>
            </td>
          </tr>
          <tr>
            <td>Configuration</td>
            <td>party</td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isCreate}
                  onChange={(e) => {
                    setIsCreate(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isView}
                  onChange={(e) => {
                    setIsView(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isEdit}
                  onChange={(e) => {
                    setIsEdit(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isDelete}
                  onChange={(e) => {
                    setIsDelete(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isApprove}
                  onChange={(e) => {
                    setApprove(e.target.checked);
                  }}
                />
              </form>
            </td>
          </tr>
          <tr>
            <td>Configuration</td>
            <td>profile</td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isCreate}
                  onChange={(e) => {
                    setIsCreate(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isView}
                  onChange={(e) => {
                    setIsView(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isEdit}
                  onChange={(e) => {
                    setIsEdit(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isDelete}
                  onChange={(e) => {
                    setIsDelete(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isApprove}
                  onChange={(e) => {
                    setApprove(e.target.checked);
                  }}
                />
              </form>
            </td>
          </tr>
          <tr>
            <td>Configuration</td>
            <td>Bank Account</td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isCreate}
                  onChange={(e) => {
                    setIsCreate(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isView}
                  onChange={(e) => {
                    setIsView(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isEdit}
                  onChange={(e) => {
                    setIsEdit(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isDelete}
                  onChange={(e) => {
                    setIsDelete(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isApprove}
                  onChange={(e) => {
                    setApprove(e.target.checked);
                  }}
                />
              </form>
            </td>
          </tr>
          <tr>
            <td>Configuration</td>
            <td>Change Password</td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isCreate}
                  onChange={(e) => {
                    setIsCreate(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isView}
                  onChange={(e) => {
                    setIsView(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isEdit}
                  onChange={(e) => {
                    setIsEdit(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isDelete}
                  onChange={(e) => {
                    setIsDelete(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isApprove}
                  onChange={(e) => {
                    setApprove(e.target.checked);
                  }}
                />
              </form>
            </td>
          </tr>
          <tr>
            <td>purchase</td>
            <td> purchase</td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isCreate}
                  onChange={(e) => {
                    setIsCreate(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isView}
                  onChange={(e) => {
                    setIsView(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isEdit}
                  onChange={(e) => {
                    setIsEdit(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isDelete}
                  onChange={(e) => {
                    setIsDelete(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isApprove}
                  onChange={(e) => {
                    setApprove(e.target.checked);
                  }}
                />
              </form>
            </td>
          </tr>
          <tr>
          <td>purchase</td>
            <td>Due payment</td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isCreate}
                  onChange={(e) => {
                    setIsCreate(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isView}
                  onChange={(e) => {
                    setIsView(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isEdit}
                  onChange={(e) => {
                    setIsEdit(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isDelete}
                  onChange={(e) => {
                    setIsDelete(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isApprove}
                  onChange={(e) => {
                    setApprove(e.target.checked);
                  }}
                />
              </form>
            </td>
          </tr>
          <tr>
          <td>Sales</td>
            <td>Sales</td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isCreate}
                  onChange={(e) => {
                    setIsCreate(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isView}
                  onChange={(e) => {
                    setIsView(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isEdit}
                  onChange={(e) => {
                    setIsEdit(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isDelete}
                  onChange={(e) => {
                    setIsDelete(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isApprove}
                  onChange={(e) => {
                    setApprove(e.target.checked);
                  }}
                />
              </form>
            </td>
          </tr>
          <tr>
          <td>Sales</td>
            <td>Due Receive</td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isCreate}
                  onChange={(e) => {
                    setIsCreate(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isView}
                  onChange={(e) => {
                    setIsView(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isEdit}
                  onChange={(e) => {
                    setIsEdit(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isDelete}
                  onChange={(e) => {
                    setIsDelete(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isApprove}
                  onChange={(e) => {
                    setApprove(e.target.checked);
                  }}
                />
              </form>
            </td>
          </tr>
          <tr>
          <td>Accounts</td>
            <td>Voucher</td>
            <td>
              <form>
                <input
                  type="checkbox"
                  checked={isCreate}
                  onChange={(e) => {
                    setIsCreate(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isView}
                  onChange={(e) => {
                    setIsView(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isEdit}
                  onChange={(e) => {
                    setIsEdit(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isDelete}
                  onChange={(e) => {
                    setIsDelete(e.target.checked);
                  }}
                />
              </form>
            </td>
            <td>
              <form>
              <input
                  type="checkbox"
                  checked={isApprove}
                  onChange={(e) => {
                    setApprove(e.target.checked);
                  }}
                />
              </form>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableView;
