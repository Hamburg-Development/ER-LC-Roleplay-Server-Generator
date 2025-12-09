import { useState } from 'react';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import { Answers } from '../types';

const questions = [
  { id: 'language', question: 'Welche Sprache soll der Server haben?', options: ['Deutsch', 'Englisch'] },
  { id: 'city', question: 'In welcher Stadt/Region soll der Server spielen?', options: ['Liberty County', 'Los Santos', 'Vice City'] },
  { id: 'focus', question: 'Welchen Fokus soll der Server haben?', options: ['Realistisch', 'Fun', 'RP-heavy', 'Polizei-lastig'] },
  { id: 'extras', question: 'Weitere Präferenzen?', options: ['Medics', 'Feuerwehr', 'Gang RP', 'Alle'] },
];

export default function Home() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    language: '',
    city: '',
    focus: '',
    extras: ''
  });
  const [serverName, setServerName] = useState('');

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[step].id]: answer });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      fetchServerName({ ...answers, [questions[step].id]: answer });
    }
  };

  const fetchServerName = async (allAnswers: Answers) => {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(allAnswers),
    });
    const data = await res.json();
    setServerName(data.name);
  };

  if (serverName) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Dein ER:LC Servername:</h1>
        <div className="text-xl p-4 bg-white rounded shadow">{serverName}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <ProgressBar step={step} total={questions.length} />
      <h1 className="text-2xl font-bold mb-4">{questions[step].question}</h1>
      <div className="flex flex-col space-y-2">
        {questions[step].options.map(option => (
          <Button key={option} text={option} onClick={() => handleAnswer(option)} />
        ))}
      </div>
    </div>
  );
}
