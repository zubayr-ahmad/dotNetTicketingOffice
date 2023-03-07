import random
from datetime import datetime, timedelta
import string


def addTicket(title1, status1, assigneeId1, subjectMatter1, priority1,
              startDate1, dueDate1, updatedDate1, taskId1, description1,
              comment1, sentiment1,requesterId1):
    obj = {
        "ticketSubject":title1,
        "requesterId":requesterId1,
        "status": status1,
        "assignyId": assigneeId1,
        "subjectMatter": subjectMatter1,
        "priority": priority1,
        "dateCreated": startDate1,
        "dueDate": dueDate1,
        "updatedDate": updatedDate1,
        "taskId": taskId1,
        "description": description1,
        "comment": comment1,
        "sentiment": sentiment1
    }
    return obj


def createData():
    start_date = datetime(2021, 1, 1)  # Start date
    end_date = datetime(2023, 12, 31)  # End date
    delta = end_date - start_date  # Time delta between start and end dates
    # Define the set of characters to choose from
    characters = string.ascii_lowercase + string.digits

    # Generate a random string of 6 characters
    random_string = ''.join(random.choice(characters) for i in range(6))

    # Concatenate the "#" character and the random string
    result = '#' + random_string

    titleList = [
        "Hardware failure", "Software bugs", "Network connectivity issues",
        "Slow internet speeds", "Data security breaches",
        "Outdated technology", "Poor user experience design",
        "Inadequate data backups", "Insufficient server capacity",
        "Incompatible software and hardware",
        "Lack of training on new technology",
        "Lack of communication from management", "Long hours and burnout",
        "Inadequate salary and benefits",
        "Difficulties with project management",
        "Inefficient or outdated workflows", "Lack of diversity and inclusion",
        "Inappropriate workplace behavior", "Micromanagement",
        "Lack of autonomy", "Insufficient resources for projects",
        "Lack of recognition for accomplishments", "Office politics",
        "Tight deadlines and stress", "Lack of transparency from leadership",
        "Inadequate job training", "Career development limitations",
        "Poor work-life balance", "Lack of clear goals and expectations"
    ]
    descriptionList = [
        'Organizing files and documents for easier access and retrieval',
        'Scheduling appointments and meetings for the team',
        'Drafting emails and correspondence for the manager',
        'Maintaining an up-to-date inventory of office supplies',
        'Preparing reports and presentations for senior executives',
        'Taking meeting minutes and distributing them to attendees',
        'Coordinating travel arrangements for employees',
        'Answering phone calls and responding to messages',
        'Handling incoming and outgoing mail',
        'Troubleshooting office equipment and technology',
        'Managing office expenses and budget',
        'Developing and implementing office policies and procedures',
        'Facilitating communication between departments and team members',
        'Performing data entry and database management tasks',
        'Maintaining a clean and organized office environment',
        'Assisting with human resources tasks such as recruitment and onboarding',
        'Collaborating with vendors and external partners',
        'Participating in meetings and providing input and ideas',
        'Researching and analyzing industry trends and best practices',
        'Coaching and mentoring junior staff members',
        'Attending conferences and networking events',
        'Providing support for virtual meetings and webinars',
        'Maintaining a master calendar of events and deadlines',
        'Updating social media and online profiles for the company',
        'Creating and managing online surveys and feedback forms',
        'Designing and ordering promotional materials for the company',
        'Managing the companys website and online presence',
        'Developing training materials and conducting training sessions',
        'Conducting performance evaluations and providing feedback'
    ]
    commentList = [
        "Looks like a busy day ahead!", "That report looks great!",
        "This project is really coming together.",
        "I will handle the phone calls while you are in the meeting.",
        "Can you send me the updated file?",
        "Let me know if you need any help with that.",
        "Don t forget to submit your timesheet!", "I need a coffee break.",
        "The printer is out of paper again...",
        "We need to order more toner soon.",
        "Sorry for the delay, I had an unexpected call.",
        "Can we move the meeting to next week?",
        "Did you see the new office policy update?",
        "Great job on the presentation!",
        "I will take care of the catering for the meeting.",
        "Could you proofread this for me?", "Don t forget to save your work!",
        "Let s schedule a team-building activity.",
        "This software update is really helpful.",
        "I have a doctor s appointment this afternoon.",
        "Can you cover for me while I am out?",
        "The AC is not working, it is too hot in here!",
        "That was a productive meeting.",
        "I think we should revisit this idea next quarter.",
        "We should have a company outing soon.",
        "Please sign this form and return it to HR.",
        "I am looking forward to the long weekend!",
        "The website looks great, good job!",
        "Don t forget to mute your mic on the conference call."
    ]
    sentimentList = ['positive','positive','positive', 'neutral', 'neutral', 'negative']

    allTickets = []

    for i in range(10000):
        random_date1 = start_date + timedelta(days=random.randint(
            0, delta.days))  # Random date within the range
        startDate = random_date1.strftime("%m/%d/%Y")
        dueDate = start_date + timedelta(days=random.randint(0, delta.days))
        dueDate = dueDate.strftime("%m/%d/%Y")
        updatedDate = start_date + timedelta(
            days=random.randint(0, delta.days))
        updatedDate = updatedDate.strftime("%m/%d/%Y")

        random_string = ''.join(random.choice(characters) for i in range(6))
        taskId = '#' + random_string

        statusList = [1, 1 , 1, 1, 2, 2, 3]
        status = random.choice(statusList)
        priorityList = [1, 1 , 1, 1, 2, 2, 3]
        priority = random.choice(priorityList)
        assigneeId = i + 1
        requesterId = i + 157
        subjectMatter = ''.join(random.choice(characters) for i in range(15))
        title = random.choice(titleList)
        description = random.choice(descriptionList)
        sentiment = random.choice(sentimentList)
        comment = random.choice(commentList)

        x = addTicket(title, status, assigneeId, subjectMatter, priority,
                      startDate, dueDate, updatedDate, taskId, description,
                      comment, sentiment,requesterId)
        allTickets.append(x)
    print(allTickets)
    return allTickets


def main():
    data = createData()
    with open('storedTickets.txt', 'w+') as f:
        y = (str(data))
        y = y.replace("'", "\"")
        f.write(y)



main()
