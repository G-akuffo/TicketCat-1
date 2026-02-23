# Refactor Tickets Screen Spec

## Why
The `app/(tabs)/tickets.tsx` screen currently uses inline `StyleSheet` objects, which is inconsistent with the new NativeWind-based styling system. To maintain a unified codebase and leverage the new theme tokens, we need to refactor this screen.

## What Changes
- **Refactoring**:
  - Replace `StyleSheet.create` styles with NativeWind utility classes (e.g., `bg-background`, `text-txt-main`).
  - Use the semantic color tokens defined in `tailwind.config.js` (e.g., `text-gold`, `border-border-elevated`).
  - Preserve the existing layout and functionality (ticket list, expand/collapse logic, modal trigger).

## Impact
- **Affected Specs**: None.
- **Affected Code**: `app/(tabs)/tickets.tsx`.
- **Visuals**: The screen should look identical to the current dark mode design but use the standardized color palette.

## ADDED Requirements
### Requirement: NativeWind Styling
The Tickets screen SHALL use Tailwind classes for all styling.
- **WHEN** inspecting the code
- **THEN** no `StyleSheet` import or usage should be present.

## MODIFIED Requirements
### Requirement: Visual Consistency
The visual design SHALL match the updated theme.
- **WHEN** viewing the ticket list
- **THEN** colors should match `tailwind.config.js` definitions (e.g., Gold tier uses `text-gold`).
