import './App.css';
import Notes from "./components/Notes";
import React, {useEffect} from "react";
import NotePage from "./components/notePage";
import {useSelector} from "react-redux";

function App() {
    const notePage = useSelector(state => state.notes.notePage);

    return (
        <div>
            <div className='header'></div>
            <div className='wrapper'>
                { !notePage
                    ? <Notes/>
                    :  <NotePage/>
                }
            </div>


        </div>
    );
}

export default App;
