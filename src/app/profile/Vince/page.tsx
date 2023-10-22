"use client";
import Loading from "@/components/Profile/Vince/Loading";
import Main from "@/components/Profile/Vince/Main";
import React from "react";
import { useState, useEffect } from "react";

const page = () => {
  const [content, setCon] = useState<any>(<Loading />);

  useEffect(() => {
    setTimeout(() => {
      setCon(<Main/>);
    }, 2000);
  }, []);

  return content;
};

export default page;
