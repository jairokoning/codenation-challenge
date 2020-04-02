const condenation = require('../services/codenation');

module.exports = {
  async start(request, response) {
    const result = await condenation.store();
    
    await condenation.update(result);
    
    const data = await condenation.submit();
    
    return response.json(data)
  }
}
