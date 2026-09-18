@echo off
chcp 65001 > nul
echo ========================================================
echo   🧙‍♂️ SYNCHRONISATION DU GRIMOIRE MEDICAL VERS L'IPAD
echo ========================================================
echo.
cd /d "%~dp0"
echo [1/3] Verification des fichiers modifies...
git add .
echo [2/3] Enregistrement des changements...
git commit -m "Mise a jour automatique du %date% %time%"
echo [3/3] Envoi vers Internet...
git push origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo   ✅ SYNCHRONISATION TERMINEE AVEC SUCCES !
    echo   Dans 30 a 60 secondes, recharge la page sur ton iPad.
    echo   Lien: https://vishnubhugwant-pixel.github.io/DFGSM2/
    echo ========================================================
) else (
    echo ========================================================
    echo   ⚠️ Rien a mettre a jour ou petite erreur.
    echo ========================================================
)
echo.
pause
