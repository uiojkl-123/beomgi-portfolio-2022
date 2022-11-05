import React from 'react';
import { wait } from '../hooks/timer';
import './About.scss';

interface AboutProps {

}

export const About: React.FC<AboutProps> = (props) => {

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
        <div className="about">
            <div className="container" ref={containerRef}>

                <div className="stackContainer">

                </div>

                <div className="content">
                    <div className="light" ref={lightRef}></div>
                    <div className="helloWorld">
                        Hello World!
                    </div>
                    <div className="description" ref={descriptionRef}>
                        안녕하세요, 사용자를 최우선시 하며 코드의 아름다움을 추구하는 개발자 신범기입니다.
                        주석이 필요 없는 코드와 무한할 수 있는 아키텍쳐를 꿈꾸며 모든 것을 설계합니다.
                        창업과 UX / UI에 관심이 많으며 다양한 프로젝트에서 경영전략, 기획, 디자인, 개발 전반 분야를 다루며 활동합니다.
                    </div>
                </div>
            </div>
        </div >
    );
}
