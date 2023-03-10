import { gql, useQuery } from "@apollo/client";

const GET_SINGLE_CHARACTER = gql`
 query GetCharacter($id: ID!){
    character(id: $id){
        id
        name
        image
        episode{
            name
            episode
        }
    }
 }
`;

export const useSingleCharacter = (id) =>{
    const {error, loading, data} = useQuery(GET_SINGLE_CHARACTER, {
        variables:{
            id
        }
    });

    return{
        error,
        loading,
        data
    }
}