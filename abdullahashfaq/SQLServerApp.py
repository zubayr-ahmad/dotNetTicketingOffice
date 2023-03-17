import pyodbc
from textblob import TextBlob

server = 'sql8003.site4now.net'
database = 'db_a95314_ticketingsystem'
username = 'db_a95314_ticketingsystem_admin'
password = 'ticketingsystem123'


connection_string = 'DRIVER={ODBC Driver 17 for SQL Server};SERVER=' + server + ';DATABASE=' + database + ';UID=' + username + ';PWD=' + password
connection = pyodbc.connect(connection_string)


def getSentiment(text):
    analysis = TextBlob(text)
    if analysis.sentiment.polarity > 0: return 1
    elif analysis.sentiment.polarity == 0: return 0
    else: return -1


def getTableData(tableName, tbl=False):
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM [' + tableName + ']')
    data = cursor.fetchall()
    if tbl: 
        for i in data: print(i)
    cursor.close()
    return data


def updateData(tableName, columnToUpdate, newValue, conditionColumn, conditionValue):
    cursor = connection.cursor()
    query = f"UPDATE {tableName} SET {columnToUpdate} = ? WHERE {conditionColumn} = ?"
    cursor.execute(query, (newValue, conditionValue))
    cursor.commit()
    cursor.close()

# This is achieved through api
# def addSentiment():
#     tableName = "Ticket"
#     data = getTableData(tableName)
#     for row in data:
#         # if (type(row[-4]) == type(None)) and (type(row[-5]) != type(None) and type(row[-6]) != type(None)):
#         if (row[-4] == "Null") and (row[-5] != "Null" and row[-6] != "Null"):
#             sentiment = getSentiment(row[-5] + row[-6])
#             updateData("[Ticket]", "Sentiment", f"{sentiment}", "Id_Ticket", f"{row[0]}")


def insertData(tableName, columnNames, values):
    query = f"INSERT INTO {tableName} ({', '.join(columnNames)}) VALUES ({', '.join(['?' for _ in values])})"
    cursor = connection.cursor()
    cursor.execute(query, values)
    connection.commit()
    cursor.close()


def deleteAllData(tableName):
    cursor = connection.cursor()
    query = f"DELETE FROM {tableName}"
    # query = f"TRUNCATE TABLE {tableName}"
    cursor.execute(query)
    connection.commit()
    cursor.close()


if __name__ == "__main__":
    # updateData("[User]", "Ticket_Id", 980, "User_Id", 1035)
    # updateData("[Ticket]", "Comment", "Null", "Id_Ticket", 979)
    # deleteAllData("[Comments]")
    getTableData("Comments", True)
    # getTableData("User", True)
    # getTableData("Ticket", True)
