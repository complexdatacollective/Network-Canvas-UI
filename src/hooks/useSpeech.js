import { useEffect, useState } from 'react';

// iOS/macOS seem to lower-case navigator.language (which is the default language)
const getVoiceForLanguage = (language) => speechSynthesis.getVoices()
  // The voice "Jorge" is broken in Firefox!
  .find((voice) => voice.name !== 'Jorge' && (voice.lang.toLowerCase() === language.toLowerCase()));

/**
 * Hook for text-to-speech.
 *
 * Will eventually be replaced by Google's TTS cloud system. Just a fun experiment
 * for now.
 */

const useSpeech = (text, lang = window.navigator.language) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState(null);
  const [voicesForLanguage, setVoicesForLanguage] = useState(null);

  const speak = () => {
    if (error) {
      return;
    }

    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);

    // For iOS we must set both voice and language, but this breaks firefox!
    utterance.lang = lang;
    utterance.voice = voicesForLanguage;

    // Slow speech slightly to help with comprehension.
    utterance.rate = 0.9;

    utterance.onend = () => setIsSpeaking(false);
    speechSynthesis.speak(utterance);
  };

  const stop = () => {
    if (error) { return; }
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  useEffect(() => {
    setVoicesForLanguage(getVoiceForLanguage(lang));
  }, [lang]);

  useEffect(
    () => {
      if (!voicesForLanguage) {
        setError(`No voice available for language "${lang}". Cannot speak!`);
      } else {
        setError(false);
      }

      return stop();
    },
    [voicesForLanguage],
  );

  return {
    speak, stop, isSpeaking, error,
  };
};

export default useSpeech;
