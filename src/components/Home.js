
//picture

import profile from './profile.png'


function Contact() {
  return (


      <header className="App-header">
        <img className='slideIn' src={profile} alt="profile" />
        <p>Andrija Jovanovic <br/>
         <code>Fullstack developer</code>
        </p>
      </header>
  );
}

export default Contact;
