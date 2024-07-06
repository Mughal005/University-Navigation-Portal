const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">A</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const respondToUserInput = (userInput) => {
    // Simple response logic, expand as needed
    if (userInput.includes("how are you")) {
        const responses = [
            "I'm good, thank you! How about you?",
            "I'm doing well, thanks for asking! What about you?"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    } else if (userInput.includes("what's your name")) {
        return "I'm just a simple chatbot!";
    } else if (userInput.includes("hello") || userInput.includes("hi")) {
        return "Hi there! How can I assist you today?";
    } else {
        return handleComplexResponses(userInput);
    }
}

function handleComplexResponses(userInput) {
    // Add more conditions and responses as needed.
    if (userInput.length >= 4 && userInput.length <= 100) {
        return "That's an interesting question! Let me think about it for a moment.";
    } else {
        return "I'm just a simple bot. I don't understand much. Maybe try asking something else.";
    }
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if (!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);

        // Simulate a delay before showing the response
        setTimeout(() => {
            const response = respondToUserInput(userMessage.toLowerCase());
            incomingChatLi.querySelector("p").textContent = response;
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1200); // Simulate a delay in response
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
