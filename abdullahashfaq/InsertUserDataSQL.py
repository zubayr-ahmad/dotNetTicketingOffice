from SQLServerApp import *
import random
import string


def getPassword(length=6):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(characters) for _ in range(length))
    return password


firstNames = ["Emma", "Liam", "Olivia", "Noah", "Ava", "Elijah", "Charlotte", "William", "Sophia", "James", "Amelia", "Benjamin", "Isabella", "Lucas", "Mia", "Mason", "Harper", "Ethan", "Evelyn", "Alexander", "Abigail", "Henry", "Emily", "Jacob", "Elizabeth", "Michael", "Avery", "Daniel", "Sofia", "Logan", "Ella", "Matthew", "Mila", "David", "Aria", "Joseph", "Chloe", "Samuel", "Grace", "Owen", "Victoria", "Carter", "Madison", "Wyatt", "Lily", "John", "Aubrey", "Jack", "Hannah", "Luke", "Natalie"]
lastNames  = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Perez", "Taylor", "Anderson", "Wilson", "Jackson", "Moore", "Martin", "Lee", "Gomez", "Parker", "Lewis", "Clark", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Green", "Baker", "Adams", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris"]

for num in range(25):
    firstName = random.choice(firstNames)
    lastName = random.choice(lastNames)
    email = f"{firstName.lower()}.{lastName.lower()}@gmail.com"
    insertData(
            "[User]", 
            ["First_Name", "Last_Name", "Email", "Password", "Ticket_Id"], 
            [f"{firstName}", f"{lastName}", f"{email}", f"{getPassword()}", "Null"]
        )
    print(f"Data Insert Row {num+1}")
