import React, { createContext, useState } from "react";

export const DropdownContext = createContext();

const DropdownBtn = (Btn) => {
  const [visible, setvisible] = useState(false);

  return (
    <Btn
      visible={visible}
      toggleDropdown={() => setvisible(!visible)}
      closeDropdown={() => setvisible(false)}
    />
  );
};

export default DropdownBtn;
