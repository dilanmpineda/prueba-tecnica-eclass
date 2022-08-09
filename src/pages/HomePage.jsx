import { useQuery, gql } from '@apollo/client';
import { Container, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { addCharacter } from '../store/slices/characters'
import SimpleCharacterCard from '../components/SimpleCharacterCard';

const GET_ALL_CHARACTERS = gql`
    query {
        characters {
            results {
                id,
                name,
                image
            }
        }
    }
`;

const HomePage = () => {
    const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);
    const { favorites } = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error getting character data.</p>

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
                {data.characters.results.map(character => {
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
                })}
            </Grid>
        </Container>
    );
}

export default HomePage;