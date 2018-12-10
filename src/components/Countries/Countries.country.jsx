import React from 'react';
import PropTypes from 'prop-types';

export const Country = ({
  countryName,
  countryCapital,
  countryRegion,
  countrySubRegion,
  countryFlag,
  countryLanguages,
  countryPopulation,
  countryLatLan,
}) => (
  <div className="country">
    <div className="country__header">
      <h2 className="country__name">{countryName}</h2>
      <h3 className="country__capital">{countryCapital}</h3>
      <img
        className="country__flag"
        src={countryFlag}
        alt={`${countryName} flag`}
      />
      <h3 className="country__region">{countrySubRegion || countryRegion}</h3>
    </div>
    <div className="country__content">
      <div className="country__content-section country__content-section--blue country__content-section--center">
        <i className="fas fa-users" />
        <p className="country__population">
          {countryPopulation.toLocaleString()}
        </p>
      </div>
      <div className="country__content-section country__content-section--hax">
        <h4 className="country__subheading">
          {countryLanguages.length === 1
            ? 'Official Language'
            : 'Official Languages'}
        </h4>
        <ul className="country__languages">
          {countryLanguages.map(i => (
            <li key={i.name} className="country__languages-item">
              {i.name}
            </li>
          ))}
        </ul>
      </div>
      <a
        href={`https://www.google.com/maps?q=${countryLatLan[0]},${
          countryLatLan[1]
        }&ll=${countryLatLan[0]},${countryLatLan[1]}&z=5`}
        target="_blank"
        className="country__content-section country__content-section--green country__content-section--center"
      >
        <i className="fas fa-globe-americas" />
      </a>
    </div>
  </div>
);

Country.defaultProps = {
  countrySubRegion: 'None',
};

Country.propTypes = {
  countryName: PropTypes.string.isRequired,
  countryCapital: PropTypes.string.isRequired,
  countryRegion: PropTypes.string.isRequired,
  countrySubRegion: PropTypes.string,
  countryFlag: PropTypes.string.isRequired,
  countryLanguages: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
    .isRequired,
  countryPopulation: PropTypes.number.isRequired,
  countryLatLan: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number]))
    .isRequired,
};
