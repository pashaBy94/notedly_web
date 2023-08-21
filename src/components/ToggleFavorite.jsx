import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GET_MY_FAVORITES_NOTE, GET_MY_NOTES, IS_LOG, TOGGLE_FAVORITE } from '../utils/query';

const ToggleFavorite = ({ id, count, favoritesMy }) => {
    const [hase, setHase] = useState(false);
    useEffect(()=>{
        if(favoritesMy.length !== 0){
            let a = 0;
            favoritesMy.map(note=>{
                if(note.id === id) {
                    a++;
                    return
                }
            });
            if(a>0) setHase(true);
            else setHase(false);
        }
    })
  let [toggleFavorite, {}] = useMutation(TOGGLE_FAVORITE, {
    refetchQueries: [{query: GET_MY_FAVORITES_NOTE}, {query: GET_MY_NOTES}],
    onCompleted: (data) => {
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <div>
      <button
        onClick={(ev) => {
          ev.preventDefault();
          toggleFavorite({variables:{id}});
        }}
      >{!hase?"Add to favorites": "Remove to favorites"}
      </button>
        <span role="img" className="mr-2 p-1 bg-slate-200">
          &#128077;
        </span>
      {' '}
      <strong>{count}</strong>
    </div>
  );
};
export default ToggleFavorite;
