import { useEffect, useMemo, useState } from 'react';

/**
 * Hook for text-to-speech.
 *
 * Will eventually be replaced by Google's TTS cloud system. Just a fun experiment
 * for now.
 */
const useSpeech = (text, lang = window.navigator.language) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState(null);

  // Speech synthesis API isn't supported on Android: https://bugs.chromium.org/p/chromium/issues/detail?id=487255
  if (!('speechSynthesis' in window)) {
    return { error: 'Speech synthesis not supported on this platform.' };
  }

  const voices = useMemo(() => {
    if (error) {
      return {};
    }

    return speechSynthesis.getVoices();
  }, []);

  // iOS/macOS seem to lower-case navigator.language (which is the default language)
  const voicesForLanguage = useMemo(() => voices.find(
    (voice) => voice.lang.toLowerCase() === lang.toLowerCase(),
  ), [lang]);

  const speak = () => {
    if (error) {
      return;
    }

    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);

    // For iOS we must set both voice and language
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

  useEffect(
    () => {
      if (!voicesForLanguage) {
        setError(`No voice available for language "${lang}". Cannot speak!`);
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
