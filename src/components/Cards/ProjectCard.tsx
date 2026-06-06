import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  github?: string;
  demo?: string;
  year?: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  github,
  demo,
  year,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__title">{title}</h3>
        {year && <span className="project-card__year">{year}</span>}
      </div>
      
      <p className="project-card__description">{description}</p>
      
      {tags && tags.length > 0 && (
        <div className="project-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <div className="project-card__links">
        {github && (
          <a href={github} rel="noreferrer" target="_blank" className="project-card__link">
            Source Code →
          </a>
        )}
        {demo && (
          <a href={demo} rel="noreferrer" target="_blank" className="project-card__link">
            Demo →
          </a>
        )}
      </div>
    </article>
  );
}
