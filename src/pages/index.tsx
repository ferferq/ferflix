import Head from 'next/head';
import { CartUsers } from '../components/CartUsers/Index';
import { Header } from '../components/Header';
import {Container} from '../styles/Home.module';

export default function Home() {
  return (
    <>
    <Head>
      <title>Login | FERFLIX</title>
    </Head>

    <Header homePage/>
    <Container>
      <h1>Quem está assistindo?</h1>
      <CartUsers />
    </Container>
    </>
  )
}
