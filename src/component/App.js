import React , {useState , useEffect} from 'react';
import {uuid} from 'uuidv4';
import './App.css';
import Header from "./Header"
import Addcontact from "./Addcontact";
import Contactlist from "./Contactlist"; 

function App() {
   const [contacts , setcontacts] = useState([]);
    const LOCAL_STORAGE_KEY ="contacts";
   const addcontactHandler = (contact) => {
    console.log(contact); 
    setcontacts([...contacts,{id: uuid(), ...contact}])
   };
   const removecontact = (id) => {
   const newcontact = contacts.filter((contact) =>{
     return contact.id !==id;

   })
   setcontacts(newcontact);
   }

   useEffect(() => {
    const retrieve = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) //these line are used to show that data can be retrived after refreshing the page to store it in local storage.
    if(retrieve) setcontacts(retrieve);
  },[]);
    useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
   },[contacts]);

  return (
    <div className='ui container'>
    <Header />
    <Addcontact  addcontactHandler ={addcontactHandler}/>
    <Contactlist contacts = {contacts} getContactId = {removecontact}/>
    </div>
  );
}

export default App;
