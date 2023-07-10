'use client'

import Column from "./components/Column";
import { GraphQLClient, gql } from 'graphql-request'
import { useEffect, useState } from "react";

export default function Home() {

  const [ data, setData ] = useState([]);
  
  useEffect(()=> {
    const getData = async () => {
      const document = gql`
        {
          columns {
            id
            name
            cards {
              id
              title
              user {
                id
                name
              }
              tags {
                id
                name
              }
              date
              describe
            }
          }
        }
      `
  
      const client = new GraphQLClient("http://localhost:3000/api/graphql", {
        method: 'GET'
      })
      const response = await client.request(document);

      setData(response.columns);
    };

    getData().catch(console.error);
    
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-between px-3 py-10 lg:flex-row lg:py-20 lg:px-16 lg:space-x-8">
      {data.length > 0 && data.map((col) => <Column key={`columns${col.id}`} title={col.name} cardData={col.cards} /> )}
    </main>
  )
}
