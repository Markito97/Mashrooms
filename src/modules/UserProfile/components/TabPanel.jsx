import * as React from "react";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import Achivements from "./Achivements";
import { CustomTabPanel } from "./CustomTabPanel";
import { TabsLine } from "./TabsLine";

export default function TabPanel() {
  const [value, setValue] = useState(0);
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TabsLine handleChange={handleChange} value={value} setValue={setValue} />
      <CustomTabPanel value={value} index={0}>
        {<Achivements />}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Компонент 2
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Компонент 3
      </CustomTabPanel>
    </>
  );
}
