'use client';

import { Accordion, Container } from 'react-bootstrap';
import '../styles/_faq.scss';

export default function FAQ() {
  return (
    <section className="faq py-5">
      <Container>
      <h2 className="faq-title text-center mb-4">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is DopeShope?</Accordion.Header>
          <Accordion.Body>
            DopeShope is an online fashion store offering curated collections of stylish apparel and accessories.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How can I track my order?</Accordion.Header>
          <Accordion.Body>
            You can track your order using the tracking link sent to your email upon dispatch.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Do you offer international shipping?</Accordion.Header>
          <Accordion.Body>
            Yes! We provide international shipping. Delivery times vary depending on your location.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Container>
    </section>
  );
}
