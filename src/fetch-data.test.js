const fetchData = require( './fetch-data' )

describe( 'fetch-data', function () {

  beforeEach( function () {
    fetch.resetMocks()
  } )

  afterEach( function () {
  } )

  it( 'should be a function', function () {
    expect( fetchData ).toBeInstanceOf( Function )
  } )

  it( 'should work', async function () {
    fetch.mockResponseOnce( JSON.stringify( { data: 123 } ) )

    const res = await fetchData(),
          actual = res.data,
          expected = { data: 123 }

    expect( actual ).toEqual( expected )

  } )

  it( 'should not work', async function () {
    fetch.mockRejectOnce( { status: 500, statusText: 'some error' } )

    try {
      await fetchData()
      
      const actual = 'nothing',
            expected = 'something'

      expect( actual ).toBe( expected )

    } catch ( err ) {

      expect( err ).toEqual( {
        status: 500,
        statusText: 'some error'
      } )
    }

  } )
} )