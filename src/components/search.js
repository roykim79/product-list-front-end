import React, { Component } from "react";
import { connect } from "react-redux";
import { setSortMethod, setCategory, fetchProducts } from "../actions/index";
import { bindActionCreators } from "redux";

class Search extends Component {
  searchCategory(category) {
    // create a new params object with updated category. the code below
    // magically updates the redux store
    const newParams = Object.assign(this.props.params, {category: category})
    // use the new params object and fetch the products that match the params
    this.props.fetchProducts(newParams)
  }

  sortResults(sortMethod) {
    // create a new params object with updated category the code below
    // magically updates the redux store
    const newParams = Object.assign(this.props.params, {price: sortMethod})
    // use the new params object and fetch the products that match the params
    this.props.fetchProducts(newParams)
  }

  render() {
    return (
      <div className="search">
        <h1 className="title">Products</h1>
        <div className="row">
          <div className="col-md-2 col-md-offset-1">
            <div className="form-group">
              <label className="control-label" htmlFor="search-query">Search</label>
              <div className="">
                <input id="search-query" className="form-control" type="text"/>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-2">
            <div className="form-group">
              <label htmlFor="category-filter" className="control-label">Category</label>
              <select
                className="form-control"
                defaultValue=""
                name="category-filter"
                id="category-filter"
                onChange={(e) => this.searchCategory(e.target.value)}>
                <option value="">Choose a category</option>
                <option value="Automotive">Automotive</option>
                <option value="Baby">Baby</option>
                <option value="Beauty">Beauty</option>
                <option value="Books">Books</option>
                <option value="Clothing">Clothing</option>
                <option value="Computers">Computers</option>
                <option value="Electronics">Electronics</option>
                <option value="Games">Games</option>
                <option value="Garden">Garden</option>
                <option value="Grocery">Grocery</option>
                <option value="Health">Health</option>
                <option value="Home">Home</option>
                <option value="Industrial">Industrial</option>
                <option value="Jewelery">Jewelery</option>
                <option value="Kids">Kids</option>
                <option value="Movies">Movies</option>
                <option value="Music">Music</option>
                <option value="Outdoors">Outdoors</option>
                <option value="Shoes">Shoes</option>
                <option value="Sports">Sports</option>
                <option value="Tools">Tools</option>
                <option value="Toys">Toys</option>
              </select>
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <label className="control-label" htmlFor="price-sort">Sort by</label>
              <select 
                className="form-control" 
                name="price-sort" 
                defaultValue=""
                onChange={(e) => {this.sortResults(e.target.value)}}
                id="price-sort">
                <option value="">Select sort option</option>
                <option value="lowest">Price: Low to High</option>
                <option value="highest">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// map the needed state properties to this component
function mapStateToProps(state) {
  return {params: state.params};
}

// bind actions to this component
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    setSortMethod: setSortMethod,
    setCategory: setCategory,
    fetchProducts: fetchProducts
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);