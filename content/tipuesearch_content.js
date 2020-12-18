var tipuesearch = {"pages": [{'title': '首頁', 'text': '本周為第14周 \n 我的倉儲: https://github.com/40823233/cad2020 \n 分組倉儲: \xa0 https://github.com/40823232/cad2020bg5 \n 分組網站: \xa0 http://40823232.github.io/cad2020bg5 \n W1 學員填寫基本資料 \n W1 告知將利用 \xa0 Gitter \xa0 與 \xa0 Discourse \xa0 進行課程議題討論 \n https://gitter.im/mdecourse/cad2020 \xa0 \n https://forum.eng.nfu.edu.tw \xa0 \n W1 就電腦軟硬體與網路環境的使用進行介紹 \n W2 學員建立 \xa0 Github , \xa0 Gitlab, \xa0 Heroku , \xa0 Onshape \xa0 與 \xa0 Authorea \xa0 帳號 \n Ｗ2 學員利用 Github Pages 與 CMSiMDE 建立個人網頁 \n W2 學員學習如何利用 Git 與 Github 維護個人網頁 \n Ｗ3 統整 W1 與 W2 教材內容至各學員個人網頁 \n Ｗ3 完成亂數分組,\xa0 每班分成四組 \n W4 - W6 Flask on Heroku 與 CoppeliaSim Remote API 程式編寫 \n W7-W9 建立 \xa0 https://github.com/mdecourse/vrep-api-python \xa0 所需零組件 \n Ｗ10 - W14 分組電腦輔助設計專案 \n Ｗ15 - W18 分組總結報告 \n', 'tags': '', 'url': '首頁.html'}, {'title': '周次', 'text': '', 'tags': '', 'url': '周次.html'}, {'title': 'w1', 'text': '利用 NX, Solidworks, Inventor, Onshape 與 Solvespace 建立下列的所有零件檔案, 並以表格列出各零件的體積. \n Solidworks 零件繪圖練習1.pdf \n Solidworks 零件繪圖練習2.pdf \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '利用 @gm 電子郵箱建立 \xa0 Github , \xa0 Gitlab, \xa0 Heroku , \xa0 O nshape \xa0 與 \xa0 Authorea \xa0 帳號 \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w4~w6', 'text': '利用 \xa0 Wink3 \xa0 建立電腦操作流程導引影片. \xa0 \n', 'tags': '', 'url': 'w4~w6.html'}, {'title': 'w7~w9', 'text': "每位學員依照分組順序從\xa0 Solidworks 零件繪圖練習1.pdf \xa0各取出一個零件原始尺寸後, 自行從中選擇三個關鍵參數尺寸, 以每個尺寸在合理範圍內, 分別 -10%, -5%, +5%, +10% 的尺寸差異作為組合依據, 分別產生 64 個不同尺寸組合的零件, 以 Solidworks, Inventor 或 NX12 繪圖後, 將各組合的零件工程圖, 體積與零件圖檔列表後呈現. \n 並利用 ANSI C 進行設計分析 \n C 建立動態連結程式庫, 並與 Python 結合應用 \n 以整數資料結構串接 C 與 Python: tcc -w -shared -DLIBTCC_AS_DLL -DONE_SOURCE multiply.c -o multiply.dll \n multiply.c \n \n \n \n \n \n \n #include <stdio.h> \n \xa0 \xa0 \n int   multiply( int ,  int ); \n \xa0 \xa0 \n __declspec ( dllexport )  int \n multiply( int   num1,  int   num2) \n { \n return   num1 * num2; \n } \n \n \n \n \n \n multiply.py \n \n \n \n \n \n \n import   ctypes \n \xa0 \xa0 \n lib  =   ctypes.CDLL( './multiply.dll' ) \n result  =   lib.multiply( 3 ,  2 ) \n print (result) \n \n \n \n \n \n 以浮點數資料結構串接 C 與 Python:tcc -w -shared -DLIBTCC_AS_DLL -DONE_SOURCE multiply_float.c -o multiply_float.dll \n multiply_float.c \n \n \n \n \n \n \n #include <stdio.h> \n \xa0 \xa0 \n float   multiply( float ,  float ); \n \xa0 \xa0 \n __declspec ( dllexport )  float \n multiply( float   num1,  float   num2) \n { \n return   num1 * num2; \n } \n \n \n \n \n \n multiply_float.py \n \n \n \n \n \n \n import   ctypes \n \xa0 \n lib  =   ctypes.CDLL( '.\\multiply_float.dll' ) \n # By default functions are assumed to return the C int type. Other return types can be specified by setting the restype attribute of the function object. \n lib.multiply.restype  =   ctypes.c_float \n result  =   lib.multiply(ctypes.c_float( 3.0 ), ctypes.c_float( 2.0 )) \n print (result) \n \n \n \n \n \n", 'tags': '', 'url': 'w7~w9.html'}, {'title': 'w10~14', 'text': '從機械設計專業的角度切入機電資整合領域的兩項重點創新目標： \n 1.設法讓機器看得見, 能夠藉以判讀環境內容, 從容運作。 \n 2.讓原本繁雜的流程自動化, 提升操作者的生活品質。 \n 從近端個人維護倉儲進入非同步協同維護倉儲的三種不同方式: \n 1.進入個人倉儲 cmsimde 執行 python wsgi.py (只有 localhost 可以連線) \n 2.以區網取得的 IPv6 或 IPv4 網路位址啟動 cmsimde 中的 wsgi.py (區域網路中電腦都可連線) \n 3.在廣域網路上透過 Python uwsgi 服務在 Ubuntu 中啟動 cmsimde 中的 wsgi.py (任何網際網路上的電腦都可以連線） \n Github 倉儲維護技術: \n 以SSH推送改版資料 \n 分組電腦輔助設計專案 \n 1) 確認設計需求 - 清楚了解設計動機與目的 \n 2) 研討設計需求 - 研究討論設計需求的內涵, 蒐集相關文獻與參考資料, 經由討論定位設計方向 \n 3) 開發可行設計 - 根據設計方向, 利用電腦輔助設計與分析方法, 建立可行方案 \n 4) 選擇最佳設計 - 利用最佳化分析或品質機能展開流程選擇最佳設計方案 \n 5) 建立設計原型 - 利用電腦輔助設計與製造方法, 建立設計原型 \n 6) 評估原型性能 - 經由討論或與設計需求者溝通, 評估是否接受所完成的設計 \n 7) 重新設計至符合需求 - 若設計已達要求, 則進行下一步, 否則重複上述各相關步驟至符合需求為止 \n 8) 傳達設計內容 - 建立與設計內容相關的各種資料, 準備進行專案報告 \n', 'tags': '', 'url': 'w10~14.html'}, {'title': 'w15~18', 'text': '分組總結報告 \n', 'tags': '', 'url': 'w15~18.html'}, {'title': '倉庫', 'text': '原始網站刪除的東西還有部分筆記在此 \n 備註:記得前往github自己的帳戶中 seeting/gitgub page裡面將 Branch修改為 master \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 建立可快速給其他人上傳的倉儲方法: \n 於init中之IP="***.***.***.***"改為IP="::" \n ，並以ipconfig /all獲得IP即可使所有人進入 \n 倉儲複製(有子模組適用) \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n 這是還沒有設定使用者時的代碼。 \n git clone --recurse-submodules \xa0 https://github.com/40823233/cp2019.git \n 這是我的倉儲的複製方法。 \n 若資料遺失 可 使用gitcheckout .回復到上一版倉儲 \n 上傳三連 \n git add . \n git commit -m\xa0 "add repositere link" \n git push \n 然後打帳號密碼，如果中途有錯的話cmd上面會告訴你叫你打一些東西，好了之後重複上述動作應該就行了。 \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以git子模塊添加\xa0 \xa0 https://github.com/mdecourse/cmsimde \xa0 \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n 數學符號與方程式 \n Inline math equations go in like so:   ω = d ϕ / d t ω = d ϕ / d t . Display math should get its own line and be put in in double-dollarsigns: \n I = ∫ ρ R 2 d V \n \n 於cad2020課程中所學到的軟體，程式: \n \n \n 1.錄影,截圖,筆記:ShaerX,zoomit. \n 2.繪圖軟體: NX, Solidworks, Inventor, Onshape, Solvespace \n 3.github程式組成: \n \n 2020cad:學習如何使用程式對各繪圖軟體繪出的圖進行大量複製並小幅度修改 \n 利用MARKDOWN 寫投影片 \n 以下利用 Markdown 格式展示 Python 程式碼: \n # use threading  and  subprocess to threading the make process\n import  os\n import  subprocess\n import  threading\n\ndef domake():\n\n     path  =  "../exposed/api/exposed" \n    ubuntu =  "../Ubuntu" \n\n    # create obj  path \n\n     if   not  os. path .exists( path + "/../obj" ):\n        os.makedirs( path + "/../obj" )\n\n    subprocess.call([ "make" ,  "clean" ], cwd= path )\n    subprocess.call( "make" , cwd= path )\n    subprocess.call([ "cp" ,  "{libslvs.so, _slvs.so, slvs.py}" , ubuntu], cwd= path )\n    subprocess.call([ "python3" ,  "circle_ex.py" ], cwd= path + "/" +ubuntu)\n\nmake = threading.Thread(target=domake)\nmake.start() \n   使用 iframe 導入影片 導入影片 template 導入結果如下 \n \n \n', 'tags': '', 'url': '倉庫.html'}]};