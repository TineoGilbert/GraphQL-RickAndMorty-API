import {useQuery, gql} from "@apollo/client"

const GET_CHARACTERS = gql`
 query{
    characters{
        results{
            id
            name
            image
        }
    }
 }
`;

const useCharacter = () => {

    const {error, loading, data} = useQuery(GET_CHARACTERS)
  return (
    {
        error,
        loading,
        data
    }
  )
}

export default useCharacter