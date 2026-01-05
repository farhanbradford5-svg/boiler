
export default {
  async fetch(request) {
    const data = await request.json();
    await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        personalizations:[{to:[{email:'you@example.com'}]}],
        from:{email:'no-reply@example.com'},
        subject:'New Contact Form Submission',
        content:[{type:'text/plain',value:JSON.stringify(data)}]
      })
    });
    return new Response('OK');
  }
};
