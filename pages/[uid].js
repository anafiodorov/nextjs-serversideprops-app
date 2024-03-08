import React from 'react';

const getServerSideProps = (context) => {
  const { params } = context;

  const userId = params.uid;

  return {
    props: {
      id: 'userid-' + userId,
    },
  };
};

export default getServerSideProps;
