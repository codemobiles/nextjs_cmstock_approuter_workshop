"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import * as Icons from "@mui/icons-material/";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface User {
  username: string;
  password: string;
}

type Props = {};

export default function Register({}: Props) {
  const initialValue: User = { username: "admin", password: "" };

  const { control, handleSubmit } = useForm<User>({
    defaultValues: initialValue,
  });

  const showForm = () => {
    return (
      <form
        onSubmit={handleSubmit((value: User) => {
          alert(JSON.stringify(value));
        })}
      >
        {/* Username */}
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icons.Email />
                  </InputAdornment>
                ),
              }}
              label="Username"
              autoComplete="email"
              autoFocus
            />
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icons.Password />
                  </InputAdornment>
                ),
              }}
              label="Password"
              autoComplete="password"
              autoFocus
            />
          )}
        />

        <Button
          className="mt-8"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Create
        </Button>

        <Button
          className="mt-4"
          onClick={() => {}}
          type="button"
          fullWidth
          variant="outlined"
        >
          Cancel
        </Button>
      </form>
    );
  };

  return (
    <Box className="flex justify-center items-center">
      <Card className="max-w-[345px] mt-[100px]">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Register
          </Typography>
          {showForm()}
        </CardContent>
      </Card>
    </Box>
  );
}
