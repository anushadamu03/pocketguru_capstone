# Project Title
POCKET GURU : One stop app for finding the mentor. 

## Overview

What is your app? Give a brief description in a couple of sentences.
Pocket Guru is a mentorship platform that connects users with domain-specific mentors through an intuitive search and filtering system. Users can find mentors based on expertise and communicate via text.

### Problem Space

Why is your app needed? Give any background information around any pain points or other reasons.
Many individuals struggle to find the right guidance for their personal and professional growth. Whether it’s career advice, skill development, or industry insights, traditional mentorship is often inaccessible, unstructured, or expensive. Pocket Guru aims to solve this by providing an easy-to-use platform where mentees can seamlessly connect with experienced mentors in their field.

### User Profile

Who will use your app? How will they use it? Add any special considerations that your app must take into account.
Mentees (Users seeking guidance): Students, professionals, career changers, entrepreneurs.
Mentors (Experts offering guidance): Industry professionals, educators, consultants.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

User Authentication & Profiles: Users and mentors can sign up, create a profile, and manage their expertise, availability, and ratings.
Filtering & Search: Users can search for mentors based on domain, skills, and experience level.
Communication System: Chat system supporting text (and optional real-time voice/video calls).
Review & Rating System: Users can rate and review mentors to ensure quality interactions.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.
Frontend

React.js (UI Components, routing)
Axios (API handling)
CSS/Styled Components (Styling & responsiveness)
Backend

Node.js + Express.js (REST API & authentication)
JWT (Secure user authentication)
Knex.js + MySQL (Database ORM & management)
Database

MySQL (Data storage for user profiles, chats, reviews)

### APIs

List any external sources of data that will be used in your app.
Not Applicable

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

Home Page : Introduction to the platform, call-to-action for login/signup.
Dashboard : Displays available mentors and search filters.
Mentor Profile Page : Detailed mentor bio, expertise, ratings, and booking options.
Chat Page :Secure chat interface for mentee-mentor communication.
Settings Page : Profile management, availability, and notifications.

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

### Data

Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out. 

Users (ID, name, email, role, password, expertise, bio, ratings)
Mentors (ID, user_id, domain, experience, ratings, availability)
Chats (ID, sender_id, receiver_id, message, timestamp)
Reviews (ID, user_id, mentor_id, rating, comment, timestamp)

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

Method	Endpoint	Description	Parameters
POST	/register	Register user	name, email, password, role
POST	/login	Authenticate user	email, password
GET	/mentors?domain=AI	Fetch mentors based on expertise	domain
POST	/chat	Send message	sender_id, receiver_id, message
GET	/chat?user=123	Retrieve messages	user_id
POST	/review	Submit mentor review	user_id, mentor_id, rating, comment

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date. 

Phase 1: Planning & Setup (Week 1)
Define requirements, finalize features, set up React.js and Node.js environment.
Design database schema and API structure.

Phase 2: Backend Development (Week 2)
Implement user authentication and authorization with JWT.
Set up MySQL database and create REST API endpoints.
Build chat functionality 

Phase 3: Frontend Development (Week 3)
Develop UI components for authentication, mentor search, and chat.
Integrate frontend with backend using Axios.

---

## Future Implementations
Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.

Payments Integration (Stripe/PayPal for paid mentorship).
Calendar Scheduling (Google Calendar API for booking mentorship sessions).
AI-powered Mentor Recommendations (Based on user history and preferences).
Mobile App Development (React Native version for mobile users).

