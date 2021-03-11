import {useState,useEffect} from 'react'


function About() {
  const [data,setData]= useState({});
  const [title,setTitle]=useState(localStorage.getItem('title') || '');
  const [desc,setDesc]=useState(localStorage.getItem('description') || '');
  const get_data = async () =>{
    //const response= await fetch('http://127.0.0.1:8000/about');
    const response= await fetch('https://fastapibackend.herokuapp.com/about');
    const data= await response.json();
    const title= data.title;
    const desc= data.description;
    setDesc(desc);
    setTitle(title);
    
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
      <h1>{title}</h1>
      <p className='t-justify'>
      {desc}
      </p>
    </header>
  );
}

export default About;
