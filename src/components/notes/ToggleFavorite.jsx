import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { TOGGLE_FAVORITE } from '../../utils/mutation';
import { GET_MY_FAVORITES_NOTE, GET_MY_NOTES, GET_NOTES } from '../../utils/query';

const ToggleFavorite = ({ id, count, favoritedBy }) => {
    const [hase, setHase] = useState(false);
    useEffect(()=>{
      let me_id = localStorage.getItem('me_id');
      console.log(me_id);
        if(favoritedBy.length > 0){
            let a = 0;
            favoritedBy.forEach(us=>{
                if(us.id === me_id) {
                    a++;
                    return
                }
            });
            if(a>0) setHase(true);
            else setHase(false);
        } else{
          setHase(false);
        }
    })
  let [toggleFavorite, {}] = useMutation(TOGGLE_FAVORITE, {
    refetchQueries: [{query: GET_MY_FAVORITES_NOTE}, {query: GET_MY_NOTES}, {query: GET_NOTES}],
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
