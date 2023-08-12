import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [codeCopied, setCodeCopied] = useState("");

  const styles = {
    container: { maxWidth: 800, margin: "0 auto", padding: 12 },
    color: {
      primary: "#ff0000",
      secondary: "#2d5d2a",
      gray: "#d1d1d1",
    },
  };

  const coupons = [
    {
      title: "Papa Johns",
      code: "OZARK50",
      description: "50% off any purchase when you place your order online",
    },
    {
      title: "Papa Johns",
      code: "BARRIO10",
      description: "40% off any purchase when you place your order online",
    },
    {
      title: "Papa Johns",
      code: "BGCCH",
      description: "30% off any purchase when you place your order online",
    },
    {
      title: "Papa Johns",
      code: "AMAC25",
      description: "25% off any purchase when you place your order online",
    },
  ];

  const couponClickHandler = (code) => {
    navigator.clipboard.writeText(code);
    setCodeCopied(code);
  };

  return (
    <div>
      <Head>
        <title>Coupons and Promo Codes for Papa Johns</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="We find and verify the best Papa Johns coupon and promo codes on the web for you."
        />
      </Head>

      <header
        style={{
          borderBottom: `1px solid ${styles.color.gray}`,
          padding: "20px 0",
        }}
      >
        <h1 style={styles.container}>
          <span style={{ color: styles.color.primary }}>Papa Johns</span>{" "}
          Coupons and Promo Codes
        </h1>
      </header>

      <main style={styles.container}>
        <h2 style={{ color: styles.color.secondary }}>Promo codes that work</h2>

        <div>
          {coupons.map((coupon, index) => (
            <div
              key={index}
              style={{
                border: `1px ${
                  index === 0 ? styles.color.secondary : styles.color.gray
                } solid`,
                padding: 12,
                margin: "6px 0 0",
              }}
              onClick={() => couponClickHandler(coupon.code)}
            >
              <h3>{coupon.title}</h3>
              <strong
                style={{
                  border: `1px ${styles.color.gray} dotted`,
                  padding: 12,
                  fontSize: 42,
                  margin: "12px 0",
                  display: "block",
                }}
              >
                {coupon.code}
              </strong>
              <p>{coupon.description}</p>
              <div
                style={{
                  opacity: 0.6,
                  textAlign: "right",
                  visibility: codeCopied == coupon.code ? "" : "hidden",
                }}
              >
                copied
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer
        style={{
          borderTop: `1px solid ${styles.color.gray}`,
          padding: "20px 0 0",
        }}
      >
        <div style={styles.container}>
          <p>
            <strong style={{ color: styles.color.secondary }}>
              Coupons and Promo Codes for Papa Johns
            </strong>
          </p>
          <div>
            Unlock Delicious Savings with Papa John's Coupons and Promo Codes!
            Indulge in Mouthwatering Pizzas, Irresistible Sides, and More at
            Unbeatable Prices. Order Now and Enjoy the Taste of Savings!
          </div>
        </div>
      </footer>

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
  );
}
