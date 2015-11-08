:Plugins-n-Software-2
cls
::設置備份文件路徑以及文件名

::完整日期和時間
set tm1=%time:~0,2%
set tm2=%time:~3,2%
set tm3=%time:~6,2%
set tm4=%time:~0,8%
set da1=%date:~0,4%
set da2=%date:~5,2%
set da3=%date:~8,2%
set Name=Plugins-n-Software_%da1%%da2%%da3%-%tm1%%tm2%%tm3%.7z

::小時數小于10点時的修正
set /a tm1=%time:~0,2%*1
if %tm1% LSS 10 set tm1=0%tm1%
set Name=Plugins-n-Software_%da1%%da2%%da3%-%tm1%%tm2%%tm3%.7z

rem 開始備份
::-mx9极限压缩 -mhc开启档案文件头压缩 -r递归到所有的子目录
%zip% -mx9 -mhc -r u -up1q3r2x2y2z2w2 %TargetFolder%\%Name% "%TempFolder%\Plugins" "%TempFolder%\Software"
@echo 備份完成！并刪除臨時文件夾！
rd "%TempFolder%" /s/q
