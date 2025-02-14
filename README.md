# JOBNEST

Welcome to JOBNEST, your go-to platform for finding on-site, remote, hybrid, and part-time job opportunities.

## Live Site
Visit the live site [here](https://jobnestbd.web.app/).

## Features
- **On-Site Job**: Explore job opportunities that require physical presence at the workplace.
- **Remote Job**: Discover jobs that allow you to work from anywhere in the world.
- **Hybrid**: Find positions that offer a blend of in-person and remote work options.
- **Part-Time**: Browse through part-time job listings for flexible work arrangements.
- **Responsive Design**: Accessible on all devices - mobile, tablet, and desktop.

## Introduction
JOBNEST is a user-friendly job-seeking website where users can post listings, search for positions, and apply effortlessly.

## Main Requirements
Key rules and requirements:
- **Visually Appealing Design**: Focused on color contrast, proper alignment, and customizing component styling for a unique look.
- **Responsive Design**: Made the website accessible on all devices - mobile, tablet, and desktop.
- **Persistent Navbar and Footer**: Keeping the navbar and footer visible on all pages except the 404 page, providing meaningful navigation and contact information.
- **Login & Registration Systems**: Implemented error handling and user-friendly forms for seamless user authentication.
- **JWT Implementation**: Secured certain routes with JSON Web Token (JWT) authentication to ensure user access control.
- **Job Listings**: Displayed job listings categorized by type, with detailed information and interactive features such as view details and apply buttons.
- **CRUD Operations**: Enable users to add, update, and delete job listings, with appropriate notifications for each action.
- **Private Routes**: Ensure certain routes are accessible only to logged-in users, with proper redirection and access controls.
- **404 Page**: Custom 404 page with an interesting visual element and a back to home button for a seamless user experience.

## Additional Information
Explored additional features such as blogs, applied jobs, and user profiles to enhance the user experience further.

## Credits
Developed by Rahomotul Islam.

## License
This project is licensed under the [MIT License](LICENSE).

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn (v1.x or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShopnilIsCoding/Jobnest-Client.git
   cd jobnest
2. Install dependencies:
   ```bash
   npm install
3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your Firebase project.
   - Copy your Firebase configuration details and create a `.env` file in the root directory with the following content:
     ```plaintext
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```
4. Run the development server:
   ```bash
   npm run dev
5. Build for production:
   ```bash
   npm run build
