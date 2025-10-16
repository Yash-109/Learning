# 🎮 Simon Game

A classic memory game built from scratch using vanilla JavaScript, HTML, and CSS. Test your memory by following increasingly complex color sequences!

## 🎯 About The Game

Simon is a memory skill game where players must repeat a sequence of colored lights and sounds. Each round adds one more element to the sequence, making it progressively more challenging.

## ✨ Features

- 🎵 **Interactive Gameplay** - Click sequence matching with visual feedback
- 🏆 **Score Tracking** - Current level and highest score display
- ✨ **Visual Effects** - Custom flash animations for game and user actions
- 🎨 **Responsive Design** - Works perfectly on desktop and mobile
- 🔄 **Auto Reset** - Automatic game restart after wrong sequence
- ⌨️ **Keyboard Controls** - Press any key to start the game
- 🎯 **Progressive Difficulty** - Sequences get longer each level

## 🎮 How to Play

1. **Start**: Press any key to begin
2. **Watch**: Observe the color sequence as it flashes
3. **Repeat**: Click the colors in the same order
4. **Progress**: Successfully complete sequences to advance levels
5. **Challenge**: Try to beat your highest score!

## 🛠️ Technical Implementation

### Game Logic
- **Sequence Generation**: Random color selection using `Math.random()`
- **Input Validation**: Real-time comparison of user input vs game sequence
- **State Management**: Proper handling of game states (started, playing, game over)
- **Score Persistence**: Highest score tracking across sessions

### Visual Effects
- **Game Flash**: White flash for computer-generated sequences
- **User Flash**: Green flash for user interactions
- **Error Feedback**: Red background flash for incorrect sequences
- **Smooth Transitions**: CSS animations for enhanced UX

### Code Structure
```
app.js
├── Game Variables (sequences, level, score)
├── Game Functions
│   ├── levelup() - Advance to next level
│   ├── gameflash() - Computer sequence display
│   ├── userflash() - User interaction feedback
│   ├── checkAns() - Validate user input
│   └── reset() - Reset game state
└── Event Listeners (keyboard, button clicks)
```

## 🎨 Design Features

- **Color Scheme**: 4 distinct colors (Red, Orange, Blue, Purple)
- **Responsive Layout**: Flexbox-based button grid
- **Visual Feedback**: Immediate color changes for all interactions
- **Clean UI**: Minimalist design focusing on gameplay

## 🚀 Live Demo

**[🎮 Play the Game](https://yash-109.github.io/Learning/Projects/simon_game/)**

## 📁 Project Structure

```
simon_game/
├── index.html          # Game structure and layout
├── style.css           # Styling and animations
├── app.js             # Game logic and interactions
└── README.md          # Project documentation
```

## 🔧 Technologies Used

- **HTML5** - Semantic structure and game layout
- **CSS3** - Styling, animations, and responsive design
- **Vanilla JavaScript** - Game logic, DOM manipulation, event handling

## 🛠️ Setup & Installation

```bash
# Clone the repository
git clone https://github.com/Yash-109/Learning.git

# Navigate to the Simon game directory
cd Learning/Projects/simon_game

# Open in your browser
open index.html
```

Or simply visit the [live demo](https://yash-109.github.io/Learning/Projects/simon_game/) to play instantly!

## 🎯 Key Learning Outcomes

- **DOM Manipulation** - Dynamic element selection and modification
- **Event Handling** - Keyboard and mouse event management
- **Array Operations** - Sequence storage and comparison logic
- **Timing Control** - setTimeout for delays and animations
- **State Management** - Game state tracking and transitions
- **CSS Animations** - Custom flash effects and transitions
- **Responsive Design** - Mobile-first approach

## 🔮 Future Enhancements

- [ ] Sound effects for each color
- [ ] Difficulty levels (speed variations)
- [ ] Local storage for persistent high scores
- [ ] Multiplayer mode
- [ ] Custom color themes
- [ ] Touch gesture support

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the classic Simon electronic game by Ralph Baer and Howard Morrison
- Built as part of my web development learning journey

---

⭐ **Star this repository if you enjoyed the game!**

*Made with ❤️ and lots of ☕*