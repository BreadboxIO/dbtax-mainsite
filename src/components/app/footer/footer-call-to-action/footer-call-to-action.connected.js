import { connect } from 'react-redux';
import { openContactForm } from 'store/contact-form/contact-form';
import { FooterCallToAction } from './footer-call-to-action';

const mapStateToProps = undefined;

const mapDispatchToProps = {
  onClick: openContactForm
};

export const FooterCallToActionConnected = connect(mapStateToProps, mapDispatchToProps)(FooterCallToAction);
