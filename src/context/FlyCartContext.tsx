"use client";

import React, { createContext, useContext, useRef, useState } from "react";

interface FlyData {
  start: DOMRect | null;
  end: DOMRect | null;
  src: string;
}

interface FlyCartContextProps {
  cartRef: React.RefObject<HTMLAnchorElement>;
  flyData: FlyData | null;
  setFlyData: (data: FlyData | null) => void;
}

const FlyCartContext = createContext<FlyCartContextProps | undefined>(undefined);

export const FlyCartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cartRef = useRef<HTMLAnchorElement>(null);
  const [flyData, setFlyData] = useState<FlyData | null>(null);

  return (
    <FlyCartContext.Provider value={{ cartRef: cartRef as React.RefObject<HTMLAnchorElement>, flyData, setFlyData }}>
      {children}
    </FlyCartContext.Provider>
  );
};

export const useFlyCart = () => {
  const context = useContext(FlyCartContext);
  if (!context) throw new Error("useFlyCart must be used within FlyCartProvider");
  return context;
};
