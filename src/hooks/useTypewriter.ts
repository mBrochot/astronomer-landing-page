import { useState, useEffect } from 'react';

const useTypewriter = (texts: string[], delay = 2000, speed = 100) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && textIndex === texts[index].length) {
      setTimeout(() => {
        setIsDeleting(true);
        setDisplayText('');
        setTextIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, delay);
      return;
    }

    if (isDeleting) {
      setIsDeleting(false);
      return;
    }

    const timeout = setTimeout(() => {
      setTextIndex((prev) => prev + 1);
      setDisplayText(texts[index].slice(0, textIndex + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [textIndex, isDeleting, index, texts, delay, speed]);

  return displayText;
};

export default useTypewriter;