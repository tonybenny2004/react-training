import React from 'react';
import './product.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('constructor');
  }

  /*
    Calls before rendering a component
    No rerendering if setState is called
   */
  componentWillMount() {
    console.log('componentWillMount');
  }

  /*
    For initial api calls
    subscriptions
    setting state here will rerender component
   */
  componentDidMount() {
    console.log('componentDidMount');
  }

  /*
    Used to change state based on compairing new props and existing prosp
   */
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps');
    // if(nextProps.text !== this.props.text) {
    //   this.setState({ ss: Number(nextProps.text)})
    // }
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
  }

  /*
  Update only
   */
  componentWillUpdate(nextProps, nextState){
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidCatch(error, info){
    console.log('componentDidCatch');
  }

  render() {
    return (
      <div className="product-details">
        <h1>{this.props.match.params.productId}</h1>
      </div>
    )
  }
}


export default ProductDetails;
