import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductItem = ({ item }) => (<li>
  <Link to={item.path}>{item.name}</Link>
</li>);

ProductItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string
  }),
};
export default ProductItem;
