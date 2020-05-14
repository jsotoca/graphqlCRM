const {gql} = require('apollo-server');

module.exports = gql`
    type User{
        _id:ID
        name:String
        email:String
        avatar:String
        Status:Boolean
        createdAt:String
        updatedAt:String
    }
    input SignInInput{
        email:String
        password:String
    }
    input SignUpInput{
        name:String!
        email:String!
        password:String!
        avatar:String
    }
    type Token{
        token:String
    }
    type Query{
        obtenerUsuario(token:String!):User
    }
    type Mutation{
        signUp(input:SignUpInput!):User
        signIn(input:SignInInput!):Token
    }
`;
