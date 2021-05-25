import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Trytable extends Component {
  state = {
    datas: [
      {
        id: 1,
        moduleName: "Configuration",
        activityName: "Item Category",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
      },
      {
        id: 2,
        moduleName: "Configuration",
        activityName: "Item ",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
      },
      {
        id: 3,
        moduleName: "Configuration",
        activityName: "Party ",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
      },
      {
        id: 4,
        moduleName: "Configuration",
        activityName: "Profile ",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
      },
      {
        id: 5,
        moduleName: "Configuration",
        activityName: "Bank Account",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
      },
      {
        id: 6,
        moduleName: "Configuration",
        activityName: "Change Password ",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
      },
      {
        id: 7,
        moduleName: "Configuration",
        activityName: "Purchase ",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
      },
      {
        id: 8,
        moduleName: "Configuration",
        activityName: "Due Payment",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
      },
      {
        id: 9,
        moduleName: "Configuration",
        activityName: "Sales ",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
      },
      {
        id: 10,
        moduleName: "Configuration",
        activityName: "Due Receive",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
      },
      {
        id: 11,
        moduleName: "Configuration",
        activityName: "Voucher ",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
      },
    ],
  };

  toggleChangeCreate = (id) => {
    const datas = [...this.state.datas];
    const data = datas.find((t) => t.id === id);

    data.isCreate = !data.isCreate;
    this.setState({ datas });
  };
  toggleChangeView = (id) => {
    const datas = [...this.state.datas];
    const data = datas.find((t) => t.id === id);

    data.isView = !data.isView;
    this.setState({ datas });
  };
  toggleChangeEdit = (id) => {
    const datas = [...this.state.datas];
    const data = datas.find((t) => t.id === id);

    data.isEdit = !data.isEdit;
    this.setState({ datas });
  };
  toggleChangeDelete = (id) => {
    const datas = [...this.state.datas];
    const data = datas.find((t) => t.id === id);

    data.isDelete = !data.isDelete;
    this.setState({ datas });
  };

  toggleChangeApprove = (id) => {
    const datas = [...this.state.datas];
    const data = datas.find((t) => t.id === id);

    data.isApprove = !data.isApprove;
    this.setState({ datas });
  };

  render() {
    return (
      <div className='container'>
        <Table >
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
            {this.state.datas.map((data) => {
              return (
                <tr key={data.id}>
                  <td>
                    <div className="">
                      <p>{data.moduleName}</p>
                    </div>
                  </td>
                  <td>
                    <div className="">
                      <p>{data.activityName}</p>
                    </div>
                  </td>
                  <td>
                    <div className="">
                      <input
                        id={data.id}
                        type="checkbox"
                        checked={data.isCreate}
                        onChange={() => this.toggleChangeCreate(data.id)}
                        className=""
                      />
                    </div>
                  </td>
                  <td>
                    <div className="">
                      <input
                        type="checkbox"
                        checked={data.isView}
                        onChange={() => this.toggleChangeView(data.id)}
                        className=""
                      />
                    </div>
                  </td>
                  <td>
                    <div className="">
                      <input
                        type="checkbox"
                        checked={data.isEdit}
                        onChange={() => this.toggleChangeEdit(data.id)}
                        className=""
                      />
                    </div>
                  </td>
                  <td>
                    <div className="">
                      <input
                        type="checkbox"
                        checked={data.isDelete}
                        onChange={() => this.toggleChangeDelete(data.id)}
                        className=""
                      />
                    </div>
                  </td>
                  <td>
                    <div className="">
                      <input
                        type="checkbox"
                        checked={data.isApprove}
                        onChange={() => this.toggleChangeApprove(data.id)}
                        className=""
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Trytable;
