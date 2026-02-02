
import React, { useState, useRef, useEffect, startTransition } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Welcome to Zoya's cinematic world. How can I assist you with her premium design and development services today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    
    // Use startTransition for state updates triggered by sync user input (form submission)
    startTransition(() => {
      setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
      setIsTyping(true);
    });

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are a sophisticated, high-end AI assistant for Zoya, an ultra-premium graphic designer and web developer. 
          Details:
          - Instagram: @zoya_asthetics_890
          - Specialty: Cinematic visual storytelling, luxury branding, React web development, high-end UI/UX.
          - Vibe: Premium, elegant, helpful, and concise.
          Respond with a touch of luxury. Always mention Zoya's Instagram when relevant for contact.`
        }
      });

      const assistantText = response.text || "I apologize, there was a minor disruption in the digital stream. Zoya remains at your service.";
      
      startTransition(() => {
        setMessages(prev => [...prev, { role: 'assistant', text: assistantText }]);
      });
    } catch (error) {
      console.error("AI Error:", error);
      startTransition(() => {
        setMessages(prev => [...prev, { role: 'assistant', text: "I'm currently recalibrating my creative circuits. Please reach out to Zoya directly on Instagram!" }]);
      });
    } finally {
      startTransition(() => {
        setIsTyping(false);
      });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[1000]">
      {isOpen ? (
        <div className="w-[350px] md:w-[400px] h-[500px] glass rounded-[3rem] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in slide-in-from-bottom-10 duration-500">
          <div className="p-6 bg-gradient-to-r from-[#6C5B7B] to-[#355C7D] flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-widest">Zoya AI</h3>
                <p className="text-[10px] text-white/70">Refined & Responsive</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-5 rounded-[1.5rem] text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-[#F8B195] text-[#1C1C1C] rounded-tr-none font-bold shadow-lg' 
                      : 'glass border-none rounded-tl-none text-[#EAEAEA] shadow-inner'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass p-5 rounded-2xl rounded-tl-none flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-[#F8B195] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#F8B195] rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-[#F8B195] rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-5 glass m-5 mt-0 rounded-2xl flex gap-3">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Inquire with Zoya..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#B0B0B0] font-light"
            />
            <button type="submit" className="p-3 bg-[#F8B195] text-[#1C1C1C] rounded-xl hover:scale-110 transition-all shadow-lg active:scale-95">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="p-6 bg-gradient-to-tr from-[#6C5B7B] to-[#355C7D] rounded-full shadow-[0_15px_40px_rgba(108,91,123,0.5)] hover:scale-110 transition-all duration-500 group relative"
        >
          <MessageSquare className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
          <div className="absolute top-0 right-0 w-4 h-4 bg-[#F8B195] rounded-full border-4 border-[#1C1C1C] animate-pulse"></div>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
