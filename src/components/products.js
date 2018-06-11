import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import Product from './product'
import Pagination from './pagination'
import { fetchProducts } from "../actions";

class Products extends Component {
  componentDidMount() {
    // fetch the procuts on load
    this.props.fetchProducts();
  }

  renderProducts() {
    return _.map(this.props.products, product => {
      return <Product product={product} key={product._id}/>
    })
  }

  render() {
    return (
      <div>
        <ul className="row">
          {this.renderProducts()}
        </ul>
        <div className="pagination">
          <Pagination />
        </div>
      </div>

    );
  }
};

// bind the products to state.product
function mapStateToProps(state) {
  return {
    products: state.products,
    category: state.category
  };
}

// bind actions to this component
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);