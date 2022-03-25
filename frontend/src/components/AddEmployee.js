import React, { useState } from "react";
import axios from "axios"; //import axios for HTTP requests
import { TextField, Button } from "@material-ui/core"; //import material UI
import { ToastContainer, toast } from "react-toastify"; //for toast messages
import "react-toastify/dist/ReactToastify.css";

const AddEmployee = (props) => {
  const [employeeID, setEmployeeID] = useState(""); //useState hook for state Management
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNO, setPhoneNO] = useState("");

  let r = null; //these are for referencing input boxes
  let i = null;
  let d = null;
  let submit = null;
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);

  const employeeHandler = async (e) => {
    //logic for adding data to the backend
    e.preventDefault();

    setLoading(true);
    setIsError(false); //additional

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      //exception handling
      const { data } = await axios.post(
        "http://localhost:8070/employee/create",
        { employeeID, name, nic, address, phoneNO },
        config
      );
      toast("Success! Employee Added 😘");
      setEmployeeID("");
      setName("");
      setNic("");
      setAddress("");
      setPhoneNO("");
      setLoading(false);
    } catch (error) {
      toast(
        "Error! Novel not Added Duplicate Key Found: employee Name must be unique"
      );
      setLoading(false);
      setIsError(true);
      setTimeout(() => {}, 5000); //5s
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
    <div style={{backgroundImage: "url('emp1.jpg')",  backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <br/>
      <form onSubmit={employeeHandler} className = "mt-10 bg-slate-200 container w-1/4" >
          <div className="">
              <br/>
            <center>
              <h5 className="card-title" style={{fontSize: "20px",color: "black"}}>Add Employee</h5>
              <TextField
                id="outlined-with-placeholder"
                label="Enter Employee ID" 
                placeholder="ex: example Employee"
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
                InputLabelProps={{
                    sx:{
                        color:"#ffffff",
                    },
                }}
                inputProps={{
                    sx:{
                        color:"#ffffff",
                    },
                }}
              />
              <br />
              <TextField
                id="outlined-with-placeholder"
                label="Enter Name"
                placeholder="ex: example name"
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
                label="Enter nic"
                margin="normal"
                variant="outlined"
                placeholder="your nic"
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
                label="Enter phone No"
                margin="normal"
                variant="outlined"
                placeholder="your PhoneNO"
                type="text"
                value={phoneNO}
                onChange={(e) => setPhoneNO(e.target.value)}
                ref={(input) => {
                  d = input;
                }}
                onKeyUp={(e) => onKeyUp(e, "phoneNO")}
                required
              />
              <br />
              {isError && (
                <small className="mt-3 d-inline-block text-danger">
                  Something went wrong. Please try again later.
                </small>
              )}
              <br/>
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
                {loading ? "Uploading..." : "Upload"}
              </Button>
              <ToastContainer style={{ marginTop: "50px" }} />
            </center>
          </div>
          <br/>
      </form>
      <br/><br/>
      </div>

  );
};

export default AddEmployee;