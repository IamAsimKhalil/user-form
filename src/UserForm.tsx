import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";

interface formPropsTypes {
  firstName: string;
  lastName: string;
  designation: string;
  employeeID: number | undefined;
  gender: string;
  age: number | undefined;
  DOJ: string;
  technologyStack: string;
}

const UserForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    designation: "",
    employeeID: undefined,
    gender: "",
    age: undefined,
    DOJ: "",
    technologyStack: "",
  };
  const [form, setForm] = useState<formPropsTypes>(initialState);
  const [userData, setUserData] = useState<formPropsTypes[]>([]);
  const [renderData, setRenderData] = useState<formPropsTypes[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setUserData([...userData, form]);
    setForm(initialState);
    alert("New user has been add successfully");
  };

  useEffect(() => {
    setRenderData([...userData]);
  }, [userData]);

  let showAll = () => {
    let isSorted = userData.sort(
      (a: any, b: any) => a.employeeID - b.employeeID
    );
    setRenderData([...isSorted]);
    let permission = window.prompt("Do you want to add another Record?", "");
    let granted = permission?.toLowerCase();

    if (granted === "ok") {
      if (inputRef.current != null) {
        inputRef.current.focus();
      }
    }
  };

  let showFirst = () => {
    let sortedArray = userData.sort(
      (a: any, b: any) => a.employeeID - b.employeeID
    );
    let firstObj = sortedArray[0];
    setRenderData([firstObj]);
    let permission = window.prompt("Do you want to add another Record?", "");
    let granted = permission?.toLowerCase();

    if (granted === "ok") {
      if (inputRef.current != null) {
        inputRef.current.focus();
      }
    }
  };

  let showLast = () => {
    let sortedArray = userData.sort(
      (a: any, b: any) => b.employeeID - a.employeeID
    );
    let lastObject = sortedArray[0];
    setRenderData([lastObject]);

    let permission = window.prompt("Do you want to add another Record?", "");
    let granted = permission?.toLowerCase();

    if (granted === "ok") {
      if (inputRef.current != null) {
        inputRef.current.focus();
      }
    }
  };

  let showNth = () => {
    const aNumber = Number(
      window.prompt("Enter the ID you want to search", "")
    );
    let isFound = userData.filter((data) => data.employeeID == aNumber);

    setRenderData([...isFound]);
    let permission = window.prompt("Do you want to add another Record?", "");
    let granted = permission?.toLowerCase();

    if (granted === "ok") {
      if (inputRef.current != null) {
        inputRef.current.focus();
      }
    }
  };
  let refresh = () => {
    setForm(initialState);
    let isSorted = userData.sort(
      (a: any, b: any) => a.employeeID - b.employeeID
    );
    setRenderData([...isSorted]);
    let permission = window.prompt("Do you want to add another Record?", "");
    let granted = permission?.toLowerCase();

    if (granted === "ok") {
      if (inputRef.current != null) {
        inputRef.current.focus();
      }
    }
  };

  return (
    <div className="container">
      <div>
        <div>
          <div className="h4LeftTop">
            <h4>Add employee Data form</h4>
          </div>
          <div className="formBorder">
            <form className="form">
              <h4 className="empData">Employee Data</h4>
              <div className="placeholders">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  ref={inputRef}
                  value={form.firstName}
                  onChange={handleChange}
                />{" "}
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
              <br></br>
              <div className="placeholders">
                <input
                  type="text"
                  name="designation"
                  placeholder="Designation"
                  value={form.designation}
                  onChange={handleChange}
                />{" "}
                <input
                  type="number"
                  name="employeeID"
                  placeholder="Employee Id"
                  value={form.employeeID ?? ""}
                  onChange={handleChange}
                />
              </div>
              <br></br>
              <div className="placeholders">
                <input
                  type="text"
                  name="gender"
                  placeholder="gender"
                  value={form.gender}
                  onChange={handleChange}
                />{" "}
                <input
                  type="number"
                  name="age"
                  placeholder="age"
                  value={form.age ?? ""}
                  onChange={handleChange}
                />
              </div>
              <br></br>
              <div className="placeholders">
                <input
                  type="text"
                  name="DOJ"
                  placeholder="Date of Joining"
                  value={form.DOJ}
                  onChange={handleChange}
                />{" "}
                <input
                  type="text"
                  name="technologyStack"
                  placeholder="Technology"
                  value={form.technologyStack}
                  onChange={handleChange}
                />
              </div>
              <br /> <br />
              <button
                className="addButton"
                type="submit"
                onClick={handleSubmit}
              >
                Add
              </button>
            </form>
          </div>
          <hr className="hr" />
          <h4 className="showOption">Show Option</h4>
          <div className="choiceButtons">
            <div className="rowButtons">
              <button className="leftButtons" onClick={showAll}>
                showAll
              </button>
              <button className="followingButtons" onClick={showFirst}>
                show 1st
              </button>
              <button className="followingButtons" onClick={showLast}>
                showLast
              </button>
            </div>
            <br></br>
            <div className="rowButtons">
              <button className="leftButtons" onClick={showNth}>
                show Nth
              </button>
              <button className="followingButtons" onClick={refresh}>
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="rightContainer">
        <h4 className="empList">Emeployee List</h4>
        <div className="outputContainer">
          {renderData.map((data, idx) => (
            <div key={idx}>
              <div className="empDataOutput">
                <span>
                  Name : {data.firstName} {data.lastName}
                </span>
                <span>Designation : {data.designation}</span>
                <span>Employee ID : {data.employeeID}</span>
                <span>Gender : {data.gender}</span>
                <span>Age : {data.age}</span>
                <span>Date of Joining : {data.DOJ}</span>
                <span>Experties : {data.technologyStack}</span>
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserForm;
