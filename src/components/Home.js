import {useState,useEffect} from 'react'
import profile from './profile.png'

function About() {
  const [data,setData]= useState({});
  const [text,setText]=useState(localStorage.getItem('text') || '');
  const [name,setName]=useState(localStorage.getItem('name') || '');
  const get_data = async () =>{
   // const response= await fetch('http://127.0.0.1:8000/');
   const response= await fetch('https://fastapibackend.herokuapp.com/);
    const data= await response.json();
    const name= data.name;
    const text= data.text;
    setText(text);
    setName(name);

    if(localStorage.getItem('text')!==text){
      localStorage.setItem('text','')
    }
    if(localStorage.getItem('description')!==name){
      localStorage.setItem('description','')
    }
    
  }
  useEffect(()=>{
    get_data();

    localStorage.setItem('title',title)
    localStorage.setItem('description',desc)

    }
              ,[title,desc]
    );

  return (

    <header className="App-header">
	  <img src={profile}/>
      <h1>{title}</h1>
      <p className='t-justify'>
      {desc}
      </p>
    </header>
  );
}

export default About;
