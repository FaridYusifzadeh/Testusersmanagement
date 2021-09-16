import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router-dom";

const UserInfo = ({ match }) => {
  const [data, setData] = useState([]);
  const history = useHistory();
  let { id } = match.params;
  useEffect(() => {
    axios
      .get(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}`)
      .then((response) => {
        setData(response.data);
      })

      .catch((response) => {});
  }, []);
  return (
    <div className="userlist">
      <div>
        <h1>UserInfo</h1>
        <ul>
          <table>
            <tbody>
              {Object.keys(data).map((item) => (
                <>
                  <tr>
                    <td>{item} : </td>
                    <td>
                      <strong>{data[item].toString()}</strong>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </ul>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.goBack()}
      >
        <KeyboardBackspaceIcon />
      </Button>
    </div>
  );
};

export default UserInfo;
