import React from 'react';
import { Card_3D } from '../components/Card_3D';
import { Project } from '../components/Project';
import { wait } from '../hooks/timer';
import './Projects.scss';

interface ProjectsProps {

}

export const Projects: React.FC<ProjectsProps> = (props) => {

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
        containerRef.current!.style.setProperty('--opacity', '1');

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
        <div className="projects">
            <div className="container" ref={containerRef}>

                <div className="content">
                    <div className="light" ref={lightRef}></div>
                    <div className="helloWorld">
                        Projects
                    </div>
                    <div className="projectList" ref={descriptionRef}>
                        <Project
                            project='어디대'
                            imgSrc='/odd.png'
                            desc='주차 공간 공유 플랫폼'
                        />
                        <Project
                            project='달란트'
                            imgSrc='/dltLogo_icon.png'
                            desc='책임형 투자 커뮤니티'
                        />
                        <Project
                            project='포항학사 식단'
                            imgSrc='/pohang.png'
                            desc='포항학사 식단 서비스'
                        />
                        <Project
                            project='기타'
                            imgSrc='/apps.svg'
                            desc='그 외 프로젝트'
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}
