Testar a pagina inicial

```bash
  curl http://localhost:3000/
```
Testar a página Sobre
```bash
  curl http://localhost:3000/about/
```
Upload de Arquivo
```bash
  curl -X POST -F "file=@caminho_para_arquivo/arquivo.txt" http://localhost:3000/upload
```
