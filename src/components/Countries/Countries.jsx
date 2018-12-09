import React, { Component } from 'react';

import { Country } from './';

// https://www.google.com/maps?q=38.6531004,-90.243462&ll=38.6531004,-90.243462&z=4

const API = 'https://restcountries.eu/rest/v2/all';

class Countries extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(countries => this.setState({ countries }));
  }

  render() {
    const { countries } = this.state;

    return (
      <div className="countries-list container container--inset">
        {countries.map(i => (
          <Country
            key={i.alpha3Code}
            countryName={i.name}
            countryCapital={i.capital}
            countryRegion={i.region}
            countrySubRegion={i.subregion}
            countryFlag={i.flag}
            countryLanguages={i.languages}
            countryPopulation={i.population}
            countryLatLan={i.latlng}
          />
        ))}
      </div>
    );
  }
}

export { Countries };
