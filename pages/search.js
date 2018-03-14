import React from 'react'
import { hydrate } from 'react-emotion'
import Link from 'next/link'

import Layout from '../components/Layout'
import Breadcrumbs from '../components/Breadcrumbs'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined' && window.__NEXT_DATA__) {
  hydrate(window.__NEXT_DATA__.ids)
}

const SearchPage = () => (
  <Layout title="Search">
    <Breadcrumbs>
      <Link href="/">
        <a>EnerGuide API</a>
      </Link>
      <Link href="/search">
        <a>Search</a>
      </Link>
    </Breadcrumbs>

    <div id="page-body">
      <header>
        <h1>Which parameter would you like to search by?</h1>
      </header>
      <p>To test the API, you are able to search by Location or File number.</p>
      <form aria-labelledby="search-by-description">
        <fieldset>
          <legend id="search-by-description">
            Search by Location or File number
          </legend>
          <input
            type="radio"
            id="search-by-1"
            name="search-by"
            value="location"
          />
          <label htmlFor="search-by-1">
            Location&nbsp;
            <abbr title="A location refers to a region or neighbourhood. You will be searching by the first three digits of any postal code.">
              (i)
            </abbr>
          </label>

          <input
            type="radio"
            id="search-by-2"
            name="search-by"
            value="file-number"
          />
          <label htmlFor="search-by-2">
            File number&nbsp;
            <abbr title="A file number refers to an individual home. This number is provided to the homeowner through EnerGuide.">
              (i)
            </abbr>
          </label>
        </fieldset>
        <button type="submit">Search</button>
      </form>

      <aside>
        <h3>
          To see all of the available data,&nbsp;
          <Link href="https://github.com/cds-snc/nrcan_api">
            <a>view the EnerGuide API documentation</a>
          </Link>
          &nbsp;on GitHub.
        </h3>
      </aside>
    </div>
  </Layout>
)

export default SearchPage
