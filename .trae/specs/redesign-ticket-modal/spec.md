# Redesign Ticket Modal Spec

## Why

The current ticket modal is functional but lacks the "nostalgic" feel of a physical ticket. Additionally, to prevent fraud, we need robust security measures to discourage screenshots and unauthorized sharing.

## What Changes

- **Design Overhaul**:
  - **Stub Look**: Create a container that mimics a physical ticket with "torn" or perforated edges (using zigzag/sawtooth SVG or CSS patterns).
  - **Dashed Lines**: Clear separation between the "main" ticket body and the "stub".
  - **Texture**: Add a subtle noise or paper texture overlay (optional/simulated).
- **Security Features**:
  - **Animated QR Code**: The QR code should have a subtle pulse or rotating border to indicate it's "live".
  - **Dynamic Background**: A moving gradient or holographic sheen behind the ticket details to make static screenshots obvious.
  - **Screenshot Prevention**: Use `expo-screen-capture` to prevent screenshots on Android and blur the screen on iOS task switcher.
  - **Rotating Token**: Display a constantly changing security code/timestamp.

## Impact

- **Affected Specs**: None.
- **Affected Code**: `src/components/ticket/TicketModal.tsx`.
- **Dependencies**: Need to install `expo-screen-capture`.

## ADDED Requirements

### Requirement: Nostalgic Design

The ticket view SHALL resemble a physical paper ticket.

- **WHEN** viewing a ticket
- **THEN** it should have perforated edges and a distinct "stub" section.

### Requirement: Screenshot Prevention

The system SHALL prevent or discourage taking screenshots of the ticket.

- **WHEN** a user attempts to screenshot
- **THEN** the screen should be black (Android) or the content should be dynamic (making the static image invalid).

### Requirement: Liveness Indicator

The ticket SHALL display visual proof of being "live".

- **WHEN** viewing the ticket
- **THEN** there must be an animated element (e.g., pulsing border, moving background).
