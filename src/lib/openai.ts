import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateServerName = async (answers: any) => {
  const prompt = `Erstelle einen kreativen Servernamen basierend auf:
Sprache: ${answers.language}
Stadt/Region: ${answers.city}
Fokus: ${answers.focus}
Extras: ${answers.extras}
Gib nur den Namen zurück, maximal 3 Wörter.`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.8,
  });

  return completion.choices[0].message?.content.trim() || 'ER:LC Server';
};
