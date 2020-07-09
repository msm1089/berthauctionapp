import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdditionalVesselDetails from '../../components/berthSearch/AdditionalVesselDetails';
import BerthSchedule from '../../components/berthSearch/BerthSchedule';
import BerthSearchControls from '../../components/berthSearch/BerthSearchControls';
//import { getBooked } from '../../actions/TOFIXberthSearchActions';

const BerthSearchPage = ({ isAuthenticated, match, vessel }) => {
  const [booked, setBooked] = useState([
    {
      _id: {
        $oid: '5f0469e2ccadf729f0f126b7',
      },
      berth: 2,
      ship_name: 'Queen Mary',
      start: new Date('2020-07-08T08:00:00.000Z'),
      end: new Date('2020-07-08T22:00:00.000Z'),
      bunkers: 1,
      payment: 1032,
    },
  ]);

  // useEffect(() => {
  //   setBooked(getBooked());
  // }, [booked]);

  const onBerthChosen = () => {};

  // to ensure that the booked array is loaded otherwise we would make uncontrolled form access error
  const isBookedLoaded = () => {
    return booked.length > 0;
  };

  return (
    <>  
      <div class="row ml-2">
        <div class="col-lg-3">
          <AdditionalVesselDetails />
          <BerthSearchControls />
        </div>
        <div class="col-lg-8">
        <BerthSchedule />
        </div>
      </div>
      
      
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  vessel: state.vessels.vessel,
});

BerthSearchPage.propTypes = {
  vessel: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, {})(BerthSearchPage);
