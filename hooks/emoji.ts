// useEmojiSelection.tsx
import React, { useState, useEffect } from 'react';

const useEmojiSelection = (commentId: string) => {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [selectedEmojiLength, setSelectedEmojiLength] = useState<number>(0);

  const handleEmojiClick = (emoji: string) => {
    const storedEmoji = localStorage.getItem(`selectedEmoji_${commentId}`);

    if (storedEmoji === emoji) {
      const newLength = Math.max(selectedEmojiLength - 1, 0);
      setSelectedEmojiLength(newLength);
      localStorage.setItem(`selectedEmojiLength_${commentId}`, newLength.toString());

      setSelectedEmoji(null);
      localStorage.removeItem(`selectedEmoji_${commentId}`);
    } else {
      if (!selectedEmoji) {
        setSelectedEmoji(emoji);
        const newLength = selectedEmojiLength + 1;
        setSelectedEmojiLength(newLength);
        localStorage.setItem(`selectedEmoji_${commentId}`, emoji);
        localStorage.setItem(`selectedEmojiLength_${commentId}`, newLength.toString());
      } else {
        setSelectedEmoji(emoji);
        localStorage.setItem(`selectedEmoji_${commentId}`, emoji);
      }
    }
  };

  const resetEmojiLength = () => {
    setSelectedEmojiLength(0);
    localStorage.setItem(`selectedEmojiLength_${commentId}`, '0');
  };

  useEffect(() => {
    const storedEmoji = localStorage.getItem(`selectedEmoji_${commentId}`);
    const storedLength = localStorage.getItem(`selectedEmojiLength_${commentId}`);

    if (storedEmoji) {
      setSelectedEmoji(storedEmoji);
      setSelectedEmojiLength(Number(storedLength) || storedEmoji.length);
    }
  }, [commentId]);

  return { selectedEmoji, selectedEmojiLength, handleEmojiClick, resetEmojiLength };
};

export default useEmojiSelection;
