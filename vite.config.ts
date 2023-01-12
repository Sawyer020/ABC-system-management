import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleImport,{AntdResolve} from 'vite-plugin-style-import'

/*we already have node in node, but need to be declared in ts.
install by command： npm i -D @types/node
*/
import path from "path" //use ""
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleImport({
      resolves: [
        AntdResolve()
      ],
    }),
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }
  }
})
