import { defineConfig,devices  } from '@playwright/test';
import  dotenv from 'dotenv';
dotenv.config();
export default defineConfig({
  testDir: './tests',              
  retries: 1,                     
  timeout: 30000,                   
  outputDir: 'test-results',
  reporter: [['html', { open: 'never' }]],
  workers:4,    
  use: {
    baseURL: process.env.BASEURL, 
    headless: true,                              
    trace: 'on-first-retry'           
  },
  projects: [
    {
      name: 'Chromium-Login',
      
      use: { browserName: 'chromium' }
    },
   {
      name: 'Firefox-Login',
     
      use: { browserName: 'firefox' }
    },
   {
      name: 'Webkit-Login',
      
      use: { browserName: 'webkit' }
    },
    
   
   ]
});
