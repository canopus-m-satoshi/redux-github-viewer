import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Tab from '../atoms/Tab'
import TabPanel from '../atoms/TabPanel'
import Title from '../atoms/Title'
import IssueBody from '../molecules/IssueBody'
import IssueHeader from '../molecules/IssueHeader'
import TabList from '../molecules/TabList'
import TabPanels from '../molecules/TabPanels'

const Tabs = () => {
  const [SelectedTab, setSelectedTab] = useState(Tab.length)
  const dispatch = useDispatch()

  const handleTabSelect = (index) => {
    setSelectedTab(index)
  }

  return (
    <>
      <TabList SelectedTab>
        <Tab onClick={() => handleTabSelect(1)} SelectedTab={SelectedTab === 1}>
          Issue
        </Tab>
        <Tab onClick={() => handleTabSelect(2)} SelectedTab={SelectedTab === 2}>
          Pull Request
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel SelectedTab={SelectedTab === 1}>
          <IssueHeader />
          <IssueBody />
        </TabPanel>
        <TabPanel SelectedTab={SelectedTab === 2}>
          <Title title="PullRequest" centering />
        </TabPanel>
      </TabPanels>
    </>
  )
}
export default Tabs
