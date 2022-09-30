import React, { useState, useEffect } from 'react';

import fetchConfig from 'middleware/fetchConfig';

import CardItem from './CardItem';

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
      {chr.error && (
        <CardItem>
          <h3 className="d-flex w-100 align-items-center justify-content-center error">
            {chr.error}
          </h3>
        </CardItem>
      )}
      {chr.loading && (
        <CardItem>
          <div className="lds-circle">
            <div />
          </div>
        </CardItem>
      )}
      {chr.isSuccess && (
        <CardItem>
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
        </CardItem>
      )}
    </>
  );
}

export default Card;
