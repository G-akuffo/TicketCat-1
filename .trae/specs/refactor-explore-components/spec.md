# Refactor Explore Screen Components Spec

## Why

The `app/(tabs)/index.tsx` file currently contains inline component definitions for `EventCard` and `ListItem`. To improve code readability, maintainability, and reusability, these components should be extracted into their own files within the `src/components` directory.

## What Changes

- **Refactoring**:
  - Extract `EventCard` component to `src/components/EventCard.tsx`.
  - Extract `ListItem` component to `src/components/ListItem.tsx`.
  - Update `app/(tabs)/index.tsx` to import these components instead of defining them inline.
- **Dependencies**: None.

## Impact

- **Affected Specs**: None.
- **Affected Code**: `app/(tabs)/index.tsx`, `src/components/EventCard.tsx` (new), `src/components/ListItem.tsx` (new).
- **Visuals**: No visual changes; strictly a code organization refactor.

## ADDED Requirements

### Requirement: Component Separation

The `EventCard` and `ListItem` components SHALL be defined in separate files.

- **WHEN** inspecting the project structure
- **THEN** `src/components/EventCard.tsx` and `src/components/ListItem.tsx` should exist.

### Requirement: Clean Index

The `app/(tabs)/index.tsx` file SHALL NOT contain component definitions for cards or list items.

- **WHEN** reading `index.tsx`
- **THEN** it should only contain the main screen logic and imports.
