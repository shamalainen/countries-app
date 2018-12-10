import React, { Component } from 'react';

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

  render() {
    const { countries, search } = this.state;

    return (
      <div className="container container--inset">
        <input
          type="text"
          name="search"
          onChange={e => this.handleChange(e.target.value)}
        />
        <div className="countries-list">
          {countries
            .filter(i => i.name.toLowerCase().includes(search.toLowerCase()))
            .map(i => (
              <Country key={i.alpha3Code} {...i} />
            ))}
        </div>
      </div>
    );
  }
}

export { Countries };
