import Button from "@mui/material/Button";
import AnimeTypes from "../AnimeType";

const AnimeRow = ({anime, onClick}) => {

    return (
        <tr>
            <td>{anime.title.text}</td>
            <td>{anime.studio}</td>
            <td>{anime.genres.join(", ")}</td>
            <td>
                <Button variant="contained" size="small" onClick={() => onClick(anime)
                }>Select!</Button>
            </td>
        </tr>
)};


AnimeRow.propTypes = {
    anime: AnimeTypes,
};

export default AnimeRow;