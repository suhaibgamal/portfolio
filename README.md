# Suhaib Gamal Portfolio

A responsive and modern portfolio website built with Next.js, showcasing the work, skills, and services of Suhaib Gamal, a Full Stack Developer.

## Demo

[https://suhaeb.com](https://suhaeb.com)

## Features

- **Hero Section:** Greets visitors with a bold introduction and call-to-action.
- **Services:** Highlights offerings in app and web development.
- **Projects:** Displays featured projects like the Password Manager and Expense Tracker with interactive previews.
- **Technical Expertise:** Showcases skills with industry-standard icons.
- **Contact:** Provides easy access to contact information via phone and email.
- **Responsive Design:** Crafted with Tailwind CSS for a seamless experience on all devices.

## Technologies Used

- **Next.js** (App Router with `page.jsx` and `layout.jsx`)
- **React** and **React Icons**
- **Tailwind CSS** for styling
- **Google Fonts (Inter)** for optimized font loading

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/suhaibgamal/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### Building for Production

To build and start the project in production mode:

```bash
npm run build
npm run start
```

Or using yarn:

```bash
yarn build
yarn start
```

## Folder Structure

```
portfolio/
├── app/
│   ├── layout.jsx    // Global layout wrapper
│   └── page.jsx      // Main page containing all sections
├── public/
│   ├── password_manager.jpg   // Project image asset
│   ├── expense_tracker.jpg    // Project image asset
│   └── ...                    // Other public assets
├── package.json
└── README.md
```

## Customization

The project uses reusable constants to manage repeated data for social links, services, projects, skills, and contacts. You can easily update images, text, or add new sections to tailor the portfolio to your needs.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.
