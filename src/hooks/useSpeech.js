import { useEffect, useMemo, useState } from 'react';

// Speech synthesis API is not available in Android's
// webview: https://bugs.chromium.org/p/chromium/issues/detail?id=487255
// We need to catch those errors here, and set the error state.
const speechSupported = 'speechSynthesis' in window;

// iOS/macOS seem to lower-case navigator.language (which is the default language)
const getVoiceForLanguage = (language) => speechSupported && speechSynthesis.getVoices()
  // The voice "Jorge" is broken in Firefox (doesn't speak)!
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
  const voicesForLanguage = useMemo(() => getVoiceForLanguage(lang), [lang]);

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

  useEffect(
    () => {
      if (!speechSupported) {
        setError('Speech synthesis not supported on this platform.');
      } else if (!voicesForLanguage) {
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
