/**
 * for navigation between pages you can uncomment the import and 
 * its declaration inside the component
 * 
 * You can also uncomment the user effect to view notifications
 */
import React from "react";
import Logo from "../assets/ndc.png";
// import { countReducer } from "../store/homeStore";
// import { useNavigate } from "react-router-dom";

export default function Welcomescreen() {
  // const navigate = useNavigate();
  const [counter, setCounter] = React.useState<number>(0)
  // const store = useCounter()


  // React.useEffect(() => {
  //   new Notification("Congratualations", {
  //     body: "you have successfully setup your electron app"
  //   })
  // })

  return (
    <>
      <div className="w-screen h-screen flex flex-row items-center justify-center font-primary bg-gray-200">
        <div className="flex flex-col items-center space-y-4">
          <img src={Logo} alt="" className="w-[60%] duration-500" />
          <h1 className="font-semibold">Electron + Typescript + React + Tailwindcss</h1>
          <p>A Simple template for electron</p>
          <div className="flex flex-row space-x-2">
            <button onClick={() => setCounter(counter + 1)} className="p-2 bg-cyan-200 text-cyan-600 font-bold rounded-full">COUNT</button>
            <button onClick={() => setCounter(0)} className="p-2 bg-cyan-200 text-cyan-600 font-bold rounded-full">RESET</button>
          </div>
          <p className="font-bold text-cyan-600">{counter}</p>
        </div>
      </div>
    </>
  );
}