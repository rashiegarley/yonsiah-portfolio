import logo from './logo.svg';
import './App.css';
import Hobbies from './components/Hobbies';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Education from './components/Education';
import AuthorCard from './components/AuthorCard';
import {useState} from "react";



function App() {
  const [isActive, setisActive] = useState ({
    active: true,
    name: 'education'
  })
  return (
    <>
     <Navbar />

      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            {/* <!-- Work --> */}
          <AuthorCard isActive={isActive} setisActive={setisActive} />

            { isActive.active && isActive.name == "education" ? (
              <Education />
            ) : isActive.active && isActive.name == "work" ? (
              <Work />
            ) : (
              <Hobbies />
            )}
          
          </div>
          {/* <!-- /End replace --> */}

        </main>
      </div>
    </>
  );
}

export default App;
