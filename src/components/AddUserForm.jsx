import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from 'yup';

const Shema = Yup.object().shape({
  name: Yup.string()
           .min(2,"Name is too short")
           .max(20,"Name is too long")
           .required('Name is required'),
  number:  Yup.number()
              .typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus")
              .integer("A phone number can't include a decimal point")
              .min(8)
              .required('A phone number is required')
})

export const AddUserForm =({addContact})=>{
return      (<div>
                <h2>Add New Constat</h2>
                <Formik 
                validationSchema={Shema}
                initialValues={{name:"", number:""}} 
                onSubmit={
                  (values, actions)=>{
                    addContact(values)
                    actions.resetForm()
                  }}>
                  <Form className="add-user-form">
                    {/* <labels></labels> useID()*/}
                    <div className="Add-user-box">
                    <Field className="add-user-name" type="text" name="name" placeholder="Name and Surneme"/ >
                    <ErrorMessage name="name" as='span' className="error-msg"/>
                    </div>
                    <div>
                    <Field className="add-user-number" type="phone" name="number" placeholder="+48 111 111 111"/>
                    <ErrorMessage name="number" as='div' className="error-msg"/>
                    </div>
                    <button type="submit" className="add-user-buton">Add Contact</button>
                  </Form>
                </Formik>
             </div>)
}
    
