import PropTypes from 'prop-types';

export const CHILDREN_PROP_TYPE = PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]);
