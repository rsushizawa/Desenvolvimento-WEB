# LAB 64
## Pakotes npm utilizados
  fs e http (ambos inclusos já no node)
  
## Descrição do projeto
O Lab 64 de PI:Desenvolvimento WEB consiste em criar um servidor/API implementando rotas e respondendo requisições do usuário.
Extra: utilizando o packote "fs" já incluso no node na rota root foi implementodo o "LAB32".

## Inicializar o servidor
Requerimentos: Node.js
```bash
  node server.js
```
# Instruções para teste

## Testar a pagina inicial
```bash
  curl http://localhost:3000/
```
## Testar a página Sobre
```bash
  curl http://localhost:3000/about/
```
## Upload de Arquivo
```bash
  curl -X POST -F "file=@caminho_para_arquivo/arquivo.txt" http://localhost:3000/upload
```