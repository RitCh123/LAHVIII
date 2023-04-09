import CryptoJS from "crypto-js";


const secretPass = "XkhZG4fW2t2W";

function decryptText(text) {

  // const bytes = CryptoJS.AES.decrypt(text, secretPass);
  
  // const data = bytes.toString(CryptoJS.enc.Utf8);

  // return JSON.parse(data);

  let decData = CryptoJS.enc.Base64.parse(text).toString(CryptoJS.enc.Utf8)

  let bytes = CryptoJS.AES.decrypt(decData, secretPass).toString(CryptoJS.enc.Utf8)

  return JSON.parse(bytes)


  
  
}

export default decryptText;
