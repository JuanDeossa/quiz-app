import "./style/index.css";
import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";

export const DropDown = (props) => {
  const { title, dataArray,loading } = props;
  return (
    <div className="option-container">
      <label className="option__label" htmlFor={title}>
        {title}
      </label>
      {loading ? (
        <Skeleton variant="rounded" width={210} height={30} />
      ) : (
        <select id={title} name={title}>
          {dataArray.map((option, id) => (
            <option
              key={id}
              value={!option.hasOwnProperty("query") ? option.id : option.query}
            >
              {option.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
