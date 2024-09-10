import React, { useState } from 'react';

const Foreground = () => {
 
  const [content, setContent] = useState({
    omkar: 'Write here...',
    piyush: 'Write here...',
    maya: 'Write here...',
  });

  const [positions, setPositions] = useState({
    omkar: { x: 0, y: 0 },
    piyush: { x: 0, y: 0 },
    maya: { x: 0, y: 0 },
  });

  const [dragging, setDragging] = useState(null);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  
  const handleMouseDown = (event, divName) => {
    setDragging(divName);
    setStartPos({
      x: event.clientX - positions[divName].x,
      y: event.clientY - positions[divName].y,
    });
  };

  const handleMouseMove = (event) => {
    if (!dragging) return;

    setPositions((prevPositions) => ({
      ...prevPositions,
      [dragging]: {
        x: event.clientX - startPos.x,
        y: event.clientY - startPos.y,
      },
    }));
  };


  const handleMouseUp = () => {
    setDragging(null);
  };

  const handleContentChange = (e, divName) => {
    setContent({
      ...content,
      [divName]: e.target.innerText, 
    });
  };

  return (
    <div
      className='relative w-full h-screen'
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className='absolute top-[5%] right-[4%] rounded-3xl w-[18vw] h-[20vw] py-10 flex justify-center bg-zinc-700 cursor-pointer'
        style={{ transform: `translate(${positions.omkar.x}px, ${positions.omkar.y}px)` }}
        onMouseDown={(e) => handleMouseDown(e, 'omkar')}
        contentEditable
        suppressContentEditableWarning={true}
        onInput={(e) => handleContentChange(e, 'omkar')}
      >
        {content.omkar}
        <div className=' text-white absolute top-[69%] rounded-3xl w-[18vw] h-[4px] py-10 flex justify-center bg-sky-700 cursor-pointer rounded-t-[0px]'>
          <p>
          Notes

          </p>

          </div>
      </div>

      <div
        className='absolute top-[5%] left-[4%] rounded-3xl w-[18vw] h-[20vw] py-10 flex justify-center bg-zinc-700 cursor-pointer'
        style={{ transform: `translate(${positions.piyush.x}px, ${positions.piyush.y}px)` }}
        onMouseDown={(e) => handleMouseDown(e, 'piyush')}
        contentEditable
        suppressContentEditableWarning={true}
        onInput={(e) => handleContentChange(e, 'piyush')}
      >
        {content.piyush}
      </div>

      <div
        className='absolute top-[50%] left-[50%] rounded-3xl w-[18vw] h-[20vw] py-10 flex justify-center bg-zinc-700 cursor-pointer'
        style={{ transform: `translate(${positions.maya.x}px, ${positions.maya.y}px)` }}
        onMouseDown={(e) => handleMouseDown(e, 'maya')}
        contentEditable
        suppressContentEditableWarning={true}
        onInput={(e) => handleContentChange(e, 'maya')}
      >
        {content.maya}
      </div>
    </div>
  );
};

export default Foreground;
