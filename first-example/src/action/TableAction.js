// import dispatch from 'react';

export const fetchData = (data) => {
    console.log('------------',data)
    return {
      type: 'FETCH_POSTS',
      payload: data
    }
  }

  