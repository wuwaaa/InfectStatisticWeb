# InfectStatisticWeb
###1.作业链接
[仓库链接](https://github.com/wuwaaa/InfectStatisticWeb.git)
[博客链接](https://www.cnblogs.com/chenyi-maysky/p/12491087.html)
###2.结对学号
+ 221701408
+ 041701124
###3.项目介绍
本项目采用Python+MySQL+Flask+Echarts技术来实现某次疫情统计可视化。
1. 功能1：实现通过地图的形式来直观显示疫情的大致分布情况，还可以查看具体省份的疫情统计情况。
2. 功能2：点击某个省份显示该省疫情的具体情况
###4.项目如何构建和运行
本次项目开发环境有Python3.6.6

IDE包括：jupyter notebook,Pycharm2018.2.4专业版

以及一个MySQL数据库

搭建好以上环境后还需打开命令行
输入pip install flask

pip install requests

pip install pymysql

以上命令为下载一系列python的第三方库


（因为没有云数据库，所以代码中用的是本地数据库，那么数据不是共享的，得自己得到数据）
然后接下来打开mysql数据库，建一个数据库covtest,
然后就可以clone项目到本地，把crawl_store_date.ipynb文件放到notebook工作目录中，
打开jupyter notebook运行该文件（如果数据库用户名密码不是root 123456的话，记得改get_conn()函数）
到这里数据库就有最新爬取的数据了


然后用pycharm打开整个项目文件，如果数据库用户名密码不是root 123456，记得改utils.py文件里的get_conn()方法。
如果之前Pycharm编译器没有改过设置，再app.py中会import utils报错，如果遇到这个问题，
[关于pycharm同一目录下无法import明明已经存在的.py文件的解决方法](https://blog.csdn.net/wcx1293296315/article/details/81156036)
之后直接打开app.py文件，运行app.run(），打开运行结果的网页链接即可。