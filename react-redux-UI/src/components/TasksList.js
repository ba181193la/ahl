import React, { useState,useEffect} from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from "./UpdateTask";
import { useSelector,useDispatch } from "react-redux";
import {taskDetails,removeTaskList,fetchTask} from '../slice/taskSlice'
const TasksList = () => {
  const dispatch=useDispatch();
  const { taskList } = useSelector((state) => state.tasks);

  const updateTask = (task) => {
    console.log("update Task");
    setModalShow(true);
    dispatch(taskDetails(task))
  };

  const deleteTask = (task) => {
    console.log("...task1111",task);
    dispatch(removeTaskList(task))
  };
  useEffect(()=>{
    dispatch(fetchTask())
  },[dispatch])
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskList.length > 0 &&
            taskList.map((data, i) => {
              return (
                <tr className="text-center">
                  <td>{i + 1}</td>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td>
                    <Button
                      variant="primary"
                      className="mx-3"
                      onClick={() => updateTask(data)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button variant="primary">
                      <i
                        className="bi bi-trash3"
                        onClick={() => deleteTask(data)}
                      ></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TasksList;
