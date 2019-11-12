import { FooterCallToActionConnected } from 'components/app/footer/footer-call-to-action/footer-call-to-action.connected';
import { FooterSiteMap } from 'components/app/footer/footer-site-map/footer-site-map';
import React from 'react';
import { FooterCopyright } from './footer-copyright/footer-copyright';

export const Footer = () => {
  return (
    <div className="color-background--quaternary color--white padding--all">
      <div className="max-width--xl margin--horizontal--auto">
        <FooterCallToActionConnected />
        <FooterSiteMap />
        <FooterCopyright />
      </div>
    </div>
  );
};
