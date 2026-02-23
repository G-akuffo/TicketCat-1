# Refactor Tab Bar Spec

## Why

The current tab bar implementation in `app/(tabs)/_layout.tsx` uses imperative `StyleSheet` styles and raw `Animated` API, which is inconsistent with the rest of the application's NativeWind-based styling. Refactoring it will improve maintainability and ensure visual consistency with the new theme tokens.

## What Changes

- **Refactoring**:
  - Replace `StyleSheet` with NativeWind utility classes (`className`).
  - Use `react-native-reanimated` instead of the legacy `Animated` API for smoother animations (the pill movement).
  - Use the semantic colors defined in `tailwind.config.js` (e.g., `bg-surface-raised`, `border-border-elevated`).
- **Visuals**:
  - Maintain the existing glassmorphic look (BlurView).
  - Ensure the "active pill" indicator and icon colors match the new theme.

## Impact

- **Affected Specs**: None.
- **Affected Code**: `app/(tabs)/_layout.tsx`.
- **Dependencies**: `react-native-reanimated` (already installed).

## ADDED Requirements

### Requirement: NativeWind Consistency

The Tab Bar SHALL use NativeWind classes for all styling.

- **WHEN** inspecting the code
- **THEN** no `StyleSheet` import or usage should be present.

### Requirement: Reanimated Usage

The Tab Bar SHALL use `react-native-reanimated` for the active indicator animation.

- **WHEN** switching tabs
- **THEN** the pill should slide smoothly using a shared value and animated style.
