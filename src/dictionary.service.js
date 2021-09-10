export default class Dictionary {
  static async checkWord(word) {
    try {
      const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.API_KEY}`)
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}