import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Movies from './components/Movies';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'Movies',
      description: 'Horror Movies',
    },
    { name: 'horror', description: 'Movies that will keep you up at night' },
    { name: 'comedy', description: 'Movies that hit the funny bone' },
    { name: 'drama', description: 'Movies for the Drama lover in you' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Movies currentCategory={currentCategory}></Movies>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;