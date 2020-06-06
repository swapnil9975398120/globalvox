import { Injectable } from '@angular/core';
import * as CryptoJS from 'node_modules/crypto-browserify';
// const SecureStorage = require('secure-web-storage');
// const SECRET_KEY = 'secret_key';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  // constructor() { }
  // public secureStorage = new SecureStorage(localStorage, {
  //   // Encrypt the localstorage data
  //   encrypt: function encrypt(data) {
  //       data = CryptoJS.AES.encrypt(data, SECRET_KEY);
  //       data = data.toString();
  //       return data;
  //   },
  //   // Decrypt the encrypted data
  //   decrypt: function decrypt(data) {
  //       data = CryptoJS.AES.decrypt(data, SECRET_KEY);
  //       data = data.toString(CryptoJS.enc.Utf8);
  //       return data;
  //   }
  //   });
}
