import React, { Component } from "react";
import { graphql } from "react-apollo";
import currentUser from "../queries/currentUser";
import { hashHistory } from "react-router";

class requireAuth extends Component {
  componentDidMount() {
    if (!this.props.data.loading && !this.props.data.user) {
      hashHistory.push("/login");
    }
  }
}
graphql(currentUser)(requireAuth);
