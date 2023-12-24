import { useState } from 'react';
import {
  TabContext as MUITabContext,
  TabList,
  TabPanel
} from '@mui/lab';
import { Tab } from '@mui/material';
import "./TabContext.scss"

type TypeProps = {
  allValues: {
    label: string;
    value: string;
    content: React.ReactNode;
  }[]
};

const TabContext = ({ allValues }: TypeProps) => {

  const [value, setValue] = useState(allValues[0].value);
  // console.log({ allValues });

  return (
    <MUITabContext value={value} >
      {
        <div >
          <TabList
            onChange={(event: React.SyntheticEvent, newValue: string) => {
              setValue(newValue);

            }}
            aria-label="lab API tabs example">
            {
              allValues.map(values => <Tab label={values.label} value={values.value} className="tab-btn" />)
            }

          </TabList>
          {
            allValues.map(values => <TabPanel value={values.value} className="tabs-pannel">{values.content}</TabPanel>)
          }

        </div>

      }

    </MUITabContext>
  );
};

export default TabContext;