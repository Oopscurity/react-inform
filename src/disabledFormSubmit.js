import PropTypes from 'prop-types';
import React from 'react';

export default function DisabledFormSubmit(props, context) {
  return (
    <input type="submit" disabled={!context.form.isValid()} {...props} />
  );
}

DisabledFormSubmit.contextTypes = {
  form: PropTypes.object.isRequired,
};
