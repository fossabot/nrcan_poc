import React from 'react'
import { hydrate, injectGlobal } from 'react-emotion'
import AlphaBanner from '../components/AlphaBanner'
import Link from 'next/link'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

const SearchPage = () => (
  <div>
    <header>
      <AlphaBanner />

      <section>
        <div id="federal-banner">
          <Link href="https://www.canada.ca/fr.html">
            <a>Francais</a>
          </Link>
        </div>

        <Link href="https://github.com/cds-snc/nrcan_api">
          <a>EnergGuide API</a>
        </Link>
      </section>
    </header>

    <main role="main">
      <section>
        <nav aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">
                <a>EnerGuide API</a>
              </Link>
            </li>
            <li>
              <Link href="/search">
                <a aria-current="page">Search by</a>
              </Link>
            </li>
          </ol>
        </nav>
      </section>

      <div id="page-body">
        <header>
          <h1>Which parameter would you like to search by?</h1>
        </header>
        <p>
          To test the API, you are able to search by Location or File number.
        </p>
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
            <label for="search-by-1">
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
            <label for="search-by-2">
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
    </main>

    <footer>
      <Link href="https://www.canada.ca/en/transparency/privacy.html">
        <a>Privacy</a>
      </Link>
    </footer>
  </div>
)

export default SearchPage
