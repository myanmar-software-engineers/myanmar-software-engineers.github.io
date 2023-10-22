"use client";

import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Main from "./Main";

const Vince = () => {
  const [content, setCon] = useState(<Loading />);

  useEffect(() => {
    setTimeout(() => {
      setCon(<Main />);
    }, 2000);
  }, []);
  return { content };
};

export default Vince;
