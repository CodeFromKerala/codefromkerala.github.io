import { Container } from '../components/Layout/Container';
import { Heading } from '../components/Typography/Heading';
import { Text } from '../components/Typography/Text';
import { ProjectCard } from '../components/Cards/ProjectCard';
import { ResearchCard } from '../components/Cards/ResearchCard';
import { BlogPostCard } from '../components/Cards/BlogPostCard';

export function Home() {
  return (
    <main>
      <section className="section--hero">
        <Container>
          <Heading level={1}>CodeFromKerala</Heading>
          <Text>
            Programming projects, mathematical research, and technical writing.
            A personal archive of work and thought.
          </Text>
        </Container>
      </section>

      <section>
        <Container>
          <Heading level={2}>Featured Project</Heading>
          <div style={{ maxWidth: '42rem' }}>
            <ProjectCard
              title="Example Project"
              description="A sample project showcasing the website architecture. Replace with your actual projects."
              tags={['React', 'TypeScript', 'Vite']}
              github="https://github.com"
              year={2024}
            />
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <Heading level={2}>Recent Research</Heading>
          <div style={{ maxWidth: '42rem' }}>
            <ResearchCard
              title="Sample Research Paper"
              abstract="This is a sample research abstract. Replace with your actual research publications."
              authors={['You', 'Colleague']}
              year={2024}
              journal="Example Journal"
              arxiv="https://arxiv.org"
            />
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <Heading level={2}>Latest Articles</Heading>
          <div style={{ maxWidth: '56rem' }}>
            <BlogPostCard
              title="Getting Started with React and TypeScript"
              excerpt="A guide to setting up a modern React project with TypeScript and Vite for optimal performance and developer experience."
              date="2024-06-01"
              category="Tutorial"
              readTime={8}
              slug="react-typescript-setup"
            />
            <BlogPostCard
              title="Web Design Philosophy"
              excerpt="Thoughts on building websites that prioritize content, accessibility, and timeless design over trendy aesthetics."
              date="2024-05-15"
              category="Design"
              readTime={12}
              slug="web-design-philosophy"
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
