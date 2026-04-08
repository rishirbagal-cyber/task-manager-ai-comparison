# Changes Made During Refactoring

## 🔠 Variable Renaming

| Old Name | New Name | Why |
|---|---|---|
| `d` | `confessionData` | 'd' gave no information about what the variable held. Now describes the confession input. |
| `x` | `userId` | Context dictates it represents the user making the confession. |
| `arr` | `confessionCharacters` | Describes what the array holds after splitting the input string. |
| `res2` | `trimmedCharacters` | Represents the array of characters after trimming whitespace. |
| `tempX` | `formattedConfession` | Describes the final joined string that is clean and ready. |

## 🔀 Function Splits

### `handleAll()` split into:
- `validateConfessionInput(confessionData, userId)` - validates required fields before any business logic begins.
- `processConfession(confessionData)` - dedicated to formatting and filtering the confession content.
- `saveConfession(formattedConfession, userId)` - handles the database write operation independently.
- `formatConfessionResponse()` - cleanly formats the final response payload.

**Why:** The original `handleAll()` function had overlapping responsibilities (validation + db write + formatting + logging + response). Splitting them ensures each function does only one thing and is independently testable.

## 🏗️ Architectural Changes

1. **MVC Implementation:** Refactored the monolithic `app.js` into distinct folders:
   - `routes/` (for handling HTTP routing)
   - `controllers/` (for managing request/response extraction)
   - `services/` (for business logic and DB simulation)
2. **Environment Variables:** Created a `.env` file to store all previously hardcoded Configuration like `DB_URL` and the external `API_BASE_URL`.
3. **Inline Documentation:** Added meaningful comments to explain *why* certain decisions were made, not just what the code does (e.g., rate-limiting logic).
