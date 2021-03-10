import contact from './contact.png'


function Contact() {

  return (


      <header className="App-header">
        <h1>Contact Me</h1>
        <form >
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </header>
  );
}

export default Contact;
