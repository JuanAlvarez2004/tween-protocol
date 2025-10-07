import { useRef, forwardRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const BallCursor = forwardRef(({ positionInitialCursor = { left: 0, top: 0, width: 0, height: 0 } }, ref) => {
  const ballCursorRef = useRef(null);

  useImperativeHandle(ref, () => ballCursorRef.current);

  useGSAP(() => {
    // Posicionar inicialmente en el elemento de referencia si existe
    if (positionInitialCursor && ballCursorRef.current) {
      gsap.set(ballCursorRef.current, {
        x: positionInitialCursor.left + positionInitialCursor.width / 2 - 8, // Centrar horizontalmente
        y: positionInitialCursor.top + positionInitialCursor.height / 2 - 8,  // Centrar verticalmente
      });

      gsap.to(ballCursorRef.current, {
        backgroundColor: 'black',
        duration: .4,
        onComplete: () => {
          document.addEventListener('mousemove', handleMouseMove);
        }
      })
    }

    const handleMouseMove = (e) => {
      if (ballCursorRef.current) {
        gsap.to(ballCursorRef.current, {
          duration: 0.3,
          x: e.clientX - 8,
          y: e.clientY - 8,
        });
      }
    };

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [positionInitialCursor]);

  return (
    <div
      ref={ballCursorRef}
      className={`fixed w-4 h-4 rounded-full pointer-events-none z-50 top-0 left-0`}
    />
  );
});

BallCursor.displayName = 'BallCursor';

export default BallCursor;
