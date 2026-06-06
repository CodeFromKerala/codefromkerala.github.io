import { Container } from '../components/Layout/Container';
import { Heading } from '../components/Typography/Heading';
import { Text } from '../components/Typography/Text';

export function About() {
  return (
    <main>
      <section>
        <Container>
          <Heading level={1}>About</Heading>
          
          <Heading level={2}>Background</Heading>
          <Text>
            Welcome to CodeFromKerala. I'm a programmer, researcher, and technical writer
            based in Kerala. This site is a collection of my work, thoughts, and explorations
            in software engineering and mathematics.
          </Text>

          <Heading level={2}>Interests</Heading>
          <Text>
            My work focuses on:
          </Text>
          <ul>
            <li>Software architecture and design patterns</li>
            <li>Mathematical research and computational theory</li>
            <li>Technical writing and documentation</li>
            <li>Open-source software development</li>
            <li>Web technologies and performance</li>
          </ul>

          <Heading level={2}>This Website</Heading>
          <Text>
            This site is built with React, TypeScript, and Vite. It follows a philosophy of
            content-first design, prioritizing readability and accessibility over trendy aesthetics.
            The design is intentionally minimal and academic, inspired by classic personal websites
            and research homepages.
          </Text>

          <Heading level={2}>Contact</Heading>
          <Text>
            You can reach me via email or GitHub. I'm always interested in discussing ideas,
            collaborating on projects, or hearing feedback about my work.
          </Text>
          <Text>
            <a href="mailto:contact@example.com">Email</a> {' • '} {' '}
            <a href="https://github.com/codefromkerala">GitHub</a>
          </Text>
        </Container>
      </section>
    </main>
  );
}
