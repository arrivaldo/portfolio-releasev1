import React, { useRef, useEffect } from 'react';

const OverlayCard = ({ children, ctaText }) => {
  const overlayRef = useRef(null);

  const handleMouseMove = (event) => {
    const { offsetLeft, offsetTop } = event.currentTarget.parentNode;
    const x = event.pageX - offsetLeft;
    const y = event.pageY - offsetTop;

    overlayRef.current.style.setProperty('--x', `${x}px`);
    overlayRef.current.style.setProperty('--y', `${y}px`);
  };

  useEffect(() => {
    const cardContainer = overlayRef.current.parentNode;
    return () => cardContainer.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div onMouseMove={handleMouseMove}>
      {children}
      <div ref={overlayRef} className="overlay">
        <div className="cta">{ctaText}</div>
      </div>
    </div>
  );
};

export default OverlayCard;
