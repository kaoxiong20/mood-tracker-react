import React, {useState} from "react";
import EntryCard from "./EntryCard";
import styled from "styled-components";
import Header from "./Header";
import ShareButton from "./ShareButton";
import EmojiPicker from 'emoji-picker-react';


function NewInput() {
    // This is to create the template of the objects that will
    //later be in the messages array that hold all of the messages
    
    const [messageInfo, setMessageInfo] = useState({
        date: '',
        time: '',
        mood: ''
    });

    // this is the array that will hold our messages
    const[messages, setMessages] = useState([]);

    const handleInputChange = (event) => {
        setMessageInfo({
            ...messageInfo,
            [event.target.name]: event.target.value
        });
        console.log(`This is the input change: ${event.target.name} : ${event.target.value}`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // finishing up packaging the new message for the array
        const newMessage = {
            date: messageInfo.date,
            time: messageInfo.time,
            mood: messageInfo.mood,
        };
        console.log(newMessage);

        // Actually sending the new message into the array
        setMessages([...messages, newMessage]);
        console.log(newMessage);

        // clears out the inputs
        setMessageInfo({
            date: '',
            time: '',
            mood: '',
        })
    };

    return(
        <>
            <Header/>
            <form onSubmit={handleSubmit}>
                <label>Date & Time: </label>

                <input
                    type="date"
                    name="day"
                    value={messageInfo.day}
                    onChange={handleInputChange}
                />

                <input
                    type="time"
                    name="date"
                    value={messageInfo.date}
                    onChange={handleInputChange}
                />

                <br/>

                <label>Mood: </label>
                    <input
                    type="text"
                    name="mood"
                    value={messageInfo.mood}
                    onChange={handleInputChange}
                />
                
                <br/>
                
                <button type="submit">Submit Your Current Mood</button>
                <ShareButton/>
                <EmojiPicker />
            </form>

        {messages.map((message, index) => (
            <div key={index}>
                <EntryCard
                name={message.mood}
                date={message.date}
                time={message.time}
                />
            </div>
        ))}
        </>

    );

}

export default NewInput;