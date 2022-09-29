/* eslint-disable func-names */
/* eslint-disable no-shadow */
import React from 'react';

import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import Head from './Head';
import Footer from './Footer';

import 'react-toastify/dist/ReactToastify.css';

function Layout(Component, title) {
  return function (props) {
    const state = useSelector((state) => state);
    return (
      <section id="section-body">
        <Head title={title ? state?.[title]?.find?.name : null} />
        <Component {...props} />
        <Footer />
        <ToastContainer autoClose={2000} />
      </section>
    );
  };
}

export default Layout;
