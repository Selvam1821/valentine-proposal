# 💕 Valentine's Day Proposal - Interactive React Component

A beautiful, interactive Valentine's Day proposal component built with React, Framer Motion, and Tailwind CSS. Features playful animations, confetti celebrations, and a charming "you can't say no" mechanic!

## ✨ Features

- 🎯 **Interactive Proposal Card** - Beautiful gradient design with animated elements
- 🎪 **Playful "No" Button** - Moves away and shrinks when user tries to decline
- 🎉 **Confetti Celebration** - Multi-stage confetti animation when "Yes" is clicked
- 💖 **Floating Hearts** - Animated hearts appear after multiple "No" attempts
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎨 **Beautiful Animations** - Smooth transitions and delightful micro-interactions
- 💝 **Success Screen** - Heartwarming celebration page with rotating heart emojis
- 🎭 **Dynamic Messages** - Changing phrases as user attempts to say "No"

## 🎬 How It Works

1. **Initial Proposal** - User sees a beautiful card asking "Will you be my Valentine?"
2. **Yes Button** - Fixed size, always easy to click
3. **No Button** - Moves away when hovered/touched and shrinks with each attempt
4. **Encouragement** - Floating hearts and messages appear after multiple "No" attempts
5. **Success** - Confetti explosion and celebration screen when "Yes" is clicked

## 🛠️ Technologies Used

- **React** - UI framework
- **Next.js** - React framework (with "use client" directive)
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **canvas-confetti** - Confetti effects

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone or download the project**
```bash
git clone <your-repository-url>
cd valentine-proposal
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Install required packages**
```bash
npm install framer-motion canvas-confetti
# or
yarn add framer-motion canvas-confetti
```

4. **Add your images**

Place two images in your `public` folder:
- `Logo-1.jpeg` - Success/celebration image
- `Logo-2.jpeg` - Proposal image

5. **Customize names** (optional)

Open the component file and modify these variables:
```javascript
const yourName = "Selvam";        // Your name
const recipientName = "Mine";     // Recipient's name
```

6. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

7. **Open in browser**

Navigate to `http://localhost:3000`

## 📁 Project Structure
```
valentine-proposal/
├── public/
│   ├── Logo-1.jpeg          # Success image
│   └── Logo-2.jpeg          # Proposal image
├── components/
│   └── ValentineProposal.jsx # Main component
├── package.json
└── README.md
```

## 🎨 Customization

### Changing Names
```javascript
const yourName = "Your Name";
const recipientName = "Their Name";
```

### Modifying "No" Button Phrases

Edit the `noPhrases` array:
```javascript
const noPhrases = [
    "No",
    "Are you sure?",
    "Really?",
    // Add your own phrases here
];
```

### Adjusting Colors

The component uses Tailwind CSS classes. Main color scheme:
- Primary: Red/Pink gradients (`from-red-500`, `via-pink-500`)
- Background: Pink/Red gradient (`from-pink-50`, `via-red-50`)
- Accents: White with pink borders

### Changing Animations

Framer Motion animations can be customized in the `animate` props:
```javascript
<motion.div
    animate={{ 
        scale: [1, 1.2, 1],      // Customize scale
        rotate: [0, 90, 0],      // Customize rotation
    }}
    transition={{ 
        duration: 20,             // Customize duration
        repeat: Infinity          // Customize repeat
    }}
>
```

## 🎯 Component Behavior

### Yes Button
- **Size**: Fixed (doesn't change)
- **Hover**: Scales to 1.05x
- **Tap**: Scales to 0.95x
- **Action**: Triggers confetti and shows success screen

### No Button
- **Position**: Moves randomly on hover/touch
- **Size**: Shrinks by 5% per attempt (minimum 70%)
- **Text**: Changes with each attempt
- **Mobile**: Smaller movement range for better UX

### Special Features

- **Attempt Counter**: Shows after 3 "No" attempts
- **Floating Hearts**: Appear after 3 "No" attempts
- **Encouragement Message**: Shows after 5 "No" attempts
- **Success Message**: Appears 1 second after "Yes" is clicked

## 📱 Responsive Design

- **Mobile** (< 640px): Single column layout, adjusted spacing
- **Tablet** (640px - 768px): Optimized button sizes
- **Desktop** (> 768px): Full layout with side-by-side buttons

## 🎭 Animations Breakdown

1. **Background**: Rotating gradient blobs
2. **Heart Icon**: Pulsing and rotating
3. **Profile Image**: Glowing pulse effect
4. **Floating Hearts**: Rising and fading
5. **Button Shimmer**: Sliding gradient effect
6. **Success Hearts**: Rotating celebration ring
7. **Confetti**: Multi-angle particle explosion

## 🐛 Troubleshooting

### Images not showing
- Ensure images are in the `public` folder
- Check file names match exactly: `Logo-1.jpeg` and `Logo-2.jpeg`
- Try using `.jpg` extension if `.jpeg` doesn't work

### Animations not working
- Verify `framer-motion` is installed: `npm list framer-motion`
- Check browser console for errors
- Ensure you're using a modern browser

### Confetti not appearing
- Verify `canvas-confetti` is installed: `npm list canvas-confetti`
- Check browser console for errors
- Some ad blockers may interfere with canvas elements

### Layout issues
- Ensure Tailwind CSS is properly configured
- Check that all Tailwind classes are recognized
- Clear browser cache and rebuild

## 💡 Tips for Best Results

1. **Use High-Quality Images**: 400x400px or larger for best results
2. **Test on Mobile**: The experience is designed for both desktop and mobile
3. **Personalize**: Change names, phrases, and quotes to make it special
4. **Deploy**: Use Vercel, Netlify, or GitHub Pages for easy sharing
5. **Share the Link**: Send the deployed link for a surprise proposal!

## 🚀 Deployment

### Vercel (Recommended for Next.js)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the 'out' or 'build' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push the build folder to gh-pages branch
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💖 Credits

Created with love for Valentine's Day proposals everywhere!

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the code comments in the component
3. Open an issue in the repository

---

Made with ❤️ using React, Framer Motion, and lots of confetti! 🎉

**Happy Valentine's Day! 💕**