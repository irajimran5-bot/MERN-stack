A minimalist, high-performance digital workspace and productivity dashboard built using the **MERN Stack**. The application utilizes a decoupled microservice architecture, optimizing data flow and serverless request targeting for seamless user interaction.

🔗 **Live Frontend Application:** [Draft Pulse Live](https://thinkboard-topaz.vercel.app)


## 🛠️ Tech Stack & Architecture

- **Frontend:** React.js, Tailwind CSS, Axios (State management and dynamic UI elements)
- **Backend:** Node.js, Express.js (RESTful API architecture)
- **Database:** MongoDB (Dynamic NoSQL data storage)
- **Deployment:** Vercel (Deployed independently using modern serverless function routing)

---

## 🚀 Key Technical Highlights

- **Decoupled Deployment:** Frontend and Backend operate as isolated services, eliminating monolithic scaling constraints.
- **Serverless Rewrite Optimization:** Implemented advanced routing via `vercel.json` to handle wildcards (`/(.*)`) and safely target serverless index entry points.
- **Advanced Middleware Pipeline:** 
  - Strict global **CORS implementation** to regulate and bypass browser pre-flight cross-origin restrictions safely.
  - Custom **Rate Limiter layer** integrated seamlessly to mitigate API abuse and control traffic thresholds.
- **Production Error Handling:** Structured global route handling to completely bypass default hosting 404 sheets.

---

## 📁 Repository Structure

```text
├── backend/
│   ├── api/          # Vercel serverless entry point (index.js)
│   ├── config/       # Database connection setup
│   ├── middleware/   # Custom Rate Limiter and traffic handlers
│   ├── routes/       # Express route architectures
│   ├── server.js     # Main local Express server configurations
│   └── vercel.json   # Serverless routing rules
└── frontend/
    ├── src/          # React components and visual assets
    └── package.json  # Frontend dependency configurations
