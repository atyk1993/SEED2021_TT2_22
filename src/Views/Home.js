import React from 'react'
import HelloWorld from '../Components/HelloWorld'

function Home(props) {

    redirectToLogin = () => {
        props.history.push('/login');
    };

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl mb-3">
                Home Page
            </h1>
            <div className="md:flex flex-wrap md:-mx-3">
                <HelloWorld name="world"/>
            </div>
            <button onClick={redirectToLogin}>Go to login!</button>
        </div>
    )
}

export default Home
