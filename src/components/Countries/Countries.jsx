import React, { Component, Fragment } from 'react';

import { Country } from './';

const API = 'https://restcountries.eu/rest/v2/all';

class Countries extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      countries: [],
      search: '',
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(countries => this.setState({ countries }));
  }

  handleChange = (e) => {
    this.setState(prevState => ({ ...prevState, search: e }));
  };

  filterCondition = (filter, target) =>
    target.some(i => i.toLowerCase().includes(filter.toLowerCase()));

  render() {
    const { countries, search } = this.state;

    return (
      <Fragment>
        <div className="container container--inset">
          <label className="countries-search-label" htmlFor="search">
            Search for country...
          </label>
          <input
            className="countries-search"
            type="text"
            name="search"
            onChange={e => this.handleChange(e.target.value)}
          />
        </div>
        <div className="countries-list container--inset">
          {countries
            .filter(i => this.filterCondition(search, [i.name, i.nativeName]))
            .map(i => (
              <Country key={i.alpha3Code} {...i} />
            ))}
        </div>
      </Fragment>
    );
  }
}

export { Countries };
