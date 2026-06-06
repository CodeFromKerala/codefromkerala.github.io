import { Container } from '../components/Layout/Container';
import { Heading } from '../components/Typography/Heading';
import { Text } from '../components/Typography/Text';
import { ProjectCard } from '../components/Cards/ProjectCard';

export function Projects() {
  const projects = [
    {
      title: 'Personal Website',
      description: 'A modern personal website built with React, TypeScript, and Vite. Focuses on content-first design and academic aesthetics.',
      tags: ['React', 'TypeScript', 'Vite', 'CSS'],
      github: 'https://github.com/codefromkerala/codefromkerala.github.io',
      year: 2024,
    },
    {
      title: 'Open Source Library',
      description: 'A utility library for common programming tasks. Emphasizes simplicity, performance, and excellent documentation.',
      tags: ['JavaScript', 'TypeScript', 'npm'],
      github: 'https://github.com',
      demo: 'https://example.com',
      year: 2023,
    },
    {
      title: 'Data Analysis Tool',
      description: 'A command-line tool for processing and analyzing datasets. Built for performance and ease of use.',
      tags: ['Python', 'CLI', 'Data Science'],
      github: 'https://github.com',
      year: 2023,
    },
  ];

  return (
    <main>
      <section>
        <Container>
          <Heading level={1}>Projects</Heading>
          <Text>
            A selection of software projects I've built. Each focuses on solving specific problems
            while maintaining clean architecture and excellent documentation.
          </Text>
        </Container>
      </section>

      <section>
        <Container variant="wide">
          <div className="grid grid--2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
