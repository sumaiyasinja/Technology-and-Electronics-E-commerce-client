import  { useState } from 'react';

function ShopFAQAccordion() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqItems = [
    {
      question: "How can I place an order?",
      answer: "To place an order, simply browse our products and add the items you want to your cart. Then proceed to the checkout page to complete your purchase."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods, including credit/debit cards and PayPal. You can choose your preferred method during checkout."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping. We can deliver our products to customers all around the world."
    },
  ];

  const handleQuestionChange = (index) => {
    setSelectedQuestion(index);
  };

  return (
    <div className='m-7 container mx-auto'>
      <div className="text-4xl font-semibold text-center py-5">Frequently Asked Questions</div>
      {faqItems.map((faq, index) => (
        <div className="my-4 collapse bg-base-200 text-black" key={index}>
          <input
            type="radio"
            name="shop-faq-accordion"
            checked={index === selectedQuestion}
            onChange={() => handleQuestionChange(index)}
          />
          <div className="collapse-title text-xl font-medium">
            {faq.question}
          </div>
          <div className="collapse-content">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopFAQAccordion;