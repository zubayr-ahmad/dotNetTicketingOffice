import requests
import random

url = "http://127.0.0.1:8000/sentiment"

comments = ["Looks like a busy day ahead!", "That report looks great!", "This project is really coming together.", "I will handle the phone calls while you are in the meeting.", "Can you send me the updated file?", "Let me know if you need any help with that.", "Don t forget to submit your timesheet!", "I need a coffee break.", "The printer is out of paper again...", "We need to order more toner soon.", "Sorry for the delay, I had an unexpected call.", "Can we move the meeting to next week?", "Did you see the new office policy update?", "Great job on the presentation!", "I will take care of the catering for the meeting.", "Could you proofread this for me?", "Don t forget to save your work!", "Let s schedule a team-building activity.", "This software update is really helpful.", "I have a doctor s appointment this afternoon.", "Can you cover for me while I am out?", "The AC is not working, it is too hot in here!", "That was a productive meeting.", "I think we should revisit this idea next quarter.", "We should have a company outing soon.", "Please sign this form and return it to HR.", "I am looking forward to the long weekend!", "The website looks great, good job!", "Don t forget to mute your mic on the conference call."]

for i in range(50):
    user_id = random.randint(1034, 1040)
    ticket_id = random.randint(979, 1083)
    comment = random.choice(comments)
    payload = {
        "userId": user_id,
        "ticketId": ticket_id,
        "comment": comment
    }

    response = requests.post(url, json=payload)

    # if response.status_code == 200:
    #     data = response.json()
    #     print(data)
    # else:
    #     print("Error:", response.status_code, response.text)
    print(f"Data Insert Row {i+1}")
