# ⚡ Elite FC Official Landing Page

Welcome to the official landing page repository for **Elite FC**! This project is a stunning, state-of-the-art web application built to showcase the world's most elite football club. Featuring a bold "Cyber-Football" aesthetic, interactive 3D elements, and smooth modern animations, this platform redefines how fans engage with the club online.

## ✨ Key Features

- **Cyber-Football Aesthetics**: A stunning, high-contrast visual design system featuring a deep navy/charcoal background (`#0A0D14`) cut with electric Volt Yellow (`#CCFF00`) and Neon Pink (`#FF0055`) accents.
- **Interactive 3D Tactics Board**: An immersive Matchday Tactics section built with React Three Fiber. Users can interact with 3D low-poly stylized player models that bob on the pitch, cast realistic shadows, and dynamically swap kit colors on hover. Drag to rotate and scroll to zoom!
- **Dynamic Squad Roster**: Staggered, smooth entrance animations for player cards powered by Framer Motion, complete with 3D-like hover tilt effects.
- **AI-Generated Regional Fixtures**: An elegant section highlighting upcoming regional clashes, smoothly sliding into view as the user scrolls.
- **Performance Optimized**: Heavy 3D assets are dynamically loaded using Next.js `dynamic` imports to ensure instantaneous initial page loads. The 3D engine is configured with adaptive performance constraints and pixel-ratio limits (`dpr={[1, 1.5]}`) to save battery on mobile devices.
- **Fully Responsive**: Meticulously crafted CSS media queries ensure the site looks pixel-perfect and performs flawlessly on desktops, tablets, and mobile phones.

## 🛠️ Technology Stack

This project was built from scratch with a bleeding-edge, highly optimized stack:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **3D Rendering**: [Three.js](https://threejs.org/) & [React Three Fiber](https://r3f.docs.pmnd.rs/) (`@react-three/drei`)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) (with custom SVG native injections to bypass library limits)
- **Styling**: Vanilla CSS (Tokenized design system via CSS variables, entirely independent of Tailwind)

## 🚀 Getting Started

Follow these instructions to get the Elite FC landing page up and running on your local machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.17 or later) installed on your machine. 

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repository-url>
   cd Elite-FC-Landingpage
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **View the Application**:
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
Elite-FC-Landingpage/
├── public/                 # Static assets (images, icons, etc.)
│   ├── stadium_hero_bg.jpg # Hero section background
│   ├── player_action.jpg   # Player action background
│   └── ...                 # Player portrait images
├── src/
│   ├── app/
│   │   ├── globals.css     # Global CSS design tokens and core aesthetics
│   │   ├── layout.tsx      # Root Next.js HTML layout configuration
│   │   ├── page.css        # Specific component and page-level styling
│   │   └── page.tsx        # Main landing page component with logic
│   └── components/
│       └── FootballField3D.tsx # 3D Interactive React Three Fiber Component
├── package.json            # Project metadata and dependencies
└── README.md               # You are here!
```

## 📬 Contact & Socials

- **Official Inquiries**: [rowdroex1sts@gmail.com](mailto:rowdroex1sts@gmail.com)
- **Instagram**: Follow us [@_elite_fc26](https://www.instagram.com/_elite_fc26?igsh=eTFzNGl4ejV4Y2hm)
