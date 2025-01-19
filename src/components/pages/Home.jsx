import React, { useState } from 'react';
import Button from '../Button';
import Header from '../Header';

const Home = () => {

    const users = [
        { id: 1, name: 'J Cova' },
        { id: 2, name: 'J Santos' },
        { id: 3, name: 'M Chan' },
    ];

    const [activeUser, setActiveUser] = useState(null);
    const [messages, setMessages] = useState({
        1: [],
        2: [],
        3: [],
    });
    const [newMessage, setNewMessage] = useState('');

    const handleUserClick = (userId) => {
        setActiveUser(userId);
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages((prevMessages) => {
                const updatedMessages = { ...prevMessages };
                updatedMessages[activeUser].push({ text: newMessage, sender: 'me' });
                return updatedMessages;
            });
            setNewMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && newMessage.trim()) {
            e.preventDefault();
            handleSendMessage(); 
        }
    };

    return (
        <div className="home-container">
            <Header loggedIn={true} /> 

            <div className="p-4 sm:p-8">
                <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="user-list w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-2xl font-semibold mb-4">Users</h2>
                        <div className="space-y-4">
                            {users.map((user) => (
                                <button
                                    key={user.id}
                                    onClick={() => handleUserClick(user.id)}
                                    className={`w-full text-left p-3 rounded-lg transition-all hover:bg-gray-100 focus:outline-none 
                                                ${activeUser === user.id ? 'bg-gray-200' : 'bg-white'}`}
                                >
                                    {user.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="chatbox w-full md:w-2/3">
                        {activeUser ? (
                            <div className="chatbox-container flex flex-col space-y-4">
                                <div className="chatbox-header bg-purple-600 text-white p-4 rounded-t-lg">
                                    <h3 className="text-xl font-semibold">{users.find((user) => user.id === activeUser)?.name}</h3>
                                </div>
                                <div className="chatbox-body bg-gray-50 p-4 rounded-b-lg h-64 overflow-y-auto">
                                    <div className="messages space-y-4">
                                        {messages[activeUser]?.map((message, index) => (
                                            <div
                                                key={index}
                                                className={`message p-2 rounded-lg max-w-xs ${message.sender === 'me' ? 'bg-purple-600 text-white self-end' : 'bg-gray-300 text-gray-900'}`}
                                            >
                                                {message.text}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="message-input p-4 bg-white border-t">
                                    <textarea
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        onKeyDown={handleKeyPress}
                                        className="w-full p-3 rounded-lg border border-gray-300"
                                        placeholder="Type a message..."
                                        rows="2"
                                    />
                                    <Button
                                        label="Send"
                                        onClick={handleSendMessage}  
                                        className="mt-2 w-full"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="no-chat-selected text-center">
                                <h3 className="text-xl text-gray-500">Select a user to start chatting</h3>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <Button label="Logout" to="/" className="w-full sm:w-auto" />
                </div>
            </div>
        </div>
    );
};

export default Home;
