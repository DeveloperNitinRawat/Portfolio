import React from "react";
import styled from "styled-components";

const StyleMap = styled.section`
  & .map {
    width: 100%;
    height: 45rem;
    border: 2px solid ${({ theme }) => theme.color.borderColor};
  }
`;

const Map = () => {
  return (
    <StyleMap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.9726691705873!2d77.25797521508457!3d28.720362782383198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb35dea539924b798!2zMjjCsDQzJzEzLjMiTiA3N8KwMTUnMzYuNiJF!5e0!3m2!1sen!2sin!4v1677824875785!5m2!1sen!2sin"
              title="map"
              className="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </StyleMap>
  );
};

export default Map;
