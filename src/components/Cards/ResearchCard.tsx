import './ResearchCard.css';

interface ResearchCardProps {
  title: string;
  abstract: string;
  authors?: string[];
  year?: number;
  journal?: string;
  pdf?: string;
  arxiv?: string;
}

export function ResearchCard({
  title,
  abstract,
  authors,
  year,
  journal,
  pdf,
  arxiv,
}: ResearchCardProps) {
  return (
    <article className="research-card">
      <div className="research-card__header">
        <h3 className="research-card__title">{title}</h3>
        {year && <span className="research-card__year">{year}</span>}
      </div>
      
      {authors && authors.length > 0 && (
        <p className="research-card__authors">
          {authors.join(', ')}
        </p>
      )}
      
      {journal && (
        <p className="research-card__journal">{journal}</p>
      )}
      
      <p className="research-card__abstract">{abstract}</p>
      
      <div className="research-card__links">
        {pdf && (
          <a href={pdf} rel="noreferrer" target="_blank" className="research-card__link">
            PDF →
          </a>
        )}
        {arxiv && (
          <a href={arxiv} rel="noreferrer" target="_blank" className="research-card__link">
            arXiv →
          </a>
        )}
      </div>
    </article>
  );
}
