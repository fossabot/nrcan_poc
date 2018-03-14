import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const DEFAULT_FILE_ID = '3C10E11075'

function ResultsList({ data: { loading, error, dwellings, variables } }) {
  /* the API will return _all evaluations_ for dwellings that contain
  at least one evaluation, so once we get back the dwelling, we then
  have to actually find the evaluation we wanted originally. */

  /* p.s. I am *so sorry* about this, future developers */
  const returnTheRightEvaluation = (evaluations, _fileId) => {
    return evaluations.find(e => e.fileId === _fileId)
  }

  if (error) {
    return <div>something{"'"}s broke yo 🤯</div>
  }
  if (dwellings) {
    if (dwellings.results && dwellings.results.length) {
      let { city, yearBuilt, evaluations } = dwellings.results[0]
      let {
        ersRating,
        evaluationType,
        fileId,
        heating: { energySourceEnglish, energySourceFrench, outputSizeKW } = {},
      } =
        returnTheRightEvaluation(evaluations, variables.fileId) || {}

      return (
        <section>
          <p>city: {city}</p>
          <p>year built: {yearBuilt}</p>
          <p>ers rating: {ersRating}</p>
          <p>evaluation type: {evaluationType}</p>
          <p>file id: {fileId}</p>
          <p>fuel type (en): {energySourceEnglish}</p>
          <p>fuel type (fr): {energySourceFrench}</p>
          <p>output (KW/h): {outputSizeKW}</p>
        </section>
      )
    }
    return <div>omg no dwellings 😳</div>
  }
  return <div>🏠 Loading 🏠</div>
}

export const allCities = gql`
  query getEvaluationByFileId($fileId: String!) {
    dwellings(
      filters: [{ field: evaluationFileId, comparator: eq, value: $fileId }]
    ) {
      results {
        city
        yearBuilt
        evaluations {
          ersRating
          evaluationType
          fileId
          heating {
            energySourceEnglish
            energySourceFrench
            outputSizeKW
          }
        }
      }
    }
  }
`

const defaultOpts = {
  fileId: DEFAULT_FILE_ID,
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
      defaultOpts,
      returnDictFromQueryVars(props.query, 'fileId', val => val.toUpperCase()),
    ),
  }),
  props: ({ data }) => ({
    data,
  }),
})(ResultsList)
