import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import OrderSummary from './order-summary'

const Home: NextPage = () => {
  return (
    <OrderSummary />
  )
}

export default Home
