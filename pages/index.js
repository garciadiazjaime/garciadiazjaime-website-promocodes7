import Head from "next/head";
import { useState, useEffect } from "react";
import TagManager from "react-gtm-module";

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

  const FAQ = [
    {
      "@type": "Question",
      name: "What is the best Coupon Promo Code for Papa Johns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "<strong>BARRIO10</strong> - 40% off any purchase when you place your order online",
      },
    },
  ];

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ,
  };

  const couponClickHandler = (code) => {
    navigator.clipboard.writeText(code);
    setCodeCopied(code);
  };

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-KRRSCXBC",
    };
    TagManager.initialize(tagManagerArgs);
  });

  return (
    <div>
      <Head>
        <title>Coupons and Promo Codes for Papa Johns</title>
        <link rel="canonical" href="https://coupons.garitacenter.com/" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="We find and verify the best Papa Johns coupon and promo codes on the web for you."
        />
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>

        <meta property="og:url" content="https://coupons.garitacenter.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Coupons and Promo Codes for Papa Johns"
        />
        <meta
          property="og:description"
          content="We find and verify the best Papa Johns coupon and promo codes on the web for you."
        />
        <meta
          property="og:image"
          content="https://coupons.garitacenter.com/profile.png"
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

        <p style={{ margin: "20px 0" }}>
          I'm a proud member of the <strong>Papa Johns</strong> Pizza Fan Club
          (yes, it's a thing). I've got a monthly pizza radar that never fails –
          it's like a sacred ritual. But the <strong>Coupons</strong> quest? Oh
          boy, that's a wild ride! Most coupon websites are like virtual mazes
          designed by mischievous squirrels. But fear not, my fellow pizza
          lover! I've taken matters into my own hands and created a no-nonsense
          website where the <strong>Promo Codes</strong> are as real as the
          cheese on your slice. Your hunt for savings ends here – welcome to
          Pizza Paradise! 🍕💰
        </p>

        <ul style={{ padding: 0, listStyle: "none" }}>
          {FAQ.map((item) => (
            <li>
              <div>{item.name}</div>
              <div
                dangerouslySetInnerHTML={{ __html: item.acceptedAnswer.text }}
                style={{ margin: "12px 0", opacity: 0.8 }}
              ></div>
            </li>
          ))}
        </ul>
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
          <div style={{ margin: "20px 0" }}>
            Follow Us on{" "}
            <a
              href="https://www.facebook.com/best.coupons.promo.codes"
              rel="nofollow"
              style={{ color: "black", opacity: 0.8 }}
              title="Coupons and Promo Codes"
            >
              Facebook
            </a>
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
