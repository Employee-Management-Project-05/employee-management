import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SingleView = () => {
  const [employeeID, setEmployeeID] = useState([]); //useState hook for state Management
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNO, setPhoneNO] = useState("");

  const { id } = useParams(); //catch parameters whih we passed
  let navigate = useNavigate(); //navigate to the desired page like redirect

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `http://localhost:8070/employee/get/${id}` //getting relavent Recipe by using id
      );

      setEmployeeID(data.employeeID); //set data
      setName(data.name);
      setNic(data.nic);
      setAddress(data.address);
      setPhoneNO(data.phoneNO);
    };
    getData();
  }, [id]);

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to proceed?")) {
      //Alert logic
      //proceed
      try {
        await axios.delete(`http://localhost:8070/employee/delete/${id}`); //delete relavant item
        alert("employee Deleted");
        navigate("/"); //redirect to the root page
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Discarded the process"); //if user pressed cancel, discard changes
    }
  };

  return (
    <>
      <div className="card text-center">
        <div className="card-header">
          <span style={{ color: "red" }}>{employeeID}</span>
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "40px", color: "blue" }}>Employee</h5>
          <p className="card-text">   Name : {name}</p>
          <p className="card-text">Address :  {address}</p>
          <p className="card-text">  Phone :  {phoneNO}</p>
          <p className="card-text">    NIC :  {nic}</p>
          <br/>
          <button
            className="btn btn-danger shadow-none"
            onClick={() => deleteHandler(id)}
            style={{ marginRight: "5px" }}
          >
            <span style={{ fontSize: "12px" }}>
              <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
            </span>
          </button>
          <Link to={`/edit/${id}`}>
            <button className="btn btn-success shadow-none">
              <span style={{ fontSize: "12px" }}>
                <i className="fa fa-pencil" aria-hidden="true"></i> Update
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleView;