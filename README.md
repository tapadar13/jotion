## Jotion 📝:

A full-stack versatile web application that serves as an all-in-one workspace for note-taking and collaboration, inspired by Notion. Built using Next.js, Typescript, Convex and TailwindCSS.

![Jotion](/public/jotion.png)

## Tech Stack 📚:

- `Next.js` 14.1.0
- `Convex` 1.9.1
- `TypeScript` 5
- `Bloknote` 0.9.4
- `Edge Store` 0.1.6
- `Clerk` 4.30.5
- `Zustand` 4.5.2
- `TailwindCSS` 3.3.0 and its plugins
- `EsLint` 8
- [Vercel](https://vercel.com/)

## Features 🎉:

- **Real-time database** 🔗
- **Notion-style editor** 📝
- **Light and Dark mode** 🌓
- **Infinite nested documents** 🌲
- **Trash can & soft delete** 🗑️
- **Authentication** 🔐
- **File upload**
- **File deletion**
- **File replacement**
- **Icons for each document (changes in real-time)** 🌠
- **Expandable sidebar** ➡️🔀⬅️
- **Full mobile responsiveness** 📱
- **Publish your note to the web** 🌐
- **Fully collapsable sidebar** ↕️
- **Landing page** 🛬
- **Cover image of each document** 🖼️
- **Recover deleted files** 🔄📄

## Scripts 📜:

- `dev`: Start development server
- `build`: Build for production
- `start`: Start production server
- `lint`: Lint code

## Inspiration 🎨:

Inspired by [Notion](https://www.notion.so/)'s design.

## Contributing 🤝:

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.
To contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Push your changes to your fork.
- Submit a pull request.

## Setting up locally

### 1. Clone on your local machine

```bash
https://github.com/tapadar13/jotion.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables to your `.env.local` file

```
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

### 5. Run on your local server

```bash
npm run dev
npx convex dev
```

If you have read all of this, please star the repo, it will help me a lot ❤️
