import TechBIMG from '../assets/images/MyNoteTaker.png';
import ETrackerIMG from '../assets/images/TheTechBlog.png';
import SoNetAPIIMG from '../assets/images/SchedulEd.png';

import Project from '../components/Project';

const projects = [
  {
    id: 1,
    name: 'My Note Taker',
    image: TechBIMG,
    repoURL: 'https://github.com/AndresZ25/My-Note-Taker-Module-11-challenge',
  },
  {
    id: 2,
    name: 'The Tech Blog',
    image: ETrackerIMG,
    repoURL: 'https://github.com/AndresZ25/The-Tech-Blog-Module-14',
  },
  {
    id: 4,
    name: 'SchedulEd',
    image: SoNetAPIIMG,
    repoURL: 'https://github.com/AndresZ25/SchedulEd-',
  },
];

export default function Portfolio() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 d-flex justify-content-center mb-4">
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
