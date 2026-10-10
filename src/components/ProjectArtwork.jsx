import smartQueueImage from '../assets/projects/smartqueue-campus.jpg'
import timetableImage from '../assets/projects/timetable-planning.jpg'

function ProjectArtwork({ index, title }) {
  const image = index === 1 ? smartQueueImage : timetableImage

  return (
    <div className={`project-art project-art--${index}`}>
      <img className="project-photo" src={image} alt="" />
      <span className="art-kicker">PROJECT <span>0{index}</span></span>
      <span className="art-photo-label">Illustrative photo · Unsplash</span>
      <span className="art-title">{title}</span>
    </div>
  )
}

export default ProjectArtwork
