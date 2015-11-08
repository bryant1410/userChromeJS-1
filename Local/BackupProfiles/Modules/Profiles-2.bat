:Profiles-2
cls
::完整日期和時間
set tm1=%time:~0,2%
set tm2=%time:~3,2%
set tm3=%time:~6,2%
set tm4=%time:~0,8%
set da1=%date:~0,4%
set da2=%date:~5,2%
set da3=%date:~8,2%
::輸出文件名
set Name=Profiles_%da1%%da2%%da3%-%tm1%%tm2%%tm3%_%ver%.7z

::小時數小于10点時的修正
set /a tm1=%time:~0,2%*1
if %tm1% LSS 10 set tm1=0%tm1%
::輸出文件名
set Name=Profiles_%da1%%da2%%da3%-%tm1%%tm2%%tm3%_%ver%.7z

rem 開始備份
::-mx9极限压缩 -mhc开启档案文件头压缩 -r递归到所有的子目录
%zip% -mx9 -mhc -r u -up1q3r2x2y2z2w2 %TargetFolder%\%Name% "%TempFolder%\Profiles"
@echo 備份完成！并刪除臨時文件夾！
rd "%TempFolder%" "%TempFolder1%" "%TempFolder2%" "%TempFolder3%" /s/q