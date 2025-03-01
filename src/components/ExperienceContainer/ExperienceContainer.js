import uniqid from 'uniqid'
import './ExperienceContainer.css'


const ExperienceContainer = ({project})=>(
    <div className='experience_container'>
        <div className='media'>
            <div className='media-left'>
                <figure className='image image-48'>
                <img src={process.env.PUBLIC_URL + project.image} alt="Placeholder"/>
                
                </figure>
            </div>
            <div className='media-content'>
                <h3>{project.name}</h3>
                <h5>{project.title} &emsp; {project.timeStart}-{project.timeEnd}</h5>

            </div>

        </div>
        <div className='content'>
            <p>{project.description_title}</p>
        {project.description && (
      <ul className='exp__description'>
        {project.description.map((item) => (
          <li key={uniqid()} className='exp__desc-item'>
            {item}
          </li>
        ))}
      </ul>

    )}

{project.techStack && (
      <ul className='exp__stack'>
        {project.techStack.map((item) => (
          <li key={uniqid()} className='exp__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}    
        </div>
    </div>
)

export default ExperienceContainer
