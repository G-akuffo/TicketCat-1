# Refactor UI to NativeWind & Fiat Currency Spec

## Why

The current codebase uses inline `StyleSheet` objects and mock ETH pricing. To improve maintainability and align with the product vision, we need to standardize styling using **NativeWind (Tailwind CSS)** and switch pricing to fiat currency (USD).

## What Changes

- **Configuration Fixes**:
  - Update `tailwind.config.js` to include `src/` directory in `content` array.
  - Create `app/global.css` with Tailwind directives.
  - Import `global.css` in `app/_layout.tsx`.
  - Verify `babel.config.js` includes `nativewind/babel`.
- **Component Refactoring**:
  - Convert `CategoryButtons.tsx` to use Tailwind classes (`className`).
  - Convert `TicketModal.tsx` to use Tailwind classes.
  - Remove `StyleSheet.create` blocks where replaced.
- **Screen Refactoring**:
  - Convert `app/(tabs)/market.tsx` to use Tailwind classes.
  - Convert `app/(tabs)/index.tsx` (Explore) to use Tailwind classes.
  - Update `MARKET_LISTINGS` mock data to use fiat currency (e.g., "$150.00") instead of ETH.
- **Data Updates**:
  - Replace "ETH" strings with "$" formatting in `market.tsx`.

## Impact

- **Affected Specs**: None (new spec).
- **Affected Code**: `tailwind.config.js`, `app/global.css`, `app/_layout.tsx`, `app/(tabs)/market.tsx`, `app/(tabs)/index.tsx`, `src/components/**/*.tsx`.
- **Visuals**: The UI should look identical to the current design but implemented with utility classes.

## ADDED Requirements

### Requirement: Tailwind Configuration

The system SHALL use NativeWind for styling.

- **WHEN** a developer adds a Tailwind class (e.g., `bg-red-500`)
- **THEN** the style should be applied.

### Requirement: Fiat Pricing

The Market screen SHALL display ticket prices in USD.

- **WHEN** viewing the market list
- **THEN** prices should be formatted as `$XX.XX` (e.g., `$120.00`).

## REMOVED Requirements

### Requirement: ETH Pricing

**Reason**: Product decision to use fiat currency.
**Migration**: Update mock data strings.
