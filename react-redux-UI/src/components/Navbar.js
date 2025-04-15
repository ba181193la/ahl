import React from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { taskList,error } = useSelector((state) => state.tasks);
  console.log("...error",error);
  
  return (
    <>
      <h1 className="text-center my-4 text-primary">Project Management</h1>
      {
        error?
        <p className="text-center lead text-danger">
          {error}
    </p>:
    <p className="text-center lead">
    Currently{taskList&& taskList.length} task(s) pending
</p>
      }
      
    </>
  );
};

export default Navbar;
