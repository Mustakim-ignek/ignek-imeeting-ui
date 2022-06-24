import React, { useState } from 'react'
import ClayTabs from '@clayui/tabs'
const Tabs = ({element,activeId}) => {
    const [activeTabKeyValue, setActiveTabKeyValue] = useState(activeId);
    return (
      <>
        <ClayTabs modern>
          {element.map((data) => {
            return (
              <ClayTabs.Item
                active={activeTabKeyValue === data.id}
                innerProps={{
                  "aria-controls": `tabpanel-${data.id}`,
                }}
                onClick={() => setActiveTabKeyValue(data.id)}
              >
                {data.tabNav}
              </ClayTabs.Item>
            );
          })}
        </ClayTabs>
        <ClayTabs.Content activeIndex={activeTabKeyValue} fade>
          {element.map((data) => {
            return (
              <ClayTabs.TabPane aria-labelledby={`tab-${data.id}`}>
                {data.tabbody}
              </ClayTabs.TabPane>
            );
          })}
        </ClayTabs.Content>
      </>
    );
}

export default Tabs