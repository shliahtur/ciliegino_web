import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ author, created_at, num_comments, title, points, url }) => (
    <tr>
      <td><a href={url} className="newsTitle">{title}</a></td>
      <td>{`${points} points`}</td>
      <td>{`${num_comments} comments`}</td>
      <td>{new Date(created_at).toLocaleDateString()}</td>
      <td>{author}</td>      
      </tr>
);

 Row.propTypes = {
  author: PropTypes.string,
  created_at: PropTypes.string.isRequired,
  num_comments: PropTypes.number,
  title: PropTypes.string,
  points: PropTypes.number,
  url: PropTypes.string,
}

Row.defaultProps = {
  author: '',
  num_comments: 0,
  title: 'Here should be a title',
  points: 0,
  url: '#'
}

export default Row;