import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Login = props => <div />;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('')
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Login);
