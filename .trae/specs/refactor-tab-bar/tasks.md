# Tasks

- [x] Task 1: Setup Reanimated Tab Bar
  - [x] Rewrite `AnimatedTabBar` component to use `useSharedValue` and `useAnimatedStyle` for the pill position.
  - [x] Replace `Animated.View` with `Reanimated.View`.

- [x] Task 2: Refactor Styling
  - [x] Remove `StyleSheet.create` block.
  - [x] Convert container styles (height, border radius, etc.) to Tailwind classes.
  - [x] Convert icon container and button styles to Tailwind classes.
  - [x] Use semantic colors (e.g., `border-white/15` -> `border-border-subtle` or similar if appropriate, or keep specific glassmorphic values if semantic ones don't fit).

- [x] Task 3: Verify Functionality
  - [x] Ensure tab switching still works.
  - [x] Ensure the active pill slides correctly to the new index.
