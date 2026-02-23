# Wallet Screen Spec

## Why

The current Wallet screen displays a static credit card UI which is not relevant to the app's P2P and balance management features. We need to refactor this screen to focus on the user's balance, top-up/withdrawal options, and transaction history, all styled with NativeWind.

## What Changes

- **Refactoring**:
  - Remove `StyleSheet` and use NativeWind classes.
  - Remove the "Credit Card" component.
  - Redesign the Balance display to be more prominent.
  - Add "Top Up" and "Withdraw" action buttons.
  - Display a list of recent transactions.
- **Features**:
  - **Balance Display**: Show current balance (mocked for now).
  - **Actions**:
    - **Top Up**: Button to add funds.
    - **Withdraw**: Button to withdraw funds.
  - **History**: List of recent transactions (purchases, sales, top-ups).

## Impact

- **Affected Specs**: None.
- **Affected Code**: `app/(tabs)/wallet.tsx`.
- **Visuals**: Clean, dark-mode UI with a focus on financial data.

## ADDED Requirements

### Requirement: Balance Visibility

The Wallet screen SHALL display the user's current balance prominently.

- **WHEN** viewing the wallet
- **THEN** the balance should be the first visible element.

### Requirement: Transaction Actions

The Wallet screen SHALL provide options to manage funds.

- **WHEN** the user wants to add or remove money
- **THEN** "Top Up" and "Withdraw" buttons must be available.

## REMOVED Requirements

### Requirement: Credit Card UI

**Reason**: The app uses an internal wallet balance, not a direct card link visualization.
