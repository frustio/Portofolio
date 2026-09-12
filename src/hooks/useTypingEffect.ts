import { useState, useEffect, useCallback } from 'react';

export function useTypingEffect(strings: string[], typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentString = strings[currentIndex];

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentString.length) {
        setDisplayText(currentString.slice(0, displayText.length + 1));
      } else {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        setDisplayText(currentString.slice(0, displayText.length - 1));
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % strings.length);
      }
    }
  }, [displayText, currentIndex, isDeleting, strings, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return displayText;
}
