import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Error from 'next/error';
import { findAll } from 'services/episode/action';

import Layout from 'components/Layout';
import Pagination from 'components/Pagination';
import Episode from 'components/Episode';

function Home() {
  const dispatch = useDispatch();
  const episode = useSelector((state) => state.episode);

  const [page, setPage] = useState(episode.page);

  useEffect(() => {
    dispatch(findAll(page));
  }, [page]);
  return (
    <>
      {episode.error && <Error statusCode={404} />}
      {episode.isSuccess && (
        <main className="container">
          <div className="episode-container">
            <Episode episode={episode?.findAll} />
            <Pagination page={page} setPage={setPage} info={episode.info} />
          </div>
        </main>
      )}
    </>
  );
}

export default Layout(Home);
