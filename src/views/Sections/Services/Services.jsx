import React from "react";
import PropTypes from "prop-types";

import { Row, Col, Button } from "react-bootstrap";

import ServiceItem from "components/ServiceItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const videoLink = "https://www.youtube.com/watch?v=0iW-o8lfcUA";

const Services = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, services } = frontmatter;

  const handleButtonClick = () => {
    window.open(videoLink, "_blank");
  };

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="text-center">
        {services.map((service) => (
          <Col md={4} key={service.header}>
            <ServiceItem {...service} />
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center mt-5">
        <Button size="xl" variant="primary" className="text-uppercase" onClick={handleButtonClick}>
          Чому саме наш факультет?
        </Button>
      </Row>
    </PageSection>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Services.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Services;
