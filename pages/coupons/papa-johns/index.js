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
    title: "40% Off Papa John's Coupons & Promo Codes",
    description:
      "Promo Code gives you 40% off any purchase. We find and verify the best Papa Johns Coupons and Promo Codes on the web for you.",
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
      code: "20OFFAD",
      description:
        "Up To 20% Off any Online Order when applying this promo code",
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

  const webpageStructuredData = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: "40% Off Papa John's Coupons & Promo Codes",
    url: "https://coupons.garitacenter.com/",
    description:
      "Promo Code gives you 40% off any purchase. We find and verify the best Papa Johns Coupons and Promo Codes on the web for you.",
    publisher: {
      "@type": "Organization",
      name: "Coupons",
      sameAs: [
        "https://www.facebook.com/best.coupons.promo.codes",
        "https://twitter.com/Coupons371244",
        "https://www.youtube.com/@Coupons-eg3jr",
      ],
      url: "https://coupons.garitacenter.com/",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": "https://coupons.garitacenter.com/",
            name: "Coupons & Promo Codes",
          },
        },
      ],
    },
    mainEntity: {
      "@context": "https://schema.org",
      "@type": "Store",
      name: "Papa John's",
      url: "https://www.groupon.com/coupons/papa-johns",
      image:
        "https://invitationdigital-res-1.cloudinary.com/image/upload/w_165,h_165,q_auto,fl_strip_profile,f_auto/papa_johns_logo_2.jpg",
      aggregateRating: {
        "@type": "AggregateRating",
        bestRating: 5,
        ratingCount: 320,
        ratingValue: 4.2,
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "USA",
        addressLocality: "Chicago",
        addressRegion: "IL",
        postalCode: "60647",
      },
      priceRange: "$$",
      telephone: "1 (877) 547-7272",
    },
  };

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
    url: "https://coupons.garitacenter.com/",
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
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCodeCopied(code);
    }
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
          {JSON.stringify(webpageStructuredData)}
        </script>

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
              key={coupon.code}
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

        <br />
        <div>
          <span>⭐⭐⭐⭐</span> 4.2 (320)
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
          {FAQ.map((item, index) => (
            <li style={{ padding: "0 0 20px 0" }} key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.question }} />
              <div
                style={{ margin: "12px 0", opacity: 0.8, fontWeight: "bold" }}
              >
                {item.answer}
              </div>
            </li>
          ))}
        </ul>

        <section>
          <p>
            I feel it's important to include Nutritional Information, so I
            obtained this data from <strong>Papa John's</strong> website. I hope
            it helps you make an informed decision when it comes to enjoying
            delicious pizza, especially if you've found a great promo code.
          </p>

          <h4>
            Nutritional Information: <small>PEPPERONI PIZZA</small>
          </h4>
          <div>
            <table
              aria-label="Nutritional Facts Information"
              style={{ fontSize: 12, textAlign: "left" }}
            >
              <thead>
                <tr>
                  <th scope="row">Pizza Size</th>
                  <th scope="col">Pizza for One</th>
                  <th scope="col">Small</th>
                  <th scope="col">Medium</th>
                  <th scope="col">Large</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Total Calories</th>
                  <td>220</td>
                  <td>210</td>
                  <td>230</td>
                  <td>320</td>
                </tr>
                <tr>
                  <th scope="row">Calories from Fat</th>
                  <td>90</td>
                  <td>80</td>
                  <td>80</td>
                  <td>120</td>
                </tr>
                <tr>
                  <th scope="row">Total Fat</th>
                  <td>10g</td>
                  <td>8g</td>
                  <td>9g</td>
                  <td>13g</td>
                </tr>
                <tr>
                  <th scope="row">Saturated Fat</th>
                  <td>4g</td>
                  <td>3.5g</td>
                  <td>4g</td>
                  <td>6g</td>
                </tr>
                <tr>
                  <th scope="row">Trans Fat</th>
                  <td>0g</td>
                  <td>0g</td>
                  <td>0g</td>
                  <td>0g</td>
                </tr>
                <tr>
                  <th scope="row">Cholesterol</th>
                  <td>25mg</td>
                  <td>20mg</td>
                  <td>20mg</td>
                  <td>30mg</td>
                </tr>
                <tr>
                  <th scope="row">Sodium</th>
                  <td>580mg</td>
                  <td>530mg</td>
                  <td>570mg</td>
                  <td>810mg</td>
                </tr>
                <tr>
                  <th scope="row">Total Carbohydrate</th>
                  <td>25g</td>
                  <td>25g</td>
                  <td>26g</td>
                  <td>38g</td>
                </tr>
                <tr>
                  <th scope="row">Dietary Fiber</th>
                  <td>1g</td>
                  <td>1g</td>
                  <td>1g</td>
                  <td>2g</td>
                </tr>
                <tr>
                  <th scope="row">Sugars</th>
                  <td>3g</td>
                  <td>3g</td>
                  <td>3g</td>
                  <td>5g</td>
                </tr>
                <tr>
                  <th scope="row">Protein</th>
                  <td>8g</td>
                  <td>8g</td>
                  <td>8g</td>
                  <td>12g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
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
            </a>{" "}
            |{" "}
            <a
              href="https://twitter.com/Coupons371244"
              rel="nofollow"
              style={{ color: "black", opacity: 0.8 }}
              title="Coupons and Promo Codes"
            >
              Twitter
            </a>{" "}
            |{" "}
            <a
              href="https://www.youtube.com/@Coupons-eg3jr"
              rel="nofollow"
              style={{ color: "black", opacity: 0.8 }}
              title="Coupons and Promo Codes"
            >
              Youtube
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
