
//picture

import profile from './profile.png'


function Contact() {
  return (


      <header className="App-header">
        <img className='slideIn' src={profile} alt="profile" />
        <p>
	 <code> Andrija Jovanovic</code> <br/>
	  
         Fullstack developer
        </p>
      </header>
  );
}

export default Contact;
