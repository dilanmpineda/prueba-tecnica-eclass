import { useQuery, gql } from '@apollo/client';
import { useParams } from "react-router-dom";
import CharacterCard from '../components/CharacterCard';

const CharacterInfo = () => {
    const { characterId } = useParams();
    const GET_CHARACTER_INFO = gql`
        query GetCharacterInfo($characterId: ID!) {
            character(id: $characterId) {
                id,
                name,
                image,
                origin{
                name,
                },
                species
            }
        }`
    ;
    const { loading, error, data } = useQuery(GET_CHARACTER_INFO, {
        variables: {
            characterId
        }
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error getting character data.</p>
    return (
        <CharacterCard
            key={data.character.id}
            image={data.character.image}
            name={data.character.name}
            originName={data.character.origin.name}
            species={data.character.species}
        />
    )
}

export default CharacterInfo;