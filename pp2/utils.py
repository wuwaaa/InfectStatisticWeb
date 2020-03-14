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
    conn = pymysql.connect(host="localhost",
                           port=3306,
                           user="root",
                           password="123456",
                           db="covtest",
                           charset="utf8")
    #创建游标
    cursor = conn.cursor()#返回的结果默认以元组显示
    return conn,cursor

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
    sql= "select nowConfirm,suspect,nowSevere,confirm,heal,dead from country_now"

    res = query(sql)
    return res[0]

def get_map_data():
    """
    :return:读取地图数据
    """
    sql= "select province,confirm from province_history"
    res = query(sql)
    return res

def get_graph_data():#获取中国曲线图所需疫情数据
    sql="select ds,confirm,confirm_add,heal,dead from country_history "
    res=query(sql)
    return res

if __name__ == "__main__":
    print (get_graph_data())
