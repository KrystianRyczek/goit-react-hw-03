import { useState, useEffect } from "react"
import { AddUserForm } from './AddUserForm'
import { SearchUserForm } from './SearchUserForm'
import { PhoneBook } from './PhoneBook'

const start = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
 //window.localStorage.setItem("contacts", JSON.stringify(start))

if(JSON.parse(window.localStorage.getItem("contacts"))===null){
  window.localStorage.setItem("contacts", JSON.stringify([]))
}

function App() {

  const storedContacts=JSON.parse(window.localStorage.getItem("contacts"))

  const [contacts, setContacts] = useState(storedContacts)
  const [filterdContacts, setFilterdContacts] = useState([])
  const [searchValue, setSearchValue] = useState("")
  //const [searchValueFound, setSearchValueFound] = useState(true)

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts]);

   const addContact = (values)=>{
    console.log(values)
    setContacts([...contacts,{id:`id-${Date.now()}`,...values}])
    if(searchValue!==""){
      console.log("dupa")
      if(values.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      setFilterdContacts([...filterdContacts,{id:`id-${Date.now()}`,...values}])
    }
  }
  const hendeleFilter = (value)=>{

        setFilterdContacts(value.trim()!==""
                                            ? contacts.filter((contact)=>contact.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) 
                                            : [])

  }

  const handleClick = (componentId)=>{
    const id= componentId.componentId
    setContacts(contacts.filter((contact)=>contact.id.toLocaleLowerCase()!==id.toLocaleLowerCase()))
    setFilterdContacts(filterdContacts.filter((filterdContact)=>filterdContact.id.toLocaleLowerCase()!==id.toLocaleLowerCase()))
}     




const searchingActive = (searchValue.trim()!==""
                                               ? true 
                                               : false)

const itemsPhoneBook=()=>{
  if (filterdContacts.length===0 & !searchingActive) {
    return (contacts)
  }
    return (filterdContacts)
  
}






console.log("filterdContacts",filterdContacts)
console.log("searchingActive",searchingActive)
console.log("itemsPhoneBook",itemsPhoneBook())
  return (
    <>
      <AddUserForm
      addContact={addContact}/>
      <SearchUserForm
      hendeleFilter={hendeleFilter}
      setSearchValue={setSearchValue}
      searchValue={searchValue}/>
      <PhoneBook
      searchingActive={searchingActive}
      itemsPhoneBook = {itemsPhoneBook()}
      handleClick={handleClick}
      />
    </>
  )
}
export default App
