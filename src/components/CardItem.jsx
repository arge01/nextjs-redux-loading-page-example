import React from 'react';

function CardItem({ children }) {
  return (
    <li className="col-lg-4 col-md-6 col-xs-12">
      <div className="capsule">{children}</div>
    </li>
  );
}

export default CardItem;
