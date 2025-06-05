@echo off
cls
echo ========= INICIANDO PUSH PARA O GITHUB =========

cd /d %~dp0

echo == Verificando repositório ==
git status

echo == Fazendo pull para sincronizar com remoto ==
git pull origin main --allow-unrelated-histories

echo == Adicionando arquivos ==
git add .

echo == Commitando arquivos ==
git commit -m "Atualização do projeto com exe"

echo == Enviando para o GitHub ==
git push origin main

echo ========= PUSH COMPLETO =========
pause
