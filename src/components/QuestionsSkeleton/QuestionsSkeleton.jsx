import "./style/index.css";
// import * as React from 'react';
import Skeleton from "@mui/material/Skeleton";
import { Stack } from "@mui/material/";

export const QuestionsSkeleton = (props) => {
  return (
    <>
      <Stack
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{
          margin: "20px auto 30px",
          padding: "30px",
          opacity: "0.3",
          backgroundColor: "#fff",
          width: { xs: "400px" },
          borderRadius: "20px",
        }}
      >
        <Skeleton variant="rounded" width={300} height={100} />
        <Stack spacing={2}>
          <Skeleton variant="rounded" width={300} height={40} />
          <Skeleton variant="rounded" width={300} height={40} />
          <Skeleton variant="rounded" width={300} height={40} />
          <Skeleton variant="rounded" width={300} height={40} />
        </Stack>
      </Stack>
      <Stack
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{
          margin: "20px auto 30px",
          padding: "30px",
          opacity: "0.3",
          backgroundColor: "#fff",
          width: { xs: "400px" },
          borderRadius: "20px",
        }}
      >
        <Skeleton variant="rounded" width={300} height={100} />
        <Stack spacing={2}>
          <Skeleton variant="rounded" width={300} height={40} />
          <Skeleton variant="rounded" width={300} height={40} />
          <Skeleton variant="rounded" width={300} height={40} />
          <Skeleton variant="rounded" width={300} height={40} />
        </Stack>
      </Stack>
      <Stack
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{
          margin: "20px auto 30px",
          padding: "30px",
          opacity: "0.3",
          backgroundColor: "#fff",
          width: { xs: "400px" },
          borderRadius: "20px",
        }}
      >
        <Skeleton variant="rounded" width={300} height={100} />
        <Stack spacing={2}>
          <Skeleton variant="rounded" width={300} height={40} />
          <Skeleton variant="rounded" width={300} height={40} />
          <Skeleton variant="rounded" width={300} height={40} />
          <Skeleton variant="rounded" width={300} height={40} />
        </Stack>
      </Stack>
    </>
  );
};
