import React from "react";
import { graphql } from "gatsby";
import * as styles from "../pages/countries/index.module.scss";

type CountryProps = {
  data: {
    country: {
      name: string;
      capital: string;
      region: string;
      population: number;
      flag: string;
      languages: string;
    };
  };
};

const Country = ({ data }: CountryProps) => {
  const { name, capital, region, population, flag, languages } = data.country;

  return (
    <div className={styles.country}>
      <h1>{name}</h1>
      <img src={flag} alt={`Flag of ${name}`} />
      <p>
        <strong>Capital:</strong> {capital}
      </p>
      <p>
        <strong>Region:</strong> {region}
      </p>
      <p>
        <strong>Population:</strong> {population}
      </p>
      <p>
        <strong>Languages:</strong> {languages}
      </p>
    </div>
  );
};

export const query = graphql`
  query ($slug: String!) {
    country(slug: { eq: $slug }) {
      name
      capital
      region
      population
      flag
      languages
    }
  }
`;

export default Country;
