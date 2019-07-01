import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import incidentActions from '../../actions/incidentActions';

class Incident extends Component {
  componentDidMount = () => {
    const {
      getIncidents,
    } = this.props;
    getIncidents();
  };

  render() {
    // const {
    //   isLoading,
    //   incidents,
    // } = this.state;
    return (
      <div>
        Incident
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   console.log(state.incidentReducer);
//   const {
//     isLoading,
//     incidents,
//   } = state.incidentReducer;
//   return ({
//     isLoading,
//     incidents,
//   });
// };

const mapDispatchToProps = dispatch => ({
  getIncidents: () => {
    dispatch(incidentActions());
  },
});

Incident.propTypes = {
  getIncidents: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Incident);
