/* eslint-disable react/no-array-index-key */
/* eslint-disable no-obj-calls */
/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { find } from '../services/episode/action';

import Layout from '../components/Layout';
import Card from '../components/Card';

function Character() {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const episode = useSelector((state) => state.episode);

  const [findSuccess, setFindSuccess] = useState(query);

  useEffect(() => {
    if (findSuccess) {
      if (query?.['episode-id']) {
        dispatch(find(query?.['episode-id'])).finally(() =>
          setFindSuccess(null)
        );
      }
    }
  }, [findSuccess, query]);

  return (
    <main>
      <section className="top-header">
        <span>
          <div className="item">
            <b>Episode:</b> {episode?.find?.name}
          </div>{' '}
          <div className="line" />{' '}
          <div className="item">
            <b>Caracters: </b>
            {Math.ceil(episode?.find?.characters?.length + 1)}{' '}
          </div>
        </span>
        <div className="go-back">
          <Link href="/">
            <a>
              {' '}
              <i className="fas fa-backward" />{' '}
            </a>
          </Link>
        </div>
      </section>
      <section className="character">
        <div className="container">
          {!findSuccess && (
            <ul className="row characters justify-content-center align-items-center">
              {episode?.find?.characters?.map((chr, key) => (
                <Card key={key} character={chr} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}

export default Layout(Character, 'episode');
