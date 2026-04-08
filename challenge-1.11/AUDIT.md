# Pre-Refactor Audit List

## Problems Identified Before Refactoring

1. **Monolithic Design:** Everything is crammed into `app.js`. Routing, database interactions, business logic, formatting, and logging are all mingled in a single file (originally 847 lines).
2. **God Function:** `handleAll(d, x)` acts as a single 60-line function doing five different things: validation, DB access, formatting, logging, and sending responses. This violates the Single Responsibility Principle.
3. **Meaningless Variable Names:** Variables like `d`, `x`, `arr`, `res2`, and `tempX` provide absolutely no context about the data they hold.
4. **Hardcoded URLs:** `https://api.example.com/v1` is hardcoded 11 times throughout the code, creating a maintenance nightmare and risking hardcoded secrets. `mongodb://localhost:27017/confessions` is also hardcoded.
5. **No Modular Structure:** Missing the standard MVC (Model, View, Controller) or route-controller-service structure making the codebase impossible to navigate.
6. **Lack of Documentation:** There are no comments explaining *why* the code does certain logic, making it extremely difficult for a new developer to understand the intent (e.g., exponential backoff for rate limiting).
