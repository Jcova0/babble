import React from 'react';
import Button from '../Button';

const Landing = () => {
    return (
        <>
            <div class="center" >
                <div class="text-center">
                    <h1 class="text-3xl font-bold">
                        BABBLE
                    </h1>
                    <Button label ="Log In" to="/login"/>
                </div>
            </div>
            
        </> 
    );
}

export default Landing;
