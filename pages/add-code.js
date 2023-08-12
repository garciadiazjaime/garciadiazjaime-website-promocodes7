import { useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";

import { saveCode } from "../support/lambda-service";
import Loader from "../components/loader";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({});
  const websiteEl = useRef();
  const codeEl = useRef();

  const submitHandler = async () => {
    setMessage({});
    setLoading(true);

    await saveCode(websiteEl.current.value, codeEl.current.value)
      .then(async (response) => {
        console.log({ response });
        if (response.status > 300) {
          throw await response.text();
        }
        setMessage({
          type: "success",
          text: "Code submitted, once reviewed it will be published, thanks!",
        });
      })
      .catch((error) => {
        console.log({ error });
        setMessage({
          type: "error",
          text: "Oops, something went wrong, try again.",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Head>
        <title>Promo Codes 7</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Add a Promo Code</h1>

        <p>You found something good, share it!</p>

        <div className="form-control">
          <p>Website</p>
          <div>
            <input type="text" ref={websiteEl} placeholder="http://..." />
          </div>
          <p>Code</p>
          <div>
            <input type="text" ref={codeEl} />
          </div>
          <p>
            <button onClick={submitHandler}>Save</button>
          </p>
          {loading && <Loader />}
          <p>
            {message.type && message.text && (
              <span className={message.type}>{message.text}</span>
            )}
          </p>
        </div>

        <div>
          <Link href="/">go back to home</Link>
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
        .success {
          color: forestgreen;
        }
        .error {
          color: firebrick;
        }
        .form-control,
        input,
        button {
          width: 100%;
        }
        input,
        button {
          font-size: 24px;
          padding: 12px 6px;
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
  );
}
