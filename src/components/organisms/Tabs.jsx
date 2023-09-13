import Tab from '../atoms/Tab'
import TabPanel from '../atoms/TabPanel'
import IssueBody from '../molecules/IssueBody'
import IssueHeader from '../molecules/IssueHeader'
import TabList from '../molecules/TabList'
import TabPanels from '../molecules/TabPanels'

const Tabs = () => {
  return (
    <>
      <TabList>
        <Tab>Issue</Tab>
        <Tab>Pull Request</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <IssueHeader />
          <IssueBody />
        </TabPanel>
        <TabPanel>
          <p>PullRequest</p>
        </TabPanel>
      </TabPanels>
    </>
  )
}
export default Tabs
