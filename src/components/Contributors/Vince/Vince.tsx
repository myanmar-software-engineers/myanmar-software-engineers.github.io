"use client";

import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Main from "./Main";

const Vince = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []);

  return loading ? <Loading /> : <Main />;
};

export default Vince;
