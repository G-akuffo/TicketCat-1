# Tasks

- [x] Task 1: Create Event Details Route
  - [x] Create `app/event/[id].tsx` with a basic layout
  - [x] Configure `app/_layout.tsx` to treat `event/[id]` as a modal

- [x] Task 2: Implement Event Details UI
  - [x] Build the UI with NativeWind: Hero image, Title, Date/Time, Location, Description
  - [x] Add a "Favorite" button in the header (using `expo-router` Stack.Screen options or a custom header)
  - [x] Add a fixed "Buy Tickets" button at the bottom

- [x] Task 3: Connect Navigation
  - [x] Update `EventCard` in `app/(tabs)/index.tsx` to accept an `id` and navigate on press
  - [x] Update `ListItem` in `app/(tabs)/index.tsx` to accept an `id` and navigate on press
  - [x] Ensure mock data includes `id`s
