import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Promo Codes 7</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Promo Codes 7
        </h1>

        <p className={styles.description}>
          Promo codes that work
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Papa Johns</h3>
            <strong>OZARK50</strong>
            <p>50% off any purchase when you place your order online</p>
          </div>

          <div className={styles.card}>
            <h3>Papa Johns</h3>
            <strong>BARRIO10</strong>
            <p>40% off any purchase when you place your order online</p>
          </div>

          <div className={styles.card}>
            <h3>Papa Johns</h3>
            <strong>BGCCH</strong>
            <p>30% off any purchase when you place your order online</p>
          </div>

          <div className={styles.card}>
            <h3>Papa Johns</h3>
            <strong>AMAC25</strong>
            <p>25% off any purchase when you place your order online</p>
          </div>

          <div className={styles.card}>
            <h3>Dominos Pizza</h3>
            <strong>1126</strong>
            <p>20% off your entire order</p>
          </div>
          <div className={styles.card}>
            <h3>Dominos Pizza</h3>
            <strong>9222</strong>
            <p>Any 2 or more for $6.99 each</p>
          </div>
          <div className={styles.card}>
            <h3>Dominos Pizza</h3>
            <strong>9220</strong>
            <p>For $7.99 each, carry out all pizzas with 1 topping</p>
          </div>
          
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Promo Codes 7
        </a>
      </footer>

      <style jsx>{`
        strong {
          padding: 12px 24px;
          margin: 12px 0;
          border: 1px dotted black;
          display: block;
          text-align: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
