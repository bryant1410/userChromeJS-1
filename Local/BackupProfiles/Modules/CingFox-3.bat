::2016.12.09

:pcxFirefox
::�}�uPcxFirefox������
cls

::������������λ�õ�Mozilla Firefox�ļ��У�������5��
set BackDir3=..\..\..\..\..

::����Firefox�ļ��µ�tmp�ļ�
del /s /q %BackDir3%\firefox\*.tmp

::�}�ufirefox���R�r�ļ��A
xcopy "%BackDir3%\firefox" %TempFolder%\firefox\  /s /y /i

::�}�u��Яģ��tmemutil.ini��firefox�������ļ���
xcopy "%TempFolder%\Software\run\tmemutil.ini" %TempFolder%\firefox\  /s /y /i

:CingFox-2
::��Ҫ�h������
del %TempFolder%\Software\GFW\goagent\  /s /q
del %TempFolder%\Software\GFW\IP-Update\  /s /q
del %TempFolder%\Software\GFW\Shadowsocks\  /s /q
del %TempFolder%\Software\Other\QT-Check\  /s /q
del %TempFolder%\Software\GFW\psiphon\psiphon3.exe.orig  /s /q
del %TempFolder%\Profiles\iMacros\  /s /q
del %TempFolder%\Profiles\bookmarks.html  /s /q
del %TempFolder%\Profiles\places.sqlite  /s /q
del %TempFolder%\Profiles\cookies.sqlite  /s /q
del %TempFolder%\Profiles\permissions.sqlite  /s /q
del %TempFolder%\Profiles\content-prefs.sqlite  /s /q
del %TempFolder%\Profiles\logins.json  /s /q
del %TempFolder%\Profiles\readItLater.sqlite  /s /q
del %TempFolder%\Profiles\chrome\Local\InformEnter.Ijson  /s /q

::һЩ�ű��ļ��������
xcopy "%TempFolder%\Profiles\chrome\xul\localMark_0.6.1.uc.xul" %TempFolder%\Optional\Profiles\chrome\xul\  /s /y /i
xcopy "%TempFolder%\Profiles\chrome\SubScript\SougouDeskPic.uc.js" %TempFolder%\Optional\Profiles\chrome\SubScript\  /s /y /i
xcopy "%TempFolder%\Profiles\chrome\SubScript\QR.uc.js" %TempFolder%\Optional\Profiles\chrome\SubScript\  /s /y /i
xcopy "%TempFolder%\Profiles\chrome\SubScript\videos_skipAd.uc.js" %TempFolder%\Optional\Profiles\chrome\SubScript\  /s /y /i
xcopy "%TempFolder%\Profiles\chrome\Local\_user.js" %TempFolder%\Optional\Profiles\chrome\Local\  /s /y /i
xcopy "%TempFolder%\Profiles\extensions\uMatrix@raymondhill.net.xpi" %TempFolder%\Optional\Profiles\extensions\  /s /y /i
xcopy "%TempFolder%\Profiles\extensions\zotero@chnm.gmu.edu.xpi" %TempFolder%\Optional\Profiles\extensions\  /s /y /i
xcopy "%TempFolder%\Software\GFW" %TempFolder%\Optional\Software\GFW\  /s /y /i
xcopy "%TempFolder%\Software\Image" %TempFolder%\Optional\Software\Image\  /s /y /i
xcopy "%TempFolder%\Software\TotalCMD64" %TempFolder%\Optional\Software\TotalCMD64\  /s /y /i
del %TempFolder%\Profiles\chrome\xul\localMark_0.6.1.uc.xul /s /q
del %TempFolder%\Profiles\chrome\SubScript\SougouDeskPic.uc.js  /s /q
del %TempFolder%\Profiles\chrome\SubScript\QR.uc.js  /s /q
del %TempFolder%\Profiles\chrome\SubScript\videos_skipAd.uc.js  /s /q
del %TempFolder%\Profiles\chrome\Local\_user.js  /s /q
del %TempFolder%\Profiles\extensions\uMatrix@raymondhill.net.xpi  /s /q
del %TempFolder%\Profiles\extensions\zotero@chnm.gmu.edu.xpi  /s /q
del %TempFolder%\Software\GFW\  /s /q
del %TempFolder%\Software\Image\  /s /q
del %TempFolder%\Software\Other\  /s /q

::�o��һ�����ļ��ACingFox
xcopy "%TempFolder%\firefox" %TempFolder%\CingFox\firefox\ /s /y /i
xcopy "%TempFolder%\Profiles" %TempFolder%\CingFox\Profiles\ /s /y /i
xcopy "%TempFolder%\Plugins" %TempFolder%\CingFox\Plugins\ /s /y /i
xcopy "%TempFolder%\Software" %TempFolder%\CingFox\Software\ /s /y /i