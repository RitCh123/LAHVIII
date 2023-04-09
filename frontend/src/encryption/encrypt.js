import CryptoJS from "crypto-js";


const secretPass = "XkhZG4fW2t2W";

function encryptText(text) {

  let encJson = CryptoJS.AES.encrypt(JSON.stringify(text), secretPass).toString()
  
  let encData = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encJson))

  return encData
  
}

export default encryptText;
