'use client';

import { Accordion, Container } from 'react-bootstrap';
import '@styles/_faq.scss';
import { faqData } from '@utils/data';

export default function FAQ() {
  return (
    <section className="faq py-5">
      <Container>
        <h2 className="faq-title text-center mb-4">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0">
          {faqData.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
