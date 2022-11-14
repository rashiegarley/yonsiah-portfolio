import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div id="navbar">
        <nav class="bg-white shadow">
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 justify-between">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* <!-- Mobile menu button --> */}
                <button type="button" class="
                    inline-flex
                    items-center
                    justify-center
                    rounded-md
                    p-2
                    text-gray-400
                    hover:bg-gray-100 hover:text-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-indigo-500
                  " aria-controls="mobile-menu" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  {/* <!--
                  Icon when menu is closed.

                  Heroicon name: outline/bars-3

                  Menu open: "hidden", Menu closed: "block"
              --> */}
                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  {/* <!--
                Icon when menu is open.
    
                Heroicon name: outline/x-mark
    
                Menu open: "block", Menu closed: "hidden"
              --> */}
                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="
                  flex flex-1
                  items-center
                  justify-center
                  sm:items-stretch sm:justify-start
                ">
                <div class="flex flex-shrink-0 items-center">
                  <h4 class="block h-6 w-auto lg:hidden">Carlos S. Nah</h4>
                  <h4 class="hidden h-6 w-auto lg:block">Carlos S. Nah</h4>
                </div>
                <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
                  <a href="#" class="
                      inline-flex
                      items-center
                      border-b-2 border-indigo-500
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-gray-900
                    ">Projects</a>
                  <a href="#" class="
                      inline-flex
                      items-center
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-gray-500
                      hover:border-gray-300 hover:text-gray-700
                    ">Blog</a>
                  <a href="#" class="
                      inline-flex
                      items-center
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-gray-500
                      hover:border-gray-300 hover:text-gray-700
                    ">Contact</a>
                </div>
              </div>
              <div class="
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  pr-2
                  sm:static sm:inset-auto sm:ml-6 sm:pr-0
                "></div>
            </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 pt-2 pb-4">
              {/* <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" --> */}
              <a href="#" class="
                  block
                  border-l-4 border-indigo-500
                  bg-indigo-50
                  py-2
                  pl-3
                  pr-4
                  text-base
                  font-medium
                  text-indigo-700
                ">Projects</a>
              <a href="#" class="
                  block
                  border-l-4 border-transparent
                  py-2
                  pl-3
                  pr-4
                  text-base
                  font-medium
                  text-gray-500
                  hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700
                ">Blog</a>
              <a href="#" class="
                  block
                  border-l-4 border-transparent
                  py-2
                  pl-3
                  pr-4
                  text-base
                  font-medium
                  text-gray-500
                  hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700
                ">Contact</a>
            </div>
          </div>
        </nav>
      </div>

      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            {/* <!-- Work --> */}
            <div id="intro" class="bg-[#
            3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
              <div id="avatar" class="flex justify-center py-2">
                <img class="w-40" src="https://api.multiavatar.com/JB.svg " alt="JB image" />
              </div>
              <div id="content" class="prose lg:prose-xl px-2">
                <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">Carlos S. Nah</h1>
                <small class="text-center block text-md text-gray-800">Writer, Teacher &amp; Software Engineer</small>
                <p class="text-justify text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis vero voluptates vitae rerum eos non laboriosam deleniti voluptatibus ipsum blanditiis
                  expedita architecto tempore necessitatibus quisquam vel ipsam corporis, nemo repudiandae. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Modi asperiores, amet omnis inventore aliquid nam. Autem
                  obcaecati ut ipsa rem temporibus nostrum, quibusdam optio, itaque culpa ad impedit aperiam quasi.</p>
              </div>
            </div>

            {/* <!-- Work --> */}
            <div id="work" class="bg-[#B2B2B2] h-auto my-6 py-8 rounded-lg border-4">
              <div class="flex justify-center">
                <h3 class="border-4 w-20  border-dashed px-4 py-4">Work</h3>
              </div>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Kwagei Group</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                  pavilions, award-winning fireworks and seasonal special events.</p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">EasyTech</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                  pavilions, award-winning fireworks and seasonal special events.</p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Epcot Center</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                  pavilions, award-winning fireworks and seasonal special events.</p>
              </details>

            </div>
            {/* <!-- Education --> */}
            <div id="education" class="bg-[#
            3EAEAEA] h-50 my-6 py-8 rounded-lg border-4"></div>
            {/* <!-- Hobbies --> */}
            <div id="hobbie" class="bg-[#B2B2B2] h-50 my-6 py-8 rounded-lg border-4"></div>
          </div>
          {/* <!-- /End replace --> */}
        </main>
      </div>
    </>
  );
}

export default App;
