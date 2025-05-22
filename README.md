# Cat Collection App

This is a 3-page React Native application built using Expo and Supabase as part of the Bellevue College course DEV 272 - Server Side Web Development.

## Overview

This app allows users to:
- View a list of cat items (name, description, origin, image)
- Add new cats with pictures
- Mark favorite cats
- Filter and search by title
- View individual cat details

## Pages

1. Home Screen – List of all cats with a search bar and filter
2. Cat Details – Details of selected cat (origin, description, image)
3. Add New Cat – Form to add a new cat (with validation and image upload)

## Technologies Used

| Technology      | Purpose                                |
|-----------------|----------------------------------------|
| Expo Router     | App navigation (tabs, stack, layout)   |
| React Native    | Building cross-platform UI             |
| Supabase        | Database and file/image storage        |
| React Query     | Client-side data caching and sync      |
| TypeScript      | Type safety and scalability            |
| Jest + Testing Library | Component and UI testing      |
| ESLint + Prettier | Code quality and formatting         |
| Husky           | Pre-commit hook to run lint and tests  |

## Features Implemented

- Global Context API to manage cat data
- Supabase integration for backend services
- Favorites toggle with persistent state
- Real-time image upload using Expo Image Picker
- Testing setup with Jest and RTL
- Code validation via ESLint and Prettier
- Git hooks with Husky for commit safety

## What I Learned

- Connecting a front-end app to a real backend (Supabase)
- Structuring a React Native app using modern Expo practices
- Implementing global state using React Context
- Writing and running unit tests in a mobile environment
- Using pre-commit hooks to maintain code quality

## Developer

Henadzi Kirykovich  
Student, Software Development – Bellevue College  
DEV 272 – Spring 2025
