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

  const content = {
    title: "40% Off Papa John's Coupons, Promo Codes",
    description:
      "Promo Code: BARRIO10 gives you 40% off any purchase. We find and verify the best Papa Johns Coupons and Promo Codes on the web for you.",
  };

  const coupons = [
    {
      title: "Papa Johns",
      code: "BARRIO10",
      description:
        "This coupon gets you 40% off any purchase when you place your order online",
      percentage: 40,
    },
    {
      title: "Papa Johns",
      code: "SM25",
      description: "Extra 25% Off Your Order using this coupon",
      percentage: 25,
    },
    {
      title: "Papa Johns",
      code: "AMAC25",
      description:
        "Use this coupon to get 25% off any purchase when you place your order online",
      percentage: 25,
    },
    {
      title: "Papa Johns",
      code: "FUND20",
      description: "20% Off Regular-Menu Priced Items with this promo code",
      percentage: 20,
    },
    {
      title: "Papa Johns",
      code: "2LRGS",
      description:
        "Two Large Pizzas with your favorite two toppings for $10.99 each",
    },
  ];

  const FAQ = [
    {
      question: "What is the best Coupon for Papa Johns?",
      answer: "BARRIO10",
    },
    {
      question: `Which Papa Johns Promo Code gives you <strong>${coupons[0].percentage} off</strong>?`,
      answer: coupons[0].code,
    },
    {
      question: `Which Papa Johns Promo Code gives you <strong>${coupons[1].percentage} off?</strong>`,
      answer: coupons[1].code,
    },
  ];

  const FAQStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const disCountStructure = {
    "@context": "https://schema.org/",
    "@type": "Offer",
    name: coupons[0].description,
    description: "Some location exclusions may apply.",
    category: "Coupon",
    validFrom: "2023-07-08T02:34:00-05:00",
    validThrough: "",
    url: "/coupons/papa-johns#dj04NTg0NDE=",
    eligibleCustomerType: "Available to new and existing customers",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: "0.00",
    },
    eligibleTransactionVolume: {
      "@type": "PriceSpecification",
      name: "No Minimum Order Requirement",
    },
    seller: {
      "@type": "Corporation",
      name: "Papa John's",
      url: "https://www.papajohns.com/",
    },
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
        <title>{content.title}</title>
        <link rel="canonical" href="https://coupons.garitacenter.com/" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={content.description} />
        <script type="application/ld+json">
          {JSON.stringify(FAQStructuredData)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(disCountStructure)}
        </script>

        <meta property="og:site_name" content="Papa Johns Coupons"></meta>
        <meta property="og:url" content="https://coupons.garitacenter.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
        <meta
          property="og:image"
          content="https://coupons.garitacenter.com/profile.png"
        />

        <meta content="Papa Johns Coupons" name="apple-mobile-web-app-title" />
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
              <h3>
                {coupon.title}{" "}
                {coupon.percentage ? `${coupon.percentage} OFF` : "Promo Code"}
              </h3>
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

        <p style={{ margin: "60px 0" }}>
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
            <li style={{ padding: "0 0 20px 0" }} key={item.answer}>
              <div dangerouslySetInnerHTML={{ __html: item.question }} />
              <div
                style={{ margin: "12px 0", opacity: 0.8, fontWeight: "bold" }}
              >
                {item.answer}
              </div>
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
