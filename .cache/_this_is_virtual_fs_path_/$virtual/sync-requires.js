
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/juandmattos/Desktop/firstleaf-challenge/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/juandmattos/Desktop/firstleaf-challenge/src/pages/404.tsx")),
  "component---src-pages-bucket-tsx": preferDefault(require("/Users/juandmattos/Desktop/firstleaf-challenge/src/pages/bucket.tsx")),
  "component---src-pages-countries-index-tsx": preferDefault(require("/Users/juandmattos/Desktop/firstleaf-challenge/src/pages/countries/index.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/juandmattos/Desktop/firstleaf-challenge/src/pages/index.tsx")),
  "component---src-pages-promo-tsx": preferDefault(require("/Users/juandmattos/Desktop/firstleaf-challenge/src/pages/promo.tsx")),
  "component---src-templates-country-tsx": preferDefault(require("/Users/juandmattos/Desktop/firstleaf-challenge/src/templates/country.tsx"))
}

