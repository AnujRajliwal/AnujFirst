// JavaScript for AI Teacher Assistant Website

document.addEventListener('DOMContentLoaded', () => {
    loadExamHistory();
    document.getElementById('chatbot-header').addEventListener('click', toggleChatbot);
});

// Sample Exam History Data
let examHistory = [
    { name: "Alice Johnson", roll: "101", class: "10", year: "2023", exam: "Math Test", score: "90%" },
    { name: "Bob Smith", roll: "102", class: "10", year: "2023", exam: "Science Quiz", score: "85%" },
    { name: "Charlie Brown", roll: "103", class: "9", year: "2022", exam: "History Exam", score: "88%" }
];

// Load Exam History Table
function loadExamHistory() {
    let historyTable = document.getElementById('history-table-body');
    historyTable.innerHTML = '';
    examHistory.forEach(record => {
        let row = `<tr>
            <td>${record.name}</td>
            <td>${record.roll}</td>
            <td>${record.class}</td>
            <td>${record.year}</td>
            <td>${record.exam}</td>
            <td>${record.score}</td>
        </tr>`;
        historyTable.innerHTML += row;
    });
}

// Search Exam History
function filterHistory() {
    let name = document.getElementById('search-name').value.toLowerCase();
    let roll = document.getElementById('search-roll').value;
    let studentClass = document.getElementById('search-class').value;
    let year = document.getElementById('search-year').value;
    
    let filteredData = examHistory.filter(record => {
        return (!name || record.name.toLowerCase().includes(name)) &&
               (!roll || record.roll === roll) &&
               (!studentClass || record.class === studentClass) &&
               (!year || record.year === year);
    });

    let historyTable = document.getElementById('history-table-body');
    historyTable.innerHTML = '';
    filteredData.forEach(record => {
        let row = `<tr>
            <td>${record.name}</td>
            <td>${record.roll}</td>
            <td>${record.class}</td>
            <td>${record.year}</td>
            <td>${record.exam}</td>
            <td>${record.score}</td>
        </tr>`;
        historyTable.innerHTML += row;
    });
}

// Toggle Chatbot Visibility
function toggleChatbot() {
    var chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'none' ? 'block' : 'none';
}

// AI Chatbot Functionality
function sendMessage() {
    var input = document.getElementById('chatbot-text').value;
    var messages = document.getElementById('chatbot-messages');
    if (input.trim() !== '') {
        messages.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
        setTimeout(() => {
            messages.innerHTML += `<p><strong>AI:</strong> Here is your solution.</p>`;
        }, 1000);
        document.getElementById('chatbot-text').value = '';
    }
}
