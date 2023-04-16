import React, {useState} from "react";
import EntryCard from "./EntryCard";
import Header from "./Header";
import ShareButton from "./ShareButton";
import styled from "styled-components";
import EmojiPicker from "./EmojiPicker";


function NewInput() {
    // This is to create the template of the objects that will
    //later be in the messages array that hold all of the messages
    
    const [messageInfo, setMessageInfo] = useState({
        date: '',
        time: '',
        mood: '',
        img: '',
    });

    const current = new Date();
    const date = `${current.getDate()} / ${current.getMonth() +1} / ${current.getFullYear()}`;

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
            img: messageInfo.img,
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
            img: '',
        })
    };

    return(
        <>
            <Header/>
            <StyledForm onSubmit={handleSubmit}>
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
            </StyledForm>

            <div>
                <EmojiPicker/>
            </div>

        {messages.map((message, index) => (
            <div key={index}>
                <EntryCard
                    mood={message.mood}
                    date={message.date}
                    time={message.time}
                    img={message.img}
                />
            </div>
        ))}
        </>

    );

}

export default NewInput;

const StyledForm = styled.form`
    margin: auto;
    display: block;
    text-align: center;
`