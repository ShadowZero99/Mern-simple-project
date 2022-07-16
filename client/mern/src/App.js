import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

function App() {
  const [listOfUsers, setListofUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListofUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      setListofUsers([...listOfUsers, { name, age, username }]);
    });
  };

  return (
    <div className="App">
      <div>
        <br></br>

        <div className="Headerds">
          <h1>
            <div className="title">Registration Details</div>
          </h1>
          <br></br>
        </div>
        <table class="table">
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>
                <div class="forminput">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />{" "}
                </div>
              </td>
              <td>
                {" "}
                <div class="forminput">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Age"
                    onChange={(event) => {
                      setAge(event.target.value);
                    }}
                  />{" "}
                </div>
              </td>
              <td>
                {" "}
                <div class="forminput">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Username"
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />{" "}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <button onClick={createUser} className="btn btn-warning btn-lg">
          Create User
        </button>
      </div>
      {listOfUsers.map((user) => {
        return (
          <div>
            <div class="container">
              <br></br>

              <div class="row">
                <div class="col">
                  <div className="social-icon"></div>
                </div>
                <div class="col">
                  <div className="social-icon"></div>
                </div>
                <div class="col">
                  <div className="social-icon">{user.name}</div>
                </div>
                <div class="col">
                  <div className="social-icon">{user.age}</div>
                </div>
                <div class="col">
                  <div className="social-icon">{user.username}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
