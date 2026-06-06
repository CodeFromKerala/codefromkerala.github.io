import { Container } from '../components/Layout/Container';
import { Heading } from '../components/Typography/Heading';
import { Text } from '../components/Typography/Text';
import { BlogPostCard } from '../components/Cards/BlogPostCard';

export function Blog() {
  const posts = [
    {
      title: 'Getting Started with React and TypeScript',
      excerpt: 'A practical guide to setting up a modern React project with TypeScript and Vite. We cover project initialization, configuration, and best practices.',
      date: '2024-06-01',
      category: 'Tutorial',
      readTime: 8,
      slug: 'react-typescript-setup',
    },
    {
      title: 'Web Design Philosophy',
      excerpt: 'Thoughts on building websites that prioritize content, accessibility, and timeless design over trendy aesthetics. Why minimalism matters.',
      date: '2024-05-15',
      category: 'Design',
      readTime: 12,
      slug: 'web-design-philosophy',
    },
    {
      title: 'Understanding Algorithm Complexity',
      excerpt: 'An exploration of Big O notation, time complexity, and space complexity. Learn how to analyze and optimize your algorithms.',
      date: '2024-04-20',
      category: 'Computer Science',
      readTime: 15,
      slug: 'algorithm-complexity',
    },
    {
      title: 'CSS Variables and Design Systems',
      excerpt: 'How to leverage CSS custom properties to build scalable, maintainable design systems without additional tooling.',
      date: '2024-03-10',
      category: 'Frontend',
      readTime: 10,
      slug: 'css-variables-design',
    },
  ];

  return (
    <main>
      <section>
        <Container>
          <Heading level={1}>Blog</Heading>
          <Text>
            Technical articles, programming writeups, research notes, and occasional thoughts
            on software engineering and web development.
          </Text>
        </Container>
      </section>

      <section>
        <Container variant="wide">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} {...post} />
          ))}
        </Container>
      </section>
    </main>
  );
}
