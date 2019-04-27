'use strict'

async function fetchData ( url, options = {} ) {

  try {
    const res = await fetch( url, options )
    const { status, statusText } = res

    if ( res.ok ) {
      const data = await res.json()

      return {
        status,
        statusText,
        data
      }

    } else {

      throw {
        status,
        statusText
      }

    }
  } catch ( err ) {
    throw err
  }
}

module.exports = fetchData