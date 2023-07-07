export default {
  async fetch(request) {

    let pkg = {
      'apikey':'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',
      'data': {
        'model':'gpt-3.5-turbo',
        'messages':[{'role':'user','content':'你使用的是什么模型？是最新的模型吗'}]
      }
    }

    let config = {
      headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ pkg.apikey,
      },
      method:'POST',
      body:JSON.stringify(pkg.data)
    }

    return fetch('https://api.openai.com/v1/chat/completions', config);
  },
};
