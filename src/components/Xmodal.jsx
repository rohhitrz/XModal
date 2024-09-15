import React, {useState} from "react";

const validateEmail=(email)=>{
    return email.includes('@');
}
const validatePhoneNumber=(phone)=>{
    return phone.length === 10 && !isNaN(phone);

}

const validateDob=(dob)=>{
    const currentDate=new Date();
    const dobDate=new Date(dob);
    return dobDate<=currentDate;
}



export default function Modal (){
    const [isOpen,setIsOpen]=useState(false);
    const [formData,setFormData]=useState({
        username:"",
        email:"",
        phone:"",
        dob:"" 
    })



    return(
        <button>Open Form</button>



    )




}