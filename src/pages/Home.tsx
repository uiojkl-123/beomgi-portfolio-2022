import React, { useEffect } from 'react';
import { Card } from '../components/Card';
import { Card_3D } from '../components/Card_3D';
import { HoverEffectText } from '../components/HoverEffectText';
import { Particle } from '../components/Particle';
import './Home.scss';

interface HomeProps {

}

export const Home: React.FC<HomeProps> = (props) => {

    const nameContainerRef = React.useRef<HTMLDivElement>(null);

    const trg1Ref = React.useRef<HTMLDivElement>(null);
    const trg2Ref = React.useRef<HTMLDivElement>(null);

    const certainRef = React.useRef<HTMLDivElement>(null);

    const scrollDownRef = React.useRef<HTMLImageElement>(null);

    const scaleScroll = (ref: React.RefObject<HTMLDivElement>, scale: number) => {
        if (!ref.current) { return }
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;
        const scroll = scrollY + scrollX;
        const home = ref.current;
        home.style.setProperty('--scroll', `${-scroll / scale}px`);
    }

    const handleOnScroll = () => {
        scaleScroll(nameContainerRef, 3)
        scaleScroll(trg1Ref, 1)
        scaleScroll(trg2Ref, 2.8)
        scaleScroll(certainRef, 1.5)

        if (window.scrollY > 100) {
            scrollDownRef.current?.style.setProperty('--opacity', '0');
        } else {
            scrollDownRef.current?.style.setProperty('--opacity', '1');
        }
    };

    useEffect(() => {
        scaleScroll(nameContainerRef, 2)
        scaleScroll(trg1Ref, 1.3)
        scaleScroll(trg2Ref, 1)
        scaleScroll(certainRef, 1.5)

        window.addEventListener('scroll', handleOnScroll)
        return () => {
            window.removeEventListener('scroll', handleOnScroll);
        }
    }, [nameContainerRef, scrollDownRef, certainRef])

    return (
        <div className="home">
            <div className='background'>
                <Particle />
                <div className="nextCertain" ref={certainRef}></div>
                <div className='container' ref={nameContainerRef}>

                    <div className="topBar"></div>



                    <div className="row">
                        <div className='name'>신범기</div>
                        <div className='nameUS '>Sin Beomgi</div>
                    </div>

                    <div className="desc1">
                        <HoverEffectText>W</HoverEffectText>
                        <HoverEffectText>e</HoverEffectText>
                        <HoverEffectText>b</HoverEffectText>
                        <HoverEffectText></HoverEffectText>
                        <HoverEffectText>F</HoverEffectText>
                        <HoverEffectText>r</HoverEffectText>
                        <HoverEffectText>o</HoverEffectText>
                        <HoverEffectText>n</HoverEffectText>
                        <HoverEffectText>t</HoverEffectText>
                        <HoverEffectText>-</HoverEffectText>
                        <HoverEffectText>e</HoverEffectText>
                        <HoverEffectText>n</HoverEffectText>
                        <HoverEffectText>d</HoverEffectText>
                        <HoverEffectText></HoverEffectText>
                        <HoverEffectText>D</HoverEffectText>
                        <HoverEffectText>e</HoverEffectText>
                        <HoverEffectText>v</HoverEffectText>
                        <HoverEffectText>e</HoverEffectText>
                        <HoverEffectText>l</HoverEffectText>
                        <HoverEffectText>o</HoverEffectText>
                        <HoverEffectText>p</HoverEffectText>
                        <HoverEffectText>e</HoverEffectText>
                        <HoverEffectText>r</HoverEffectText>
                    </div>

                    <div className="infoWrapper">
                        <a href='https://github.com/uiojkl-123'>
                            <div className="github">
                                <img src='intersect.png' />
                                <div className="label">Github</div>
                            </div>
                        </a>
                        <div className="contact">Contact | aa187523@gmail.com</div>
                    </div>

                </div>

                <img className='scrollDown' src='/down_arrow.svg' ref={scrollDownRef} />
            </div >
        </div>
    );
}
