# Project Title
POCKET GURU : One stop app for finding the mentor. 

## Overview

Pocket Guru is a mentorship platform that connects users with domain-specific mentors through an intuitive search and filtering system. Users can find mentors based on expertise and communicate via text.

### Problem Space

Many individuals struggle to find guidance for personal and professional growth. Whether it’s career advice, skill development, or industry insights, traditional mentorship is often inaccessible, unstructured, or expensive. Pocket Guru aims to solve this by providing an easy-to-use platform where mentees can seamlessly connect with experienced mentors in their field.

### User Profile

Mentees (Users seeking guidance): Students, professionals, career changers, entrepreneurs.
Mentors (Experts offering guidance): Industry professionals, educators, consultants.

### Features

User Authentication & Profiles: Users and mentors can sign up, create a profile, and manage their expertise, availability, and ratings.
Filtering & Search: Users can search for mentors based on domain, skills, and experience level.
Communication System: Chat system supporting text.
Review & Rating System: Users can rate and review mentors to ensure quality interactions.

## Implementation

### Tech Stack

Frontend

React.js (UI Components, routing),
Axios (API handling),
CSS/Styled Components (Styling & responsiveness)

Backend

Node.js + Express.js (REST API & authentication),
JWT (Secure user authentication),
Knex.js

Database

MySQL (Data storage for user profiles, chats, reviews)

### Sitemap


Home Page : Introduction to the platform, call-to-action for login/signup.
Dashboard : Displays available mentors and search filters.
Mentor Profile Page : Detailed mentor bio, expertise, ratings, and booking options.
Chat Page :Secure chat interface for mentee-mentor communication.
Settings Page : Profile management, availability, and notifications.


### Data


Users (ID, name, email, role, password, bio)
Mentors (ID, user_id, domain, experience, ratings, availability)
Chats (ID, sender_id, receiver_id, message, timestamp)
Reviews (ID, user_id, mentor_id, rating, comment, timestamp)

### Endpoints

Method	Endpoint	Description	Parameters
POST	/register	Register user	name, email, password, role
POST	/login	Authenticate user	email, password
GET	/mentors?domain=AI	Fetch mentors based on expertise	domain
POST	/chat	Send message	sender_id, receiver_id, message
GET	/chat?user=123	Retrieve messages	user_id
POST	/review	Submit mentor review	user_id, mentor_id, rating, comment

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date. 

Phase 1: Planning & Setup 
Define requirements, finalize features, set up React.js and Node.js environment.
Design database schema and API structure.

Phase 2: Backend Development 
Implement user authentication and authorization with JWT.
Set up MySQL database and create REST API endpoints.
Build chat functionality 

Phase 3: Frontend Development 
Develop UI components for authentication, mentor search, and chat.
Integrate frontend with backend using Axios.

## Future Implementations

Payments Integration (Stripe/PayPal for paid mentorship).
Enable Audio/video calls functionality
Calendar Scheduling (Google Calendar API for booking mentorship sessions).
AI-powered Mentor Recommendations (Based on user history and preferences).



