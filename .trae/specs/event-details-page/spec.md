# Event Details Page Spec

## Why

Users need a way to view detailed information about an event and purchase tickets. Currently, tapping an event card on the Explore screen does nothing.

## What Changes

- **New Screen**: Create `app/event/[id].tsx` to display event details.
- **Navigation**:
  - Update `app/_layout.tsx` to include the new route as a modal presentation.
  - Update `EventCard` and `ListItem` in `app/(tabs)/index.tsx` to navigate to the event page on press.
- **UI/UX**:
  - **Header**: Transparent header with a back button and a "Favorite" (bookmark) toggle.
  - **Hero Image**: Large banner image at the top.
  - **Details**: Event title, date, time, location, and description.
  - **Action**: "Buy Tickets" button fixed at the bottom.

## Impact

- **Affected Specs**: None.
- **Affected Code**: `app/_layout.tsx`, `app/(tabs)/index.tsx`, `app/event/[id].tsx` (new).
- **Visuals**: The new screen will follow the app's dark mode theme using NativeWind.

## ADDED Requirements

### Requirement: Event Details View

The system SHALL display a detailed view for a selected event.

- **WHEN** a user taps an event card
- **THEN** a modal screen should open with event details.

### Requirement: Buy Ticket Action

The Event Details screen SHALL allow users to initiate a ticket purchase.

- **WHEN** the user taps "Buy Tickets"
- **THEN** (for now) a placeholder action or log should occur (purchase flow to be implemented later).

### Requirement: Favorite Toggle

The Event Details screen SHALL allow users to favorite an event.

- **WHEN** the user taps the bookmark icon
- **THEN** the icon state should toggle (filled/outlined).
