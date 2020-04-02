require('dotenv/config');
const fs = require('fs');
const sha1 = require('sha1');
const FormData = require('form-data');
const appRoot = require('app-root-path');

const api = require('../services/api');
const decryptText = require('../utils/decryptText');

module.exports = {

  async store() {    
    const result = await api.get(`/generate-data?token=${process.env.TOKEN}`);     
    let data = JSON.stringify(result.data);
    fs.writeFileSync(`${appRoot}/answer.json`, data);    
    return result.data;
  },

  async update(data) {
    
    const newText = decryptText(data.cifrado, data.numero_casas);
    const algorithm = sha1(newText);

    const answer = {
      "numero_casas": data.numero_casas,
      "token": data.token,
      "cifrado": data.cifrado.toLowerCase(),
      "decifrado": newText,
      "resumo_criptografico": algorithm
    }

    let answerData = JSON.stringify(answer);
    fs.writeFileSync('answer.json', answerData);
  },

  async submit() {
    try {       
      const streamFile = fs.createReadStream(`${appRoot}/answer.json`);      
      const form = new FormData();
      form.append('answer', streamFile);   
      
      const { data } = await api.post(`/submit-solution?token=${process.env.TOKEN}`, form, { headers: form.getHeaders() })
      
      console.log(data)

      return data;

    } catch (error) {
      console.log("An error has occurred: ", error)
    }
  }
}
