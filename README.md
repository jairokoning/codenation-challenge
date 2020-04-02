<br>
<h1>Caeser cipher</h1>

<p>
In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.
</p>

<p><strong>Plaintext:</strong>  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG</p>

<p><strong>Ciphertext:</strong> QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD</p>

<h1><a href="https://www.codenation.dev/">Codenation</a> challenge</h1>

## Regras
- As mensagens serão convertidas para minúsculas tanto para a criptografia quanto para descriptografia.
- No nosso caso os números e pontos serão mantidos, ou seja:

**Normal:** 1a.a

**Cifrado:** 1d.d

Escrever programa, em qualquer linguagem de programação, que faça uma requisição HTTP para a url abaixo:

> **https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=SEU_TOKEN**

O resultado da requisição vai ser um JSON conforme o exemplo:

    {
	    "numero_casas": 10,
	    "token":"token_do_usuario",
	    "cifrado": "texto criptografado",
	    "decifrado": "aqui vai o texto decifrado",
	    "resumo_criptografico": "aqui vai o resumo"
    }


O primeiro passo é você salvar o conteúdo do JSON em um arquivo com o nome **answer.json**, que irá usar no restante do desafio.

Você deve usar o número de casas para decifrar o texto e atualizar o arquivo JSON, no campo **decifrado**. O próximo passo é gerar um resumo criptográfico do texto decifrado usando o algoritmo **sha1** e atualizar novamente o arquivo JSON. OBS: você pode usar qualquer biblioteca de criptografia da sua linguagem de programação favorita para gerar o resumo **sha1** do texto decifrado.

Seu programa deve submeter o arquivo atualizado para correção via POST para a API:

> **https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=SEU_TOKEN**

OBS: a API espera um arquivo sendo enviado como *multipart/form-data*, como se fosse enviado por um formulário HTML, com um campo do tipo file com o nome **answer**. Considere isso ao enviar o arquivo.

O resultado da submissão vai ser sua nota ou o erro correspondente. Você pode submeter quantas vezes achar necessário, mas a API não vai permitir mais de uma submissão por minuto.

## Features

- **[NodeJS](https://nodejs.org/en/)** — a JavaScript runtime server environment
- **[express](https://www.npmjs.com/package/express)** —  a web application framework
- **[axios](https://www.npmjs.com/package/axios)** — promise based HTTP client for the browser and node.js

## Getting started

1. Clone this repo using `git clone git@github.com:jairokoning/codenation-challenge.git`
2. Move yourself to the appropriate directory: `cd codenation-challenge`
3. Run `npm-install` to install dependencies
4. Make a copy of the file **.env.example** and rename it to **.env**
5. Add your Codination token to the file **.env**
6. Run `npm start` to start the server
7. Use a REST client like Insomnia or Postman to access the route: **http://localhost:3333**

**Developed with a lot of love and dedication by me, Jairo Koning**

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.

<p align="center">  
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  <img src="https://img.shields.io/badge/Version-%200.9.0%20-green">
</p>