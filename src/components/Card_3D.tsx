import React, { useEffect, useRef } from 'react';
import './Card_3D.scss';

interface Card_3DProps {

}

export const Card_3D: React.FC<Card_3DProps> = (props) => {


    const cardRef = useRef<HTMLDivElement>(null)


    const handleOnMouseMove = (e: MouseEvent) => {
        const card = cardRef.current;
        if (card) {
            const x = e.clientX - card.offsetLeft;
            const y = e.clientY - card.offsetTop;
      


            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        }
    }

    useEffect(() => {
        cardRef.current!.addEventListener('mousemove', handleOnMouseMove)
        return () => {
            cardRef.current!.removeEventListener('mousemove', handleOnMouseMove)
        }
    }, [cardRef])

    return (
        <div ref={cardRef} className="card3D">
            Card_3Dawdawd
        </div>
    );
}
