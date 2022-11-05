import React, { useEffect, useRef } from 'react';
import './FollowingComponent.scss';

interface FollowingComponentProps {
    speed?: number;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const FollowingComponent: React.FC<FollowingComponentProps> = (props) => {

    const ballRef = useRef<HTMLDivElement>(null)

    let ballX = window.innerWidth / 2;
    let ballY = window.innerHeight / 2;

    let cardX = 0;
    let cardY = 0;

    const speed = props.speed ? props.speed : 0.06;

    function animate() {
        let distX = cardX - ballX;
        let distY = cardY - ballY;

        ballX = ballX + (distX * speed);
        ballY = ballY + (distY * speed);

        // ballRef.current!.style.left = ballX + "px";
        // ballRef.current!.style.top = ballY + "px";
        ballRef.current!.style.setProperty('--x', `${ballX}px`);
        ballRef.current!.style.setProperty('--y', `${ballY}px`);

        requestAnimationFrame(animate);
    }

    useEffect(() => {
        const ball = ballRef.current;
        if (ball) {
            ballRef.current?.style.setProperty('--opacity', '0');
            document.addEventListener('mousemove', (e) => {
                cardX = e.pageX
                cardY = e.pageY - window.scrollY
                ballRef.current?.style.setProperty('--opacity', '.5');

            })
            animate();
        }
        return () => {
            if (ball) {
                document.removeEventListener('mousemove', (e) => {
                    cardX = e.pageX
                    cardY = e.pageY
                })
            }
        }
    }, [ballRef])

    return (
        <div className={"followingComponent" + ' ' + props.className} style={props.style} ref={ballRef}>
            {props.children}
        </div>
    );
}
