"use client"
import React from 'react'
import { ClipLoader } from "react-spinners";

const LoadingPage = () => {
    const override = {
        display: "block",
        margin: "100px auto",

    }
  return (
    <ClipLoader color="#3b82f6" cssOverride={override} size={150} aria-label="Loading Spinner">LoadingPage</ClipLoader>
  )
}

export default LoadingPage