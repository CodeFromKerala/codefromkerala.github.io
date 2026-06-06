import { Container } from '../components/Layout/Container';
import { Heading } from '../components/Typography/Heading';
import { Text } from '../components/Typography/Text';
import { ResearchCard } from '../components/Cards/ResearchCard';

export function Research() {
  const papers = [
    {
      title: 'Computational Methods in Applied Mathematics',
      abstract: 'This paper explores novel computational approaches to solving complex mathematical problems. We present algorithms and their complexity analysis.',
      authors: ['You', 'Collaborator'],
      year: 2024,
      journal: 'Journal of Applied Mathematics',
      arxiv: 'https://arxiv.org/abs/2401.00001',
      pdf: 'https://example.com/paper.pdf',
    },
    {
      title: 'Foundations of Algorithm Design',
      abstract: 'A comprehensive study of fundamental algorithm design patterns and their applications in modern software systems.',
      authors: ['You'],
      year: 2023,
      journal: 'Computing Review',
      arxiv: 'https://arxiv.org/abs/2301.00002',
    },
  ];

  return (
    <main>
      <section>
        <Container>
          <Heading level={1}>Research</Heading>
          <Text>
            Mathematical and computational research. Papers, preprints, and ongoing work
            in theoretical computer science and applied mathematics.
          </Text>
        </Container>
      </section>

      <section>
        <Container variant="wide">
          <div className="grid grid--2">
            {papers.map((paper) => (
              <ResearchCard key={paper.title} {...paper} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
