import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import Introduction from "./Introduction";
import Language from "./Language";
import Thinking from "./Thinking";
import Details from "./Details";
import Quiz from "./Quiz";

function App() {

  const [language, setLanguage] = useState("Java");

  const updateLanguage = (val) => {
    setLanguage(val);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Introduction lang={language}/>
    },
    {
      path: '/think',
      element: <Thinking lang={language}/>
    },
    {
      path: '/details',
      element: <Details lang={language}/>
    },
    {
      path: '/quiz',
      element: <Quiz lang={language}/>
    }
    
  ]);

  return (
    <div className="flex flex-row w-screen h-screen">
      <RouterProvider router={router}></RouterProvider>
      <Language onLanguageChange={updateLanguage} />
    </div>
  );
}

export default App;
