import React from "react";
import { graphql, Link } from "gatsby";
import * as styles from "./index.module.scss";

type Country = {
  name: string;
  slug: string;
};

type CountriesPageProps = {
  data: {
    allCountry: {
      nodes: Country[];
    };
  };
};

const CountriesPage = ({ data }: CountriesPageProps) => {
  return (
    <div className={styles.countries}>
      <h1>Countries</h1>
      <ul>
        {data.allCountry.nodes.map((country: Country) => (
          <li key={country.slug}>
            <Link to={`/countries/${country.slug}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  {
    allCountry {
      nodes {
        name
        slug
      }
    }
  }
`;

export default CountriesPage;
