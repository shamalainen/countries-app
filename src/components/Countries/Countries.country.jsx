import React from 'react';
import PropTypes from 'prop-types';

export const Country = ({
  name,
  capital,
  region,
  subregion,
  flag,
  languages,
  population,
  latlng,
}) => (
  <div className="country">
    <div className="country__header">
      <h2 className="country__name">{name}</h2>
      <h3 className="country__capital">{capital}</h3>
      <img className="country__flag" src={flag} alt={`${name} flag`} />
      <h3 className="country__region">{subregion || region}</h3>
    </div>
    <div className="country__content">
      <div className="country__content-section country__content-section--blue country__content-section--center">
        <i className="fas fa-users" />
        <p className="country__population">{population.toLocaleString()}</p>
      </div>
      <div className="country__content-section country__content-section--hax">
        <h4 className="country__subheading">
          {languages.length === 1 ? 'Official Language' : 'Official Languages'}
        </h4>
        <ul className="country__languages">
          {languages.map(i => (
            <li key={i.name} className="country__languages-item">
              {i.name}
            </li>
          ))}
        </ul>
      </div>
      <a
        href={`https://www.google.com/maps?q=${latlng[0]},${latlng[1]}&ll=${
          latlng[0]
        },${latlng[1]}&z=5`}
        target="_blank"
        className="country__content-section country__content-section--green country__content-section--center"
      >
        <i className="fas fa-globe-americas" />
      </a>
    </div>
  </div>
);

Country.defaultProps = {
  subregion: 'None',
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  subregion: PropTypes.string,
  flag: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  population: PropTypes.number.isRequired,
  latlng: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
};
