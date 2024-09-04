
const Btn = ({componentId, handleClick})=>{
    return  (
        <button onClick={(event)=>handleClick({event, componentId})} >Delete</button>
      );
}

export const PhoneBook =({itemsPhoneBook, handleClick})=>{
                                            return      (<div>
                                                                <h1>Phonebook</h1>
                                                                <div className="contacts-box">
                                                                    {itemsPhoneBook.map((item)=>{
                                                                                                return(
                                                                                                        <div key={item.id} className="contact-box">
                                                                                                            <div>
                                                                                                                <p  className="contact-name">{item.name}</p>
                                                                                                                <p  className="contact-number">{item.number}</p>
                                                                                                            </div>
                                                                                                            <Btn
                                                                                                                key={item.id}
                                                                                                                componentId={item.id}
                                                                                                                handleClick={handleClick}
                                                                                                            />
                                                                                                        </div>
                                                                                                    )
                                                                                                    })}
                                                                </div>
                                                         </div>)
}
    

