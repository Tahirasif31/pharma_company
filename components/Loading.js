"use client";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const MyPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return <div>{loading ? <LoadingSpinner /> : ""}</div>;
};

export default MyPage;
