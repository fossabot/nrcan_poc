import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const POSTS_PER_PAGE = 10

function DwellingList({ data: { loading, error, dwellings } }) {
  if (error) return <div>omg no dwellings 😳</div>
  if (dwellings && dwellings.results && dwellings.results.length) {
    let { results } = dwellings
    return (
      <section>
        <ol>
          {results.map((dwelling, index) => (
            <li key={index}>
              <div>
                <p>house ID: {dwelling.houseId}</p>
                <br />
                <p>city: {dwelling.city}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    )
  }
  return <div>🏠 Loading 🏠</div>
}

/* change name I guess */
export const allCities = gql`
  query allCities {
    dwellings(filters: [{ field: dwellingCity, comparator: gt, value: "A" }]) {
      results {
        houseId
        city
        region
      }
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allCities, {
  props: ({ data }) => ({
    data,
  }),
})(DwellingList)
