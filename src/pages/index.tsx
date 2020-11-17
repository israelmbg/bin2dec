import Head from 'next/head'
import { ChangeEvent, useState } from 'react'

import { Container } from '../styles/pages/'

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [convertedValue, setConvertedValue] = useState('')

  function handleKeydown(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  function handleConvert() {
    const convert = parseInt(inputValue, 2)
    console.log(convert)
    if (!isNaN(convert)) {
      setConvertedValue(String(convert))
    }
  }

  return (
    <>
      <Head>
        <title>Bin2Dec</title>
      </Head>

      <Container>
        <div className="container">
          <div>
            <label htmlFor="binary">Binary</label>
            <input
              onChange={handleKeydown}
              value={inputValue}
              type="text"
              placeholder="Type a value"
            />

            <label htmlFor="Decimal">Decimal</label>
            <input type="text" disabled value={convertedValue} />
          </div>

          <button onClick={handleConvert}>Convert</button>
        </div>
      </Container>
    </>
  )
}

export default Home
