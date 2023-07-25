import styled from '@emotion/styled';
import {useDispatch, useSelector} from "react-redux";


const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const AnimeInput = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    return (
        <Input
            type="text"
            value={filter}
            onChange={(evt) => dispatch({
                type: 'set filter',
                payload: evt.target.value
            })}/>
    )
}

export default AnimeInput;