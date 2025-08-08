# React Timer – HackerRank Frontend Online Assessment ⏱ (Replica)

## Problem Statement

You are tasked with implementing a **Decrement Timer** using **React**.  
The timer must:

1. **Start automatically** when the page loads.
2. **Decrement by 1** every second.
3. **Stop** when the **Stop** button is clicked.
4. **Stop at 0** when the countdown reaches zero.

The timer value will be displayed as a whole number (seconds remaining).

---

## Function Description

Implement the `Timer` component inside `Timer.jsx` and render it in `App.jsx`.

The component must:

- Display the current countdown value (in seconds) in a `<p>` tag.
- Include a **Stop** button that freezes the countdown at its current value.
- Start counting down **immediately** when mounted.
- Stop automatically when it reaches `0`.

---

## Input Format

There is no user input for this problem.  
The initial countdown value should be set in the component (e.g., `120` seconds).

---

## Output Format

The timer should render:

Timer<br>
<remaining_time><br>
[ Stop ]

Where:
- `<remaining_time>` is a number in seconds
- `[ Stop ]` is a clickable button that stops the countdown

---

## Sample Output

Initial render:
```
Timer
120
[ Stop ]
```

After 3 seconds:
```
Timer
117
[ Stop ]
```

If user clicks **Stop** at `110`:
```
Timer
110
[ Stop ]
```

When time runs out:
```
Timer
0
[ Stop ]
```

---

## Constraints

- Initial countdown value must be **greater than 0**.
- Countdown must **start immediately** without requiring user interaction.
- Stop button must **freeze** the countdown.
- Countdown must **never go below 0**.

---

## Testing

The following unit tests will be run against your implementation:

1. **Initial timer value cannot be 0**
2. **Timer starts immediately after the page loads**
3. **Timer stops at remaining time when clicking Stop button**
4. **Timer stops at 0 when it runs out**

Run tests with:

```bash
npm run test
```

Example Usage
```bash
npm install
npm run dev
```
Opens on http://localhost:5173 with the timer running.

## Evaluation Criteria

```
✅ Correctness — meets all functional requirements
✅ Code quality — clean, readable, maintainable
✅ React best practices — uses hooks effectively
✅ Test coverage — all provided tests pass
```

## License
MIT License © 2025
