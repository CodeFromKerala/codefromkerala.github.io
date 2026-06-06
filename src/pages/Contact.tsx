import { Container } from '../components/Layout/Container';
import { Heading } from '../components/Typography/Heading';
import { Text } from '../components/Typography/Text';

export function Contact() {
  return (
    <main>
      <section>
        <Container>
          <Heading level={1}>Contact</Heading>
          
          <div style={{ maxWidth: '42rem' }}>
            <Text>
              I'm always interested in discussing ideas, collaborating on projects,
              or hearing feedback about my work.
            </Text>

            <Heading level={2}>Get in Touch</Heading>
            <Text>
              <strong>Email:</strong> <a href="mailto:contact@example.com">contact@example.com</a>
            </Text>
            <Text>
              <strong>GitHub:</strong> <a href="https://github.com/codefromkerala" target="_blank" rel="noreferrer">github.com/codefromkerala</a>
            </Text>

            <Heading level={2}>About This Site</Heading>
            <Text>
              This website is open source and built with React, TypeScript, and Vite.
              You can find the source code on <a href="https://github.com/codefromkerala/codefromkerala.github.io" target="_blank" rel="noreferrer">GitHub</a>.
            </Text>
            
            <Text>
              The design philosophy emphasizes content, readability, and accessibility.
              It's built to be fast, accessible, and maintainable.
            </Text>
          </div>
        </Container>
      </section>
    </main>
  );
}
