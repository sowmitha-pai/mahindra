export const speackOutLoud = async (msg, lang) => {
  console.log(msg);
  let langs = ["ar-Arabic", "cs-Czech", "da-Danish", "de-German", "el-Greek", "en-English", "eo-Esperanto", "es-Spanish", "et-Estonian", "fi-Finnish", "fr-French", "he-Hebrew", "hi-Hindi", "hu-Hungarian", "id-Indonesian", "it-Italian", "ja-Japanese", "ko-Korean", "la-Latin", "lt-Lithuanian", "lv-Latvian", "nb-Norwegian Bokmal", "nl-Dutch", "nn-Norwegian Nynorsk", "no-Norwegian", "pl-Polish", "pt-Portuguese", "ro-Romanian", "ru-Russian", "sk-Slovak", "sl-Slovenian", "sq-Albanian", "sr-Serbian", "sv-Swedish", "th-Thai", "tr-Turkish", "zh-Chinese"];
  const voices = window.speechSynthesis.getVoices();
  let to_speak = new SpeechSynthesisUtterance(msg);
  to_speak.lang = lang;
  to_speak.voice = voices[2];
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(to_speak);
}