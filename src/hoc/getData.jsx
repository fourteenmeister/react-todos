import React from 'react';
import {connect} from "react-redux";

import Loading from "../components/Loading";
import { fetchingData } from "../store/actions";

export default function getData(Component, action, propName) {
  class getData extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchingData(action));
    }

    render() {
      const { fetching, ...props } = this.props;
      return (
        this.props.fetching || !this.props[propName] ? <Loading/> : <Component {...props}/>
      );
    }
  }

  getData.displayName = `get${Component.displayName || Component.name || ''}`;

  const mapStateToProps = state => ({
    fetching: state.fetching,
    [propName]: state[propName],
  });

  return connect(mapStateToProps)(getData);
};