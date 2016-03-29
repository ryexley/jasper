import React, { Component } from "react";
import { Link } from "react-router";
import RepositoryList from "./repository-list";
import styles from "./Home.css";

export default class Home extends Component {
  render() {
    return <RepositoryList />;
  }
}
