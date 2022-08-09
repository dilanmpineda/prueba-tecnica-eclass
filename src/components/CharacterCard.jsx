import { Card, CardContent, CardMedia, Container } from "@mui/material"

const CharacterCard = ({
    image,
    name,
    originName,
    species
}) => {
    return (
        <Container>
            <Card>
                <CardMedia
                    component="img"
                    image={image}
                />
                <CardContent>
                    <p>Name: {name}</p>
                    <p>Origin: {originName}</p>
                    <p>Species: {species}</p>
                </CardContent>
            </Card>
        </Container>
    )
}

export default CharacterCard;