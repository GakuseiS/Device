import {gql} from '@apollo/client'

export const CREATE_FEEDBACK = gql`
    mutation createFeedback($input: FeedbackInput) {
        createFeedback(input: $input) {
            name, email, text
        }
    }
`