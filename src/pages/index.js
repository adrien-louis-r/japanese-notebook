import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Hello" keywords={[`japanese`, `beginner`, `notebook`]} />
    <h1>Welcome</h1>
    <ul>
      <li>
        <Link to="/nouns">Nouns</Link>
      </li>
      <li>
        <Link to="/adjectives">い and な adjectives</Link>
      </li>
      <li>
        <Link to="/adjective-negation">Adjective negation</Link>
      </li>
      <li>
        <Link to="/adjective-past">Adjective past</Link>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
