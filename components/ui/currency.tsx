"use client";

import { useEffect, useState } from "react";

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const zarFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "ZAR",
});

interface CurrencyProps {
  value?: string | number;
  currency: "USD" | "ZAR";
}

const Currency: React.FC<CurrencyProps> = ({ value, currency }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const formatter = currency === "USD" ? usdFormatter : zarFormatter;
  return <div>{formatter.format(Number(value))}</div>;
};

export default Currency;
