# React Native Redux.js Toolkit Boilerplate
Powerful React Native boilerplate ( Redux JS toolkit with Redux Saga )

# Features
- React 0.71.*
- Redux.js toolkit
- Redux Persist enabled (async storage)
- React Navigation 6.0
- Side-effect w/ Redux saga
- Action Creators
- API services
- Themes
- Font (expo-font)
- Component reusable
    - Header
    - Loader
    - Text
    - TextField
    - Button
    - Card
    - Icon
    - ListItem
- Multi-Languages
- Debugger include: Reactotron config
- Typescript types
- Code push integration
- React Native Config for multi-purpose deployment dev, staging, prod etc.

# Future Things
### 3rd Party services
- Code push sync progress with OTA updates
- Auth Mechanism
    - Google
    - Apple
    - Linkedin
- Push notif one-signal
- AppCenter Integration
- Realm DB Integration
- Detox Integration
- Firebase crashlytics
- Firebase analytics

### In-house
- Error Boundry component
- HOC component
- Alert Component
- Modal Component
- GraphQL client
- CI/CD eslint
- and more...

## Getting Started
Please create file `.env`, `.env.production` and `.env.staging` with some keys below
```
API_URL=https://jsonplaceholder/api/
CODE_PUSH_KEY=(code push key)
ENV="development"
GOOGLE_MAPS_API_KEY=(gmaps key)
ONE_SIGNAL_KEY=(one signal key)
SENTRY_DSN=(sentry dsn)
SENTRY_ENVIRONMENT=production
```

## Feasibility Test
- Android 13 (Real Device)
- Simulator Android 12 & 11
- Simulator iOS 16.2

## Misc
If you want to manually add custom fonts both iOS Android please follow this guide: https://mehrankhandev.medium.com/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4

# References
- Ignite Andross: https://github.com/infinitered/ignite-andross
- Ignite latest : https://github.com/infinitered/ignite
- Redux JS Toolkit : https://redux-toolkit.js.org/
- React Navigation 6.0 : https://reactnavigation.org/blog/2021/08/14/react-navigation-6.0/