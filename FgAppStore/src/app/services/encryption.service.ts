// encryption.service.ts

import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  constructor() {}

  myFunctionEncrypt(textToEncrypt: string): string {
    const value = textToEncrypt;
    const key = CryptoJS.enc.Utf8.parse('PNYDNkZuA4');
    const iv = CryptoJS.enc.Utf8.parse('PNYDNkZuA4');
    key.sigBytes = 16;
    key.words.length = 4;
    key.words[3] = 0;
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value), key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }
}
