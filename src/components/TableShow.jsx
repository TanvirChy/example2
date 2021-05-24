import React from "react";

const TableShow = (data) => {
  
  return (
    <div>
      <tr>
        <td> {data.activityName} </td>
        <td> {data.moduleName} </td>
        <td>
          <form>
            <input
              type="checkbox"
              checked={data.isCreate}
              onChange={(e) => {
               
              }}
            />
          </form>
        </td>
        <td>
          <form>
            <input
              type="checkbox"
              checked={data.isView}
              onChange={(e) => {
                
              }}
            />
          </form>
        </td>
        <td>
          <form>
            <input
              type="checkbox"
              checked={data.isEdit}
              onChange={(e) => {
                
              }}
            />
          </form>
        </td>
        <td>
          <form>
            <input
              type="checkbox"
              checked={data.isDelete}
              onChange={(e) => {
                
              }}
            />
          </form>
        </td>
        <td>
          <form>
            <input
              type="checkbox"
              checked={data.isApprove}
              onChange={(e) => {
                
              }}
            />
          </form>
        </td>
      </tr>
    </div>
  );
};

export default TableShow;
