import { Howl, Howler } from 'howler';


export default function (vue) {
  vue.prototype.$howl= Howl;
}