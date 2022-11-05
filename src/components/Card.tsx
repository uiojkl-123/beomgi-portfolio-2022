import React, { useEffect, useRef } from 'react';
import './Card.scss';

interface CardProps {

}

export const Card: React.FC<CardProps> = (props) => {

    const cardRef = useRef<HTMLDivElement>(null)
    const ballRef = useRef<HTMLDivElement>(null)

    let ballX = 0;
    let ballY = 0;

    let cardX = 0;
    let cardY = 0;

    const speed = 0.06;

    function animate() {
        let distX = cardX - ballX;
        let distY = cardY - ballY;

        ballX = ballX + (distX * speed);
        ballY = ballY + (distY * speed);

        ballRef.current!.style.left = ballX + "px";
        ballRef.current!.style.top = ballY + "px";

        requestAnimationFrame(animate);
    }

    useEffect(() => {
        const ball = ballRef.current;
        const card = cardRef.current;
        if (ball && card) {
            animate();
            card.addEventListener('mousemove', (e) => {
                cardX = e.clientX - card.offsetLeft;
                cardY = e.clientY - card.offsetTop;
            })

        }
        return () => {
            if (ball && card) {
                card.removeEventListener('mousemove', (e) => {
                    cardX = e.clientX;
                    cardY = e.clientY;
                })
            }
        }
    }, [ballRef && cardRef])

    return (
        <div ref={cardRef} className="card">
            <div ref={ballRef} className='ball'></div>
        </div>
    );
}
