import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { MdWorkHistory } from "react-icons/md";

interface ProjectProps {
  project: {
    imgSrc: any;
    alt: string;
    title: string;
    link: string;
    date: string;
    description: string;
    roles: string[];
    note: string
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div className="flex flex-col lg:flex-row mb-8 shadow-lg">
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <Image src={project.imgSrc} alt={project.alt} className="w-full max-w-lg" />
    </a>
      <div className="flex flex-col justify-between p-2">
      <div className="p-3">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">{project.title}</h1>
          <FiExternalLink className="text-lg" />
        </div>
        <span className="flex gap-3">
          <MdWorkHistory /> {project.date}
        </span>
        <p
          className="mt-3"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <div className="mt-8">
          <label className="font-bold">Role</label>
          <ul>
            {project.roles.map((role, i) => (
              <li key={i}>- {role}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        {project.note ? <span className="badge badge-warning py-5">{project.note}</span> : null}
      </div>
      </div>
    </div>
  );
};

export default ProjectCard;
