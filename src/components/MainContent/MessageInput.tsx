import "./MessageInput.css"

export default function MessageInput(){
    
    return(
        <div className="chat-view-input-area">
            <button className="icon-btn">📎</button>
            <div className="input-container">
                <input 
                    type="text" 
                    className="message-input" 
                    placeholder="Message" 
                />
                    <button className="icon-btn emoji-btn">😊</button>
            </div>
            <button className="icon-btn mic-btn">🎤</button>
        </div>
    );
}