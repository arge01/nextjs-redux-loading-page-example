import React from 'react';

import Link from 'next/link';

function Episode({ episode = [] }) {
  return (
    <ul className="episode row justify-content-center align-items-center">
      {episode?.map((eps) => (
        <li className="col-lg-4 col-md-6 col-xs-12" key={eps.id}>
          <div className="capsule">
            <Link
              href={{
                pathname: '/character',
                query: { 'episode-id': eps?.id },
              }}
            >
              <a>
                <div className="title">
                  <span>Season Name: </span> {eps.name}
                </div>
                <div className="air-date">
                  <span>Date: </span> {eps.air_date}
                </div>
                <div className="go-to-char">
                  go to character list{' '}
                  <i className="fas fa-angle-double-right" />
                </div>
              </a>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Episode;
