"use client";

import { AppStore, store } from "@/store/store";
import React, { useRef } from "react";
import { Provider } from "react-redux";

type Props = {
  children: React.ReactNode;
};

function StoreProvider({ children }: Props) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = store;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

export default StoreProvider;
