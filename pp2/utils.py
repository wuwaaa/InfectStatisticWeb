import time
import pymysql

    #获取时间
def get_time():
    time_str = time.strftime("%Y{}%m{}%d{} %X")
    return time_str.format("年","月","日")

def get_conn():
    """
    :return: ；连接，游标
    """
    #创建连接
    conn = pymysql.connect(host="",
                           user="",
                           password="",
                           db="",
                           charset="utf-8")
    #创建游标
    cursor = conn.cursor()#返回的结果默认以元组显示
    return cursor

def close_conn(conn,cursor):
    cursor.close()
    conn.close()

def query(sql,*args):
    """
    封装通用查询
    :param sql:
    :param args:
    :return:返回查询到的结果，以（（），（））的形式
    """
    conn,cursor = get_conn()
    cursor.execute(sql,args)
    res = cursor.fetchall()
    close_conn(conn,cursor)
    return res

def get_main_data():
    """
    :return: 返回显示的数据
    """
    sql = "select sum(confirm)"\
    "(select  form  *order by "\

    pass

if __name__ == "__main__":
    print (get_time())