import React from "react";
import Emoji from "./Emoji";
import EmojiHeader from "./EmojiHeader";
import EmojiExplain from "./EmojiExplain";
const Card = (props) => {
    return ( 
        <div className="card">
            <Emoji emoji = {props.emoji}/>
            <EmojiHeader emojiheader = {props.emojiheader}/>
            <EmojiExplain emojiexp = {props.emojiexp}/>
        </div>
     );
}
 
export default Card;