"use client";

import { PRODUCT_CATGORIES } from "@/config";
import { useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  const [activeindex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeindex !== null;
  return (
    <div className="flex h-full gap-4">
      {PRODUCT_CATGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeindex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };
        const isOpen = activeindex === index;
        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
            key={category.value}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
