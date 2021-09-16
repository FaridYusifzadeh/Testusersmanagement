// https://frontend-candidate.dev.sdh.com.ua/v1/contact/

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import Button from "@material-ui/core/Button";

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState([]);
  console.log("datadatadata", data);

  const Submit = (data) => {
    axios
      .post(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/`, data)
      .then((response) => {
        //   const persons = response.data;
        setData(response.data);
        console.log("this is response", response);
      })

      .catch((response) => {
        console.log("this is catch");
      });
  };

  return (
    <div className="usercreate">
      <h2>Create User</h2>
      <div className="form_group">
        <form>
          <label style={errors?.first_name?.message ? { color: "red" } : {}}>
            First name
          </label>
          <input
            type="text"
            {...register("first_name", {
              required: { value: true, message: "This is required" },
            })}
            style={errors?.last_name?.message ? { borderColor: "red" } : {}}
          />

          <label style={errors?.last_name?.message ? { color: "red" } : {}}>
            Last name
          </label>
          <input
            type="text"
            {...register("last_name", {
              required: { value: true, message: "This is required" },
            })}
            style={errors?.last_name?.message ? { borderColor: "red" } : {}}
          />
          <label style={errors?.birth_date?.message ? { color: "red" } : {}}>
            Birth Date
          </label>
          <input
            type="date"
            {...register("birth_date", {
              required: { value: true, message: "This is required" },
            })}
            style={errors?.last_name?.message ? { borderColor: "red" } : {}}
          />

          <label style={errors?.gender?.message ? { color: "red" } : {}}>
            Gender
          </label>
          <input
            type="text"
            {...register("gender", {
              required: { value: true, message: "This is required" },
            })}
            style={errors?.last_name?.message ? { borderColor: "red" } : {}}
          />

          <label style={errors?.job?.message ? { color: "red" } : {}}>
            Job
          </label>
          <input
            type="text"
            {...register("job", {
              required: { value: true, message: "This is required" },
            })}
            style={errors?.last_name?.message ? { borderColor: "red" } : {}}
          />

          <label style={errors?.gender?.message ? { color: "red" } : {}}>
            Biography
          </label>
          <input
            type="text"
            {...register("biography", {
              required: { value: true, message: "This is required" },
            })}
            style={errors?.biography?.message ? { borderColor: "red" } : {}}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(Submit, (errors) => {
              console.log(errors);
            })}
          >
            Create User
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
