import React, { useState } from "react";

const Checkbox = () => {
  const [isCreate, setIsCreate] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isApprove, setApprove] = useState(false);
  return (
      <form>
          <input 
                type='checkbox'
                checked={isCreate}
                onChange={(e)=>{setIsCreate(e.target.checked)}}
            />
          <input 
                type='checkbox'
                checked={isView}
                onChange={(e)=>{setIsView(e.target.checked)}}
            />
          <input 
                type='checkbox'
                checked={isEdit}
                onChange={(e)=>{setIsEdit(e.target.checked)}}
            />
          <input 
                type='checkbox'
                checked={isDelete}
                onChange={(e)=>{setIsDelete(e.target.checked)}}
            />
          <input 
                type='checkbox'
                checked={isApprove}
                onChange={(e)=>{setApprove(e.target.checked)}}
            />
      </form>
    

    );
};

export default Checkbox;
