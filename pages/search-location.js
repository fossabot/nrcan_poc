import React from 'react'
import { hydrate } from 'react-emotion'
import AlphaBanner from '../components/AlphaBanner'
import Link from 'next/link'

const SearchLocationPage = () => (
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
                <a>Search by</a>
              </Link>
            </li>
            <li>
              {/* We can change this URL if we want */}
              <Link href="/search-location">
                <a aria-current="page">Location</a>
              </Link>
            </li>
          </ol>
        </nav>
      </section>

      <div id="page-body">
        <header>
          <h1 id="search-by-location-description">Search by location</h1>
        </header>
        <form aria-labelledby="search-by-location-description">
          <h2>
            <label htmlFor="location" id="location-label">
              Location
            </label>
          </h2>
          <p id="location-details">
            Search for a region by submitting the first three digits of a postal
            code.
          </p>
          <input
            type="text"
            name="location"
            id="location"
            aria-labelledby="location-label location-details"
          />

          <fieldset>
            <legend>
              <h3>Search by Location</h3>
            </legend>
            <p>
              Search by the type of energy source. Choose all of the parameters
              that apply.
            </p>

            <input
              type="checkbox"
              id="energy-source-1"
              name="energy-source"
              value="oil"
            />
            <label htmlFor="energy-source-1">Oil</label>
            <input
              type="checkbox"
              id="energy-source-2"
              name="energy-source"
              value="electricity"
            />
            <label htmlFor="energy-source-2">Electricity</label>
            <input
              type="checkbox"
              id="energy-source-3"
              name="energy-source"
              value="natural-gas"
            />
            <label htmlFor="energy-source-3">Natural gas</label>
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

export default SearchLocationPage
