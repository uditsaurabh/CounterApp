import React from 'react';
import { Card } from './card';
import NavBr from './navigation';

function About() {
    return (
        <div>
            <NavBr/>
            <Card background="bgRed">
                <h1>About Page</h1>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0b/f3/7a/74/img-20160709-wa0000-largejpg.jpg" alt="logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sit quidem earum numquam natus est,
                eum nisi adipisci possimus harum molestiae dignissimos minima incidunt corrupti qui
           commodi optio aspernatur obcaecati.</p>
            </Card>
        </div>
    );
}
export default About;