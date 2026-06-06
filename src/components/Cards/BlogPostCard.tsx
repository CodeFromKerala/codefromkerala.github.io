import './BlogPostCard.css';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  readTime?: number;
  slug: string;
}

export function BlogPostCard({
  title,
  excerpt,
  date,
  category,
  readTime,
  slug,
}: BlogPostCardProps) {
  return (
    <article className="blog-card">
      <div className="blog-card__meta">
        <time dateTime={date} className="blog-card__date">
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        {category && (
          <span className="blog-card__category">{category}</span>
        )}
        {readTime && (
          <span className="blog-card__read-time">{readTime} min read</span>
        )}
      </div>
      
      <h3 className="blog-card__title">
        <a href={`/blog/${slug}`} className="blog-card__link">
          {title}
        </a>
      </h3>
      
      <p className="blog-card__excerpt">{excerpt}</p>
      
      <a href={`/blog/${slug}`} className="blog-card__read-more">
        Read more →
      </a>
    </article>
  );
}
