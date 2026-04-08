# AI Chatbot Project

## What I Built
A complete AI Chatbot project with a Node.js Express backend and a Vanilla JavaScript frontend. The chatbot provides a simple, modern real-time chat UI. 

## API + Model
- **API**: OpenRouter
- **Model**: `openai/gpt-4o-mini`

## Why Backend Instead of Frontend?
The logic handles API requests from the Node.js backend rather than calling the API directly from the Frontend. This is to ensure security because if the frontend called the API directly, the API key would be exposed via Browser DevTools. This makes it vulnerable to theft. By making the request through our backend, the key remains securely stored in the `.env` file on the server.

## Fallback: Google Gemini
To switch to Google Gemini as a fallback:
1. Use the `GEMINI_API_KEY` stored in the `.env` file.
2. Update the base URL (`https://generativelanguage.googleapis.com/...`) in `server.js`.
3. Change the model parameter accordingly in the fetch body.

## Live Deployments
- **Frontend App**: [Insert Link Here]
- **Backend API**: [Insert Link Here]
