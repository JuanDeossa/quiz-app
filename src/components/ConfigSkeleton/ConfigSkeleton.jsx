import "./style/index.css";
// import * as React from 'react';
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const ConfigSkeleton = (props) => {
  return (
    <>
      <Stack spacing={1} alignItems="center">
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
      {/* <h2>Student Config</h2>
      <form action="" ref={form}>
        <DropDown title="Category" dataArray={categories} />
        <DropDown title="Difficulty" dataArray={difficulties_} />
        <QuestionsAmountSelector setAmount={handleAmount} />
        <input type="text" name="name" placeholder="Who are you ?" />
        <SubmitButton text="Start Quiz" action={handleSubmit} />
      </form> */}
    </>
  );
};
