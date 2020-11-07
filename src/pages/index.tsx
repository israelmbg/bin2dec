import Head from 'next/head'

import { Container } from '../styles/pages/'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bin2Dec</title>
      </Head>

      <Container>
        <h1>Binary to Decimal</h1>
      </Container>
    </>
  )
}

export default Home
