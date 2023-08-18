# Component Re-rendering optimization

## What's inside?

This Turborepo includes the following apps:

- Prop Drilling App
- Contexts App
- State Manager App
- Main App

The purpose is to show the differences between different state management, which has effect on the re-rendering of the components. It briefly describes their flaws/tradeoffs, while also sharing some suggestions for improvements. It is advised to use the app together with Profiler extension that is available when installing React devtools.

## Build

To start the app locally first run

```
pnpm i
```

to install all of the dependencies

```
pnpm dev
```

To open the apps on http://localhost:3000, http://localhost:3001, http://localhost:3002, http://localhost:3003. The one on port 3003 is the main app, which can be of best use for the comparison.

