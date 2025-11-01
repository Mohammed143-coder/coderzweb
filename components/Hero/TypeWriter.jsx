"use client";
import React, { useState, useCallback, useEffect } from 'react';

const TypeWriter = ({ 
  sentences ,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const typeEffect = useCallback(() => {
    const currentSentence = sentences[sentenceIndex];
    
    if (isDeleting) {
      // Deleting text
      setText(currentSentence.substring(0, charIndex - 1));
      setCharIndex(charIndex - 1);
      
      if (charIndex === 0) {
        // Finished deleting, move to next sentence
        setIsDeleting(false);
        setSentenceIndex((sentenceIndex + 1) % sentences.length);
      }
    } else {
      // Typing text
      setText(currentSentence.substring(0, charIndex + 1));
      setCharIndex(charIndex + 1);
      
      if (charIndex === currentSentence.length) {
        // Finished typing, pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    }
  }, [charIndex, isDeleting, sentenceIndex, sentences, pauseDuration]);

  useEffect(() => {
    const timer = setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [typeEffect, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <div className="inline-block">
      <span className="">
        {text}
      </span>
      {/* <span className="ml-0.5 inline-block w-1 h-6 bg-gray-500 animate-blink align-middle"></span> */}
    </div>
  );
};

export default TypeWriter;