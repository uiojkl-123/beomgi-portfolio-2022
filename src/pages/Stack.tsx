import React from 'react';
import { wait } from '../hooks/timer';
import './Stack.scss';

interface StackProps {

}

export const Stack: React.FC<StackProps> = (props) => {
    const lightRef = React.useRef<HTMLDivElement>(null);
    const light2Ref = React.useRef<HTMLDivElement>(null);

    const containerRef = React.useRef<HTMLDivElement>(null);
    const stackContainerRef = React.useRef<HTMLDivElement>(null);
    const stackContainer2Ref = React.useRef<HTMLDivElement>(null);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(async (entry: any) => {
            if (entry.isIntersecting) {
                containerRef.current!.style.setProperty('--opacity', '1');
                await wait(500)
                stackContainerRef.current!.style.setProperty('--opacity', '1');
            } else {
                containerRef.current!.style.setProperty('--opacity', '0');
                stackContainerRef.current!.style.setProperty('--opacity', '0');

            }
        })
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    })

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(async (entry: any) => {
            if (entry.isIntersecting) {
                stackContainer2Ref.current!.style.setProperty('--opacity', '1');
            } else {
                stackContainer2Ref.current!.style.setProperty('--opacity', '0');
            }
        })
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    })



    React.useEffect(() => {
        const light = lightRef.current;
        const light2 = light2Ref.current;
        containerRef.current!.style.setProperty('--opacity', '0');
        stackContainerRef.current!.style.setProperty('--opacity', '0');

        if (light && light2) {
            observer.observe(light);
            observer2.observe(light2);
        }
        return () => {
            if (light && light2) {
                observer.unobserve(light);
                observer2.unobserve(light2);
            }
        }
    }, [lightRef, light2Ref])


    return (
        <div className="stack">
            <div className="container" ref={containerRef}>

                <div className="content">
                    <div className="light" ref={lightRef}></div>
                    <div className="helloWorld">
                        Stacks
                    </div>
                    <div className="stackContainer" ref={stackContainerRef}>
                        <div className="majorTitle">
                            주 사용기술
                        </div>
                        <div className="majorList">
                            <div className="majorItem">
                                <img src='React.png' alt="React" />
                                <div className="majorItemTitle">
                                    React
                                </div>
                            </div>
                            <div className="majorItem">
                                <img src='Ts.png' alt="Typescript" />
                                <div className="majorItemTitle">
                                    Typescript
                                </div>
                            </div>
                            <div className="majorItem">
                                <img src='Firebase.png' alt="Firebase" />
                                <div className="majorItemTitle">
                                    Firebase
                                </div>
                            </div>
                            <div className="majorItem">
                                <img src='Ionic.png' alt="Ionic Framework" />
                                <div className="majorItemTitle">
                                    Ionic
                                </div>
                            </div>
                            <div className="majorItem">
                                <img src='Sass.png' alt="Sass" />
                                <div className="majorItemTitle">
                                    Sass
                                </div>
                            </div>
                            <div className="majorItem">
                                <img src='Zustand.png' alt="Zustand" />
                                <div className="majorItemTitle">
                                    Zustand
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stackContainer2" ref={stackContainer2Ref}>
                        <div className="light2" ref={light2Ref}></div>
                        <div className="adeptive">
                            <div className="adeptiveTitle">
                                숙련도
                            </div>
                            <div className="adeptiveList">
                                <div className="x">
                                    <div className="xItem">초급</div>
                                    <div className="xItem">중급</div>
                                    <div className="xItem">고급</div>
                                </div>
                                <div className="labels">
                                    <div className="label">Typescript</div>
                                    <div className="label">Firebase</div>
                                    <div className="label">React</div>
                                    <div className="label">Javascript</div>
                                    <div className="label">HTML</div>
                                    <div className="label">CSS</div>
                                    <div className="label">SASS</div>
                                    <div className="label">Zustand</div>
                                    <div className="label">Redux</div>
                                </div>
                                <div className="graph">
                                    <div className="scale">
                                        <div className="scaleBar"></div>
                                        <div className="scaleBar"></div>
                                        <div className="scaleBar"></div>
                                        <div className="scaleBar"></div>
                                        <div className="scaleBar"></div>
                                        <div className="scaleBar"></div>
                                        <div className="scaleBar"></div>
                                        <div className="scaleBar"></div>
                                        <div className="scaleBar"></div>
                                    </div>

                                    <div className="graphBarWrrapper">
                                        <div className="graphBar" style={{ width: '65%' }}></div>
                                        <div className="graphBar" style={{ width: '65%' }}></div>
                                        <div className="graphBar" style={{ width: '60%' }}></div>
                                        <div className="graphBar" style={{ width: '55%' }}></div>
                                        <div className="graphBar" style={{ width: '55%' }}></div>
                                        <div className="graphBar" style={{ width: '55%' }}></div>
                                        <div className="graphBar" style={{ width: '50%' }}></div>
                                        <div className="graphBar" style={{ width: '32%' }}></div>
                                        <div className="graphBar" style={{ width: '20%' }}></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
