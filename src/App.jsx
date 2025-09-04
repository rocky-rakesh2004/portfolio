/**
 * @copyright 2025 Rakesh 
 * @license Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/hero";
import About from "./components/About";
import Skills from "./components/Skills";

 const App = () => {
    return (
      <>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
      </main>
      </>
    )
 }

 export default App;