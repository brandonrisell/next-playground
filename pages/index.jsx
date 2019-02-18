import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import urlFriendly from "utilities/urlFriendly";
import Layout from "components/layout";

const ListItemLink = ({ title }) => (
  <li>
    <Link as={`/p/${urlFriendly(title)}`} href={`/post?title=${title}`}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>{title}</a>
    </Link>
  </li>
);

ListItemLink.propTypes = {
  title: PropTypes.string.isRequired
};

const Home = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <ListItemLink title="Hello Next.js" />
      <ListItemLink title="Learn Next.js is awesome" />
      <ListItemLink title="Deploy apps with Zeit" />
    </ul>
  </Layout>
);

export default Home;
