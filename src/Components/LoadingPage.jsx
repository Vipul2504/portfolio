import React, { useEffect } from 'react';
import '../App.css'


// useEffect(() => {
//   console.log("using effect");
//   handleContentLoaded();
// }, []);

// handleContentLoaded = () => {
    
// }

const LoadingPage = () => {
    return (
        <div className="App">
            <h1 className="ml-10 mt-10">Vipul Vishwakarma</h1>
            <div className="ml-10 h-1 items-center justify-center relative max-w-xl rounded-full overflow-hidden">
                <div className="w-full h-1 bg-grey absolute"></div>
                <div id="bar" className="transition-all ease-out duration-1000 h-full bg-black relative w-0"></div>
            </div>
        </div>

    )
}

export default LoadingPage;