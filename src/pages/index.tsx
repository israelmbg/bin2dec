import Head from 'next/head'

import { Container } from '../styles/pages/'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bin2Dec</title>
      </Head>

      <Container>
        <div className="container">
          <div>
            <label htmlFor="binary">Binary</label>
            <input type="text" placeholder="Type a value" />

            <label htmlFor="Decimal">Decimal</label>
            <input type="text" disabled value="kkkkkk" />
          </div>

          <button>Convert</button>
        </div>
      </Container>
    </>
  )
}

export default Home
