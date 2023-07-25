import styled from '@emotion/styled';
import AnimeRow from "./AnimeRow";
import {useDispatch, useSelector} from "react-redux";
import AnimeInfo from "./AnimeInfo";

const TableTitle = styled.th`
  text-align: left;
  font-size: x-large;
`;

const TableTR = styled.tbody`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  color: black;
  width: 100%;
  border: 1px solid #ddd;
  tr:hover {background-color: #ddd;
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
  border-collapse: collapse;
  padding: 8px;
`;

const AnimeTable = () => {
    const dispatch = useDispatch();
    const anime = useSelector((state) => state.anime);
    const filter = useSelector((state) => state.filter);

    return (
        <TwoColumn>
            <div>
            <table>
                <thead>
                <tr>
                    <TableTitle>Name</TableTitle>
                    <TableTitle>Studio</TableTitle>
                    <TableTitle>Genres</TableTitle>
                </tr>
                </thead>
                <TableTR>
                {anime
                    .filter((anime => anime.title.text.toLowerCase().includes(filter.toLowerCase())))
                    .map(anime => (
                        <AnimeRow key={anime.description} anime={anime} onClick={anime => dispatch({
                            type: 'set select',
                            payload: anime
                        })}/>
                    ))
                    }

                </TableTR>

            </table>
            </div>
            <AnimeInfo />
        </TwoColumn>

            )}

export default AnimeTable;