# says

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Cross-platform 'say' command using Electron. 

Experimental / proof-of-concept.

## Install

```sh
npm install says -g
```

## Example

```sh
says --voice=zarvox 'woah dude'
```

## Usage

[![NPM](https://nodei.co/npm/says.png)](https://www.npmjs.com/package/says)

```sh
Usage:
  says [opt] message

Options
  --voices  list all voices and exit
  --voice   the name of the voice, like Alex or Zarvox
  --lang    the language, like en-US
```

Some interesting voices to try:

```sh
says --voice="good news" 'i am a robot'
says --voice=whisper 'i see dead people'
says --voice=daniel 'bond, james bond'
```

Another example, using random [sun-tzu-quotes](https://github.com/mattdesl/sun-tzu-quotes).

```sh
npm install sun-tzu-quotes -g
says --voice=daniel `sun-tzu-quotes`
```

## License

MIT, see [LICENSE.md](http://github.com/Jam3/says/blob/master/LICENSE.md) for details.
