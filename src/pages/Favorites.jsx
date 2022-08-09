import { gql, useQuery } from '@apollo/client';
import { Container, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import SimpleCharacterCard from '../components/SimpleCharacterCard';
import { addCharacter } from '../store/slices/characters';

const Favorites = () => {
    const { favorites } = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    const GET_FAV_CHARACTERS = gql`
        query GetFavCharacters($listIds: [ID!]!) {
            charactersByIds(ids: $listIds) {
                id,
                name,
                image
            }
        }
    `;
    const { loading, error, data } = useQuery(GET_FAV_CHARACTERS, {
        variables: {
            listIds: favorites
        }
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error getting characters data.</p>

    const handleClickFavorite = (inFavorites, characterId) => {
        let payload = {
            inFavorites,
            characterId
        }
        dispatch(addCharacter(payload));
    }

    return (
        <Container>
            <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 2, sm: 2, md: 2 }}
                direction="row"
                justifyContent="center"
            >
                {favorites.length > 0 ? data.charactersByIds.map(character => {
                    return (
                        <Grid item key={character.id}>
                            <SimpleCharacterCard
                                characterId={character.id}
                                characterName={character.name}
                                characterImage={character.image}
                                handleClickFavorite={handleClickFavorite}
                                inFavorites={favorites.includes(character.id)}
                            />
                        </Grid>
                    )
                }) : <p>There are not favorite characters</p> }
            </Grid>
        </Container>
    )
}

export default Favorites;