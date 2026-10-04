import WorkSection from '../components/sections/WorkSection'
import { siteContent } from '../data/siteContent'

function WorkPage() {
  return (
    <main>
      <WorkSection projects={siteContent.projects} />
    </main>
  )
}

export default WorkPage