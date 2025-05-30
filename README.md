Overview
Matrix Color Changer is an interactive web application built with React that demonstrates state management and animation concepts. This project features a 3x3 matrix of clickable boxes that change colors based on user interaction, with animation sequences and control functions.
Assignment Information
This project was created as part of the Edxso Full Stack Development Internship program.
Features

Interactive Matrix: 3x3 grid of clickable boxes that change color when clicked
Color Transformation: Boxes turn green when clicked and animate to orange in sequence
Sequence Tracking: Records the order in which boxes are clicked
Control Functions:

Reset button to return to the original state
Reverse button to undo the most recent selection


Intuitive Design: Split-screen layout with instructions and interactive matrix
Responsive Layout: Adapts to different screen sizes for optimal viewing

Technologies Used

React.js
CSS3
HTML5
JavaScript (ES6+)

Installation

Clone the repository:
bashCopygit clone https://github.com/yourusername/matrix-color-changer.git
cd matrix-color-changer

Install dependencies:
bashCopynpm install

Start the development server:
bashCopynpm start

Open your browser and navigate to:
Copyhttp://localhost:3000


How to Use

Click on any box in the matrix to mark it (turns green)
Continue clicking boxes in any sequence
When you click box #9, you'll see an animation showing all selected boxes turning orange in the order they were clicked
Use the Reset button to clear all selections and start over
Use the Reverse button to undo your most recent selection

Project Structure
Copymatrix-color-changer/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js       # Main application component
│   ├── App.css      # Styling for the application
│   └── index.js     # Entry point
└── README.md
