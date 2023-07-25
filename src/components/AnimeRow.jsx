import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const AnimeRow = ({anime, onClick}) => (
    <tr>
        <td>{anime.title.text}</td>
        <td>{anime.studio}</td>
        <td>{anime.genres.join(", ")}</td>
        <td>
            <Button variant="contained" size="small" onClick={() => onClick(anime)}>Select!</Button>
        </td>
    </tr>
);


AnimeRow.propTypes = {
    anime: PropTypes.shape({
        title: PropTypes.shape({
            text: PropTypes.string,
        }),
        studio: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string),
    }),
    onClick: PropTypes.func
}

export default AnimeRow;