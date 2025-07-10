import { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Bonjour ! Comment puis-je vous aider ?' },
  ]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const faqs = [
    'Comment créer un compte ?',
    'Quels services proposez-vous ?',
    'Comment contacter le support ?',
    'Quels moyens de paiement acceptez-vous ?',
    'Avez-vous une app mobile ?',
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (msg) => {
    const userInput = msg || input;
    if (!userInput.trim()) return;

    const userMessage = { from: 'user', text: userInput };
    const botResponse = getBotResponse(userInput);

    setMessages((prev) => [...prev, userMessage, { from: 'bot', text: botResponse }]);
    setInput('');
  };

  const getBotResponse = (msg) => {
    const lowerMsg = msg.toLowerCase();
    if (lowerMsg.includes('compte')) return "Pour créer un compte, cliquez sur 'S'inscrire' en haut à droite.";
    if (lowerMsg.includes('service')) return 'Nous proposons des solutions de cybersécurité SaaS adaptées aux PME.';
    if (lowerMsg.includes('support')) return 'Contactez-nous via le formulaire ou à support@cyna.fr.';
    if (lowerMsg.includes('paiement')) return 'Nous acceptons les paiements par carte bancaire via Stripe.';
    if (lowerMsg.includes('app') || lowerMsg.includes('mobile')) return 'Oui, notre application mobile est disponible sur Android et iOS.';
    return "Désolé, je n’ai pas compris. Essayez une autre formulation.";
  };

  return (
    <>
      {open ? (
        <div className="chatbot-container">
          <div className="chatbot-box">
            <div className="chatbot-header">
              💬 Assistant Cyna
              <button className="chatbot-close" onClick={() => setOpen(false)}>✖</button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.from}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-faq">
              {faqs.map((q, i) => (
                <button key={i} onClick={() => handleSend(q)}>{q}</button>
              ))}
            </div>

            <div className="chatbot-input">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Écrivez votre message..."
              />
              <button onClick={() => handleSend()}>Envoyer</button>
            </div>
          </div>
        </div>
      ) : (
        <button className="chatbot-toggle" onClick={() => setOpen(true)}>
          💬
        </button>
      )}
    </>
  );
}
