

# Instagram Clone

Welcome to the Instagram Clone! This project is a simple recreation of the Instagram user interface using HTML and CSS. It is intended for educational purposes to practice front-end development skills.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#Technologies-Used)
- [Prerequisites](#Prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)


## Features

- Responsive design
- Home feed layout
- User profile page
- Explore page layout
- Basic styles mimicking Instagram
- Add new posts with images and captions
- Responsive design for mobile and desktop

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB (or any database you are using)

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version >= 14.x.x)
- [MongoDB](https://www.mongodb.com/) (set up locally or use MongoDB Atlas for cloud database)
- Cloudinary account for storing images

## Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/your-username/instagram-clone.git
   \`\`\`

2. Navigate to the project directory:

   \`\`\`bash
   cd instagram-clone
   \`\`\`

3. Install the dependencies:

   \`\`\`bash
   npm install
   \`\`\`

4. Create a `.env` file in the root directory and add the following environment variables:

   \`\`\`
   MONGO_URI=<Your MongoDB URI>
   CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
   CLOUDINARY_API_KEY=<Your Cloudinary API Key>
   CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>
   JWT_SECRET=<Your JWT Secret Key>
   \`\`\`

### Running the App

1. Start the backend server:

   \`\`\`bash
   npm run server
   \`\`\`

2. In another terminal window, start the React frontend:

   \`\`\`bash
   npm start
   \`\`\`
   

## Usage

Open the `index.html` file in your favorite web browser to view the Instagram clone.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgements

- [Instagram](https://www.instagram.com) - For the inspiration
- [Font Awesome](https://fontawesome.com) - For icons
- [Google Fonts](https://fonts.google.com) - For fonts

## Demo

Check out the live demo:

https://rudraarora.github.io/Instagram-Clone/
