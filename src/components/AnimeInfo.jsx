import { useSelector} from "react-redux";
import styled from '@emotion/styled';

const Info = styled.div`
  border-style: outset;
  width: 100%;
  padding: 5px;
  margin: 10px;
  color: black;
  border-width: 5px;
  h1{
    color: royalblue;
  }
`;

const AnimeInfo = () => {
    const selectedItem = useSelector(state => state.selectedItem);

    return selectedItem ? (
        <Info>
            <h1>{selectedItem.title.text}</h1>
            <table>
                    <tbody>
                    <tr>
                        <td>{selectedItem.description}</td>
                    </tr>
                    </tbody>

            </table>
        </Info>
    ) : null
}

export default AnimeInfo;