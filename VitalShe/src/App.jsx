// import React, { useEffect, useState } from "react";
// import gsap from "gsap";
// import Header from "./components/Header";
// import Card from "./components/Card";
// import MyCalendar from "./components/MyCalendar";

// function App() {
//     const [calendarVisible, setCalendarVisible] = useState(false);

//     const toggleCalendar = () => {
//         setCalendarVisible(!calendarVisible);
//     };

//     useEffect(() => {
//         const textElement = document.querySelector(".textstyle p");
//         if (textElement) {
//             const text = textElement.textContent;
//             textElement.innerHTML = "";

//             const fragment = document.createDocumentFragment();
//             text.split("").forEach((char) => {
//                 const span = document.createElement("span");
//                 span.textContent = char;
//                 fragment.appendChild(span);
//             });

//             textElement.appendChild(fragment);

//             gsap.fromTo(
//                 textElement.querySelectorAll("span"),
//                 { opacity: 0 },
//                 {
//                     opacity: 1,
//                     duration: 1.5,
//                     stagger: 0.1,
//                     repeat: -1,
//                 }
//             );
//         }
//     }, []);

//     return (
//         <div className="App bg-white text-black flex flex-col h-screen w-screen p-0.5 overflow-x-hidden overflow-y-auto">
//             <div className="flex-shrink-0">
//                 <Header />
//             </div>

//             <div className="w-screen flex justify-center p-2 mt-6">
//                 <span className="border-2 p-2 rounded-2xl border-yellow-600">Ask Us Anything</span>
//             </div>

//             <div><Card /></div>

//             <div>{calendarVisible && <MyCalendar />}</div>

//             <div className="w-screen mt-4 flex justify-center">
//                 <h1 className="border py-1 px-2 rounded-xl border-black text-3xl mb-8">Articles</h1>
//             </div>
//         </div>
//     );
// }

// export default App;
