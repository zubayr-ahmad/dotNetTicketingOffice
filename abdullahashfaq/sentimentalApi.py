from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from textblob import TextBlob
from SQLServerApp import insertData
app = FastAPI()

# Add CORS middleware to allow requests from any origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Data(BaseModel):
    userId: int
    ticketId: int
    comment: str

class SentimentalOutput(BaseModel):
    userId: int
    ticketId: int
    comment: str
    sentiment: str

@app.post("/sentiment")
async def analyze_sentiment(request: Data) -> SentimentalOutput:
    text = request.comment
    sentiment = TextBlob(text).sentiment.polarity
    sentiment_label = 1 if sentiment > 0 else -1 if sentiment < 0 else 0

    # Insert data into SQL server
    insertData(
        "[Comments]",
        ["Ticket_Id", "CommentText", "User_Id", "Sentiments"],
        [request.ticketId, text, request.userId, sentiment_label]
    )

    return SentimentalOutput(
        userId=request.userId,
        ticketId=request.ticketId,
        comment=text,
        sentiment=sentiment_label
    )
