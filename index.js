var argv = require('minimist')(process.argv.slice(2), {
  stopEarly: true,
  string: [ 'voice', 'lang' ]
})

var message = argv._.join(' ')
var voiceName = (argv.voice||'').toLowerCase()
var lang = argv.lang

var synth = window.speechSynthesis
synth.onvoiceschanged = function () {
  var msg = new window.SpeechSynthesisUtterance(message)
  var voices = synth.getVoices()
  
  if (argv.voices) {
    console.log(voices.map(function (voice) {
      return voice.name + ' - ' + voice.lang
    }).join('\n'))
    window.close()
    return
  }
  
  var voice = voices.filter(function (voice) {
    if (voiceName && voice.name.toLowerCase() !== voiceName) {
      return false
    }
    if (lang && voice.lang.toLowerCase() !== lang) {
      return false
    }
    return true
  })[0] || voices[0]
  
  msg.voice = voice
  msg.onend = function() {
    window.close()
  }

  synth.speak(msg)
}
