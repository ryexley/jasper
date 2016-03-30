import React, { Component } from "react";
import { Link } from "react-router";
import RepositoryList from "./repository-list";
import Header from "./header";
import Footer from "./footer";
import styles from "../css/components/Home.css";

export default class Home extends Component {
  render() {
    return (
      <section>
        <Header />
        <RepositoryList />
        <Footer />
      </section>
    );
  }
}
