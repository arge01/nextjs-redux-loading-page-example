/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Error from 'next/error';
import React, { useState, useEffect } from 'react';
import fetchConfig from '../middleware/fetchConfig';

function Card({ character = 'x://x.x/x/x/0' }) {
  const [chr, setChr] = useState({
    character: {},
    isSuccess: false,
    loading: false,
    error: undefined,
  });

  useEffect(() => {
    setChr({ ...chr, loading: true });
    const id = character.split('/');
    if (id?.[5]) {
      fetchConfig('get', 'character/', `${id?.[5]}`)
        .then((paylad) => paylad?.data)
        .then((data) =>
          setChr({
            ...chr,
            loading: false,
            error: undefined,
            isSuccess: true,
            character: data,
          })
        )
        .catch((err) =>
          setChr({ ...chr, loading: false, isSuccess: false, error: err })
        );
    } else {
      setChr({ ...chr, error: 'Id: error' });
    }
  }, []);
  return (
    <>
      {chr.error && <Error statusCode={404} />}
      {chr.loading && (
        <li className="col-lg-4 col-md-6 col-xs-12">
          <div className="capsule">
            <div className="lds-circle">
              <div />
            </div>
          </div>
        </li>
      )}
      {chr.isSuccess && (
        <li className="col-lg-4 col-md-6 col-xs-12">
          <div className="capsule">
            <div className="img">
              <img src={chr.character.image} />
            </div>
            <div className="items">
              <div className="title">
                <span>Name:</span> {chr.character.name}
              </div>
              <div className="title">
                <span>Species:</span> {chr.character.species}
              </div>
              <div className="title">
                <span>Status:</span> {chr.character.status}
              </div>
            </div>
            <div className="gender">{chr.character.gender}</div>
          </div>
        </li>
      )}
    </>
  );
}

export default Card;
