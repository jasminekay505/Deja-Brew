const yelp = require('yelp-fusion');
const client = yelp.client('2FHEw_ewvg39QVUSS1iGbd4bllCdnAZomRqgcWi7qBw_U_MXrHNW76V9YRA_38RcSbFDY1YGU7N3KEhXf8CYl1JJnLK7kmsGdKCZMuFyHRSpurIFRjlVhHnnelNrYHYx');
 
client.search({
  term: 'Fremont Brewery',
  location: 'seattle, wa',
}).then(response => {
  console.log(response.jsonBody);
}).catch(e => {
  console.log(e);
});