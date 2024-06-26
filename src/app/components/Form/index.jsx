'use client'

import { useEffect, useState } from 'react';
import BtnClose from '../BtnClose';
import { GraphQLClient, gql } from 'graphql-request'


const Form = ({setShowModal, columnId}) => {

  const [ data, setData ] = useState([]);
  
  useEffect(()=> {
    const getData = async () => {
      const document = gql`
        {
          tags {
            id
            name
          }
          users {
            id
            name
          }
        }
      `
  
      const client = new GraphQLClient("http://localhost:3000/api/graphql", {
        method: 'GET'
      });
      const response = await client.request(document);

      setData(response);
    };

    getData().catch(console.error);
    
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formElt = document.querySelector('form');
    const tags = formElt.querySelectorAll('[name="tag"]:checked');
    let tagsValue = [];
    for (const tag of tags){
      tagsValue.push(parseInt(tag.value));
    }
    const date = new Date();
    const dateLocale = date.toLocaleString('fr-FR',{
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });

    const newCard = {
      title: formElt.querySelector('#taskTitle').value, 
      userId: parseInt(formElt.querySelector('[name="user"]:checked').value), 
      columnId: parseInt(columnId), 
      tagIds: tagsValue, 
      date: dateLocale, 
      describe: formElt.querySelector('#taskDescribe').value
    };

    const mutation = gql`
      mutation (
        $title: String!, 
        $userId: ID!, 
        $columnId: ID!, 
        $tagIds: [ID!]!, 
        $date: String!, 
        $describe: String
      ){
        createCard(title: $title, describe: $describe, tagIds: $tagIds, userId: $userId, columnId: $columnId, date: $date) {
          id
          title
          user{
            id
            name
          }
          describe
          tags{
            id
            name
          }
          date
        }
      }
    `

    const client = new GraphQLClient("http://localhost:3000/api/graphql", {
        method: 'POST'
    });

    const response = await client.request(mutation, newCard);

    console.log(response);

    setShowModal(false);

  }

  return (
    <div className='bg-slate-300 fixed top-0 left-0 z-10 w-screen h-screen flex items-center justify-center'>
 
      <BtnClose setShowModal={setShowModal} />

      <form className='flex flex-col space-y-5 items-center' onSubmit={(e) => handleSubmit(e)} >
        <label htmlFor="taskTitle" className='flex flex-col w-full text-center' >
          <span>Titre de la tâche</span>
          <input type="text" name="taskTitle" id="taskTitle" />
        </label>

        <label htmlFor="taskDescribe" className='flex flex-col text-center' >
          <span>Descriptif de la tâche</span>
          <textarea name="taskDescribe" id="taskDescribe" cols="40" rows="5" maxLength={500}></textarea>
        </label>

        <fieldset className='w-full flex justify-center' >
          <legend className='text-center' >Tags correspondants:</legend>
          <div className='flex flex-col'>
            {data.tags !== undefined && data.tags.map((tag) =>  
              <label htmlFor={`tag${tag.name}`} key={`tag${tag.id}`} >
                <input className='mr-2' type="checkbox" name={`tag`} value={tag.id} id={`tag${tag.name}`} />
                <span >{tag.name}</span>
              </label>
            )}
          </div>
        </fieldset>

        <div className='w-full flex flex-col items-center' >
          <legend  >Utilisateur correspondant:</legend>
          <div className='flex flex-col w-max'>
            {data.users !== undefined && data.users.map((user) => 
              <label key={`user${user.id}`} htmlFor={`user${user.name}`} >
                <input className='mr-2' type="radio" name='user' id={`user${user.name}`} value={user.id} />
                <span>{user.name}</span>
              </label>)}
          </div>  
        </div>
        

        <button className='bg-slate-700 text-slate-100 w-40' type="submit">Ajouter</button>
      </form>

    </div>
  );
};

export default Form;