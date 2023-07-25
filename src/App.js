import './App.css';
import {useEffect} from "react";
import styled from '@emotion/styled';
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useSelector, useDispatch} from "react-redux";

import AnimeInput from "./components/AnimeInput";
import CssBaseline from "@mui/material/Button";
import AnimeTable from "./components/AnimeTable";

const AnimeReducer = (state = {
    anime: [],
    filter: "",
    selectedItem: null
}, action) => {
    switch (action.type){
        case 'set filter':
            return {
                ...state,
                filter: action.payload
            };
        case 'set anime':
            return {
                ...state,
                anime: action.payload
            };

        case 'set select':
            return {
                ...state,
                selectedItem: action.payload
            };
        default:
            return state;
    }
}

const store = configureStore({reducer: AnimeReducer});

const Title = styled.h1`
  text-align: center;
`;


const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;



function App() {
  const dispatch = useDispatch();
  const anime = useSelector(state => state.anime);

  useEffect(() => {
      fetch("http://localhost:3000/starting-react/anime.json")
          .then(response => response.json())
          .then((data) => dispatch({
              type: 'set anime',
              payload: data,
          }));
  }, [dispatch]);

  if(!anime){
      return <div>Loading Data!</div>
  }
  return (
        <Container>
            <CssBaseline />
            <Title>Anime Search</Title>
            <AnimeInput/>
            <AnimeTable/>
        </Container>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => <Provider store={store}><App /></Provider>;
