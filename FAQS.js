const faqs = [
    {
        question: "How do I post an ad on Vendora?",
        answer: "Click on the 'Post Ad' link in the navigation menu. Fill in details and click submit."
    },
    {
        question: "Do I need to create an account to post an ad?",
        answer: "No, just enter your name, email, and phone number."
    },
    {
        question: "How can I contact a seller?",
        answer: "Open the product page to see seller contact info."
    },
    {
        question: "Is it free to use Vendora?",
        answer: "Yes, it's completely free to browse and post ads."
    },
    {
        question: "Can I edit or delete my ad after posting it?",
        answer: "Editing will be available in future updates with a login system."
    },
    {
        question: "What kind of products can I list?",
        answer: "Electronics, furniture, vehicles, books, etc. No illegal/restricted items."
    },
    {
        question: "How do I search for specific items?",
        answer: "Use the search page with keywords, category, or location."
    }
];

const faqContainer = document.getElementById("faq-container");
faqContainer.innerHTML = "";

faqs.forEach((item, index) => {
    const box = document.createElement("div");
    box.className = "faq-box";

    const question = document.createElement("div");
    question.className = "faq-question";

    const qText = document.createElement("span");
    qText.textContent = `${index + 1}. ${item.question}`;

    const toggleIcon = document.createElement("span");
    toggleIcon.className = "faq-toggle";
    toggleIcon.textContent = "+";

    question.appendChild(qText);
    question.appendChild(toggleIcon);

    const answer = document.createElement("div");
    answer.className = "faq-answer";
    answer.textContent = item.answer;

    question.addEventListener("click", () => {
        const isVisible = answer.style.display === "block";
        answer.style.display = isVisible ? "none" : "block";
        toggleIcon.textContent = isVisible ? "+" : "−";
    });

    box.appendChild(question);
    box.appendChild(answer);
    faqContainer.appendChild(box);
});