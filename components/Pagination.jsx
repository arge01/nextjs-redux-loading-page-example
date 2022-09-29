import React from 'react';

function Pagination({ page, setPage, info }) {
  return (
    <ul className="pagination">
      <li>
        <button
          disabled={!info.prev}
          type="button"
          onClick={() => setPage(page - 1)}
        >
          Prew
        </button>
      </li>
      <li>
        <button
          disabled={!info.next}
          type="button"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
