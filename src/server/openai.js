
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

export async function sendMsgToOpenAI(message) {
  try {
    const res = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      }),
    });

    const data = await res.json();
    
    // Check if choices exists and contains the expected structure
    if (data.choices && data.choices.length > 0) {
      return data.choices[0].text.trim();
    } else {
      throw new Error('No valid response from OpenAI API');
    }
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return 'Sorry, there was an error processing your request. Please try again.';
  }
}
