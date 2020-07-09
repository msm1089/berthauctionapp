import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Input from '../form/Input';
import Textarea from '../form/Textarea';

const VesselForm = ({ vessel, onChange, onBlur, loading, onSubmit }) => {
  const { name, description, length, weight, depth, errors } = vessel;
  return (
    <Container>
      <Row>
        <Col className="mx-auto">
          <Form noValidate onSubmit={onSubmit} className="p-sm-3 p-xs-1">
            <Input
              name="name"
              type="text"
              placeholder="Enter Vessel Name"
              value={name}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'vessel',
                label: 'Name',
                error: errors.name,
              }}
            />
            <Textarea
              name="description"
              placeholder="(Optional) Write your vessel description or notes here..."
              value={description}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'vessel',
                label: 'Description',
                error: errors.description,
              }}
            />
            <Input
              name="length"
              type="text"
              placeholder="0"
              value={length}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'vessel',
                label: 'Length (meters)',
                error: errors.length,
              }}
            />
            <Input
              name="weight"
              type="text"
              placeholder="0"
              value={weight}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'vessel',
                label: 'Weight (metric tones)',
                error: errors.weight,
              }}
            />
            <Input
              name="depth"
              type="text"
              placeholder="0"
              value={depth}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'vessel',
                label: 'Depth (meters)',
                error: errors.depth,
              }}
            />
            <Button
              variant="outline-info"
              type="submit"
              disabled={loading}
              className="mt-3"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

VesselForm.propTypes = {
  vessel: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default VesselForm;
