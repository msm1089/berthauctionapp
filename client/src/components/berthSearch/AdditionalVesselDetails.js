import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { DateTimePicker } from '@material-ui/pickers';
import Input from '../form/Input';

const AdditionalVesselDetails = () => {
  const today = new Date();
  const tomorrow = new Date(today.getTime());
  tomorrow.setDate(today.getDate() + 1);

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);

  const [chkbxs, setChkbxs] = useState({
    cb1: { label: 'Cars', ticked: false, qty: '0' },
    cb2: { label: 'Comm. vehicle > 8m', ticked: false, qty: '0' },
    cb3: { label: 'Comm. vehicle < 8m', ticked: false, qty: '0' },
    cb4: { label: 'Caravans', ticked: false, qty: '0' },
  });

  const onChangeCb = () => {};
  const onChangeQty = () => {};
  const onBlurQty = () => {};

  return (
    <Container>
      <Row>
        <Col className="mx-auto">
          <Form noValidate className="p-sm-3 p-xs-1">
            <Row>Select your cargo types and quantities</Row>
            {Object.keys(chkbxs).map((cb) => (
              <div key={chkbxs[cb].label} className="mb-3">
                <Form.Check
                  inline
                  label={chkbxs[cb].label}
                  type="checkbox"
                  onChange={onChangeCb}
                />
                <Input
                  inline
                  name={chkbxs[cb].label}
                  type="text"
                  placeholder=""
                  value={chkbxs[cb].qty}
                  onChange={onChangeQty}
                  onBlur={onBlurQty}
                  text={{ label: 'Qty:', module: 'berthSearch', error: '' }}
                  disabled={!chkbxs[cb].ticked}
                />
              </div>
            ))}
            <Row>What period do you need berths in?</Row>
            <Row>
              <Col>
                <DateTimePicker
                  autoOk
                  disableFuture={false}
                  hideTabs
                  ampm={false}
                  value={startDate}
                  onChange={setStartDate}
                  allowKeyboardControl
                  minDate={today}
                  helperText={'Start date & time'}
                  leftArrowButtonProps={{ 'aria-label': 'Prev month' }}
                  rightArrowButtonProps={{ 'aria-label': 'Next month' }}
                />
              </Col>
              <Col>
                <DateTimePicker
                  autoOk
                  disableFuture={false}
                  hideTabs
                  ampm={false}
                  value={endDate}
                  onChange={setEndDate}
                  allowKeyboardControl
                  minDate={today}
                  helperText={'End date & time'}
                  leftArrowButtonProps={{ 'aria-label': 'Prev month' }}
                  rightArrowButtonProps={{ 'aria-label': 'Next month' }}
                />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

AdditionalVesselDetails.propTypes = {};

const mapStateToProps = (state) => ({});

export default AdditionalVesselDetails;
