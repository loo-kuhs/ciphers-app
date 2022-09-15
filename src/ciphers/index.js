import * as caesar from "./caesar";
import * as polybiusSquare from "./polybiusSquare";

let ciphers = [caesar, polybiusSquare];

let ciphersByKey = ciphers.reduce((obj, cipher) => {
  obj[cipher.KEY] = cipher;
  return obj;
}, {});

export const CIPHER_KEYS = Object.keys(ciphersByKey);
export function getCipherByKey(key) {
  return ciphersByKey[key.toLowerCase()];
}
