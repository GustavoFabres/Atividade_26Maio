
@echo off
cls
:menu
cls

date /t

echo Computador: %computername%        Usuario: %username%
                   
echo  Menu das Atividades dia 29 Abril
echo  ==================================
echo * 1. Verificar datas               * 
echo * 2. Jogo de adivinha              *
echo * 3. Separador de palavras         *
echo * 4. numero fatorial recursivo     *
echo * 5. Debounce                      *
echo * 6. Memorizar                     * 
echo * 7. Organizar produtos por preco  * 
echo * 8. Agrupamento por Propriedade   * 
echo * 9. Convercao de formatos         * 
echo * 10. Sair                         * 
echo  ==================================

set /p opcao= Escolha uma opcao: 
echo ------------------------------
if %opcao% equ 1 goto opcao1
if %opcao% equ 2 goto opcao2
if %opcao% equ 3 goto opcao3
if %opcao% equ 4 goto opcao4
if %opcao% equ 5 goto opcao5
if %opcao% equ 6 goto opcao6
if %opcao% equ 7 goto opcao7
if %opcao% equ 8 goto opcao8
if %opcao% equ 9 goto opcao9
if %opcao% equ 10 goto opcao10
if %opcao% equ 11 goto opcao11
if %opcao% equ 12 goto opcao12


:opcao1
cls
node Atividade1_Data.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao2
cls
node Atividade2_Jogo.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao3
cls
node Atividade3_Palavras.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao4
cls
node Atividade4_FatorialR.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao5
cls
node Atividade5_Debounce.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao6
cls
node Atividade6_memorizar.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao7
cls
node Atividade7_OrganizarProdutos.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao8
cls
node Atividade8_AgrupamentoPropriedade.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu

:opcao9
cls
node Atividade9_convercao.js
echo ==================================
echo * Atividade Encerrada            *
echo ==================================
pause
goto menu



:opcao12
cls
control.exe
pause
goto menu

:opcao10
cls
exit

:opcao11
echo ==============================================
echo * Opcao Invalida! Escolha outra opcao do menu *
echo ==============================================
pause
goto menu