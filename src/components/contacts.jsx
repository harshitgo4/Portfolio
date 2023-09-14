import React, { useState } from 'react'
import vg from '../assets/vg.png'
import toast from 'react-hot-toast';
import { Db } from '../firebase';
import {collection,addDoc} from 'firebase/firestore'
const Contacts = () => {
    const [disable,setdisable]=useState(false);
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [message,setmessage]=useState("");
    const submithandler=async(e)=>{
        setdisable(true);
        e.preventDefault(); 
        console.log(name ,email)

        try {
            await addDoc(collection(Db,"Contacts"),{
                'name':name,
                'email':email,
                'message':message});
            toast.success("Message Sent");
           
        } catch (error) {
            toast.error('Message Not Sent');
            console.log(error);
            
        }
        setdisable(false);
    }
  return (
    <div id="contact">
      <section><h2>Contact Me</h2>
      <form onSubmit={submithandler} >
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Your name' required/>
        <input type="email" placeholder='Your email' required  value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        <input type="text" placeholder='Your Message' value={message} onChange={(e)=>{setmessage(e.target.value)}} required/>
        <button type='submit' className={disable?"disabletbn":""}>Send</button>
      </form>

      </section>
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  )
}

export default Contacts
