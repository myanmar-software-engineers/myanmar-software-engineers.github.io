"use client";
import React from "react";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import PageLayout from "./components/PageLayout";

function Peter() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return loading ? <Loading /> : <PageLayout />;
}

export default Peter;
