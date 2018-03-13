import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const DWELLINGS_LIMIT = 100

function DwellingList({ data: { loading, error, dwellings }, query }) {
  if (error) {
    return <div>something's broke yo 🤯</div>
  }
  if (dwellings) {
    if (dwellings.results && dwellings.results.length) {
      let { results } = dwellings
      return (
        <section>
          <ol>
            {results.map((dwelling, index) => (
              <li key={index}>
                <div>
                  <p>house ID: {dwelling.houseId}</p>
                  <p>city: {dwelling.city}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )
    }
    return <div>omg no dwellings 😳</div>
  }
  return <div>🏠 Loading 🏠</div>
}

export const allCities = gql`
  query allCities($value: String!, $limit: Int!) {
    dwellings(
      filters: [{ field: dwellingCity, comparator: gt, value: $value }]
      limit: $limit
    ) {
      results {
        houseId
        city
      }
    }
  }
`

const allCitiesDefaultOptions = {
  value: 'A',
  limit: DWELLINGS_LIMIT,
}

const returnDictFromQueryVars = function(query, key, cb = val => val) {
  return query[key]
    ? { [key]: typeof cb === 'function' ? cb(query[key]) : query[key] }
    : {}
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allCities, {
  options: props => ({
    variables: Object.assign(
      {},
      allCitiesDefaultOptions,
      returnDictFromQueryVars(props.query, 'value', val => val.toUpperCase()),
      returnDictFromQueryVars(props.query, 'limit'),
    ),
  }),
  props: ({ data }) => ({
    data,
  }),
})(DwellingList)
