import React from 'react';
import { wait } from '../hooks/timer';
import './Thanks.scss';

interface ThanksProps {

}

export const Thanks: React.FC<ThanksProps> = (props) => {

    const lightRef = React.useRef<HTMLDivElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const descriptionRef = React.useRef<HTMLDivElement>(null);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(async (entry: any) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                containerRef.current!.style.setProperty('--opacity', '1');
                await wait(500)
                descriptionRef.current!.style.setProperty('--opacity', '1');
            } else {
                entry.target.style.opacity = 0;
                containerRef.current!.style.setProperty('--opacity', '0');
                descriptionRef.current!.style.setProperty('--opacity', '0');
            }
        })
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    })

    React.useEffect(() => {
        const light = lightRef.current;
        containerRef.current!.style.setProperty('--opacity', '0');

        if (light) {
            observer.observe(light);
        }
        return () => {
            if (light) {
                observer.unobserve(light);
            }
        }
    }, [lightRef])

    return (
        <div className="Thanks">
            <div className="container" ref={containerRef}>

                <div className="content">
                    <div className="light" ref={lightRef}></div>
                    <div className="helloWorld">
                        Thanks for reading :)
                    </div>

                    <div className="description" ref={descriptionRef}>
                        <p>
                            contact: aa187523@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}
