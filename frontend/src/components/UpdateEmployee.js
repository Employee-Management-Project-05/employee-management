import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; //import axios for HTTP requests
import { TextField, Button } from "@material-ui/core"; //import material UI
import { ToastContainer, toast } from "react-toastify"; //for toast messages
import "react-toastify/dist/ReactToastify.css";
import Image from "../components/update1.jpg"

const UpdateEmployee = () => {
  const [employeeID, setEmployeeID] = useState(""); //useState hook for state Management
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNO, setPhoneNO] = useState("");

  const { id } = useParams(); //catch parameters whih we passed

  let r = null; //these are for referencing input boxes
  let i = null;
  let d = null;
  let submit = null;
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);

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

  const updateHandler = async (e) => {
    //update logic goes here
    e.preventDefault(); //prevent default submit

    setLoading(true);
    setIsError(false); //additional

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      //exception handling
      await axios.put(
        `http://localhost:8070/employee/update/${id}`, //updating relavent Recipe by using id
        { employeeID, name, nic, address, phoneNO },
        config
      );
      toast("Success! Employee Updated 😘");
      setEmployeeID(""); //clear inputs
      setName("");
      setNic("");
      setAddress("");
      setPhoneNO("");
      setLoading(false);
    } catch (error) {
      toast(
        //toast messages when success
        "Error! Novel not Added Duplicate Key Found: Recipe Name must be unique"
      );
      setLoading(false);
      setIsError(true);
      setTimeout(() => {}, 5000); //5s //use timeout
    }
  };

  const onKeyUp = (target, e) => {
    //this logic goes to references in input boxes
    //key pressing
    if (e.keyCode === 13) {
      //keycode 13 is "ENTER Button"
      switch (target) {
        case "employeeID":
          employeeID.focus(); //case success forcus the input box
          break;
        case "name":
          name.focus();
          break;
        case "nic":
          nic.focus();
          break;
        case "address":
            address.focus();
            break;
        case "phoneNO":
            phoneNO.focus();
            break;
        case "submit":
          submit.focus();
          break;
        default:
          employeeID.focus();
      }
    }
  };
  return (
    <div style={{backgroundImage:`url(${Image})`,backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <br/>
      <form onSubmit={updateHandler} className = "mt-10 bg-slate-200 container w-1/4">
        <div className="card">
          <div className="card-header"></div>
          <div className="card-body">
            <center>
              <h5 className="card-title" style={{fontSize: "30px",color: "blue"}}>Update Employee</h5>
              <TextField
                id="outlined-with-placeholder"
                label="Enter Employee Name"
                placeholder="ex: example ID"
                margin="normal"
                variant="outlined"
                type="text"
                value={employeeID}
                onChange={(e) => setEmployeeID(e.target.value)}
                ref={(input) => {
                  r = input;
                }}
                onKeyUp={(e) => onKeyUp(e, "employeeID")}
                required
              />
              <br />
              <TextField
                id="outlined-with-placeholder"
                label="Enter Name"
                placeholder="ex: example Name"
                margin="normal"
                variant="outlined"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={(input) => {
                  i = input;
                }}
                onKeyUp={(e) => onKeyUp(e, "name")}
                required
              />
              <br />
              <TextField
                id="outlined-with-placeholder"
                label="Enter Nic"
                margin="normal"
                variant="outlined"
                placeholder="your NIC"
                type="text"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                ref={(input) => {
                  d = input;
                }}
                onKeyUp={(e) => onKeyUp(e, "nic")}
                required
              />

<br />
              <TextField
                id="outlined-with-placeholder"
                label="Enter address"
                margin="normal"
                variant="outlined"
                placeholder="your address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                ref={(input) => {
                  d = input;
                }}
                onKeyUp={(e) => onKeyUp(e, "address")}
                required
              />

<br />
              <TextField
                id="outlined-with-placeholder"
                label="Enter Phone"
                margin="normal"
                variant="outlined"
                placeholder="your Phone"
                type="text"
                value={phoneNO}
                onChange={(e) => setPhoneNO(e.target.value)}
                ref={(input) => {
                  d = input;
                }}
                onKeyUp={(e) => onKeyUp(e, "phonrNO")}
                required
              />

              <br />
              {isError && (
                <small className="mt-3 d-inline-block text-danger">
                  Something went wrong. Please try again later.
                </small>
              )}
              {/*decision*/}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading}
                value={submit}
                ref={(input) => {
                  submit = input;
                }}
                onKeyUp={(e) => onKeyUp(e, "submit")}
              >
                <i class="fa fa-upload" aria-hidden="true"></i>{" "}
                <h6 style={{ marginLeft: "5px" }}> </h6>{" "}
                {loading ? "Uploading..." : "Update"}
              </Button>
              <ToastContainer style={{ marginTop: "50px" }} />
            </center>
          </div>
        </div>
        <br/>
      </form>
      <br/><br/>
      </div>
  );
};

export default UpdateEmployee;