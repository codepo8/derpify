import { derpify } from './index.js';

let sentences = [
    'The quick brown fox jumps over the lazy dog.',
    'All he wanted to say was I love you all.',
    'What about the other people who do the same in this still image?',
    'He just wants to troll.',
    'I am a bot.',
    'I watched a YouTube video and now I know everything.',
]
sentences.forEach(sentence => {
    console.log(derpify(sentence));
});
