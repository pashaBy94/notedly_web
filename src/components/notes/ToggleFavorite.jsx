import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { TOGGLE_FAVORITE } from '../../utils/mutation';
import {
  GET_MY_FAVORITES_NOTE,
  GET_MY_NOTES,
  GET_NOTES,
} from '../../utils/query';
import { AiFillStar } from 'react-icons/ai';
import ReactIcons from '../../hoc/ReactIcons';

const ToggleFavorite = ({ id, count, favoritedBy }) => {
  const [hase, setHase] = useState(false);
  const [star, setStar] = useState(false);
  useEffect(() => {
    let me_id = localStorage.getItem('me_id');
    if (favoritedBy.length > 0) {
      let a = 0;
      favoritedBy.forEach((us) => {
        if (us.id === me_id) {
          a++;
          return;
        }
      });
      if (a > 0) setHase(true);
      else setHase(false);
    } else {
      setHase(false);
    }
  });
  let [toggleFavorite, {}] = useMutation(TOGGLE_FAVORITE, {
    refetchQueries: [
      { query: GET_MY_FAVORITES_NOTE },
      { query: GET_MY_NOTES },
      { query: GET_NOTES },
    ],
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <div>
      <button
        className=" relative rounded-full hover:shadow-[0_0_4px_0_rgba(226,183,10,0.45)]"
        onClick={(ev) => {
          ev.preventDefault();
          setStar(true);
          setTimeout(() => {
            setStar(false);
          }, 1000);
          toggleFavorite({ variables: { id } });
        }}
      >
        {!hase ? (
          <div className={`${star ? 'animate-wiggle' : ''}`}>
            <ReactIcons
              element={AiFillStar}
              col="#D3CFBE"
              cl="global-class-name"
              sz="2em"
            />
          </div>
        ) : (
          <div className={`${star ? 'animate-wiggle' : ''}`}>
            <ReactIcons
              element={AiFillStar}
              col="#F5CA1B"
              cl="global-class-name"
              sz="2em"
            />
          </div>
        )}
        <span className=" absolute right-[-5px] bottom-[-5px] rounded-full bg-sky-500 p-1 w-5 h-5 leading-[10px] text-[10px] font-bold">
          {count}
        </span>
      </button>
    </div>
  );
};
export default ToggleFavorite;
