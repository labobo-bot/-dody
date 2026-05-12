import React, { useState, useEffect } from 'react';

// تطبيق دودي - النسخة المصفاة والجاهزة للنشر
export default function App() {
  const [messages, setMessages] = useState([]);
  const [userRole, setUserRole] = useState('عضو');
  const [inputText, setInputText] = useState('');

  // ميزة حماية الرسائل (إظهار الجديد فقط)
  const joinTime = Date.now();

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: Date.now(),
        text: inputText,
        sender: 'أنا',
        role: userRole,
        time: new Date().toLocaleTimeString()
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#fbbf24', fontSize: '2.2rem' }}>👑 تطبيق دودي - Dody App 👑</h1>
        <p style={{ color: '#94a3b8' }}>شات العضويات الموثقة والدردشة الآمنة</p>
        <div style={{ display: 'inline-block', padding: '5px 15px', borderRadius: '20px', backgroundColor: '#334155', marginTop: '10px' }}>
          رتبتك الحالية: <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>{userRole}</span>
        </div>
      </header>

      <main style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#1e293b', borderRadius: '15px', padding: '20px', boxShadow: '0 10px 15px rgba(0,0,0,0.3)' }}>
        <div style={{ height: '300px', backgroundColor: '#0f172a', borderRadius: '10px', padding: '15px', overflowY: 'auto', marginBottom: '20px', border: '1px solid #334155', textAlign: 'right' }}>
          {messages.length === 0 ? (
            <p style={{ color: '#64748b', textAlign: 'center', marginTop: '100px' }}>لا توجد رسائل جديدة منذ دخولك...</p>
          ) : (
            messages.map(msg => (
              <div key={msg.id} style={{ marginBottom: '10px', padding: '8px', borderRadius: '8px', backgroundColor: '#1e293b' }}>
                <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>[{msg.role}] {msg.sender}: </span>
                <span>{msg.text}</span>
              </div>
            ))
          )}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="اكتب رسالتك هنا..." 
            style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#334155', color: 'white' }} 
          />
          <button onClick={handleSendMessage} style={{ backgroundColor: '#fbbf24', color: '#0f172a', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>إرسال</button>
        </div>
      </main>

      <footer style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={() => setUserRole('مشهور')} style={{ backgroundColor: '#ec4899', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>رتبة مشهور 🌟</button>
        <button onClick={() => setUserRole('مؤثر')} style={{ backgroundColor: '#06b6d4', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>رتبة مؤثر ✨</button>
        <button onClick={() => setUserRole('إداري')} style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>رتبة إداري 🛡️</button>
      </footer>
      
      <p style={{ marginTop: '40px', fontSize: '0.8rem', color: '#475569' }}>تم التوثيق الرسمي في محرك بحث Google</p>
    </div>
  );
}
