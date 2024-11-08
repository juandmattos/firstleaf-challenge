const path = require("path");
const slugify = require("slugify");

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  // Use dynamic import for `node-fetch`
  const fetch = await import("node-fetch").then(module => module.default);

  // Fetch data from the countries API
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();

  countries.forEach(country => {
    const countryNode = {
      id: createNodeId(`Country-${country.cca3}`),
      parent: null,
      children: [],
      internal: {
        type: "Country",
        contentDigest: createContentDigest(country),
      },
      name: country.name.common,
      slug: slugify(country.name.common, { lower: true }),
      capital: country.capital ? country.capital[0] : "N/A",
      region: country.region,
      population: country.population,
      flag: country.flags.svg,
      languages: country.languages ? Object.values(country.languages).join(", ") : "N/A",
    };

    createNode(countryNode);
  });
};


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allCountry {
        nodes {
          slug
          name
        }
      }
    }
  `);

  const countryTemplate = path.resolve("src/templates/country.tsx");

  result.data.allCountry.nodes.forEach(country => {
    createPage({
      path: `/countries/${country.slug}`,
      component: countryTemplate,
      context: {
        slug: country.slug,
      },
    });
  });
};
