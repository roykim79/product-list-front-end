import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../actions";

class Pagination extends Component {
  getPage(i) {
    // add the page number to be fetched to the params object
    const newParams = Object.assign(this.props.params, { page: i })

    // fetch the products with the params object created
    this.props.fetchProducts(newParams);
  }
  render() {
    // get the number of pages needed from the number of products
    const pageCount = this.props.productCount / 9;
    const paginationLinks = [];

    // for each page needed, create a button and add it to the array
    // of pagination links
    for (let i = 1; i < pageCount + 1; i++) {
      paginationLinks.push(
        <button key={i} href="#" onClick={() => this.getPage(i)}>{i}</button>
      );
    }

    return paginationLinks;
  }
}

// map the needed state properties to this component
function mapStateToProps(state) {
  return {
    productCount: state.productCount,
    params: state.params
  };
}

// bind actions to this component
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);