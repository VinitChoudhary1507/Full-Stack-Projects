import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatContainer = () => {
  return (
    <div className="d-flex vh-100 bg-light">
      {/* Sidebar */}
      <div className="bg-white border-end p-3" style={{ width: '280px' }}>
        <h5 className="mb-4">Chats</h5>
        <div className="list-group overflow-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
          {['Alice', 'Bob', 'Charlie', 'David', 'Eva'].map((user, index) => (
            <button
              key={index}
              type="button"
              className="list-group-item list-group-item-action"
            >
              {user}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Chat Header */}
        <div className="border-bottom bg-white p-3 shadow-sm">
          <h6 className="mb-0">Chat with [User]</h6>
        </div>

        {/* Messages */}
        <div className="flex-grow-1 p-3 overflow-auto" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="d-flex flex-column gap-3">
            <div className="bg-white rounded shadow-sm p-2" style={{ maxWidth: '60%', alignSelf: 'flex-start' }}>
              Hello! How can I help you today?
            </div>
            <div className="bg-primary text-white rounded shadow-sm p-2" style={{ maxWidth: '60%', alignSelf: 'flex-end' }}>
              I have a question about the project.
            </div>
            <div className="bg-white rounded shadow-sm p-2" style={{ maxWidth: '60%', alignSelf: 'flex-start' }}>
              Sure, ask away!
            </div>
          
          </div>
        </div>

        {/* Input */}
        <div className="border-top bg-white p-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message..."
            />
            <button className="btn btn-primary" type="button">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
