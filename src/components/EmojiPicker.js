import React, { useState } from 'react';
import './EmojiPicker';

// Step 1: Create a state for the selected emoji
const EmojiPicker = () => {
   const [selectedEmoji, setSelectedEmoji] = useState(null);

   // Step 2: Create a function to handle the click of an emoji
   const handleEmojiClick = emoji => {
      setSelectedEmoji(emoji);
   };

   // Step 3: Create an array of emojis with their names, unicode, and codes
   const emojis = [
      { name: "smiling face with heart-eyes", unicode: "😍", code: ":heart_eyes:" },
      { name: "winking face", unicode: "😉", code: ":wink:" },
      { name: "smiling face", unicode: "😊", code: ":smile:" },
      { name: "slightly smiling face", unicode: "🙂", code: ":slightly_smiling_face:" },
      { name: "kissing face", unicode: "😗", code: ":kissing_face:" },
      { name: "sad face", unicode: "😔", code: ":sad_face:" },
      { name: "melting face", unicode: "🫠", code: ":melting_face:" },
      { name: "exhausted face", unicode: "🥵", code: ":exhausted_face:" },
      { name: "silly face", unicode: "🤪", code: ":silly:" },
      { name: "relax face", unicode: "😌", code: ":relaxed:" }
   ];

   // Step 4: Render the emoji picker
   return (
      <div className="emoji-picker" id='emoji-picker'>
         {/* Step 4a: Display the selected emoji */}
            <div className="selected-emoji">
               {selectedEmoji}
            </div>
            {/* Step 4b: Render a list of emojis */}
            <div className="emoji-list"> 
               {Object.keys(emojis).map(emoji => (
               <span
                  key={emoji}
                  onClick={() =>
                  handleEmojiClick(emojis[emoji].unicode)}
                  className="emoji-item" >
                  {emojis[emoji].unicode}
               </span>
            ))}
         </div>
      </div>
   );
};

export default EmojiPicker;