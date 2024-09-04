
const Btn = ({componentId, handleClick})=>{
    return  (
        <button onClick={(event)=>handleClick({event, componentId})} >Delete</button>
      );
}

export const PhoneBook =({itemsPhoneBook, handleClick, searchingActive})=>{


                                                                                                
                                            return      (itemsPhoneBook.length !==0 ? (<div>
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
                                                                          : searchingActive? <h2>Result not found</h2>: <h2>Lack of added contacts</h2>
                                                            )}
    

