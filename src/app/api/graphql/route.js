// Next.js Custom Route Handler: https://nextjs.org/docs/app/building-your-application/routing/router-handlers
import { createYoga, createSchema } from 'graphql-yoga';

import UserModel from '../userModel';
//import { PrismaClient } from '@prisma/client'
// import UserModel from '../userModel';

//const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

const getUsers = async () => {
  //const users = await prisma.user.findMany();
  //console.log(users);
  // await prisma.$disconnect()

  const member = await UserModel.find();
  const test = await UserModel.showData('Kévin');

  console.log(test);
  console.log(member);

  //return users;
}

getUsers();

const usersData = [
  { id: 1, name: 'Ben' },
  { id: 2, name: 'Johanna' },
  { id: 3, name: 'Kévin' },
  { id: 4, name: 'Louis' }
];

const tagsData = [
  { id: 1, name: 'Web' },
  { id: 2, name: 'POC' },
  { id: 3, name: 'UX' },
  { id: 4, name: 'Bug' },
  { id: 5, name: 'Design' },
  { id: 6, name: 'Tests' },
  { id: 7, name: 'DevOps' }
];

const TagList = {
  add(name) {

    const tag = {
      id: parseInt(8),
      name: name,
    }

    tagsData.push(tag)

    return tag
  }
}

const columnsData = [
  { id: 1, name: 'À faire' },
  { id: 2, name: 'En cours' },
  { id: 3, name: 'Terminé' },
];

const cardsData = [
  {
    id: 1,
    title: 'Première carte',
    user: 1,
    tags: [1,4],
    column: 1,
    date: '19/06/2023',
    describe: 'Première description',
  },
  {
    id: 2,
    title: 'Deuxième carte',
    user: 2,
    tags: [5],
    column: 1,
    date: '05/06/2023',
    describe: 'Deuxième description'
  },
  {
    id: 3,
    title: 'Troisième carte',
    user: 3,
    tags: [1,2],
    column: 3,
    date: '05/06/2023',
  },  {
    id: 4,
    title: 'Quatrième carte',
    user: 1,
    tags: [3],
    column: 2,
    date: '10/06/2023',
  },  {
    id: 5,
    title: 'Cinquième carte',
    user: 4,
    tags: [1,6],
    column: 2,
    date: '20/06/2023'
  },
  {
    id: 6,
    title: 'Sixième carte',
    user: 3,
    tags: [7],
    column: 2,
    date: '10/06/2023',
    describe: 'Sixième description'
  },
];

const CardsInColumn = {
  add(title, describe, tagIds, userId, columnId, date) {

    const card = {
      id: parseInt(7),
      title: title,
      describe: describe,
      tags: tagIds.map(value => parseInt(value)),
      user: parseInt(userId),
      column: parseInt(columnId),
      date: date
    }

    cardsData.push(card)

    return card
  }
}

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type User {
        id: ID!
        name: String!
      }

      type Tag {
        id: ID!
        name: String!
      }

      type Column {
        id: ID!
        name: String!
        cards: [Card!]!
      }

      type Card {
        id: ID!
        title: String!
        user: User!
        column: Column!
        tags: [Tag!]!
        date: String!
        describe: String
      }

      type Query {
        users: [User!]!
        tags: [Tag!]!
        columns: [Column!]!
        cards: [Card!]!
      }

      type Mutation {
        createCard(
          title: String!
          describe: String
          tagIds: [ID!]!
          userId: ID!
          columnId: ID!
          date: String!
        ): Card

        createTag(name: String!): Tag
      }

      schema {
        query: Query
        mutation: Mutation
      }
    `,
    resolvers: {
      Query: {
        users: () => usersData,
        tags: () => tagsData,
        columns: () => columnsData,
        cards: () => cardsData,
      },
      Card: {
        user: (parent) => {
          return usersData.find((user) => user.id === parent.user);
        },
        tags: (parent) => {
          return tagsData.filter((tag) => parent.tags.includes(tag.id));
        },
        column: (parent) => {
          return columnsData.find((column) => column.id === parent.column);
        },
      },
      Column: {
        cards: (parent) => {
          return cardsData.filter((card) => card.column === parent.id);
        },
      },
      Mutation: {
        createCard: (parent, { title, describe, tagIds, userId, columnId, date}) => {
          console.log(title, describe, tagIds, userId, columnId, date);
          const card = CardsInColumn.add(title, describe, tagIds, userId, columnId, date)
          return card
        },

        createTag: (parent, {name}) => {
          const tag = TagList.add(name);
          return tag
        }
      }
    },
  }),

  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: '/api/graphql',

  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },
})

export { handleRequest as GET, handleRequest as POST }