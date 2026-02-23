# Tasks

- [x] Task 1: Configure NativeWind & Tailwind
  - [x] Update `tailwind.config.js` content array to include `./src/**/*.{ts,tsx}`
  - [x] Create `app/global.css` with Tailwind directives
  - [x] Import `global.css` in `app/_layout.tsx`
  - [x] Verify `babel.config.js` setup

- [x] Task 2: Refactor Components to NativeWind
  - [x] Refactor `src/components/CategoryButtons.tsx` to use `className`
  - [x] Refactor `src/components/ticket/TicketModal.tsx` to use `className`

- [x] Task 3: Refactor Screens & Update Data
  - [x] Refactor `app/(tabs)/market.tsx`: Replace `StyleSheet` with Tailwind classes
  - [x] Update `MARKET_LISTINGS` in `market.tsx` to use USD prices (e.g., "$85.00" instead of "0.85 ETH")
  - [x] Refactor `app/(tabs)/index.tsx`: Replace `StyleSheet` with Tailwind classes

- [x] Task 4: Verify Styling
  - [x] Ensure dark mode and layout consistency across all refactored screens
