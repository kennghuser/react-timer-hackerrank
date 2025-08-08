import { act, render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from './App';

describe('Timer Component', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});
	
  it('Initial timer value cannot be 0', () => {
    render(<App />);
    const timerDisplay = screen.getByText((content) => /^\d+$/.test(content));
    expect(timerDisplay).not.toHaveTextContent(/^0$/);
  });

  it('Timer starts immediately after the page loads', () => {
		render(<App />);
		const timerDisplay = screen.getByText((content) => /^\d+$/.test(content));
		const initialValue = Number(timerDisplay.textContent);
		act(() => {
			vi.advanceTimersByTime(1000);
		});
		const updatedTimerDisplay = screen.getByText((content) => /^\d+$/.test(content));
		const afterValue = Number(updatedTimerDisplay.textContent);
		expect(afterValue).toBeLessThan(initialValue);
		vi.useRealTimers();
	});

  it('Timer stops at remaining time when clicking stop button', () => {
    render(<App />);
		act(() => {
			vi.advanceTimersByTime(2000);
		});
    const timerDisplay = screen.getByText((content) => /^\d+$/.test(content));
    const stoppedValue = timerDisplay.textContent;
    fireEvent.click(screen.getByRole('button', { name: /stop/i }));
		act(() => {
			vi.advanceTimersByTime(3000);
		});
    expect(timerDisplay.textContent).toBe(stoppedValue);
  });

  it('Timer stops at 0 when it runs out', () => {
    render(<App />);
		act(() => {
			vi.advanceTimersByTime(120000);
		});
    expect(screen.getByText(/^0$/)).toBeInTheDocument();
  });
});
