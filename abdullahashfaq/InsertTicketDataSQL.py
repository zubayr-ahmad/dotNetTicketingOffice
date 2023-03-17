from SQLServerApp import *
import random
import datetime


ticketSubjects = ["Unable to log in to account", "Error message when accessing website", "Billing issue", "Request for refund", "Product not working as expected", "Need help setting up account", "Troubleshooting issue with device", "Question about product features", "Reporting a bug", "Website is down", "Need to cancel subscription", "Missing or lost package", "Shipping delay", "Incorrect item received", "Damaged item received", "Return or exchange request", "Item out of stock", "Warranty claim", "Complaint about product quality", "Complaint about customer service", "Request for technical support", "Upgrade or downgrade account", "Payment declined", "Scheduling issue", "Outage or service disruption", "Request for customization", "Security issue", "Unauthorized access to account", "Phishing or scam email", "Request for data deletion", "Change of email address", "Change of billing information", "Change of shipping address", "Upgrade request for hardware", "Upgrade request for software", "Request for training or education", "Request for a demo or trial", "Request for a quote", "Request for more information", "Request for partnership or collaboration", "Request for sponsorship or donation", "Request for media coverage or interview", "Job application or inquiry", "Business development inquiry", "Investor relations inquiry", "Legal inquiry or complaint", "General feedback or suggestion", "Praise or positive feedback", "Other issue or request"]
description = ['Organizing files and documents for easier access and retrieval', 'Scheduling appointments and meetings for the team', 'Drafting emails and correspondence for the manager', 'Maintaining an up-to-date inventory of office supplies', 'Preparing reports and presentations for senior executives', 'Taking meeting minutes and distributing them to attendees', 'Coordinating travel arrangements for employees', 'Answering phone calls and responding to messages', 'Handling incoming and outgoing mail', 'Troubleshooting office equipment and technology', 'Managing office expenses and budget', 'Developing and implementing office policies and procedures', 'Facilitating communication between departments and team members', 'Performing data entry and database management tasks', 'Maintaining a clean and organized office environment', 'Assisting with human resources tasks such as recruitment and onboarding', 'Collaborating with vendors and external partners', 'Participating in meetings and providing input and ideas', 'Researching and analyzing industry trends and best practices', 'Coaching and mentoring junior staff members', 'Attending conferences and networking events', 'Providing support for virtual meetings and webinars', 'Maintaining a master calendar of events and deadlines', 'Updating social media and online profiles for the company', 'Creating and managing online surveys and feedback forms', 'Designing and ordering promotional materials for the company', 'Managing the companys website and online presence', 'Developing training materials and conducting training sessions', 'Conducting performance evaluations and providing feedback']


for num in range(25):
    due_date = datetime.date(random.randint(2000, 2022), random.randint(1, 12), random.randint(1, 28))
    updated_date = datetime.date(random.randint(2000, 2022), random.randint(1, 12), random.randint(1, 28))
    created_date = datetime.date(random.randint(1990, 2022), random.randint(1, 12), random.randint(1, 28))
    start_date = datetime.date(random.randint(1990, 2022), random.randint(1, 12), random.randint(1, 28))
    comment = "Null"
    desc = random.choice(description)

    insertData(
        "[Ticket]", 
        ["Requester_id", "Ticket_Subject", "Assignee_Id", "Priority", "Status", "Date_Created", "Description", "Comment", "Sentiment", "Updated_Date", "DueDate", "TaskId", "Start_Date"],
        [num+1, f"{random.choice(ticketSubjects)}", random.randint(100, 999), random.randint(1, 3), random.randint(1, 3), f"{created_date}", desc, comment, "Null", f"{updated_date}", f"{due_date}", f"#{random.randint(1000, 9999)}", f"{start_date}"]
    )

    print(f"Data Insert Row {num+1}")
