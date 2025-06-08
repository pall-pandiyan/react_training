# Project Process

## Dependencies

### Installing Chakra UI

```bash
npm i @chakra-ui/react @emotion/react
```

### Adding Chakra UI snippets

```bash
npx @chakra-ui/cli snippet add
```

### Update tsconfig

If you're using TypeScript, in the tsconfig.app.json file, make sure the compilerOptions includes the following:

```json
// tsconfig.app.json
// 
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Setup provider

Wrap your application with the Provider component at the root of your application.

```tsx
// src/main.tsx
// 
import { Provider } from "@/components/ui/provider"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
```

### Setup Vite Config Paths

In your project, set up a vite config path to automatically sync tsconfig with vite using the command:

```bash
npm i -D vite-tsconfig-paths
```

```ts
// vite.config.ts
// 
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
})
```