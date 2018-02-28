import React from 'react';
import PropTypes from 'prop-types';

class NewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.saveProduct = this.saveProduct.bind(this);
  }

  saveProduct() {
    let product = {
      name: this.state.name,
      path: `/product/${this.state.name}`
    };
    this.props.saveProduct(product);
    this.setState({ name: '' });
  }

  render() {
    return (
      <div className="panel panel-default">
        <h3>New Product</h3>
        <input type="text" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
        <button onClick={this.saveProduct} className="btn btn-success">Save</button>
      </div>
    )
  }
}

NewProduct.propTypes = {
  saveProduct: PropTypes.func
};

export default NewProduct;
