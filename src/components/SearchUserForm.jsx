import {Field, Form, Formik} from "formik"



export const SearchUserForm =({hendeleFilter, setSearchValue, searchValue})=>{
  
  
return      (<div>
                <h1>Searching contact by name</h1>
                <Formik 
                initialValues={{filter:""}}
                
                >
                  <Form>
                    {/* <labels></labels> useID()*/}
                    <Field 
                    type="text" 
                    name="filter"
                    placeholder="Search..."
                    value= {searchValue}
                    onChange={(event)=>{
                                        setSearchValue(event.target.value)
                                        hendeleFilter(event.target.value)
                                       }}
                    />
                  </Form>
                </Formik>
             </div>)
}
    
// onChange={(event)=>{
//   event.preventDefault()

//   hendeleFilter(event.target)
//   }}