@echo off
cls
echo ========= INICIANDO PUSH PARA O GITHUB (FORÇADO) =========

cd /d %~dp0

echo == Verificando repositório ==
git status

echo == Adicionando arquivos ==
git add .

echo == Commitando arquivos ==
git commit -m "Update"

echo == Enviando (forçando) para o GitHub ==
git push --force origin main

echo ========= PUSH COMPLETO =========
pause
