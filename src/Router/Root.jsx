import React, { useState } from "react";
import { Outlet } from "react-router";

function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Root;
