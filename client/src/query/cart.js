import {gql} from '@apollo/client'

export const GET_ALL_CARTS = gql`
    query {
        getAllCarts {
            id, title, price
        }
    }    
`