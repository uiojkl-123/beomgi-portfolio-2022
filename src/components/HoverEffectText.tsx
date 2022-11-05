import React, { useEffect, useRef } from 'react';
import './HoverEffectText.scss';

interface HoverEffectTextProps {
    children?: React.ReactNode;
}

export const HoverEffectText: React.FC<HoverEffectTextProps> = (props) => {

    const [animation, setAnimation] = React.useState(false);

    const timerRef = useRef<any>(null);

    const handleOnMouseEnter = () => {
        setAnimation(true);
    }

    const handleOnMouseLeave = () => {
        timerRef.current = setTimeout(() => {
            setAnimation(false);
        }, 400);
    }


    const initAnimation = () => {
        setAnimation(true);
        setTimeout(() => {
            setAnimation(false);
        }, 400);
    }

    useEffect(() => {

        return () => {
            timerRef.current && clearTimeout(timerRef.current);
        }
    }, [timerRef])

    useEffect(() => {
        initAnimation()
    }, [])


    return (
        props.children ?
            <div className={'hoverEffectText' + (animation ? ' hovering' : '')} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                {props.children}
            </div>
            : <div className='space'></div>
    );
}
