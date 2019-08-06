import { GoogleMap } from 'components/google-map/google-map';
import React from 'react';
import { Screen } from 'components/screen/screen';
import { SectionWithTextAndImage } from 'components/section-with-text-and-image/section-with-text-and-image';
import womanManFinancialConsulting from 'images/woman-man-financial-consulting.jpg';
import { ServiceList } from 'components/service-list/service-list';
import { ServiceListItem } from 'components/service-list/service-list-item/service-list-item';
import { Section } from 'components/section/section';
import { HeadingWithSubtitle } from 'components/heading-with-subtitle/heading-with-subtitle';

export const Home = () => {
  return (
    <Screen>
      <Section color="primary-light">
        <div className="max-width--sm margin--horizontal--auto text-align--center">
          <HeadingWithSubtitle subtitle="Services">
            We&apos;re here to help you reach your financial success
          </HeadingWithSubtitle>
          <p className="color--quaternary-light">
            We want to learn more about your personal situation, identify your dreams and goals, and understand your
            tolerance for risk.
          </p>
        </div>
        <ServiceList>
          <ServiceListItem iconName="coins" title="Taxes">
            <p>
              We provide both businesses or persons with the professional taxation expertise and know how that they
              deserve year round.
            </p>
          </ServiceListItem>
          <ServiceListItem iconName="money-check-alt" title="Accounting">
            <p>We provide our clients with value added accounting and outsourcing services for their businesses.</p>
          </ServiceListItem>
          <ServiceListItem iconName="search-dollar" title="Financial Services">
            <p>We will ensure that your financial records are maintained correctly and accurately.</p>
          </ServiceListItem>
        </ServiceList>
      </Section>
      <SectionWithTextAndImage subtitle="About" title="Mission Statement" image={womanManFinancialConsulting}>
        <p>
          Our mission is to get to know and understand your needs, wants, and long-term goals. We want to help you
          develop, implement, and monitor a strategy that’s designed to address your individual situation.
        </p>
        <p>We understand the challenges families face today.</p>
        <p>
          From managing debt to saving for college to retirement, these personal finance challenges can be overwhelming.
          Our commitment is to utilize all of our resources to help you pursue your goals.
        </p>
        <p>
          We believe in thinking “out of the box” and we are not afraid to challenge conventional wisdom in our approach
          to investing and preserving wealth. All of our energy, commitment, and efforts are focused on you, the client,
          and your satisfaction.
        </p>
      </SectionWithTextAndImage>
      <GoogleMap />
    </Screen>
  );
};