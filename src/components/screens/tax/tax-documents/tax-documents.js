import React from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Hero } from 'components/layout/hero/hero';
import { Section } from 'components/layout/section/section';
import { ROUTES } from 'constants/routes';
import DocumentPlaceholder from 'images/document-placeholder.jpg';
import { DocumentList } from 'components/layout/document-list/document-list';

const DOCUMENTS = [
  {
    image: DocumentPlaceholder,
    name: 'Test Document Name',
    downloadUrl: 'http://google.com',
    description: 'Vestibulum tristique lorem ac eros malesuada, vel ultrices enim convallis.'
  },
  {
    image: DocumentPlaceholder,
    name: 'Test Document Name',
    downloadUrl: 'http://google.com',
    description: 'Vestibulum tristique lorem ac eros malesuada, vel ultrices enim convallis.'
  },
  {
    image: DocumentPlaceholder,
    name: 'Test Document Name',
    downloadUrl: 'http://google.com',
    description: 'Vestibulum tristique lorem ac eros malesuada, vel ultrices enim convallis.'
  },
  {
    image: DocumentPlaceholder,
    name: 'Test Document Name',
    downloadUrl: 'http://google.com',
    description: 'Vestibulum tristique lorem ac eros malesuada, vel ultrices enim convallis.'
  },
  {
    image: DocumentPlaceholder,
    name: 'Test Document Name',
    downloadUrl: 'http://google.com',
    description: 'Vestibulum tristique lorem ac eros malesuada, vel ultrices enim convallis.'
  }
];

export const TaxDocuments = () => {
  return (
    <Screen>
      <Hero title="Documents" subtitle={ROUTES.TAX.title}>
        <p>Documents to help you with your taxes.</p>
      </Hero>
      <Section color="primary-light">
        <DocumentList documents={DOCUMENTS} />
      </Section>
    </Screen>
  );
};
