import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
const useStyles = makeStyles({
  table: {},
});

const UserList = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();
  console.log("datadatadata", data);
  useEffect(() => {
    axios
      .get(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/`)
      .then((response) => {
        //   const persons = response.data;
        setData(response.data);
        console.log("this is response", response);
      })

      .catch((response) => {
        console.log("this is catch");
      });
  }, []);
  return (
    <div className="userlist">
      <h2>Users List</h2>
      <Link to="usercreate">
        <Button variant="contained" color="primary">
          Create User
        </Button>
      </Link>
      <div>
        <div className="table"></div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>FirstName</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>BirthDate</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Job</TableCell>
                <TableCell>Info</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell>{row.birth_date}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.job}</TableCell>
                  <TableCell>
                    <Link to={`/userinfo/${row.id}`}>
                      <InfoIcon />
                    </Link>
                  </TableCell>
                  <TableCell>
                    <BorderColorIcon />
                  </TableCell>
                  <TableCell>
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default UserList;
